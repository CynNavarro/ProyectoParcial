import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const route of ['/services', '/portfolio', '/contact', '/']) {
  await page.goto('https://asummertenshi.studio' + route, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(400);
  const links = await page.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    return [...main.querySelectorAll('a, button')]
      .map((el) => ({ t: (el.textContent || '').trim().slice(0, 48), h: el.tagName === 'A' ? el.getAttribute('href') : '(button)' }))
      .filter((l) => l.t);
  });
  console.log('=== ' + route + ' ===');
  links.forEach((l) => console.log('  [' + l.h + '] ' + l.t));
}
await browser.close();
