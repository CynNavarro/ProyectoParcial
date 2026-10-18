// Capturas de verificación del sitio (Playwright, Chromium)
// Uso: node scripts/capturas_verificacion.mjs [urlBase] [outDir]
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:4173';
const outDir = process.argv[3] || 'capturas_tmp';
const routes = ['/', '/about', '/services', '/portfolio', '/showcase', '/terms', '/contact'];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const errors = [];

for (const route of routes) {
  for (const vp of [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport: vp });
    // Estado final sin animaciones de entrada (contenido igual al que ve el usuario tras el reveal)
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const pageErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') pageErrors.push(m.text()); });
    page.on('pageerror', (e) => pageErrors.push(String(e)));
    const resp = await page.goto(base + route, { waitUntil: 'networkidle' });
    // Scroll progresivo para disparar animaciones useInView (once) antes de capturar
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(700);
    const slug = route === '/' ? 'inicio' : route.slice(1);
    const file = path.join(outDir, `${slug}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: vp.name === 'desktop' });
    console.log(`${file} | HTTP ${resp.status()} | console errors: ${pageErrors.length}`);
    if (pageErrors.length) { errors.push({ route, vp: vp.name, pageErrors }); }
    await page.close();
  }
}

await browser.close();
if (errors.length) {
  console.log('\nERRORES DE CONSOLA:');
  for (const e of errors) console.log(e.route, e.vp, e.pageErrors.slice(0, 3));
  process.exit(2);
}
console.log('\nTodo limpio: 7 rutas x 2 viewports, sin errores de consola.');
