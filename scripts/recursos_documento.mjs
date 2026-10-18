// Genera muestras visuales para el documento: paleta, tipografías, textura
import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';

const outDir = process.argv[2] || 'Entregable-2/evidencias/recursos-graficos';
await mkdir(outDir, { recursive: true });

const fondoB64 = (await readFile('src/assets/img/FONDO_1.webp')).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage();

const fontsLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&amp;family=Outfit:wght@400;600&amp;display=swap">`;

/* ── Paleta de colores ── */
const colors = [
  ['Negro cálido (fondo)', '#080406', 'rgb(8, 4, 6)'],
  ['Elevado (tarjetas)', '#170A0E', 'rgb(23, 10, 14)'],
  ['Marfil rosado (texto)', '#FFF0F3', 'rgb(255, 240, 243)'],
  ['Rosa 100', '#FFD6E0', 'rgb(255, 214, 224)'],
  ['Rosa 200', '#FFB3C6', 'rgb(255, 179, 198)'],
  ['Rosa 300', '#FFC2D1', 'rgb(255, 194, 209)'],
  ['Rosa 400 (acento)', '#FF85A1', 'rgb(255, 133, 161)'],
  ['Rosa 500', '#FF6B8A', 'rgb(255, 107, 138)'],
  ['Rosa 600 (acento fuerte)', '#E8607A', 'rgb(232, 96, 122)'],
];
await page.setViewportSize({ width: 1160, height: 60 + colors.length * 74 });
await page.setContent(`<html><head>${fontsLink}<style>
  body{margin:0;padding:24px;background:#fff;font-family:'Segoe UI',Arial,sans-serif}
  h2{margin:0 0 16px;font-size:22px;color:#4a1220;font-family:'Bricolage Grotesque',sans-serif}
  .row{display:flex;align-items:center;gap:18px;padding:9px 0;border-bottom:1px solid #f3dce3}
  .sw{width:120px;height:52px;border-radius:10px;border:1px solid #e5c3cd;flex-shrink:0}
  .nm{font-size:16px;color:#3a0f1c;font-weight:600;width:300px}
  .hx{font-family:Consolas,monospace;color:#7a4252;font-size:14px}
</style></head><body>
<h2>Paleta de colores del sitio</h2>
${colors.map(([n, h, r]) => `<div class="row"><div class="sw" style="background:${h}"></div><div class="nm">${n}</div><div class="hx">${h} · ${r}</div></div>`).join('')}
</body></html>`);
await page.waitForTimeout(120);
await page.screenshot({ path: `${outDir}/paleta-colores.png`, fullPage: true });
console.log('paleta-colores.png');

/* ── Muestra tipográfica ── */
await page.setViewportSize({ width: 1160, height: 560 });
await page.setContent(`<html><head>${fontsLink}<style>
  body{margin:0;padding:28px;background:#fffafc;font-family:'Segoe UI',Arial,sans-serif;color:#3a0f1c}
  h2{margin:0 0 6px;font-size:22px;font-family:'Bricolage Grotesque',sans-serif}
  p.sub{margin:0 0 22px;color:#8a4a5c;font-size:13px}
  .card{border:1px solid #f3c6d2;border-radius:14px;padding:20px 24px;margin-bottom:18px;background:#fff}
  .lbl{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#c25674;margin-bottom:8px}
  .sample{font-size:32px;line-height:1.3;color:#2a0a13}
  .use{font-size:12.5px;color:#7a4252;margin-top:8px}
</style></head><body>
<h2>Tipografías del sitio</h2>
<p class="sub">Fuentes autoalojadas en formato WOFF2 (las mismas que carga el sitio) con respaldo del sistema. Muestra del alfabeto en mayúsculas, minúsculas y números.</p>
<div class="card"><div class="lbl">Bricolage Grotesque · títulos y marca</div>
  <div class="sample" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:700">AaBbCcDdEeFfGgHhIiJjKkLlMm<br>NnÑnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789</div>
  <div class="use">Se emplea en el logotipo, títulos de sección y encabezados (pesos 500 a 800).</div></div>
<div class="card"><div class="lbl">Outfit · texto del cuerpo</div>
  <div class="sample" style="font-family:Outfit,sans-serif;font-weight:400">AaBbCcDdEeFfGgHhIiJjKkLlMm<br>NnÑnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789</div>
  <div class="use">Se emplea en párrafos, descripciones, formularios y navegación (pesos 400 a 600).</div></div>
</body></html>`);
await page.waitForTimeout(900);
await page.screenshot({ path: `${outDir}/tipografias.png`, fullPage: true });
console.log('tipografias.png');

/* ── Textura de fondo ── */
await page.setViewportSize({ width: 900, height: 560 });
await page.setContent(`<html><head><style>
  body{margin:0;display:grid;place-items:center;height:560px;background:#080406}
  img{width:860px;height:520px;object-fit:cover;border-radius:14px;border:1px solid #3a1a24}
</style></head><body><img src="data:image/webp;base64,${fondoB64}" alt=""></body></html>`);
await page.waitForTimeout(400);
await page.screenshot({ path: `${outDir}/textura-fondo.png` });
console.log('textura-fondo.png');

await browser.close();
