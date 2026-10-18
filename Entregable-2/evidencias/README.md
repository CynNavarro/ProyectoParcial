# Evidencias — Entregable 2: Sitio web ASummerTenshi

Fecha de generación: 18 de octubre de 2026.
URL verificada: https://asummertenshi.studio/ (7 rutas respondieron HTTP 200).

## `capturas-sitio/` — 15 imágenes

Capturas tomadas con Playwright (Chromium) contra el sitio **en producción**, el 18 de octubre de 2026.

| Archivo | Contenido |
|---|---|
| `01-inicio-desktop.png` / `01-inicio-mobile.png` | Inicio completo (hero, propuesta de valor, servicios, portafolio, showcase, CTA) |
| `02-about-me-*` | Perfil "About Me" |
| `03-servicios-*` | Servicios (cinco categorías) |
| `04-portafolio-*` | Galería de siete obras con lightbox |
| `05-showcase-*` | Demostraciones Live2D (video) |
| `06-terminos-*` | Términos del servicio |
| `07-contacto-*` | **Página de contacto nueva** (formulario + canales) |
| `08-menu-mobile.png` | Menú móvil abierto (interacción real) |

`*` = misma ruta en escritorio (1440×900, página completa) y móvil (390×844).

## `logo/` — 7 archivos

Identidad gráfica oficial de la marca (logo de la artista, PNG con transparencia).

| Archivo | Uso |
|---|---|
| `logo.png` | Logotipo maestro «SUMMER TENSHI» (1312 × 932, fondo transparente) |
| `logo-512.png` / `logo-192.png` / `logo-64.png` | Exportaciones a ≈512, 192 y 64 px de ancho |
| `logo-512-sobre-oscuro.png` | Aplicación sobre el color de fondo del sitio |
| `favicon.png` | Favicon del sitio (fondo oscuro redondeado) |

## `esquema-final/` — 2 archivos

Mapa del sitio terminado, con la nueva ruta `/contact` y los cambios respecto a la planeación de la actividad 1.

- `esquema-final.svg` — fuente vectorial editable.
- `esquema-final.png` — exportación para impresión (1000×920 px).

## `recursos-graficos/` — 3 imágenes

Soportes visuales del apartado de diseño del documento.

| Archivo | Contenido |
|---|---|
| `paleta-colores.png` | Paleta con nombre, HEX y RGB de cada color |
| `tipografias.png` | Muestra del alfabeto de las dos fuentes y su uso |
| `textura-fondo.png` | Patrón de fondo del hero (rombos rosas pastel) |

## Registro de verificación

- Script: `scripts/capturas_produccion.mjs` (Playwright).
- Resultado: 14/14 rutas-viewport con HTTP 200; 0 errores de consola.
- Las capturas con animación se tomaron con `prefers-reduced-motion` para mostrar el estado final del contenido.
