import { For } from 'solid-js'
import { CgWebsite } from 'solid-icons/cg'
import { useI18n } from '../../i18n'
import type { ProjectMeta } from '../../data/site'
import type { ProjectContent } from '../../i18n/types'

type ProjectCardProps = ProjectMeta & ProjectContent

export default function ProjectCard(props: ProjectCardProps) {
  const { dict } = useI18n()

  return (
    <div class="card-hover flex h-full flex-col overflow-hidden rounded-lg border border-purple-500/30 bg-transparent text-white opacity-90 shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
      <img
        src={props.img}
        alt={props.title}
        class="aspect-[2/1] w-full object-cover"
      />
      <div class="flex flex-1 flex-col p-4 sm:p-5">
        <h3 class="text-lg font-semibold leading-snug sm:text-xl">{props.title}</h3>
        <p class="mt-1 text-sm font-medium text-[#c770f0]">{props.company}</p>
        <p class="mt-3 text-sm leading-relaxed text-white/90">{props.description}</p>

        <div class="mt-auto pt-4">
          <div class="flex flex-wrap gap-2">
            <For each={props.tech}>
              {(tech) => (
                <span class="rounded-full border border-purple-400/40 px-2.5 py-0.5 text-xs text-white/80">
                  {tech}
                </span>
              )}
            </For>
          </div>

          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-4 w-fit"
          >
            {dict().projects.learnMore} <CgWebsite />
          </a>
        </div>
      </div>
    </div>
  )
}
