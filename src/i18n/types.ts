export type Locale = 'en' | 'fr' | 'lb'

export type ProjectId =
  | 'advanzia'
  | 'evolution-energie'
  | 'amundi'
  | 'lyxor'
  | 'neuflize-obc'
  | 'betclic'
  | 'jcdecaux'
  | 'opco2i'
  | 'sanofi'

export interface ProjectContent {
  title: string
  description: string
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  duration: string
  summary: string
  highlights: string[]
}

export interface SoftSkill {
  title: string
  description: string
}

export interface Dictionary {
  meta: {
    title: string
  }
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    resume: string
    toggle: string
    language: string
  }
  home: {
    greeting: string
    im: string
    name: string
    roles: string[]
    findMe: string
    connect: string
    wave: string
    imageAlt: string
  }
  intro: {
    heading: string
    body: string[]
    avatarAlt: string
  }
  about: {
    heading: string
    lines: string[]
    activitiesTitle: string
    activities: string[]
    quote: string
    quoteAuthor: string
    skillset: string
    softSkills: string
    softSkillsItems: SoftSkill[]
    tools: string
    imageAlt: string
  }
  github: {
    heading: string
    cta: string
  }
  experience: {
    heading: string
    subtitle: string
    items: ExperienceItem[]
  }
  projects: {
    heading: string
    subtitle: string
    learnMore: string
    items: Record<ProjectId, ProjectContent>
  }
  resume: {
    download: string
  }
  footer: {
    designed: string
    copyright: string
  }
  loading: string
}
