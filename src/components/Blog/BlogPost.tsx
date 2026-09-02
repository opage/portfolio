import { For, Show, createMemo } from 'solid-js'
import { A, useParams } from '@solidjs/router'
import { AiOutlineArrowLeft } from 'solid-icons/ai'
import Particles from '../Particles'
import Markdown from '../Markdown'
import { getPost, formatDate } from '../../data/blog'
import { useI18n } from '../../i18n'

export default function BlogPost() {
  const params = useParams()
  const { dict, locale } = useI18n()
  const post = createMemo(() => getPost(params.slug ?? ''))

  return (
    <div class="relative z-0 pt-28 pb-8 md:pt-36">
      <Particles />
      <div class="relative z-10 mx-auto max-w-3xl px-4">
        <A href="/blog" class="btn-ghost">
          <AiOutlineArrowLeft /> {dict().blog.back}
        </A>

        <Show when={post()} fallback={<p class="mt-8 text-white">{dict().blog.notFound}</p>}>
          {(p) => (
            <article class="mt-6">
              <header>
                <h1 class="text-balance text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                  {p().title}
                </h1>
                <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
                  <time>{formatDate(p().date, locale())}</time>
                  <div class="flex flex-wrap gap-2">
                    <For each={p().tags}>
                      {(tag) => (
                        <span class="rounded-full border border-purple-400/40 px-2.5 py-0.5 text-xs text-white/80">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              </header>

              <div class="mt-8">
                <Markdown content={p().content} />
              </div>
            </article>
          )}
        </Show>
      </div>
    </div>
  )
}
