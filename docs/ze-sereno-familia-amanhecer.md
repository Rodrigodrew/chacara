# Zé Sereno — a família "Amanhecer"
### Doze vídeos na estrutura que o Will apontou · 17/09/2026

O Will olhou o canal e cravou: **essa é a estrutura vencedora, disparada** — a
mesma do canal dele. Os dados do Studio concordam: os dois vídeos que carregam o
canal são exatamente dessa família.

| Vídeo | Estrutura | Views (28 dias) |
|---|---|---|
| Viola Caipira ao Amanhecer na Fazenda | Amanhecer | **2.141** |
| Viola Caipira ao Amanhecer na Roça | Amanhecer | **1.091** |
| Modão Raiz Que Traz de Volta o Cheiro do Fogão de Lenha | memória | 210 |
| Modão de Viola Que Seu Avô Ouvia no Rádio de Pilha | memória | 19 |

Os de memória são mais novos, então a comparação não é limpa. Mas somada ao canal
do Will, que roda a mesma estrutura e fatura, a evidência é suficiente para parar
de procurar e começar a explorar.

---

## A fórmula, com os encaixes

```
Viola Caipira ao Amanhecer [no/na LUGAR] — [GÊNERO] [FRASE DE CAFÉ] [| Sertanejo Raiz]
```

**LUGAR** — o cenário. É a única peça que muda de verdade entre os vídeos.
**GÊNERO** — rotaciona entre `Modão de Viola`, `Modas Raiz`, `Modas de Viola` e
`Toadas Caipiras`. Quatro palavras diferentes cobrindo os quatro jeitos que o
público escreve na busca.
**FRASE DE CAFÉ** — o café aparece nos doze, sem exceção. É o gancho que o Will
manteve em todos.
**| Sertanejo Raiz** — sufixo opcional, entra em cerca de um terço.

### Sobre a regra dos 30% do ebook

O ebook do Will diz para nenhuma estrutura passar de 30% dos vídeos. Estes doze são
100% da mesma. Não é contradição: **a regra dos 30% serve para achar o vencedor;
depois de achado, o jogo é explorar.** O canal do Will roda uma estrutura só.

A regra volta a valer no dia em que esta família parar de crescer. O sinal de
alerta é views por dia-vídeo caindo três vídeos seguidos — aí voltamos a testar.

### O que acontece com os títulos de memória que já estão no ar

**Não mexer.** Eles já foram trocados uma vez; trocar de novo apaga qualquer
leitura possível. Eles ficam como estão e viram o grupo de controle. A comparação
vale a partir de 22/09, com 7 dias de cada.

Esta família entra nos **próximos** vídeos, como o Will falou.

---

## O que é igual nos doze

### As fontes

```bash
F=/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf
FB=/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf
```

### A capa

Mudei a divisão em relação ao que te mandei ontem para o Sítio, e é melhor para a
família inteira: a linha de cima passa a carregar **"VIOLA CAIPIRA AO AMANHECER"**
por extenso, e o corpo grande fica só com o **lugar**. Assim os doze ficam
visualmente idênticos e o olho só precisa ler a palavra que muda.

| Linha | Conteúdo | Corpo | Cor |
|---|---|---|---|
| Topo | VIOLA CAIPIRA AO AMANHECER | 72 | `F3E3C3` |
| **Centro** | **o lugar** | **132** | `E8C46B` |
| Base | a frase do café | 44 | `D9C9A8` |

**Medido nos doze:** o topo ocupa 1.110 px dos 1.920. A linha central mais larga
("NA VARANDA DA ROÇA") ocupa 1.495 px — sobram 212 de cada lado. A base mais larga
("MODAS RAIZ · CAFÉ NA CANECA DE ÁGATA") ocupa 910 px. Todas cabem, e o corpo 132
continua constante no canal.

