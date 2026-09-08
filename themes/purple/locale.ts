import { computed } from 'vue'
import { useData } from 'vitepress'

export type Locale = 'en' | 'fr' | 'lb'
export type L<T = string> = Record<Locale, T>

export function useLocale() {
  const { lang } = useData()
  const locale = computed<Locale>(() =>
    lang.value === 'fr' || lang.value === 'lb' ? lang.value : 'en',
  )
  return { locale }
}
