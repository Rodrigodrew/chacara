# Zé Sereno — vídeos 46 a 55 · capa, fundo e descrição
### Família Amanhecer · sementes 46 a 55 · 04/10/2026

Dez lugares novos na fórmula do título vencedor
(`Viola Caipira ao Amanhecer na <LUGAR> — <GÊNERO> para Tomar Café`).

Cada bloco traz o prompt da **capa** (com texto, vira miniatura), o prompt do
**fundo** (sem texto, é o que roda 1h45) e a descrição.

## O que é igual nos dez

**A capa:** topo `VIOLA CAIPIRA AO AMANHECER` em 72, o lugar em 132, a frase do
café em 44. Medido: a linha central mais larga ("NA IGREJINHA DA ROÇA") ocupa
1.595 px dos 1.920 — sobram 162 de cada lado.

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

**O fundo:** sem texto, foco profundo, plano aberto, sem pessoa, nada essencial no
rodapé (barra do player) nem no canto superior esquerdo (título na TV).

```bash
ffmpeg -i fundoNN-bruto.png -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,eq=contrast=1.04:saturation=1.06,vignette=PI/9" -q:v 2 fundoNN.jpg
```

**A montagem:**

```bash
./scripts/montar-playlist.sh -d faixas -i fundoNN.jpg -D 105 -e NN -o saidaNN.mp4
```

**As descrições** levam, depois do parágrafo, o bloco do Spotify e da tracklist, e
no fim o rodapé fixo do canal:

```
Ouça o álbum completo no Spotify: [SEU LINK]

TRACKLIST
[COLE O CONTEÚDO DE tracklist.txt]

SOBRE
Zé Sereno é violeiro, filho de tropeiro, criado no interior, onde o dia
começa antes do sol. Neste canal ele grava modas de viola, toadas e
catiras novas — música nova, com alma antiga — para quem sente falta da
roça mesmo morando longe dela.

Música original, composta e produzida para este canal com apoio de
ferramentas de inteligência artificial. Todos os direitos reservados.

Inscreva-se e ative o sininho para acompanhar as próximas modas.

#violacaipira #modadeviola #sertanejoraiz
```

**As tags:** base de sempre, trocando a penúltima pela palavra do vídeo.

```
viola caipira, moda de viola, modão, sertanejo raiz, música caipira, modas de viola antigas, viola caipira instrumental, música da roça, toada sertaneja, sertanejo antigo, viola de dez cordas, música do interior, [PALAVRA DO VÍDEO], Zé Sereno
```

---

# 46 · Fogão de Lenha · semente 46

**Título** (77) · tag `fogão de lenha`
```
Viola Caipira ao Amanhecer no Fogão de Lenha — Modão de Viola para Tomar Café
```
**Capa** — centro `NO FOGÃO DE LENHA` · base `MODÃO RAIZ · 1 HORA E 45`

```
Um fogão de lenha aceso visto de perto e de frente, numa manhã fria, com a chama viva aparecendo pela boca e a lenha empilhada ao lado. Em cima da chapa, uma leiteira de ágata branca soltando vapor e um bule preto encardido de fuligem. Chaleira de ferro na beirada, panelas de ágata penduradas na parede caiada acima. Toda a luz vem do fogo, laranja e vacilante; os cantos ficam em sombra quente. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, âmbar e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Cozinha de roça vista de um canto que mostra o cômodo inteiro, numa manhã fria, com o fogão de lenha aceso ocupando a direita do quadro e a leiteira soltando vapor. Mesa de madeira ao centro com bule e canecas, lenha empilhada, panelas de ágata penduradas, parede caiada com a tinta descascando. Luz do fogo misturada com o azul frio que entra por uma janelinha à esquerda. Composição parada e acolhedora, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de ocre, âmbar e azul frio, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
O fogo aceso antes de todo mundo acordar e a leiteira começando a chiar.
Uma hora e quarenta e cinco de modão de viola para a manhã fria, do jeito
que o dia começava quando a casa tinha fogão de lenha.
```

---

# 47 · Mesa da Cozinha · semente 47

**Título** (74) · tag `mesa da cozinha`
```
Viola Caipira ao Amanhecer na Mesa da Cozinha — Modas Raiz para Tomar Café
```
**Capa** — centro `NA MESA DA COZINHA` · base `MODAS RAIZ PRA COMEÇAR O DIA`

