# Zé Sereno — os 12 Shorts

Os doze vídeos longos já estão programados. Este documento é a outra metade do
motor: os Shorts que trazem inscrito, enquanto o vídeo longo traz dinheiro.

---

## Por que Shorts, e por que assim

Os três canais que analisamos separam claramente as funções:

| Canal | Inscritos/dia | Receita/mês | RPM |
|---|---|---|---|
| Chora Viola (só Shorts) | **84** | US$ 7 | US$ 0,073 |
| Rancho do Modão (longos) | 11 | **US$ 59** | US$ 0,343 |

O Short não é para monetizar. É para o algoritmo levar o canal a quem nunca ouviu
falar dele — e o inscrito então cai no vídeo longo, que paga 4,7× mais por mil
views. **Todo Short leva para o vídeo longo correspondente.**

### Três coisas que os vencedores fazem e nós vamos fazer

**1 · O título é a frase, não o gênero.** Os Shorts do Chora Viola, com título em
primeira pessoa e carga emocional, fazem de 28 a 158 mil views. Os do Rancho do
Modão, que abrem com o prefixo de gênero "MODÃO RAIZ PRA QUEM…", fazem de 1 a 7,6
mil. Mesmo nicho, mesma qualidade, 20× de diferença. **O gênero vai no fim, como
hashtag.**

**2 · O texto na imagem pesa mais que o título.** As capas dos Shorts que ganham
trazem a frase escrita grande: "RESPEITO VALE MAIS QUE DINHEIRO", "ORGULHO NÃO
ABRAÇA NINGUÉM", "ELA DEIXAVA A LUZ ACESA". O usuário lê antes de ouvir. Por isso
cada Short abaixo tem a frase montada em quatro linhas grandes.

**3 · Rosto humano na cena.** Todo Short vencedor dos três canais tem rosto. Os
prompts abaixo colocam o Zé Sereno ou o personagem da letra em quadro — diferente
dos vídeos longos, onde a paisagem sozinha funciona.

E uma coisa que eles fazem e nós **não** vamos fazer: o SertanejoiaRaiz corta os
Shorts no OpusClip e o resultado vem com fogos de artifício e plateia de show
genéricos, sem relação com a música. É ruído; o canal apanha por isso.

### A frase é da letra, não é inventada

Todas as doze frases abaixo saem literalmente do cancioneiro
(`docs/letras-ze-sereno.md`). Isso importa por dois motivos: o Short entrega
exatamente o que promete quando o refrão entra, e o texto que aparece na tela é
obra nossa, registrada — não é legenda genérica.

---

## O padrão fixo

### Fontes

```bash
F=/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf
FB=/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf
```

No Mac: `/System/Library/Fonts/Supplemental/Times New Roman.ttf` e
`Times New Roman Bold.ttf`.

### O corpo da letra: 88

Medi as 48 linhas dos doze Shorts em 1080 px de largura. A mais larga
("EU TENHO ALGUMA") ocupa **879 px dos 1080** — sobram 100 px de cada lado. Testei
também 96, que leva a linha mais larga a 958 px e encosta na área onde a interface
do YouTube desenha os ícones da direita.

**Corpo 88 nas quatro linhas, nos doze Shorts.** Identidade constante, como nas capas.

Renderizei um Short completo para conferir: o bloco de texto ocupa x 102–977 e
y 300–748, ou seja, fica inteiro acima do terço inferior, onde o YouTube escreve
título, canal e descrição.

### O véu (faça uma vez só)

Foto de fazenda com sol tem muita luz alta — texto claro some em cima dela. Este
comando gera um degradê preto transparente que escurece só a faixa do texto, sem
borda dura:

```bash
ffmpeg -f lavfi -i color=black:s=1080x1920 -vf \
"format=rgba,geq=r=0:g=0:b=0:a='if(lt(Y,160),0,if(lt(Y,340),150*(Y-160)/180,if(lt(Y,790),150,if(lt(Y,980),150*(980-Y)/190,0))))'" \
-frames:v 1 veu.png
```

Gere `veu.png` uma vez e use nos doze.

### O corte do áudio

Cada Short usa **45 segundos** em volta do refrão. Abra a faixa, ache o segundo em
que o refrão começa e tire 4 segundos: o Short precisa entregar a frase logo, não
depois de uma introdução de viola.

