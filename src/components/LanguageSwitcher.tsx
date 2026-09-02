import { For } from 'solid-js'
import { useI18n } from '../i18n'
import type { Locale } from '../i18n/types'
import Flag from './Flag'

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'lb', label: 'LB' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale, dict } = useI18n()

  return (
    <div class="flex items-center gap-1" role="group" aria-label={dict().nav.language}>
      <For each={locales}>
        {(item) => {
          const active = () => locale() === item.code
          return (
            <button
              type="button"
              aria-pressed={active()}
              onClick={() => setLocale(item.code)}
              title={item.label}
              class={`flex items-center gap-1.5 rounded px-2 py-1 text-sm font-semibold transition-colors ${
                active() ? 'bg-accent-soft text-ink' : 'text-ink/60 hover:text-ink'
              }`}
            >
              <Flag code={item.code} />
              {item.label}
            </button>
          )
        }}
      </For>
    </div>
  )
}
