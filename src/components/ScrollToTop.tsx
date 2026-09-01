import { useLocation } from '@solidjs/router'
import { createEffect } from 'solid-js'

export default function ScrollToTop() {
  const location = useLocation()
  createEffect(() => {
    location.pathname
    window.scrollTo(0, 0)
  })
  return null
}
