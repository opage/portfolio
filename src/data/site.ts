import type { IconTypes } from 'solid-icons'
import { AiFillGithub, AiOutlineMail } from 'solid-icons/ai'
import { FaBrandsLinkedinIn, FaBrandsMicrosoft } from 'solid-icons/fa'
import { CgWebsite } from 'solid-icons/cg'
import {
  SiAngular,
  SiDotnet,
  SiEclipseide,
  SiGithubactions,
  SiGitlab,
  SiQuarkus,
  SiSharp,
  SiSonarqubeserver,
  SiSpring,
} from 'solid-icons/si'
import type { ProjectId } from '../i18n/types'

import javaIcon from '../assets/techIcons/Java.svg'
import cIcon from '../assets/techIcons/C++.svg'
import pythonIcon from '../assets/techIcons/Python.svg'
import dockerIcon from '../assets/techIcons/Docker.svg'
import kubernetesIcon from '../assets/techIcons/Kubernates.svg'
import redisIcon from '../assets/techIcons/Redis.svg'
import gitIcon from '../assets/techIcons/Git.svg'
import vsCodeIcon from '../assets/techIcons/vscode.svg'
import postmanIcon from '../assets/techIcons/Postman.svg'
import intelliJIcon from '../assets/techIcons/intellij-idea.svg'
import visualStudioIcon from '../assets/techIcons/visual-studio.svg'
import azureDevopsIcon from '../assets/techIcons/azure-devops.svg'

import advanziaCover from '../assets/projects/advanzia.svg'
import evolutionEnergieCover from '../assets/projects/evolution-energie.svg'
import amundiCover from '../assets/projects/amundi.svg'
import lyxorCover from '../assets/projects/lyxor.svg'
import neuflizeObcCover from '../assets/projects/neuflize-obc.svg'
import betclicCover from '../assets/projects/betclic.svg'
import jcdecauxCover from '../assets/projects/jcdecaux.svg'
import opco2iCover from '../assets/projects/opco2i.svg'
import sanofiCover from '../assets/projects/sanofi.svg'

export const links = {
  github: 'https://github.com/opage',
  linkedin: 'https://linkedin.com/in/opage',
  website: 'https://olivierpage.com/',
  email: 'mailto:opage4@gmail.com',
  phone: 'tel:+33-6-84-05-28-90',
} as const

export interface SocialLink {
  label: string
  href: string
  Icon: IconTypes
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: links.github, Icon: AiFillGithub },
  { label: 'LinkedIn', href: links.linkedin, Icon: FaBrandsLinkedinIn },
  { label: 'Website', href: links.website, Icon: CgWebsite },
  { label: 'Email', href: links.email, Icon: AiOutlineMail },
]

export interface Tech {
  label: string
  icon: string | IconTypes
}

export const techStack: Tech[] = [
  { label: 'Java', icon: javaIcon },
  { label: 'C#', icon: SiSharp },
  { label: 'Python', icon: pythonIcon },
  { label: 'C++', icon: cIcon },
  { label: '.NET', icon: SiDotnet },
  { label: 'Angular', icon: SiAngular },
  { label: 'Spring', icon: SiSpring },
  { label: 'Quarkus', icon: SiQuarkus },
  { label: 'Docker', icon: dockerIcon },
  { label: 'Kubernetes', icon: kubernetesIcon },
  { label: 'Redis', icon: redisIcon },
]

export const toolStack: Tech[] = [
  { label: 'Git', icon: gitIcon },
  { label: 'GitLab', icon: SiGitlab },
  { label: 'CI/CD', icon: SiGithubactions },
  { label: 'SonarQube', icon: SiSonarqubeserver },
  { label: 'VS Code', icon: vsCodeIcon },
  { label: 'Visual Studio', icon: visualStudioIcon },
  { label: 'Eclipse', icon: SiEclipseide },
  { label: 'IntelliJ', icon: intelliJIcon },
  { label: 'Postman', icon: postmanIcon },
  { label: 'Azure DevOps', icon: azureDevopsIcon },
  { label: 'Azure', icon: FaBrandsMicrosoft },
]

export interface ProjectMeta {
  id: ProjectId
  img: string
  company: string
  link: string
  tech: string[]
}

export const projects: ProjectMeta[] = [
  {
    id: 'advanzia',
    img: advanziaCover,
    company: 'Advanzia Bank',
    link: 'https://www.advanzia.com',
    tech: ['C#', '.NET'],
  },
  {
    id: 'evolution-energie',
    img: evolutionEnergieCover,
    company: 'Evolution Energie',
    link: 'https://www.evolutionenergie.com',
    tech: ['C#', '.NET', 'Azure'],
  },
  {
    id: 'amundi',
    img: amundiCover,
    company: 'Amundi Asset Management',
    link: 'https://www.amundi.com',
    tech: ['Java', 'Angular'],
  },
  {
    id: 'lyxor',
    img: lyxorCover,
    company: 'Lyxor Asset Management',
    link: 'https://about.amundi.com/article/acquisition-lyxor',
    tech: ['C#', 'Redis', 'NUnit'],
  },
  {
    id: 'neuflize-obc',
    img: neuflizeObcCover,
    company: 'Neuflize OBC',
    link: 'https://www.neuflizeobc.fr',
    tech: ['Angular', 'ASP.NET Core'],
  },
  {
    id: 'betclic',
    img: betclicCover,
    company: 'Betclic Everest Group',
    link: 'https://www.betclic.fr',
    tech: ['C#', 'NUnit', 'Moq'],
  },
  {
    id: 'jcdecaux',
    img: jcdecauxCover,
    company: 'JC Decaux',
    link: 'https://www.jcdecaux.com',
    tech: ['C#', 'Web API', 'xUnit'],
  },
  {
    id: 'opco2i',
    img: opco2iCover,
    company: 'OPCO 2I (ex OPCA Defi)',
    link: 'https://www.opco2i.fr',
    tech: ['C#', 'DDD', 'BDD'],
  },
  {
    id: 'sanofi',
    img: sanofiCover,
    company: 'Sanofi Pasteur',
    link: 'https://www.sanofi.com',
    tech: ['C#', 'K2'],
  },
]
