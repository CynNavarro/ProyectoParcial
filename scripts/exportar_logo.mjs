// Exporta variantes del logo oficial a PNG (desde src/assets/logo-oficial.png)
import { chromium } from 'playwright';
import { mkdir, copyFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = process.argv[2] || 'Entregable-2/evidencias/logo';
await mkdir(outDir, { recursive: true });

const b64 = (await readFile('src/assets/logo-oficial.png')).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage();

async function shot(name, w, h, bg) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`
    <html><head><style>body{margin:0;width:${w}px;height:${h}px;display:grid;place-items:center;${bg ? `background:${bg};` : ''}}</style></head>
    <body><img src="data:image/png;base64,${b64}" style="max-width:92%;max-height:92%;object-fit:contain"></body></html>
  `);
  await page.waitForTimeout(120);
  await page.screenshot({ path: path.join(outDir, name), omitBackground: !bg });
  console.log(name);
}

await shot('logo-512.png', 560, 420, null);
await shot('logo-192.png', 220, 170, null);
await shot('logo-64.png', 80, 64, null);
await shot('logo-512-sobre-oscuro.png', 560, 420, '#080406');

await browser.close();

// Fuentes editables
await copyFile('src/assets/logo-oficial.png', path.join(outDir, 'logo.png'));
await copyFile('public/favicon.png', path.join(outDir, 'favicon.png'));
console.log('logo.png, favicon.png');
