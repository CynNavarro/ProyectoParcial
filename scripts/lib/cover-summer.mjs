// =============================================================================
// PLANTILLA DE PORTADA "SUMMER" — composición tipo CoverPage institucional
// Uso: import { renderCover } from './lib/cover-summer.mjs'
// Requiere: playwright instalado en el proyecto (chromium).
// =============================================================================
import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';

export const SUMMER_COVER_DEFAULTS = {
  paper: '#FFF8FA',
  accent: '#D34F70',
  accentDeep: '#B03A58',
  line: '#F2D2DC',
  ink: '#33101C',
  inkMute: '#9A7F88',
  inkSoft: '#5C3A46',
  topLeft: 'UNITEC',
  topRight: 'ARQUITECTURA DE LA INFORMACIÓN Y DISEÑO',
  kicker: 'ENTREGABLE · DOCUMENTO',
  logoPath: null,        // ruta a imagen del logo (PNG/JPG); null = sin logo
  logoMaxWidth: 430,
  title: 'Título del documento',
  subtitle: '',          // texto en cursiva debajo del título
  rows: [                // filas del bloque de datos [{label, value}]
    // { label: 'Estudiante', value: 'Nombre' },
  ],
  bottomLeft: '',        // línea inferior izquierda (opcional)
  bottomRight: '',       // línea inferior derecha (opcional)
  outPath: 'portada.png',
  googleFonts: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Outfit:ital,wght@0,400;0,500;0,600;1,400&display=swap',
};