```bash
# ajuste o -ss para 4 segundos antes do refrão
ffmpeg -ss 0:41 -t 45 -i faixas/07-carta-pro-meu-pai.wav \
  -af "afade=t=in:st=0:d=1,afade=t=out:st=44:d=1.5,loudnorm=I=-14:TP=-1.5:LRA=11" \
  -c:a pcm_s16le corte07.wav
```

Nas faixas de 1 a 10 (cerca de 2m30) o primeiro refrão costuma cair entre 0:45 e
1:10. Nas de 11 a 20 (formato longo) entre 1:10 e 1:40.

### O comando de montagem

O mesmo nos doze, mudando só a imagem, as quatro linhas e o número:

```bash
ffmpeg -loop 1 -i shortNN-limpa.png -i veu.png -i corteNN.wav -filter_complex "
[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,
eq=contrast=1.08:saturation=1.05[bg];
[bg][1:v]overlay=0:0,
drawtext=fontfile=$FB:text='LINHA 1':fontcolor=0xF6E6C6:fontsize=88:x=(w-tw)/2:y=300:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='LINHA 2':fontcolor=0xF6E6C6:fontsize=88:x=(w-tw)/2:y=412:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='LINHA 3':fontcolor=0xE8C46B:fontsize=88:x=(w-tw)/2:y=560:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='LINHA 4':fontcolor=0xE8C46B:fontsize=88:x=(w-tw)/2:y=672:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='ZÉ SERENO · MODA DE VIOLA':fontcolor=0xD9C9A8@0.9:fontsize=40:x=(w-tw)/2:y=1560:shadowcolor=black@0.8:shadowx=0:shadowy=2[v]
" -map "[v]" -map 2:a -c:v libx264 -preset veryfast -tune stillimage -pix_fmt yuv420p \
  -c:a aac -b:a 192k -shortest shortNN.mp4
```

As duas primeiras linhas saem em creme (`F6E6C6`), as duas últimas em âmbar
(`E8C46B`) — é a virada da frase, o mesmo par de cores das capas dos longos.

### O bloco-base das imagens (vertical)

Cole antes de cada prompt de cena, e gere os doze na mesma conversa do GPT:

> Fotografia em filme 35mm com grão visível, luz natural, paleta de ocre, verde-seco
> e marrom terroso, profundidade de campo rasa, **formato retrato vertical 9:16**,
> sem nenhum texto e sem marca d'água. A faixa entre 15% e 45% da altura deve ficar
> escura e sem detalhe importante — é onde entra o texto. O rosto do personagem deve
> aparecer no terço inferior do enquadramento.
>
> Personagem recorrente: Zé Sereno, homem brasileiro de uns setenta anos, magro,
> pele marcada de sol, bigode grisalho, chapéu de palha surrado e camisa xadrez
> desbotada de mangas dobradas.

---

# Os 12 Shorts

---

## Short 01 · da faixa 07 — Carta pro Meu Pai

**Título**

`Eu disse pra minha mãe que tava tudo bem 💔 #modadeviola #sertanejoraiz`

**Frase na tela**

```
DIZ PRA MÃE
QUE EU TÔ BEM
MESMO QUE
EU NÃO ESTEJA
```

**Corte:** o terceiro verso, depois do solo de viola ("Diz pra mãe que eu tô bem").
Nas faixas emocionais esse verso costuma cair perto de 1:30 — comece 4 segundos antes.

**Cena**

```
Um homem de uns quarenta anos sentado na beirada de uma cama de pensão simples numa cidade grande, à noite, segurando um celular desligado na mão e olhando para o chão. Rosto cansado, barba por fazer, camisa de trabalho amassada. Uma viola caipira encostada na parede atrás, coberta de pó. Pela janela sem cortina, prédios cinzentos e luz fria. Um abajur fraco ilumina o rosto de lado com amarelo quente; o resto do quarto fica azulado e frio.
```

**Comando**

