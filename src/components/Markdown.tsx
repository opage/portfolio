import { createEffect } from 'solid-js'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'

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

let mermaidInitialized = false

async function renderMermaid(container: HTMLElement) {
  const nodes = container.querySelectorAll<HTMLElement>('.mermaid')
  if (nodes.length === 0) return
  try {
    const mermaid = (await import('mermaid')).default
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'PT Mono, ui-monospace, monospace',
      })
      mermaidInitialized = true
    }
    await mermaid.run({ nodes })
  } catch {
    // keep the raw source as a fallback
  }
}

export default function Markdown(props: { content: string }) {
  let container: HTMLDivElement | undefined

  createEffect(() => {
    if (!container) return
    container.innerHTML = md.render(props.content)
    renderMermaid(container)
  })

  return <div ref={container} class="markdown-body" />
}
