# Briefing — operação de canais dark musicais
### Transferência de contexto · fechado em 16 de setembro de 2026

Este documento existe para levar o contexto de uma conversa para outra. Quem lê
não acompanhou nada do que veio antes, então tudo que importa está aqui: quem é o
operador, o que está no ar, o que os números já provaram, o que foi decidido e o
que ainda está em teste.

**Regra de leitura:** onde tem número, tem data. Número sem data é palpite, e não
entrou aqui.

---

## 1 · Quem opera

**Rodrigo Rocha Drew**, da **Propulse** — distribuidora e escola de música
brasileira, mais de 1.400 artistas na base. Os canais não são hobby: são
laboratório e produto. O que funciona neles vira material de mentoria para os
artistas da Propulse, e vira argumento comercial.

Parceiro recorrente: **Will (Dom Amorim)**, que tem um canal dark de música IA que
faturou cerca de R$ 60 mil, e um curso com ebook de títulos. A relação é de troca:
o Rodrigo deu consultoria de distribuição e direitos para os alunos do Will, o Will
deu aula de YouTube para os mentorados da Propulse.

---

## 2 · O que está no ar

### Canal A — Zé Sereno (foco atual)

Sertanejo raiz, moda de viola, em português. Personagem fictício: Zé Sereno, homem
de uns setenta anos, chapéu de palha, viola de dez cordas. Vinte letras autorais
escritas para o canal, geradas no Suno, com registro autoral.

Formato: vídeo longo (alvo 1h45) montado a partir de um pool de 20 faixas, mais
Shorts diários de trecho.

### Canal B — Amber Lantern (manutenção)

