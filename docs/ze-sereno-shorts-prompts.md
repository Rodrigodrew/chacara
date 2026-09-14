# Zé Sereno — prompts das imagens dos Shorts e a música de cada um

Complemento de `docs/ze-sereno-shorts.md`. Aqui estão as duas coisas prontas para
usar: o **prompt completo** de cada capa (é só colar no GPT, já vai com o estilo
junto) e **qual faixa** entra em cada Short, com o trecho exato.

---

## Antes de gerar as imagens

**Gere os doze na mesma conversa do GPT.** Não existe semente fixa; a linha visual
se mantém porque o modelo carrega o contexto da conversa. Se abrir conversa nova no
meio, o Zé Sereno muda de cara.

**Peça vertical e confira.** O GPT às vezes devolve quadrado mesmo com 9:16 no
prompt. Se vier quadrado, peça "regenerate in vertical 9:16 portrait format" na
mesma conversa.

**Salve como `shortNN-limpa.png`** — sem texto. O texto entra pelo ffmpeg, com o
corpo 88 já medido.

**A faixa escura no meio de cima é obrigatória.** Todo prompt abaixo pede que a
área entre 15% e 45% da altura fique escura e sem detalhe importante: é onde entram
as quatro linhas grandes. Se a imagem vier clara ali, o texto some.

**O rosto fica embaixo.** Ao contrário dos vídeos longos, onde a paisagem sozinha
funciona, todo Short vencedor dos três canais analisados tem rosto humano. Os
prompts colocam o rosto no terço inferior, abaixo do texto.

---

# Os prompts

---

## Short 01 — o filho que foi embora

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Um homem brasileiro de uns quarenta anos sentado na beirada de uma cama de pensão simples numa cidade grande, à noite, segurando um celular desligado na mão e olhando para o chão. Rosto cansado, barba por fazer, camisa de trabalho amassada. Uma viola caipira encostada na parede atrás dele, coberta de pó. Pela janela sem cortina, prédios cinzentos e luzes frias da cidade. Um abajur fraco ilumina o rosto de lado com amarelo quente; o resto do quarto fica azulado e frio. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, azul frio e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 02 — a viola pendurada no esteio

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Zé Sereno, homem brasileiro de uns setenta anos, magro, pele marcada de sol, bigode grisalho, chapéu de palha surrado na mão e camisa xadrez desbotada de mangas dobradas, de pé na varanda de uma casa de fazenda ao entardecer, olhando para uma viola caipira de dez cordas pendurada num esteio de madeira. Ele não toca nela, só olha. Luz baixa e alaranjada de fim de tarde entrando de lado, pegando o rosto marcado. Ao fundo, o pasto seco e a porteira aberta. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, verde-seco e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 03 — a última ponteada

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Um violeiro idoso brasileiro sentado sozinho num banco de madeira dentro de uma capela de fazenda muito simples, à luz de velas, com uma viola caipira de dez cordas no colo e a mão parada sobre as cordas. Paredes caiadas, um crucifixo de madeira ao fundo, flores do campo num vidro. O rosto dele está sereno, olhos baixos. Toda a luz vem das velas, quente e vacilante, e o alto da capela fica em sombra. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, âmbar e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 04 — quem levanta antes do sol

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Zé Sereno, homem brasileiro de uns setenta anos, magro, pele marcada de sol, bigode grisalho e chapéu de palha surrado, sentado num banco da varanda de uma casa de fazenda calçando a bota, quinze minutos antes do amanhecer. O rosto dele aparece de três quartos, iluminado por uma lamparina pendurada no batente. O céu ao fundo ainda é azul-escuro em cima e alaranjado na linha do horizonte. Orvalho no capim, vapor saindo de uma caneca de café esmaltada no chão ao lado. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, azul de madrugada e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 05 — a avó e o tacho de cobre

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Uma senhora brasileira de uns setenta anos batendo doce numa panela de cobre dentro de uma cozinha de engenho antigo, vista de perto, rosto em foco e sorrindo de leve. Vapor doce subindo da panela. Ao fundo, desfocada, a moenda de madeira e o tacho de cobre fumegando. Luz entrando por uma janela alta e cortando a fumaça; o alto da cozinha fica em sombra. O rosto dela deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de cobre, madeira escura e dourado. Sem nenhum texto e sem marca d'água.
```

## Short 06 — o pescador que não pesca pra comer

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Um homem brasileiro de uns sessenta anos sentado sozinho numa pedra na beira de um rio de água parada, de manhã cedo, com uma vara de bambu na mão e o olhar perdido na água. Chapéu de palha, camisa de mangas dobradas. Neblina baixa sobre o rio, mato fechado na outra margem, um pau caído dentro d'água. O rosto aparece de perfil, tranquilo. Luz difusa de manhã nublada, e a parte de cima da imagem é só neblina fechada sem detalhe. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de verde-seco, cinza-esverdeado e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 07 — a seca grande

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Um lavrador brasileiro de uns cinquenta anos apoiado no cabo de uma enxada no meio de uma roça rachada de seca, olhando para o céu limpo sem nenhuma nuvem. Suor no rosto, camisa encharcada, chapéu de palha na mão. A terra em primeiro plano está fendida em placas. Luz de meio-dia, dura, sem sombra macia, horizonte seco e branco de calor. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante — escureça o céu nessa faixa. Luz natural, profundidade de campo rasa, paleta de ocre, terra vermelha e branco de calor. Sem nenhum texto e sem marca d'água.
```

