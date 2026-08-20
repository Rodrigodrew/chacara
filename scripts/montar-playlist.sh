#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# montar-playlist.sh — monta videos de playlist longa para YouTube
#
#   um video:
#     ./montar-playlist.sh -d faixas -i capa.png -o video.mp4
#     ./montar-playlist.sh -d faixas -v loop.mp4 -a fogueira.wav -x 4 -o video.mp4
#
#   varios de uma vez (modo lote):
#     ./montar-playlist.sh -B semana -s "https://open.spotify.com/artist/XXXX"
#
# Faz, em ordem:
#   1. ordena as faixas pelo numero no comeco do nome
#   2. emenda tudo com crossfade e mixa a ambiencia numa unica passada
#   3. normaliza para -14 LUFS, o padrao de streaming
#   4. renderiza 1080p com capa estatica ou video em loop
#   5. escreve tracklist.txt e descricao.txt prontos para o YouTube
#
# Estrutura esperada no modo lote — uma subpasta por video:
#   semana/
#     01-viola-ao-amanhecer/
#       faixas/          (ou os audios soltos na propria pasta)
#       capa.png         (ou loop.mp4)
#       ambiencia.wav    (opcional)
#       info.txt         (opcional: 1a linha = gancho da descricao)
#
# Requer: ffmpeg e ffprobe.
# ---------------------------------------------------------------------------
set -euo pipefail

DIR=""; IMG=""; LOOP=""; AMB=""; AMB_DB="-26"; XF="3"; OUT=""; LUFS="-14"
LOTE=""; TITULO=""; SPOTIFY=""; RODAPE=""

usage() {
  cat <<TXT
uso: $0 -d <pasta> (-i capa.png | -v loop.mp4) [opcoes]
     $0 -B <pasta_mae> [opcoes]                # modo lote

  -d  pasta com as faixas de audio
  -i  imagem de capa para fundo estatico
  -v  video curto para rodar em loop            (use -i OU -v)
  -a  ambiencia mixada por baixo                (opcional)
  -b  volume da ambiencia em dB                 (padrao: -26)
  -x  crossfade entre faixas, em segundos       (padrao: 3)
  -l  alvo de loudness em LUFS                  (padrao: -14)
  -o  arquivo de saida                          (padrao: video.mp4)

  -B  modo lote: monta um video por subpasta de <pasta_mae>
  -t  gancho da descricao (1a linha)            (lote: vem do info.txt)
  -s  link do perfil no Spotify
  -r  arquivo com o rodape fixo da descricao
TXT
  exit 1
}

while getopts "d:i:v:a:b:x:l:o:B:t:s:r:h" opt; do
  case $opt in
    d) DIR="$OPTARG" ;; i) IMG="$OPTARG" ;; v) LOOP="$OPTARG" ;;
    a) AMB="$OPTARG" ;; b) AMB_DB="$OPTARG" ;; x) XF="$OPTARG" ;;
    l) LUFS="$OPTARG" ;; o) OUT="$OPTARG" ;; B) LOTE="$OPTARG" ;;
    t) TITULO="$OPTARG" ;; s) SPOTIFY="$OPTARG" ;; r) RODAPE="$OPTARG" ;;
    *) usage ;;
  esac
done

command -v ffmpeg  >/dev/null || { echo "erro: ffmpeg nao encontrado"; exit 1; }
command -v ffprobe >/dev/null || { echo "erro: ffprobe nao encontrado"; exit 1; }

rodape_texto() {
  if [ -n "$RODAPE" ] && [ -f "$RODAPE" ]; then
    cat "$RODAPE"
  else
    cat <<TXT
Musica original, composta e produzida para este canal com apoio de
ferramentas de inteligencia artificial. Todos os direitos reservados.

Inscreva-se para acompanhar os proximos lancamentos.
TXT
  fi
}

