// Portada del Entregable 2 usando la plantilla Summer (scripts/lib/cover-summer.mjs)
import { renderCover } from './lib/cover-summer.mjs';

await renderCover({
  topRight: 'ARQUITECTURA DE LA INFORMACIÓN Y DISEÑO',
  kicker: 'ENTREGABLE 2 · SITIO WEB',
  logoPath: 'Entregable-2/evidencias/logo/logo.png',
  title: 'ASummerTenshi',
  subtitle: 'VTuber Artist &amp; Live 2D Rigger',
  rows: [
    { label: 'Estudiante', value: 'Cynthia Valeria Navarro Velázquez' },
    { label: 'Matrícula', value: '335014785' },
    { label: 'Materia', value: 'Arquitectura de la Información y Diseño' },
    { label: 'Docente', value: 'Luis Uriel Victoria López' },
    { label: 'Fecha de entrega', value: '18 de octubre de 2026' },
  ],
  bottomRight: 'asummertenshi.studio',
  outPath: 'Entregable-2/documento/portada.png',
});
