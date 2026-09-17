// Shared shapes for the YAML data files under src/data/.

export type LangText = Record<string, string>

export interface TechItem {
  label: string
  icon: string
}

export interface NavItem {
  text: string
  link: string
}

export interface Dictionary {
  nav: {
    about: string
    experience: string
    projects: string
    resume: string
  }
  resume: {
    pdf: string
    download: string
    open: string
  }
  blog: {
    heading: string
    subtitle: string
    readMore: string
    minutes: string
  }
}

export interface SiteData {
  descriptions: LangText
  nav: Record<string, NavItem[]>
  footer: Record<string, { message: string; copyright: string }>
  resume: Record<string, Dictionary['resume']>
  blog: Record<string, Dictionary['blog']>
}

export interface PostMeta {
  slug: string
  date: string
  tags: string[]
  title: LangText
  description: LangText
}

export type BodyTranslations = Record<string, Record<string, LangText>>

export interface HomeData {
  roles: Record<string, string[]>
  intro: {
    heading: LangText
    body: Record<string, string[]>
    avatarAlt: LangText
  }
}

export interface ExperienceItem {
  company: string
  location: string
  role: LangText
  period: LangText | string
  duration: LangText
  summary: LangText
  highlights: Record<string, string[]>
}

export interface ExperienceData {
  heading: LangText
  subtitle: LangText
  items: ExperienceItem[]
}

export interface ProjectItem {
  id: string
  company: string
  link: string
  tech: string[]
  cover: string
  title: LangText
  description: LangText
}

export interface ProjectsData {
  heading: LangText
  subtitle: LangText
  learnMore: LangText
  items: ProjectItem[]
}
