# Zé Sereno — dez capas novas da família Amanhecer
### Vídeos 26 a 35 · lugares novos, mesma estrutura

Continuação do `ze-sereno-familia-amanhecer.md`. Mesma fórmula de título, mesma
divisão de capa, dez cenários que ainda não foram usados.

> Se o que você queria era **capa nova para os doze que já existem** — versões
> alternativas para testar miniatura no mesmo vídeo — me fala que eu faço nesse
> outro sentido. Estas aqui são para vídeos novos.

---

## O que é igual

**A divisão da capa**, a mesma dos doze anteriores:

| Linha | Conteúdo | Corpo | Cor |
|---|---|---|---|
| Topo | VIOLA CAIPIRA AO AMANHECER | 72 | `F3E3C3` |
| **Centro** | **o lugar** | **132** | `E8C46B` |
| Base | a frase do café | 44 | `D9C9A8` |

**Medido nestas dez:** a linha central mais larga ("NA ESTRADA DE TERRA") ocupa
1.549 px dos 1.920 — sobram 185 de cada lado. A base mais larga ("MODAS DE VIOLA ·
CAFÉ E FRUTA DO PÉ") ocupa 846 px. Todas cabem no corpo 132 de sempre.

**Os títulos**, todos abaixo de 100 caracteres — o mais longo tem 85.

**O bloco-base**, que já vai embutido em cada prompt abaixo: 35mm, luz natural,
paleta de ocre e verde-seco, 16:9, terço superior escuro, café em quadro e sol
baixo de manhã cedo.

**O comando**, idêntico ao dos doze:

```bash
F=/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf
FB=/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf

ffmpeg -i capaNN-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='VIOLA CAIPIRA AO AMANHECER':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='O LUGAR':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='A FRASE DO CAFÉ':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capaNN.jpg

ffmpeg -i capaNN.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumbNN.jpg
```

**Sementes 26 a 35**, uma por vídeo, nenhuma repetida. Com as trinta faixas no
pool, cada uma abre com uma faixa diferente.

```bash
./scripts/montar-playlist.sh -d faixas -i capaNN.jpg -D 105 -e SEMENTE -o saidaNN.mp4
```

---

# 26 · Paiol · semente 26

**Título** (79 caracteres)
```
Viola Caipira ao Amanhecer no Paiol — Modão de Viola com Café e Cheiro de Milho
```
**Capa** — centro `NO PAIOL` · base `MODÃO COM CHEIRO DE MILHO` · tag `paiol`

```
Interior de um paiol de madeira cheio de espigas de milho empilhadas até o teto, de manhã cedo. Lâminas de luz dourada entrando pelas frestas das tábuas e pela porta aberta, cortando a poeira suspensa do milho. Em primeiro plano, uma caneca de ágata com café fumegando apoiada num caixote virado, ao lado de um punhado de espigas secas. Chão de terra batida, sacaria de aniagem empilhada no canto. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, amarelo de milho e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
O sol entrando pelas frestas do paiol e o cheiro do milho seco no ar. Uma
hora e quarenta e cinco de modão de viola para a primeira hora do dia, do
jeito que se ouvia trabalhando.
```

---

# 27 · Engenho · semente 27

**Título** (85)
```
Viola Caipira ao Amanhecer no Engenho — Modas Raiz com Café e Garapa | Sertanejo Raiz
```
**Capa** — centro `NO ENGENHO` · base `MODAS RAIZ · CAFÉ E GARAPA` · tag `engenho`

```
Interior de um engenho de cana antigo no começo da manhã, com a moenda de madeira em primeiro plano e o tacho de cobre fumegando ao fundo. Vapor doce subindo e atravessado por um facho de luz que entra por uma janela alta. Sobre um banco de madeira, uma caneca de ágata com café e um copo de garapa. Bagaço de cana amontoado no chão de terra. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de cobre, ocre e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
A moenda começando a girar e o tacho soltando aquele doce no ar. Uma hora
e quarenta e cinco de modas raiz para a manhã de trabalho no engenho, com
café e garapa na mão.
```

---

# 28 · Quintal · semente 28

**Título** (73)
```
Viola Caipira ao Amanhecer no Quintal — Toadas Caipiras pro Café das Seis
```
**Capa** — centro `NO QUINTAL` · base `TOADAS PRO CAFÉ DAS SEIS` · tag `quintal`

```
Quintal de casa de roça no comecinho da manhã, visto de um canto baixo. Varal de arame com roupa lavada balançando, um tanque de cimento, galinhas ciscando na terra batida e um pé de acerola carregado. Em primeiro plano à direita, uma cadeira de madeira com uma xícara de café apoiada no assento. Neblina fina ainda no fundo do quintal, sol nascendo por trás do muro baixo em contraluz. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
Seis da manhã no quintal, a roupa no varal e as galinhas já acordadas.
Uma hora e quarenta e cinco de toadas caipiras para o café do começo do
dia, sem pressa de nada.
```

---

# 29 · Pomar · semente 29

**Título** (75)
```
Viola Caipira ao Amanhecer no Pomar — Modas de Viola com Café e Fruta do Pé
```
**Capa** — centro `NO POMAR` · base `MODAS DE VIOLA · CAFÉ E FRUTA DO PÉ` · tag `pomar`

```
Pomar de sítio brasileiro de manhã cedo, visto de dentro, entre pés de laranja e mexerica carregados. Neblina baixa entre os troncos, sol nascendo atrás das árvores criando raios visíveis no ar úmido. Em primeiro plano, um caixote de madeira com laranjas colhidas e uma caneca de ágata com café em cima dele. Orvalho brilhando nas folhas e na grama alta. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e laranja queimado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
Laranja colhida no pé, orvalho ainda na folha e café na caneca. Uma hora
e quarenta e cinco de modas de viola para a manhã de quem tem pomar no
fundo de casa.
```

---

# 30 · Roça de Milho · semente 30

**Título** (76)
```
Viola Caipira ao Amanhecer na Roça de Milho — Modão de Viola com Café e Broa
```
**Capa** — centro `NA ROÇA DE MILHO` · base `MODÃO COM CAFÉ E BROA` · tag `roça de milho`

```
Uma rua dentro de uma roça de milho alto, fotografada do meio dela, no comecinho da manhã. As folhas compridas fechando dos dois lados e o sol nascendo no fim da rua, em contraluz, deixando tudo dourado e esfumaçado. Neblina rasteira entre os pés. Em primeiro plano à esquerda, um bornal de pano pendurado numa haste, com uma garrafa térmica velha e um pedaço de broa embrulhado. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e dourado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
O milho alto dos dois lados e o sol nascendo no fim da rua. Uma hora e
quarenta e cinco de modão de viola para a manhã na roça, com café e broa
no bornal.
```

---

# 31 · Casa de Farinha · semente 31

**Título** (75)
```
Viola Caipira ao Amanhecer na Casa de Farinha — Modas Raiz com Café e Beiju
```
**Capa** — centro `NA CASA DE FARINHA` · base `MODAS RAIZ · CAFÉ E BEIJU` · tag `casa de farinha`

```
Interior de uma casa de farinha antiga de manhã cedo, com o forno de chapa de cobre em primeiro plano e a massa de mandioca espalhada nele. Rodo de madeira apoiado na beirada, fumaça fina subindo. Um banco com uma caneca de ágata de café e beijus empilhados num pano. Paredes de pau a pique, telhado de barro com frestas deixando entrar lâminas de luz na fumaça. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, cobre e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
O forno quente, a massa no rodo e o beiju saindo ainda fumegando. Uma
hora e quarenta e cinco de modas raiz para a manhã na casa de farinha,
com café do lado.
```

---

# 32 · Estrada de Terra · semente 32

**Título** (83)
```
Viola Caipira ao Amanhecer na Estrada de Terra — Toadas Caipiras com Café no Bornal
```
**Capa** — centro `NA ESTRADA DE TERRA` · base `TOADAS · CAFÉ NO BORNAL` · tag `estrada de terra`

```
Uma estrada de terra vermelha se perdendo dentro da neblina, fotografada do meio dela, no comecinho da manhã. O sol nascendo baixo bem no fim da estrada, em contraluz, deixando tudo dourado e esfumaçado. Cerca de arame acompanhando dos dois lados, capim alto com orvalho nas margens. Em primeiro plano à direita, um bornal de couro pendurado no mourão da cerca, com uma garrafa de café saindo dele. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de terra vermelha, ocre e dourado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
A estrada sumindo na neblina e o café guardado no bornal. Uma hora e
quarenta e cinco de toadas caipiras para quem pega o caminho antes do
sol esquentar.
```

---

# 33 · Pasto · semente 33

**Título** (75)
```
Viola Caipira ao Amanhecer no Pasto — Modão de Viola pro Café antes da Lida
```
**Capa** — centro `NO PASTO` · base `MODÃO PRO CAFÉ ANTES DA LIDA` · tag `pasto`

```
Um pasto aberto de fazenda brasileira coberto de neblina rasteira, no primeiro sol. Gado em silhueta ao longe, ainda parado, e um cupinzeiro recortado contra a luz. Em primeiro plano, um mourão de cerca com uma caneca de ágata apoiada em cima, café fumegando, e um chapéu de palha pendurado no arame. Orvalho brilhando em cada fio de capim. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
O pasto ainda de neblina, o gado parado e o café tomado em pé. Uma hora e
quarenta e cinco de modão de viola para os minutos antes da lida começar.
```

---

# 34 · Cachoeira · semente 34

**Título** (77)
```
Viola Caipira ao Amanhecer na Cachoeira — Modas de Viola com Café e Água Fria
```
**Capa** — centro `NA CACHOEIRA` · base `MODAS DE VIOLA · CAFÉ E ÁGUA FRIA` · tag `cachoeira`

```
Uma cachoeira pequena de mata brasileira no comecinho da manhã, com a água caindo sobre pedras escuras e névoa subindo do poço. Sol nascendo entre as árvores atrás, criando raios visíveis atravessando a névoa. Em primeiro plano sobre uma pedra plana, um bule de ferro fosco com brasas apagando embaixo e uma caneca de ágata azul com café. Samambaias e mato fechado nas margens. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de verde-escuro, ocre e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
O barulho da água, a névoa subindo do poço e o bule no fogo de pedra.
Uma hora e quarenta e cinco de modas de viola para a manhã mais calma que
existe.
```

---

# 35 · Galpão · semente 35

**Título** (81)
```
Viola Caipira ao Amanhecer no Galpão — Modas Raiz com Café Forte | Sertanejo Raiz
```
**Capa** — centro `NO GALPÃO` · base `MODAS RAIZ COM CAFÉ FORTE` · tag `galpão`

```
Interior de um galpão de fazenda de manhã cedo, visto de dentro para a porta grande aberta. Arreios, cordas e ferramentas penduradas nas paredes de tábua, um carro de boi encostado no canto em sombra. Pela porta entra uma lâmina larga de luz dourada do sol baixo, cortando a poeira suspensa. Em primeiro plano, uma mesa tosca com um bule de ágata preto e duas canecas viradas. Chão de terra batida. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, marrom terroso e dourado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Descrição**
```
A porta do galpão aberta pro sol e o bule já na mesa. Uma hora e quarenta
e cinco de modas raiz para a manhã de quem começa o dia antes de todo
mundo.
```

---

# Antes de gerar

**Gere as dez na mesma conversa do GPT**, e de preferência na mesma conversa dos
doze anteriores — é assim que a linha visual se mantém sem existir semente fixa.

**O terço superior escuro não é detalhe.** É onde entram as três linhas de texto.
Se a imagem voltar clara ali, peça para escurecer antes de aplicar o ffmpeg.

**O café tem que estar em quadro nas dez.** É o que amarra a família e o que o
título promete. Imagem sem café quebra a promessa antes do play.

**Não leia resultado antes de 7 dias.** Vale para estas dez como valeu para todas
as outras.