## Short 08 — a benzedeira

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Uma senhora brasileira muito velha, de lenço na cabeça, benzendo uma criança com um ramo de arruda dentro de uma sala simples de casa de arraial. O rosto dela em foco, olhos fechados, concentrada. Um altar caseiro ao fundo com santos de gesso e velas acesas. Parede caiada gasta, chão de cimento queimado. Luz de janela entrando de lado, amarelada, e o alto da sala em sombra. O rosto dela deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, branco caiado e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 09 — o café coado no pano

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Mãos velhas e marcadas coando café num coador de pano sobre uma leiteira de ágata branca, numa cozinha de sítio brasileiro de manhã cedo, com o rosto de um homem idoso de bigode grisalho aparecendo atrás, desfocado e sorrindo de leve. Vapor subindo, rapadura quebrada num pires ao lado. Fogão de lenha aceso à direita, luz vindo do fogo e de uma janelinha; o alto da cozinha fica em sombra quente. Parede caiada com a tinta descascando. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, âmbar e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 10 — a chuva na telha

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Zé Sereno, homem brasileiro de uns setenta anos, bigode grisalho e camisa xadrez desbotada, sentado numa cadeira de balanço na varanda de uma casa de fazenda, olhando a chuva forte cair, com uma viola caipira no colo sem tocar. Rosto de três quartos, sereno, iluminado pela luz cinzenta da tarde chuvosa. Água escorrendo das telhas de barro em fio contínuo na frente dele. Quintal molhado e verde ao fundo, tudo lavado e brilhando. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante — o beiral escuro do telhado pode ocupar essa faixa. Luz natural, profundidade de campo rasa, paleta de verde molhado, cinza-chumbo e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 11 — a valsa da Sinhá Rosa

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Um casal de idosos brasileiros dançando valsa colados num salão de festa de arraial, à noite, vistos de perto. O rosto dela apoiado no ombro dele, os dois de olhos fechados. Bandeirinhas de papel e lâmpadas amarelas penduradas no teto. Ao fundo, desfocado, um sanfoneiro tocando. Chão de cimento, luz quente e baixa, leve borrão de movimento no vestido dela. O rosto dos dois deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de âmbar, vermelho de bandeirinha e marrom terroso. Sem nenhum texto e sem marca d'água.
```

## Short 12 — o moirão de aroeira

```
Fotografia em filme 35mm com grão visível, formato retrato vertical 9:16. Zé Sereno, homem brasileiro de uns setenta anos, chapéu de palha surrado e camisa xadrez desbotada, com a mão apoiada num moirão de aroeira velho e rachado de uma cerca de fazenda, ao fim da tarde, olhando para longe no pasto. O moirão em primeiro plano à esquerda, gasto e cinzento, com arame farpado enferrujado. O rosto dele em foco à direita, marcado e pensativo. Luz baixa e dourada de fim de tarde, sombra comprida no chão. O rosto dele deve aparecer no terço inferior do enquadramento, e a faixa entre 15% e 45% da altura da imagem deve ficar escura e sem detalhe importante. Luz natural, profundidade de campo rasa, paleta de ocre, dourado de fim de tarde e marrom terroso. Sem nenhum texto e sem marca d'água.
```

---

# A música de cada Short

| Short | Faixa | Trecho a cortar | Leva para o vídeo longo |
|---|---|---|---|
| 01 | **07 · Carta pro Meu Pai** | 3º verso, depois do solo: *"Diz pra mãe que eu tô bem"* | 12 — *Que Seu Pai Escutava Voltando da Roça* |
| 02 | **07 · Carta pro Meu Pai** | 1º refrão: *"Guarda a minha viola, pai"* | 04 — *Que Seu Avô Ouvia no Rádio de Pilha* |
| 03 | **10 · Última Ponteada** | 1º refrão: *"Quando chegar minha hora"* | 10 — *Pra Dormir Como Se Dormia na Casa dos Avós* |
| 04 | **01 · Sereno da Madrugada** | 1º refrão: *"Sereno da madrugada"* | 13 — *Pra Quem Sabe o Que É Acordar Antes do Sol* |
| 05 | **17 · Moenda Velha** | 1º refrão: *"Moenda velha, moenda"* | 03 — *Cheiro do Fogão de Lenha na Manhã Fria* |
| 06 | **15 · Rio das Almas** | 1º refrão: *"Rio das Almas, me leva"* | 07 — *Cadeira de Balanço na Varanda* |
| 07 | **18 · A Seca Grande** | 1º refrão: *"Ó céu, manda uma nuvem"* | 06 — *Gado Voltando no Fim da Tarde* |
| 08 | **20 · Benzedeira do Arraial** | 1º refrão: *"Benzedeira do arraial"* | 08 — *Casa da Vó no Domingo de Manhã* |
| 09 | **03 · Café Coado no Pano** | 1º refrão: *"Café coado no pano"* | 05 — *Pra Quem Ainda Toma Café Coado no Pano* |
| 10 | **08 · Chuva na Telha de Barro** | 1º refrão: *"Chuva na telha de barro"* | 09 — *Barulho da Chuva na Telha de Barro* |
| 11 | **19 · Sinhá Rosa** | 1º refrão: *"Valsa, valsa, Sinhá Rosa"* | 11 — *Festa no Terreiro Quando a Poeira Subia* |
| 12 | **13 · Moirão de Aroeira** | 1º refrão: *"Moirão de aroeira velha"* | 02 — *Acordava Antes do Sol e Sentia Cheiro de Café* |

Dez faixas diferentes nos doze Shorts (a 07 aparece duas vezes, porque é a mais
forte do repertório e tem duas frases que sustentam um Short sozinhas). Cada Short
leva para um vídeo longo diferente: os doze longos ficam cobertos, um Short cada.

### Onde achar o refrão

Não tenho os arquivos de áudio aqui, então não dá para cravar o segundo. O jeito
rápido:

```bash
# mostra a duração e você localiza ouvindo a partir de 0:40
ffprobe -v error -show_entries format=duration -of csv=p=0 faixas/07-*.wav
```

Como referência: nas faixas de 1 a 10 (cerca de 2m30) o primeiro refrão costuma
cair entre **0:45 e 1:10**; nas de 11 a 20, que foram escritas no formato longo,
entre **1:10 e 1:40**. Achou o segundo, tire 4 e é esse o `-ss`:

```bash
ffmpeg -ss 0:41 -t 45 -i faixas/07-carta-pro-meu-pai.wav \
  -af "afade=t=in:st=0:d=1,afade=t=out:st=44:d=1.5,loudnorm=I=-14:TP=-1.5:LRA=11" \
  -c:a pcm_s16le corte01.wav
```

**Por que 4 segundos antes e não em cima:** o Short precisa de um instante de viola
para o ouvido entender o que é, e a frase entra com o espectador já dentro. Em cima
do verso, soa cortado.

**Short 01 é a exceção.** A frase dele não está no refrão, está no terceiro verso,
depois do solo de viola — provavelmente perto de 1:30 numa faixa de 2m30. Vale o
trabalho de achar: é a frase mais forte das doze.
