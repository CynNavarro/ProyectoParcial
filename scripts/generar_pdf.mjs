// Genera el PDF del documento desde entregable.html (servido localmente)
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:4199';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/entregable.html`, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(600);
await page.pdf({
  path: 'Entregable-2/Entregable-2-ASummerTenshi.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
console.log('PDF generado');
await browser.close();