# --- monta um video --------------------------------------------------------
# $1 pasta das faixas · $2 capa · $3 loop · $4 ambiencia · $5 saida · $6 gancho
montar_um() {
  local dir="$1" img="$2" loop="$3" amb="$4" out="$5" titulo="$6"
  local outdir; outdir="$(dirname "$out")"
  local tmp; tmp="$(mktemp -d)"
  # shellcheck disable=SC2064
  trap "rm -rf '$tmp'" RETURN

  mapfile -t TRACKS < <(find "$dir" -maxdepth 1 -type f \
    \( -iname '*.mp3' -o -iname '*.wav' -o -iname '*.flac' -o -iname '*.m4a' \) | sort -V)
  local n=${#TRACKS[@]}
  [ "$n" -gt 0 ] || { echo "!! nenhuma faixa em '$dir', pulando"; return 1; }
  echo ">> $n faixas em $(basename "$dir")"

  # --- tracklist com os tempos, descontando os crossfades ---
  local acc=0 i f base nome dur
  : > "$outdir/tracklist.txt"
  for i in "${!TRACKS[@]}"; do
    f="${TRACKS[$i]}"
    base="$(basename "${f%.*}")"
    nome="$(echo "$base" | sed -E 's/^[0-9]+[-_. ]*//')"
    printf '%02d:%02d:%02d  %s\n' $((acc/3600)) $((acc%3600/60)) $((acc%60)) "$nome" \
      >> "$outdir/tracklist.txt"
    dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f"); dur=${dur%.*}
    acc=$((acc + dur - (i < n-1 ? XF : 0)))
  done

  # --- descricao pronta para colar ---
  {
    [ -n "$titulo" ] && { echo "$titulo"; echo ""; }
    [ -n "$SPOTIFY" ] && { echo "Ouca o album completo no Spotify: $SPOTIFY"; echo ""; }
    echo "TRACKLIST"
    cat "$outdir/tracklist.txt"
    echo ""
    rodape_texto
  } > "$outdir/descricao.txt"

  # --- emenda + ambiencia + normalizacao, tudo numa passada ---
  local INPUTS=() GRAPH="" PREV LAST
  for f in "${TRACKS[@]}"; do INPUTS+=(-i "$f"); done
  for ((i=0; i<n; i++)); do
    GRAPH+="[$i:a]aformat=sample_rates=44100:channel_layouts=stereo[s$i];"
  done
  if [ "$n" -eq 1 ]; then
    LAST="[s0]"
  else
    PREV="[s0]"
    for ((i=1; i<n; i++)); do
      GRAPH+="${PREV}[s$i]acrossfade=d=$XF:c1=tri:c2=tri[x$i];"
      PREV="[x$i]"
    done
    LAST="$PREV"
  fi

  if [ -n "$amb" ]; then
    echo ">> emendando + ambiencia em ${AMB_DB}dB"
    INPUTS+=(-stream_loop -1 -i "$amb")
    GRAPH+="[${n}:a]aformat=sample_rates=44100:channel_layouts=stereo,volume=${AMB_DB}dB[amb];"
    GRAPH+="${LAST}[amb]amix=inputs=2:duration=first:normalize=0[mix];"
    GRAPH+="[mix]loudnorm=I=${LUFS}:TP=-1.5:LRA=11[out]"
  else
    echo ">> emendando as faixas"
    GRAPH+="${LAST}loudnorm=I=${LUFS}:TP=-1.5:LRA=11[out]"
  fi

  ffmpeg -v error -y "${INPUTS[@]}" -filter_complex "$GRAPH" \
    -map "[out]" -ar 44100 -ac 2 "$tmp/set.wav"
  echo ">> audio normalizado em ${LUFS} LUFS"

  # --- render ---
  echo ">> renderizando (isso demora)"
  if [ -n "$loop" ]; then
    ffmpeg -v error -y -stream_loop -1 -i "$loop" -i "$tmp/set.wav" \
      -map 0:v -map 1:a -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24" \
      -c:v libx264 -preset veryfast -crf 21 -pix_fmt yuv420p \
      -c:a aac -b:a 320k -movflags +faststart -shortest "$out"
  else
    ffmpeg -v error -y -loop 1 -framerate 2 -i "$img" -i "$tmp/set.wav" \
      -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
      -c:v libx264 -preset veryslow -tune stillimage -crf 20 -pix_fmt yuv420p \
      -c:a aac -b:a 320k -movflags +faststart -shortest "$out"
  fi
  echo ">> pronto: $out  ($(du -h "$out" | cut -f1))  ~$((acc/60)) min"
}

# --- descobre os arquivos de uma pasta de video ----------------------------
detectar() {
  local base="$1"
  D_FAIXAS="$base"; [ -d "$base/faixas" ] && D_FAIXAS="$base/faixas"
  D_IMG=""; D_LOOP=""; D_AMB=""; D_TITULO=""
  for c in capa.png capa.jpg capa.jpeg; do
    [ -f "$base/$c" ] && { D_IMG="$base/$c"; break; }
  done
  for c in loop.mp4 loop.mov loop.webm; do
    [ -f "$base/$c" ] && { D_LOOP="$base/$c"; break; }
  done
  for c in ambiencia.wav ambiencia.mp3 ambiencia.flac; do
    [ -f "$base/$c" ] && { D_AMB="$base/$c"; break; }
  done
  [ -f "$base/info.txt" ] && D_TITULO="$(head -1 "$base/info.txt")"
  [ -n "$D_TITULO" ] || D_TITULO="$(basename "$base" | sed -E 's/^[0-9]+[-_. ]*//; s/-/ /g')"
}

# --- modo lote -------------------------------------------------------------
if [ -n "$LOTE" ]; then
  [ -d "$LOTE" ] || { echo "erro: pasta '$LOTE' nao existe"; exit 1; }
  ok=0; falhou=0
  for sub in "$LOTE"/*/; do
    sub="${sub%/}"
    [ -d "$sub" ] || continue
    echo ""
    echo "=== $(basename "$sub") ==="
    detectar "$sub"
    if [ -z "$D_IMG$D_LOOP" ]; then
      echo "!! sem capa.png nem loop.mp4, pulando"; falhou=$((falhou+1)); continue
    fi
    if montar_um "$D_FAIXAS" "$D_IMG" "$D_LOOP" "$D_AMB" \
                 "$sub/$(basename "$sub").mp4" "$D_TITULO"; then
      ok=$((ok+1))
    else
      falhou=$((falhou+1))
    fi
  done
  echo ""
  echo ">> lote concluido: $ok video(s) montado(s), $falhou pulado(s)"
  exit 0
fi

# --- modo individual -------------------------------------------------------
[ -n "$DIR" ] || { echo "erro: informe -d <pasta> ou -B <pasta_mae>"; usage; }
[ -d "$DIR" ] || { echo "erro: pasta '$DIR' nao existe"; exit 1; }
[ -n "$IMG$LOOP" ] || { echo "erro: informe -i capa.png ou -v loop.mp4"; usage; }
[ -n "$OUT" ] || OUT="video.mp4"
montar_um "$DIR" "$IMG" "$LOOP" "$AMB" "$OUT" "$TITULO"
