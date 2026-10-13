# Zé Sereno — Shorts em vídeo
### O personagem fazendo coisas do dia a dia · 13/10/2026

## Por que mudar

Os Shorts de imagem parada com frase chegaram a 500–1.100 views cada, mas trazem
pouco inscrito. O motivo é simples: **ninguém assina um canal por causa de uma
frase bonita.** Assina por causa de alguém que quer ver de novo.

Um personagem que reaparece fazendo a mesma rotina cria duas coisas que a imagem
parada não cria: **reconhecimento** (ele já viu esse velho antes) e **expectativa**
(amanhã tem outro). É o que transforma view em inscrito.

## A ferramenta

**Kling** é a escolha principal, por um motivo específico: é o modelo mais citado
para **consistência de personagem entre gerações separadas**, com sistema de até
quatro imagens de referência. Para a nossa necessidade — o mesmo velho em doze
vídeos diferentes — isso é o critério que decide, acima de qualidade de imagem.

**Veo 3.1** é o melhor em realismo e tem áudio nativo, e também aceita imagens de
referência. Vale se o orçamento permitir e se a consistência se mostrar suficiente
nos testes.

**Hailuo** é a opção barata para testar volume.

Os preços variam muito entre as fontes (Kling a partir de ~US$7–9/mês, Veo de
US$8 a US$250/mês dependendo da qualidade). **Confirme na página oficial** e teste
nos planos gratuitos antes de assinar.

## O método que garante o mesmo Zé Sereno

**1 · Crie a folha de personagem primeiro.** No GPT, na mesma conversa onde você
gerou as capas, peça quatro imagens do Zé Sereno: rosto de frente, rosto de perfil,
corpo inteiro de pé, e corpo inteiro sentado. Mesma roupa nas quatro.

```
Quatro retratos do mesmo homem, em uma única imagem dividida em quatro quadros iguais: rosto de frente, rosto de perfil, corpo inteiro de pé e corpo inteiro sentado. Homem brasileiro de uns setenta anos, magro, pele marcada de sol, bigode grisalho farto, olhos pequenos e vincados, chapéu de palha surrado, camisa xadrez desbotada de mangas dobradas, calça de brim gasta e botina de couro. Fundo neutro cinza claro, luz de estúdio suave e uniforme, sem sombra dura. Fotografia realista, nitidez alta, sem nenhum texto e sem marca d'água.
```

**2 · Essas quatro imagens são a referência fixa.** Toda geração de vídeo usa elas.
É isso, e não o texto do prompt, que mantém o rosto igual.

**3 · Um clipe, uma ação só.** Vídeo de IA quebra quando a ação é complexa. Cada
prompt abaixo tem um gesto único e câmera quase parada.

**4 · Sem fala.** Não tente sincronizar lábios em português — é onde tudo
desmorona e vira estranho. A trilha é a música do canal, e o Zé Sereno só age.

**5 · Monte de 2 a 3 clipes por Short.** Cada clipe sai com 5 a 10 segundos; três
clipes dão um Short de 20 a 30 segundos, que é a duração que o canal já validou.

```bash
ffmpeg -f concat -safe 0 -i lista.txt -c:v libx264 -pix_fmt yuv420p -an bruto.mp4
ffmpeg -i bruto.mp4 -i corteNN.wav -c:v copy -c:a aac -b:a 192k -shortest shortNN.mp4
```

## O que faz virar inscrito

**Mesma hora, todo dia.** A rotina do personagem só vira expectativa se a sua
também for.

**Mesma abertura nos doze.** O primeiro segundo sempre com o Zé Sereno já em
movimento, nunca com paisagem. O rosto dele é a marca.

**A frase na tela continua**, em corpo 88, igual aos Shorts atuais — mas agora
embaixo, para não cobrir o rosto.

**Peça a inscrição no último clipe.** Nenhum dos seus Shorts atuais pede. Uma linha
só: "Todo dia uma moda nova. Se inscreve."

---

# Os doze clipes

Formato: vertical 9:16, 5 a 10 segundos, câmera parada ou com movimento mínimo.
Em todos: usar as quatro imagens de referência do Zé Sereno.

## 1 · Coando o café

```
O homem das imagens de referência, de pé numa cozinha de roça de manhã cedo, coando café num coador de pano sobre uma leiteira de ágata. Ele despeja a água fervente devagar, em movimento circular, e o vapor sobe. Olha para o café, não para a câmera. Fogão de lenha aceso ao fundo jogando luz quente. Câmera parada, plano médio na altura do peito, vertical 9:16. Luz natural de manhã, filme 35mm com grão, paleta de ocre e âmbar. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** QUEM TOMA CAFÉ CORRENDO / TÁ FUGINDO DE SI MESMO

## 2 · Calçando a bota

```
O homem das imagens de referência, sentado num banco de madeira na varanda de uma casa de fazenda antes do amanhecer, calçando uma botina de couro. Ele puxa o cano da bota com as duas mãos, bate o pé no chão duas vezes e olha para o pasto. Lamparina acesa no batente ao lado. Câmera parada, plano aberto baixo, vertical 9:16. Céu ainda azul-escuro com laranja no horizonte, filme 35mm com grão, paleta de azul de madrugada e âmbar. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** INDA É NOITE NO TERREIRO / QUANDO EU CALÇO A MINHA BOTA

## 3 · Tirando o leite

