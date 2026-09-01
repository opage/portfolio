import { For } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import IconTech from './IconTech'
import { techStack, toolStack } from '../data/site'
import type { Tech } from '../data/site'

function TechIcon(props: { tech: Tech }) {
  const icon = props.tech.icon
  return typeof icon === 'string' ? (
    <img src={icon} alt={props.tech.label} />
  ) : (
    <Dynamic component={icon} size="24px" />
  )
}

function TechList(props: { items: Tech[] }) {
  return (
    <div class="flex flex-wrap justify-center pb-12">
      <For each={props.items}>
        {(tech) => (
          <IconTech label={tech.label}>
            <TechIcon tech={tech} />
          </IconTech>
        )}
      </For>
    </div>
  )
}

export function Techstack() {
  return <TechList items={techStack} />
}

export function Toolstack() {
  return <TechList items={toolStack} />
}
