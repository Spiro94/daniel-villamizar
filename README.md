# Daniel Villamizar · Portfolio

Personal portfolio and freelance landing page for Daniel Villamizar, an iOS, Android and web app developer and Claude Certified Architect. It covers the apps I've built and published, client projects, services, my work process and experience. There's also a WhatsApp link for quotes and a downloadable CV.

The site is bilingual (English / Español), and you switch language from the nav bar.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) (Rolldown build)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- Icons from [lucide-react](https://lucide.dev) and [react-icons](https://react-icons.github.io/react-icons/)
- [Vercel Analytics](https://vercel.com/docs/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights)

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR            |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint                                    |

## Project structure

```
public/                 Static files served as-is (favicon, CV PDF)
src/
  App.tsx               Page layout; sections below the hero are lazy-loaded
  i18n.tsx              EN/ES strings and the language context (useLang)
  index.css             Tailwind setup, theme tokens and custom animations
  components/           One component per section (NavBar, MainSection, AppsSection, ...)
  utils/
    constants.tsx       Contact links, WhatsApp number, CV and credential URLs
    projects.tsx        Client projects
    experience.tsx      Work history
    services.tsx        Services offered
    technologies.tsx    Tech/tools list
  assets/               Images (WebP) and SVGs
```

## Editing content

- **Text and translations:** `src/i18n.tsx`. Every key has an `en` and an `es` value.
- **Projects, experience, services, tech:** the matching file in `src/utils/`.
- **Contact links and CV:** `src/utils/constants.tsx`. To update the CV, replace `public/daniel-villamizar-cv.pdf`.
- **Colors and design tokens:** `src/index.css`. See `design.md` and `TAILWIND_COLORS_GUIDE.md` for the design system.

## Deployment

The site is hosted on [Vercel](https://vercel.com) as a static Vite build. The build command is `npm run build` and the output directory is `dist`.
