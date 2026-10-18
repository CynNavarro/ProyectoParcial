# ESPECIFICACIÓN — Documento PDF · Entregable 2: Sitio Web ASummerTenshi

> **Instrucción para el agente generador de PDF.** Este archivo es la fuente única del documento. Genera un PDF en tamaño carta o A4, en español, con estilo limpio de informe académico. **No inventes datos de portada** (nombre de estudiante, materia, docente, fecha): ya los tienes; ubícalos donde esta especificación indica. Todas las imágenes referenciadas existen en disco; las rutas son **relativas a la carpeta `Entregable-2/`** del proyecto.
>
> **Estilo del documento:** tipografías Bricolage Grotesque (títulos) y Outfit (cuerpo), disponibles en Google Fonts; color de acento rosa `#D34F70`, acento fuerte `#B03A58`, texto principal `#33101C`, fondos de tabla `#FFE9EF`. Títulos de sección numerados. Tablas con encabezado rosa. Imágenes a ancho completo o 74 % centradas, con pie de figura en gris tamaño pequeño. Cada sección numerada puede iniciar en página nueva según convenga al flujo.

---

## PORTADA (diseño)

Diseña una portada a página completa con esta composición (los datos los conoces tú):

- Fondo negro cálido `#080406` con el patrón de rombos rosas pastel usado en el hero del sitio, a baja opacidad (≈16 %) y un degradado radial oscuro encima para legibilidad. La textura está en `evidencias/recursos-graficos/textura-fondo.png` (usarla como referencia visual o recrearla con la imagen original `src/assets/img/FONDO_1.webp` si tienes acceso al proyecto).
- Marco de línea fina rosa `rgba(255,179,198,0.35)` con esquinas redondeadas, inset ≈46 px.
- Logotipo oficial centrado arriba: `evidencias/logo/logo.png` (PNG con transparencia, mostrar a ≈300 px de ancho, con sombra rosa suave).
- Sobre el logo, rótulo en mayúsculas espaciadas: **ENTREGABLE 2 · SITIO WEB** (color `#FF85A1`).
- Título: **ASummerTenshi** en Bricolage Grotesque 800, ≈76 pt, con degradado rosa pastel `#FFD6E0 → #FF85A1 → #FFB3C6 → #E8607A`.
- Subtítulo: **VTuber Artist & Live 2D Rigger** (≈25 pt, `#FFF0F3` al 82 %).
- Línea divisoria degradada de 190 px.
- Bloque de datos (los que tú conoces): nombre de la estudiante, materia, docente y fecha de entrega, en Outfit ≈19 pt con etiquetas en `#FFD6E0`.
- Al pie, centrado: `asummertenshi.studio` en `#FFC2D1`, espaciado.

---

## 1. Presentación y comprobación del sitio

**Texto:**

Este documento describe el proceso de construcción del sitio web de la marca personal **ASummerTenshi**, correspondiente al segundo entregable del proyecto parcial, y presenta el resultado final después de aplicar los ajustes de diseño y contenido a la propuesta planeada en la primera actividad.

El sitio está publicado y funcionando en la siguiente dirección, con dominio propio y alojamiento en Cloudflare Pages:

**https://asummertenshi.studio/** (centrado, tamaño destacado)

La comprobación se realizó el 18 de octubre de 2026 desde un navegador automatizado (Playwright). Las siete rutas del sitio respondieron con código **HTTP 200** y sin errores en la consola del navegador, tanto en escritorio (1440 × 900) como en móvil (390 × 844).

**Tabla (insertar como tabla):**

| Ruta | Sección | Estado |
|---|---|---|
| / | Inicio | 200, sin errores |
| /about | About Me | 200, sin errores |
| /services | Services | 200, sin errores |
| /portfolio | Portfolio | 200, sin errores |
| /showcase | ShowCase Portfolio | 200, sin errores |
| /terms | Terms of Service | 200, sin errores |
| /contact | Contact (nueva) | 200, sin errores |

**Imagen 1** — insertar aquí, ancho completo:
- Ruta: `evidencias/capturas-sitio/01-inicio-desktop.png`
- Qué es: captura completa de la página de inicio en escritorio (1440 px de ancho): hero con el arte de la marca, propuesta de valor, servicios destacados, vista previa del portafolio, llamado al showcase y banda de contacto.
- Pie sugerido: «Figura 1. Página de inicio en escritorio. Hero con el arte de la marca, propuesta de valor, servicios destacados, vista previa del portafolio, llamado al showcase y contacto.»

