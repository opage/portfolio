export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
}

function trimQuotes(value: string): string {
  if (value.length >= 2) {
    const first = value[0]
    const last = value[value.length - 1]
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      return value.slice(1, -1)
    }
  }
  return value
}

function parseScalar(value: string): unknown {
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => trimQuotes(item.trim()))
      .filter(Boolean)
  }
  return trimQuotes(value)
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(raw)
  if (!match) return { data: {}, content: raw }

  const data: Record<string, unknown> = {}
  const lines = match[1].split(/\r?\n/)

  let i = 0
  while (i < lines.length) {
    const kv = /^([A-Za-z0-9_-]+):[ \t]*(.*)$/.exec(lines[i])
    if (kv) {
      const key = kv[1]
      const rest = kv[2].trim()

      if (rest === '' || rest === '|' || rest === '>') {
        const block: string[] = []
        let j = i + 1
        while (j < lines.length) {
          const item = /^[ \t]*-[ \t]+(.*)$/.exec(lines[j])
          if (item) {
            block.push(trimQuotes(item[1].trim()))
          } else if (lines[j].trim() === '') {
            // skip blank lines
          } else if (rest !== '' && /^[ \t]+/.test(lines[j])) {
            block.push(lines[j].trim())
          } else {
            break
          }
          j++
        }
        if (rest === '|' || rest === '>') {
          data[key] = block.join('\n').trim()
        } else if (block.length > 0) {
          data[key] = block
        }
        i = j
        continue
      }

      data[key] = parseScalar(rest)
    }
    i++
  }

  return { data, content: raw.slice(match[0].length) }
}

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function toTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((v) => String(v))
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean)
  }
  return []
}

export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? path
    return {
      slug,
      title: typeof data.title === 'string' ? data.title : slug,
      date: typeof data.date === 'string' ? data.date : '',
      description: typeof data.description === 'string' ? data.description : '',
      tags: toTags(data.tags),
      content: content.trim(),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(date: string, locale: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString(locale === 'lb' ? 'lb-LU' : locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function readingTime(markdown: string): number {
  const words = markdown
    .replace(/```[\s\S]*?```/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
