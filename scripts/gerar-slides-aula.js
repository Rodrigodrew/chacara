const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';           // 13.3 x 7.5
p.author = 'Rodrigo Drew · Propulse';
p.title  = 'A Outra Metade do Dinheiro';

const BG='0C0F0D', CARD='171C19', CARD2='1E2521';
const INK='F4F6F2', INK2='96A09A', VERDE='3DDC84', AMBAR='E8A33D', BRANCO='FFFFFF';
const H='Cambria', B='Calibri', M='Courier New';
const L=0.75, W=11.8, R=13.3;

p.defineSlideMaster({ title:'ESCURO', background:{color:BG} });

const nova = () => p.addSlide({ masterName:'ESCURO' });

// etiqueta de hora no canto — o motivo que se repete
function hora(s, txt){
  s.addShape(p.ShapeType.rect, { x:11.35, y:0.4, w:1.2, h:0.38, fill:{color:BG}, line:{color:'2C332E', width:1} });
  s.addText(txt, { x:11.35, y:0.4, w:1.2, h:0.38, isTextBox:true, margin:0, align:'center',
    fontFace:M, fontSize:12, color:INK2, valign:'middle' });
}
function titulo(s, txt, y){
  s.addText(txt, { x:L, y:(y===undefined?0.62:y), w:10.4, h:1.0, isTextBox:true, margin:0,
    fontFace:H, fontSize:38, bold:true, color:INK, valign:'middle' });
}
function olho(s, txt, y){
  s.addText(txt, { x:L, y:(y===undefined?0.42:y), w:9, h:0.32, isTextBox:true, margin:0,
    fontFace:M, fontSize:11.5, color:VERDE, charSpacing:2 });
}
function divisor(s, num, tit, sub, hr){
  s.addText(num, { x:L, y:1.5, w:4, h:3.2, isTextBox:true, margin:0,
    fontFace:H, fontSize:200, bold:true, color:'1B211D', valign:'middle' });
  s.addText(tit, { x:L, y:2.4, w:11.4, h:1.5, isTextBox:true, margin:0,
    fontFace:H, fontSize:52, bold:true, color:INK, valign:'middle' });
  s.addText(sub, { x:L, y:4.05, w:9.6, h:0.9, isTextBox:true, margin:0,
    fontFace:B, fontSize:19, color:INK2 });
  hora(s, hr);
}
function card(s, x, y, w, h, cor){
  s.addShape(p.ShapeType.rect, { x, y, w, h, fill:{color:cor||CARD}, line:{color:'262E29', width:1} });
}
function alerta(s, y, tag, txt, cor){
  const c = cor||AMBAR;
  card(s, L, y, W, 1.95, CARD2);
  s.addText(tag, { x:L+0.4, y:y+0.22, w:W-0.8, h:0.3, isTextBox:true, margin:0,
    fontFace:M, fontSize:11.5, bold:true, color:c, charSpacing:2 });
  s.addText(txt, { x:L+0.4, y:y+0.58, w:W-0.8, h:1.25, isTextBox:true, margin:0,
    fontFace:B, fontSize:18, color:INK, valign:'top' });
}

/* ============ 1 · CAPA ============ */
let s = nova();
s.addText('A OUTRA METADE', { x:L, y:1.85, w:11.8, h:1.25, isTextBox:true, margin:0,
  fontFace:H, fontSize:66, bold:true, color:INK });
s.addText('DO DINHEIRO', { x:L, y:3.0, w:11.8, h:1.25, isTextBox:true, margin:0,
  fontFace:H, fontSize:66, bold:true, color:VERDE });
s.addText('Como transformar views em uma carreira musical', { x:L, y:4.35, w:10.5, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:22, color:INK2 });
s.addShape(p.ShapeType.rect, { x:L, y:5.55, w:3.3, h:0.02, fill:{color:'2C332E'} });
s.addText('RODRIGO DREW  ·  PROPULSE', { x:L, y:5.75, w:8, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:13, color:INK2, charSpacing:2 });
s.addNotes('Não comece por aqui. Comece pelo número do slide seguinte e volte para se apresentar depois. Trinta segundos de apresentação, não mais.');

/* ============ 2 · O NÚMERO ============ */
s = nova(); hora(s,'20:00');
olho(s,'O MESMO CATÁLOGO, NO MESMO PERÍODO');
card(s, L, 1.7, 5.7, 2.65);
s.addText('R$ 61.000', { x:L+0.5, y:2.5, w:4.7, h:1.1, isTextBox:true, margin:0,
  fontFace:H, fontSize:54, bold:true, color:INK });
