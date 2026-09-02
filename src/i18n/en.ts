import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Olivier Page | Portfolio',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    resume: 'Resume',
    blog: 'Blog',
    toggle: 'Toggle navigation',
    language: 'Language',
  },
  home: {
    greeting: 'Hi There!',
    im: "I'M",
    name: 'OLIVIER PAGE',
    roles: [
      'Full-stack Developer',
      'Java / .NET',
      'Angular',
      'Azure',
    ],
    findMe: 'Find Me On',
    connect: 'Feel free to **connect** with me',
    wave: 'waving hand',
    imageAlt: 'home illustration',
  },
  intro: {
    heading: 'LET ME **INTRODUCE** MYSELF',
    body: [
      "I'm a software craftsman who follows **SOLID principles** and loves turning ideas into reliable, scalable products.",
      'I launch side projects to learn new languages and **clean architectures**.',
      "I'm constantly building my skills while staying current on tech trends.",
      "As a team player, I share knowledge and learn from others.",
    ],
    avatarAlt: 'avatar',
  },
  about: {
    heading: 'Know Who **I\'M**',
    lines: [
      'Hi everyone!', 
      "I'm **Olivier Page**, a **Full-stack Developer** based in **Thionville, France**.",
      'I specialize in **Java/.NET**, **Angular**, and **Azure**, with over a decade of experience building robust, scalable software for banking, energy, and asset management.',
      'I hold a **Master 2 in Computer Science** from **Université Grenoble Alpes**.',
    ],
    activitiesTitle: 'Core strengths:',
    activities: [
      'Software craftsmanship following SOLID principles',
      'Launching side projects to learn new languages and clean architectures',
      'Sharing knowledge and mentoring teammates',
    ],
    quote: '"Software craftsman following SOLID principles."',
    quoteAuthor: 'Olivier Page',
    skillset: 'Professional **Skillset**',
    softSkills: 'Soft **Skills**',
    softSkillsItems: [
      {
        title: 'Communication',
        description: 'Listening well, speaking clearly, and writing effectively.',
      },
      {
        title: 'Teamwork',
        description: 'Cooperating with peers and supporting team goals.',
      },
      {
        title: 'Problem-solving',
        description: 'Finding practical solutions when challenges arise.',
      },
      {
        title: 'Adaptability',
        description: 'Adjusting quickly to new tasks or unexpected changes.',
      },
      {
        title: 'Time management',
        description: 'Prioritizing duties and meeting deadlines.',
      },
    ],
    tools: '**Tools** I use',
    imageAlt: 'about',
  },
  github: {
    heading: 'Days I **Code**',
    cta: 'View my GitHub activity',
  },
  experience: {
    heading: 'Work **Experience**',
    subtitle: 'My professional journey across finance, energy, and tech.',
    items: [
      {
        company: 'Advanzia Bank',
        role: 'Senior Backend Developer (C#)',
        location: 'Munsbach, LU',
        period: 'Sept 2025 – June 2026',
        duration: '9 months',
        summary:
          'Digital fintech bank specializing in credit cards, payment solutions, and cards-as-a-service for customers and partners across Europe.',
        highlights: [
          'Integrated the Amiko SaaS solution to simplify fraud and dispute management.',
          'Integrated TSYS endpoints to enhance payment processing capabilities.',
          'Tested and debugged the codebase to fix bugs and issues.',
          'Participated in code reviews to improve code quality and best practices.',
        ],
      },
      {
        company: 'Evolution Energie',
        role: 'Full-stack Developer (C#)',
        location: 'Paris, FR',
        period: 'Feb 2025 – Aug 2025',
        duration: '8 months',
        summary:
          'Renewable energy company focusing on sustainable solutions and energy efficiency.',
        highlights: [
          'Implemented SSO authentication to replace WS-Federation.',
          'Implemented API Gateway and reverse proxy to route requests.',
          'Upgraded existing applications to .NET 8.0.',
          'Participated in code reviews to improve code quality and best practices.',
        ],
      },
      {
        company: 'Amundi Asset Management',
        role: 'Full-stack Developer (Java)',
        location: 'Paris, FR',
        period: 'Aug 2021 – Jan 2025',
        duration: '3 years 7 months',
        summary:
          'Global asset management company providing investment solutions and services to institutional and retail clients.',
        highlights: [
          'Application maintenance on the main ALTO Front Module fund management tool (PFA).',
          'Maintenance of plugins such as Cash Management, Money Market, and others.',
          'Implemented the AOP plugin (ALTO OTC Trade Management) to integrate Lyxor funds.',
          'Developed Maestro widgets in Angular for ALTO Investment Research (IR).',
          'Performed testing.',
        ],
      },
      {
        company: 'Lyxor Asset Management',
        role: 'Full-stack Developer (C#)',
        location: 'Paris, FR',
        period: 'Sept 2018 – Sept 2021',
        duration: '3 years 1 month',
        summary:
          'Global asset management company specializing in ETFs, index funds, and alternative investment solutions.',
        highlights: [
          "Developed management tools for synthetic/physical funds to meet stakeholders' needs.",
          'Built SBF tool from scratch to manage synthetic funds.',
          'Refactored and maintained Lyxor ETF tools (Lyxor AP, Sherlock, GI).',
          'Cached data in Redis to improve performance.',
          'Performed testing with NUnit.',
        ],
      },
      {
        company: 'Neuflize OBC',
        role: 'Full-stack Developer (C#)',
        location: 'Paris, FR',
        period: 'June 2018 – Aug 2018',
        duration: '4 months',
        summary:
          'Private bank providing wealth management and investment services to high-net-worth individuals and families.',
        highlights: [
          'Built a web platform for life insurance management compliant with the EU DDA directive.',
          'Developed Angular/ASP.NET Core Web API application.',
          'Implemented SSI packages to synchronize data between the new platform and the legacy system.',
        ],
      },
      {
        company: 'Betclic Everest Group',
        role: 'Backend Developer (C#)',
        location: 'Paris, FR',
        period: 'May 2017 – May 2018',
        duration: '1 year 2 months',
        summary:
          'Online gaming company specializing in sports betting, poker, and casino games.',
        highlights: [
          'Integrated new sports with Betradar and Betgenius providers.',
          'Refactored existing system for Betradar integration.',
          'Integrated new sports (Handball, Rugby Union, Rugby League, etc.) into services (Broker, Worker).',
          'Added new scoreboards to Betclic Sport front (Live Betting).',
          'Performed testing with NUnit and Moq.',
        ],
      },
      {
        company: 'JC Decaux',
        role: 'Backend Developer (C#)',
        location: 'Paris, FR',
        period: 'July 2016 – June 2017',
        duration: '1 year 1 month',
        summary:
          'Global leader in outdoor advertising and street furniture, providing innovative solutions for urban spaces.',
        highlights: [
          "Redesigned a mapping system for JCDecaux's Urban Furniture Sales Product service.",
          'Contributed to setting up the new application foundation.',
          'Implemented new features.',
          'Developed REST web services using Web API 2.',
          'Wrote tests using xUnit.net, FluentAssertions, NSubstitute, and Postman.',
        ],
      },
      {
        company: 'OPCO 2I (ex OPCA Defi)',
        role: 'Backend Developer (C#)',
        location: 'Paris, FR',
        period: 'Oct 2012 – June 2016',
        duration: '3 years 10 months',
        summary:
          'Organization managing training entitlements for individual training leave, serving companies in various sectors.',
        highlights: [
          'Built a web app to collect company contributions.',
          'Managed training entitlements for individual training leave.',
          'Implemented Scrum and introduced code-quality practices.',
          'DDD design with Given-When-Then scenarios and BDD tests.',
          'Prepared releases and mentored new developers.',
        ],
      },
      {
        company: 'Sanofi Pasteur',
        role: 'Backend Developer (C#)',
        location: 'Paris, FR',
        period: 'Sept 2012 – Oct 2012',
        duration: '2 months',
        summary:
          'Global biopharmaceutical company specializing in vaccines and immunization solutions.',
        highlights: [
          'Redesigned a workflow system.',
          'Set up and configured the K2 workflow engine.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Featured **Projects**',
    subtitle: 'A selection of things I have built across my career.',
    learnMore: 'Learn more',
    items: {
      advanzia: {
        title: 'Amiko & TSYS Integration',
        description:
          'Integrated the Amiko SaaS solution to simplify fraud and dispute management, and TSYS endpoints to enhance payment processing.',
      },
      'evolution-energie': {
        title: 'SSO & API Gateway',
        description:
          'Implemented SSO authentication to replace WS-Federation, plus an API Gateway and reverse proxy to route requests.',
      },
      amundi: {
        title: 'ALTO Front Module & AOP Plugin',
        description:
          'Maintained the ALTO Front Module (PFA) fund management tool and implemented the AOP plugin to integrate Lyxor funds.',
      },
      lyxor: {
        title: 'Building Tools for funds',
        description:
          'Built from scratch to manage synthetic funds, with Redis caching to improve performance.',
      },
      'neuflize-obc': {
        title: 'Life Insurance Platform',
        description:
          'Web platform for life insurance management, compliant with the EU DDA directive, using Angular and ASP.NET Core Web API.',
      },
      betclic: {
        title: 'Sports Betting Integration',
        description:
          'Integrated new sports with Betradar and Betgenius providers and added live-betting scoreboards.',
      },
      jcdecaux: {
        title: 'Urban Furniture Mapping',
        description:
          'Redesigned the mapping system for the Urban Furniture Sales Product service and developed REST web services.',
      },
      opco2i: {
        title: 'Contributions Web App',
        description:
          'Built a web application to collect company contributions, with DDD design and BDD tests.',
      },
      sanofi: {
        title: 'Workflow System',
        description: 'Redesigned a workflow system and configured the K2 workflow engine.',
      },
    },
  },
  resume: {
    download: 'Download CV',
  },
  blog: {
    heading: 'Technical **Blog**',
    subtitle: 'Notes and deep dives on software engineering.',
    readMore: 'Read more',
    back: 'Back to articles',
    minutes: 'min read',
    notFound: 'Article not found.',
  },
  footer: {
    designed: 'Designed and Developed by Olivier Page',
    copyright: 'Copyright © {year} OP',
  },
  loading: 'Loading…',
}
