// Evidencia de CTA contextuales (con espera de animaciones tras hacer scroll al elemento)
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function shotElement(handle, path) {
  const el = handle.asElement();
  if (!el) return false;
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1600); // dejar terminar la animación de reveal
  await el.screenshot({ path });
  return true;
}

// 1) Banda de contacto en Inicio (CTA "Start a commission")
await page.goto('https://asummertenshi.studio/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);
const band = await page.evaluateHandle(() => {
  const a = [...document.querySelectorAll('a')].find((x) => x.getAttribute('href') === '/contact' && /commission/i.test(x.textContent || ''));
  return a ? a.closest('section') : null;
});
console.log('cta-inicio:', await shotElement(band, 'Entregable-2/documento/img/cta-inicio.png'));

// 2) Canales directos en Contact (VGen / X / email + nota de términos)
await page.goto('https://asummertenshi.studio/contact', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(800);
const channels = await page.evaluateHandle(() => {
  const a = [...document.querySelectorAll('a')].find((x) => (x.getAttribute('href') || '').includes('vgen.co'));
  return a ? (a.closest('aside') || a.closest('section') || a.closest('div')) : null;
});
console.log('cta-contacto:', await shotElement(channels, 'Entregable-2/documento/img/cta-contacto.png'));

await browser.close();