s.addText('de AdSense em 8 meses', { x:L+0.5, y:3.55, w:4.7, h:0.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:18, color:INK2 });
s.addText('YOUTUBE', { x:L+0.5, y:2.1, w:4.7, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:12, color:INK2, charSpacing:2 });

card(s, 6.85, 1.7, 5.7, 2.65);
s.addText('€ 70', { x:7.35, y:2.5, w:4.7, h:1.1, isTextBox:true, margin:0,
  fontFace:H, fontSize:54, bold:true, color:AMBAR });
s.addText('por mês', { x:7.35, y:3.55, w:4.7, h:0.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:18, color:INK2 });
s.addText('SPOTIFY', { x:7.35, y:2.1, w:4.7, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:12, color:INK2, charSpacing:2 });
s.addText('Milhões de views de um lado. Setenta euros do outro.', { x:L, y:4.95, w:11.8, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:20, color:INK2, italic:true });
s.addNotes('VERSÃO A, se o Will autorizou: "O Will me chamou aqui por um motivo específico. Eu auditei o canal do Dom Amorim." VERSÃO B: "Um canal de música de IA que eu auditei." Confirme com ele ANTES de entrar no ar.');

/* ============ 3 · IMPACTO ============ */
s = nova();
s.addText('Setenta euros.', { x:L, y:2.1, w:11.8, h:1.3, isTextBox:true, margin:0,
  fontFace:H, fontSize:64, bold:true, color:INK });
s.addText('O Spotify daquele catálogo não estava rendendo pouco.\nEle estava desligado.', { x:L, y:3.6, w:10.5, h:1.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:26, color:VERDE, lineSpacing:36 });
s.addNotes('Segure o silêncio dois segundos depois de dizer "setenta euros". A pausa é o argumento. Depois: "quase todo mundo tira a conclusão errada — então o Spotify não vale a pena. Errado."');

/* ============ 4 · CONTRATO DA AULA ============ */
s = nova(); hora(s,'20:02');
olho(s,'O QUE VOCÊ LEVA DAQUI');
titulo(s,'Em uma hora, três coisas', 0.85);
const leva = [
  ['01','Onde está o dinheiro','que você não está recebendo hoje'],
  ['02','O que fazer na segunda','a lista inteira, item por item'],
  ['03','O que vale numa música de IA','e o que não vale — sem promessa falsa']
];
leva.forEach((it,i)=>{
  const y = 2.25 + i*1.15;
  s.addText(it[0], { x:L, y:y, w:0.9, h:0.9, isTextBox:true, margin:0,
    fontFace:M, fontSize:22, bold:true, color:VERDE, valign:'middle' });
  s.addText(it[1], { x:L+1.0, y:y+0.02, w:10.5, h:0.45, isTextBox:true, margin:0,
    fontFace:H, fontSize:25, bold:true, color:INK, valign:'middle' });
  s.addText(it[2], { x:L+1.0, y:y+0.47, w:10.5, h:0.4, isTextBox:true, margin:0,
    fontFace:B, fontSize:17, color:INK2, valign:'middle' });
});
s.addText('A parte mais valiosa está no fim. Não saia antes.', { x:L, y:6.25, w:11.8, h:0.45, isTextBox:true, margin:0,
  fontFace:B, fontSize:19, color:AMBAR, italic:true });
s.addNotes('Esta promessa é o que segura a audiência até as 20:28. Cumpra ela.');

/* ============ 5 · DIVISOR 1 ============ */
s = nova(); divisor(s,'1','Spotify for Artists','É de graça, sai em poucos dias, e é a diferença entre um lançamento com distribuição e um lançamento morto.','20:04');
s.addNotes('Bloco de 8 minutos. Comece pedindo resposta no chat.');

/* ============ 6 · A PERGUNTA ============ */
s = nova(); hora(s,'20:04');
s.addText('Quem aqui já reivindicou\no Spotify for Artists\ndo seu projeto?', { x:L, y:1.7, w:11.5, h:3.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:48, bold:true, color:INK, lineSpacing:62 });
s.addText('Escreve no chat.', { x:L, y:5.1, w:11.5, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:24, color:VERDE });
s.addNotes('Espere de verdade. O silêncio é o argumento. Depois: "então praticamente todo lançamento de vocês está nascendo sem pitch, sem Radar de Novidades, sem chance de editorial e sem dado nenhum de volta. E isso é de graça."');

