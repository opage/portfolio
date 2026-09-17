<h1 align="center">Olivier Page — Portfolio</h1>

<p align="center">
  <a href="https://olivierpage.com/" target="_blank"><strong>olivierpage.com</strong></a>
</p>

<p align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with love" />
  <img src="https://forthebadge.com/images/badges/open-source.svg" alt="Open Source" />
  <br />
  <img src="https://img.shields.io/badge/Astro-7-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Mermaid-11-FF3670?style=for-the-badge&logo=mermaid&logoColor=white" alt="Mermaid" />
</p>

<p align="center">
  🔹 <a href="https://github.com/opage/portfolio/issues">Report Bug</a>
  &nbsp;·&nbsp;
  🔹 <a href="https://github.com/opage/portfolio/issues">Request Feature</a>
</p>

## About

Trilingual portfolio built with [Astro](https://astro.build), styled with
[Tailwind CSS](https://tailwindcss.com), interactive islands in
[Vue 3](https://vuejs.org) and enhanced with
[Mermaid](https://mermaid.js.org) diagrams.

## Built With

- [Astro](https://astro.build) — static site generator (zero JS by default)
- [Vue 3](https://vuejs.org) — interactive islands (typewriter, timeline)
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first styling
- [Mermaid](https://mermaid.js.org) — diagrams via `rehype-mermaid`
  (`pre-mermaid` strategy) + `MermaidLoader.astro`, with light/dark re-rendering
- [Astro Markdown](https://docs.astro.build/en/guides/markdown-content/)
  (`@astrojs/markdown-remark`) — blog rendering with `remark-gfm` tables and
  Shiki syntax highlighting

## Features

- 📖 Multi-page layout (Home, About, Experience, Projects, Resume, Blog)
- 🌍 Internationalization — English / Français / Lëtzebuergesch
- 🌗 Dark mode with automatic diagram re-theming
- 🧜‍♀️ Mermaid diagrams with light/dark support
- 🎨 Switchable folder-style themes
- 📱 Fully responsive

## Project Structure

```
.
├─ astro.config.mjs      # Astro + Vue + Tailwind config (BASE_PATH aware)
├─ public/               # static assets (images, PDFs, _headers)
├─ src/
│  ├─ pages/             # routes: /, /fr/, /lb/, /about/[lang], /blog/[lang]/[slug], …
│  ├─ layouts/Layout.astro  # nav, footer, dark mode, language switcher shell
│  ├─ components/        # Astro components + Vue islands (Typewriter, ExperienceTimeline)
│  ├─ content/blog/      # blog markdown templates with [[placeholders]]
│  └─ utils/             # i18n, site meta, markdown rendering, base-path helper
└─ themes/
   └─ purple/           # the current theme (folder-style)
      ├─ styles.css     # Tailwind entry + design tokens
      ├─ projects-data.ts
      ├─ i18n/{en,fr,lb}.ts
      └─ ...
```

## Getting Started

You need Node.js and git installed.

1. `npm install`
2. `npm run dev` — starts the dev server at http://localhost:4321
3. `npm run build` — production build (output in `dist/`)
4. `npm run preview` — preview the production build

## Internationalization (i18n)

The site is trilingual. Routes follow a `{page}/{lang}/` convention
(`src/pages/about/[lang].astro`, …). Translations live in `themes/purple/i18n/`:

- `en.ts` — English
- `fr.ts` — French
- `lb.ts` — Luxembourgish
- `types.ts` — shared `Dictionary` type

The language is switched via the flag toggle in the navbar.

## Themes

The visual design follows the DOSSIER editorial style (warm paper, clay
terracotta accent, Fraunces / Inter / JetBrains Mono, `[data-theme]`
light+dark) inspired by
[RachidChabane/my-blog](https://github.com/RachidChabane/my-blog), implemented
with Tailwind CSS v4 semantic tokens in `themes/purple/styles.css`.

Themes are self-contained folders under `themes/`. Shared data, dictionaries and
styles live in `themes/purple/` and are consumed by the Astro pages, layout and
components under `src/`.

## Mermaid Diagrams

Write diagrams in any blog template (`src/content/blog/*.md`) using a `mermaid`
fenced code block:

````md
```mermaid
flowchart LR
  Start --> Stop
```
````

Rendering is handled by `src/components/MermaidLoader.astro`, which renders
diagrams client-side with the `mermaid` package. Dark mode is detected
automatically — diagrams re-render when the theme changes.

## Deployment

Deploys automatically to GitHub Pages on every push to `master` (see
`.github/workflows/deploy.yml`).

## Show your support

Give a ⭐ if you like this website!

<a href="https://www.buymeacoffee.com/opage" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>
