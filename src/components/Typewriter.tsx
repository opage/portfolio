import { createSignal, createEffect, onCleanup, type Accessor } from 'solid-js'

interface TypewriterProps {
  strings: Accessor<string[]>
  deleteSpeed?: number
  typeSpeed?: number
  holdTime?: number
}

export default function Typewriter(props: TypewriterProps) {
  const [text, setText] = createSignal('')
  const [index, setIndex] = createSignal(0)
  const [deleting, setDeleting] = createSignal(false)

  const typeSpeed = () => props.typeSpeed ?? 100
  const deleteSpeed = () => props.deleteSpeed ?? 50
  const holdTime = () => props.holdTime ?? 1500

  createEffect(() => {
    const list = props.strings()
    const word = list[index()]

    const step = () => {
      if (!deleting()) {
        text().length < word.length
          ? setText(word.slice(0, text().length + 1))
          : setDeleting(true)
      } else if (text().length > 0) {
        setText(word.slice(0, text().length - 1))
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % list.length)
      }
    }

    const finished = deleting() ? text().length === 0 : text().length === word.length
    const delay = finished ? holdTime() : deleting() ? deleteSpeed() : typeSpeed()

    const timer = setTimeout(step, delay)
    onCleanup(() => clearTimeout(timer))
  })

  return (
    <span>
      {text()}
      <span class="blink">|</span>
    </span>
  )
}
