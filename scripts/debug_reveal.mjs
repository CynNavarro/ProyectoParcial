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
});
await page.waitForTimeout(1200);
const info = await page.evaluate(() => {
  return [...document.querySelectorAll('main section, main [class]')].slice(0, 40).map((el) => {
    const cs = getComputedStyle(el);
    return `${el.tagName}.${String(el.className).slice(0, 40)} | op=${cs.opacity} | rect=${Math.round(el.getBoundingClientRect().top + window.scrollY)}`;
  });
});
console.log(info.join('\n'));
await browser.close();