```bash
ffmpeg -loop 1 -i short01-limpa.png -i veu.png -i corte01.wav -filter_complex "
[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,
eq=contrast=1.08:saturation=1.05[bg];
[bg][1:v]overlay=0:0,
drawtext=fontfile=$FB:text='DIZ PRA MÃE':fontcolor=0xF6E6C6:fontsize=88:x=(w-tw)/2:y=300:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='QUE EU TÔ BEM':fontcolor=0xF6E6C6:fontsize=88:x=(w-tw)/2:y=412:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='MESMO QUE':fontcolor=0xE8C46B:fontsize=88:x=(w-tw)/2:y=560:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$FB:text='EU NÃO ESTEJA':fontcolor=0xE8C46B:fontsize=88:x=(w-tw)/2:y=672:shadowcolor=black@0.85:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='ZÉ SERENO · MODA DE VIOLA':fontcolor=0xD9C9A8@0.9:fontsize=40:x=(w-tw)/2:y=1560:shadowcolor=black@0.8:shadowx=0:shadowy=2[v]
" -map "[v]" -map 2:a -c:v libx264 -preset veryfast -tune stillimage -pix_fmt yuv420p \
  -c:a aac -b:a 192k -shortest short01.mp4
```

---

## Short 02 · da faixa 07 — Carta pro Meu Pai

**Título**

`Ele foi embora e deixou a viola pendurada 🪕 #sertanejoraiz #modadeviola`

**Frase na tela**

```
GUARDA A MINHA
VIOLA, PAI
PENDURADA
LÁ NO ESTEIO
```

**Corte:** o primeiro refrão.

**Cena**

```
Um senhor de uns setenta anos, o Zé Sereno, de pé na varanda de uma casa de fazenda ao entardecer, olhando para uma viola caipira de dez cordas pendurada num esteio de madeira. Ele não toca nela, só olha. Chapéu de palha na mão, camisa xadrez desbotada. Luz baixa e alaranjada de fim de tarde entrando de lado, pegando o rosto marcado. Ao fundo, o pasto seco e a porteira.
```

**Comando** — mesmo modelo, trocando as quatro linhas por
`GUARDA A MINHA` / `VIOLA, PAI` / `PENDURADA` / `LÁ NO ESTEIO`.

---

## Short 03 · da faixa 10 — Última Ponteada

**Título**

`O que eu quero no dia que eu for embora 🕯️ #modadeviola #violacaipira`

**Frase na tela**

```
QUANDO CHEGAR
MINHA HORA
QUERO A VIOLA
AFINADA
```

**Corte:** o primeiro refrão.

**Cena**

```
Um violeiro idoso sentado sozinho num banco de madeira dentro de uma capela de fazenda simples, à luz de velas, com a viola caipira no colo e a mão parada sobre as cordas. Paredes caiadas, um crucifixo de madeira ao fundo, flores do campo num vidro. O rosto dele está sereno, olhos baixos. Toda a luz vem das velas, quente e vacilante.
```

---

## Short 04 · da faixa 01 — Sereno da Madrugada

**Título**

`Quem levanta antes do sol entende essa 🌄 #sertanejoraiz #modadeviola`

**Frase na tela**

```
QUEM SÓ LEVANTA
DE DIA
NÃO SABE
O PREÇO DA LIDA
```

**Corte:** o primeiro refrão.

**Cena**

```
Um homem de uns setenta anos sentado num banco da varanda de uma casa de fazenda, calçando a bota, quinze minutos antes do amanhecer. O rosto dele aparece de três quartos, iluminado por uma lamparina pendurada no batente. O céu ao fundo ainda é azul-escuro em cima e alaranjado na linha do horizonte. Orvalho no capim, vapor saindo de uma caneca de café no chão ao lado.
```

---

## Short 05 · da faixa 17 — Moenda Velha

**Título**

`Minha avó fazia festa com quase nada 🍯 #modadeviola #sertanejoraiz`

**Frase na tela**

```
TODA DOÇURA
DA VIDA
PASSOU POR
DENTRO DE MIM
```

**Corte:** o primeiro refrão, depois da introdução instrumental longa — nessa faixa
ele demora mais, provavelmente perto de 1:40.

**Cena**

```
Uma senhora brasileira de uns setenta anos batendo doce numa panela de cobre dentro de uma cozinha de engenho antigo, vista de perto, rosto em foco e sorrindo de leve. Vapor doce subindo da panela. Ao fundo, desfocada, a moenda de madeira e o tacho de cobre fumegando. Luz entrando por uma janela alta e cortando a fumaça. Tons de cobre, madeira escura e dourado.
```

