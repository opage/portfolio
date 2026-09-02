import type { JSX } from 'solid-js'

interface IconTechProps {
  label: string
  children?: JSX.Element
}

export default function IconTech(props: IconTechProps) {
  return (
    <div class="tech-icon">
      {props.children}
      <span class="text-ink">{props.label}</span>
    </div>
  )
}
