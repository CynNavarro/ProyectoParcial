// Evidencias del deploy CTA: 5 capturas afectadas + 3 primeros planos
import { chromium } from 'playwright';

const base = 'https://asummertenshi.studio';
const ev = 'Entregable-2/evidencias/capturas-sitio';
const doc = 'Entregable-2/documento/img';
const browser = await chromium.launch();

const scrollThrough = async (page) => {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, 0);
  });
};

// ── 5 capturas afectadas ──
const fulls = [
  ['/services', '03-servicios'],
  ['/portfolio', '04-portafolio'],
  ['/showcase', '05-showcase'],
];
for (const [route, slug] of fulls) {
  for (const vp of [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    if (slug === '05-showcase' && vp.name === 'mobile') continue; // solo desktop pide el brief
    const page = await browser.newPage({ viewport: vp });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 45000 });
    await scrollThrough(page);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${ev}/${slug}-${vp.name}.png`, fullPage: vp.name === 'desktop' });
    console.log(`${slug}-${vp.name}`);
    await page.close();
  }
}

// ── 3 primeros planos ──
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: 'reduce' });

await page.goto(base + '/services', { waitUntil: 'networkidle', timeout: 45000 });
await scrollThrough(page);
const ctaServ = page.getByRole('link', { name: 'Start a commission' }).first();
await ctaServ.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await ctaServ.locator('xpath=..').screenshot({ path: `${doc}/cta-servicios.png` });
console.log('cta-servicios');

await page.goto(base + '/portfolio', { waitUntil: 'networkidle', timeout: 45000 });
await scrollThrough(page);
await page.locator('main article, main [class*="card"]').first().click();
await page.waitForTimeout(600);
await page.locator('[class*="lightboxInfo"]').screenshot({ path: `${doc}/cta-portafolio.png` });
console.log('cta-portafolio');

await page.goto(base + '/showcase', { waitUntil: 'networkidle', timeout: 45000 });
await scrollThrough(page);
const ctaShow = page.getByRole('link', { name: 'Start a commission' }).first();
await ctaShow.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await ctaShow.locator('xpath=ancestor::article').screenshot({ path: `${doc}/cta-showcase.png` });
console.log('cta-showcase');

await browser.close();
