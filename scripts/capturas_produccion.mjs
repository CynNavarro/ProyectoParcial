// Capturas finales de evidencia desde PRODUCCIÓN (asummertenshi.studio)
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const base = 'https://asummertenshi.studio';
const outDir = process.argv[2] || 'Entregable-2/evidencias/capturas-sitio';
await mkdir(outDir, { recursive: true });

const routes = [
  ['/', '01-inicio'],
  ['/about', '02-about-me'],
  ['/services', '03-servicios'],
  ['/portfolio', '04-portafolio'],
  ['/showcase', '05-showcase'],
  ['/terms', '06-terminos'],
  ['/contact', '07-contacto'],
];

const browser = await chromium.launch();
let failures = 0;

for (const [route, slug] of routes) {
  for (const vp of [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport: vp });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const resp = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(600);
    const file = path.join(outDir, `${slug}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: vp.name === 'desktop' });
    const ok = resp.status() === 200;
    if (!ok) failures++;
    console.log(`${file} | HTTP ${resp.status()}`);
    await page.close();
  }
}

// Menú móvil abierto (interacción real)
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 45000 });
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await page.waitForTimeout(500);
  const file = path.join(outDir, '08-menu-mobile.png');
  await page.screenshot({ path: file });
  console.log(`${file} | menu abierto`);
  await page.close();
}

await browser.close();
process.exit(failures ? 2 : 0);
