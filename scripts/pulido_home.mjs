import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  const step = window.innerHeight * 0.8;
  for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'capturas_tmp/pulido-home.png', fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: 'capturas_tmp/pulido-hero-mobile.png' });
await browser.close();
console.log('ok');
