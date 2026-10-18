// Capturas finales del sitio en producción (scroll-through para disparar reveals).
// - evidencias/capturas-sitio/  : escritorio página completa, móvil viewport
// - documento/img/              : escritorio viewport (above the fold), móvil viewport
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = 'https://asummertenshi.studio';
const EV = 'Entregable-2/evidencias/capturas-sitio';
const DOC = 'Entregable-2/documento/img';
await mkdir(EV, { recursive: true });
await mkdir(DOC, { recursive: true });

const ROUTES = [
  ['/', '01-inicio'],
  ['/about', '02-about-me'],
  ['/services', '03-servicios'],
  ['/portfolio', '04-portafolio'],
  ['/showcase', '05-showcase'],
  ['/terms', '06-terminos'],
  ['/contact', '07-contacto'],
];

async function revealAll(page) {
  await page.evaluate(async () => {
    const step = 700;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 350));
  });
}

const browser = await chromium.launch();

// ---- Escritorio ----
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const dp = await desktop.newPage();
for (const [route, name] of ROUTES) {
  await dp.goto(BASE + route, { waitUntil: 'networkidle', timeout: 60000 });
  await dp.waitForTimeout(500);
  await revealAll(dp);
  await dp.screenshot({ path: `${EV}/${name}-desktop.png`, fullPage: true });
  await dp.screenshot({ path: `${DOC}/${name}-desktop.png` });
  console.log(`${name}-desktop`);
}
await desktop.close();

// ---- Móvil ----
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
const mp = await mobile.newPage();
for (const [route, name] of ROUTES) {
  await mp.goto(BASE + route, { waitUntil: 'networkidle', timeout: 60000 });
  await mp.waitForTimeout(500);
  await revealAll(mp);
  await mp.screenshot({ path: `${EV}/${name}-mobile.png` });
  await mp.screenshot({ path: `${DOC}/${name}-mobile.png` });
  console.log(`${name}-mobile`);
}

// ---- Menú móvil abierto (sin reducedMotion: la animación staggered se congela con reduce) ----
const menuCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const mp2 = await menuCtx.newPage();
await mp2.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 60000 });
await mp2.waitForTimeout(600);
await mp2.click('button[aria-label="Abrir menú"]');
await mp2.waitForTimeout(2000);
await mp2.screenshot({ path: `${EV}/08-menu-mobile.png` });
await mp2.screenshot({ path: `${DOC}/08-menu-mobile.png` });
console.log('08-menu-mobile');
await menuCtx.close();

await mobile.close();
await browser.close();
console.log('Capturas completas');
