export interface ProjectMeta {
  id: string
  company: string
  link: string
  tech: string[]
  cover: string
}

export const projectMetas: ProjectMeta[] = [
  {
    id: 'advanzia',
    company: 'Advanzia Bank',
    link: 'https://www.advanzia.com',
    tech: ['C#', '.NET'],
    cover: '/projects/advanzia.svg',
  },
  {
    id: 'evolution-energie',
    company: 'Evolution Energie',
    link: 'https://www.evolutionenergie.com',
    tech: ['C#', '.NET', 'Azure'],
    cover: '/projects/evolution-energie.svg',
  },
  {
    id: 'amundi',
    company: 'Amundi Asset Management',
    link: 'https://www.amundi.com',
    tech: ['Java', 'Angular'],
    cover: '/projects/amundi.svg',
  },
  {
    id: 'lyxor',
    company: 'Lyxor Asset Management',
    link: 'https://about.amundi.com',
    tech: ['C#', 'Redis', 'NUnit'],
    cover: '/projects/lyxor.svg',
  },
  {
    id: 'neuflize-obc',
    company: 'Neuflize OBC',
    link: 'https://www.neuflizeobc.fr',
    tech: ['Angular', 'ASP.NET Core'],
    cover: '/projects/neuflize-obc.svg',
  },
  {
    id: 'betclic',
    company: 'Betclic Everest Group',
    link: 'https://www.betclic.fr',
    tech: ['C#', 'NUnit', 'Moq'],
    cover: '/projects/betclic.svg',
  },
  {
    id: 'jcdecaux',
    company: 'JC Decaux',
    link: 'https://www.jcdecaux.com',
    tech: ['C#', 'Web API', 'xUnit'],
    cover: '/projects/jcdecaux.svg',
  },
  {
    id: 'opco2i',
    company: 'OPCO 2I (ex OPCA Defi)',
    link: 'https://www.opco2i.fr',
    tech: ['C#', 'DDD', 'BDD'],
    cover: '/projects/opco2i.svg',
  },
  {
    id: 'sanofi',
    company: 'Sanofi Pasteur',
    link: 'https://www.sanofi.com',
    tech: ['C#', 'K2'],
    cover: '/projects/sanofi.svg',
  },
]
