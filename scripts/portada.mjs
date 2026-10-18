// Portada diseñada del documento PDF (HTML -> PNG a 2480x3508, 300 DPI A4)
import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';

const outDir = 'Entregable-2/documento';
await mkdir(outDir, { recursive: true });

const logo = (await readFile('src/assets/logo.svg')).toString();
const fondo = (await readFile('src/assets/img/FONDO_1.webp')).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.setViewportSize({ width: 1240, height: 1754 });
await page.setContent(`<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Caveat:wght@400&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet">
<style>
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
  .meta { display: flex; flex-direction: column; gap: 12px; font-size: 19px; color: rgba(255,240,243,0.92); }
  .meta .row { display: flex; justify-content: space-between; width: 620px; padding-bottom: 9px; border-bottom: 1px solid rgba(255,179,198,0.22); }
  .meta .lbl { color: #ffd6e0; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; font-size: 15px; align-self: center; }
  .meta .val { font-weight: 400; text-align: right; }
  .url { margin-top: 10px; font-size: 20px; color: #ffc2d1; letter-spacing: 0.18em; }
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
      <div class="row"><span class="lbl">Estudiante</span><span class="val">Cynthia Valeria Navarro Velázquez</span></div>
      <div class="row"><span class="lbl">Materia</span><span class="val">Arquitectura de Información y Diseño</span></div>
      <div class="row"><span class="lbl">Docente</span><span class="val">Luis Uriel Victoria López</span></div>
      <div class="row"><span class="lbl">Fecha de entrega</span><span class="val">18 de octubre de 2026</span></div>
    </div>
    <div class="url">asummertenshi.studio</div>
  </div>
</body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: `${outDir}/portada.png` });
console.log('portada.png generada');
await browser.close();
