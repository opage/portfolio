import type { Dictionary } from './types'

export const fr: Dictionary = {
  meta: {
    title: 'Olivier Page | Portfolio',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    resume: 'CV',
    blog: 'Blog',
    toggle: 'Ouvrir la navigation',
    language: 'Langue',
  },
  home: {
    greeting: 'Salut !',
    im: 'JE SUIS',
    name: 'OLIVIER PAGE',
    roles: [
      'Développeur Full-stack',
      'Java / .NET',
      'Angular',
      'Azure',
    ],
    findMe: 'Retrouvez-moi sur',
    connect: "N'hésitez pas à me **contacter**",
    wave: 'main qui salue',
    imageAlt: "illustration d'accueil",
  },
  intro: {
    heading: 'LAISSEZ-MOI **ME PRÉSENTER**',
    body: [
      "Artisan logiciel appliquant les **principes SOLID** et aimant transformer des idées en produits fiables et évolutifs.",
      "Je développe mes compétences en restant à jour sur les tendances technologiques.",
      "Ayant l'esprit d'équipe, je partage mes connaissances et apprends des autres.",
    ],
    avatarAlt: 'avatar',
  },
  about: {
    heading: 'Savoir **Qui Je Suis**',
    lines: [
      'Bonjour à tous !', 
      "Je suis **Olivier Page**, **Développeur Full-stack** basé à **Thionville, France**.",
      "Je suis spécialisé en **Java/.NET**, **Angular** et **Azure**, avec plus d'une décennie d'expérience dans la création de logiciels robustes et évolutifs pour la banque, l'énergie et la gestion d'actifs.",
      "Je suis titulaire d'un **Master 2 en Informatique** de l'**Université Grenoble Alpes**.",
    ],
    activitiesTitle: 'Atouts clés :',
    activities: [
      'Artisanat logiciel respectant les principes SOLID',
      "Lancement de projets personnels pour apprendre de nouveaux langages et des architectures propres",
      'Partage des connaissances et accompagnement des équipes',
    ],
    quote: '« Artisan logiciel appliquant les principes SOLID. »',
    quoteAuthor: 'Olivier Page',
    skillset: 'Compétences **professionnelles**',
    softSkills: '**Savoir-être**',
    softSkillsItems: [
      {
        title: 'Communication',
        description: "Bien écouter, s'exprimer clairement et écrire efficacement.",
      },
      {
        title: "Travail d'équipe",
        description: "Coopérer avec ses collègues et soutenir les objectifs de l'équipe.",
      },
      {
        title: 'Résolution de problèmes',
        description: 'Trouver des solutions pratiques face aux défis.',
      },
      {
        title: 'Adaptabilité',
        description: "S'adapter rapidement à de nouvelles tâches ou à des changements imprévus.",
      },
      {
        title: 'Gestion du temps',
        description: 'Prioriser les tâches et respecter les délais.',
      },
    ],
    tools: '**Outils** que j\'utilise',
    imageAlt: 'à propos',
  },
  github: {
    heading: 'Les jours où je **code**',
    cta: 'Voir mon activité GitHub',
  },
  experience: {
    heading: 'Expérience **professionnelle**',
    subtitle:
      "Mon parcours professionnel dans la finance, l'énergie et la technologie.",
    items: [
      {
        company: 'Advanzia Bank',
        role: 'Développeur Backend Senior (C#)',
        location: 'Munsbach, LU',
        period: 'Sept 2025 – Mai 2026',
        duration: '9 mois',
        summary:
          'Fintech digitale spécialisée dans les cartes de crédit, les solutions de paiement et le cards-as-a-service pour les clients et partenaires en Europe.',
        highlights: [
          'Intégration de la solution SaaS Amiko pour simplifier la gestion des fraudes et des litiges.',
          "Intégration des endpoints TSYS pour améliorer les capacités de traitement des paiements.",
          'Tests et débogage du code pour corriger les bugs et anomalies.',
          'Participation aux revues de code pour améliorer la qualité et les bonnes pratiques.',
        ],
      },
      {
        company: 'Evolution Energie',
        role: 'Développeur Full-stack (C#)',
        location: 'Paris, FR',
        period: 'Fév 2025 – Août 2025',
        duration: '8 mois',
        summary:
          "Entreprise spécialisée dans les énergies renouvelables, axée sur les solutions durables et l'efficacité énergétique.",
        highlights: [
          "Implémentation de l'authentification SSO en remplacement de WS-Federation.",
          "Mise en place d'une API Gateway et d'un reverse proxy pour le routage des requêtes.",
          'Mise à niveau des applications existantes vers .NET 8.0.',
          'Participation aux revues de code pour améliorer la qualité et les bonnes pratiques.',
        ],
      },
      {
        company: 'Amundi Asset Management',
        role: 'Développeur Full-stack (Java)',
        location: 'Paris, FR',
        period: 'Août 2021 – Jan 2025',
        duration: '3 ans 7 mois',
        summary:
          "Société de gestion d'actifs mondiale proposant des solutions d'investissement aux clients institutionnels et particuliers.",
        highlights: [
          'Maintenance applicative du module principal ALTO Front de gestion de fonds (PFA).',
          'Maintenance de plugins tels que Cash Management, Money Market et autres.',
          "Implémentation du plugin AOP (ALTO OTC Trade Management) pour intégrer les fonds Lyxor.",
          'Développement de widgets Maestro en Angular pour ALTO Investment Research (IR).',
          'Réalisation des tests.',
        ],
      },
      {
        company: 'Lyxor Asset Management',
        role: 'Développeur Full-stack (C#)',
        location: 'Paris, FR',
        period: 'Sept 2018 – Sept 2021',
        duration: '3 ans 1 mois',
        summary:
          "Société de gestion d'actifs mondiale spécialisée dans les ETF, les fonds indiciels et les solutions d'investissement alternatif.",
        highlights: [
          'Développement d\'outils de gestion pour les fonds synthétiques/physiques répondant aux besoins des parties prenantes.',
          "Construction from scratch de l'outil SBF pour gérer les fonds synthétiques.",
          'Refactoring et maintenance des outils Lyxor ETF (Lyxor AP, Sherlock, GI).',
          'Mise en cache des données dans Redis pour améliorer les performances.',
          'Réalisation des tests avec NUnit.',
        ],
      },
      {
        company: 'Neuflize OBC',
        role: 'Développeur Full-stack (C#)',
        location: 'Paris, FR',
        period: 'Juin 2018 – Août 2018',
        duration: '4 mois',
        summary:
          "Banque privée proposant des services de gestion de patrimoine et d'investissement aux particuliers et familles fortunés.",
        highlights: [
          "Construction d'une plateforme web de gestion de l'assurance-vie conforme à la directive DDA européenne.",
          "Développement d'une application Angular/ASP.NET Core Web API.",
          "Implémentation de packages SSI pour synchroniser les données entre la nouvelle plateforme et le système legacy.",
        ],
      },
      {
        company: 'Betclic Everest Group',
        role: 'Développeur Backend (C#)',
        location: 'Paris, FR',
        period: 'Mai 2017 – Mai 2018',
        duration: '1 an 2 mois',
        summary:
          'Société de jeux en ligne spécialisée dans les paris sportifs, le poker et les jeux de casino.',
        highlights: [
          'Intégration de nouveaux sports avec les fournisseurs Betradar et Betgenius.',
          "Refactoring du système existant pour l'intégration Betradar.",
          "Intégration de nouveaux sports (Handball, Rugby à XV, Rugby à XIII, etc.) dans les services (Broker, Worker).",
          'Ajout de nouveaux tableaux de score sur le front Betclic Sport (Paris en direct).',
          'Réalisation des tests avec NUnit et Moq.',
        ],
      },
      {
        company: 'JC Decaux',
        role: 'Développeur Backend (C#)',
        location: 'Paris, FR',
        period: 'Juil 2016 – Juin 2017',
        duration: '1 an 1 mois',
        summary:
          'Leader mondial de la communication extérieure et du mobilier urbain, proposant des solutions innovantes pour les espaces urbains.',
        highlights: [
          'Refonte du système de cartographie du service Produits de Vente de Mobilier Urbain de JCDecaux.',
          'Contribution à la mise en place des fondations de la nouvelle application.',
          'Implémentation de nouvelles fonctionnalités.',
          'Développement de services web REST avec Web API 2.',
          'Rédaction de tests avec xUnit.net, FluentAssertions, NSubstitute et Postman.',
        ],
      },
      {
        company: 'OPCO 2I (ex OPCA Defi)',
        role: 'Développeur Backend (C#)',
        location: 'Paris, FR',
        period: 'Oct 2012 – Juin 2016',
        duration: '3 ans 10 mois',
        summary:
          "Organisme gérant les droits à la formation pour le congé individuel de formation, au service d'entreprises de divers secteurs.",
        highlights: [
          "Construction d'une application web pour collecter les contributions des entreprises.",
          'Gestion des droits à la formation pour le congé individuel de formation.',
          'Mise en place de Scrum et introduction de pratiques de qualité de code.',
          'Conception DDD avec scénarios Given-When-Then et tests BDD.',
          "Préparation des releases et accompagnement des nouveaux développeurs.",
        ],
      },
      {
        company: 'Sanofi Pasteur',
        role: 'Développeur Backend (C#)',
        location: 'Paris, FR',
        period: 'Sept 2012 – Oct 2012',
        duration: '2 mois',
        summary:
          "Entreprise biopharmaceutique mondiale spécialisée dans les vaccins et les solutions d'immunisation.",
        highlights: [
          "Refonte d'un système de workflow.",
          'Installation et configuration du moteur de workflow K2.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projets **clés**',
    subtitle: 'Une sélection de ce que j\'ai construit au cours de ma carrière.',
    learnMore: 'En savoir plus',
    items: {
      advanzia: {
        title: 'Intégration Amiko & TSYS',
        description:
          'Intégration de la solution SaaS Amiko pour simplifier la gestion des fraudes et des litiges, et des endpoints TSYS pour améliorer le traitement des paiements.',
      },
      'evolution-energie': {
        title: 'SSO & API Gateway',
        description:
          "Implémentation de l'authentification SSO en remplacement de WS-Federation, plus une API Gateway et un reverse proxy pour le routage des requêtes.",
      },
      amundi: {
        title: 'Module ALTO Front & Plugin AOP',
        description:
          'Maintenance du module ALTO Front (PFA) de gestion de fonds et implémentation du plugin AOP pour intégrer les fonds Lyxor.',
      },
      lyxor: {
        title: 'Gérer des outils de gestion de fonds',
        description:
          'Construit de zéro pour gérer les fonds synthétiques, avec mise en cache Redis pour améliorer les performances.',
      },
      'neuflize-obc': {
        title: "Plateforme d'Assurance-Vie",
        description:
          "Plateforme web de gestion de l'assurance-vie conforme à la directive DDA européenne, avec Angular et ASP.NET Core Web API.",
      },
      betclic: {
        title: 'Intégration Paris Sportifs',
        description:
          'Intégration de nouveaux sports avec les fournisseurs Betradar et Betgenius et ajout de tableaux de score pour les paris en direct.',
      },
      jcdecaux: {
        title: 'Cartographie Mobilier Urbain',
        description:
          'Refonte du système de cartographie du service Produits de Vente de Mobilier Urbain et développement de services web REST.',
      },
      opco2i: {
        title: 'Application de Collecte des Contributions',
        description:
          "Construction d'une application web pour collecter les contributions des entreprises, avec conception DDD et tests BDD.",
      },
      sanofi: {
        title: 'Système de Workflow',
        description: "Refonte d'un système de workflow et configuration du moteur de workflow K2.",
      },
    },
  },
  resume: {
    download: 'Télécharger le CV',
  },
  blog: {
    heading: '**Blog** technique',
    subtitle: "Notes et articles de fond sur l'ingénierie logicielle.",
    readMore: 'Lire la suite',
    back: 'Retour aux articles',
    minutes: 'min de lecture',
    notFound: 'Article introuvable.',
  },
  footer: {
    designed: 'Conçu et développé par Olivier Page',
    copyright: 'Copyright © {year} OP',
  },
  loading: 'Chargement…',
}
