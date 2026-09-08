import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const template = readFileSync(join(process.cwd(), 'content', 'about', 'template.md'), 'utf-8')

export default {
  paths: [
    { params: { lang: 'en' }, content: template },
    { params: { lang: 'fr' }, content: template },
    { params: { lang: 'lb' }, content: template },
  ],
}