export async function renderCover(userCfg) {
  const cfg = { ...SUMMER_COVER_DEFAULTS, ...userCfg };
  const outDir = cfg.outPath.replace(/[/\\][^/\\]+$/, '');
  if (outDir) await mkdir(outDir, { recursive: true });

  const logoData = cfg.logoPath
    ? (await readFile(cfg.logoPath)).toString('base64')
    : null;
  const logoExt = cfg.logoPath ? cfg.logoPath.split('.').pop().toLowerCase() : 'png';
  const logoMime = logoExt === 'jpg' || logoExt === 'jpeg' ? 'jpeg' : 'png';

  const rowsHtml = cfg.rows
    .map((r) => `<div class="row"><span class="lbl">${r.label}</span><span class="val">${r.value}</span></div>`)
    .join('');
  const infoTop = cfg.rows.length >= 6 ? 1180 : cfg.rows.length === 5 ? 1200 : 1220;

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.setViewportSize({ width: 1240, height: 1754 });
  await page.setContent(`<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${cfg.googleFonts}" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1240px; height: 1754px; position: relative; overflow: hidden; background: ${cfg.paper}; color: ${cfg.ink}; font-family: 'Outfit', 'Segoe UI', Arial, sans-serif; }
  .frame-outer { position: absolute; top: 38px; left: 38px; right: 38px; bottom: 38px; border: 1.6px solid ${cfg.accent}; }
  .frame-inner { position: absolute; top: 46px; left: 46px; right: 46px; bottom: 46px; border: 1px solid ${cfg.line}; }
  .corner { position: absolute; width: 34px; height: 34px; border-color: ${cfg.accentDeep}; border-style: solid; border-width: 0; }
  .c-tl { top: 32px; left: 32px; border-top-width: 2.4px; border-left-width: 2.4px; }
  .c-tr { top: 32px; right: 32px; border-top-width: 2.4px; border-right-width: 2.4px; }
  .c-bl { bottom: 32px; left: 32px; border-bottom-width: 2.4px; border-left-width: 2.4px; }
  .c-br { bottom: 32px; right: 32px; border-bottom-width: 2.4px; border-right-width: 2.4px; }
  .dot { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: ${cfg.accent}; }
  .dot::after { content: ''; position: absolute; inset: 4px; border-radius: 50%; background: ${cfg.paper}; }
  .d1 { top: 60px; left: 60px; } .d2 { top: 60px; right: 60px; }
  .d3 { bottom: 60px; left: 60px; } .d4 { bottom: 60px; right: 60px; }
  .top-row { position: absolute; top: 92px; left: 110px; right: 110px; display: flex; justify-content: space-between; align-items: center; }
  .institution { font-size: 17px; letter-spacing: 7px; text-transform: uppercase; color: ${cfg.inkSoft}; font-weight: 500; }
  .doc-type { font-size: 17px; letter-spacing: 5px; text-transform: uppercase; color: ${cfg.accentDeep}; font-weight: 600; text-align: right; }
  .center { position: absolute; top: 300px; left: 110px; right: 110px; display: flex; flex-direction: column; align-items: center; }
  .kicker-row { display: flex; align-items: center; margin-bottom: 40px; }
  .kicker-dot { width: 12px; height: 12px; border-radius: 50%; background: ${cfg.accent}; margin-right: 22px; }
  .kicker { font-size: 19px; letter-spacing: 9px; text-transform: uppercase; color: ${cfg.inkMute}; font-weight: 500; }
  .logo-card { width: ${cfg.logoMaxWidth}px; background: #FFFFFF; border: 1px solid ${cfg.line}; border-radius: 22px; padding: 26px 30px; margin-bottom: 44px; box-shadow: 0 10px 34px rgba(211, 79, 112, 0.14); display: flex; align-items: center; justify-content: center; }
  .logo-card img { width: 100%; border-radius: 8px; display: block; }
  h1 { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 88px; letter-spacing: -1px; line-height: 1.02; color: ${cfg.ink}; text-align: center; margin-bottom: 22px; }
  .subtitle { font-family: 'Outfit', sans-serif; font-style: italic; font-size: 30px; color: ${cfg.accentDeep}; text-align: center; line-height: 1.3; max-width: 760px; }
  .info { position: absolute; top: ${infoTop}px; left: 50%; transform: translateX(-50%); width: 660px; }
  .row { display: flex; justify-content: space-between; align-items: baseline; padding: 13px 2px; border-bottom: 1px solid ${cfg.line}; }
  .row .lbl { font-size: 15px; letter-spacing: 3px; text-transform: uppercase; color: ${cfg.inkMute}; font-weight: 500; }
  .row .val { font-size: 20px; color: ${cfg.ink}; font-weight: 400; text-align: right; }
  .foot { position: absolute; bottom: 96px; left: 110px; font-size: 17px; letter-spacing: 2px; color: ${cfg.inkSoft}; }
  .url { position: absolute; bottom: 96px; right: 110px; font-size: 17px; letter-spacing: 3px; color: ${cfg.accentDeep}; font-weight: 500; }
</style></head><body>
  <div class="frame-outer"></div><div class="frame-inner"></div>
  <div class="corner c-tl"></div><div class="corner c-tr"></div><div class="corner c-bl"></div><div class="corner c-br"></div>
  <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div><div class="dot d4"></div>
  <div class="top-row"><span class="institution">${cfg.topLeft}</span><span class="doc-type">${cfg.topRight}</span></div>
  <div class="center">
    <div class="kicker-row"><span class="kicker-dot"></span><span class="kicker">${cfg.kicker}</span></div>
    ${logoData ? `<div class="logo-card"><img src="data:image/${logoMime};base64,${logoData}" alt="Logotipo" /></div>` : ''}
    <h1>${cfg.title}</h1>
    ${cfg.subtitle ? `<div class="subtitle">${cfg.subtitle}</div>` : ''}
  </div>
  ${cfg.rows.length ? `<div class="info">${rowsHtml}</div>` : ''}
  ${cfg.bottomLeft ? `<div class="foot">${cfg.bottomLeft}</div>` : ''}
  ${cfg.bottomRight ? `<div class="url">${cfg.bottomRight}</div>` : ''}
</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  await page.screenshot({ path: cfg.outPath });
  await browser.close();
  console.log(`portada generada: ${cfg.outPath}`);
}