/* ============ 7 · O QUE DESTRAVA ============ */
s = nova(); hora(s,'20:06');
olho(s,'O PAINEL DO ARTISTA DENTRO DO SPOTIFY');
titulo(s,'O que ele destrava', 0.85);
const destrava = [
  ['O formulário de pitch','Único caminho até as editoriais — e mesmo sem ser escolhido, garante a faixa no Radar de Novidades de quem te segue',true],
  ['Origem dos streams','Se veio de playlist, busca ou perfil. É o Analytics de vocês',false],
  ['Página do artista','Foto, bio, links. Onde a persona existe fora do YouTube',false],
  ['Canvas e Artist Pick','De graça, e sobem salvamento — que é sinal de algoritmo',false]
];
destrava.forEach((it,i)=>{
  const x = L + (i%2)*6.0, y = 2.15 + Math.floor(i/2)*2.05;
  card(s, x, y, 5.65, 1.8, it[2]?CARD2:CARD);
  s.addText(it[0], { x:x+0.35, y:y+0.22, w:5.0, h:0.42, isTextBox:true, margin:0,
    fontFace:H, fontSize:21, bold:true, color: it[2]?VERDE:INK, valign:'middle' });
  s.addText(it[1], { x:x+0.35, y:y+0.68, w:5.0, h:0.95, isTextBox:true, margin:0,
    fontFace:B, fontSize:15, color:INK2, valign:'top' });
});
s.addNotes('O primeiro card é o que importa. Nos outros três, passe rápido.');

/* ============ 8 · A REGRA ============ */
s = nova(); hora(s,'20:09');
olho(s,'A REGRA QUE DERRUBA A MAIORIA');
s.addText('Depois que a faixa saiu,\nacabou.', { x:L, y:1.3, w:11.5, h:1.9, isTextBox:true, margin:0,
  fontFace:H, fontSize:50, bold:true, color:INK, lineSpacing:62 });
s.addText('O pitch só existe para faixa ainda não lançada. O Spotify pede sete dias no mínimo; o mercado trabalha com três a quatro semanas.', { x:L, y:3.5, w:11.0, h:1.0, isTextBox:true, margin:0,
  fontFace:B, fontSize:21, color:INK2 });
alerta(s, 4.85, 'E O PIOR ARRANJO POSSÍVEL', 'Subir 24 faixas de uma vez: um pitch só, um dia só de sinal, e um padrão que os filtros antifraude leem como suspeito.');
s.addNotes('Não passe rápido por este slide. É o argumento mais concreto do bloco.');

/* ============ 9 · DIVISOR 2 ============ */
s = nova(); divisor(s,'2','Estratégia de Lançamentos','Quatro trocas. Nenhuma delas custa dinheiro — todas custam calendário.','20:12');

/* ============ 10 · ANTES / DEPOIS ============ */
s = nova(); hora(s,'20:12');
olho(s,'QUASE TODO MUNDO FAZ  →  FAÇA');
titulo(s,'As quatro trocas', 0.85);
const trocas = [
  ['Sobe 24 faixas de uma vez','Uma por semana'],
  ['Lança no dia em que termina','Entrega 3 a 4 semanas antes'],
  ['Espalha no catálogo inteiro','Concentra em poucas faixas'],
  ['YouTube e Spotify separados','Constrói a ponte entre os dois']
];
trocas.forEach((t,i)=>{
  const y = 2.2 + i*1.05;
  s.addText(t[0], { x:L, y:y, w:5.0, h:0.7, isTextBox:true, margin:0,
    fontFace:B, fontSize:19, color:INK2, valign:'middle', strike:'sngStrike' });
  s.addText('→', { x:5.9, y:y, w:0.7, h:0.7, isTextBox:true, margin:0,
    fontFace:B, fontSize:22, color:VERDE, align:'center', valign:'middle' });
  s.addText(t[1], { x:6.7, y:y, w:5.8, h:0.7, isTextBox:true, margin:0,
    fontFace:H, fontSize:21, bold:true, color:INK, valign:'middle' });
  if(i<3) s.addShape(p.ShapeType.rect, { x:L, y:y+0.88, w:W, h:0.01, fill:{color:'232A26'} });
});
s.addNotes('Trinta segundos por linha e siga. Este bloco é o mais fácil de estourar o tempo.');

/* ============ 11 · PISO DE STREAMS ============ */
s = nova(); hora(s,'20:16');
olho(s,'POR QUE CONCENTRAR');
titulo(s,'Existe um piso para gerar royalty', 0.85);
card(s, L, 2.2, 5.7, 2.4);
s.addText('20 faixas', { x:L+0.45, y:2.5, w:4.8, h:0.7, isTextBox:true, margin:0,
  fontFace:H, fontSize:34, bold:true, color:INK2 });
s.addText('com 300 streams cada', { x:L+0.45, y:3.15, w:4.8, h:0.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:17, color:INK2 });
s.addText('R$ 0,00', { x:L+0.45, y:3.7, w:4.8, h:0.6, isTextBox:true, margin:0,
  fontFace:H, fontSize:30, bold:true, color:AMBAR });