**Imagen 2** — insertar aquí, 74 % centrada:
- Ruta: `evidencias/capturas-sitio/01-inicio-mobile.png`
- Qué es: misma página de inicio en móvil (390 × 844), contenido apilado en una columna.
- Pie sugerido: «Figura 2. Inicio en móvil: el contenido se apila en una sola columna y conserva la jerarquía visual.»

---

## 2. Logotipo del proyecto

**Imagen 3** — insertar primero en esta sección, ancho completo:
- Ruta: `evidencias/logo/logo-512.png` (logo a ≈512 px de ancho, fondo transparente)
- Qué es: logotipo oficial de la marca: el nombre «SUMMER TENSHI» en letras sticker con relleno degradado rosa a celeste, sobre una nube pastel, con alas blancas a los lados, halo dorado inclinado, destellos rosas y la escritura en katakana «サマテン» (abreviatura de Summer Tenshi) bajo el nombre.
- Pie sugerido: «Figura 3. Logotipo oficial de Summer Tenshi: letras sticker con degradado rosa-celeste, alas, halo y nube, sobre fondo transparente.»

**Texto:**

El logotipo es una pieza de identidad creada por la propia artista en estética kawaii, que resume el personaje y el nombre de la marca en una sola imagen. Sus elementos y su significado:

- **Nombre en letras sticker:** «SUMMER TENSHI» con trazo grueso, relleno en degradado rosa a celeste (tomado del vestuario del personaje) y contorno blanco con sombra lila, como calcomanía. Bajo el nombre aparece «サマテン», la abreviatura en katakana usada por la comunidad japonesa.
- **Alas y halo:** las alas blancas y el halo dorado inclinado refieren al significado del apodo: *tenshi* es «ángel» en japonés, y el halo evoca además el sol del verano (*summer*).
- **Nube y destellos:** la nube pastel y los destellos rosas aportan el ambiente soñador e idol, coherente con la paleta del modelo VTuber.

El logo transmite los valores de la marca: **dulzura, identidad propia y cercanía con la comunidad VTuber**. Se integra en la barra de navegación y en el pie de página del sitio, y convive con la paleta rosa pastel sin competir con el contenido.

**Subtítulo: Adaptabilidad a diferentes tamaños y formatos**

El logo se entrega en PNG con canal alfa (fondo transparente), por lo que puede colocarse sobre cualquier fondo del sitio y de los materiales. Se prepararon versiones para cada contexto:

**Tabla:**

| Versión | Tamaño | Uso |
|---|---|---|
| PNG maestro (transparencia) | 1312 × 932 | Fuente maestra y aplicaciones futuras |
| PNG 512 px | ≈512 de ancho | Documentos, portadas y redes |
| PNG 192 px | ≈192 de ancho | Iconos de aplicación y avatares |
| PNG 64 px | ≈64 de ancho | Miniaturas y espacios reducidos |
| Favicon PNG | 128 × 128 | Pestaña del navegador, con fondo oscuro redondeado para mantener contraste |

**Imagen 4** — insertar aquí, 74 % centrada:
- Ruta: `evidencias/logo/logo-64.png`
- Qué es: logo exportado a ≈64 px de ancho con fondo transparente, para demostrar legibilidad a tamaño pequeño.
- Pie sugerido: «Figura 4. El logotipo conserva sus formas legibles a 64 píxeles de ancho; en la barra del sitio se muestra a 44 píxeles de alto.»

---

## 3. Información de la página

**Subtítulo: ¿Qué propósito te gustaría cumplir creando un sitio web como este?**

Quiero que el sitio cumpla tres propósitos encadenados: **presentar** mi especialidad como artista VTuber y rigger de Live 2D, **demostrar** con evidencia visual y audiovisual la calidad de mi trabajo, y **facilitar** que una persona interesada inicie una solicitud por un canal claro. El sitio es mi vitrina profesional y mi punto de contacto con clientes internacionales.

**Subtítulo: ¿Cuál es el tema principal del sitio web?**

Servicios creativos para VTubers y creadores digitales: diseño e ilustración de personajes, arte de modelo listo para Live 2D, rigging, emotes e ilustración anime. Todo gira en torno a un solo tema: **crear personajes virtuales con identidad propia y llevarlos hasta el movimiento**.