```bash
ffmpeg -i capaNN-limpa.png -vf "
scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,
drawtext=fontfile=$F:text='VIOLA CAIPIRA AO AMANHECER':fontcolor=0xF3E3C3:fontsize=72:x=(w-tw)/2:y=h*0.09:shadowcolor=black@0.75:shadowx=0:shadowy=3,
drawtext=fontfile=$FB:text='O LUGAR':fontcolor=0xE8C46B:fontsize=132:x=(w-tw)/2:y=h*0.17:shadowcolor=black@0.8:shadowx=0:shadowy=4,
drawtext=fontfile=$F:text='A FRASE DO CAFÉ':fontcolor=0xD9C9A8@0.85:fontsize=44:x=(w-tw)/2:y=h*0.33:shadowcolor=black@0.7:shadowx=0:shadowy=2
" -q:v 2 capaNN.jpg

ffmpeg -i capaNN.jpg -vf "scale=1280:720,eq=contrast=1.12:saturation=1.15" -q:v 2 thumbNN.jpg
```

### O bloco-base das imagens

Cole antes de cada cena e gere os doze na mesma conversa do GPT:

> Fotografia em filme 35mm com grão visível e leve halação nas luzes, luz natural,
> paleta de ocre, verde-seco e marrom terroso, profundidade de campo rasa, formato
> paisagem 16:9, sem nenhum texto e sem marca d'água. O terço superior da imagem
> deve ficar escuro e sem detalhe importante.

Todas as doze cenas são **de manhã cedo**, com o sol ainda baixo, e todas têm
**café em quadro**. É o que amarra a família visualmente.

### A montagem

```bash
./scripts/montar-playlist.sh -d faixas -i capaNN.jpg -D 105 -e SEMENTE -o saidaNN.mp4
```

Sementes 14 a 25, uma por vídeo — nenhuma repete as já usadas, então cada vídeo
abre com uma faixa diferente. `-D 105` para 1h45: minuto por view é o que decide o
YPP, muito antes de volume de tráfego.

### O rodapé fixo da descrição