card(s, 6.85, 2.2, 5.7, 2.4, CARD2);
s.addText('1 faixa', { x:7.3, y:2.5, w:4.8, h:0.7, isTextBox:true, margin:0,
  fontFace:H, fontSize:34, bold:true, color:INK });
s.addText('com 6.000 streams', { x:7.3, y:3.15, w:4.8, h:0.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:17, color:INK2 });
s.addText('rende', { x:7.3, y:3.7, w:4.8, h:0.6, isTextBox:true, margin:0,
  fontFace:H, fontSize:30, bold:true, color:VERDE });
alerta(s, 5.0, 'DIGA ISTO EM VOZ ALTA', 'As regras mudaram em 2024 e continuam mudando — inclusive duração mínima para faixa de ruído e som ambiente. Confira os termos vigentes.');
s.addNotes('A regra de faixa funcional pega em cheio quem faz sono, chuva e lareira. Não dê número que envelhece em seis meses.');

/* ============ 12 · DIVISOR 3 ============ */
s = nova(); divisor(s,'3','Pitch & Playlists','Editoriais, algorítmicas e de usuários. A terceira é a mais acessível — e a que ninguém trabalha.','20:20');

/* ============ 13 · OS TRÊS TIPOS ============ */
s = nova(); hora(s,'20:20');
olho(s,'TRÊS PORTAS, CHANCES MUITO DIFERENTES');
titulo(s,'Os três tipos de playlist', 0.85);
const tipos = [
  ['EDITORIAL','Entra por pitch','Chance baixa para catálogo novo — mas o pitch vale pelo Radar mesmo sem seleção',INK2,CARD],
  ['ALGORÍTMICA','Não se pede','Radar, Descobertas, Rádio, Autoplay. Conquista-se por comportamento. É onde mora o volume',INK,CARD],
  ['DE USUÁRIO','Aberta a quem procurar','Curadoria de gente comum. A mais acessível e a mais ignorada',VERDE,CARD2]
];
tipos.forEach((t,i)=>{
  const x = L + i*4.0;
  card(s, x, 2.15, 3.7, 3.3, t[4]);
  s.addText(t[0], { x:x+0.35, y:2.42, w:3.0, h:0.35, isTextBox:true, margin:0,
    fontFace:M, fontSize:12, bold:true, color:t[3], charSpacing:1.5 });
  s.addText(t[1], { x:x+0.35, y:2.9, w:3.0, h:0.75, isTextBox:true, margin:0,
    fontFace:H, fontSize:22, bold:true, color:INK, valign:'top' });
  s.addText(t[2], { x:x+0.35, y:3.75, w:3.0, h:1.5, isTextBox:true, margin:0,
    fontFace:B, fontSize:15, color:INK2, valign:'top' });
});
s.addNotes('Anuncie que vai dar mais tempo às de usuário do que às editoriais. Foi o que a arte prometeu.');

/* ============ 14 · OS QUATRO SINAIS ============ */
s = nova(); hora(s,'20:23');
olho(s,'O QUE O ALGORITMO LÊ — SEMPRE OS MESMOS QUATRO');
titulo(s,'Não é sorteio', 0.85);
const sinais = ['Quem salva','Quem põe em playlist própria','Quem repete','Quem não pula nos primeiros segundos'];
sinais.forEach((t,i)=>{
  const y = 2.25 + i*0.92;
  const foco = (i===1);
  s.addShape(p.ShapeType.ellipse, { x:L, y:y+0.08, w:0.5, h:0.5, fill:{color: foco?VERDE:CARD2}, line:{color: foco?VERDE:'2C332E', width:1} });
  s.addText(String(i+1), { x:L, y:y+0.08, w:0.5, h:0.5, isTextBox:true, margin:0, align:'center', valign:'middle',
    fontFace:M, fontSize:14, bold:true, color: foco?BG:INK2 });
  s.addText(t, { x:L+0.8, y:y, w:10.6, h:0.66, isTextBox:true, margin:0,
    fontFace:H, fontSize:26, bold:true, color: foco?VERDE:INK, valign:'middle' });
});
s.addText('É retenção, com outro nome. A mesma coisa que vocês já perseguem no YouTube.', { x:L, y:6.15, w:11.8, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:19, color:INK2, italic:true });
s.addNotes('Marque o sinal 2 com a voz. Ele é o gancho do próximo slide.');

