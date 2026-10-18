// Renderiza un SVG local a PNG (Chromium)
import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const [svgPath, pngPath, width] = process.argv.slice(2);
const svg = await readFile(svgPath, 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: Number(width || 1200), height: 800 });
await page.setContent(`<html><head><style>body{margin:0}</style></head><body>${svg}</body></html>`);
await page.waitForTimeout(150);
await page.screenshot({ path: pngPath, fullPage: true });
console.log(pngPath);
await browser.close();
