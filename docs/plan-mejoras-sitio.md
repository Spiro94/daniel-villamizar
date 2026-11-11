# Plan de mejoras del sitio

Basado en la guía de posicionamiento (CV, LinkedIn y X) y en el estado actual de `src/`.
Objetivo: que el sitio sirva igual de bien a **clientes** (lo que ya hace) y a **reclutadores/hiring managers** internacionales, con el mismo mensaje que el CV, LinkedIn y X.

## Datos que necesito antes de implementar

- [ ] Fechas mes/año de cada puesto (también desbloquean el CV: `node scripts/build-cv.mjs`).
- [ ] Confirmar que Byrider y Yohana (Panasonic) fueron con Gorilla Logic, y desde cuándo existe Daniel Villamizar SAS.
- [ ] 2 o 3 métricas reales por proyecto de cliente (usuarios, rating, crash-free, tiempo de release, equipos que usan el design system).
- [ ] Usuario de X (y si ya tiene foto real + bio con rol, stack y escala).
- [ ] Link de agenda (Calendly o Cal.com) para llamadas de 15 minutos, si quieres ofrecerlo.

## Fase 1: correcciones rápidas (1 PR pequeño)

| # | Cambio | Archivos |
|---|--------|----------|
| 1 | Subir la cifra de usuarios: hoy `statUsers: '1K+'`, pero Byrider tiene 50K+ clientes. Usar la mayor cifra que puedas respaldar, en ambos idiomas. | `src/i18n.tsx` |
| 2 | Publicar el CV nuevo cuando no queden placeholders. | `cv/resume.html` → `public/daniel-villamizar-cv.pdf` |
| 3 | Agregar X a los links para reclutadores y al footer. | `src/utils/constants.tsx` (`xUrl`), `src/components/MainSection.tsx` (`HIRE_LINKS`), `src/components/ContactSection.tsx` |
| 4 | Mostrar el correo como canal principal para reclutadores (el flujo de WhatsApp sigue para clientes). | `src/components/ContactSection.tsx` |
| 5 | Borrar código muerto que no se renderiza: `AboutMeSection`, `TechToolsSection`, `src/assets/Daniel Villamizar CV.pdf` y el `technologies.tsx` sin uso, para que no se desincronicen del CV. | `src/components/`, `src/utils/`, `src/assets/` |

## Fase 2: experiencia con impacto

| # | Cambio | Archivos |
|---|--------|----------|
| 6 | Línea de tiempo de experiencia en orden cronológico inverso: empresa, cargo con nombre global ("Senior Software Engineer", no "Experienced Consultant"), mes/año y 1 o 2 logros medibles. Mismos datos que el CV, en un solo archivo de datos bilingüe. | `src/utils/experience.tsx` (nuevo `EXPERIENCE: Job[]`), `src/components/ExperienceSection.tsx` |
| 7 | En cada proyecto de cliente, agregar "Mi rol → resultado" debajo de la descripción del producto. | `src/utils/projects.tsx` (campo `impact: L`), `src/components/ProjectCard.tsx` |
| 8 | Agrupar el stack por categorías (Mobile, Backend, Cloud, AI), igual que en el CV, en vez de una sola fila de chips. | `src/utils/experience.tsx` (`CORE_STACK` → objeto por categoría) |

## Fase 3: página para reclutadores (`/hire`)

| # | Cambio | Archivos |
|---|--------|----------|
| 9 | Ruta `/hire` (en inglés) con el mismo titular que LinkedIn, X y el CV: *Senior Mobile Engineer \| Flutter, Dart, Rust, React \| Design Systems & Local-first Apps \| Claude Certified Architect*. Incluye resumen, timeline, certificación, botón al CV y contacto por correo o agenda. | `src/seo.ts` (`LANG_PATH`/`SEO` para la nueva ruta), `scripts/prerender.mjs`, `src/entry-server.tsx`, `src/main.tsx`, nuevo `src/components/HirePage.tsx`, `public/sitemap.xml` |
| 10 | Meta tags propios para `/hire`, con palabras de cargo global ("Senior Flutter Engineer", "Mobile Engineer", "Remote LATAM"), separados del SEO para clientes. | `src/seo.ts` |
| 11 | El link "¿Contratas para un rol senior?" del hero apunta a `/hire` en vez de solo al PDF. | `src/components/MainSection.tsx` |

## Fase 4: proof of work (construir en público)

| # | Cambio | Archivos |
|---|--------|----------|
| 12 | Sección "Notas técnicas" con artículos cortos en Markdown, prerenderizados. Primeros temas: migración de Xamarin a Flutter (Byrider), core local-first en Rust compartido entre móvil y escritorio, construir un design system para un banco, extracción con IA en CitaMente. | nuevo `content/notes/*.md`, `src/components/NotesSection.tsx`, `scripts/prerender.mjs`, `public/sitemap.xml` |
| 13 | Cada nota termina con link a su hilo en X, y cada hilo con link a la nota. | contenido |

## Fuera del sitio (mismo mensaje en todos los canales)

- LinkedIn: mismo titular, About con "Core Technologies" al final, 50 skills, perfil en inglés, "Open to Work" solo para reclutadores, ubicación en una ciudad principal.
- X: foto real, bio de 160 caracteres (rol + stack + escala), link al sitio o a `/hire`.
- Metadatos del PDF anterior: decía `Author: Alejandro Pérez Londoño` (quedó de la plantilla). El nuevo ya trae tu nombre.

## Orden sugerido

Fase 1 → Fase 2 → Fase 3 → Fase 4. Las fases 1 y 2 se pueden hacer en cuanto lleguen los datos de arriba. La 3 y la 4 son independientes entre sí.
