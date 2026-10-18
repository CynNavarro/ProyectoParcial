# Plan de acción — Entregable 2: Sitio web funcional + documento

**Proyecto:** ASummerTenshi — portafolio VTuber / Live2D
**Base técnica:** Vite + React 19 + framer-motion (se mantiene; no se migra a Next.js)
**Alojamiento:** Cloudflare Pages (redeploy tras cambios)
**Dominio vigente:** https://asummertenshi.studio/
**Meta de calidad:** nivel "Excelente" en todos los criterios; ortografía según Nueva Gramática RAE.
**Regla de oro:** conservar el patrón de diseño actual (negro cálido `#080406`, marfil rosado `#FFF0F3`, acento rosa, estética VTuber/anime). Solo mejoras puntuales, nada de re-diseño ajeno.

---

## 0. Diagnóstico (brechas detectadas)

| Brecha | Estado | Acción |
|---|---|---|
| Página de contacto | No existe ruta `/contact`; contacto solo en menú/pie | Crear página Contact con formulario + canales |
| Inicio sin contenido | Hero solo, contenedor vacío, sin CTA | Hero + secciones: propuesta de valor, servicios destacados, preview portafolio, CTA contacto |
| Logo | Texto plano "ASummerTenshi", sin marca gráfica | Diseñar logo SVG (isotipo + wordmark + favicon), explicación de identidad/valores |
| Tipografía | `system-ui` genérica | Definir fuentes con personalidad (display + texto), alfabeto de muestra |
| Imágenes | ~40 MB en PNG (FONDO_1 = 9.9 MB) | Convertir a WebP, compresión, lazy loading, preload de críticas |
| Menú | Drawer móvil ok; desktop sin links persistentes | Navbar con links visibles en desktop, drawer mejorado en móvil, logo gráfico |
| Accesibilidad | Pendiente: foco visible, `prefers-reduced-motion`, skip link | Auditoría y correcciones puntuales |
| Capturas/evidencias | Las de actividad 1 son pre-mejora | Nuevas capturas Playwright (desktop + móvil, rutas finales) |
| Documento PDF | No existe | `entregable.md` con 13 secciones + portada diseñada + PDF |

---

## Fase 1 — Mejoras del sitio

1. **Sistema de diseño** (skills: ui-ux-pro-max, impeccable, hallmark, design-taste-frontend)
   - Paleta final: base existente + acentos con valores RGB documentados.
   - Tipografías: 1 display (títulos/hero) + 1 texto (cuerpo), con fallbacks.
   - Textura/patrón: derivar del recurso `patron-rosa.png` (versión ligera, uso sutil de fondo).
   - Espaciado, radios, sombras: tokens CSS consistentes.
2. **Logo** — isotipo SVG (alas/ángel "Tenshi" + verano), wordmark, favicon, versión monocroma; adaptable a tamaños. Página del documento con explicación escrita (identidad y valores).
3. **Home** — hero con animación de entrada + CTA doble ("View Services" / "Get in Touch"); sección propuesta de valor; 3 servicios destacados con tarjetas; preview galería portafolio (4 piezas); teaser showcase; banda CTA contacto. Animaciones reveal con `useInView` (patrón ya usado en el sitio).
4. **Contact** — nueva ruta `/contact`: formulario (nombre, email, tipo de encargo, mensaje) que abre cliente de correo con cuerpo prellenado (sin backend; alternativa Formspree si se prefiere envío directo), más tarjetas de canales (email, X, VGen, WhatsApp, teléfono). Enlace en navbar y footer.
5. **Navbar/Footer** — links persistentes desktop, drawer móvil con foco atrapado correctamente, logo gráfico en ambos.
6. **Performance** — conversión PNG→WebP (script con `sharp` o similar), `loading="lazy"` ya parcial, preload fuentes, meta tags OG/description.
7. **Accesibilidad** — skip link, foco visible, `aria-*` completos, soporte `prefers-reduced-motion`, contraste verificado.
8. **Build + deploy** — `vite build`, deploy a Cloudflare Pages, verificación de las 7 rutas en producción.

## Fase 2 — Evidencias (`Entregable-2/evidencias/`)

1. `capturas-sitio/` — Playwright: 7 rutas × (desktop + móvil), post-mejora.
2. `logo/` — variantes del logo exportadas (SVG, PNG tamaños, favicon).
3. `recursos-graficos/` — imágenes/ilustraciones usadas (mínimo 5 documentadas con tipo y empleo).
4. `esquema-final/` — mapa del sitio actualizado (incluye `/contact`) en PNG y SVG.
5. `playwright-registros/` — registros de verificación de rutas y consola.
6. `README.md` — inventario de evidencias, mismo protocolo que actividad 1.
7. Verificación: todas las imágenes enlazadas desde el Markdown existen; ningún archivo vacío.

## Fase 3 — Documento

1. `Entregable-2/entregable.md` en español, 13 secciones:
   1. Portada con diseño (texto + imagen acorde al tema).
   2. Link del sitio + comprobación de funcionamiento.
   3. Logo: imagen + explicación de identidad y valores, adaptabilidad.
   4. Información de la página: propósito, tema principal, público, datos relevantes ordenados (nombre, dirección/contacto, logotipo, oferta de servicios).
   5. Elemento original diferenciador (innovación/creatividad).
   6. Mínimo 5 imágenes usadas + lista de recursos integrados (fotografías, ilustraciones, iconos, infografías, animaciones/videos).
   7. Diseño: paleta con valores RGB y ejemplos, tipografías con alfabeto, texturas/patrones, consistencia visual.
   8. Organización: navegación intuitiva, etiquetas y categorías.
   9. Elementos del sitio, todos explicados como quedaron.
   10. Pantallas del sitio: capturas con explicación (mínimo 5).
   11. Esquema final del sitio (con cambios y ajustes respecto a actividad 1).
   12. Conclusión y bibliografía (APA).
   13. Revisión de ortografía (RAE) — del sitio y del documento.
2. Portada diseñada como imagen (HTML→PNG) integrada en el PDF.
3. Conversión a PDF y verificación visual de cada página.
4. Commit de avance + nota de cambios.

## Fase 4 — Cierre

- Verificación final: link público funciona, PDF íntegro, evidencias completas.
- Resumen de cambios para el usuario.

---

## Puntos pendientes de confirmar

1. **Concepto del logo:** ¿algo con alas/ángel (Tenshi = ángel) + sol/verano? ¿O prefieren partir del personaje existente? → decidir antes de Fase 1.2.
2. **Formulario de contacto:** ¿mailto prellenado (sin costo, sin backend) o Formspree (envío real, requiere cuenta)? → recomendado mailto + canales directos.
3. **Nombre de estudiante/materia/docente** para portada del PDF: en actividad 1 quedaron fuera por no estar confirmados. → confirmar para incluirlos esta vez.
