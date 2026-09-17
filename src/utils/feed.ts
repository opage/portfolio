import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { posts } from '../data'
import { getDict, type Locale } from './i18n'
import { renderMarkdown, resolveBlogTemplate } from './markdown'
import { siteData } from '../data'
import { siteName } from './site'

function stripMarkdownInline(text: string): string {
  return text.replace(/\*\*/g, '')
}

/** Build the RSS feed for one locale, with full post content included. */
export async function buildFeed(context: APIContext, lang: Locale): Promise<Response> {
  const dict = getDict(lang)
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base === '/' ? '' : base.replace(/\/$/, '')

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  const items = []
  for (const post of sorted) {
    const template = readFileSync(
      join(process.cwd(), 'src', 'content', 'blog', `${post.slug}.md`),
      'utf-8',
    )
    items.push({
      title: post.title[lang] ?? post.slug,
      description: post.description[lang] ?? '',
      pubDate: new Date(post.date),
      link: `${prefix}/blog/${lang}/${post.slug}/`,
      content: await renderMarkdown(resolveBlogTemplate(post.slug, template, lang)),
      categories: post.tags,
    })
  }

  return rss({
    title: `${stripMarkdownInline(dict.blog.heading)} | ${siteName}`,
    description: dict.blog.subtitle || siteData.descriptions[lang],
    site: context.site ?? siteName,
    items,
    customData: `<language>${lang}</language>`,
  })
}
