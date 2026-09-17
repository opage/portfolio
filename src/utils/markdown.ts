import {
  createMarkdownProcessor,
  type MarkdownRenderer,
} from '@astrojs/markdown-remark'
import rehypeMermaid from 'rehype-mermaid'
import remarkGfm from 'remark-gfm'
import { bodyTranslations } from '../data'
import type { Locale } from './i18n'

// Blog markdown is rendered with Astro's Markdown plugin
// (`@astrojs/markdown-remark`, the same engine behind Astro's
// `markdown` config): remark-gfm for tables/task lists, Shiki for
// syntax highlighting (mermaid excluded), and rehype-mermaid with the
// `pre-mermaid` strategy so diagrams stay client-rendered and can
// follow the light/dark theme (see MermaidLoader.astro).
// No headless browser is needed at build time.
let processorPromise: Promise<MarkdownRenderer> | undefined

function getProcessor(): Promise<MarkdownRenderer> {
  processorPromise ??= createMarkdownProcessor({
    gfm: false,
    smartypants: false,
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
    shikiConfig: { theme: 'github-dark' },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeMermaid, { strategy: 'pre-mermaid' }]],
  })
  return processorPromise
}

type TranslationMap = Record<string, Record<string, string>>

/** Resolve `[[key]]` placeholders from a translation map. */
export function resolvePlaceholders(
  template: string,
  map: TranslationMap,
  lang: Locale,
): string {
  return template.replace(/\[\[([\w-]+)\]\]/g, (_, key: string) => map[key]?.[lang] ?? '')
}

export function resolveBlogTemplate(slug: string, template: string, lang: Locale): string {
  const map = (bodyTranslations as Record<string, TranslationMap>)[slug] ?? {}
  return resolvePlaceholders(template, map, lang)
}

/** Render a full markdown document to HTML (blog posts). */
export async function renderMarkdown(src: string): Promise<string> {
  const processor = await getProcessor()
  const { code } = await processor.render(src)
  return code
}

/** Render an inline snippet (headings, paragraphs stored in translation maps). */
export async function renderInline(src: string): Promise<string> {
  const html = await renderMarkdown(src)
  return html
    .replace(/^<p>/, '')
    .replace(/<\/p>\s*$/, '')
    .trim()
}

export function readingTime(markdown: string): number {
  const words = markdown
    .replace(/```[\s\S]*?```/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