```
Uma mesa de cozinha de roça posta para o café da manhã, vista de cima em ângulo baixo, de manhã cedo. Toalha de chita desbotada, bule de ágata, xícaras de louça antiga com florzinhas, pão caseiro cortado numa tábua, manteiga num pote de vidro e goiabada num pires. Uma cadeira de palhinha puxada, uma viola caipira encostada nela. Luz entrando rasante pela janela à esquerda, atravessando o vapor do café. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Cozinha de casa de roça vista do canto oposto, de manhã cedo, com a mesa posta ao centro ocupando o quadro: toalha de chita, bule de ágata, xícaras de louça, pão caseiro, manteiga e goiabada. Armário de madeira pintado ao fundo, fogão de lenha à direita, janela à esquerda deixando entrar a luz da manhã em faixas pelo chão. Composição afetuosa e parada, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de ocre, azul desbotado e âmbar, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
A mesa posta, o bule no meio e ninguém com pressa de sentar. Uma hora e
quarenta e cinco de modas raiz para o café da manhã na cozinha, do jeito
que se começava o dia na roça.
```

---

# 48 · Monjolo · semente 48

**Título** (70) · tag `monjolo`
```
Viola Caipira ao Amanhecer no Monjolo — Modas de Viola para Tomar Café
```
**Capa** — centro `NO MONJOLO` · base `O SOM DO MONJOLO E DA VIOLA`

```
Um monjolo de madeira antigo em funcionamento à beira de um córrego, de manhã cedo, visto de lado e de perto. O braço de madeira levantado com a água da bica enchendo o cocho, o pilão prestes a bater no gral de pedra com o arroz dentro. Musgo e limo na madeira molhada, respingos suspensos no ar. Ao lado, numa pedra, uma caneca de ágata com café. Neblina fina entre as árvores ao fundo, sol baixo filtrando entre as folhas. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de verde-escuro, ocre e marrom madeira, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Um monjolo de madeira antigo à beira de um córrego de mata, visto em plano aberto de manhã cedo, com a bica d'água correndo e o braço de madeira em repouso. Pedras cobertas de musgo, samambaias nas margens, a água descendo clara. Neblina presa entre as árvores e o sol nascendo atrás, criando feixes visíveis. Composição silenciosa e profunda, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de verde-escuro, ocre e marrom madeira, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
O monjolo batendo devagar, a água da bica correndo e o café esquentando na
pedra. Uma hora e quarenta e cinco de modas de viola para a manhã mais
antiga que existe na roça.
```

---

# 49 · Alpendre · semente 49

**Título** (72) · tag `alpendre`
```
Viola Caipira ao Amanhecer no Alpendre — Toadas Caipiras para Tomar Café
```
**Capa** — centro `NO ALPENDRE` · base `TOADAS PRO CAFÉ DA MANHÃ`

```
O alpendre de uma casa de fazenda antiga visto de fora, de manhã cedo, com as colunas de madeira roliça sustentando o telhado de barro e o piso de tijolo gasto. Uma mesinha com garrafa térmica esmaltada e duas canecas de ágata, cadeira de palhinha ao lado, uma viola caipira encostada na coluna. Trepadeira florida subindo por uma das colunas. Para além, o pasto com neblina baixa e o sol nascendo. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Alpendre comprido de casa de fazenda antiga visto de dentro para fora, em perspectiva que segue as colunas de madeira roliça até o fim. Piso de tijolo gasto, cadeiras de palhinha alinhadas, mesinha com garrafa térmica e canecas, viola encostada numa coluna. Para além do alpendre, o pasto se abrindo com neblina baixa e o sol nascendo entre árvores. Composição serena e simétrica, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de ocre, verde-seco e marrom terroso, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
A garrafa térmica na mesinha, a cadeira de palhinha e o pasto acordando lá
na frente. Uma hora e quarenta e cinco de toadas caipiras para tomar café
no alpendre, sem hora pra levantar.
```

---

# 50 · Bica d'Água · semente 50

**Título** (74) · tag `bica d'água`
```
Viola Caipira ao Amanhecer na Bica d'Água — Modão de Viola para Tomar Café
```
**Capa** — centro `NA BICA D'ÁGUA` · base `ÁGUA FRIA E CAFÉ QUENTE`

```
Uma bica de bambu presa numa pedra, despejando um fio de água cristalina numa gamela de madeira, vista de perto e de manhã cedo. Musgo verde na pedra molhada, respingos congelados na luz. Ao lado, apoiada numa pedra seca, uma caneca de ágata azul com café fumegando e um chapéu de palha. Mata fechada ao fundo com o sol baixo entrando entre as folhas em feixes. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de verde-escuro, ocre e marrom terroso, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Uma bica de bambu numa encosta de mata, vista em plano aberto de manhã cedo, com a água caindo numa gamela de madeira e escorrendo pelas pedras cobertas de musgo. Samambaias e bananeiras ao redor, trilha de terra batida chegando pela esquerda. Neblina fina entre as árvores e sol nascendo atrás, com feixes visíveis atravessando. Composição fresca e silenciosa, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de verde-escuro, ocre e marrom terroso, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
A bica correndo na pedra, a água gelada na mão e o café ainda quente na
caneca. Uma hora e quarenta e cinco de modão de viola para a primeira
parada do dia.
```

