import { createSignal, onMount, onCleanup, lazy, Suspense } from 'solid-js'
import { HashRouter, Route, Navigate } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'
import { I18nProvider, useI18n } from './i18n'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

const Home = lazy(() => import('./components/Home/Home'))
const About = lazy(() => import('./components/About/About'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Resume = lazy(() => import('./components/Resume/Resume'))
const Blog = lazy(() => import('./components/Blog/Blog'))
const BlogPost = lazy(() => import('./components/Blog/BlogPost'))

function RedirectHome() {
  return <Navigate href="/" />
}

function LoadingFallback() {
  const { dict } = useI18n()
  return (
    <div class="flex min-h-screen items-center justify-center text-white">
      {dict().loading}
    </div>
  )
}

function Layout(props: RouteSectionProps) {
  const [loading, setLoading] = createSignal(true)

  onMount(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    onCleanup(() => clearTimeout(timer))
  })

  return (
    <>
      <Preloader loading={loading()} />
      <div id={loading() ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>{props.children}</Suspense>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <HashRouter root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="*" component={RedirectHome} />
      </HashRouter>
    </I18nProvider>
  )
}
