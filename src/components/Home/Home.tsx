import homeLogo from '../../assets/home-main.svg'
import Particles from '../../components/Particles'
import Typewriter from '../../components/Typewriter'
import Home2 from './Home2'
import SocialLinks from '../../components/SocialLinks'
import RichText from '../../components/RichText'
import { socialLinks } from '../../data/site'
import { useI18n } from '../../i18n'

export default function Home() {
  const { dict } = useI18n()

  return (
    <section>
      <div class="relative z-0 min-h-screen pt-20 pb-8">
        <Particles />
        <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-14 md:flex-row md:py-24">
          <div class="flex-1 text-center md:text-left">
            <h1 class="pb-3 text-balance text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              {dict().home.greeting}{' '}
              <span class="wave" role="img" aria-label={dict().home.wave}>
                👋🏻
              </span>
            </h1>
            <h1 class="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              {dict().home.im} <strong class="text-accent">{dict().home.name}</strong>
            </h1>
            <div class="py-6 text-center md:py-8 md:text-left">
              <span class="inline-block text-xl font-semibold text-accent sm:text-2xl md:text-4xl">
                <Typewriter strings={() => dict().home.roles} deleteSpeed={50} />
              </span>
            </div>
          </div>
          <div class="flex-1 pb-5 text-center">
            <img
              src={homeLogo}
              alt={dict().home.imageAlt}
              class="mx-auto max-h-[260px] max-w-full sm:max-h-[360px] md:max-h-[450px]"
            />
          </div>
        </div>
      </div>

      <Home2 />

      <div class="mx-auto max-w-6xl px-4 py-12 text-center md:py-14">
        <h1 class="text-2xl text-ink md:text-3xl">{dict().home.findMe}</h1>
        <p class="text-ink">
          <RichText text={dict().home.connect} />
        </p>
        <div class="mt-6 flex justify-center">
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </section>
  )
}
