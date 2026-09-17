// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Canonical origin (custom domain). Required by @astrojs/sitemap and used
// as the base for absolute URLs in the RSS feeds.
const site = 'https://olivierpage.com'

// GitHub Pages project sites are served under a sub-path.
// `BASE_PATH` is injected by the deploy workflow (actions/configure-pages).
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/')

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // The mermaid library is inherently ~1 MB and lives in lazily-loaded
      // chunks (see MermaidLoader.astro), so raise the warning threshold
      // instead of flagging it on every build.
      chunkSizeWarningLimit: 700,
    },
  },
})