/* ============ 15 · O GANCHO ============ */
s = nova(); hora(s,'20:25');
s.addText('Playlist de usuário\nalimenta a algorítmica.', { x:L, y:1.5, w:11.5, h:2.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:46, bold:true, color:INK, lineSpacing:60 });
s.addText('Quem trabalha playlist de usuário está treinando o algoritmo, não driblando ele. E em música funcional — sono, foco, ambiente — essas playlists são gigantes, e o dono do catálogo nunca aparece por lá.', { x:L, y:3.7, w:11.0, h:1.3, isTextBox:true, margin:0,
  fontFace:B, fontSize:21, color:INK2 });
alerta(s, 5.0, 'NÃO COMPRE POSIÇÃO EM PLAYLIST', 'Viola os termos, dispara o filtro antifraude e pode custar o catálogo. Numa operação com muitos criadores, basta um para contaminar o CNPJ da agregadora inteira.');
s.addNotes('Metade da sala já recebeu essa oferta no direct. Diga com todas as letras.');

/* ============ 16 · DIVISOR 4 ============ */
s = nova(); divisor(s,'4','A outra metade do dinheiro','O que o convite prometeu e não existe em lugar nenhum no YouTube.','20:28');
s.addNotes('Respire. Baixe o ritmo em vez de acelerar. Este é o bloco pelo qual os outros três existem.');

/* ============ 17 · DUAS COISAS ============ */
s = nova(); hora(s,'20:28');
olho(s,'A SEPARAÇÃO QUE RESOLVE TUDO');
titulo(s,'Toda música é duas coisas', 0.85);
const camadas = [
  ['A OBRA','A composição','Melodia e letra. Existe no papel, independente de gravação.','Autor, compositor e editora'],
  ['O FONOGRAMA','A gravação','Aquela gravação específica. É o arquivo, a fixação dos sons.','Produtor fonográfico e intérprete']
];
camadas.forEach((c,i)=>{
  const x = L + i*6.0;
  card(s, x, 2.15, 5.65, 3.1, i===1?CARD2:CARD);
  s.addText(c[0], { x:x+0.4, y:2.42, w:4.9, h:0.35, isTextBox:true, margin:0,
    fontFace:M, fontSize:12, bold:true, color:i===1?VERDE:INK2, charSpacing:1.5 });
  s.addText(c[1], { x:x+0.4, y:2.85, w:4.9, h:0.6, isTextBox:true, margin:0,
    fontFace:H, fontSize:28, bold:true, color:INK });
  s.addText(c[2], { x:x+0.4, y:3.55, w:4.9, h:0.9, isTextBox:true, margin:0,
    fontFace:B, fontSize:16.5, color:INK2 });
  s.addText('TITULAR:  '+c[3], { x:x+0.4, y:4.6, w:4.9, h:0.4, isTextBox:true, margin:0,
    fontFace:M, fontSize:11.5, color:i===1?VERDE:INK2 });
});
s.addText('Direitos diferentes. Titulares diferentes. Caminhos de pagamento diferentes.', { x:L, y:5.65, w:11.8, h:0.5, isTextBox:true, margin:0,
  fontFace:H, fontSize:22, bold:true, color:INK });
s.addNotes('Guarde essa frase — é o resto da aula.');

/* ============ 18 · A IA ============ */
s = nova(); hora(s,'20:31');
olho(s,'ONDE A IA COMPLICA, E ONDE NÃO COMPLICA');
titulo(s,'O que dá para reivindicar', 0.85);
card(s, L, 2.15, 5.65, 3.0);
s.addText('TERRENO INSTÁVEL', { x:L+0.4, y:2.42, w:4.9, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:12, bold:true, color:AMBAR, charSpacing:1.5 });
s.addText('Autoria da obra', { x:L+0.4, y:2.85, w:4.9, h:0.55, isTextBox:true, margin:0,
  fontFace:H, fontSize:26, bold:true, color:INK });
s.addText('A lei protege criação intelectual de pessoa. Composição inteiramente gerada por máquina não tem base firme — e a regulação ainda está sendo escrita.', { x:L+0.4, y:3.5, w:4.9, h:1.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:16, color:INK2 });

card(s, 6.85, 2.15, 5.65, 3.0, CARD2);
s.addText('DEFENSÁVEL — E ONDE ESTÁ MAIS DINHEIRO', { x:7.25, y:2.42, w:4.9, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:11, bold:true, color:VERDE, charSpacing:1 });
s.addText('Direito conexo', { x:7.25, y:2.85, w:4.9, h:0.55, isTextBox:true, margin:0,
  fontFace:H, fontSize:26, bold:true, color:INK });
s.addText('Não depende de autoria criativa. Produtor fonográfico depende de iniciativa, responsabilidade e investimento — que é o que você faz ao gerar, curar, editar e publicar.', { x:7.25, y:3.5, w:4.9, h:1.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:16, color:INK2 });

