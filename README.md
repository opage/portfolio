<h1 align="center">Olivier Page — Portfolio</h1>

<p align="center">
  <a href="https://olivierpage.com/" target="_blank"><strong>olivierpage.com</strong></a>
</p>

<p align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with love" />
  <img src="https://forthebadge.com/images/badges/open-source.svg" alt="Open Source" />
  <br />
  <img src="https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=white" alt="SolidJS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  🔹 <a href="https://github.com/opage/portfolio/issues">Report Bug</a>
  &nbsp;·&nbsp;
  🔹 <a href="https://github.com/opage/portfolio/issues">Request Feature</a>
</p>

## Built With

- SolidJS
- TypeScript
- Tailwind CSS
- Vite

## Features

- 📖 Multi-page layout
- 🌍 Internationalization (English / Français / Lëtzebuergesch)
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive

## Internationalization (i18n)

The app is trilingual. Translations live in:

- `src/i18n/en.ts` — English
- `src/i18n/fr.ts` — French
- `src/i18n/lb.ts` — Luxembourgish
- `src/i18n/types.ts` — shared `Dictionary` type

Accent-colored words are wrapped in `**double asterisks**` and rendered by the `RichText` component. The language is persisted in `localStorage` and can be switched via the flag toggle in the navbar. Non-translatable data (social links, tech icons, project images/URLs) lives in `src/data/site.ts`.

## Getting Started

Clone the repository — you need Node.js and git installed.

1. `npm install`
2. `npm run dev` — starts the dev server at http://localhost:5173
3. `npm run build` — production build

## Deployment

Deploys automatically to GitHub Pages on every push to `master` (see `.github/workflows/deploy.yml`).

## Show your support

Give a ⭐ if you like this website!

<a href="https://www.buymeacoffee.com/opage" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>
