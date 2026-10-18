import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  const step = window.innerHeight * 0.8;
  for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 150));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(700);
const state = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('[class*="serviceCard"]')];
  return cards.slice(0, 3).map((c) => getComputedStyle(c).opacity);
});
console.log('opacidad tras scroll+vuelta:', state);
await page.screenshot({ path: 'capturas_tmp/test_full.png', fullPage: true });
await page.evaluate(() => window.scrollTo(0, 1600));
await page.waitForTimeout(400);
await page.screenshot({ path: 'capturas_tmp/test_viewport.png', fullPage: false });
await browser.close();
