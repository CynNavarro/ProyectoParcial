import { chromium } from 'playwright';
const browser = await chromium.launch();
const scrollThrough = async (page) => {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
  });
};

let page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: 'reduce' });

// Services: fila de CTA de la primera categoria
await page.goto('http://localhost:5173/services', { waitUntil: 'networkidle' });
await scrollThrough(page);
const ctaServ = page.getByRole('link', { name: 'Start a commission' }).first();
await ctaServ.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await ctaServ.locator('xpath=..').screenshot({ path: 'capturas_tmp/local-cta-servicios.png' });
console.log('servicios ok');

// Portfolio: lightbox abierto con sus CTA
await page.goto('http://localhost:5173/portfolio', { waitUntil: 'networkidle' });
await scrollThrough(page);
await page.locator('main article, main [class*="card"]').first().click();
await page.waitForTimeout(600);
await page.locator('[class*="lightboxInfo"]').screenshot({ path: 'capturas_tmp/local-cta-portafolio.png' });
console.log('portafolio ok');
await page.keyboard.press('Escape').catch(() => {});
await page.close();

// Showcase: CTA bajo un video
page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://localhost:5173/showcase', { waitUntil: 'networkidle' });
await scrollThrough(page);
const ctaShow = page.getByRole('link', { name: 'Start a commission' }).first();
await ctaShow.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await ctaShow.locator('xpath=ancestor::article').screenshot({ path: 'capturas_tmp/local-cta-showcase.png' });
console.log('showcase ok');

await browser.close();
