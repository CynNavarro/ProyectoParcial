# Actividad 1 · Propuesta de sitio web personal

## ASummerTenshi — portafolio de arte VTuber y rigging Live2D

![Ilustración original del portafolio de ASummerTenshi, seleccionada para la portada.](./recursos/arte-portada.png)

**URL vigente:** [https://asummertenshi.studio/](https://asummertenshi.studio/)  
**Marca personal:** ASummerTenshi / Summer Tenshi  
**Actividad:** planeación y arquitectura de información  
**Fecha de consulta del sitio y las fuentes:** 4 de octubre de 2026

> Este informe documenta la arquitectura de una propuesta personal usando como evidencia la versión funcional ya publicada. Los wireframes son esquemas de baja fidelidad. Las oportunidades de mejora se señalan como propuestas, no como funciones existentes.

---

## 1. Introducción

Un portafolio personal debe explicar quién ofrece el servicio, mostrar evidencia de su trabajo y ayudar a que una persona interesada decida qué necesita y cómo iniciar el contacto. Este proyecto organiza la marca **ASummerTenshi**, presentada en el sitio como *VTuber Artist & Live 2D Rigger*, alrededor de la creación de personajes virtuales, la ilustración y la animación de modelos 2D.

El análisis parte de la información visible en el sitio publicado y de sus rutas actuales. La guía de clase establece que esta actividad se concentre en la planeación y arquitectura antes de la fase formal de diseño (Guía de organización de información en un proyecto web, s. f.). No se tuvieron entrevistas con clientes, estadísticas de tráfico ni datos de ventas; por eso, las características de audiencia y las metas de conversión se presentan como hipótesis que deberán validarse. La propuesta define propósito, contenidos, organización, navegación, estilo y wireframes, sin sustituirlos por un rediseño visual final.

## 2. Tema, identidad y propuesta de valor

### Tema específico

Servicios creativos para VTubers y creadores digitales: diseño e ilustración de personajes, arte preparado para Live2D, rigging, emotes e ilustración.

### Identidad de marca observada

El sitio usa el nombre **ASummerTenshi** y el subtítulo **“VTuber Artist & Live 2D Rigger”**. La página About Me describe a Summer Tenshi como estudiante con formación en animación, enfocada en creación de VTubers, diseño de personajes, moda, vestuario e identidad visual. También presenta trabajo de ilustración anime y rigging 2D (ASummerTenshi, s. f.-b).

### Propuesta de valor

> **Diseño e ilustro personajes VTuber con identidad propia y puedo acompañar el proceso hasta convertir el arte en un modelo Live2D expresivo.**

La diferenciación no se plantea como “ser la única” artista de este tipo. Se sustenta en reunir en una misma marca el diseño visual del personaje, el arte para el modelo y el rigging, junto con ejemplos de trabajo y condiciones de comisión consultables.

### Mensaje central

La marca ayuda a creadores digitales a presentar una identidad visual original mediante personajes, ilustraciones y movimiento 2D. El contenido debe transmitir creatividad, especialización y claridad sobre lo que incluye cada encargo.

## 3. URL y nomenclatura

El dominio ya está publicado; se registra como URL vigente, no como disponibilidad futura por comprobar.

| Sección | URL propuesta/vigente | Etiqueta visible actual |
|---|---|---|
| Inicio | `/` | ASummerTenshi |
| Perfil | `/about` | About Me |
| Servicios | `/services` | Services |
| Portafolio | `/portfolio` | Portfolio |
| Demostraciones | `/showcase` | ShowCase Portfolio |
| Condiciones | `/terms` | Terms of Service |

Se conserva el patrón breve en inglés porque coincide con la interfaz publicada y con su posible audiencia internacional. Si se incorpora una versión en español, se recomienda definir una estrategia de idioma y rutas localizadas antes de traducir etiquetas de manera aislada. No existe una ruta `/contact`: los datos y accesos de contacto aparecen en el menú y el pie de página.

## 4. Objetivos, metas y funciones

### Objetivo general

Organizar el sitio para que una persona interesada comprenda la especialidad de ASummerTenshi, compare sus servicios, revise ejemplos y condiciones, y pueda iniciar una solicitud por un canal de contacto claro.

### Objetivos específicos

1. Comunicar la especialidad y la propuesta de valor desde la página de inicio.
2. Describir cada servicio mediante alcance, entregables, complementos, restricciones y enlace a condiciones.
3. Presentar los trabajos y demostraciones como evidencia de calidad y de capacidades técnicas.
4. Reducir dudas sobre pagos, revisiones, tiempos, derechos de uso y reembolsos antes de que se inicie una comisión.
5. Facilitar el paso desde una página de servicio o de portafolio hacia VGen u otro canal elegido por la artista.

### Metas medibles propuestas

- En una prueba moderada con cinco personas del público objetivo, al menos **cuatro de cinco** deben poder localizar un servicio adecuado, un ejemplo relacionado, las condiciones principales y una vía de contacto sin recibir instrucciones sobre dónde hacer clic.
- Cada tipo de servicio deberá mostrar o enlazar sus entregables, complementos y condiciones; la información que requiera cotización se identificará expresamente como tal, sin inventar precios base.
- Durante los primeros tres meses posteriores a cualquier mejora aceptada, registrar clics salientes a VGen y canales de contacto para establecer una línea base. No se fija un volumen de ventas sin contar con datos de visitas y conversión.

### Funciones del sitio

- Presentar la marca y su especialización.
- Exponer servicios creativos y ejemplos de trabajos.
- Mostrar demostraciones audiovisuales de modelos.
- Publicar términos de comisión y orientar sobre el proceso.
- Facilitar contacto directo y derivar a la plataforma de encargos.

## 5. Modelo de negocio y viabilidad

El modelo principal es **servicios profesionales por encargo**, apoyado por **generación de prospectos**. El sitio informa, demuestra el trabajo y lleva a la persona interesada a canales externos; no se observa un carrito o pago integrado, suscripción ni publicidad. Los ingresos proceden de encargos personalizados y posibles complementos contratados por cada cliente. VGen funciona como canal externo de descubrimiento o solicitud, además de los medios de contacto publicados.

La página Services incluye arte VTuber, rigging, emotes e ilustración. Para ilustración muestra precios de referencia en USD —busto $15, medio cuerpo $25 y cuerpo completo $30— y complementos; los precios pueden variar según el encargo. En las categorías de arte y rigging Live2D se muestran entregables y complementos, pero no se identificó un precio base general en esa página. En el reporte se debe dejar como **cotización por confirmar**, no deducir un monto (ASummerTenshi, s. f.-c).

La página de términos describe un pago 50/50, límites de revisiones, tiempos estimados por tipo de comisión, derechos y reembolsos. Son elementos que hacen viable un servicio digital sin inventario físico, pero la capacidad de producción de una sola artista limita cuántos encargos pueden aceptarse simultáneamente (ASummerTenshi, s. f.-f).

| Elemento | Definición para el proyecto |
|---|---|
| Propuesta de valor | Diseño e ilustración de personajes, arte VTuber y rigging Live2D bajo una identidad artística coherente. |
| Clientes | VTubers, streamers y creadores digitales que necesitan arte o modelos personalizados. |
| Canales | Sitio propio, VGen, X y contacto directo publicado. |
| Ingresos | Encargos personalizados y complementos de servicios. |
| Recursos clave | Habilidad artística/técnica, portafolio, tiempo, herramientas de producción y reputación. |
| Costos y límites | Tiempo de producción, herramientas y comisiones de plataformas o pagos, si aplican; no se asignan importes sin datos. |
| Riesgos | Sobrecarga de trabajo, alcance poco claro, solicitudes fuera de disponibilidad y falta de precios base en algunos servicios. |
| Respuestas propuestas | Mostrar disponibilidad, alcance, cotización, etapas, fecha estimada y CTA de solicitud; medir clics y consultas. |

## 6. Audiencia objetivo

La interfaz actual está en inglés y enlaza a servicios digitales internacionales. Esto permite plantear un segmento de alcance internacional, pero no demuestra por sí solo dónde viven los clientes ni cuál es su idioma preferido. Tampoco se cuenta con datos demográficos, entrevistas, analítica o encuestas. Por rigor, se segmenta principalmente por necesidad y comportamiento, y se dejan edad, ubicación y nivel socioeconómico como datos por validar.

| Segmento | Necesidad e interés | Información que espera | Ruta y estrategia de contenido |
|---|---|---|---|
| VTuber debutante | Crear un personaje original y convertirlo en un modelo listo para transmitir. | Diferencia entre arte, rigging y paquete; entregables, compatibilidad, precio o cotización, proceso y plazos. | Inicio → Servicios → Showcase/Portafolio → Términos. Proponer CTA visible para solicitar la comisión. |
| VTuber o streamer activo | Encargar rigging, vestuario, expresiones, emotes o actualizaciones. | Alcance de cada servicio, archivos incluidos, complementos y ejemplos de movimiento. | Servicios y Showcase; enlazar ejemplos relacionados y condiciones desde cada categoría. |
| Creador independiente de contenido | Obtener ilustración, diseño de personaje o recursos visuales para su canal. | Estilo, variedad de trabajos, precios de referencia y medios de contacto. | Portafolio → Servicios → contacto/VGen. Organizar las muestras por tipo de trabajo. |

**Variables aún no confirmadas:** edad mínima de contratación, países atendidos, idiomas de atención, promedio de presupuesto y categorías AMAI. La guía de clase incluye una tabla de niveles socioeconómicos como orientación; no se asigna un nivel a estos segmentos porque el sitio y la evidencia disponible no permiten hacerlo. En cambio, el presupuesto puede analizarse por tipo de servicio y precios publicados, y validarse mediante consultas reales.

### Competidores y referentes comparables

Se revisaron tres portafolios públicos relacionados con arte VTuber, rigging o creación de modelos. Se comparan como referentes, no como una lista exhaustiva del mercado. Las condiciones y precios de encargos pueden cambiar; la consulta se realizó el 4 de octubre de 2026.

| Sitio | Modelo/alcance observado | Fortalezas | Oportunidad observada | Elemento diferenciador |
|---|---|---|---|---|
| [Typeou — Live2D Comms](https://www.typeou.dev/comms) | Especialista en rigging Live2D; solicitud, cola, proceso, características y entregables. | Explica con detalle las funciones del rig, proceso y condiciones; separa navegación a precios, términos, contacto y trabajos terminados. | La cantidad de especificaciones técnicas puede ser pesada para un cliente nuevo; requiere que el arte del modelo ya esté preparado, salvo una excepción de colaboración. | Especificación técnica profunda, estado de comisión y proceso por etapas. |
| [BeanyCoffee — VTuber Commission](https://beanycoffee-illustration.com/vtuber-commission/) | Diseño, arte, rigging, animaciones y complementos; precios y condiciones extensos. | Hace explícitos los entregables, varias tarifas de referencia, licencias, pagos y tiempos. | La información es larga y concentrada en una página; un lector necesita recorrer bastante contenido para comparar opciones. | Desglose detallado del paquete desde diseño hasta rigging. |
| [Amalthea Art — VTuber Commissions](https://amaltheart.weebly.com/vtuber-commissions.html) | Arte 2D y rigging con niveles busto, medio cuerpo y cuerpo completo; enlaces a portafolio, TOS y otros encargos. | Organiza precios de referencia y complementos por tamaño del modelo; conecta con portafolio y términos. | Los precios se declaran indicativos y pueden variar por complejidad; la información requiere lectura extensa. | Comparación por tamaño y alcance del modelo. |

**Conclusión del referente competitivo:** los tres sitios reducen incertidumbre mediante ejemplos, precios o especificaciones y términos. ASummerTenshi puede destacar la combinación de diseño visual, arte y rigging, manteniendo su estilo propio y facilitando el siguiente paso desde cada servicio. No se afirma que los competidores hayan sido evaluados con pruebas de usuario.

![Referencia visual de Typeou, consultada el 4 de octubre de 2026.](./evidencias/benchmark/01-typeou-rigging.png)

![Referencia visual de BeanyCoffee, consultada el 4 de octubre de 2026.](./evidencias/benchmark/02-beanycoffee-vtuber.png)

![Referencia visual de Amalthea Art, consultada el 4 de octubre de 2026.](./evidencias/benchmark/03-amalthea-vtuber.png)

## 7. Competencias de la marca

La rúbrica solicita tres competencias con sus funciones y responsabilidades. Al tratarse de una marca personal, se describen como capacidades de la artista y responsabilidades que asume al ejecutar cada encargo.

| Competencia | Funciones y responsabilidades | Evidencia observable |
|---|---|---|
| Diseño de personajes e ilustración digital | Interpretar la idea del cliente; definir apariencia, vestuario y recursos visuales; producir ilustraciones y archivos acordados; conservar coherencia de estilo. | Perfil About Me, categorías Vtuber Art e Illustration y obras de `/portfolio`. |
| Rigging y preparación de modelos Live2D | Preparar arte para rigging; configurar parámetros, expresiones y movimiento; revisar compatibilidad y entregar archivos según el servicio acordado. | Servicios de arte/rigging, ejemplos en `/showcase` y condiciones Live2D. |
| Gestión y comunicación de comisiones | Aclarar alcance, entregables, calendario y revisiones; mantener comunicación; respetar políticas de pago, propiedad intelectual y entrega. | Página Terms of Service con anticipo/saldo, revisiones, plazos y reembolsos. |

## 8. Secciones, contenido y funcionalidades

| Sección y URL | Contenido principal | Funcionalidad y necesidad que cubre |
|---|---|---|
| Inicio `/` | Marca ASummerTenshi y subtítulo “VTuber Artist & Live 2D Rigger”. | Primera orientación de identidad. La versión publicada deja una oportunidad para incluir accesos directos a Servicios y Portafolio. |
| About Me `/about` | Perfil, formación en animación, interés en diseño de personajes/vestuario, ilustración anime y rigging. | Construye confianza y explica la perspectiva creativa. |
| Services `/services` | Live 2D Rigging + Art, Vtuber Art, Rigging Services, Emotes e Illustration; entregables, complementos, límites y precios parciales. | Permite identificar un encargo; se propone añadir CTA contextual a VGen/contacto y aclarar qué requiere cotización. |
| Portfolio `/portfolio` | Siete trabajos: Summer Tenshi Outfits, Awa Jelly Outfits, Strawberry Art, CRK OC Style, Background, Loading Screen y Celes Vtuber. | Evidencia variedad y estilo mediante una galería. Se recomienda que cada obra tenga descripción y alternativa de texto. |
| ShowCase Portfolio `/showcase` | Dos demostraciones multimedia: Summer Tenshi Showcase y Summer Tenshi Loading Screen. | Permite observar modelo y presentación audiovisual; ofrecer título accesible y enlace alternativo si el embed no carga. |
| Terms of Service `/terms` | Pagos, revisiones, Live2D, plazos/entrega, propiedad intelectual y reembolsos. | Resuelve dudas y establece condiciones antes de aceptar una comisión. |
| Contacto global | Email, X, VGen, WhatsApp y teléfono en el menú o pie compartido. | Facilita el contacto; no existe una ruta propia `/contact`. Evitar repetir datos personales innecesarios en materiales públicos. |

## 9. Mapa del sitio

La navegación se organiza con Inicio como punto de entrada y cinco páginas de primer nivel. Las categorías de servicios y las políticas son contenido local dentro de su página, no nuevas rutas.

```text
Inicio /
├── About Me /about
├── Services /services
│   ├── Live 2D Rigging + Art
│   ├── Vtuber Art
│   ├── Rigging Services
│   ├── Emotes
│   └── Illustration
├── Portfolio /portfolio  (7 trabajos)
├── ShowCase Portfolio /showcase  (2 demostraciones)
└── Terms of Service /terms
    ├── Payments
    ├── Revisions
    ├── Live2D
    ├── Deadlines & Delivery
    ├── Intellectual Property Rights
    └── Refunds

Contacto global: pie de página y menú de navegación en todas las rutas.
```

![Mapa jerárquico del sitio ASummerTenshi.](./evidencias/mapa-del-sitio.png)

## 10. Navegación y organización de contenidos

### Sistema de organización

- **Principal: por tema y tarea.** Las páginas separan perfil, servicios, trabajos, demostraciones y políticas según las preguntas que una persona necesita resolver.
- **Secundario: por tipo de encargo.** Servicios agrupa cinco categorías; el portafolio agrupa siete trabajos bajo una galería.
- **Lineal dentro de páginas extensas.** Servicios presenta opciones y sus detalles; Términos presenta políticas en orden consultable. Se recomienda un índice con enlaces internos en estas páginas para reducir el desplazamiento, especialmente en móvil.
- **Sin buscador por ahora.** Seis páginas y una galería pequeña no justifican una búsqueda interna. Reevaluar cuando haya muchas obras, publicaciones o categorías.

### Sistemas de navegación

1. **Global:** botón de menú persistente con acceso a las cinco secciones, además de la marca que vuelve al inicio. En móvil, el botón abre el menú accesible con los mismos destinos.
2. **Local:** categorías dentro de Services y apartados de Terms. Se propone un índice local para navegar a esos apartados; se documenta como mejora, no como control ya verificado.
3. **Contextual:** enlaces desde una obra o servicio hacia la muestra pertinente, los términos relacionados o el canal de solicitud. Es una oportunidad de diseño: en la inspección del DOM, Services y Portfolio no mostraron enlaces ni botones dentro de su contenido principal.

### Etiquetado y contenido

Las etiquetas visibles actuales son cortas y están en inglés. La documentación académica traduce su función al español, manteniendo entre paréntesis o en el mapa el nombre de la ruta real para evitar discrepancias. Los contenidos prioritarios son: alcance y entregables de cada servicio, evidencia visual, condiciones y acceso al contacto.

### Palabras clave iniciales

Lista semilla, no estudio de volumen de búsqueda: **VTuber artist, Live2D rigging, VTuber model art, VTuber commission, anime emotes, VTuber illustration, Live2D art and rigging**. La estrategia del sitio está en inglés; antes de invertir en SEO se debe revisar volumen y competencia en las herramientas correspondientes y decidir si se ofrecerá contenido en español.

## 11. Estilo y estructura de interfaz

La interfaz publicada utiliza un fondo casi negro cálido (`#080406`), texto marfil rosado (`#FFF0F3`), tipografía del sistema (`system-ui, Avenir, Helvetica, Arial`) e ilustraciones originales. La composición da prioridad a imágenes y títulos; el menú principal se abre desde un botón y los enlaces de contacto están disponibles en el pie. En móvil, la navegación se compacta y el contenido de páginas extensas se apila verticalmente. Los valores cromáticos se verificaron en el navegador; no se presume una guía de marca formal independiente.

La descripción de estilo no sustituye una propuesta gráfica futura. Para la actividad actual, los wireframes emplean bloques neutros con acentos rosados para representar estructura, jerarquía y acciones sin simular el acabado final.

### Criterios de usabilidad y accesibilidad propuestos

- Mantener nombres de página consistentes y una navegación global disponible.
- Usar encabezados en orden lógico, texto alternativo para imágenes informativas y controles con nombre accesible.
- Asegurar operación por teclado del menú, foco visible y ausencia de trampas de foco.
- Verificar contraste de texto y controles, ampliación y reflujo en móvil; no depender solo del color.
- Proveer título y alternativa de acceso a cada video/iframe; añadir subtítulos o transcripción cuando el contenido incluya audio o información verbal.
- Respetar reducción de movimiento si se agregan animaciones.
- Evaluar estos puntos contra WCAG 2.2 AA; este informe **no afirma conformidad WCAG**, porque no se ejecutó una auditoría completa (World Wide Web Consortium, 2024).

### Observaciones de la inspección con Playwright

- El sitio respondió en la URL principal y las cinco rutas del mapa; se verificaron sus encabezados y contenido visible.
- Inicio muestra la marca y el subtítulo, pero no tiene CTA dentro de su contenido principal. El contacto está en el pie/menú.
- La inspección del DOM encontró cero elementos `<a>` o `<button>` dentro de los contenidos principales de Services y Portfolio. Se recomienda revisar las interacciones de sus tarjetas con teclado y añadir enlaces semánticos donde corresponda.
- Terms tiene una lectura larga en móvil. Un índice de apartados mejoraría el acceso a pagos, revisiones y reembolsos.
- Se revisaron capturas en escritorio y móvil. No se hizo una prueba con clientes ni una evaluación integral de accesibilidad; las recomendaciones anteriores quedan pendientes de validación.

## 12. Wireframes de baja fidelidad

Los wireframes describen disposición, secuencia de contenido y acciones principales. Se basan en las rutas publicadas e incorporan algunos CTA como **propuestas**. El índice local para Terms también aparece identificado como una mejora sugerida. No son prototipos interactivos ni evidencias de funciones implementadas.

### Inicio

Hero de marca y especialidad; ilustración destacada; accesos propuestos a Servicios y Portafolio; resumen de categorías y pie de contacto. En móvil, se apila el mensaje, imagen y accesos.

![Wireframe de Inicio en escritorio.](./evidencias/wireframes/01-inicio-desktop.png)

![Wireframe de Inicio en móvil.](./evidencias/wireframes/02-inicio-mobile.png)

### About Me

Perfil y especialidad junto a un espacio para arte original; debajo, resumen de las tres competencias y acceso a servicios.

![Wireframe de About Me en escritorio.](./evidencias/wireframes/03-sobre-mi-desktop.png)

### Services

Cinco tipos de servicio en una jerarquía escaneable. Cada sección debe diferenciar alcance, entregables, precio publicado o necesidad de cotización, complementos y condiciones. El CTA a VGen/contacto es una propuesta de navegación contextual.

![Wireframe de Services en escritorio.](./evidencias/wireframes/04-servicios-desktop.png)

![Wireframe de Services en móvil.](./evidencias/wireframes/05-servicios-mobile.png)

### Portfolio y Showcase

Portfolio presenta las siete obras con imagen y título; Showcase separa las dos demostraciones en reproductores con etiqueta, controles y alternativa textual/enlace.

![Wireframe de Portfolio en escritorio.](./evidencias/wireframes/06-portafolio-desktop.png)

![Wireframe de Showcase en escritorio.](./evidencias/wireframes/07-showcase-desktop.png)

### Terms of Service

Apartados de pago, revisiones, Live2D, plazos, propiedad intelectual y reembolsos. El índice lateral/compacto es una mejora propuesta para orientar a quien consulta desde móvil.

![Wireframe de Terms en escritorio.](./evidencias/wireframes/08-terminos-desktop.png)

![Wireframe de Terms en móvil.](./evidencias/wireframes/09-terminos-mobile.png)

## 13. Evaluación de usabilidad propuesta

La guía recomienda probar los wireframes con al menos cinco personas. Las pruebas siguientes están **planeadas**, no ejecutadas; por tanto, no se presentan resultados ficticios.

### Participantes

Cinco personas que creen contenido digital, hagan streaming o estén considerando encargar arte/modelo VTuber. Se buscará variedad entre personas nuevas y creadoras con experiencia.

### Tareas

1. Desde Inicio, explica qué ofrece ASummerTenshi.
2. Encuentra el servicio que necesitarías para obtener arte y rigging de un modelo.
3. Localiza un trabajo o demostración que te ayude a decidir.
4. Encuentra las reglas de pago, revisiones y plazo.
5. Indica cómo iniciarías una solicitud y qué dato te falta antes de escribir.

### Medición y ajustes

Registrar éxito sin ayuda, tiempo aproximado, retrocesos y dudas. Criterio inicial: cuatro de cinco participantes completan cada tarea sin indicaciones y pueden distinguir servicios, ejemplos y términos. Si no se cumple, revisar orden, etiquetas, enlaces contextuales y claridad de cotización. Luego actualizar los wireframes y anotar los cambios.

## 14. Organización de recursos y evidencias

Las capturas del sitio y las páginas comparables se tomaron con Playwright el 4 de octubre de 2026. Las páginas son material de referencia; sus capturas se incluyen para respaldar las observaciones y se atribuyen a sus sitios originales. Las capturas propias muestran rutas reales; los wireframes están rotulados como esquemas de baja fidelidad.

### Evidencia del sitio publicado

![Inicio, escritorio.](./evidencias/capturas-sitio/01-inicio-desktop.png)

![Menú global abierto, escritorio.](./evidencias/capturas-sitio/02-menu-desktop.png)

![Menú global abierto, móvil.](./evidencias/capturas-sitio/02-menu-mobile.png)

![About Me, escritorio.](./evidencias/capturas-sitio/03-sobre-mi-desktop.png)

![Servicios, primer bloque, escritorio.](./evidencias/capturas-sitio/04-servicios-desktop.png)

![Servicios, categorías, escritorio.](./evidencias/capturas-sitio/04b-servicios-secciones-desktop.png)

![Servicios, móvil.](./evidencias/capturas-sitio/10-servicios-mobile.png)

![Portfolio, escritorio, primera parte.](./evidencias/capturas-sitio/05-portafolio-desktop.png)

![Portfolio, escritorio, resto de la galería.](./evidencias/capturas-sitio/05b-portafolio-resto-desktop.png)

![Portfolio, escritorio, trabajos finales de la galería.](./evidencias/capturas-sitio/05c-portafolio-final-desktop.png)

![Showcase, escritorio.](./evidencias/capturas-sitio/06-showcase-desktop.png)

![Terms of Service, primeros apartados, escritorio.](./evidencias/capturas-sitio/07-terminos-primer-bloque-desktop.png)

![Terms of Service, plazos y entrega, escritorio.](./evidencias/capturas-sitio/08-terminos-entrega-desktop.png)

![Terms of Service, propiedad intelectual y reembolsos, escritorio.](./evidencias/capturas-sitio/09-terminos-derechos-reembolsos.png)

![Terms of Service, móvil.](./evidencias/capturas-sitio/11-terminos-mobile.png)

## 15. Conclusión

La propuesta organiza la identidad de ASummerTenshi alrededor de una actividad concreta: crear arte VTuber y modelos Live2D personalizados. La arquitectura mantiene las rutas y el contenido central del sitio publicado, conecta servicios con trabajos y términos, y hace visible que el contacto ocurre mediante canales externos. El modelo profesional por comisión resulta coherente con los encargos digitales, pero depende de comunicar alcance, cotización, disponibilidad y tiempos de forma clara.

El mapa, los nueve wireframes, el inventario de contenido y las recomendaciones de evaluación proporcionan una base para revisar el sitio con usuarios antes de cualquier fase de diseño formal. El siguiente avance académico deberá confirmar los datos escolares y los supuestos de audiencia, realizar la prueba con cinco participantes y decidir cuáles mejoras se implementarán. Así se conserva una propuesta atractiva, viable y alineada con las necesidades de sus visitantes sin presentar hipótesis como resultados.

## Referencias

Amalthea Art. (s. f.). *Vtuber commissions*. Consultado el 4 de octubre de 2026, en https://amaltheart.weebly.com/vtuber-commissions.html

ASummerTenshi. (s. f.-a). *ASummerTenshi — Portfolio*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/

ASummerTenshi. (s. f.-b). *About Me*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/about

ASummerTenshi. (s. f.-c). *Services*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/services

ASummerTenshi. (s. f.-d). *Portfolio*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/portfolio

ASummerTenshi. (s. f.-e). *ShowCase Portfolio*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/showcase

ASummerTenshi. (s. f.-f). *Terms of Service*. Consultado el 4 de octubre de 2026, en https://asummertenshi.studio/terms

BeanyCoffee Illustration. (s. f.). *VTuber commission*. Consultado el 4 de octubre de 2026, en https://beanycoffee-illustration.com/vtuber-commission/

*Guía de organización de información en un proyecto web*. (s. f.). [Material de clase, documento de Word].

Typeou. (s. f.). *Live2D VTuber rigging commissions*. Consultado el 4 de octubre de 2026, en https://www.typeou.dev/comms

World Wide Web Consortium. (2024, 12 de diciembre). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/2024/REC-WCAG22-20241212/