---

# 51 · Igrejinha da Roça · semente 51

**Título** (76) · tag `igrejinha da roça`
```
Viola Caipira ao Amanhecer na Igrejinha da Roça — Modas Raiz para Tomar Café
```
**Capa** — centro `NA IGREJINHA DA ROÇA` · base `MODAS RAIZ DE DOMINGO CEDO`

```
Uma capela pequena e caiada no alto de um pequeno morro de fazenda, vista de frente e de baixo, no começo da manhã de domingo. Porta de madeira azul aberta, cruz simples no topo, degraus de pedra gastos. Em primeiro plano à direita, um banco de madeira com uma garrafa térmica e canecas de ágata. Flores do campo no canteiro ao lado, neblina baixa no pasto atrás, sol nascendo de lado e dourando a parede caiada. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de branco caiado, ocre e verde-seco, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Uma capela pequena e caiada no alto de um morro suave de fazenda, vista em plano aberto numa manhã de domingo, com a estradinha de terra subindo até a porta azul. Cerca de madeira acompanhando a subida, árvore grande dando sombra ao lado, cemitériozinho antigo atrás com cruzes brancas. Neblina baixa cobrindo o pasto embaixo, sol nascendo de lado e dourando a parede. Composição ampla e tranquila, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de branco caiado, ocre e verde-seco, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
Domingo de manhã, a porta da capela aberta e o sino ainda por tocar. Uma
hora e quarenta e cinco de modas raiz para o único dia da semana em que a
roça acorda devagar.
```

---

# 52 · Estação Velha · semente 52

**Título** (76) · tag `estação velha`
```
Viola Caipira ao Amanhecer na Estação Velha — Modas de Viola para Tomar Café
```
**Capa** — centro `NA ESTAÇÃO VELHA` · base `O TREM QUE NÃO PASSA MAIS`

```
A plataforma de uma estação ferroviária pequena e desativada do interior, de manhã cedo, vista ao longo dos trilhos. Prédio de tijolo aparente com janelas fechadas, telhado de barro, um banco de madeira gasto. Os trilhos tomados de mato entre os dormentes, sumindo na neblina ao fundo. Em primeiro plano no banco, uma garrafa térmica antiga e uma caneca de ágata com café. Sol nascendo no fim dos trilhos em contraluz. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, tijolo queimado e verde-seco, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Uma estação ferroviária pequena e desativada do interior vista em plano aberto de manhã cedo, com a plataforma vazia à direita e os trilhos tomados de mato correndo para o horizonte. Prédio de tijolo aparente com o reboco caindo, telhado de barro, poste de luz antigo torto. Neblina rasteira cobrindo os trilhos ao longe, sol nascendo no fim deles em contraluz dourado. Composição horizontal e melancólica, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de ocre, tijolo queimado e verde-seco, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
A plataforma vazia, o mato crescendo entre os dormentes e o trem que não
passa mais. Uma hora e quarenta e cinco de modas de viola para quem lembra
de quando a estação era o centro do mundo.
```

---

# 53 · Alto do Morro · semente 53

**Título** (76) · tag `alto do morro`
```
Viola Caipira ao Amanhecer no Alto do Morro — Modão de Viola para Tomar Café
```
**Capa** — centro `NO ALTO DO MORRO` · base `O SOL NASCENDO LÁ EMBAIXO`

```
O alto de um morro de pasto no comecinho da manhã, visto de um ponto baixo, com um mourão de cerca em primeiro plano sustentando uma caneca de ágata com café fumegando e um chapéu de palha pendurado. Logo abaixo, o vale inteiro coberto por um mar de neblina branca de onde só saem os topos das árvores, com o sol nascendo do outro lado e dourando tudo. Capim alto com orvalho no primeiro plano. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, verde-seco e dourado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Vista do alto de um morro de pasto no comecinho da manhã, em plano muito aberto, com o vale inteiro embaixo coberto por um mar de neblina branca de onde só emergem os topos das árvores e um telhado de barro ao longe. Serras escalonadas no horizonte, o sol nascendo entre elas. Cerca de madeira acompanhando a crista do morro em primeiro plano, capim alto com orvalho. Composição ampla e contemplativa, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de azul de serra, ocre e dourado, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
Lá de cima o vale inteiro some embaixo da neblina e o sol nasce no meio
dela. Uma hora e quarenta e cinco de modão de viola para quem sobe o morro
antes do dia clarear.
```

