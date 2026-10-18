# Entregable 2 — Sitio web ASummerTenshi

Fuente del documento. La versión final con diseño y portada es **Entregable-2-ASummerTenshi.pdf** (generado desde `documento/entregable.html`).

## Contenido

1. **Presentación y comprobación del sitio** — URL https://asummertenshi.studio/, tabla de siete rutas verificadas (HTTP 200, sin errores) y capturas de inicio.
2. **Logotipo del proyecto** — isotipo (halo, sol y destello), valores de marca, versiones y adaptabilidad (SVG, 512/192/64 px, favicon, wordmark).
3. **Información de la página** — propósito, tema principal, público objetivo y tabla de datos relevantes con su ubicación.
4. **Elemento original diferenciador** — coherencia artista-personaje-sitio, formulario sin fricción y evidencia en movimiento.
5. **Imágenes y recursos integrados** — ilustraciones originales (7 obras + arte de servicios), iconos Lucide, animaciones Framer Motion, videos del showcase; seis imágenes mostradas con su función.
6. **Diseño: estilo y elementos visuales** — paleta con valores RGB, tipografías con alfabeto, textura de fondo y consistencia visual por tokens.
7. **Organización y navegación** — navegación persistente, menú móvil accesible, etiquetas y categorías.
8. **Elementos del sitio y cómo quedaron** — tabla de 12 elementos explicados.
9. **Pantallas del sitio** — seis capturas de producción con explicación.
10. **Esquema final del sitio** — mapa con la nueva ruta /contact y cambios respecto a la actividad 1.
11. **Proceso: plataforma, alojamiento y dominio** — React + Vite, Cloudflare Pages y dominio asummertenshi.studio.
12. **Conclusión.**
13. **Bibliografía** (formato APA).
14. **Revisión de ortografía** — criterios aplicados al sitio (inglés) y al documento (español, Nueva gramática RAE).

## Regenerar el PDF

```bash
# desde la raíz del proyecto, con las dependencias instaladas
python -m http.server 4199 --directory Entregable-2/documento   # en segundo plano
node scripts/generar_pdf.mjs
```
