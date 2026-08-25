# The Amber Lantern — Vídeo 03
Set 3, a mesa dos aventureiros. O primeiro vídeo com as três correções:
faixa de abertura cheia, preâmbulo de ambiência e capa com texto.

---

## MONTAGEM

```
./montar-playlist.sh -d faixas -i capa3.png -a ambiencia3.wav -b -26 -x 4 -p 3 \
  -t "The map is on the table and the horses leave at dawn. One more round first." \
  -s "SEU_LINK_SPOTIFY" -o amber-lantern-03.mp4
```

**Ambiência:** lareira + murmúrio de conversa mais presente que no vídeo 01 (suba de
−10 dB para −8 dB na mistura) + chuva distante. A taverna está mais cheia.

**A faixa C01 (`The Party Gathers`) precisa ser regerada** com o bloco de abertura,
aquele que entra cheio desde o primeiro compasso. Foi a queda de retenção nos
primeiros segundos do vídeo 01 que motivou isso.

---

## TÍTULO

```
Fantasy Tavern Ambience for D&D Nights — Lute, Fire & Distant Rain | 1 Hour
```

---

## DESCRIÇÃO

```
The map is on the table, the horses leave at dawn, and nobody is in a hurry to go
to bed. One more round first.

One hour of fantasy tavern music and ambience — lute, fiddle, crackling fire and
distant rain — made to run under a tabletop session, a long read, or a night of
work. No battle music, nothing that spikes.

Listen on Spotify: [SEU LINK]

TRACKLIST
[COLE AQUI O CONTEÚDO DE tracklist.txt]

ABOUT
The Amber Lantern is an inn that exists in every century at once. Every week we
open a different room. Pull up a chair by the fire.

New rooms every Monday, Wednesday and Friday.

Original music, composed and produced for this channel with the help of AI
tools. All rights reserved.

#dndmusic #fantasyambience #tavernmusic
```

---

## TAGS

```
d&d background music, dnd ambience, fantasy tavern ambience, tavern music,
rpg background music, medieval tavern ambience, fantasy ambience, lute music,
dungeons and dragons music, tabletop rpg music, medieval music, celtic folk,
1 hour ambience, cozy fantasy, The Amber Lantern
```

`d&d background music` vem primeiro de propósito: é o cluster que os dados do
vídeo 01 revelaram (Baldur's Gate, Elden Ring, Zelda).

---

## COMENTÁRIO FIXO

```
Roll for initiative — or just let it play. 🏮

The album is on Spotify if you'd rather take it to the table:
[SEU LINK]

Tell me below: what are you playing tonight?
```

---

## A CAPA — agora com texto

A cena continua a mesma do documento dos sets (mesa de carvalho vista de cima,
mapa, dados, caneca, adaga, alaúde na banqueta). O que muda é que agora ela leva
texto, no espírito de capa de livro — a lição do Gates of Vortalania.

Gere a cena limpa no ChatGPT e aplique o texto por cima:

```
F=/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf
FB=/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf

ffmpeg -i capa3-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='The Tavern':fontcolor=0xF3E3C3:fontsize=78:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='The Long Table':fontcolor=0xE8C46B:fontsize=118:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='THE AMBER LANTERN':fontcolor=0xD9C9A8@0.8:fontsize=32:x=(w-tw)/2:y=h*0.31:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa3.jpg
```

Três níveis: a linha pequena de série, o nome grande do episódio, e a assinatura
do canal em corpo miúdo. O texto fica na **faixa superior**, que é justamente a
área que o prompt de capa manda deixar vazia — assim ele nunca briga com a
lareira nem com os objetos da mesa.

**Miniatura**, a partir da capa pronta:

```
ffmpeg -i capa3.jpg -vf "scale=1280:720,eq=contrast=1.10:saturation=1.12" -q:v 2 thumb3.jpg
```

No Mac o caminho das fontes é outro — troque por
`/System/Library/Fonts/Supplemental/Times New Roman.ttf` ou qualquer serifa que
você tenha.

---

## O QUE ESTE VÍDEO ESTÁ TESTANDO

Três variáveis mudaram de uma vez, o que não é ideal, mas o canal ainda é novo
demais para testes isolados:

1. **Cluster de RPG** no título e nas tags
2. **Abertura cheia** mais três segundos de ambiência
3. **Capa com texto**

Na sexta, compare com os vídeos 01 e 02. Se subir, o mais provável é que a
abertura e a capa expliquem — o cluster leva mais tempo para o algoritmo
absorver. Anote no documento de acompanhamento.