s.addText('PARA FORTALECER A OBRA', { x:L, y:5.45, w:11.8, h:0.35, isTextBox:true, margin:0,
  fontFace:M, fontSize:11.5, color:VERDE, charSpacing:2 });
const fort = ['Escreva a letra','Guarde prompts e versões','Leia a licença do seu plano','Não declare o que não fez'];
fort.forEach((t,i)=>{
  const x = L + i*2.95;
  card(s, x, 5.85, 2.7, 0.85);
  s.addText(t, { x:x+0.18, y:5.85, w:2.34, h:0.85, isTextBox:true, margin:0, align:'center', valign:'middle',
    fontFace:B, fontSize:14.5, color:INK });
});
s.addNotes('Contribuição humana que não está documentada, na prática, não existe. Passe rápido nos quatro chips — o próximo slide é o que importa aqui.');

/* ============ 18b · A RESSALVA ============ */
s = nova(); hora(s,'20:33');
olho(s,'ANTES DE QUALQUER CADASTRO');
s.addText('Eu não sou advogado\ne isto não é parecer jurídico.', { x:L, y:1.9, w:11.5, h:2.2, isTextBox:true, margin:0,
  fontFace:H, fontSize:44, bold:true, color:INK, lineSpacing:58 });
s.addText('É o mapa de como o mercado opera e de onde estão os riscos.', { x:L, y:4.3, w:11.0, h:0.6, isTextBox:true, margin:0,
  fontFace:B, fontSize:24, color:INK2 });
s.addText('Antes de cadastrar 400 obras, valide com um advogado de direito autoral.', { x:L, y:5.25, w:11.0, h:0.9, isTextBox:true, margin:0,
  fontFace:H, fontSize:26, bold:true, color:AMBAR });
s.addNotes('Diga inteiro, sem cortar. A ressalva fortalece a aula — essa plateia já ouviu promessa demais de quem não põe ressalva em nada.');

/* ============ 19 · STJ ============ */
s = nova(); hora(s,'20:34');
s.addText('No Brasil, streaming\né execução pública.', { x:L, y:1.6, w:11.5, h:2.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:50, bold:true, color:INK, lineSpacing:64 });
s.addText('Superior Tribunal de Justiça · 2017', { x:L, y:3.8, w:11.5, h:0.5, isTextBox:true, margin:0,
  fontFace:M, fontSize:16, color:VERDE, charSpacing:1.5 });
s.addText('Cada stream gera duas arrecadações — e quase ninguém aqui recolhe a segunda.', { x:L, y:4.75, w:11.0, h:0.9, isTextBox:true, margin:0,
  fontFace:B, fontSize:24, color:INK2 });
s.addNotes('Este é o slide-chave da aula inteira. Pausa antes e depois.');

/* ============ 20 · DIAGRAMA ============ */
s = nova(); hora(s,'20:35');
olho(s,'O CAMINHO DO DINHEIRO DE UM STREAM');
titulo(s,'As duas rotas', 0.85);
function cx(x,y,w,h,tit,sub,cor){
  s.addShape(p.ShapeType.rect, { x, y, w, h, fill:{color:CARD}, line:{color:cor||'3A423C', width: cor?2:1} });
  s.addText(tit, { x:x, y:y+0.13, w:w, h:0.4, isTextBox:true, margin:0, align:'center',
    fontFace:H, fontSize:17, bold:true, color:INK, valign:'middle' });
  s.addText(sub, { x:x, y:y+0.54, w:w, h:0.3, isTextBox:true, margin:0, align:'center',
    fontFace:M, fontSize:9, color:INK2, valign:'middle' });
}
// so segmentos horizontais e verticais: nenhuma diagonal para inverter
function seteH(x1,x2,y,cor,tracejado){
  const o = { x:x1, y:y, w:(x2-x1), h:0.001, line:{ color:cor, width:2, endArrowType:'triangle' } };
  if(tracejado) o.line.dashType='dash';
  s.addShape(p.ShapeType.line, o);
}
function ligaH(x1,x2,y,cor){ s.addShape(p.ShapeType.line,{ x:x1, y:y, w:(x2-x1), h:0.001, line:{color:cor,width:2} }); }
function ligaV(x,y1,y2,cor){ s.addShape(p.ShapeType.line,{ x:x, y:y1, w:0.001, h:(y2-y1), line:{color:cor,width:2} }); }

const YA = 2.35, YB = 4.55, HC = 0.95;      // linhas das duas rotas
const CA = YA + HC/2, CB = YB + HC/2;        // centros verticais