---

## Short 06 · da faixa 15 — Rio das Almas

**Título**

`Eu não pesco pra comer, eu pesco pra pensar 🎣 #modadeviola #violacaipira`

**Frase na tela**

```
EU NÃO PESCO
PRA COMER
EU SÓ PESCO
PRA PENSAR
```

**Corte:** o primeiro refrão.

**Cena**

```
Um homem de uns sessenta anos sentado sozinho numa pedra na beira de um rio de água parada, de manhã cedo, com uma vara de bambu na mão e o olhar perdido na água. Chapéu de palha, camisa de mangas dobradas. Neblina baixa sobre o rio, mato fechado na outra margem, um pau caído dentro d'água. O rosto aparece de perfil, tranquilo. Luz difusa de manhã nublada.
```

---

## Short 07 · da faixa 18 — A Seca Grande

**Título**

`O sertanejo nunca pediu muito 🌵 #sertanejoraiz #modadeviola`

**Frase na tela**

```
O SERTANEJO
NÃO QUER MUITO
QUER SÓ ÁGUA
NA ENXADA
```

**Corte:** o primeiro refrão.

**Cena**

```
Um lavrador de uns cinquenta anos apoiado no cabo de uma enxada no meio de uma roça rachada de seca, olhando para o céu limpo sem nenhuma nuvem. Suor no rosto, camisa encharcada nas costas, chapéu de palha na mão. A terra em primeiro plano está fendida em placas. Luz de meio-dia, dura, sem sombra macia. Horizonte seco e branco de calor.
```

---

## Short 08 · da faixa 20 — Benzedeira do Arraial

**Título**

`Ela benzia o arraial inteiro e nunca cobrou nada 🙏 #sertanejoraiz #modadeviola`

**Frase na tela**

```
NÃO COBRA
NEM UM TOSTÃO
DOM VENDIDO
NÃO DURA
```

**Corte:** o primeiro refrão.

**Cena**

```
Uma senhora muito velha, de lenço na cabeça, benzendo uma criança com um ramo de arruda dentro de uma sala simples de casa de arraial. O rosto dela em foco, olhos fechados, concentrada. Um altar caseiro ao fundo com santos de gesso e velas acesas. Parede caiada gasta, chão de cimento queimado. Luz de janela entrando de lado, amarelada.
```

---

## Short 09 · da faixa 03 — Café Coado no Pano

**Título**

`Quem já tomou café coado no pano sabe ☕ #modadeviola #sertanejoraiz`

**Frase na tela**

```
QUEM PROVOU
NÃO ESQUECE
O GOSTO QUE
A ROÇA APURA
```

**Corte:** o primeiro refrão.

**Cena**

```
Mãos velhas e marcadas coando café num coador de pano sobre uma leiteira de ágata, numa cozinha de sítio de manhã cedo, com o rosto do homem idoso aparecendo atrás, desfocado e sorrindo de leve. Vapor subindo, rapadura quebrada num pires ao lado. Fogão de lenha aceso à direita, luz vindo do fogo e de uma janelinha. Parede caiada descascando.
```

---

## Short 10 · da faixa 08 — Chuva na Telha de Barro

**Título**

`O barulho da chuva na telha era a melhor música 🌧️ #modadeviola #sertanejoraiz`

**Frase na tela**

```
CHUVA NA TELHA
DE BARRO
É A MODA
MAIS BONITA
```

**Corte:** o primeiro refrão.

**Cena**

```
Um homem de uns setenta anos sentado numa cadeira de balanço na varanda de uma casa de fazenda, olhando a chuva forte cair, com uma viola no colo sem tocar. Rosto de três quartos, sereno, iluminado pela luz cinzenta da tarde chuvosa. Água escorrendo das telhas de barro em fio contínuo na frente dele. Quintal molhado e verde ao fundo, tudo lavado e brilhando.
```

---

## Short 11 · da faixa 19 — Sinhá Rosa

**Título**

`Enquanto a sanfona tocar, ainda tem esperança 🪗 #sertanejoraiz #modadeviola`

**Frase na tela**

```
ENQUANTO A
SANFONA TOCAR
EU TENHO ALGUMA
ESPERANÇA
```

