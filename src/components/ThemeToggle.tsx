import { Show } from 'solid-js'
import { FiSun, FiMoon } from 'solid-icons/fi'
import { useTheme } from '../theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      aria-label={theme() === 'dark' ? 'Light theme' : 'Dark theme'}
      title={theme() === 'dark' ? 'Light theme' : 'Dark theme'}
      onClick={toggle}
      class="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 text-ink transition-colors hover:bg-accent-soft"
    >
      <Show when={theme() === 'dark'} fallback={<FiMoon />}>
        <FiSun />
      </Show>
    </button>
  )
}