cx(0.75, 3.05, 1.75, HC, 'Ouvinte', '1 STREAM');
seteH(2.50, 2.92, 3.525, '6C746E');
cx(2.95, 3.05, 1.95, HC, 'Spotify', 'DIVIDE O BOLO');

// cotovelo: sai do Spotify, sobe e desce
ligaH(4.90, 5.20, 3.525, '6C746E');
ligaV(5.20, CA, CB, '6C746E');
seteH(5.20, 5.53, CA, VERDE);
seteH(5.20, 5.53, CB, AMBAR, true);

s.addText('ROTA DO FONOGRAMA', { x:5.55, y:1.95, w:3.4, h:0.3, isTextBox:true, margin:0,
  fontFace:M, fontSize:10, color:VERDE, charSpacing:1 });
cx(5.55, YA, 2.45, HC, 'Distribuidora', 'E INTERMEDIÁRIOS', VERDE);
seteH(8.00, 8.33, CA, VERDE);
cx(8.35, YA, 2.25, HC, 'Cada elo', 'TIRA A SUA PARTE', VERDE);
seteH(10.60, 10.93, CA, VERDE);
cx(10.95, YA, 1.85, HC, 'Chega', 'ESMAGADO', VERDE);

s.addText('ROTA DA OBRA', { x:5.55, y:5.62, w:3.4, h:0.3, isTextBox:true, margin:0,
  fontFace:M, fontSize:10, color:AMBAR, charSpacing:1 });
cx(5.55, YB, 2.45, HC, 'ECAD', 'EXECUÇÃO PÚBLICA', AMBAR);
seteH(8.00, 8.33, CB, AMBAR, true);
cx(8.35, YB, 2.25, HC, 'Associação', 'SÓ PARA FILIADOS', AMBAR);
seteH(10.60, 10.93, CB, AMBAR, true);
cx(10.95, YB, 1.85, HC, 'Ou não', 'CHEGA NADA', AMBAR);

s.addText('A rota de cima todo mundo aqui já tem. A de baixo só existe se você fizer existir.', { x:L, y:6.45, w:11.8, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:19, color:INK2, italic:true });
s.addNotes('A rota de cima: o problema dela é o número de elos — distribuidora que revende para distribuidora entrega royalty esmagado. A de baixo não vem pela distribuidora, e ninguém avisa que ela está lá.');

/* ============ 21 · NÃO PARA NO STREAMING ============ */
s = nova(); hora(s,'20:37');
olho(s,'EXECUÇÃO PÚBLICA NÃO É SÓ STREAMING');
titulo(s,'É todo lugar que toca', 0.85);
const lugares = ['Rádio','TV','Show','Pousada','Restaurante','Academia','Loja','Bar'];
lugares.forEach((t,i)=>{
  const x = L + (i%4)*2.95, y = 2.2 + Math.floor(i/4)*1.15;
  card(s, x, y, 2.7, 0.95);
  s.addText(t, { x:x, y:y, w:2.7, h:0.95, isTextBox:true, margin:0, align:'center', valign:'middle',
    fontFace:H, fontSize:20, bold:true, color:INK });
});
s.addText('Música ambiente vive exatamente nesses lugares.\nQuem já recebeu comentário de alguém que ouviu a sua faixa numa pousada tem execução pública acontecendo — e ninguém recolhendo.', { x:L, y:4.75, w:11.5, h:1.4, isTextBox:true, margin:0,
  fontFace:B, fontSize:20, color:INK2, lineSpacing:30 });
s.addNotes('Pergunte se alguém já recebeu esse tipo de comentário. Costuma aparecer mão levantada.');

/* ============ 22 · O RISCO ============ */
s = nova(); hora(s,'20:38');
olho(s,'O ESPELHO DISSO, E É URGENTE');
s.addText('Sem fonograma registrado,\noutro pode reivindicar\no seu catálogo.', { x:L, y:1.5, w:11.5, h:2.4, isTextBox:true, margin:0,
  fontFace:H, fontSize:42, bold:true, color:INK, lineSpacing:56 });
alerta(s, 4.3, 'COMO ACONTECE', 'Alguém registra o fonograma antes de você e passa a receber via Content ID pelo seu próprio vídeo — ou derruba a sua monetização. O prejuízo é retroativo.');
s.addText('Não é hipótese de manual. Acontece.', { x:L, y:6.5, w:11.5, h:0.5, isTextBox:true, margin:0,
  fontFace:B, fontSize:20, color:AMBAR, italic:true });
s.addNotes('Feche o bloco com o risco. É o que fica na cabeça até a oferta.');

