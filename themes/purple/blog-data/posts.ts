export interface PostMeta {
  slug: string
  date: string
  tags: string[]
  title: Record<string, string>
  description: Record<string, string>
}

export const posts: PostMeta[] = [
  {
    slug: 'angular-for-experts',
    date: '2026-09-02',
    tags: ["angular","typescript","frontend","architecture"],
    title: {"en":"Angular for experts: modern architecture and the latest features","fr":"Angular pour les experts : architecture moderne et dernières nouveautés","lb":"Angular fir Experten: modern Architektur an déi neist Features"},
    description: {"en":"Everything a senior Angular developer needs today: signals, standalone components, zoneless change detection, and a clean architecture.","fr":"Tout ce qu'un développeur Angular senior doit connaître aujourd'hui : signals, composants standalone, détection zoneless et une architecture propre.","lb":"Alles, wat e Senior-Angular-Entwéckler haut muss wëssen: Signals, Standalone-Komponenten, Zoneless-Detektioun an eng propper Architektur."},
  },
  {
    slug: 'design-patterns-for-developers',
    date: '2026-09-02',
    tags: ["design-patterns","architecture","csharp","dotnet"],
    title: {"en":"Design patterns for developers: a friendly guide","fr":"Les design patterns pour les développeurs : un guide accessible","lb":"Design Patterns fir Entwéckler: e frëndleche Guide"},
    description: {"en":"A plain-English tour of the most useful design patterns, with small C# examples.","fr":"Un tour d'horizon en langage simple des design patterns les plus utiles, avec de petits exemples en C#.","lb":"En Tour a verständlecher Sprooch duerch déi nëtzlechst Design Patterns, mat klenge C#-Beispiller."},
  },
  {
    slug: 'designing-a-ci-cd-pipeline',
    date: '2026-06-05',
    tags: ["devops","github-actions","ci-cd"],
    title: {"en":"Designing a CI/CD pipeline with GitHub Actions","fr":"Concevoir un pipeline CI/CD avec GitHub Actions","lb":"E CI/CD-Pipeline mat GitHub Actions designen"},
    description: {"en":"A walkthrough of a production-ready pipeline: build, test, scan, and deploy.","fr":"Un tour d'horizon d'un pipeline prêt pour la production : build, test, scan et déploiement.","lb":"En Iwwerbléck iwwer e produktiounsbereete Pipeline: bauen, testen, scannen an deployéieren."},
  },
  {
    slug: 'java-spring-ecosystem-for-experts',
    date: '2026-09-02',
    tags: ["java","spring","spring-boot","kafka"],
    title: {"en":"Java and the Spring ecosystem for experts: Boot, Security, JPA, Kafka, profiles, gateway","fr":"Java et l'écosystème Spring pour les experts : Boot, Security, JPA, Kafka, profils, gateway","lb":"Java an den Spring-Ecosystem fir Experten: Boot, Security, JPA, Kafka, Profiler, Gateway"},
    description: {"en":"A tour of modern Java and the Spring tools a senior backend developer reaches for, plus a full Java version history.","fr":"Un tour de Java moderne et des outils Spring qu'un développeur backend senior utilise, plus un historique complet des versions Java.","lb":"En Tour duerch modernt Java an d'Spring-Tools, déi e Senior-Backend-Entwéckler all Dag benotzt, plus eng komplett Java-Versiounsgeschicht."},
  },
  {
    slug: 'mermaid-diagrams-guide',
    date: '2026-07-12',
    tags: ["markdown","mermaid","diagrams"],
    title: {"en":"Mermaid diagrams in your articles","fr":"Les diagrammes Mermaid dans vos articles","lb":"Mermaid-Diagrammer an Ären Artikelen"},
    description: {"en":"Every Mermaid diagram type you can drop into a markdown article.","fr":"Tous les types de diagrammes Mermaid que vous pouvez insérer dans un article markdown.","lb":"All Mermaid-Diagrammtyp, deen Dir an e Markdown-Artikel asetze kënnt."},
  },
  {
    slug: 'order-saga-state-machine',
    date: '2026-09-02',
    tags: ["masstransit","azure-service-bus","saga","dotnet"],
    title: {"en":"Orchestrating long-running workflows with MassTransit sagas","fr":"Orchestrer des workflows de longue durée avec les sagas MassTransit","lb":"Laang lafend Workflows mat MassTransit-Sagas orchestrieren"},
    description: {"en":"A practical look at modeling an order checkout as a state machine with MassTransit, Azure Service Bus, and EF Core persistence.","fr":"Un aperçu pratique de la modélisation d'un checkout de commande en machine à états avec MassTransit, Azure Service Bus et la persistance EF Core.","lb":"E prakteschen Abléck, wéi een e Bestellungs-Checkout als State-Machine mat MassTransit, Azure Service Bus an EF-Core-Persistenz modelléiert."},
  },
  {
    slug: 'python-for-finance',
    date: '2026-09-02',
    tags: ["python","finance","pandas","numpy"],
    title: {"en":"Python for finance: NumPy, pandas, and the tools of quantitative analysis","fr":"Python pour la finance : NumPy, pandas et les outils de l'analyse quantitative","lb":"Python fir d'Finanz: NumPy, pandas an d'Tools vun der quantitativer Analyse"},
    description: {"en":"A practical tour of the Python libraries a quantitative developer uses daily: NumPy, pandas, yfinance, and matplotlib.","fr":"Un tour pratique des bibliothèques Python qu'un développeur quantitatif utilise au quotidien : NumPy, pandas, yfinance et matplotlib.","lb":"E prakteschen Tour duerch d'Python-Bibliothéiken, déi e quantitativen Entwéckler all Dag benotzt: NumPy, pandas, yfinance a matplotlib."},
  },
  {
    slug: 'relational-databases-for-experts',
    date: '2026-09-02',
    tags: ["sql","database","postgresql","dba"],
    title: {"en":"Relational databases for experts: ACID, keys, triggers, and indexes","fr":"Bases de données relationnelles pour les experts : ACID, clés, triggers et index","lb":"Relationell Datenbanke fir Experten: ACID, Schlësselen, Triggers an Indexen"},
    description: {"en":"The core concepts every DBA should master: ACID, primary and foreign keys, indexes, triggers, functions, and stored procedures.","fr":"Les concepts essentiels que tout DBA doit maîtriser : ACID, clés primaires et étrangères, index, triggers, fonctions et procédures stockées.","lb":"D'Kärkonzepter, déi all DBA musse beherrschen: ACID, Primär- a Friemschlësselen, Indexen, Triggers, Funktiounen a Stored Procedures."},
  },
  {
    slug: 'solid-principles-in-practice',
    date: '2026-08-15',
    tags: ["solid","architecture","clean-code"],
    title: {"en":"SOLID principles in practice","fr":"Les principes SOLID en pratique","lb":"D'SOLID-Prinzipien an der Praxis"},
    description: {"en":"A quick refresher on the five SOLID principles with concrete examples.","fr":"Un rappel des cinq principes SOLID avec des exemples concrets.","lb":"E kuerzen Opfrëscher iwwer déi fënnef SOLID-Prinzipien mat konkrete Beispiller."},
  },
  {
    slug: 'tailwind-css-for-experts',
    date: '2026-09-02',
    tags: ["tailwindcss","css","frontend","ui"],
    title: {"en":"Tailwind CSS for experts: best practices and tools for beautiful UI","fr":"Tailwind CSS pour les experts : bonnes pratiques et outils pour une belle UI","lb":"Tailwind CSS fir Experten: Best Practices an Tools fir eng schéin UI"},
    description: {"en":"Build maintainable, gorgeous interfaces with Tailwind CSS v4: design tokens, reusable components, and the modern tooling.","fr":"Construisez des interfaces maintenables et superbes avec Tailwind CSS v4 : jetons de design, composants réutilisables et outillage moderne.","lb":"Baut erhalbar, wunderschéin Interfaces mat Tailwind CSS v4: Design Tokens, widderverwendbar Komponenten an dat modernt Tooling."},
  },
  {
    slug: 'typescript-javascript-for-experts',
    date: '2026-09-02',
    tags: ["typescript","javascript","frontend","architecture"],
    title: {"en":"TypeScript and JavaScript for experts: modern features and architecture","fr":"TypeScript et JavaScript pour les experts : fonctionnalités modernes et architecture","lb":"TypeScript a JavaScript fir Experten: modern Features an Architektur"},
    description: {"en":"The modern JavaScript APIs and TypeScript type patterns every expert front-end developer should use.","fr":"Les API JavaScript modernes et les motifs de types TypeScript que tout développeur front-end expert devrait utiliser.","lb":"Déi modern JavaScript-APIen an d'TypeScript-Typmuster, déi all Expert-Front-End-Entwéckler soll benotzen."},
  },
  {
    slug: 'welcome-to-my-blog',
    date: '2026-06-02',
    tags: ["solidjs","vite","markdown"],
    title: {"en":"Welcome to my technical blog","fr":"Bienvenue sur mon blog technique","lb":"Wëllkomm op mengem technesche Blog"},
    description: {"en":"Kickoff post: how this blog is built and what you can expect to read here.","fr":"Article d'ouverture : comment ce blog est construit et ce que vous y trouverez.","lb":"Optratt-Artikel: wéi dëse Blog gebaut ass a wat Iech hei erwaart."},
  },
]