```
O homem das imagens de referência, sentado num banquinho de ordenha de três pernas dentro de um curral de madeira ao amanhecer, tirando leite de uma vaca. Movimento ritmado das mãos, o leite esguichando no balde de alumínio, vapor subindo no ar frio. Ele está de lado para a câmera, concentrado. Câmera parada, plano médio, vertical 9:16. Lâminas de luz laranja entrando entre as tábuas, filme 35mm com grão, paleta de ocre e marrom terroso. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** MEU AVÔ CANTAVA / TIRANDO O LEITE

## 4 · Afinando a viola

```
O homem das imagens de referência, sentado numa cadeira de palhinha na varanda, afinando uma viola caipira de dez cordas. Ele gira uma cravelha devagar, toca uma corda, inclina a cabeça para escutar e gira de novo. Expressão concentrada, olhos baixos. Câmera parada, plano médio aproximado, vertical 9:16. Luz dourada de fim de tarde entrando de lado, filme 35mm com grão, paleta de ocre e marrom madeira. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** FOI MEU PAI QUEM ME ENSINOU / PONTEADO E DISSABOR

## 5 · Rachando lenha

```
O homem das imagens de referência, de pé num quintal de terra batida de manhã, rachando lenha com um machado. Ele levanta o machado, desce com força e a acha se parte em duas, caindo para os lados. Depois endireita o corpo e respira. Pilha de lenha ao lado. Câmera parada, plano aberto, vertical 9:16. Luz rasante de manhã, poeira e lascas suspensas no ar, filme 35mm com grão, paleta de ocre e verde-seco. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** O FOGO NÃO ACENDE SOZINHO

## 6 · Dando milho pras galinhas

```
O homem das imagens de referência, de pé num quintal de casa de roça de manhã, jogando milho para as galinhas com a mão, de um balaio apoiado no braço. Movimento largo do braço espalhando os grãos, as galinhas correndo até os pés dele. Ele sorri de leve, sem olhar para a câmera. Câmera parada, plano aberto, vertical 9:16. Luz dourada de manhã, poeira levantada pelas galinhas, filme 35mm com grão, paleta de ocre e verde-seco. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** BICHO CRIADO EM CASA / CONHECE O PASSO DO DONO

## 7 · Tomando café olhando o pasto

```
O homem das imagens de referência, de pé encostado no parapeito de uma varanda ao amanhecer, segurando uma caneca de ágata com as duas mãos. Ele sopra o café, toma um gole devagar e volta a olhar o pasto com neblina. Nenhuma pressa no gesto. Câmera parada, plano médio de costas em três quartos, vertical 9:16. Sol nascendo de frente para ele, contraluz dourado, filme 35mm com grão, paleta de ocre e verde-seco. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** O PRIMEIRO CAFÉ DO DIA / NÃO É PRA MATAR A SEDE

## 8 · Fechando a porteira

```
O homem das imagens de referência, fechando uma porteira de madeira de fazenda no fim da tarde. Ele empurra a folha da porteira, passa a corrente e dá uma batidinha com a mão na madeira antes de sair. Chapéu de palha na cabeça. Câmera parada, plano aberto, vertical 9:16. Sol baixo e alaranjado atrás dele, poeira dourada no ar, filme 35mm com grão, paleta de ocre e terra vermelha. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** TODO DIA A MESMA PORTEIRA / HÁ CINQUENTA ANOS

## 9 · Esperando a chuva

```
O homem das imagens de referência, de pé na varanda no fim da tarde, olhando para uma nuvem preta e carregada que se forma no horizonte sobre um pasto seco. Ele tira o chapéu, passa a mão na testa e volta a olhar o céu. Expressão de espera. Câmera parada, plano médio de costas em três quartos, vertical 9:16. Luz amarelada e abafada de céu antes de temporal, filme 35mm com grão, paleta de ocre e cinza-chumbo. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** O SERTANEJO NÃO QUER MUITO / QUER SÓ ÁGUA NA ENXADA

## 10 · Acendendo o fogão de lenha

```
O homem das imagens de referência, agachado na frente de um fogão de lenha numa cozinha de roça antes do amanhecer, acendendo o fogo. Ele risca um fósforo, encosta no gravetos e assopra devagar; a chama cresce e ilumina o rosto dele de baixo. Câmera parada, plano médio aproximado, vertical 9:16. Toda a luz vem do fogo que nasce, o resto da cozinha em penumbra, filme 35mm com grão, paleta de âmbar e marrom terroso. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** A CASA ACORDA / QUANDO O FOGO ACENDE

## 11 · Selando o cavalo

```
O homem das imagens de referência, ao lado de um cavalo baio na frente de um galpão ao amanhecer, apertando a cilha da sela. Ele puxa a correia, dá dois tapinhas no pescoço do cavalo e ajeita o chapéu. O cavalo mexe a orelha. Câmera parada, plano aberto de lado, vertical 9:16. Sol nascendo baixo atrás, neblina rasteira no pasto, filme 35mm com grão, paleta de ocre e marrom couro. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** MEU CAVALO SABE O PASSO / MEU DESTINO SABE O CÉU

## 12 · Ponteando no fim do dia

```
O homem das imagens de referência, sentado numa cadeira de balanço na varanda no fim da tarde, ponteando uma viola caipira. Os dedos da mão direita dedilham as cordas, o pé marca o compasso no chão de tábua, a cadeira balança devagar. Ele olha para o pasto, não para a câmera. Câmera parada, plano médio, vertical 9:16. Sol baixo e dourado entrando de lado, filme 35mm com grão, paleta de ocre e dourado. Sem texto, sem legenda, sem marca d'água.
```
**Frase na tela:** ENQUANTO TIVER CORDA / ESSA VIOLA TÁ GEMENDO

---

# Como medir se funcionou

Não é view. É **inscrito por mil views**. O canal hoje está em 5,8; os Shorts de
imagem parada ficam abaixo disso. Se os de vídeo passarem de 8, a troca se pagou.

E a regra de sempre: **não leia antes de 7 dias.**
