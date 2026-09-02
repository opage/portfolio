import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [solid(), tailwindcss()],
  build: {
    // mermaid is lazy-loaded only when a blog post contains diagrams
    chunkSizeWarningLimit: 700,
  },
})