---

# 54 · Comitiva · semente 54

**Título** (72) · tag `comitiva`
```
Viola Caipira ao Amanhecer na Comitiva — Toadas Caipiras para Tomar Café
```
**Capa** — centro `NA COMITIVA` · base `CAFÉ ANTES DE SAIR COM A BOIADA`

```
Um acampamento de comitiva de boiadeiros no comecinho da manhã, visto de perto. Fogueira baixa com brasas vivas e um bule de ferro preto pendurado num tripé de madeira sobre ela, soltando vapor. Canecas de ágata em cima de um tronco, arreios e uma sela apoiados no chão, cobertores dobrados. Ao fundo desfocado, cavalos arreados e o gado começando a se levantar na neblina. Sol nascendo baixo em contraluz. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de ocre, marrom couro e dourado, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Acampamento de comitiva de boiadeiros ao amanhecer, visto em plano aberto, com a fogueira ainda acesa e o bule no tripé à esquerda, selas e arreios no chão, cavalos arreados em silhueta ao centro e a boiada se levantando dentro da neblina à direita. Pasto aberto, cerca ao longe, sol nascendo baixo e dourado atravessando a poeira e a neblina. Composição larga e quieta, sem nenhum rosto visível. Fotografia em filme 35mm com grão fino, luz natural, paleta de ocre, marrom couro e dourado, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
O bule no tripé, a fogueira apagando e a boiada começando a levantar. Uma
hora e quarenta e cinco de toadas caipiras para o café tomado em pé, antes
de montar e pegar a estrada.
```

---

# 55 · Córrego · semente 55

**Título** (70) · tag `córrego`
```
Viola Caipira ao Amanhecer no Córrego — Modas de Viola para Tomar Café
```
**Capa** — centro `NO CÓRREGO` · base `NEBLINA NA ÁGUA E CAFÉ`

```
Um córrego estreito e raso de fazenda correndo entre pedras, visto de perto e de manhã cedo, com a neblina densa subindo da água. Em primeiro plano, uma pedra plana com uma garrafa térmica esmaltada e uma caneca de ágata azul com café fumegando. Capim molhado nas margens, um tronco caído atravessando o córrego ao fundo. Sol nascendo atrás das árvores em contraluz, atravessando a neblina em feixes visíveis. Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural, paleta de verde-seco, cinza-esverdeado e ocre, profundidade de campo rasa, formato paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem deve ficar escuro e sem detalhe importante.
```

**Fundo**

```
Um córrego estreito de fazenda correndo entre pedras e capim, visto em plano aberto de manhã cedo, com neblina densa subindo da água e cobrindo as duas margens. Árvores inclinadas sobre a água, um tronco caído servindo de travessia, trilha de gado chegando pela direita. Sol nascendo atrás em contraluz com feixes atravessando a neblina, reflexo dourado na água parada. Composição horizontal e silenciosa, sem nenhuma pessoa. Fotografia em filme 35mm com grão fino, luz natural, paleta de verde-seco, cinza-esverdeado e dourado, foco profundo, formato paisagem 16:9 em alta resolução, sem nenhum texto e sem marca d'água.
```

**Descrição**
```
A neblina subindo da água, o capim molhado e o café apoiado na pedra. Uma
hora e quarenta e cinco de modas de viola para a hora em que a fazenda
ainda está em silêncio.
```

---

# Por que estes dez lugares

Já usamos 34 cenários na família Amanhecer. Estes puxam vocabulário caipira que
ainda não tinha entrado e que tem busca própria:

**Fogão de lenha** e **mesa da cozinha** são os de maior valor de busca da lista.
A "Cozinha da Roça" que já existe não captura essas duas expressões, que as
pessoas digitam inteiras.

**Monjolo, alpendre, bica d'água, comitiva** são palavras que o público de 65 anos
usa e que quase não aparecem em canal de IA — quem escreve os títulos geralmente
não conhece.

**Igrejinha da roça** abre uma ocasião nova: domingo de manhã. É a única da lista
que não é dia de trabalho, e por isso tem horário de publicação próprio.

**Estação velha** é a mais arriscada e a que mais vale medir. É puro "antes ×
agora" — o trem que não passa mais — que é o molde dos Shorts de melhor
desempenho do canal. Se funcionar no longo também, vira família.

## A diferença entre capa e fundo, em uma linha

A capa tem **profundidade rasa e um objeto herói em primeiro plano** (o café,
sempre), para funcionar em tamanho de selo. O fundo tem **foco profundo, plano
aberto e ninguém em cena**, porque é imagem para encarar 1h45 — inclusive na TV,
que é um quarto do tempo de exibição do canal.