**Subtítulo: ¿A qué público va dirigido el sitio web?**

- **VTubers debutantes:** personas que quieren crear su primer personaje y necesitan entender la diferencia entre arte, rigging y paquete completo.
- **Streamers y VTubers activos:** quienes buscan actualizar su modelo, añadir expresiones, emotes o vestuario nuevo.
- **Creadores independientes de contenido:** que requieren ilustración o diseño de personaje para sus canales.

**Subtítulo: Datos relevantes y su ubicación**

**Tabla:**

| Dato | Ubicación en el sitio |
|---|---|
| Nombre de la marca: ASummerTenshi, «VTuber Artist &amp; Live 2D Rigger» | Logotipo y lema en la barra de navegación y en el hero de inicio |
| Logotipo | Barra de navegación, pie de página y favicon |
| Oferta de servicios (cinco categorías con entregables y complementos) | Página Services y tarjetas destacadas en inicio |
| Correo de comisiones | Formulario de contacto, página Contact y pie de página |
| X / Twitter y VGen | Página Contact, menú móvil y pie de página en todas las rutas |
| Condiciones de pago, revisiones, plazos, derechos y reembolsos | Página Terms of Service, enlazada desde el formulario de contacto |

Los datos están ordenados por prioridad: primero la identidad, después la oferta, al final los canales y las condiciones, de modo que un visitante nuevo comprende la marca antes de decidir cómo contactar. Por privacidad, los canales públicos se limitan al correo, a X y a VGen.

---

## 4. Elemento original diferenciador

El elemento que diferencia a este sitio de otros portafolios de artistas es la **coherencia total entre la artista, su personaje y su escaparate**: la paleta rosa pastel del sitio es la misma que la de mi modelo VTuber, el logotipo resume mi nombre (ángel de verano) y cada texto habla con la misma voz. Un cliente no contrata a una empresa; contrata a una persona cuyo estilo ya está demostrado en su propia marca.

A ello se suman dos decisiones concretas de innovación y creatividad:

1. **Ruta de comisión sin fricción:** el formulario de la página Contact no guarda datos en servidores externos; prepara un correo prellenado con el nombre del cliente, su correo y el tipo de servicio elegido. Así se reduce el esfuerzo de escribir la primera solicitud sin sacrificar la privacidad.
2. **Evidencia en movimiento:** la página ShowCase integra los modelos Live 2D funcionando en video, para que el cliente vea expresiones, ángulos y físicas antes de encargar, algo que una imagen estática no puede demostrar.

---

## 5. Imágenes y recursos integrados

En el sitio se integraron imágenes de mi autoría y recursos gráficos de apoyo. La lista completa por tipo es la siguiente:

**Tabla:**

| Tipo de recurso | Qué se integró | Cómo se empleó |
|---|---|---|
| Ilustraciones originales | 7 obras del portafolio (Outfits, Awa Jelly, Strawberry Art, CRK OC Style, Background, Loading Screen, Celes Vtuber) | Galería con descripciones al pasar el cursor y visor ampliado (lightbox) con título y texto alternativo |
| Ilustraciones de servicio | Arte de Live 2D Rigging + Art, Emotes e Illustration | Cabeceras visuales de cada categoría y tarjetas del inicio |
| Fotografías | No se usaron fotografías | El proyecto es 100 % ilustración digital propia; se priorizó obra real sobre bancos de imágenes |
| Iconos | Conjunto de iconos de línea (Lucide) en trazo fino | Navegación, canales de contacto, características de servicios y acciones del formulario |
| Infografías | No se emplearon infografías estáticas | La estructura por tarjetas y listas de entregables cumple la misma función de resumir información compleja |
| Animaciones | Animaciones de interfaz con Framer Motion | Aparición de secciones al hacer scroll, menú móvil con transición, tarjetas con elevación, galería con lupa suave |
| Videos | 2 demostraciones Live 2D alojadas en YouTube | Reproductores de la página ShowCase con título accesible |

A continuación se muestran seis de las imágenes empleadas, con su función dentro del sitio.

**Imagen 5** — ancho completo:
- Ruta: `documento/img/1_SUMMER_TENSHI_OUTFITS.webp`
- Qué es: hoja de vestuario «Summer Tenshi Outfits» con variaciones de traje y accesorios (ilustración original).
- Pie sugerido: «Figura 5. “Summer Tenshi Outfits”: hoja de vestuario con variaciones de traje. Evidencia la especialidad en diseño de personaje y moda.»

