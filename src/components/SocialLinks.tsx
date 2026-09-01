import { For } from 'solid-js'
import type { SocialLink } from '../data/site'

interface SocialLinksProps {
  links: SocialLink[]
  white?: boolean
}

export default function SocialLinks(props: SocialLinksProps) {
  return (
    <ul class="m-0 inline-flex list-none items-center justify-center gap-3 p-0 sm:gap-4">
      <For each={props.links}>
        {(link) => (
          <li>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              class={`social-icon ${props.white ? 'social-icon--white' : ''}`}
            >
              <link.Icon />
            </a>
          </li>
        )}
      </For>
    </ul>
  )
}
