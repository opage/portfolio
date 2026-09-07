import { computed } from 'vue'
import { useData } from 'vitepress'
import { en } from './i18n/en'
import { fr } from './i18n/fr'
import { lb } from './i18n/lb'
import type { Dictionary } from './i18n/types'

const dicts: Record<string, Dictionary> = { en, fr, lb }

export function getDict(lang: string): Dictionary {
  return dicts[lang] ?? en
}

export function useDict() {
  const { lang } = useData()
  return computed(() => getDict(lang.value))
}