**Corte:** o primeiro refrão.

**Cena**

```
Um casal de idosos dançando valsa colados num salão de festa de arraial, à noite, vistos de perto. O rosto dela apoiado no ombro dele, os dois de olhos fechados. Bandeirinhas de papel e lâmpadas amarelas penduradas no teto. Ao fundo, desfocado, um sanfoneiro tocando. Chão de cimento, luz quente e baixa, um pouco de movimento nos vestidos.
```

---

## Short 12 · da faixa 13 — Moirão de Aroeira

**Título**

`Esse moirão viu tudo que eu perdi na vida 🪵 #modadeviola #sertanejoraiz`

**Frase na tela**

```
TUDO QUE EU
PERDI NA VIDA
VOCÊ VIU
E NÃO FALOU NÃO
```

**Corte:** o primeiro refrão.

**Cena**

```
Um homem de uns setenta anos com a mão apoiada num moirão de aroeira velho e rachado de uma cerca de fazenda, ao fim da tarde, olhando para longe no pasto. O moirão em primeiro plano à esquerda, gasto e cinzento, com arame farpado enferrujado. O rosto dele em foco à direita, marcado e pensativo. Luz baixa e dourada de fim de tarde, sombra comprida no chão.
```

---

# Descrição e tags dos Shorts

A descrição do Short serve para uma coisa só: levar para o vídeo longo. Use este
modelo nos doze, trocando o título e o link:

```
"Diz pra mãe que eu tô bem, mesmo que eu não esteja."

Trecho de Carta pro Meu Pai, do canal Zé Sereno.

A moda de viola inteira, com mais de uma hora de sertanejo raiz pra ouvir sem parar:
👉 [link do vídeo longo]

Inscreva-se pra não perder as próximas.

#modadeviola #sertanejoraiz #violacaipira #sertanejoantigo #modaviola
```

**Tags** (as mesmas nos doze, ou quase — Short não pontua por tag como o longo):

```
moda de viola, sertanejo raiz, viola caipira, modão de viola, sertanejo antigo, música sertaneja raiz, viola, sertanejo de raiz, modão, caipira
```

---

# Como publicar

**Um Short por dia, no meio da tarde.** O Chora Viola faz 84 inscritos por dia
publicando todo dia; os doze Shorts cobrem duas semanas.

**Ordem sugerida** — os mais emocionais primeiro, porque é neles que o Chora Viola
faz 100 mil e mais:

| Dia | Short | Frase |
|---|---|---|
| 1 | 01 | Diz pra mãe que eu tô bem |
| 2 | 03 | Quando chegar minha hora |
| 3 | 04 | Quem só levanta de dia |
| 4 | 10 | Chuva na telha de barro |
| 5 | 02 | Guarda a minha viola, pai |
| 6 | 09 | Quem provou não esquece |
| 7 | 05 | Toda doçura da vida |
| 8 | 08 | Não cobra nem um tostão |
| 9 | 06 | Eu não pesco pra comer |
| 10 | 11 | Enquanto a sanfona tocar |
| 11 | 12 | Tudo que eu perdi na vida |
| 12 | 07 | O sertanejo não quer muito |

**Não leia o resultado antes de 7 dias.** Foi o erro do vídeo 03: pico de
lançamento lido como padrão. Shorts têm curva ainda mais traiçoeira — um pode
dormir três dias e explodir no quarto.

**O que medir no fim das duas semanas:** inscritos ganhos por Short (não views) e
quantos cliques cada Short mandou para o vídeo longo. Views de Short sem inscrito
não valem nada para nós; o dinheiro está no longo.

---

# Opcional: o texto entrando no tempo da música

Se quiser que a segunda metade da frase apareça no momento exato em que é cantada,
acrescente `enable` às duas últimas linhas — `t` é o segundo dentro do Short:

```bash
drawtext=...text='MESMO QUE':...:enable='gte(t,6)',
drawtext=...text='EU NÃO ESTEJA':...:enable='gte(t,6)'
```

Testado e funcionando: até o segundo 6 só aparecem as duas primeiras linhas; a
partir dele, as quatro. Vale a pena nos Shorts em que a frase vira no meio
(01, 03, 06, 12) — nos outros o texto estático já entrega.
