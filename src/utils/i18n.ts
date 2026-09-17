import { siteData } from '../data'
import type { Dictionary } from '../data/types'

export type Locale = 'en' | 'fr' | 'lb'

export function getDict(lang: string): Dictionary {
  const locale = normalizeLang(lang)
  return {
    nav: siteData.nav[locale],
    resume: siteData.resume[locale],
    blog: siteData.blog[locale],
  }
}

export function normalizeLang(lang: string | undefined): Locale {
  return lang === 'fr' || lang === 'lb' ? lang : 'en'
}
