// Renders each language to static HTML after `vite build` + the SSR build of src/entry-server.tsx.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const { render, SEO, SITE_URL, LANG_PATH } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const lang of Object.keys(SEO)) {
    const { title, description, locale, image, imageAlt } = SEO[lang]
    const url = SITE_URL + LANG_PATH[lang]
    const head = [
        `<title>${escape(title)}</title>`,
        `<meta name="description" content="${escape(description)}" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:title" content="${escape(title)}" />`,
        `<meta property="og:description" content="${escape(description)}" />`,
        `<meta property="og:locale" content="${locale}" />`,
        `<meta property="og:image" content="${SITE_URL + image}" />`,
        `<meta property="og:image:alt" content="${escape(imageAlt)}" />`,
        `<meta name="twitter:image" content="${SITE_URL + image}" />`,
        `<meta name="twitter:title" content="${escape(title)}" />`,
        `<meta name="twitter:description" content="${escape(description)}" />`,
    ].join('\n    ')

    const html = template
        .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
        .replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, head)
        .replace('<div id="root"></div>', `<div id="root">${await render(lang)}</div>`)

    const out = path.join(dist, LANG_PATH[lang], 'index.html')
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
    console.log(`prerendered ${LANG_PATH[lang]} -> ${path.relative(root, out)}`)
}

fs.rmSync(serverDir, { recursive: true, force: true })
