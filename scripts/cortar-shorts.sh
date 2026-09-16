#!/usr/bin/env bash
# cortar-shorts.sh - corta os 12 trechos dos Shorts do Ze Sereno
#
#   ./scripts/cortar-shorts.sh              # corta os doze
#   ./scripts/cortar-shorts.sh 04           # corta so o Short 04
#   ./scripts/cortar-shorts.sh -d 30        # trechos de 30s em vez de 40s
#   ./scripts/cortar-shorts.sh -p faixas    # onde estao os audios (padrao: faixas)
#
# COMO ELE ACHA O REFRAO
#   Nao mede o audio: calcula. Cada faixa do cancioneiro tem a estrutura marcada
#   ([Intro], [Verse 1], [Chorus]...). O refrao cai sempre na mesma FRACAO da
#   faixa, entao o script le a duracao real com ffprobe e multiplica.
#   A conta erra de 5 a 15 segundos, porque o Suno estica intro e solo como quer.
#
#   ENTAO: rode, ouca os doze, e para os que erraram escreva o segundo certo na
#   coluna FIXO da tabela abaixo. Uma vez acertado, fica acertado.
#
# O corte comeca 4 segundos ANTES da frase, para o ouvinte entrar com um
# instante de viola antes do verso. Em cima da frase, soa cortado.

set -euo pipefail

PASTA=faixas
DUR=40
RECUO=4        # segundos antes da frase

while getopts "p:d:r:h" o; do
  case $o in
    p) PASTA="$OPTARG" ;;
    d) DUR="$OPTARG" ;;
    r) RECUO="$OPTARG" ;;
    h) sed -n '2,30p' "$0"; exit 0 ;;
    *) exit 1 ;;
  esac
done
shift $((OPTIND-1))

# short | faixa | fracao | FIXO (segundo exato; deixe vazio para calcular) | frase
TABELA='
01|07|0.635||Diz pra mae que eu to bem
02|07|0.365||Guarda a minha viola, pai
03|10|0.365||Quando chegar minha hora
04|01|0.365||Sereno da madrugada
05|17|0.269||Moenda velha, moenda
06|15|0.293||Rio das Almas, me leva
07|18|0.271||O ceu, manda uma nuvem
08|20|0.293||Benzedeira do arraial
09|03|0.403||Cafe coado no pano
10|08|0.403||Chuva na telha de barro
11|19|0.269||Valsa, valsa, Sinha Rosa
12|13|0.293||Moirao de aroeira velha
'

ALVO="${1:-}"
printf "%-6s %-6s %-9s %-9s %s\n" SHORT FAIXA DURACAO INICIO FRASE
printf -- "---------------------------------------------------------------\n"

echo "$TABELA" | grep -v '^$' | while IFS='|' read -r short faixa frac fixo frase; do
  [ -n "$ALVO" ] && [ "$ALVO" != "$short" ] && continue

  arq=$(ls "$PASTA"/"$faixa"*.wav "$PASTA"/"$faixa"*.mp3 2>/dev/null | head -1 || true)
  if [ -z "$arq" ]; then
    printf "%-6s %-6s %s\n" "$short" "$faixa" "!! nao achei $PASTA/$faixa*"
    continue
  fi

  total=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$arq")
  if [ -n "$fixo" ]; then
    marca="$fixo"
  else
    marca=$(awk -v t="$total" -v f="$frac" 'BEGIN{printf "%.0f", t*f}')
  fi
  ini=$(awk -v m="$marca" -v r="$RECUO" 'BEGIN{v=m-r; if(v<0)v=0; printf "%.0f", v}')

  fim=$(awk -v d="$DUR" 'BEGIN{printf "%.1f", d-1.5}')
  ffmpeg -nostdin -v error -y -ss "$ini" -t "$DUR" -i "$arq" \
    -af "afade=t=in:st=0:d=1,afade=t=out:st=$fim:d=1.5,loudnorm=I=-14:TP=-1.5:LRA=11" \
    -c:a pcm_s16le "corte$short.wav"

  printf "%-6s %-6s %-9s %-9s %s\n" "$short" "$faixa" \
    "$(awk -v t="$total" 'BEGIN{printf "%d:%02d", int(t/60), int(t)%60}')" \
    "$(awk -v i="$ini" 'BEGIN{printf "%d:%02d", int(i/60), int(i)%60}')" \
    "$frase"
done
