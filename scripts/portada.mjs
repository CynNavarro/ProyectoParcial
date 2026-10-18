// Portada diseñada del documento PDF (HTML -> PNG a 2480x3508, 300 DPI A4)
import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';

const outDir = 'Entregable-2/documento';
await mkdir(outDir, { recursive: true });

const logo = (await readFile('src/assets/logo.svg')).toString();
const fondo = (await readFile('src/assets/img/FONDO_1.webp')).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1240, height: 1754 });
await page.setContent(`<html><head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1240px; height: 1754px; position: relative; overflow: hidden;
    background: #080406; color: #fff0f3;
    font-family: 'Outfit', 'Segoe UI', Arial, sans-serif;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
  }
  .bg { position: absolute; inset: 0; background-image: url('data:image/webp;base64,${fondo}'); background-size: cover; opacity: 0.16; }
  .shade { position: absolute; inset: 0; background: radial-gradient(ellipse at center 45%, rgba(8,4,6,0.2), rgba(8,4,6,0.92) 78%); }
  .frame { position: absolute; inset: 46px; border: 1px solid rgba(255,179,198,0.35); border-radius: 26px; }
  .content { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 26px; padding: 0 90px; }
  .logo { width: 190px; height: 190px; filter: drop-shadow(0 8px 40px rgba(232,96,122,0.55)); }
  .kicker { font-size: 21px; letter-spacing: 0.34em; text-transform: uppercase; color: #ff85a1; font-weight: 600; }
  h1 {
    font-family: 'Bricolage Grotesque', 'Segoe UI', sans-serif; font-weight: 800;
    font-size: 76px; letter-spacing: -0.015em; line-height: 1.04;
    background: linear-gradient(95deg, #ffd6e0, #ff85a1 45%, #ffb3c6 70%, #e8607a);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .sub { font-size: 25px; color: rgba(255,240,243,0.82); letter-spacing: 0.05em; }
  .script { font-family: 'Caveat', cursive; font-size: 40px; color: #ffb3c6; }
  .rule { width: 190px; height: 2px; background: linear-gradient(90deg, transparent, #ff85a1, transparent); }
  .meta { display: flex; flex-direction: column; gap: 9px; font-size: 19px; color: rgba(255,240,243,0.72); }
  .meta b { color: #ffd6e0; font-weight: 600; }
  .url { margin-top: 8px; font-size: 20px; color: #ffc2d1; letter-spacing: 0.06em; }
</style></head><body>
  <div class="bg"></div><div class="shade"></div><div class="frame"></div>
  <div class="content">
    <div class="logo">${logo.replace('<svg ', '<svg width="190" height="190" ')}</div>
    <div class="kicker">Entregable 2 · Sitio Web</div>
    <h1>ASummerTenshi</h1>
    <div class="sub">VTuber Artist &amp; Live 2D Rigger</div>
    <div class="script">diseño, arte y rigging en un solo lugar</div>
    <div class="rule"></div>
    <div class="meta">
      <div><b>Nombre de la estudiante:</b> ______________________________</div>
      <div><b>Materia:</b> ______________________________</div>
      <div><b>Docente:</b> ______________________________</div>
      <div><b>Fecha de entrega:</b> ______________________________</div>
    </div>
    <div class="url">asummertenshi.studio</div>
  </div>
</body></html>`);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/portada.png` });
console.log('portada.png');
await browser.close();
