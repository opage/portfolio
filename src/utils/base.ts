// Resolves a root-relative path against the configured `base`
// (needed for GitHub Pages project sites served under a sub-path).
// Astro exposes the configured `base` (incl. trailing slash) via import.meta.env.BASE_URL.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`.replace(/\/+/g, '/')
}
