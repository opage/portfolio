import { en } from '../../themes/purple/i18n/en'
import { fr } from '../../themes/purple/i18n/fr'
import { lb } from '../../themes/purple/i18n/lb'
import type { Dictionary } from '../../themes/purple/i18n/types'

export type Locale = 'en' | 'fr' | 'lb'

const dicts: Record<Locale, Dictionary> = { en, fr, lb }

export function getDict(lang: string): Dictionary {
  return dicts[lang as Locale] ?? en
}

export function normalizeLang(lang: string | undefined): Locale {
  return lang === 'fr' || lang === 'lb' ? lang : 'en'
}
