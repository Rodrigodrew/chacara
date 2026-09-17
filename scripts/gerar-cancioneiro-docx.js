const fs = require('fs');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        BorderStyle, PageBreak, TabStopType } = d;

const SRC = '/home/user/chacara/docs/letras-ze-sereno-21-30.md';
const OUT = '/home/user/chacara/docs/Cancioneiro-Ze-Sereno-21-30.docx';

const SERIF = 'Cambria';
const MONO  = 'Consolas';
const OCRE  = '8A5710';
const TINTA = '1A1A1A';
const CINZA = '5A5A5A';

// ---- inline: **negrito**, *italico*, `codigo` ------------------------------
function runs(txt, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let i = 0, m;
  while ((m = re.exec(txt)) !== null) {
    if (m.index > i) out.push(new TextRun({ text: txt.slice(i, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else if (t.startsWith('`')) out.push(new TextRun({ text: t.slice(1, -1), font: MONO, size: 19, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    i = m.index + t.length;
  }
  if (i < txt.length) out.push(new TextRun({ text: txt.slice(i), ...base }));
  return out.length ? out : [new TextRun({ text: '', ...base })];
}

const P = (txt, o = {}) => new Paragraph({
  children: runs(txt, o.run || {}),
  spacing: { after: o.after ?? 60, line: o.line ?? 240 },
  alignment: o.align,
  indent: o.indent,
  border: o.border,
  shading: o.shading,
});

const linhas = fs.readFileSync(SRC, 'utf8').split('\n');
const body = [];
let i = 0, primeiraFaixa = true;

while (i < linhas.length) {
  const l = linhas[i];

  // bloco de letra ----------------------------------------------------------
  if (l.trim() === '```') {
    i++;
    const bloco = [];
    while (i < linhas.length && linhas[i].trim() !== '```') bloco.push(linhas[i++]);
    i++;
    // tira linhas em branco do começo e do fim
    while (bloco.length && !bloco[0].trim()) bloco.shift();
    while (bloco.length && !bloco[bloco.length - 1].trim()) bloco.pop();
    bloco.forEach((ln) => {
      const marca = /^\[.+\]$/.test(ln.trim());
      body.push(new Paragraph({
        children: [new TextRun({
          text: ln.trim() || ' ',
          font: marca ? SERIF : MONO,
          size: marca ? 17 : 18,
          bold: marca,
          color: marca ? OCRE : TINTA,
          allCaps: false,
        })],
        spacing: { after: marca ? 25 : 0, before: marca ? 75 : 0, line: 210 },
        indent: { left: 560 },
      }));
    });
    continue;
  }

  // citação -----------------------------------------------------------------
  if (l.startsWith('> ')) {
    const buf = [];
    while (i < linhas.length && (linhas[i].startsWith('>'))) {
      const t = linhas[i].replace(/^>\s?/, '');
      if (!t.trim()) { if (buf.length) { body.push(cita(buf.join(' '))); buf.length = 0; } }
      else buf.push(t);
      i++;
    }
    if (buf.length) body.push(cita(buf.join(' ')));
    body.push(P('', { after: 100 }));
    continue;
  }

  // títulos -----------------------------------------------------------------
  if (l.startsWith('## ')) {
    const eFaixa = /^## \d+ ·/.test(l);
    const quebra = eFaixa && !primeiraFaixa;
    if (eFaixa) primeiraFaixa = false;
    body.push(new Paragraph({
      children: runs(l.slice(3), { color: OCRE, font: SERIF, size: 28, bold: true }),
      heading: HeadingLevel.HEADING_2,
      pageBreakBefore: quebra,
      spacing: { before: eFaixa ? 0 : 300, after: 110 },
    }));
    i++; continue;
  }
  if (l.startsWith('### ')) {
    body.push(new Paragraph({
      children: runs(l.slice(4), { color: CINZA, font: SERIF, size: 22, italics: true }),
      spacing: { after: 240 }, alignment: AlignmentType.CENTER,
    }));
    i++; continue;
  }
  if (l.startsWith('# ')) {
    body.push(new Paragraph({
      children: runs(l.slice(2), { font: SERIF, size: 40, bold: true, color: TINTA }),
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 160 }, alignment: AlignmentType.CENTER,
    }));
    i++; continue;
  }

  // régua -------------------------------------------------------------------
  if (l.trim() === '---') {
    let j = i + 1;
    while (j < linhas.length && !linhas[j].trim()) j++;
    if (j < linhas.length && /^## \d+ ·/.test(linhas[j])) { i++; continue; }
    body.push(new Paragraph({
      children: [new TextRun({ text: '' })],
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'D8D2C4', space: 8 } },
      spacing: { before: 120, after: 260 },
    }));
    i++; continue;
  }

  if (!l.trim()) { i++; continue; }

  body.push(P(l.trim(), { run: { font: SERIF, size: 21, color: TINTA } }));
  i++;
}

function cita(t) {
  return new Paragraph({
    children: runs(t, { font: SERIF, size: 21, color: CINZA, italics: true }),
    indent: { left: 420 },
    border: { left: { style: BorderStyle.SINGLE, size: 12, color: OCRE, space: 14 } },
    spacing: { after: 100, line: 280 },
  });
}

const doc = new Document({
  creator: 'Rodrigo Rocha Drew',
  title: 'Cancioneiro de Zé Sereno — faixas 21 a 30',
  description: 'Dez modas de amanhecer e café',
  styles: { default: { document: { run: { font: SERIF, size: 22, color: TINTA } } } },
  sections: [{
    properties: { page: { margin: { top: 907, bottom: 850, left: 1134, right: 1134 } } },
    children: body,
  }],
});

Packer.toBuffer(doc).then((b) => { fs.writeFileSync(OUT, b); console.log('ok', OUT, b.length, 'bytes'); });