```
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

### As tags

Base igual nos doze, trocando a penúltima:

```
viola caipira, moda de viola, modão, sertanejo raiz, música caipira, modas de viola antigas, viola caipira instrumental, música da roça, toada sertaneja, sertanejo antigo, viola de dez cordas, música do interior, [PALAVRA DO VÍDEO], Zé Sereno
```

---

# Os doze

---

## 14 · Sítio · semente 14

**Título** (87 caracteres)
```
Viola Caipira ao Amanhecer no Sítio — Modão de Viola pro Café da Manhã | Sertanejo Raiz
```

**Capa** — centro `NO SÍTIO` · base `MODÃO PRO CAFÉ DA MANHÃ` · tag `café da manhã`

```
Varanda de uma casa de sítio brasileiro simples, quinze minutos depois do primeiro sol. Em primeiro plano, uma mesa de madeira gasta com uma xícara de ágata fumegando, um bule esmaltado, pão caseiro numa tábua e um pote de manteiga. Uma viola caipira de dez cordas encostada na cadeira de palhinha ao lado. Ao fundo, o quintal com um pé de mamão, galinhas ciscando na terra batida e a neblina fina ainda presa no pasto. Luz rasante e dourada entrando pela lateral direita, atravessando o vapor do café, poeira suspensa visível no facho.
```

**Descrição**
```
O café já está na mesa e a neblina ainda não saiu do pasto. Uma hora e
quarenta e cinco de viola caipira e modão para começar o dia sem pressa
nenhuma, do jeito que se começava no sítio.
```

---

## 15 · Varanda da Roça · semente 15

**Título** (83)
```
Viola Caipira ao Amanhecer na Varanda da Roça — Modas Raiz com Café Passado na Hora
```

**Capa** — centro `NA VARANDA DA ROÇA` · base `MODAS RAIZ · CAFÉ PASSADO NA HORA` · tag `café passado na hora`

```
Varanda comprida de uma casa de roça vista de dentro para fora, no comecinho da manhã. Em primeiro plano à esquerda, um coador de pano pendurado no suporte de ferro pingando café numa leiteira de ágata, vapor subindo. Cadeiras de palhinha vazias alinhadas, uma viola encostada na parede caiada. Para além do corrimão de madeira, o pasto se abrindo com neblina baixa e o sol nascendo entre duas árvores. Piso vermelho de cimento queimado, luz entrando rasante e comprida pelo chão.
```

**Descrição**
```
O coador ainda está pingando e a varanda inteira já cheira a café. Uma
hora e quarenta e cinco de modas raiz para a primeira hora do dia, com a
porta aberta e o pasto acordando.
```

---

## 16 · Rancho · semente 16

**Título** (87)
```
Viola Caipira ao Amanhecer no Rancho — Toadas Caipiras para Tomar Café | Sertanejo Raiz
```

**Capa** — centro `NO RANCHO` · base `TOADAS CAIPIRAS PRA TOMAR CAFÉ` · tag `rancho`

```
Interior de um rancho de madeira de beira de estrada, de manhã cedo, visto de dentro. Fogo baixo aceso num fogareiro de chapa, uma chaleira preta de ferro fumegando em cima, canecas de ágata penduradas em pregos na parede de tábua. Um banco tosco de madeira e uma viola caipira apoiada nele. Pela porta aberta entra uma lâmina de luz dourada do sol nascendo, cortando a fumaça e a poeira. Arreios pendurados, chão de terra batida.
```

**Descrição**
```
A chaleira já está no fogo e a porta do rancho aberta pro sol que nasce.
Uma hora e quarenta e cinco de toadas caipiras para tomar café devagar,
sem hora pra sair.
```

---

## 17 · Cafezal · semente 17

**Título** (80)
```
Viola Caipira ao Amanhecer no Cafezal — Modão de Viola com Cheiro de Café Fresco
```

**Capa** — centro `NO CAFEZAL` · base `MODÃO COM CHEIRO DE CAFÉ FRESCO` · tag `cafezal`

```
Uma rua de cafezal brasileiro vista de dentro, entre duas fileiras de pés carregados de grão vermelho maduro, no comecinho da manhã. Neblina baixa correndo entre os pés, o sol nascendo no fim da rua criando contraluz dourado e alongando as sombras pela terra vermelha. Em primeiro plano à direita, desfocado, um balaio de vime com grãos colhidos e uma caneca de ágata com café em cima dele. Orvalho brilhando nas folhas.
```

**Descrição**
```
O sol subindo no fim da rua do cafezal, o orvalho ainda nas folhas e o
cheiro do café tomando o ar. Uma hora e quarenta e cinco de modão de
viola para a manhã de quem trabalha com café.
```

---

## 18 · Chácara · semente 18

**Título** (79)
```
Viola Caipira ao Amanhecer na Chácara — Modas de Viola com Café e Pão de Queijo
```

**Capa** — centro `NA CHÁCARA` · base `MODAS DE VIOLA · CAFÉ E PÃO DE QUEIJO` · tag `pão de queijo`

```
Mesa posta no terraço de uma chácara mineira de manhã cedo, vista de cima em ângulo baixo. Pães de queijo dourados numa cesta de palha com pano xadrez, café numa garrafa térmica antiga e duas xícaras de ágata, goiabada e queijo num pires. Uma viola caipira apoiada na cadeira ao lado. Ao fundo, desfocado, o gramado com neblina e morros verdes com o sol nascendo atrás. Luz lateral quente e rasante, vapor subindo da xícara.
```

**Descrição**
```
Pão de queijo quente, café na mesa e os morros ainda embaçados de
neblina. Uma hora e quarenta e cinco de modas de viola para o café da
manhã na chácara, do jeito mineiro.
```

---

## 19 · Cozinha da Roça · semente 19

**Título** (77)
```
Viola Caipira ao Amanhecer na Cozinha da Roça — Modas Raiz com Café Quentinho
```

**Capa** — centro `NA COZINHA DA ROÇA` · base `MODAS RAIZ COM CAFÉ QUENTINHO` · tag `café quentinho`

```
Cozinha de casa de roça numa manhã fria, com o fogão de lenha aceso e a chama viva aparecendo na boca. Leiteira de ágata branca soltando vapor em cima, lenha empilhada ao lado, bule de café e canecas numa mesa de madeira em primeiro plano. Parede caiada com a tinta descascando, panelas de ágata penduradas. Toda a luz vem do fogo e de uma janelinha à esquerda por onde entra o azul da madrugada; o resto da cozinha fica em sombra quente.
```

**Descrição**
```
O fogão de lenha aceso, a leiteira chiando e o resto da casa ainda
dormindo. Uma hora e quarenta e cinco de modas raiz para a manhã fria,
com café quentinho na caneca.
```

---

## 20 · Curral · semente 20

**Título** (81)
```
Viola Caipira ao Amanhecer no Curral — Modão de Viola para o Primeiro Café do Dia
```

**Capa** — centro `NO CURRAL` · base `MODÃO PRO PRIMEIRO CAFÉ DO DIA` · tag `primeiro café do dia`

```
Curral de fazenda brasileira no comecinho da manhã, visto de dentro da porteira aberta. Neblina baixa cobrindo o pasto e o primeiro sol laranja nascendo atrás de um eucalipto alto ao fundo. Em primeiro plano desfocado, um banquinho de ordenha de madeira com uma caneca de ágata com café fumegando em cima, e uma viola caipira encostada no mourão lascado. Vacas em silhueta ao fundo, orvalho no capim, poeira dourada suspensa no ar frio.
```

**Descrição**
```
O primeiro café do dia é tomado em pé, no curral, antes de tudo começar.
Uma hora e quarenta e cinco de modão de viola para quem levanta com o
gado, não com o despertador.
```

---

## 21 · Terreiro · semente 21

**Título** (85)
```
Viola Caipira ao Amanhecer no Terreiro — Toadas Caipiras com Café Adoçado na Rapadura
```

**Capa** — centro `NO TERREIRO` · base `CAFÉ ADOÇADO NA RAPADURA` · tag `rapadura`

```
Terreiro de terra batida de uma casa de fazenda logo depois do sol nascer, varrido e limpo com as marcas da vassoura na terra. Em primeiro plano, um banco de madeira com uma caneca de ágata de café e um pedaço de rapadura quebrado num pires de folha. Uma viola caipira deitada no banco ao lado. Ao fundo, a casa caiada com a porta aberta, um cachorro deitado na soleira e o galinheiro. Sol baixo pela esquerda alongando todas as sombras.
```

**Descrição**
```
Terreiro varrido, café adoçado na rapadura e o dia inteiro pela frente.
Uma hora e quarenta e cinco de toadas caipiras para a manhã de quem
acorda com o galo.
```

---

## 22 · Beira do Rio · semente 22

**Título** (83)
```
Viola Caipira ao Amanhecer na Beira do Rio — Modas Raiz com Café na Caneca de Ágata
```

**Capa** — centro `NA BEIRA DO RIO` · base `MODAS RAIZ · CAFÉ NA CANECA DE ÁGATA` · tag `beira do rio`

```
Barranco de um rio de água parada no interior do Brasil, bem cedo, com neblina densa subindo da água. Em primeiro plano, uma pedra plana com uma caneca de ágata azul fumegando e um bule de ferro fosco ao lado, brasas apagando embaixo. Uma vara de bambu deitada e uma viola caipira apoiada num tronco. O sol nascendo do outro lado do rio em contraluz, atravessando a neblina em feixes. Mato fechado na outra margem, reflexo dourado na água.
```

**Descrição**
```
A neblina subindo do rio, o bule no fogo e nenhuma pressa de nada. Uma
hora e quarenta e cinco de modas raiz para a manhã na beira d'água, com
o café na caneca de ágata.
```

---

## 23 · Pé da Serra · semente 23

**Título** (75)
```
Viola Caipira ao Amanhecer no Pé da Serra — Modão de Viola com Café no Bule
```

**Capa** — centro `NO PÉ DA SERRA` · base `MODÃO DE VIOLA COM CAFÉ NO BULE` · tag `pé da serra`

```
Casa simples no pé de uma serra brasileira, vista de fora no comecinho da manhã, com a serra azulada e enevoada ocupando o fundo. Em primeiro plano, uma mesa de madeira rústica do lado de fora com um bule de ágata grande fumegando, canecas viradas para baixo e uma viola caipira encostada. Neblina presa na meia encosta, o sol nascendo por trás do morro em contraluz dourado. Grama alta com orvalho, cerca de madeira lascada.
```

**Descrição**
```
A serra ainda azul de neblina e o bule no meio da mesa. Uma hora e
quarenta e cinco de modão de viola para a manhã de quem mora no pé do
morro e vê o sol chegar atrasado.
```

---

## 24 · Casa da Vó · semente 24

**Título** (86)
```
Viola Caipira ao Amanhecer na Casa da Vó na Roça — Modas Raiz com Café e Broa de Milho
```

**Capa** — centro `NA CASA DA VÓ` · base `MODAS RAIZ · CAFÉ E BROA DE MILHO` · tag `broa de milho`

```
Mesa de cozinha de casa de avó na roça, de manhã cedo, vista de perto. Broas de milho douradas ainda quentes numa travessa de ágata, café numa leiteira esmaltada, xícaras de louça antiga com florzinhas, uma toalha de mesa de crochê. Ao fundo desfocado, o armário de madeira pintado de azul, um calendário velho na parede e a janela por onde entra o primeiro sol. Uma viola caipira encostada na cadeira. Luz quente e macia de manhã cedo.
```

**Descrição**
```
Broa de milho quente, café na leiteira e a toalha de crochê que só ela
tinha. Uma hora e quarenta e cinco de modas raiz para lembrar do café da
manhã na casa da vó.
```

---

## 25 · Porteira · semente 25

**Título** (83)
```
Viola Caipira ao Amanhecer na Porteira — Toadas Caipiras para Tomar Café Sem Pressa
```

**Capa** — centro `NA PORTEIRA` · base `TOADAS PRA TOMAR CAFÉ SEM PRESSA` · tag `sem pressa`

```
Porteira de madeira de uma fazenda brasileira fechada, vista de frente e um pouco de lado, no comecinho da manhã. Em primeiro plano, uma caneca de ágata com café fumegando apoiada no travessão da porteira e um chapéu de palha pendurado no mourão. Estrada de terra vermelha se perdendo na neblina do outro lado, o sol nascendo baixo no fim dela em contraluz. Arame farpado com gotas de orvalho brilhando, pasto com neblina rasteira.
```

**Descrição**
```
O café apoiado na porteira, a estrada sumindo na neblina e ninguém
esperando por você. Uma hora e quarenta e cinco de toadas caipiras para
tomar café sem pressa nenhuma.
```

---

# Como publicar

**Um por dia, na mesma hora.** Doze vídeos cobrem doze dias. O Rancho do Modão
publica 8,4 por semana e cresce — cadência não é o gargalo.

**Não leia antes de 7 dias.** Nem para comemorar, nem para corrigir.

**O que medir no fim:** views por dia-vídeo e duração média assistida, nessa ordem.
Se a duração média subir com o alvo de 1h45, o YPP deixa de ser questão de tráfego
e vira questão de tempo.

**O sinal de parar:** views por dia-vídeo caindo em três vídeos seguidos. Aí a
família saturou e a regra dos 30% volta a valer.