**Imagen 6** — 74 % centrada:
- Ruta: `documento/img/3_STRAWBERRY_ART.webp`
- Qué es: ilustración «Strawberry Art» en rosa pastel (ilustración original).
- Pie sugerido: «Figura 6. “Strawberry Art”: ilustración temática en rosa pastel. Refuerza la identidad cromática de la marca.»

**Imagen 7** — 74 % centrada:
- Ruta: `documento/img/7_CELES_VTUBER.webp`
- Qué es: diseño completo del modelo «Celes Vtuber» con hoja de referencia (ilustración original).
- Pie sugerido: «Figura 7. “Celes Vtuber”: diseño completo de modelo con hoja de referencia. Demuestra capacidad de trabajo por encargo.»

**Imagen 8** — 74 % centrada:
- Ruta: `documento/img/SERVICES-seccion4-EMOTES.webp`
- Qué es: set de emotes con expresiones numeradas (arte de la categoría de servicio «Emotes»).
- Pie sugerido: «Figura 8. Set de emotes con expresiones numeradas. Ilustra la categoría de servicio “Emotes”.»

**Imagen 9** — 74 % centrada:
- Ruta: `documento/img/SERVICES-seccion1-LIVE2DRIGGING+ART.webp`
- Qué es: arte del paquete «Live 2D Rigging + Art» con modelo y expresiones (arte de servicio).
- Pie sugerido: «Figura 9. Arte del paquete “Live 2D Rigging + Art”: referencia del servicio más completo, con modelo y expresiones.»

**Imagen 10** — ancho completo:
- Ruta: `evidencias/capturas-sitio/05-showcase-desktop.png`
- Qué es: captura de la página ShowCase en escritorio con los dos reproductores de video de YouTube (demostraciones Live2D).
- Pie sugerido: «Figura 10. Las demostraciones en video de la página ShowCase: el modelo se ve en movimiento antes de la compra.»

---

## 6. Diseño: estilo y elementos visuales

### a) Paleta de colores

**Texto:** La paleta conserva los colores del modelo VTuber de la marca: un fondo **negro cálido** que hace resaltar el rosa pastel, un texto en **marfil rosado** de alta legibilidad y una escala de **rosas en seis intensidades** que se aplican en acentos, botones, bordes y degradados. Los valores RGB documentados son:

**Imagen 11** — ancho completo:
- Ruta: `evidencias/recursos-graficos/paleta-colores.png`
- Qué es: tabla visual de la paleta con nombre, HEX y RGB de cada color.
- Pie sugerido: «Figura 11. Paleta del sitio con nombre, valor hexadecimal y valor RGB de cada color.»

**Tabla (repetir como tabla del documento):**

| Color | HEX | RGB | Uso principal |
|---|---|---|---|
| Negro cálido | #080406 | 8, 4, 6 | Fondo general |
| Elevado (tarjetas) | #170A0E | 23, 10, 14 | Tarjetas y paneles |
| Marfil rosado | #FFF0F3 | 255, 240, 243 | Texto principal |
| Rosa 100 | #FFD6E0 | 255, 214, 224 | Textos de énfasis suave |
| Rosa 200 | #FFB3C6 | 255, 179, 198 | Botones primarios, enlaces |
| Rosa 300 | #FFC2D1 | 255, 194, 209 | Degradados y transiciones |
| Rosa 400 (acento) | #FF85A1 | 255, 133, 161 | Acento principal: foco, hovers, iconos |
| Rosa 500 | #FF6B8A | 255, 107, 138 | Degradados de botones y banda de contacto |
| Rosa 600 | #E8607A | 232, 96, 122 | Acento fuerte, sombras con tinte rosa |

### b) Tipografías

Se eligieron dos familias con personalidad complementaria, autoalojadas en formato WOFF2 para un cargado rápido:

**Imagen 12** — ancho completo:
- Ruta: `evidencias/recursos-graficos/tipografias.png`
- Qué es: muestra del alfabeto (mayúsculas, minúsculas, números) de las dos fuentes reales del sitio.
- Pie sugerido: «Figura 12. Bricolage Grotesque (títulos) y Outfit (texto), con muestra del alfabeto.»

