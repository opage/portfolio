/// <reference types="vite/client" />

declare module 'highlight.js/lib/languages/powershell' {
  import type { LanguageFn } from 'highlight.js'
  const powershell: LanguageFn
  export default powershell
}