/* ============ 23 · A PONTE ============ */
s = nova(); hora(s,'20:40');
s.addText('Nada disso é sobre\nfazer música.', { x:L, y:1.7, w:11.5, h:2.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:52, bold:true, color:INK, lineSpacing:66 });
s.addText('É sobre o que acontece com a música depois que ela existe.', { x:L, y:3.95, w:11.0, h:0.7, isTextBox:true, margin:0,
  fontFace:B, fontSize:26, color:VERDE });
s.addText('O Will já resolveu a primeira metade com vocês: fabricar catálogo e virar catálogo em tráfego. E vocês têm o AdSense provando que funciona.', { x:L, y:5.0, w:11.0, h:1.0, isTextBox:true, margin:0,
  fontFace:B, fontSize:19, color:INK2 });
s.addNotes('Não pule para o preço antes desta ponte. Ela é o que faz a oferta parecer conclusão, e não anexo.');

/* ============ 24 · O COMBO ============ */
s = nova(); hora(s,'20:41');
olho(s,'MENTORIA CARREIRA MUSICAL COMPLETA');
titulo(s,'As duas metades', 0.85);
const linhas = [
  ['Produzir o catálogo', true, false],
  ['Construir e monetizar o canal', true, false],
  ['Estrutura de lançamento no streaming', false, true],
  ['Spotify for Artists e pitch', false, true],
  ['Playlists de usuário e crescimento', false, true],
  ['Obra, fonograma e associação', false, true],
  ['Distribuição em cadeia curta', false, true],
  ['Proteção do catálogo e Content ID', false, true]
];
s.addText('WILL', { x:8.4, y:2.05, w:1.9, h:0.3, isTextBox:true, margin:0, align:'center',
  fontFace:M, fontSize:12, bold:true, color:INK2, charSpacing:1.5 });
s.addText('PROPULSE', { x:10.5, y:2.05, w:2.0, h:0.3, isTextBox:true, margin:0, align:'center',
  fontFace:M, fontSize:12, bold:true, color:VERDE, charSpacing:1.5 });
linhas.forEach((l,i)=>{
  const y = 2.38 + i*0.48;
  s.addText(l[0], { x:L, y:y, w:7.4, h:0.44, isTextBox:true, margin:0,
    fontFace:B, fontSize:17, color:INK, valign:'middle' });
  s.addText(l[1]?'✓':'—', { x:8.4, y:y, w:1.9, h:0.44, isTextBox:true, margin:0, align:'center', valign:'middle',
    fontFace:B, fontSize:18, bold:l[1], color: l[1]?INK:'3E4642' });
  s.addText(l[2]?'✓':'—', { x:10.5, y:y, w:2.0, h:0.44, isTextBox:true, margin:0, align:'center', valign:'middle',
    fontFace:B, fontSize:18, bold:l[2], color: l[2]?VERDE:'3E4642' });
  s.addShape(p.ShapeType.rect, { x:L, y:y+0.46, w:W, h:0.008, fill:{color:'1E2521'} });
});
s.addText('Uma máquina de tráfego  +  um catálogo que arrecada', { x:L, y:6.55, w:11.8, h:0.5, isTextBox:true, margin:0,
  fontFace:H, fontSize:21, bold:true, color:INK });
s.addNotes('A tabela É a oferta: mostra que as duas mentorias não competem em nenhuma linha. Diga o preço em voz alta e cole o link no chat AGORA, antes das perguntas.');

/* ============ 25 · FECHO ============ */
s = nova();
s.addText('R$ 61.000', { x:L, y:1.7, w:5.5, h:1.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:44, bold:true, color:INK });
s.addText('€ 70', { x:L, y:2.75, w:5.5, h:1.0, isTextBox:true, margin:0,
  fontFace:H, fontSize:44, bold:true, color:AMBAR });
s.addText('A distância entre esses dois números\nnão é o mercado.', { x:L, y:4.1, w:11.0, h:1.3, isTextBox:true, margin:0,
  fontFace:H, fontSize:32, bold:true, color:INK, lineSpacing:44 });
s.addText('É uma lista de coisas que cabe numa página — e eu acabei de mostrar a lista inteira.', { x:L, y:5.5, w:11.0, h:0.6, isTextBox:true, margin:0,
  fontFace:B, fontSize:21, color:INK2 });
s.addText('O link está no chat.', { x:L, y:6.25, w:11.0, h:0.55, isTextBox:true, margin:0,
  fontFace:H, fontSize:26, bold:true, color:VERDE });
s.addNotes('Quem quiser fazer sozinho, agora tem o mapa. Quem quiser fazer acompanhado, o link está no chat. Depois abra as perguntas — 15 minutos.');

p.writeFile({ fileName:'A-Outra-Metade-do-Dinheiro.pptx' }).then(f=>console.log('gerado:', f));