Música ambiente para mesa de RPG / D&D, em inglês. Sets temáticos ("A taverna
depois da batalha", "A estalagem na estrada"). Está em manutenção, não em foco —
a decisão está explicada no item 4.

---

## 3 · Os números que valem

### Zé Sereno — 28 dias até 15/09/2026

| | |
|---|---|
| Visualizações | 4.675 |
| Tempo de exibição | 159,6 h |
| Inscritos no período | +19 (27 no total) |
| Views nas últimas 48h | **4.109 — 88% de tudo** |

**Público:** 65+ anos 52,6%, 55–64 17,7% (70% acima de 55 anos), masculino 88,6%,
Brasil 97,9%. Tempo de exibição: celular 57,2%, **TV 25,4%**, computador 17,2%.
Novos espectadores 99,3%, recorrentes menos de 0,1%, 98,1% do tempo vem de não
inscritos.

**Shorts (mesma janela):** 1,2 mil views, 467 intencionais, 27 likes, +5 inscritos.
45,4% continuaram assistindo. Origem: feed 70,7%, **pesquisa do YouTube 27,6%** —
muito acima do normal para Shorts, e é o público de 65 anos digitando "modão de
viola" na busca.

### Os três concorrentes medidos (setembro de 2026)

| Canal | Formato | Inscritos/dia | Receita/mês | RPM |
|---|---|---|---|---|
| Chora Viola | só Shorts | **84** | US$ 7 | US$ 0,073 |
| Rancho do Modão | longos, 8,4/semana | 11 | **US$ 59** | US$ 0,343 |
| SertanejoiaRaiz | cortes automáticos | — | US$ 2 | — |

**Correlação duração ↔ receita, medida:** vídeo de 77 min → US$ 59/mês;
26 min → US$ 7; 24 min → US$ 2.

---

## 4 · O que já foi provado

### 4.1 · A lei do título

**O título precisa nomear algo que o espectador já quer.** Só duas coisas
qualificam:

- **um som que ele reconhece** — funciona no mercado em inglês ("tavern ambience",
  "D&D music");
- **uma memória ou sentimento que ele carrega** — funciona no Brasil ("o cheiro do
  fogão de lenha", "o rádio de pilha do seu avô").

**Cena que o espectador não conhece morre.** Foi o que derrubou o Amber Lantern:
títulos descrevendo cenas inventadas, que ninguém procurava. Os três concorrentes
brasileiros vencedores nomeiam memória e sentimento, sem exceção.

### 4.2 · Dois motores, funções diferentes

O Short traz **inscrito**. O vídeo longo traz **dinheiro** — 4,7× mais por mil
views. Todo Short precisa apontar para um vídeo longo, senão vira view que não
paga. Os dados do Chora Viola e do Rancho do Modão (tabela acima) são a prova.

### 4.3 · A conta que decide o canal

Para o YPP são 4.000 horas em 12 meses. O que muda a conta não é view, é **minuto
por view**:

- a 3:24 de média por view → precisa de 70.000 views
- a 28:48 de média por view → precisa de 8.300 views

**Duração média assistida é a alavanca, não volume de tráfego.** Por isso o alvo do
vídeo longo subiu de 1h para 1h45.

### 4.4 · O ebook do Will — 42 estruturas e 8 regras

As oito regras universais, que valem para qualquer canal dark musical:

1. Máximo 100 caracteres.
2. Nenhuma estrutura de título em mais de 30% dos vídeos.
3. A segunda metade do título continua a história da primeira.
4. Vender experiência, não produto.
5. Vocabulário do público, não do produtor ("modão", não "moda de viola raiz").
6. Testar em blocos de 5 a 10 vídeos, medindo VPH às 48h.
7. Pelo menos 6 "temperos" (variações) em rotação.
8. Colocar a duração no título depende do nicho — não é regra.

---

## 5 · O método de produção

**Pool com semente.** Vinte faixas na pasta e uma semente numérica geram de 10 a 15
vídeos diferentes: a semente embaralha a ordem de forma determinística e faz cada
vídeo abrir com uma faixa diferente. Derrubou a produção de 240 faixas/mês para 60.
Script: `scripts/montar-playlist.sh -e N`.

**Padrões de áudio e imagem fixos:** `loudnorm=I=-14:TP=-1.5:LRA=11`, crossfade de
3s entre faixas, imagem estática com `-tune stillimage`.

**Capas com texto grande, sempre.** O canal é 62% celular e 25% TV — a miniatura é
lida em tamanho de selo ou a três metros de distância. Corpo medido e travado: 132px
em 1920×1080 nas capas, 88px em 1080×1920 nos Shorts.

**Shorts:** 40 a 60 segundos, frase da letra escrita grande na tela, rosto humano na
cena, e a frase tirada literalmente da letra (nunca legenda genérica).

---

## 6 · Erros cometidos e as regras que saíram deles

Esta seção vale mais que as outras. Cada linha é um erro real, cometido e corrigido.

**Não leia resultado antes de 7 dias.** Um vídeo lido aos 2 dias marcava 66
views/dia e gerou três variações; aos 16 dias estava em 9,8/dia, enquanto o vídeo
antigo mantinha 17,5/dia havia três semanas. **Compare contra taxas sustentadas,
nunca contra a média do canal.**

**Pico de lançamento não é padrão.** 88% das views dos 28 dias do Zé Sereno
entraram em 48 horas. Nada sobre título é legível dentro de um pico.

**Cadência alta funciona.** A tese de "um vídeo por semana" estava errada: o Rancho
do Modão publica 8,4 por semana e cresce. O colapso do Amber Lantern foi de título,
não de frequência.

**Comprimento de Short não é o problema.** Os dois Shorts do Zé Sereno que seguram
85,2% e 87,8% têm ~60 segundos; o de 33 segundos segura 42,9%. O que decide são os
primeiros 3 segundos, não a duração.

**Duração fora do título.** Nenhum dos dois títulos vencedores (nos dois canais)
traz duração. Os concorrentes colocam a duração **na capa**, não no título.

**Corte automático destrói o canal.** O SertanejoiaRaiz gera Shorts no OpusClip e
sai com fogos de artifício e plateia de show sem relação com a música. É o canal que
menos fatura dos três.

---

## 7 · O que está em teste agora

**Teste A/B de título, em andamento.** O vídeo publicado em 13/09 manteve o título
de cena e é o controle. Os vídeos de 15/09 em diante carregam títulos de memória. A
leitura vale a partir de 22/09, com 7 dias de cada.

**Ajuste pendente nos títulos de Short.** Como 27,6% das views de Short vêm da
pesquisa, as palavras do gênero devem aparecer **escritas por extenso** no fim do
título, além da hashtag. Formato proposto:
`Ele foi embora e deixou a viola pendurada 🪕 Moda de Viola #sertanejoraiz`

**Um número que não fecha.** A tabela de conteúdo do Studio mostra um vídeo com
1.091 views e 9:02 de média, o que sozinho daria 164h — mais do que as 159,6h do
canal inteiro no período. Provável defasagem de janela do painel. Não usar
atribuição de tempo por vídeo até resolver com o print individual.

---

## 8 · Como usar este briefing

Este documento é o estado da operação em 16/09/2026, não um manual permanente. Duas
coisas para quem continuar daqui:

**Números velhos envelhecem rápido.** Qualquer análise nova deve pedir print
atualizado do Studio antes de concluir qualquer coisa.

**A seção 6 é a que não pode ser ignorada.** São erros que já custaram dinheiro e
tempo uma vez. Repetir qualquer um deles é o desperdício mais caro possível.
