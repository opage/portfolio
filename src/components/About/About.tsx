import { For } from 'solid-js'
import Particles from '../Particles'
import AboutCard from './AboutCard'
import { Techstack, Toolstack } from '../Techstack'
import Github from './Github'
import aboutImg from '../../assets/about.png'
import SectionHeading from '../SectionHeading'
import RichText from '../RichText'
import { useI18n } from '../../i18n'

export default function About() {
  const { dict } = useI18n()

  return (
    <div class="relative z-0 pt-28 pb-8 text-ink md:pt-36">
      <Particles />
      <div class="relative z-10 mx-auto max-w-6xl px-4">
        <div class="flex flex-col items-center justify-center gap-6 py-4 md:flex-row md:gap-8">
          <div class="flex flex-1 flex-col items-center justify-center pt-6 pb-10 md:pt-8 md:pb-12">
            <h1 class="pb-4 text-2xl sm:text-3xl">
              <RichText text={dict().about.heading} />
            </h1>
            <AboutCard />
          </div>
          <div class="flex-1 pb-10 pt-6 text-center md:pb-12 md:pt-24">
            <img src={aboutImg} alt={dict().about.imageAlt} class="mx-auto max-w-full" />
          </div>
        </div>

        <SectionHeading>
          <RichText text={dict().about.skillset} />
        </SectionHeading>
        <Techstack />

        <SectionHeading>
          <RichText text={dict().about.softSkills} />
        </SectionHeading>
        <div class="mx-auto grid max-w-4xl grid-cols-1 gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-3">
          <For each={dict().about.softSkillsItems}>
            {(skill) => (
              <div class="flex flex-col gap-1 rounded-lg border border-accent/30 bg-surface p-4 text-left">
                <h3 class="text-base font-semibold text-accent">{skill.title}</h3>
                <p class="text-sm leading-relaxed text-ink/80">{skill.description}</p>
              </div>
            )}
          </For>
        </div>

        <SectionHeading>
          <RichText text={dict().about.tools} />
        </SectionHeading>
        <Toolstack />

        <Github />
      </div>
    </div>
  )
}
