import type { Locale } from './i18n'

// Site metadata per locale (nav labels, footer, descriptions).
export const siteName = 'Olivier Page'

export const siteDescription: Record<Locale, string> = {
  en: 'Portfolio of Olivier Page — Full-stack Developer',
  fr: 'Portfolio d’Olivier Page — Développeur Full-stack',
  lb: 'Portfolio vum Olivier Page — Full-stack Entwéckler',
}

export interface NavItem {
  text: string
  link: string
}

export const nav: Record<Locale, NavItem[]> = {
  en: [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about/en/' },
    { text: 'Experience', link: '/experience/en/' },
    { text: 'Projects', link: '/projects/en/' },
    { text: 'Resume', link: '/resume/en/' },
    { text: 'Blog', link: '/blog/en/' },
  ],
  fr: [
    { text: 'Accueil', link: '/fr/' },
    { text: 'À propos', link: '/about/fr/' },
    { text: 'Expérience', link: '/experience/fr/' },
    { text: 'Projets', link: '/projects/fr/' },
    { text: 'CV', link: '/resume/fr/' },
    { text: 'Blog', link: '/blog/fr/' },
  ],
  lb: [
    { text: 'Doheem', link: '/lb/' },
    { text: 'Iwwer mech', link: '/about/lb/' },
    { text: 'Erfarung', link: '/experience/lb/' },
    { text: 'Projeten', link: '/projects/lb/' },
    { text: 'Liewenslaf', link: '/resume/lb/' },
    { text: 'Blog', link: '/blog/lb/' },
  ],
}

export const footer: Record<Locale, { message: string; copyright: string }> = {
  en: {
    message: 'Designed and Developed by Olivier Page',
    copyright: 'Copyright © 2026 OP',
  },
  fr: {
    message: 'Conçu et développé par Olivier Page',
    copyright: 'Copyright © 2026 OP',
  },
  lb: {
    message: 'Designt an entwéckelt vum Olivier Page',
    copyright: 'Copyright © 2026 OP',
  },
}

