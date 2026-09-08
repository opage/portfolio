import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { posts } from '../../../themes/purple/blog-data/posts'

const contentDir = join(process.cwd(), 'content', 'blog', 'templates')

export default {
  paths() {
    const result: { params: { lang: string; slug: string }; content: string }[] = []
    for (const post of posts) {
      const template = readFileSync(join(contentDir, `${post.slug}.md`), 'utf-8')
      for (const lang of ['en', 'fr', 'lb']) {
        result.push({ params: { lang, slug: post.slug }, content: template })
      }
    }
    return result
  },
}
