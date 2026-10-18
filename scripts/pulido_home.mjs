import { chromium } from 'playwright';
const browser = await chromium.launch();
const shots = [
  ['http://localhost:5173/', { width: 1440, height: 900 }, 'capturas_tmp/v2-home-desktop.png', true],
  ['http://localhost:5173/', { width: 390, height: 844 }, 'capturas_tmp/v2-home-mobile.png', true],
  ['http://localhost:5173/contact', { width: 1440, height: 900 }, 'capturas_tmp/v2-contact-desktop.png', true],
  ['http://localhost:5173/contact', { width: 390, height: 844 }, 'capturas_tmp/v2-contact-mobile.png', true],
];
for (const [url, vp, file, scroll] of shots) {
  const page = await browser.newPage({ viewport: vp });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle' });
  if (scroll) {
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 110));
      }
      window.scrollTo(0, 0);
    });
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: file, fullPage: true });
  console.log(file);
  await page.close();
}
await browser.close();
