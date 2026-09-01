import { For } from 'solid-js'

export default function RichText(props: { text: string }) {
  const isAccent = (segment: string) => segment.startsWith('**') && segment.endsWith('**')

  return (
    <For each={props.text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)}>
      {(segment) =>
        isAccent(segment) ? (
          <span class="purple">{segment.slice(2, -2)}</span>
        ) : (
          segment
        )
      }
    </For>
  )
}
