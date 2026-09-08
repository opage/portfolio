import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { en } from '../themes/purple/i18n/en'
import { fr } from '../themes/purple/i18n/fr'
import { lb } from '../themes/purple/i18n/lb'
import type { Dictionary } from '../themes/purple/i18n/types'
import { pageTranslations } from '../themes/purple/translations'
import { bodyTranslations } from '../themes/purple/blog-data/translations'
import { posts } from '../themes/purple/blog-data/posts'

const dicts: Record<string, Dictionary> = { en, fr, lb }

const sectionTitles = {
  about: (d: Dictionary) => d.nav.about,
  experience: (d: Dictionary) => d.nav.experience,
  projects: (d: Dictionary) => d.nav.projects,
  resume: (d: Dictionary) => d.nav.resume,
}

function detectLang(rel: string): string {
  if (rel.startsWith('lb/') || rel.includes('/lb/')) return 'lb'
  if (rel.startsWith('fr/') || rel.includes('/fr/')) return 'fr'
  return 'en'
}

function resolvePlaceholders(md: any) {
  md.core.ruler.before('normalize', 'resolve-placeholders', (state: any) => {
    const rel: string = state.env.relativePath || ''
    const lang = detectLang(rel)
    const blogMatch = /^blog\/(?:en|fr|lb)\/([\w-]+)\.md$/.exec(rel)
    const blogTr = blogMatch ? (bodyTranslations as Record<string, any>)[blogMatch[1]] : undefined

    const resolve = (key: string): string =>
      blogTr ? blogTr[key]?.[lang] ?? '' : (pageTranslations as Record<string, any>)[key]?.[lang] ?? ''

    state.src = state.src.replace(/\[\[([\w-]+)\]\]/g, (_: string, key: string) => resolve(key))
  })
}

const nav = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about/en/' },
  { text: 'Experience', link: '/experience/en/' },
  { text: 'Projects', link: '/projects/en/' },
  { text: 'Resume', link: '/resume/en/' },
  { text: 'Blog', link: '/blog/en/' },
]

const config = withMermaid(
  defineConfig({
  base: (process.env.BASE_PATH || '/').replace(/\/?$/, '/'),
  srcDir: 'content',
  srcExclude: ['**/template.md', '**/templates/**'],
  rewrites: {
    'home/en/index.md': 'index.md',
    'home/fr/index.md': 'fr/index.md',
    'home/lb/index.md': 'lb/index.md',
  },
  title: 'Olivier Page',
  description: 'Portfolio of Olivier Page — Full-stack Developer',
  appearance: true,
  lastUpdated: false,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Olivier Page',
      description: 'Portfolio of Olivier Page — Full-stack Developer',
      themeConfig: {
        nav,
        footer: {
          message: 'Designed and Developed by Olivier Page',
          copyright: 'Copyright © 2026 OP',
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: 'Olivier Page',
      description: 'Portfolio d\u2019Olivier Page — Développeur Full-stack',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'À propos', link: '/about/fr/' },
          { text: 'Expérience', link: '/experience/fr/' },
          { text: 'Projets', link: '/projects/fr/' },
          { text: 'CV', link: '/resume/fr/' },
          { text: 'Blog', link: '/blog/fr/' },
        ],
        footer: {
          message: 'Conçu et développé par Olivier Page',
          copyright: 'Copyright © 2026 OP',
        },
      },
    },
    lb: {
      label: 'Lëtzebuergesch',
      lang: 'lb',
      title: 'Olivier Page',
      description: 'Portfolio vum Olivier Page — Full-stack Entwéckler',
      themeConfig: {
        nav: [
          { text: 'Doheem', link: '/lb/' },
          { text: 'Iwwer mech', link: '/about/lb/' },
          { text: 'Erfarung', link: '/experience/lb/' },
          { text: 'Projeten', link: '/projects/lb/' },
          { text: 'Liewenslaf', link: '/resume/lb/' },
          { text: 'Blog', link: '/blog/lb/' },
        ],
        footer: {
          message: 'Designt an entwéckelt vum Olivier Page',
          copyright: 'Copyright © 2026 OP',
        },
      },
    },
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      resolvePlaceholders(md)
    },
  },
  mermaid: {
    theme: 'default',
    securityLevel: 'loose',
    startOnLoad: false,
    fontFamily: 'inherit',
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['fastdom', 'fastdom/extensions/fastdom-promised.js'],
    },
    build: {
      // mermaid is lazy-loaded only on pages that contain diagrams
      chunkSizeWarningLimit: 700,
    },
  },
  transformHead() {
    const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/')
    return [
      ['link', { rel: 'icon', href: `${base}images/favicon.ico` }],
      [
        'meta',
        {
          'http-equiv': 'Content-Security-Policy',
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",
        },
      ],
      ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
    ]
  },
  transformPageData(pageData) {
    const rel = pageData.relativePath || ''
    const lang = detectLang(rel)

    const blogMatch = /^blog\/(?:en|fr|lb)\/([\w-]+)\.md$/.exec(rel)
    if (blogMatch) {
      const post = posts.find((p) => p.slug === blogMatch[1])
      if (post) {
        pageData.title = post.title[lang] ?? post.slug
        pageData.description = post.description[lang] ?? ''
      }
      return
    }

    const section = /^(about|experience|projects|resume)\//.exec(rel)?.[1]
    if (section && sectionTitles[section as keyof typeof sectionTitles]) {
      pageData.title = sectionTitles[section as keyof typeof sectionTitles](dicts[lang])
    }
  },
  }),
)

// vitepress-plugin-mermaid targets mermaid 10 and force-pre-bundles `debug`,
// which mermaid 11 no longer depends on — drop it to avoid resolution warnings.
config.vite!.optimizeDeps!.include = (config.vite!.optimizeDeps!.include ?? []).filter(
  (dep) => dep !== 'debug',
)

export default config
