import { For, createMemo } from 'solid-js'
import ProjectCard from './ProjectCard'
import Particles from '../Particles'
import RichText from '../RichText'
import { projects } from '../../data/site'
import { useI18n } from '../../i18n'

export default function Projects() {
  const { dict } = useI18n()

  const items = createMemo(() =>
    projects.map((meta) => ({
      ...meta,
      title: dict().projects.items[meta.id].title,
      description: dict().projects.items[meta.id].description,
    })),
  )

  return (
    <div class="relative z-0 pt-28 pb-8 md:pt-36">
      <Particles />
      <div class="relative z-10 mx-auto max-w-6xl px-4">
        <h1 class="pt-2 text-balance text-center text-2xl font-medium text-white sm:text-3xl md:text-4xl">
          <RichText text={dict().projects.heading} />
        </h1>
        <p class="mt-2 text-center text-white">{dict().projects.subtitle}</p>

        <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <For each={items()}>{(project) => <ProjectCard {...project} />}</For>
        </div>
      </div>
    </div>
  )
}
