import { links } from '../../data/site'
import { useI18n } from '../../i18n'
import RichText from '../RichText'

export default function Github() {
  const { dict } = useI18n()

  return (
    <div class="flex flex-col items-center justify-center pb-3 text-ink">
      <h1 class="pb-5 text-3xl font-medium">
        <RichText text={dict().github.heading} />
      </h1>
      <a href={links.github} target="_blank" rel="noopener noreferrer" class="btn-primary">
        {dict().github.cta}
      </a>
    </div>
  )
}
