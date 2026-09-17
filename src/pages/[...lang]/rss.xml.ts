import type { APIContext } from 'astro'
import { buildFeed } from '../../utils/feed'
import { normalizeLang } from '../../utils/i18n'

export function getStaticPaths() {
  // `lang: undefined` renders `/rss.xml`; the rest renders `/fr/rss.xml`
  // and `/lb/rss.xml`.
  return [{ params: { lang: undefined } }, { params: { lang: 'fr' } }, { params: { lang: 'lb' } }]
}

export async function GET(context: APIContext): Promise<Response> {
  const { lang: langParam } = context.params
  return buildFeed(context, normalizeLang(langParam))
}
