// Exporta variantes del logo a PNG (render del SVG con Chromium)
import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const outDir = process.argv[2] || 'Entregable-2/evidencias/logo';
await mkdir(outDir, { recursive: true });

const svg = await readFile('src/assets/logo.svg', 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage();

async function shot(name, size, bg) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`
    <html><head><style>body{margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;${bg ? `background:${bg};` : ''}}</style></head>
    <body>${svg.replace('<svg ', `<svg width="${Math.round(size * 0.86)}" height="${Math.round(size * 0.86)}" `)}</body></html>
  `);
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(outDir, name), omitBackground: !bg });
  console.log(name);
}

await shot('logo-512.png', 512, null);
await shot('logo-192.png', 192, null);
await shot('logo-64.png', 64, null);
await shot('logo-512-sobre-oscuro.png', 512, '#080406');
await page.setViewportSize({ width: 900, height: 260 });
await page.setContent(`
  <html><head><style>
    body{margin:0;width:900px;height:260px;display:flex;align-items:center;justify-content:center;gap:28px;background:#080406;font-family:sans-serif}
    .wm{font-size:64px;font-weight:800;background:linear-gradient(90deg,#ffd6e0,#ff85a1,#ffb3c6,#e8607a,#ffd6e0);background-size:300% 300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#fff}
  </style></head>
  <body>${svg.replace('<svg ', '<svg width="180" height="180" ')}<span class="wm">ASummerTenshi</span></body></html>
`);
await page.waitForTimeout(150);
await page.screenshot({ path: path.join(outDir, 'logo-wordmark.png') });
console.log('logo-wordmark.png');

await browser.close();