- **Bricolage Grotesque** (pesos 500 a 800): títulos, logotipo y encabezados. Su trazo expresivo evoca titulares de cómic sin sacrificar nitidez.
- **Outfit** (pesos 400 a 600): cuerpo del texto, formularios y navegación. Geométrica y muy legible en pantalla. El título principal del hero usa además la pila de fuentes del sistema (system-ui, Avenir, Helvetica), heredada de la identidad original del sitio.

### c) Texturas y patrones

La única textura del sitio es el **patrón de rombos rosas pastel** que aparece en el fondo del hero y de las cabeceras de página. Se emplea con opacidad contenida para no competir con el contenido, y aporta la reminiscencia kawaii del papel decorado sin recurrir a imágenes recargadas.

**Imagen 13** — ancho completo:
- Ruta: `evidencias/recursos-graficos/textura-fondo.png`
- Qué es: muestra del patrón de rombos rosas sobre fondo negro cálido, enmarcado.
- Pie sugerido: «Figura 13. Patrón de rombos rosas pastel usado como textura de fondo.»

### d) Consistencia visual

Todas las decisiones visuales se concentraron en un sistema de tokens (colores, espaciados, radios, sombras, tiempos de animación) que cada página consume de la misma fuente. Como resultado: un solo radio de esquina por tipo de elemento (tarjetas de 24 px, botones completamente redondos), un solo acento cromático, sombras siempre teñidas de rosa en lugar de negro puro, y animaciones con la misma física de resorte en todo el sitio. Esta consistencia es lo que hace que siete páginas distintas se perciban como un solo lugar.

---

## 7. Organización y navegación

### a) Navegación intuitiva

La navegación global es persistente y queda fija al hacer scroll. En escritorio se muestran los enlaces de las seis secciones siempre visibles, con subrayado animado en el enlace activo; en móvil, el mismo menú se compacta en un botón que abre un panel lateral con los mismos destinos, numerados para orientar la lectura. El panel se puede cerrar con la tecla Escape o tocando el fondo oscuro, y atrapa el foco del teclado para no perder al usuario dentro del menú.

**Imagen 14** — 74 % centrada:
- Ruta: `evidencias/capturas-sitio/08-menu-mobile.png`
- Qué es: captura del menú móvil abierto (interacción real): panel lateral oscuro con los seis destinos numerados y la fila de iconos de redes.
- Pie sugerido: «Figura 14. Menú móvil abierto: mismos destinos que en escritorio, orden numerado y accesos directos a redes.»

### b) Etiquetas y categorías

- Las etiquetas del menú son cortas y están en inglés («About Me», «Services», «Portfolio», «ShowCase Portfolio», «Terms of Service», «Contact»), coherente con la audiencia internacional de la comunidad VTuber y con las rutas del sitio.
- Los servicios se agrupan en cinco categorías (Live 2D Rigging + Art, Vtuber Art, Rigging Services, Emotes, Illustration), cada una con sus entregables, complementos y condiciones en listas claras.
- El portafolio ordena las siete obras en una galería tipo mosaico con título visible en cada pieza.
- Los términos del servicio se dividen en seis apartados (pagos, revisiones, Live2D, plazos, propiedad intelectual y reembolsos) para localizar rápido la regla que se busca.

---

## 8. Elementos del sitio y cómo quedaron

**Tabla (única composición de esta sección):**

| Elemento | Cómo quedó al terminar el proyecto |
|---|---|
| Barra de navegación | Fija, con logotipo gráfico, enlaces persistentes en escritorio y menú lateral en móvil con foco controlado y cierre por Escape. |
| Hero de inicio | Ilustración de fondo a pantalla completa con glows pastel (rosa bebé y celeste), título de marca en la fuente original del sitio y subtítulo profesional, todo centrado. |
| Propuesta de valor | Sección de bienvenida que explica el diferencial (diseño, arte y rigging en una sola marca) con enlace al perfil. |
| Servicios destacados | Tres tarjetas con imagen, icono, descripción y enlace a la página completa de servicios. |
| Vista previa del portafolio | Cuatro obras en mosaico asimétrico con nombre visible al pasar el cursor y botón al portafolio completo. |
| Llamado al showcase | Tarjeta con imagen de la animación de carga y botón hacia los videos de modelos en movimiento. |
| Banda de contacto | Panel oscuro con brillo rosa superior y doble marco, con la invitación a iniciar la comisión y botón directo a la página Contact. |
| Galería del portafolio | Siete obras con descripción en el cursor y visor ampliado (lightbox) con título y texto alternativo. |
| Formulario de contacto | Campos de nombre, correo, tipo de servicio y detalles; al enviar, abre el cliente de correo con el mensaje prellenado dirigido al correo de comisiones. |
| Canales directos | Tres tarjetas centradas (correo, X y VGen) con nota sobre el uso recomendado de cada una. |
| Pie de página | Marca con logotipo, enlaces de secciones, botón “Start a commission” y la fila de canales de comunicación en todas las rutas. |
| Detalles técnicos | Salto al contenido para lectores de pantalla, foco visible en rosa, respeto de “reducir movimiento”, imágenes con texto alternativo y rutas con encabezados ordenados. |

