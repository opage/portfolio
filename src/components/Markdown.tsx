import { createEffect } from 'solid-js'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common'
import powershell from 'highlight.js/lib/languages/powershell'
import 'highlight.js/styles/atom-one-dark.css'
import { useTheme } from '../theme'
import type { Theme } from '../theme'

hljs.registerLanguage('powershell', powershell)

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(code, { language: lang, ignoreIllegals: true }).value}</code></pre>`
      } catch {
        // fall through to the default escaping below
      }
    }
    return ''
  },
})

const defaultFence = md.renderer.rules.fence!

md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const lang = token.info.trim().split(/\s+/g)[0]
  if (lang === 'mermaid') {
    return `<div class="mermaid">${md.utils.escapeHtml(token.content)}</div>`
  }
  return defaultFence(tokens, idx, options, env, self)
}

async function renderMermaid(container: HTMLElement, theme: Theme) {
  const nodes = container.querySelectorAll<HTMLElement>('.mermaid')
  if (nodes.length === 0) return
  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'PT Mono, ui-monospace, monospace',
    })
    await mermaid.run({ nodes })
  } catch {
    // keep the raw source as a fallback
  }
}

export default function Markdown(props: { content: string }) {
  const { theme } = useTheme()
  let container: HTMLDivElement | undefined

  createEffect(() => {
    if (!container) return
    container.innerHTML = md.render(props.content)
    renderMermaid(container, theme())
  })

  return <div ref={container} class="markdown-body" />
}
