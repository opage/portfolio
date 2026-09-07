import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import BlogList from './components/BlogList.vue'
import SocialLinks from './components/SocialLinks.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import IntroSection from './components/IntroSection.vue'
import ResumePdf from './components/ResumePdf.vue'
import UiPill from './components/ui/UiPill.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('BlogList', BlogList)
    app.component('SocialLinks', SocialLinks)
    app.component('ProjectGrid', ProjectGrid)
    app.component('ExperienceTimeline', ExperienceTimeline)
    app.component('IntroSection', IntroSection)
    app.component('ResumePdf', ResumePdf)
    app.component('UiPill', UiPill)
  },
}
