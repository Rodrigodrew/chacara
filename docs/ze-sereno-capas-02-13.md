# Zé Sereno — capas dos vídeos 02 a 13
### Prompt de imagem e comando de texto, um por vídeo

Doze cenas diferentes, mesma identidade visual. Cada bloco tem o **prompt
completo** (é só colar, já traz o estilo junto) e o **comando com o texto já
preenchido** — não precisa editar nada.

---

## Como funciona

**1 · Gere a imagem limpa** com o prompt do vídeo, salve como `capaNN-limpa.png`.

**2 · Rode o comando** do mesmo vídeo. Ele aplica as três linhas de texto e gera
a capa e a miniatura.

**3 · Suba a miniatura** (`thumbNN.jpg`) no YouTube.

O texto grande é obrigatório aqui: **o Canal A é 62% celular**, onde a miniatura
aparece em tamanho de selo. É o padrão do Toca Viola e dos outros que funcionam
no nicho.

### As fontes

```bash
F=/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf
FB=/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf
```

No Mac, troque por `/System/Library/Fonts/Supplemental/Times New Roman.ttf` e
`Times New Roman Bold.ttf`.

> **Tamanho da fonte testado.** Rodei as doze linhas centrais em 132px: a mais
> larga ("TERREIRO DE CATIRA") ocupa 1190 px dos 1920 disponíveis. Todas cabem
> com folga, então o corpo é o mesmo nas doze — o que mantém a identidade do
> canal constante.

---


# 02 · Grupo A

`Viola Caipira ao Amanhecer na Roça — Modão de Viola para Tomar Café`

### Prompt da imagem

```
Curral de fazenda brasileira ao amanhecer, visto de dentro da porteira aberta. Neblina baixa cobrindo o pasto, o primeiro sol laranja nascendo atrás de um eucalipto alto ao fundo. Em primeiro plano, desfocada, uma viola caipira de dez cordas encostada no mourão de madeira lascada. Orvalho no capim, poeira dourada suspensa no ar frio. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | MODÃO DE VIOLA | 72 |
| **Centro** | **AO AMANHECER** | **132** |
| Base | VIOLA CAIPIRA RAIZ | 44 |

```bash
ffmpeg -i capa02-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='MODÃO DE VIOLA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='AO AMANHECER':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='VIOLA CAIPIRA RAIZ':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa02.jpg

ffmpeg -i capa02.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb02.jpg
```

---


# 03 · Grupo B

`Modão de Viola pra se sentir numa Cozinha de Fogão a Lenha | Manhã de Inverno 🔥`

### Prompt da imagem

```
Cozinha de sítio brasileiro numa manhã fria de inverno. Fogão de lenha aceso com a chama viva na boca, leiteira de ágata branca soltando vapor em cima, lenha empilhada ao lado. Pão caseiro cortado numa tábua gasta. Toda a luz vem do fogo e de uma janelinha à esquerda; o resto da cozinha fica em sombra quente. Parede caiada com a tinta descascando. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | MODÃO DE VIOLA | 72 |
| **Centro** | **FOGÃO A LENHA** | **132** |
| Base | MANHÃ DE INVERNO | 44 |

```bash
ffmpeg -i capa03-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='MODÃO DE VIOLA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='FOGÃO A LENHA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='MANHÃ DE INVERNO':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa03.jpg

ffmpeg -i capa03.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb03.jpg
```

---


# 04 · Grupo C

`Modão de Viola Que Seu Avô Ouvia no Rádio de Pilha 🪕 Viola Caipira Raiz`

### Prompt da imagem

```
Rádio de pilha antigo dos anos 70, de plástico amarelado pelo tempo, antena puxada, apoiado numa prateleira de madeira numa cozinha de sítio. Ao lado, um pano de prato bordado e uma caneca de ágata. Luz de manhã entrando de lado pela janela, poeira visível no facho de luz. Parede caiada ao fundo, levemente desfocada. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | O QUE SEU AVÔ OUVIA | 72 |
| **Centro** | **RÁDIO DE PILHA** | **132** |
| Base | MODÃO DE VIOLA RAIZ | 44 |

```bash
ffmpeg -i capa04-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='O QUE SEU AVÔ OUVIA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='RÁDIO DE PILHA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='MODÃO DE VIOLA RAIZ':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa04.jpg

