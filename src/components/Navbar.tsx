import { createSignal, onMount, onCleanup, createMemo, For } from 'solid-js'
import { A } from '@solidjs/router'
import { CgFileDocument } from 'solid-icons/cg'
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'solid-icons/ai'
import { FaSolidBriefcase } from 'solid-icons/fa'
import type { IconTypes } from 'solid-icons'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

interface NavItem {
  label: string
  to: string
  Icon: IconTypes
}

export default function Navbar() {
  const [expanded, setExpanded] = createSignal(false)
  const [scrolled, setScrolled] = createSignal(false)
  const { dict } = useI18n()

  const navItems = createMemo<NavItem[]>(() => [
    { label: dict().nav.home, to: '/', Icon: AiOutlineHome },
    { label: dict().nav.about, to: '/about', Icon: AiOutlineUser },
    { label: dict().nav.experience, to: '/experience', Icon: FaSolidBriefcase },
    { label: dict().nav.projects, to: '/projects', Icon: AiOutlineFundProjectionScreen },
    { label: dict().nav.resume, to: '/resume', Icon: CgFileDocument },
  ])

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onCleanup(() => window.removeEventListener('scroll', onScroll))
  })

  const closeMenu = () => setExpanded(false)

  return (
    <nav
      class={`fixed top-0 z-50 w-full px-4 py-2 text-lg transition-all duration-300 sm:px-6 lg:px-8 lg:py-1 ${
        scrolled()
          ? 'bg-[#1b1a2ea9] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur-[15px]'
          : 'bg-transparent'
      }`}
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <A href="/" aria-label={dict().nav.home} onClick={closeMenu} class="flex items-center gap-2">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c770f0] text-sm font-bold text-white">
            OP
          </span>
          <span class="hidden font-semibold text-white sm:inline">Olivier Page</span>
        </A>

        <button
          type="button"
          aria-label={dict().nav.toggle}
          aria-controls="responsive-navbar-nav"
          aria-expanded={expanded()}
          class="relative flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 bg-transparent p-2 lg:hidden"
          onClick={() => setExpanded(!expanded())}
        >
          <span
            class={`block h-1 w-7 bg-[#be50f4] transition-all duration-300 ${
              expanded() ? 'absolute rotate-[135deg]' : ''
            }`}
          />
          <span class={`block h-1 w-7 bg-[#be50f4] ${expanded() ? 'opacity-0' : ''}`} />
          <span
            class={`block h-1 w-7 bg-[#be50f4] transition-all duration-300 ${
              expanded() ? 'absolute -rotate-[135deg]' : ''
            }`}
          />
        </button>

        <div
          id="responsive-navbar-nav"
          class={`${
            expanded() ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] flex-col items-center gap-1 overflow-y-auto bg-[#181a27] px-4 py-4 shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:gap-0 lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <For each={navItems()}>
            {(item) => (
              <A
                href={item.to}
                class="nav-link w-full text-center lg:w-auto"
                onClick={closeMenu}
              >
                <item.Icon class="mr-1 inline-block -translate-y-px" /> {item.label}
              </A>
            )}
          </For>

          <div class="mt-2 lg:mt-0 lg:ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
