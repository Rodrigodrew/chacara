#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# montar-playlist.sh — monta um video de playlist longa para YouTube
#
#   ./montar-playlist.sh -d faixas -i capa.png -o video.mp4
#   ./montar-playlist.sh -d faixas -v loop.mp4 -a fogueira.wav -x 4 -o video.mp4
#
# Faz, em ordem:
#   1. ordena as faixas, emenda com crossfade (sem silencio entre elas)
#   2. mistura uma camada de ambiencia opcional (fogueira, chuva, taverna)
#   3. normaliza para -14 LUFS, o padrao de streaming
#   4. renderiza 1080p com capa estatica ou video em loop
#   5. gera tracklist.txt com os tempos, pronto para colar na descricao
#
# Requer: ffmpeg e ffprobe.
# ---------------------------------------------------------------------------
set -euo pipefail

DIR="faixas"; IMG=""; LOOP=""; AMB=""; AMB_DB="-26"; XF="3"; OUT="video.mp4"; LUFS="-14"

usage() {
  cat <<TXT
uso: $0 -d <pasta_das_faixas> (-i <capa.png> | -v <loop.mp4>) [opcoes]

  -d  pasta com as faixas .mp3/.wav/.flac        (padrao: faixas)
  -i  imagem de capa para fundo estatico
  -v  video curto para rodar em loop             (use -i OU -v)
  -a  arquivo de ambiencia para mixar por baixo  (opcional)
  -b  volume da ambiencia em dB                  (padrao: -26)
  -x  duracao do crossfade entre faixas, em s    (padrao: 3)
  -l  alvo de loudness em LUFS                   (padrao: -14)
  -o  arquivo de saida                           (padrao: video.mp4)
TXT
  exit 1
}

while getopts "d:i:v:a:b:x:l:o:h" opt; do
  case $opt in
    d) DIR="$OPTARG" ;; i) IMG="$OPTARG" ;; v) LOOP="$OPTARG" ;;
    a) AMB="$OPTARG" ;; b) AMB_DB="$OPTARG" ;; x) XF="$OPTARG" ;;
    l) LUFS="$OPTARG" ;; o) OUT="$OPTARG" ;; *) usage ;;
  esac
done

command -v ffmpeg  >/dev/null || { echo "erro: ffmpeg nao encontrado"; exit 1; }
command -v ffprobe >/dev/null || { echo "erro: ffprobe nao encontrado"; exit 1; }
[ -d "$DIR" ] || { echo "erro: pasta '$DIR' nao existe"; exit 1; }
[ -n "$IMG$LOOP" ] || { echo "erro: informe -i capa.png ou -v loop.mp4"; usage; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --- 1. ordena as faixas ---------------------------------------------------
mapfile -t TRACKS < <(find "$DIR" -maxdepth 1 -type f \
  \( -iname '*.mp3' -o -iname '*.wav' -o -iname '*.flac' -o -iname '*.m4a' \) | sort -V)
[ ${#TRACKS[@]} -gt 0 ] || { echo "erro: nenhuma faixa em '$DIR'"; exit 1; }
echo ">> ${#TRACKS[@]} faixas encontradas"

# --- 2. tracklist com os tempos (descontando os crossfades) ----------------
: > tracklist.txt
acc=0
for i in "${!TRACKS[@]}"; do
  f="${TRACKS[$i]}"
  base="$(basename "${f%.*}")"
  nome="$(echo "$base" | sed -E 's/^[0-9]+[-_. ]*//')"
  printf '%02d:%02d:%02d  %s\n' $((acc/3600)) $((acc%3600/60)) $((acc%60)) "$nome" >> tracklist.txt
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
  dur=${dur%.*}
  acc=$((acc + dur - (i < ${#TRACKS[@]}-1 ? XF : 0)))
done
echo ">> tracklist.txt gerado  (duracao total ~$((acc/60)) min)"

# --- 3. emenda + ambiencia + normalizacao, tudo numa passada -------------
#   Monta o grafo de filtros: cada faixa e' padronizada em 44.1k estereo,
#   emendada em cadeia com acrossfade, e o resultado recebe (opcional) a
#   ambiencia em loop e a normalizacao. Uma unica chamada de ffmpeg, em vez
#   de reescrever o WAV inteiro a cada faixa.
INPUTS=(); GRAPH=""; N=${#TRACKS[@]}
for f in "${TRACKS[@]}"; do INPUTS+=(-i "$f"); done
for ((i=0; i<N; i++)); do
  GRAPH+="[$i:a]aformat=sample_rates=44100:channel_layouts=stereo[s$i];"
done
if [ "$N" -eq 1 ]; then
  LAST="[s0]"
else
  PREV="[s0]"
  for ((i=1; i<N; i++)); do
    GRAPH+="${PREV}[s$i]acrossfade=d=$XF:c1=tri:c2=tri[x$i];"
    PREV="[x$i]"
  done
  LAST="$PREV"
fi

if [ -n "$AMB" ]; then
  echo ">> emendando $N faixas + ambiencia em ${AMB_DB}dB"
  INPUTS+=(-stream_loop -1 -i "$AMB")
  GRAPH+="[${N}:a]aformat=sample_rates=44100:channel_layouts=stereo,volume=${AMB_DB}dB[amb];"
  GRAPH+="${LAST}[amb]amix=inputs=2:duration=first:normalize=0[mix];"
  GRAPH+="[mix]loudnorm=I=${LUFS}:TP=-1.5:LRA=11[out]"
else
  echo ">> emendando $N faixas"
  GRAPH+="${LAST}loudnorm=I=${LUFS}:TP=-1.5:LRA=11[out]"
fi

ffmpeg -v error -y "${INPUTS[@]}" -filter_complex "$GRAPH" \
  -map "[out]" -ar 44100 -ac 2 "$TMP/set.wav"
echo ">> audio pronto e normalizado em ${LUFS} LUFS"

# --- 5. render -------------------------------------------------------------
echo ">> renderizando video (isso demora)"
if [ -n "$LOOP" ]; then
  ffmpeg -v error -y -stream_loop -1 -i "$LOOP" -i "$TMP/set.wav" \
    -map 0:v -map 1:a -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24" \
    -c:v libx264 -preset veryfast -crf 21 -pix_fmt yuv420p \
    -c:a aac -b:a 320k -movflags +faststart -shortest "$OUT"
else
  ffmpeg -v error -y -loop 1 -framerate 2 -i "$IMG" -i "$TMP/set.wav" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
    -c:v libx264 -preset veryslow -tune stillimage -crf 20 -pix_fmt yuv420p \
    -c:a aac -b:a 320k -movflags +faststart -shortest "$OUT"
fi

echo ">> pronto: $OUT  ($(du -h "$OUT" | cut -f1))"
echo ">> cole o conteudo de tracklist.txt na descricao do video"