---

## 9. Pantallas del sitio

**Texto introductorio:** Las siguientes capturas corresponden al sitio publicado el 18 de octubre de 2026.

**Imagen 15** — ancho completo:
- Ruta: `evidencias/capturas-sitio/01-inicio-desktop.png`
- Qué es: inicio completo en escritorio (misma captura de la Figura 1; usar aquí como figura principal de esta sección o variar el recorte).
- Pie sugerido: «Figura 15. Inicio (escritorio): el resumen completo de la marca en una sola vista, con llamados a la acción hacia el portafolio, el showcase y la comisión.»

**Imagen 16** — ancho completo:
- Ruta: `evidencias/capturas-sitio/03-servicios-desktop.png`
- Qué es: página Services en escritorio, página completa: banner, cinco categorías con arte, entregables y complementos.
- Pie sugerido: «Figura 16. Services: las cinco categorías con arte de encabezado, entregables, complementos y límites.»

**Imagen 17** — ancho completo:
- Ruta: `evidencias/capturas-sitio/04-portafolio-desktop.png`
- Qué es: página Portfolio en escritorio, página completa: galería mosaico de siete obras.
- Pie sugerido: «Figura 17. Portfolio: galería mosaico de las siete obras con numeración y títulos.»

**Imagen 18** — ancho completo:
- Ruta: `evidencias/capturas-sitio/07-contacto-desktop.png`
- Qué es: página Contact en escritorio: formulario de solicitud a la izquierda, canales directos a la derecha y nota de términos.
- Pie sugerido: «Figura 18. Contact: formulario de solicitud a la izquierda y canales directos a la derecha, con nota de términos.»

**Imagen 19** — 74 % centrada:
- Ruta: `evidencias/capturas-sitio/07-contacto-mobile.png`
- Qué es: página Contact en móvil: formulario a ancho completo y canales apilados debajo.
- Pie sugerido: «Figura 19. Contact en móvil: el formulario ocupa todo el ancho y los canales se apilan debajo.»

**Imagen 20** — 74 % centrada:
- Ruta: `evidencias/capturas-sitio/04-portafolio-mobile.png`
- Qué es: página Portfolio en móvil: obras en una sola columna con título visible.
- Pie sugerido: «Figura 20. Portafolio en móvil: las obras se muestran en una sola columna con título visible.»

---

## 10. Esquema final del sitio

El mapa final confirma la arquitectura planeada en la actividad 1 e incorpora los ajustes realizados en este entregable, señalados en el recuadro inferior del esquema.

**Imagen 21** — ancho completo:
- Ruta: `evidencias/esquema-final/esquema-final.png` (1000 × 920)
- Qué es: mapa del sitio terminado sobre fondo claro: raíz «Inicio /», seis rutas de primer nivel, bandas de contenido interno (5 categorías de servicios, 7 obras, 2 videos, 6 apartados de términos, formulario + canales de contacto), nota de contacto global y recuadro de cambios respecto a la actividad 1. Fuente vectorial editable: `evidencias/esquema-final/esquema-final.svg`.
- Pie sugerido: «Figura 21. Esquema final: siete rutas de primer nivel, contenido interno de cada sección y contacto global en el pie.»

**Texto:** **Cambios respecto a la planeación:** se añadió la ruta /contact con formulario y canales; el inicio pasó de un hero vacío a una página con secciones proyectadas y llamados a la acción; la navegación de escritorio ahora muestra enlaces persistentes; y el logotipo gráfico se incorporó a la barra y al pie. Las rutas, etiquetas y contenidos centrales se mantuvieron estables, como se había decidido.

