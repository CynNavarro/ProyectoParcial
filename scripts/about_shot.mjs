import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: 'capturas_tmp/v3-about-banner.png' });
await browser.close();
console.log('ok');
