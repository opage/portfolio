import type { JSX } from 'solid-js'

interface SectionHeadingProps {
  children: JSX.Element
  class?: string
}

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <h1
      class={`text-balance text-center text-[1.75rem] font-medium leading-tight text-white sm:text-3xl md:text-4xl ${
        props.class ?? ''
      }`}
    >
      {props.children}
    </h1>
  )
}
