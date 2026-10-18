import { chromium } from 'playwright';
const browser = await chromium.launch();

// Test 1: logo click desde otra pagina + scroll previo -> debe quedar arriba del todo
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/services', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(200);
await page.getByRole('navigation', { name: 'Navegación principal' }).getByRole('link', { name: 'ASummerTenshi, go to homepage' }).click();
await page.waitForTimeout(700);
const y = await page.evaluate(() => window.scrollY);
console.log('scrollY tras click en logo:', y, y === 0 ? 'OK' : 'FALLA');

// Test 2: captura hero sin botones
await page.setViewportSize({ width: 1440, height: 900 });
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: 'capturas_tmp/v3-hero-desktop.png' });
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: 'capturas_tmp/v3-hero-mobile.png' });
console.log('capturas hero ok');
await browser.close();
