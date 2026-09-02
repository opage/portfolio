import { For } from 'solid-js'
import myImg from '../../assets/avatar.svg'
import RichText from '../../components/RichText'
import { useI18n } from '../../i18n'

export default function Home2() {
  const { dict } = useI18n()

  return (
    <div class="relative py-10 md:py-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:gap-10">
        <div class="flex-1 text-center text-ink">
          <h1 class="text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
            <RichText text={dict().intro.heading} />
          </h1>
          <div class="mt-6 text-left text-base leading-relaxed md:mt-12 md:text-lg">
            <For each={dict().intro.body}>
              {(paragraph, i) => (
                <p class={i() > 0 ? 'mt-4' : ''}>
                  <RichText text={paragraph} />
                </p>
              )}
            </For>
          </div>
        </div>
        <div class="flex-1 text-center">
          <img
            src={myImg}
            class="mx-auto max-w-[220px] transition-transform duration-300 sm:max-w-xs md:max-w-md [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-8deg)]"
            alt={dict().intro.avatarAlt}
          />
        </div>
      </div>
    </div>
  )
}