ffmpeg -i capa04.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb04.jpg
```

---


# 05 · Grupo D

`Café Coado, Viola e Nenhuma Pressa | 1 Hora de Modão de Viola | Modas Inéditas`

### Prompt da imagem

```
Mesa de madeira muito gasta vista de cima em ângulo, numa cozinha de sítio. Xícara de ágata branca com café preto fumegando, coador de pano pendurado num suporte de arame ao lado, bule esmaltado. Uma viola caipira encostada na cadeira de palha, parcialmente no quadro. Luz dourada de manhã vinda da esquerda, cantos da imagem escuros. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | 1 HORA DE MODÃO | 72 |
| **Centro** | **CAFÉ COADO** | **132** |
| Base | MODAS INÉDITAS | 44 |

```bash
ffmpeg -i capa05-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='1 HORA DE MODÃO':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='CAFÉ COADO':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='MODAS INÉDITAS':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa05.jpg

ffmpeg -i capa05.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb05.jpg
```

---


# 06 · Grupo A

`Viola Caipira ao Entardecer na Fazenda — Modão de Viola para Descansar`

### Prompt da imagem

```
Pasto de fazenda ao entardecer, gado voltando em fila para o curral, silhuetas escuras recortadas contra um céu alaranjado e roxo. Porteira de madeira aberta em primeiro plano, poeira dourada levantada pelo gado brilhando na contraluz. Cerca de arame farpado atravessando o quadro, morros baixos ao fundo. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | MODÃO DE VIOLA | 72 |
| **Centro** | **AO ENTARDECER** | **132** |
| Base | NA FAZENDA | 44 |

```bash
ffmpeg -i capa06-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='MODÃO DE VIOLA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='AO ENTARDECER':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='NA FAZENDA':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa06.jpg

ffmpeg -i capa06.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb06.jpg
```

---


# 07 · Grupo B

`Moda de Viola pra se sentir numa Varanda de Fazenda | Fim de Tarde no Interior 🌅`

### Prompt da imagem

```
Varanda de casa de fazenda no fim da tarde, vista de dentro para fora. Cadeira de balanço de madeira vazia, um violão encostado na parede caiada, lampião de querosene aceso no chão. Além da varanda, o pasto e o céu azul-escuro com as últimas faixas laranja no horizonte. Piso de tábua corrida, um par de chinelos ao lado da cadeira. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | MODA DE VIOLA | 72 |
| **Centro** | **NA VARANDA** | **132** |
| Base | FIM DE TARDE NO INTERIOR | 44 |

```bash
ffmpeg -i capa07-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='MODA DE VIOLA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='NA VARANDA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='FIM DE TARDE NO INTERIOR':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa07.jpg

ffmpeg -i capa07.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb07.jpg
```

---


# 08 · Grupo C

`Moda de Viola Que Tocava na Casa da Vó no Domingo de Manhã | Sertanejo Raiz`

### Prompt da imagem

```
Mesa de domingo numa casa de interior, toalha de chita florida, bule de café esmaltado, bolo de fubá cortado num prato de louça antiga, xícaras de ágata. Cadeiras de palha vazias em volta. Luz clara de manhã entrando por uma janela aberta ao fundo, cortina branca de algodão balançando. Chão de cimento queimado. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | O QUE TOCAVA | 72 |
| **Centro** | **NA CASA DA VÓ** | **132** |
| Base | DOMINGO DE MANHÃ | 44 |

```bash
ffmpeg -i capa08-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='O QUE TOCAVA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='NA CASA DA VÓ':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='DOMINGO DE MANHÃ':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa08.jpg

ffmpeg -i capa08.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb08.jpg
```

---


# 09 · Grupo D

`Cheiro de Chuva na Telha de Barro | 1 Hora de Moda de Viola Raiz | Só Instrumental`

### Prompt da imagem

```
Janela de casa de sítio vista de dentro durante uma chuva de tarde. Água escorrendo no vidro em fios grossos, telhado de barro molhado e brilhante logo abaixo, pasto verde completamente borrado ao fundo pela chuva. Uma xícara de café fumegando no parapeito de madeira. Luz cinza-esverdeada, úmida, com o interior da casa em sombra. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | CHEIRO DE CHUVA | 72 |
| **Centro** | **NA TELHA DE BARRO** | **132** |
| Base | 1 HORA DE VIOLA | 44 |

```bash
ffmpeg -i capa09-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='CHEIRO DE CHUVA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='NA TELHA DE BARRO':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='1 HORA DE VIOLA':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa09.jpg

ffmpeg -i capa09.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb09.jpg
```

---


# 10 · Grupo A

