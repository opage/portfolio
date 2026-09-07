<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getDict } from '../dict'
import UiPill from './ui/UiPill.vue'

const { page } = useData()

const blogLang = computed(() => {
  const match = /^blog\/(en|fr|lb)\//.exec(page.value.relativePath || '')
  return match ? match[1] : 'en'
})

const dict = computed(() => getDict(blogLang.value))

interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime: number
  url: string
}

const modules = import.meta.glob('../../../content/blog/{en,fr,lb}/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(md: string): Record<string, unknown> {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(md)
  const data: Record<string, unknown> = {}
  if (!match) return data
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+):[ \t]*(.*)$/.exec(line)
    if (!kv) continue
    const value = kv[2].trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      data[kv[1]] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    } else {
      data[kv[1]] = value.replace(/^["']|["']$/g, '')
    }
  }
  return data
}

function readingTime(md: string): number {
  const words = md
    .replace(/```[\s\S]*?```/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function formatDate(date: string): string {
  if (!date) return ''
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString(blogLang.value === 'lb' ? 'lb-LU' : blogLang.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const posts = computed<Post[]>(() => {
  const locale = blogLang.value
  const dir = `blog/${locale}`
  const prefix = `/blog/${locale}/`
  const result: Post[] = []

  for (const [path, md] of Object.entries(modules)) {
    const normalized = path.replace(/\\/g, '/')
    if (!normalized.includes(`/${dir}/`)) continue
    const slug = normalized.split('/').pop()!.replace(/\.md$/, '')
    if (slug === 'index') continue
    const fm = parseFrontmatter(md)
    result.push({
      slug,
      title: String(fm.title ?? slug),
      date: String(fm.date ?? ''),
      description: String(fm.description ?? ''),
      tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      readingTime: readingTime(md),
      url: `${prefix}${slug}`,
    })
  }

  return result.sort((a, b) => b.date.localeCompare(a.date))
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <a
      v-for="post in posts"
      :key="post.slug"
      :href="post.url"
      class="group post-item block rounded-xl border border-brand-500/15 bg-white p-5 shadow-sm dark:border-brand-400/20 dark:bg-brand-950/50"
    >
      <div class="text-sm text-gray-500 dark:text-gray-400">
        <time>{{ formatDate(post.date) }}</time>
        <span> · {{ post.readingTime }} {{ dict.blog.minutes }}</span>
      </div>
      <h2 class="post-title text-xl font-semibold text-brand-600 group-hover:underline dark:text-brand-400">
        {{ post.title }}
      </h2>
      <p class="mt-1 text-gray-600 dark:text-gray-300">{{ post.description }}</p>
      <p v-if="post.tags.length" class="mt-2 flex flex-wrap gap-1.5">
        <UiPill v-for="tag in post.tags" :key="tag" size="sm">{{ tag }}</UiPill>
      </p>
      <span class="mt-3 inline-block text-sm font-semibold text-brand-600 dark:text-brand-400">
        {{ dict.blog.readMore }} →
      </span>
    </a>
  </div>
</template>
