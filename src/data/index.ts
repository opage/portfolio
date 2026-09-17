/// <reference types="vite/client" />
import { parse } from 'yaml'
import type {
  BodyTranslations,
  ExperienceData,
  HomeData,
  LangText,
  PostMeta,
  ProjectsData,
  SiteData,
  TechItem,
} from './types'

// All locale/content data lives in flat per-domain YAML files, parsed once,
// eagerly, at build time. Consumers import these names (never file paths),
// so files can move without touching pages or components.

const modules = import.meta.glob<string>('./*.yml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function load<T>(path: string): T {
  const raw = modules[path]
  if (raw === undefined) throw new Error(`Missing data file: src/data/${path}`)
  return parse(raw) as T
}

export const siteData = load<SiteData>('./site-data.yml')
export const pageTranslations = load<Record<string, LangText>>('./page-data.yml')
export const homeData = load<HomeData>('./home-data.yml')
export const experienceData = load<ExperienceData>('./experience-data.yml')
export const projectsData = load<ProjectsData>('./projects-data.yml')
export const posts = load<PostMeta[]>('./blog-posts.yml')
export const bodyTranslations = load<BodyTranslations>('./blog-bodies.yml')

interface TechData {
  techStack: TechItem[]
  toolStack: TechItem[]
}

const tech = load<TechData>('./tech-data.yml')
export const techStack = tech.techStack
export const toolStack = tech.toolStack
