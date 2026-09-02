import { For } from 'solid-js'
import { ImPointRight } from 'solid-icons/im'
import RichText from '../RichText'
import { useI18n } from '../../i18n'

export default function AboutCard() {
  const { dict } = useI18n()

  return (
    <div class="text-ink">
      <blockquote class="m-0">
        <p class="text-left sm:text-justify">
          <For each={dict().about.lines}>
            {(line, i) => (
              <>
                <RichText text={line} />
                {i() < dict().about.lines.length - 1 && <br />}
              </>
            )}
          </For>
        </p>
        <p class="mt-4 text-left sm:text-justify">{dict().about.activitiesTitle}</p>

        <ul class="list-none p-0 text-left">
          <For each={dict().about.activities}>
            {(activity) => (
              <li class="pb-2">
                <ImPointRight /> {activity}
              </li>
            )}
          </For>
        </ul>

        <p class="text-ink/60">{dict().about.quote}</p>
        <footer class="text-accent">{dict().about.quoteAuthor}</footer>
      </blockquote>
    </div>
  )
}
