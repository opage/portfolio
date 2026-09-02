import type { Dictionary } from './types'

export const lb: Dictionary = {
  meta: {
    title: 'Olivier Page | Portfolio',
  },
  nav: {
    home: 'Doheem',
    about: 'Iwwer mech',
    experience: 'Erfarung',
    projects: 'Projeten',
    resume: 'Liewenslaf',
    blog: 'Blog',
    toggle: 'Navigatioun opmaachen',
    language: 'Sprooch',
  },
  home: {
    greeting: 'Moien!',
    im: 'ECH SINN',
    name: 'OLIVIER PAGE',
    roles: [
      'Full-stack Entwéckler',
      'Java / .NET',
      'Angular',
      'Azure',
    ],
    findMe: 'Fannt mech op',
    connect: 'Fillt Iech fräi, mech ze **kontaktéieren**',
    wave: 'wénkend Hand',
    imageAlt: 'Illustratioun fir doheem',
  },
  intro: {
    heading: 'LOOSST MECH **VIRSCHTELLEN**',
    body: [
      "Ech sinn e Software-Handwierker, deen d'**SOLID-Prinzipien** verfollegt an Iddien a verlässlech, skaléierbar Produiten ëmsetzt.",
      'Ech starten Nieweprojeten, fir nei Sproochen a **propper Architekturen** ze léieren.',
      'Ech bauen meng Fäegkeete weider aus a bleiwen um neisten Stand vun den Tech-Trends.',
      'Als Teamplayer deelen ech Wëssen a léieren och vun aneren.',
    ],
    avatarAlt: 'Avatar',
  },
  about: {
    heading: 'Wësst **Wien Ech Sinn**',
    lines: [
      'Moien alleguer!', 
      "Ech sinn **Olivier Page**, e **Full-stack Entwéckler** vu **Thionville, Frankräich**.",
      'Ech sinn op **Java/.NET**, **Angular** an **Azure** spezialiséiert, mat iwwer engem Joerzéngt Erfarung fir robust, skaléierbar Software fir Banken, Energie a Verméigensverwaltung ze bauen.',
      'Ech hunn e **Master 2 an Informatik** vun der **Université Grenoble Alpes**.',
    ],
    activitiesTitle: 'Kärkompetenzen:',
    activities: [
      'Software-Handwierk no SOLID-Prinzipien',
      'Nieweprojeten, fir nei Sproochen a propper Architekturen ze léieren',
      'Wëssen deelen an Teams begleeden',
    ],
    quote: '"Software-Handwierker, deen d\'SOLID-Prinzipien verfollegt."',
    quoteAuthor: 'Olivier Page',
    skillset: 'Berufflech **Kompetenzen**',
    softSkills: '**Sozial** Kompetenzen',
    softSkillsItems: [
      {
        title: 'Kommunikatioun',
        description: 'Gutt nolauschteren, kloer schwätzen an effikass schreiwen.',
      },
      {
        title: 'Teamwork',
        description: "Mat Kolleegen zesummeschaffen an d'Ziler vum Team ënnerstëtzen.",
      },
      {
        title: 'Problemléisung',
        description: 'Praktesch Léisunge fannen, wann Erausfuerderungen opkommen.',
      },
      {
        title: 'Adaptabilitéit',
        description: 'Séier un nei Aufgaben oder onerwaart Ännerungen upassen.',
      },
      {
        title: 'Zäitmanagement',
        description: 'Prioritéite setzen an Deadlines anhalen.',
      },
    ],
    tools: '**Tools**, déi ech benotzen',
    imageAlt: 'iwwer mech',
  },
  github: {
    heading: 'Déi Deeg, wou ech **codéieren**',
    cta: 'Meng GitHub-Aktivitéit uweisen',
  },
  experience: {
    heading: 'Berufflech **Erfarung**',
    subtitle: 'Mäi beruffleche Wee an der Finanz, der Energie an der Technologie.',
    items: [
      {
        company: 'Advanzia Bank',
        role: 'Senior Backend Entwéckler (C#)',
        location: 'Munsbach, LU',
        period: 'Sept 2025 – Juni 2026',
        duration: '10 Méint',
        summary:
          'Digital Fintech-Bank, spezialiséiert op Kreditkaarten, Bezuel-Léisungen a Cards-as-a-Service fir Clienten a Partner uechter Europa.',
        highlights: [
          "D'SaaS-Léisung Amiko integréiert, fir de Fraude- a Reklamatiounsmanagement ze vereinfachen.",
          "TSYS-Endpunkte integréiert, fir d'Bezuelungsveraarbechtung ze verbesseren.",
          'De Code getest an debuggt, fir Bugs a Problemer ze léisen.',
          "U Code-Reviews deelgeholl, fir d'Qualitéit an d'Best Practices ze verbesseren.",
        ],
      },
      {
        company: 'Evolution Energie',
        role: 'Full-stack Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Feb 2025 – Aug 2025',
        duration: '8 Méint',
        summary:
          'Erneierbar-Energie-Entreprise, déi sech op nohalteg Léisungen an Energieeffizienz fokusséiert.',
        highlights: [
          "SSO-Authentifikatioun agesat, fir WS-Federation z'ersetzen.",
          'API Gateway a Reverse Proxy agesat, fir Ufroen ze routen.',
          'Bestehend Applikatiounen op .NET 8.0 upgradet.',
          "U Code-Reviews deelgeholl, fir d'Qualitéit an d'Best Practices ze verbesseren.",
        ],
      },
      {
        company: 'Amundi Asset Management',
        role: 'Full-stack Entwéckler (Java)',
        location: 'Paris, FR',
        period: 'Aug 2021 – Jan 2025',
        duration: '3 Joer 7 Méint',
        summary:
          'Global Verméigensverwaltungs-Entreprise, déi Investitiounsléisungen an -Servicer fir institutionell a privat Clienten ubitt.',
        highlights: [
          "Applikatiouns-Wartung um Haaptmodul ALTO Front fir d'Fondsverwaltung (PFA).",
          'Wartung vu Pluginne wéi Cash Management, Money Market an anerer.',
          "Den AOP Plugin (ALTO OTC Trade Management) agesat, fir Lyxor-Fongen z'integréieren.",
          'Maestro-Widgets an Angular fir ALTO Investment Research (IR) entwéckelt.',
          'Tester duerchgefouert.',
        ],
      },
      {
        company: 'Lyxor Asset Management',
        role: 'Full-stack Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Sept 2018 – Sept 2021',
        duration: '3 Joer 1 Mount',
        summary:
          'Global Verméigensverwaltungs-Entreprise, spezialiséiert op ETFs, Indexfongen an alternativ Investitiounsléisungen.',
        highlights: [
          "Verwaltungs-Tools fir synthetesch/physesch Fongen entwéckelt, fir d'Bedierfnesser vun de Stakeholder z'erfëllen.",
          'D\u2019SBF-Tool vun Null op gebaut, fir synthetesch Fongen ze geréieren.',
          'Lyxor ETF Tools (Lyxor AP, Sherlock, GI) refactort an gepflegt.',
          "Daten a Redis gecacht, fir d'Performance ze verbesseren.",
          'Tester mat NUnit duerchgefouert.',
        ],
      },
      {
        company: 'Neuflize OBC',
        role: 'Full-stack Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Juni 2018 – Aug 2018',
        duration: '4 Méint',
        summary:
          'Privatbank, déi Verméigensverwaltung an Investitiounsservicer fir verméigend Eenzelpersounen a Familljen ubitt.',
        highlights: [
          "Eng Web-Plattform fir d'Liewensversécherungsverwaltung gebaut, konform mat der EU-DDA-Direktiv.",
          'Eng Angular/ASP.NET Core Web API Applikatioun entwéckelt.',
          "SSI-Package agesat, fir Daten tëscht der neier Plattform an dem Legacy-System ze synchroniséieren.",
        ],
      },
      {
        company: 'Betclic Everest Group',
        role: 'Backend Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Mee 2017 – Mee 2018',
        duration: '1 Joer 2 Méint',
        summary:
          'Online-Spill-Entreprise, spezialiséiert op Sportwetten, Poker a Casinospiller.',
        highlights: [
          'Nei Sportaarten mat de Betradar- a Betgenius-Provideren integréiert.',
          "De bestehende System fir d'Betradar-Integratioun refactort.",
          "Nei Sportaarten (Handball, Rugby Union, Rugby League, asw.) an d'Servicer (Broker, Worker) integréiert.",
          'Nei Scoreboards um Betclic Sport Front (Live Betting) derbäigesat.',
          'Tester mat NUnit a Moq duerchgefouert.',
        ],
      },
      {
        company: 'JC Decaux',
        role: 'Backend Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Juli 2016 – Juni 2017',
        duration: '1 Joer 1 Mount',
        summary:
          'Global Leader am Baussereklamm an der Stadmobilie, mat innovative Léisunge fir urban Raim.',
        highlights: [
          'De Kartographiesystem fir de Produits de Vente de Mobilier Urbain Service nei designt.',
          'Zum Opbau vum Fundament vun der neier Applikatioun bäigedroen.',
          'Nei Funktionalitéiten agesat.',
          'REST-Webservices mat Web API 2 entwéckelt.',
          'Tester mat xUnit.net, FluentAssertions, NSubstitute a Postman geschriwwen.',
        ],
      },
      {
        company: 'OPCO 2I (ex OPCA Defi)',
        role: 'Backend Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Okt 2012 – Juni 2016',
        duration: '3 Joer 10 Méint',
        summary:
          "Organisatioun, déi d'Rechter op Weiderbildung fir den individuellen Bildungsurlaub geréiert, am Déngscht vun Entreprisen aus verschiddene Secteuren.",
        highlights: [
          "Eng Web-App gebaut, fir d'Contributioune vun den Entreprisen ze sammelen.",
          "D'Rechter op Weiderbildung fir den individuellen Bildungsurlaub geréiert.",
          "Scrum agesat a Praktike fir d'Codequalitéit agefouert.",
          'DDD-Design mat Given-When-Then-Szenarien a BDD-Tester.',
          'Releases virbereet an nei Entwéckler begleet.',
        ],
      },
      {
        company: 'Sanofi Pasteur',
        role: 'Backend Entwéckler (C#)',
        location: 'Paris, FR',
        period: 'Sept 2012 – Okt 2012',
        duration: '2 Méint',
        summary:
          'Global biopharmazeutesch Entreprise, spezialiséiert op Impfungen an Immunisatiounsléisungen.',
        highlights: [
          'E Workflow-System nei designt.',
          "D'K2-Workflow-Engine opgesat a konfiguréiert.",
        ],
      },
    ],
  },
  projects: {
    heading: 'Ausgewielt **Projeten**',
    subtitle: 'Eng Auswiel vu Saachen, déi ech a menger Carrière gebaut hunn.',
    learnMore: 'Méi gewuer',
    items: {
      advanzia: {
        title: 'Amiko & TSYS Integratioun',
        description:
          "D'SaaS-Léisung Amiko integréiert, fir de Fraude- a Reklamatiounsmanagement ze vereinfachen, an TSYS-Endpunkte fir d'Bezuelungsveraarbechtung ze verbesseren.",
      },
      'evolution-energie': {
        title: 'SSO & API Gateway',
        description:
          "SSO-Authentifikatioun agesat fir WS-Federation z'ersetzen, plus en API Gateway a Reverse Proxy fir Ufroen ze routen.",
      },
      amundi: {
        title: 'ALTO Front Modul & AOP Plugin',
        description:
          "Den ALTO Front Modul (PFA) fir d'Fondsverwaltung gepflegt an den AOP Plugin agesat, fir Lyxor-Fongen z'integréieren.",
      },
      lyxor: {
        title: 'Manage Tools',
        description:
          "Vun Null op gebaut, fir synthetesch Fongen ze geréieren, mat Redis-Caching fir d'Performance ze verbesseren.",
      },
      'neuflize-obc': {
        title: 'Liewensversécherungs-Plattform',
        description:
          "Web-Plattform fir d'Liewensversécherungsverwaltung, konform mat der EU-DDA-Direktiv, mat Angular an ASP.NET Core Web API.",
      },
      betclic: {
        title: 'Sportwetten-Integratioun',
        description:
          'Nei Sportaarten mat de Betradar- a Betgenius-Provideren integréiert an Live-Wett-Scoreboards derbäigesat.',
      },
      jcdecaux: {
        title: 'Stadmobilie-Kartographie',
        description:
          'De Kartographiesystem fir de Produits de Vente de Mobilier Urbain Service nei designt an REST-Webservices entwéckelt.',
      },
      opco2i: {
        title: 'Contributiouns-Web-App',
        description:
          "Eng Web-App gebaut, fir d'Contributioune vun den Entreprisen ze sammelen, mat DDD-Design an BDD-Tester.",
      },
      sanofi: {
        title: 'Workflow-System',
        description: "E Workflow-System nei designt an d'K2-Workflow-Engine konfiguréiert.",
      },
    },
  },
  resume: {
    download: 'Liewenslaf eroflueden',
  },
  blog: {
    heading: 'Techneschen **Blog**',
    subtitle: 'Notizen an déif Ablécker iwwer Software-Engineering.',
    readMore: 'Weiderliesen',
    back: 'Zréck op d\'Artikelen',
    minutes: 'Min. Lieszäit',
    notFound: 'Artikel net fonnt.',
  },
  footer: {
    designed: 'Designt an entwéckelt vum Olivier Page',
    copyright: 'Copyright © {year} OP',
  },
  loading: 'Lueden…',
}
