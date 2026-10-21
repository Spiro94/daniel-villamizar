/* eslint-disable react-refresh/only-export-components -- server entry, never hot-reloaded */
import React from 'react'
import { prerender } from 'react-dom/static'
import App from './App'
import { LangProvider, type Lang } from './i18n'

export { LANG_PATH, SEO, SITE_URL } from './seo'

// Waits for lazy sections so the full page ends up in the HTML.
export async function render(lang: Lang): Promise<string> {
    const { prelude } = await prerender(
        <React.StrictMode>
            <LangProvider initialLang={lang}>
                <App />
            </LangProvider>
        </React.StrictMode>
    )
    return new Response(prelude).text()
}