---

## 11. Proceso: plataforma, alojamiento y dominio

El sitio se construyó con **React y Vite**, un generador de sitios estáticos que compila el proyecto a archivos HTML, CSS y JavaScript optimizados, ideales para un portafolio sin backend. Las animaciones se implementaron con Framer Motion y los iconos con la biblioteca Lucide, ambas de código abierto.

Como alojamiento se eligió **Cloudflare Pages**, cuyo plan gratuito incluye distribución en red global, certificado de seguridad y despliegues automáticos: cada cambio que se sube al repositorio del proyecto dispara una nueva compilación y publicación en segundos. El nombre de dominio **asummertenshi.studio** se comprobó disponible con una herramienta de búsqueda de dominios antes de registrarlo; es corto, memorable y refuerza la actividad creativa de la marca (extensión .studio).

Durante este entregable se aplicaron mejoras de diseño y rendimiento sobre la versión publicada: las ilustraciones se convirtieron de PNG a WebP (el peso de las imágenes bajó de 44.4 MB a 2.6 MB, una reducción del 94 %), se añadieron las secciones de inicio y la página de contacto, y se corrigieron detalles de navegación y tipografía.

---

## 12. Conclusión

Al terminar este proceso, la propuesta escrita de la primera actividad se convirtió en un sitio funcional, publicado con dominio propio y verificado ruta por ruta. El resultado conserva la esencia planeada: una marca personal alrededor de la creación de personajes VTuber y modelos Live 2D, con evidencia visual, condiciones claras y contacto directo. Al mismo tiempo, el sitio ganó elementos que la planeación solo insinuaba: un logotipo con identidad propia, una página de inicio que sí guía al visitante, una vía de solicitud sin fricción y un rendimiento que permite que las ilustraciones carguen rápido sin perder calidad.

Las decisiones de diseño tomadas en este entregable (paleta fiel al personaje, tipografías expresivas pero legibles, un solo acento cromático y animaciones con propósito) demuestran que es posible elevar la calidad percibida de un portafolio sin romper su personalidad. Como trabajo futuro queda pendiente validar el sitio con usuarios reales mediante la prueba moderada planeada en la actividad 1, y medir los clics hacia VGen y los canales de contacto para establecer una línea base de conversión.

---

## 13. Bibliografía

Formato APA, sangría francesa, texto alineado a la izquierda:

- ASummerTenshi. (s. f.). *ASummerTenshi — Portfolio*. Consultado el 18 de octubre de 2026, en https://asummertenshi.studio/
- Cloudflare. (s. f.). *Cloudflare Pages documentation*. Consultado el 18 de octubre de 2026, en https://developers.cloudflare.com/pages/
- Google Fonts. (s. f.). *Bricolage Grotesque y Outfit*. Consultado el 18 de octubre de 2026, en https://fonts.google.com/
- *Guía de organización de información en un proyecto web*. (s. f.). [Material de clase, documento de Word].
- Lucide. (s. f.). *Lucide icons — documentación*. Consultado el 18 de octubre de 2026, en https://lucide.dev/
- Motion. (s. f.). *Framer Motion — documentación*. Consultado el 18 de octubre de 2026, en https://motion.dev/
- Real Academia Española. (2010). *Nueva gramática de la lengua española*. Espasa.
- Vite. (s. f.). *Documentación oficial de Vite*. Consultado el 18 de octubre de 2026, en https://vite.dev/
- World Wide Web Consortium. (2024, 12 de diciembre). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/2024/REC-WCAG22-20241212/

---

## 14. Revisión de ortografía

Los textos visibles del sitio están redactados en inglés, idioma elegido por la audiencia internacional de la comunidad VTuber, y fueron revisados con atención a concordancia, puntuación y uso consistente de los nombres de marca y de servicios. Los únicos textos en español de la interfaz son atributos accesibles (etiquetas para lectores de pantalla), que también se verificaron.

La redacción de este documento se revisó conforme a la *Nueva gramática de la lengua española* (Real Academia Española, 2010): se cuidó la acentuación de palabras como «página», «móvil», «ilustración» y «demostración»; el uso correcto de signos de interrogación y admiración iniciales; la concordancia de número y género; y la puntuación de las enumeraciones. Las palabras extranjeras empleadas (rigging, livestream, showcase, lightbox, software, hardware) se escriben en redonda, sin comillas ni cursivas, de acuerdo con la práctica recomendada para tecnicismos asentados.

