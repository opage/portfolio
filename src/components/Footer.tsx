import { socialLinks } from '../data/site'
import { useI18n } from '../i18n'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { dict } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer class="bg-[rgb(10,4,22)] px-4 py-3">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <h3 class="m-0 text-center text-xs text-white sm:text-sm">{dict().footer.designed}</h3>
        <h3 class="m-0 text-center text-xs text-white sm:text-sm">
          {dict().footer.copyright.replace('{year}', String(year))}
        </h3>
        <SocialLinks links={socialLinks} white />
      </div>
    </footer>
  )
}
