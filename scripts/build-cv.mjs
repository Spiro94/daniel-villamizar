// Renders cv/resume.html to a text-based, ATS-friendly PDF with Playwright's Chromium.
//   node scripts/build-cv.mjs               -> public/daniel-villamizar-cv.pdf (fails while [[...]] placeholders remain)
//   node scripts/build-cv.mjs --draft x.pdf -> draft PDF at x.pdf, placeholders highlighted
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

// Playwright is not a project dependency: install it once with `npm i -g playwright && npx playwright install chromium`.
const { chromium } = createRequire(import.meta.url)('playwright')

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'cv', 'resume.html')
const draftIdx = process.argv.indexOf('--draft')
const draft = draftIdx !== -1
const out = draft
    ? path.resolve(process.argv[draftIdx + 1] ?? 'resume-draft.pdf')
    : path.join(root, 'public', 'daniel-villamizar-cv.pdf')

const pending = fs.readFileSync(source, 'utf8').match(/\[\[[^\]]*\]\]/g) ?? []
if (pending.length && !draft) {
    console.error(`cv/resume.html still has ${pending.length} placeholder(s):\n  ${pending.join('\n  ')}\nFill them in, or use --draft <file>.`)
    process.exit(1)
}

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(source).href)
await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true })
await browser.close()
console.log(`Wrote ${path.relative(root, out)}${pending.length ? ` (${pending.length} placeholders pending)` : ''}`)
