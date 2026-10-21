import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { LangProvider } from "./i18n";
import type { Lang } from "./i18n";
import { langFromPath } from "./seo";

const root = document.getElementById("root")!;
const prerendered = root.hasChildNodes();
// Hydration must start from the language the HTML was rendered in; LangProvider then syncs the URL.
const initialLang = prerendered ? (document.documentElement.lang as Lang) : langFromPath(location.pathname);
const app = (
  <React.StrictMode>
    <LangProvider initialLang={initialLang}>
      <App />
    </LangProvider>
  </React.StrictMode>
);

// Production pages are pre-rendered (scripts/prerender.mjs); the dev server serves an empty root.
if (prerendered) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
