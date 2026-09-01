import { createContext, useContext, createSignal, createMemo, createEffect } from 'solid-js'
import type { JSX, Accessor } from 'solid-js'
import { en } from './en'
import { fr } from './fr'
import { lb } from './lb'
import type { Dictionary, Locale } from './types'

const dictionaries: Record<Locale, Dictionary> = { en, fr, lb }

const STORAGE_KEY = 'portfolio-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'fr' || value === 'lb'
}

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // ignore storage errors (e.g. private browsing)
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase()
  return browser === 'fr' ? 'fr' : browser === 'lb' ? 'lb' : 'en'
}

interface I18nContextValue {
  locale: Accessor<Locale>
  dict: Accessor<Dictionary>
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue>()

export function I18nProvider(props: { children: JSX.Element }) {
  const [locale, setLocaleSignal] = createSignal<Locale>(detectLocale())
  const dict = createMemo(() => dictionaries[locale()])

  createEffect(() => {
    document.documentElement.lang = locale()
    document.title = dict().meta.title
  })

  const setLocale = (next: Locale) => {
    setLocaleSignal(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage errors
    }
  }

  return (
    <I18nContext.Provider value={{ locale, dict, setLocale }}>
      {props.children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within an I18nProvider')
  return context
}