**Nota de cierre (recuadro):** Sitio publicado y verificado en https://asummertenshi.studio/ el 18 de octubre de 2026. Evidencias conservadas en la carpeta `evidencias/` que acompaña a este documento.

---

## ANEXO — Inventario completo de imágenes (rutas relativas a `Entregable-2/`)

| Ruta | Qué es | Sección donde se usa |
|---|---|---|
| `evidencias/capturas-sitio/01-inicio-desktop.png` | Inicio completo, escritorio | 1 (Fig. 1) y 9 (Fig. 15) |
| `evidencias/capturas-sitio/01-inicio-mobile.png` | Inicio, móvil | 1 (Fig. 2) |
| `evidencias/capturas-sitio/02-about-me-desktop.png` | About Me, escritorio | respaldo |
| `evidencias/capturas-sitio/02-about-me-mobile.png` | About Me, móvil | respaldo |
| `evidencias/capturas-sitio/03-servicios-desktop.png` | Services, escritorio | 9 (Fig. 16) |
| `evidencias/capturas-sitio/03-servicios-mobile.png` | Services, móvil | respaldo |
| `evidencias/capturas-sitio/04-portafolio-desktop.png` | Portfolio, escritorio | 9 (Fig. 17) |
| `evidencias/capturas-sitio/04-portafolio-mobile.png` | Portfolio, móvil | 9 (Fig. 20) |
| `evidencias/capturas-sitio/05-showcase-desktop.png` | ShowCase con videos, escritorio | 5 (Fig. 10) |
| `evidencias/capturas-sitio/05-showcase-mobile.png` | ShowCase, móvil | respaldo |
| `evidencias/capturas-sitio/06-terminos-desktop.png` | Terms of Service, escritorio | respaldo |
| `evidencias/capturas-sitio/06-terminos-mobile.png` | Terms, móvil | respaldo |
| `evidencias/capturas-sitio/07-contacto-desktop.png` | Contact, escritorio | 9 (Fig. 18) |
| `evidencias/capturas-sitio/07-contacto-mobile.png` | Contact, móvil | 9 (Fig. 19) |
| `evidencias/capturas-sitio/08-menu-mobile.png` | Menú móvil abierto | 7 (Fig. 14) |
| `evidencias/logo/logo.png` | Logotipo oficial (PNG con transparencia) | portada |
| `evidencias/logo/logo-512.png` | Logo a ≈512 px | 2 (Fig. 3) |
| `evidencias/logo/logo-192.png` | Logo a ≈192 px | respaldo |
| `evidencias/logo/logo-64.png` | Logo a ≈64 px | 2 (Fig. 4) |
| `evidencias/logo/logo-512-sobre-oscuro.png` | Logo sobre fondo oscuro | respaldo |
| `evidencias/logo/favicon.png` | Favicon del sitio | respaldo |
| `evidencias/esquema-final/esquema-final.png` | Mapa del sitio (raster) | 10 (Fig. 21) |
| `evidencias/esquema-final/esquema-final.svg` | Mapa del sitio (vector) | respaldo |
| `evidencias/recursos-graficos/paleta-colores.png` | Paleta con HEX y RGB | 6 (Fig. 11) |
| `evidencias/recursos-graficos/tipografias.png` | Alfabeto de las dos fuentes | 6 (Fig. 12) |
| `evidencias/recursos-graficos/textura-fondo.png` | Textura de rombos | portada (referencia) y 6 (Fig. 13) |
| `documento/img/1_SUMMER_TENSHI_OUTFITS.webp` | Ilustración «Summer Tenshi Outfits» | 5 (Fig. 5) |
| `documento/img/3_STRAWBERRY_ART.webp` | Ilustración «Strawberry Art» | 5 (Fig. 6) |
| `documento/img/7_CELES_VTUBER.webp` | Ilustración «Celes Vtuber» | 5 (Fig. 7) |
| `documento/img/SERVICES-seccion4-EMOTES.webp` | Arte de emotes | 5 (Fig. 8) |
| `documento/img/SERVICES-seccion1-LIVE2DRIGGING+ART.webp` | Arte del paquete Live 2D | 5 (Fig. 9) |
