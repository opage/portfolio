import { For, Show, createSignal } from 'solid-js'
import { AiOutlineDown } from 'solid-icons/ai'
import Particles from '../Particles'
import RichText from '../RichText'
import { useI18n } from '../../i18n'

function initials(name: string) {
  const parts = name
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w))
    .map((w) => w.match(/[A-Za-z0-9]/)?.[0]?.toUpperCase() ?? '')
  return parts.slice(0, 2).join('') || '?'
}

export default function Experience() {
  const { dict } = useI18n()
  const [open, setOpen] = createSignal<number[]>([0, 1, 2, 3])

  const isOpen = (i: number) => open().includes(i)
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  return (
    <div class="relative z-0 pt-28 pb-8 md:pt-36">
      <Particles />
      <div class="relative z-10 mx-auto max-w-4xl px-4">
        <h1 class="pt-2 text-balance text-center text-2xl font-medium text-ink sm:text-3xl md:text-4xl">
          <RichText text={dict().experience.heading} />
        </h1>
        <p class="mt-2 text-center text-ink">{dict().experience.subtitle}</p>

        <div class="mt-10">
          <For each={dict().experience.items}>
            {(job, i) => (
              <div class="relative border-l-2 border-accent pb-2 pl-6 md:pl-8">
                <span class="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-accent bg-ink" />

                <div class="flex gap-3">
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-sm font-bold text-ink">
                    {initials(job.company)}
                  </span>

                  <div class="min-w-0 flex-1 pb-6">
                    <button
                      type="button"
                      aria-expanded={isOpen(i())}
                      class="group flex w-full items-start gap-3 text-left"
                      onClick={() => toggle(i())}
                    >
                      <span class="min-w-0 flex-1">
                        <span class="flex flex-col gap-0.5">
                          <span class="text-lg font-semibold leading-snug text-ink md:text-xl">
                            {job.role}
                          </span>
                          <span class="font-medium text-accent">{job.company}</span>
                          <span class="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-ink/60">
                            <span>{job.location}</span>
                            <span>{job.period}</span>
                            <span>{job.duration}</span>
                          </span>
                        </span>
                      </span>

                      <AiOutlineDown
                        class={`mt-1 shrink-0 text-ink/60 transition-transform duration-300 ${
                          isOpen(i()) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <Show when={isOpen(i())}>
                      <div class="mt-3">
                        <p class="text-sm italic text-ink/80 md:text-base">{job.summary}</p>
                        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink/90">
                          <For each={job.highlights}>{(highlight) => <li>{highlight}</li>}</For>
                        </ul>
                      </div>
                    </Show>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
