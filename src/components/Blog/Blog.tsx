import { For } from 'solid-js'
import { A } from '@solidjs/router'
import Particles from '../Particles'
import RichText from '../RichText'
import { posts, formatDate, readingTime } from '../../data/blog'
import { useI18n } from '../../i18n'

export default function Blog() {
  const { dict, locale } = useI18n()

  return (
    <div class="relative z-0 pt-28 pb-8 md:pt-36">
      <Particles />
      <div class="relative z-10 mx-auto max-w-4xl px-4">
        <h1 class="pt-2 text-balance text-center text-2xl font-medium text-white sm:text-3xl md:text-4xl">
          <RichText text={dict().blog.heading} />
        </h1>
        <p class="mt-2 text-center text-white">{dict().blog.subtitle}</p>

        <div class="mt-8 space-y-5">
          <For each={posts}>
            {(post) => (
              <A
                href={`/blog/${post.slug}`}
                class="card-hover block rounded-lg border border-purple-500/30 bg-white/5 p-5 text-white opacity-90 shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]"
              >
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/60">
                  <time>{formatDate(post.date, locale())}</time>
                  <span>
                    {readingTime(post.content)} {dict().blog.minutes}
                  </span>
                </div>
                <h2 class="mt-2 text-xl font-semibold leading-snug sm:text-2xl">{post.title}</h2>
                <p class="mt-2 text-sm leading-relaxed text-white/80">{post.description}</p>

                <div class="mt-3 flex flex-wrap gap-2">
                  <For each={post.tags}>
                    {(tag) => (
                      <span class="rounded-full border border-purple-400/40 px-2.5 py-0.5 text-xs text-white/80">
                        {tag}
                      </span>
                    )}
                  </For>
                </div>

                <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#c770f0]">
                  {dict().blog.readMore} →
                </span>
              </A>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