`Viola Caipira na Noite Fria do Sítio — Modas Raiz para Dormir`

### Prompt da imagem

```
Interior escuro de uma casa de fazenda tarde da noite. Apenas a brasa vermelha do fogão de lenha ilumina fraco o ambiente. Uma viola caipira encostada na parede, quase em silhueta. Janela aberta mostrando a noite azul-escura e uma lua pequena e alta. Cobertor de lã dobrado numa cadeira. Imagem muito escura, contraste alto entre a brasa e a sombra. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | VIOLA CAIPIRA | 72 |
| **Centro** | **NOITE FRIA** | **132** |
| Base | MODAS RAIZ PARA DORMIR | 44 |

```bash
ffmpeg -i capa10-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='VIOLA CAIPIRA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='NOITE FRIA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='MODAS RAIZ PARA DORMIR':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa10.jpg

ffmpeg -i capa10.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb10.jpg
```

---


# 11 · Grupo B

`Sertanejo Raiz pra se sentir num Terreiro de Catira | Noite de Festa na Roça 🪕`

### Prompt da imagem

```
Terreiro de festa de interior à noite, bandeirinhas de papel colorido cruzando o alto do enquadramento, fogueira grande acesa ao fundo bem desfocada. Em primeiro plano, uma sanfona apoiada num banco de madeira tosco e um chapéu de palha ao lado. Chão de terra batida com poeira suspensa iluminada pelo fogo. Luz laranja quente vinda de baixo. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | SERTANEJO RAIZ | 72 |
| **Centro** | **TERREIRO DE CATIRA** | **132** |
| Base | NOITE DE FESTA | 44 |

```bash
ffmpeg -i capa11-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='SERTANEJO RAIZ':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='TERREIRO DE CATIRA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='NOITE DE FESTA':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa11.jpg

ffmpeg -i capa11.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb11.jpg
```

---


# 12 · Grupo C

`Viola Caipira Que Seu Pai Escutava Voltando da Roça | Modão Antigo`

### Prompt da imagem

```
Um par de botinas de couro muito gastas e sujas de terra, largadas ao lado da porta de uma casa de fazenda, e um chapéu de couro pendurado num prego na parede caiada. Luz baixa de fim de tarde entrando de lado pela porta aberta, projetando sombras longas no chão de cimento. O curral desfocado lá fora. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | O QUE SEU PAI OUVIA | 72 |
| **Centro** | **VOLTANDO DA ROÇA** | **132** |
| Base | MODÃO ANTIGO | 44 |

```bash
ffmpeg -i capa12-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='O QUE SEU PAI OUVIA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='VOLTANDO DA ROÇA':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='MODÃO ANTIGO':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa12.jpg

ffmpeg -i capa12.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb12.jpg
```

---


# 13 · Grupo D

`A Roça Acorda Antes do Sol | 1 Hora de Modão Raiz | Viola e Sanfona`

### Prompt da imagem

```
Fileiras longas de pés de café cobertas por cerração densa no comecinho da manhã. Um balaio de vime apoiado no chão de terra vermelha entre duas fileiras. O sol ainda branco e baixo atravessando a neblina ao fundo, sem definir contorno. Folhas molhadas de orvalho em primeiro plano, tudo em tons de verde-seco e cinza quente. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

### Texto na capa

| Linha | Conteúdo | Corpo |
|---|---|---|
| Topo | A ROÇA ACORDA | 72 |
| **Centro** | **ANTES DO SOL** | **132** |
| Base | VIOLA E SANFONA | 44 |

```bash
ffmpeg -i capa13-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='A ROÇA ACORDA':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='ANTES DO SOL':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='VIOLA E SANFONA':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capa13.jpg

ffmpeg -i capa13.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumb13.jpg
```

---


## Duas regras para não quebrar a identidade

**Nunca mude as cores do texto.** Creme no topo, âmbar no centro, bege
translúcido embaixo. É o que faz doze capas diferentes parecerem do mesmo canal
quando aparecem lado a lado nos sugeridos.

**Nunca mude a posição.** Sempre no terço superior. Por isso todos os prompts
pedem esse terço escuro e sem detalhe — é onde o texto vai sentar.

## Quando trocar a linha de baixo pela marca

Hoje a linha de baixo carrega palavra de busca, porque com quatro inscritos o
espaço vale mais como palavra do que como marca. **Quando o canal passar de mil
inscritos**, troque as doze por `ZÉ SERENO` — aí o nome já significa alguma coisa
para quem vê.
