# Plan de mejoras del sitio

Basado en la guía de posicionamiento (CV, LinkedIn y X) y en el estado actual de `src/`.
Objetivo: que el sitio sirva igual de bien a **clientes** (lo que ya hace) y a **reclutadores/hiring managers** internacionales, con el mismo mensaje que el CV y LinkedIn.

## Hecho

- **CV** actualizado en `cv/main.tex` (mismo template de Overleaf, fechas solo con año). Compilado y publicado en `public/daniel-villamizar-cv.pdf`.
- **Fase 1:** cifra de usuarios 50K+, correo en los links para reclutadores del hero, borrado de código sin uso (`AboutMeSection`, `TechToolsSection`, `technologies.tsx`, copia vieja del CV).
- **Fase 2:** línea de tiempo de experiencia con los mismos datos del CV (`src/utils/experience.tsx`), "Mi rol" en cada proyecto de cliente (`src/utils/projects.tsx`), stack agrupado por categorías.
- X queda fuera del sitio (no se usa activamente).

## Pendiente que mejora lo hecho

- Métricas reales para Byrider, Leal y el design system de Bancolombia (rating, crash-free, equipos que lo usan). Agregarlas en `cv/main.tex` y en `src/utils/experience.tsx`.
- Confirmar si el design system de Bancolombia fue liderado o con participación (hoy dice "ayudé a construir").

## Fase 3: página para reclutadores (`/hire`)

| # | Cambio | Archivos |
|---|--------|----------|
| 9 | Ruta `/hire` (en inglés) con el mismo titular que LinkedIn y el CV: *Senior Mobile Engineer \| Flutter, Dart, Rust, React \| Design Systems & Local-first Apps \| Claude Certified Architect*. Incluye resumen, timeline, certificación, botón al CV y contacto por correo o agenda. | `src/seo.ts` (`LANG_PATH`/`SEO` para la nueva ruta), `scripts/prerender.mjs`, `src/entry-server.tsx`, `src/main.tsx`, nuevo `src/components/HirePage.tsx`, `public/sitemap.xml` |
| 10 | Meta tags propios para `/hire`, con palabras de cargo global ("Senior Flutter Engineer", "Mobile Engineer", "Remote LATAM"), separados del SEO para clientes. | `src/seo.ts` |
| 11 | El link "¿Contratas para un rol senior?" del hero apunta a `/hire` en vez de solo al PDF. | `src/components/MainSection.tsx` |

## Fase 4: proof of work (construir en público)

| # | Cambio | Archivos |
|---|--------|----------|
| 12 | Sección "Notas técnicas" con artículos cortos en Markdown, prerenderizados. Sirven como prueba de trabajo para reclutadores. Primeros temas: migración de Xamarin a Flutter (Byrider), core local-first en Rust compartido entre móvil y escritorio, construir un design system para un banco, extracción con IA en CitaMente. | nuevo `content/notes/*.md`, `src/components/NotesSection.tsx`, `scripts/prerender.mjs`, `public/sitemap.xml` |
| 13 | Compartir cada nota en LinkedIn con un resumen corto y link al artículo. | contenido |

## Fuera del sitio (mismo mensaje en todos los canales)

- LinkedIn: mismo titular, About con "Core Technologies" al final, 50 skills, perfil en inglés, "Open to Work" solo para reclutadores, ubicación en una ciudad principal.

## Orden sugerido

Siguen la Fase 3 (`/hire`) y la Fase 4 (notas técnicas), independientes entre sí.
