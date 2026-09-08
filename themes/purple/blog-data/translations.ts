export type BodyTranslations = Record<string, Record<string, string>>

export const bodyTranslations: Record<string, BodyTranslations> = {
  "welcome-to-my-blog": {
    "why-a-blog": {
      "en": "Why a blog?",
      "fr": "Pourquoi un blog ?",
      "lb": "Firwat e Blog?"
    },
    "para-i-built-this-space": {
      "en": "I built this space to share the notes and lessons I gather while working on side projects and production systems. Expect deep dives on **SolidJS**, **.NET**, **Java**, **Angular**, and the tooling around them.",
      "fr": "J'ai créé cet espace pour partager les notes et leçons que je recueille au fil de mes projets personnels et de mes missions en production. Attendez-vous à des articles de fond sur **SolidJS**, **.NET**, **Java**, **Angular** et leurs outils.",
      "lb": "Ech hunn dëse Raum gebaut, fir d'Notizen a Lektiounen ze deelen, déi ech beim Schaffen un Nieweprojeten a Produktiounssystemer sammelen. Et gi déif Ablécker iwwer **SolidJS**, **.NET**, **Java**, **Angular** an d'Tools dohannert."
    },
    "markdown-power": {
      "en": "Markdown power",
      "fr": "La puissance du Markdown",
      "lb": "D'Kraaft vu Markdown"
    },
    "para-articles-are-written-as": {
      "en": "Articles are written as plain Markdown files, so I can focus on content. The renderer supports the usual suspects out of the box:",
      "fr": "Les articles sont rédigés en Markdown, ce qui me permet de me concentrer sur le contenu. Le moteur de rendu prend en charge l'essentiel :",
      "lb": "D'Artikele ginn als Markdown geschriwwen, sou datt ech mech op den Inhalt konzentréiere kann. De Renderer ënnerstëtzt dat Wichtegst:"
    },
    "list-headings-lists-and-blockquotes": {
      "en": "Headings, lists, and blockquotes",
      "fr": "Titres, listes et citations",
      "lb": "Iwwerschrëften, Lëschten an Zitater"
    },
    "list-tables": {
      "en": "Tables",
      "fr": "Tableaux",
      "lb": "Tabellen"
    },
    "list-links-and-images": {
      "en": "Links and images",
      "fr": "Liens et images",
      "lb": "Linken a Biller"
    },
    "list-fenced-code-blocks-with-syntax-highlighting": {
      "en": "Fenced code blocks with **syntax highlighting**",
      "fr": "Blocs de code avec **coloration syntaxique**",
      "lb": "Code-Bléck mat **Syntax-Highlighting**"
    },
    "list-mermaid-diagrams": {
      "en": "**Mermaid** diagrams",
      "fr": "Diagrammes **Mermaid**",
      "lb": "**Mermaid**-Diagrammer"
    },
    "syntax-highlighting": {
      "en": "Syntax highlighting",
      "fr": "Coloration syntaxique",
      "lb": "Syntax-Highlighting"
    },
    "para-code-blocks-are-highlighted": {
      "en": "Code blocks are highlighted automatically based on the language tag:",
      "fr": "Les blocs de code sont colorés automatiquement selon le langage indiqué :",
      "lb": "Code-Bléck ginn automatesch no der Sprooch gefierft:"
    },
    "mermaid-diagrams": {
      "en": "Mermaid diagrams",
      "fr": "Diagrammes Mermaid",
      "lb": "Mermaid-Diagrammer"
    },
    "para-diagrams-render-from-a": {
      "en": "Diagrams render from a `mermaid` code block:",
      "fr": "Les diagrammes sont rendus à partir d'un bloc `mermaid` :",
      "lb": "Diagrammer ginn aus engem `mermaid`-Block gerëndert:"
    },
    "para-sequence-diagrams-work-too": {
      "en": "Sequence diagrams work too:",
      "fr": "Les diagrammes de séquence fonctionnent aussi :",
      "lb": "Sequenz-Diagrammer funktionéieren och:"
    },
    "wrapping-up": {
      "en": "Wrapping up",
      "fr": "Pour finir",
      "lb": "Zum Schluss"
    },
    "para-that-is-the-basics": {
      "en": "That is the basics. Stay tuned for more detailed technical articles.",
      "fr": "Voilà l'essentiel. Restez à l'écoute pour des articles techniques plus détaillés.",
      "lb": "Dat war d'Basis. Bleift drun fir méi detailléiert technesch Artikelen."
    }
  },
  "angular-for-experts": {
    "para-angular-has-changed-a": {
      "en": "Angular has changed a lot in the last few versions. If you last wrote an app\r\nwith `NgModule`, `*ngIf`, and `@Injectable` constructors, much of that is now\r\noptional. This guide covers what a modern, expert-level Angular codebase looks\r\nlike today.\r",
      "fr": "Angular a beaucoup évolué ces dernières versions. Si vous avez écrit votre\r\ndernière application avec `NgModule`, `*ngIf` et des constructeurs `@Injectable`,\r\nune grande partie de tout cela est désormais optionnelle. Ce guide présente ce\r\nà quoi ressemble aujourd'hui un code Angular moderne, de niveau expert.\r",
      "lb": "Angular huet sech an de leschte Versiounen däitlech verännert. Wann Dir Är\r\nlescht App mat `NgModule`, `*ngIf` a `@Injectable`-Konstruktore geschriwwen hutt,\r\nass vill dovu mëttlerweil fakultativ. Dëse Guide weist, wéi e modernen,\r\nexpertniveau Angular-Code haut ausgesäit.\r"
    },
    "standalone-components": {
      "en": "## Standalone components\r",
      "fr": "## Composants standalone\r",
      "lb": "## Standalone-Komponenten\r"
    },
    "para-ngmodule-is-now-optional": {
      "en": "`NgModule` is now optional. Components, directives, and pipes declare their own\r\ndependencies with `imports`, and you wire the app with `provide*` functions.\r",
      "fr": "`NgModule` est désormais optionnel. Les composants, directives et pipes\r\ndéclarent leurs propres dépendances via `imports`, et l'application se câble\r\navec des fonctions `provide*`.\r",
      "lb": "`NgModule` ass elo fakultativ. Komponenten, Direktiven a Pipes deklaréieren hir\r\neege Ofhängegkeeten iwwer `imports`, an d'App gëtt mat `provide*`-Funktiounen\r\nverdrout.\r"
    },
    "signals-the-reactivity-core": {
      "en": "## Signals: the reactivity core\r",
      "fr": "## Les signals : le cœur de la réactivité\r",
      "lb": "## Signals: de Kär vun der Reaktivitéit\r"
    },
    "para-signals-replaced-most-of": {
      "en": "Signals replaced most of the old `ChangeDetectionStrategy` ceremony. They are\r\nthe foundation for inputs, outputs, and derived state.\r",
      "fr": "Les signals remplacent la plupart de l'ancien cérémonial de\r\n`ChangeDetectionStrategy`. Ils sont le fondement des inputs, des outputs et de\r\nl'état dérivé.\r",
      "lb": "Signals ersetzen de gréissten Deel vum alen `ChangeDetectionStrategy`-Zeremoniell.\r\nSi sinn d'Fundament fir Inputs, Outputs an ofgeleet Zoustand.\r"
    },
    "para-modern-two-way-binding-uses": {
      "en": "Modern two-way binding uses `model()`, and queries use `viewChild` /\r\n`contentChild` returning signals:\r",
      "fr": "Le binding bidirectionnel moderne utilise `model()`, et les requêtes utilisent\r\n`viewChild` / `contentChild` qui renvoient des signals :\r",
      "lb": "Modernt Zwee-Wee-Binding benotzt `model()`, an Queryen benotzen `viewChild` /\r\n`contentChild`, déi Signals zeréckginn:\r"
    },
    "para-for-asynchronous-data-resource": {
      "en": "For asynchronous data, `resource()` replaces the manual \"loading state + fetch\"\r\ndance:\r",
      "fr": "Pour les données asynchrones, `resource()` remplace la danse manuelle\r\n« état de chargement + fetch » :\r",
      "lb": "Fir asynchron Daten ersetzt `resource()` den manuelle « Lued-Zoustand + Fetch »\r\n-Danz:\r"
    },
    "para-resource-exposes-value-status": {
      "en": "`resource()` exposes `value()`, `status()`, `isLoading()`, and `error()`, so the\r\ntemplate can react to every loading phase.\r",
      "fr": "`resource()` expose `value()`, `status()`, `isLoading()` et `error()`, pour que\r\nle template puisse réagir à chaque phase de chargement.\r",
      "lb": "`resource()` stellt `value()`, `status()`, `isLoading()` an `error()` zur\r\nVerfügung, sou datt den Template op all Lued-Phas reagéiere kann.\r"
    },
    "built-in-control-flow-and-deferred-loading": {
      "en": "## Built-in control flow and deferred loading\r",
      "fr": "## Flux de contrôle natif et chargement différé\r",
      "lb": "## Kontrollfloss a verspéit Lueden\r"
    },
    "para-the-old-ngif": {
      "en": "The old `*ngIf` / `*ngFor` structural directives are now built-in blocks that\r\nread more like plain templates.\r",
      "fr": "Les anciennes directives structurelles `*ngIf` / `*ngFor` sont désormais des\r\nblocs intégrés qui se lisent comme du simple template.\r",
      "lb": "Déi al strukturell Direktiven `*ngIf` / `*ngFor` sinn elo agebaute Bléck, déi\r\nsech wéi einfachen Template liesen.\r"
    },
    "para-load-heavy-pieces-only": {
      "en": "Load heavy pieces only when needed with `@defer`:\r",
      "fr": "Ne chargez les morceaux lourds que lorsque c'est nécessaire avec `@defer` :\r",
      "lb": "Lued schwéier Deeler nëmmen, wann néideg, mat `@defer`:\r"
    },
    "zoneless-change-detection": {
      "en": "## Zoneless change detection\r",
      "fr": "## Détection de changements sans Zone.js (zoneless)\r",
      "lb": "## Zoneless Ännerungsdetektioun\r"
    },
    "para-you-can-now-drop": {
      "en": "You can now drop Zone.js entirely. Provide zoneless detection at bootstrap and\r\nrely on signals to tell Angular what changed.\r",
      "fr": "Vous pouvez désormais vous passer complètement de Zone.js. Fournissez la\r\ndétection zoneless au bootstrap et laissez les signals indiquer à Angular ce qui\r\na changé.\r",
      "lb": "Dir kënnt elo komplett op Zone.js verzichten. Stellt d'Zoneless-Detektioun beim\r\nBootstrap zur Verfügung a loosst d'Signals dem Angular soen, wat sech geännert\r\nhuet.\r"
    },
    "para-zoneless-means-less-runtime": {
      "en": "Zoneless means less runtime overhead and fewer surprises — but it expects\r\nsignal-based state and proper `OnPush`-friendly code.\r",
      "fr": "Le zoneless réduit le surcoût d'exécution et les surprises — mais il attend un\r\nétat basé sur les signals et du code compatible `OnPush`.\r",
      "lb": "Zoneless heescht manner Laufzäit-Overhead a manner Iwwerraschungen — awer et\r\nerwaart signalbaséierten Zoustand an `OnPush`-frëndleche Code.\r"
    },
    "dependency-injection-with-inject": {
      "en": "## Dependency injection with inject()\r",
      "fr": "## Injection de dépendances avec inject()\r",
      "lb": "## Dependency Injection mat inject()\r"
    },
    "para-constructor-injection-is-replaced": {
      "en": "Constructor injection is replaced by the `inject()` function, which keeps code\r\nterse and plays nicely with functional APIs.\r",
      "fr": "L'injection par constructeur est remplacée par la fonction `inject()`, qui rend\r\nle code concis et s'accorde avec les API fonctionnelles.\r",
      "lb": "D'Konstruktor-Injektioun gëtt duerch d'`inject()`-Funktioun ersat, déi de Code\r\nkuerz hält a gutt mat funktionellen APIen zesummespillt.\r"
    },
    "routing-functional-guards-and-lazy-loading": {
      "en": "## Routing: functional guards and lazy loading\r",
      "fr": "## Routing : guards fonctionnels et lazy loading\r",
      "lb": "## Routing: funktionell Guards a Lazy Loading\r"
    },
    "para-guards-resolvers-and-interceptors": {
      "en": "Guards, resolvers, and interceptors are now plain functions.\r",
      "fr": "Les guards, resolvers et interceptors sont désormais de simples fonctions.\r",
      "lb": "Guards, Resolvers an Interceptors sinn elo einfach Funktiounen.\r"
    },
    "para-lazy-loading-is-per-route": {
      "en": "Lazy loading is per-route and per-component:\r",
      "fr": "Le lazy loading se fait par route et par composant :\r",
      "lb": "Lazy Loading geschitt pro Route a pro Komponent:\r"
    },
    "http-with-signals": {
      "en": "## HTTP with signals\r",
      "fr": "## HTTP avec les signals\r",
      "lb": "## HTTP mat Signals\r"
    },
    "para-httpclient-works-directly-with": {
      "en": "`HttpClient` works directly with signals, so a GET can be a reactive value.\r",
      "fr": "`HttpClient` fonctionne directement avec les signals : un GET peut être une\r\nvaleur réactive.\r",
      "lb": "`HttpClient` funktionéiert direkt mat Signals, sou datt e GET e reaktive Wäert\r\nka sinn.\r"
    },
    "para-for-request-scoped-loading-that": {
      "en": "For request-scoped loading that already lives in an `Observable`, `rxResource()`\r\nwraps `HttpClient` directly:\r",
      "fr": "Pour un chargement par requête qui vit déjà dans un `Observable`, `rxResource()`\r\nenveloppe directement `HttpClient` :\r",
      "lb": "Fir requestbaséiert Lueden, dat schonn an engem `Observable` lieft, wéckelt\r\n`rxResource()` den `HttpClient` direkt an:\r"
    },
    "para-rxresource-exposes-the-same": {
      "en": "`rxResource()` exposes the same `value()`, `status()`, `isLoading()`, and\r\n`error()` signals as `resource()`.\r",
      "fr": "`rxResource()` expose les mêmes signals `value()`, `status()`, `isLoading()` et\r\n`error()` que `resource()`.\r",
      "lb": "`rxResource()` stellt déi selwecht `value()`, `status()`, `isLoading()` an\r\n`error()`-Signals zur Verfügung wéi `resource()`.\r"
    },
    "state-management-with-ngrx": {
      "en": "## State management with NgRx\r",
      "fr": "## Gestion d'état avec NgRx\r",
      "lb": "## State Management mat NgRx\r"
    },
    "para-for-global-state-ngrx": {
      "en": "For global state, NgRx offers a signals-based **SignalStore** that fits the\r\nmodern zoneless, signal-driven model.\r",
      "fr": "Pour l'état global, NgRx propose un **SignalStore** basé sur les signals, qui\r\ns'intègre au modèle moderne zoneless et piloté par signals.\r",
      "lb": "Fir globalen Zoustand bitt NgRx e signalbaséierte **SignalStore**, deen an de\r\nmoderne zoneless, signalgedriwwene Modell passt.\r"
    },
    "para-provide-the-store-and": {
      "en": "Provide the store and inject it into the component:\r",
      "fr": "Fournissez le store et injectez-le dans le composant :\r",
      "lb": "Stellt de Store zur Verfügung an injizéiert en an de Komponent:\r"
    },
    "para-for-collections-withentities-gives": {
      "en": "For collections, `withEntities` gives a normalized, ready-to-use shape:\r",
      "fr": "Pour les collections, `withEntities` fournit une forme normalisée prête à\r\nl'emploi :\r",
      "lb": "Fir Kollektiounen liwwert `withEntities` eng normaliséiert, asazbereet Form:\r"
    },
    "para-for-complex-asynchronous-orchestration": {
      "en": "For complex asynchronous orchestration, the classic `@ngrx/effects` still\r\nexcels; `createEffect` turns streams of actions into side effects.\r",
      "fr": "Pour une orchestration asynchrone complexe, le classique `@ngrx/effects`\r\nexcelle toujours ; `createEffect` transforme des flux d'actions en effets de\r\nbord.\r",
      "lb": "Fir komplex asynchron Orchestréierung exceléiert de klassesche `@ngrx/effects`\r\nëmmer nach; `createEffect` mécht aus Action-Stréim Säiteneffekter.\r"
    },
    "para-signalstore-is-the-modern": {
      "en": "SignalStore is the modern default for most state; reach for `@ngrx/effects`\r\nwhen you need advanced async flows.\r",
      "fr": "SignalStore est le choix moderne par défaut pour la plupart des états ;\r\nutilisez `@ngrx/effects` quand vous avez besoin de flux asynchrones avancés.\r",
      "lb": "SignalStore ass de modernen Standard fir déi meescht Zoustand; gräift op\r\n`@ngrx/effects` zeréck, wann Dir fortgeschratt asynchron Flëss braucht.\r"
    },
    "a-modern-architecture": {
      "en": "## A modern architecture\r",
      "fr": "## Une architecture moderne\r",
      "lb": "## Eng modern Architektur\r"
    },
    "para-a-clean-scalable-angular": {
      "en": "A clean, scalable Angular app today tends to look like this:\r",
      "fr": "Une application Angular propre et scalable aujourd'hui ressemble à ceci :\r",
      "lb": "Eng propper, skaléierbar Angular-App gesäit haut ongeféier sou aus:\r"
    },
    "list-standalone-everything-no-ngmodule-explicit-imports": {
      "en": "- **Standalone everything** — no `NgModule`, explicit `imports`.\r\n- **Signals for state** — `signal`/`computed`/`effect` plus `model`/`input`.\r\n- **`inject()`** everywhere — composable, testable services.\r\n- **Zoneless + `OnPush`** — predictable change detection.\r\n- **Functional guards/interceptors** — thin, typed routing layer.\r\n- **Lazy routes + `@defer`** — fast initial load.\r\n- **Feature-based folders** — group by domain, not by layer.\r",
      "fr": "- **Tout en standalone** — pas de `NgModule`, des `imports` explicites.\r\n- **Signals pour l'état** — `signal`/`computed`/`effect` plus `model`/`input`.\r\n- **`inject()` partout** — des services composables et testables.\r\n- **Zoneless + `OnPush`** — une détection de changements prévisible.\r\n- **Guards/interceptors fonctionnels** — une couche de routing fine et typée.\r\n- **Routes lazy + `@defer`** — un chargement initial rapide.\r\n- **Dossiers par fonctionnalité** — grouper par domaine, pas par couche.\r",
      "lb": "- **Alles standalone** — keen `NgModule`, explizit `imports`.\r\n- **Signals fir den Zoustand** — `signal`/`computed`/`effect` plus `model`/`input`.\r\n- **`inject()` iwwerall** — komponéierbar, testbar Servicer.\r\n- **Zoneless + `OnPush`** — virauszeseen Ännerungsdetektioun.\r\n- **Funktionell Guards/Interceptors** — eng dënn, typiséiert Routing-Schicht.\r\n- **Lazy-Routen + `@defer`** — séieren initiale Lueden.\r\n- **Ordner no Feature** — no Domain gruppéieren, net no Schicht.\r"
    },
    "version-history": {
      "en": "## Version history\r",
      "fr": "## Historique des versions\r",
      "lb": "## Versiounsgeschicht\r"
    },
    "para-a-condensed-timeline-of": {
      "en": "A condensed timeline of the major releases and their headline changes.\r",
      "fr": "Une chronologie condensée des versions majeures et de leurs changements clés.\r",
      "lb": "Eng kompakt Chronologie vun de grousse Versiounen an hire Kärännerungen.\r"
    },
    "para-version-release": {
      "en": "| Version | Release | Breaking changes / news |\r\n| ------- | ------- | ----------------------- |\r\n| 2.0 | Sep 2016 | Complete rewrite from AngularJS: TypeScript, components, DI |\r\n| 4.0 | Mar 2017 | Version jump (no 3.x); new `HttpClient`; animation package |\r\n| 5.0 | Nov 2017 | Build optimizer; `HttpClient` stable |\r\n| 6.0 | May 2018 | Angular CLI workspaces; RxJS 6; tree-shakable providers |\r\n| 7.0 | Oct 2018 | CLI prompts; CDK drag & drop and virtual scrolling |\r\n| 8.0 | May 2019 | Ivy (preview); differential loading; dynamic import for lazy routes |\r\n| 9.0 | Feb 2020 | Ivy enabled by default; TestBed improvements |\r\n| 10.0 | Jun 2020 | TypeScript 3.9; new date range picker |\r\n| 11.0 | Nov 2020 | Hot module replacement; stricter types |\r\n| 12.0 | May 2021 | View Engine removed; Sass modern API; strict mode default |\r\n| 13.0 | Nov 2021 | IE11 dropped; RxJS 7; no more `entryComponents` |\r\n| 14.0 | Jun 2022 | Standalone components (preview); typed reactive forms; `inject()` |\r\n| 15.0 | Nov 2022 | Standalone stable; `NgModule` optional; directive composition API |\r\n| 16.0 | May 2023 | Signals (preview); esbuild dev server; required inputs |\r\n| 17.0 | Nov 2023 | Built-in control flow; `@defer`; standalone default |\r\n| 18.0 | May 2024 | Zoneless (experimental); `@let` variables; signal inputs/outputs |\r\n| 19.0 | Nov 2024 | Signals stable; `resource()`/`rxResource()`; `linkedSignal` |\r\n| 20.0 | May 2025 | Zoneless change detection stable (default for new apps) |\r\n| 21.0 | Nov 2025 | Signal and zoneless refinements |\r",
      "fr": "| Version | Sortie | Changements majeurs / breaking changes |\r\n| ------- | ------ | ------------------------------------- |\r\n| 2.0 | Sept 2016 | Réécriture complète depuis AngularJS : TypeScript, composants, DI |\r\n| 4.0 | Mars 2017 | Saut de version (pas de 3.x) ; nouveau `HttpClient` ; package d'animations |\r\n| 5.0 | Nov 2017 | Build optimizer ; `HttpClient` stable |\r\n| 6.0 | Mai 2018 | Workspaces Angular CLI ; RxJS 6 ; providers tree-shakables |\r\n| 7.0 | Oct 2018 | Prompts CLI ; drag & drop CDK et virtual scrolling |\r\n| 8.0 | Mai 2019 | Ivy (aperçu) ; differential loading ; import dynamique pour les routes lazy |\r\n| 9.0 | Fév 2020 | Ivy activé par défaut ; améliorations TestBed |\r\n| 10.0 | Juin 2020 | TypeScript 3.9 ; nouveau sélecteur de plage de dates |\r\n| 11.0 | Nov 2020 | Hot module replacement ; types plus stricts |\r\n| 12.0 | Mai 2021 | View Engine supprimé ; API moderne de Sass ; mode strict par défaut |\r\n| 13.0 | Nov 2021 | Support IE11 abandonné ; RxJS 7 ; plus d'`entryComponents` |\r\n| 14.0 | Juin 2022 | Composants standalone (aperçu) ; formulaires réactifs typés ; `inject()` |\r\n| 15.0 | Nov 2022 | Standalone stable ; `NgModule` optionnel ; directive composition API |\r\n| 16.0 | Mai 2023 | Signals (aperçu) ; serveur de dev esbuild ; inputs requis |\r\n| 17.0 | Nov 2023 | Flux de contrôle intégré ; `@defer` ; standalone par défaut |\r\n| 18.0 | Mai 2024 | Zoneless (expérimental) ; variables `@let` ; inputs/outputs signals |\r\n| 19.0 | Nov 2024 | Signals stables ; `resource()`/`rxResource()` ; `linkedSignal` |\r\n| 20.0 | Mai 2025 | Détection zoneless stable (par défaut pour les nouvelles apps) |\r\n| 21.0 | Nov 2025 | Améliorations signals et zoneless |\r",
      "lb": "| Versioun | Release | Breaking Changes / Neiegkeeten |\r\n| -------- | ------- | ------------------------------ |\r\n| 2.0 | Sept 2016 | Komplett Neischreifung vun AngularJS: TypeScript, Komponenten, DI |\r\n| 4.0 | Mäerz 2017 | Versiounssprong (keng 3.x); neien `HttpClient`; Animatiouns-Package |\r\n| 5.0 | Nov 2017 | Build Optimizer; `HttpClient` stabil |\r\n| 6.0 | Mee 2018 | Angular CLI Workspaces; RxJS 6; tree-shakable Providers |\r\n| 7.0 | Okt 2018 | CLI Prompts; CDK Drag & Drop a Virtual Scrolling |\r\n| 8.0 | Mee 2019 | Ivy (Virschau); Differential Loading; dynameschen Import fir Lazy-Routen |\r\n| 9.0 | Feb 2020 | Ivy standardméisseg aktivéiert; TestBed Verbesserungen |\r\n| 10.0 | Juni 2020 | TypeScript 3.9; neien Datumsberäich-Picker |\r\n| 11.0 | Nov 2020 | Hot Module Replacement; méi streng Typpen |\r\n| 12.0 | Mee 2021 | View Engine ewechgeholl; modern Sass API; Strict Mode standardméisseg |\r\n| 13.0 | Nov 2021 | IE11 Ënnerstëtzung gestrach; RxJS 7; keng `entryComponents` méi |\r\n| 14.0 | Juni 2022 | Standalone-Komponenten (Virschau); typiséiert reaktiv Formulairen; `inject()` |\r\n| 15.0 | Nov 2022 | Standalone stabil; `NgModule` fakultativ; Directive Composition API |\r\n| 16.0 | Mee 2023 | Signals (Virschau); esbuild Dev-Server; erfuerderlech Inputs |\r\n| 17.0 | Nov 2023 | Agebaute Kontrollfloss; `@defer`; Standalone standardméisseg |\r\n| 18.0 | Mee 2024 | Zoneless (experimentell); `@let` Variabelen; Signal Inputs/Outputs |\r\n| 19.0 | Nov 2024 | Signals stabil; `resource()`/`rxResource()`; `linkedSignal` |\r\n| 20.0 | Mee 2025 | Zoneless Ännerungsdetektioun stabil (standardméisseg fir nei Apps) |\r\n| 21.0 | Nov 2025 | Signal- a Zoneless-Verfeinerungen |\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-the-move-to-signals": {
      "en": "The move to signals, standalone components, and zoneless detection is the\r\nbiggest shift in Angular's history. Adopting it — signals for state, `inject()`\r\nfor dependencies, functional routing, and lazy loading — gives you smaller\r\nbundles, fewer change-detection bugs, and code that is far easier to reason\r\nabout.\r",
      "fr": "Le passage aux signals, aux composants standalone et à la détection zoneless est\r\nle plus grand bouleversement de l'histoire d'Angular. L'adopter — signals pour\r\nl'état, `inject()` pour les dépendances, routing fonctionnel et lazy loading —\r\nvous donne des bundles plus petits, moins de bugs de détection de changements et\r\nun code bien plus facile à raisonner.\r",
      "lb": "De Wiessel op Signals, Standalone-Komponenten an Zoneless-Detektioun ass dee\r\ngréissten Ëmbroch an der Geschicht vum Angular. En ze adoptéieren — Signals fir\r\nden Zoustand, `inject()` fir Ofhängegkeeten, funktionell Routing a Lazy Loading —\r\ngëtt Iech méi kleng Bundles, manner Ännerungsdetektiouns-Bugs an Code, dee vill\r\nméi einfach ze verstoen ass.\r"
    }
  },
  "design-patterns-for-developers": {
    "para-design-patterns-are-reusable": {
      "en": "Design patterns are reusable solutions to common problems. They are not\r\ncopy-paste templates — they are ideas you adapt to your own situation. This\r\nguide walks through ten of the most useful ones, grouped by what they do.\r",
      "fr": "Les design patterns sont des solutions réutilisables à des problèmes courants.\r\nCe ne sont pas des modèles à copier-coller — ce sont des idées que l'on adapte à\r\nsa propre situation. Ce guide présente dix des plus utiles, regroupés par rôle.\r",
      "lb": "Design Patterns si widderverwendbar Léisunge fir heefeg Problemer. Si si keng\r\nCopy-Paste-Schabloune — si sinn Iddien, déi een un seng eege Situatioun upasst.\r\nDëse Guide geet duerch zéng vun de nëtzlechsten, gruppéiert no hirer Roll.\r"
    },
    "strategy": {
      "en": "## Strategy\r",
      "fr": "## Strategy (Stratégie)\r",
      "lb": "## Strategy (Strategie)\r"
    },
    "para-the-idea-pick-an": {
      "en": "**The idea:** pick an algorithm at runtime without changing the code that calls\r\nit.\r",
      "fr": "**L'idée :** choisir un algorithme à l'exécution sans changer le code qui\r\nl'appelle.\r",
      "lb": "**D'Iddi:** en Algorithmus zur Laufzäit wielen, ouni de Code z'änneren, deen en\r\noprifft.\r"
    },
    "para-think-of-a-checkout": {
      "en": "Think of a checkout page: the customer can pay by card, PayPal, or bank\r\ntransfer. Each option is a different strategy behind the same button.\r",
      "fr": "Pensez à une page de paiement : le client peut payer par carte, PayPal ou\r\nvirement. Chaque option est une stratégie différente derrière le même bouton.\r",
      "lb": "Denkt un eng Bezuel-Säit: de Client kann mat Kaart, PayPal oder Iwwerweisung\r\nbezuelen. All Optioun ass eng aner Strategie hannert dem selwechte Knäppchen.\r"
    },
    "decorator": {
      "en": "## Decorator\r",
      "fr": "## Decorator (Décorateur)\r",
      "lb": "## Decorator (Dekorateur)\r"
    },
    "para-the-idea-add-behavior": {
      "en": "**The idea:** add behavior to an object by wrapping it, layer by layer.\r",
      "fr": "**L'idée :** ajouter un comportement à un objet en l'enveloppant, couche par\r\ncouche.\r",
      "lb": "**D'Iddi:** engem Objet Verhalen derbäiginn, andeems een en a Schichten ëmwéckelt.\r"
    },
    "para-like-adding-toppings-to": {
      "en": "Like adding toppings to a coffee: you start with an espresso and keep piling on\r\nmilk, sugar, or caramel without changing the espresso itself.\r",
      "fr": "Comme ajouter des suppléments à un café : on part d'un espresso et on empile le\r\nlait, le sucre ou le caramel sans modifier l'espresso lui-même.\r",
      "lb": "Wéi ee Kaffi mat Extraen: een fänkt mat engem Espresso un a schicht Mëllech,\r\nZocker oder Karamell drop, ouni den Espresso selwer z'änneren.\r"
    },
    "observer": {
      "en": "## Observer\r",
      "fr": "## Observer (Observateur)\r",
      "lb": "## Observer (Observateur)\r"
    },
    "para-the-idea-one-object": {
      "en": "**The idea:** one object notifies many listeners when something changes.\r",
      "fr": "**L'idée :** un objet notifie plusieurs abonnés lorsqu'il change.\r",
      "lb": "**D'Iddi:** en Objet informéiert méi Lauschterer, wann eppes sech ännert.\r"
    },
    "para-like-a-newsletter-people": {
      "en": "Like a newsletter: people subscribe, and everyone gets an update when a new\r\nedition is published.\r",
      "fr": "Comme une newsletter : les gens s'abonnent et chacun reçoit une mise à jour à\r\nchaque nouvelle édition.\r",
      "lb": "Wéi en Newsletter: d'Leit abonnéieren sech, an all kritt en Update, wann eng nei\r\nEditioun erauskënnt.\r"
    },
    "chain-of-responsibility": {
      "en": "## Chain of Responsibility\r",
      "fr": "## Chaîne de responsabilité (Chain of Responsibility)\r",
      "lb": "## Chain of Responsibility (Verantwortungskette)\r"
    },
    "para-the-idea-pass-a": {
      "en": "**The idea:** pass a request along a chain of handlers until one of them\r\nhandles it.\r",
      "fr": "**L'idée :** faire passer une requête le long d'une chaîne de gestionnaires\r\njusqu'à ce que l'un d'eux la traite.\r",
      "lb": "**D'Iddi:** eng Ufro laanscht eng Kette vun Handler weiderginn, bis een se\r\nbehandelt.\r"
    },
    "para-like-customer-support-a": {
      "en": "Like customer support: a ticket is escalated level by level until someone can\r\nresolve it. Each handler decides whether to process the request or forward it.\r",
      "fr": "Comme le support client : un ticket est escaladé niveau par niveau jusqu'à ce\r\nque quelqu'un puisse le résoudre. Chaque gestionnaire décide de traiter la\r\nrequête ou de la transmettre.\r",
      "lb": "Wéi de Clientssupport: en Ticket gëtt Niveau fir Niveau eskaléiert, bis een e\r\nléise kann. All Handler entscheet, ob en d'Ufro behandelt oder weidergëtt.\r"
    },
    "para-each-handler-only-knows": {
      "en": "Each handler only knows about the next one, so the chain can be reordered or\r\nextended without changing existing handlers.\r",
      "fr": "Chaque gestionnaire ne connaît que le suivant, donc la chaîne peut être\r\nréordonnée ou étendue sans modifier les gestionnaires existants.\r",
      "lb": "All Handler kennt nëmmen deen nächsten, sou datt d'Kette ëmgeordert oder\r\nerweidert ka ginn, ouni déi existéierend Handler z'änneren.\r"
    },
    "singleton": {
      "en": "## Singleton\r",
      "fr": "## Singleton\r",
      "lb": "## Singleton\r"
    },
    "para-the-idea-guarantee-there": {
      "en": "**The idea:** guarantee there is exactly one instance of a class.\r",
      "fr": "**L'idée :** garantir qu'il n'existe qu'une seule instance d'une classe.\r",
      "lb": "**D'Iddi:** garantéieren, datt et genee eng Instanz vun enger Klass gëtt.\r"
    },
    "para-like-a-single-settings": {
      "en": "Like a single settings file for an app — everyone reads the same one.\r",
      "fr": "Comme un fichier de configuration unique pour une application — tout le monde\r\nlit le même.\r",
      "lb": "Wéi eng eenzeg Astellungsdatei fir eng App — jidderee liest déi selwecht.\r"
    },
    "facade": {
      "en": "## Facade\r",
      "fr": "## Facade (Façade)\r",
      "lb": "## Facade (Fassad)\r"
    },
    "para-the-idea-hide-a": {
      "en": "**The idea:** hide a complex system behind one simple front door.\r",
      "fr": "**L'idée :** masquer un système complexe derrière une porte d'entrée simple.\r",
      "lb": "**D'Iddi:** e komplext System hannert enger einfacher Entrée verstoppen.\r"
    },
    "para-like-a-car-ignition": {
      "en": "Like a car ignition: you turn one key, and many parts work together underneath.\r",
      "fr": "Comme le contact d'une voiture : on tourne une clé et de nombreux éléments\r\ntravaillent ensemble en dessous.\r",
      "lb": "Wéi den Zündschlëssel vun engem Auto: een dréint ee Schlëssel a vill Deeler\r\nschaffen zesummen ënnendrënner.\r"
    },
    "builder": {
      "en": "## Builder\r",
      "fr": "## Builder (Monteur)\r",
      "lb": "## Builder (Monteur)\r"
    },
    "para-the-idea-build-a": {
      "en": "**The idea:** build a complex object step by step instead of one giant\r\nconstructor.\r",
      "fr": "**L'idée :** construire un objet complexe étape par étape plutôt qu'avec un\r\nénorme constructeur.\r",
      "lb": "**D'Iddi:** e komplext Objet Schrëtt fir Schrëtt bauen, amplaz mat engem risege\r\nKonstruktor.\r"
    },
    "para-like-ordering-a-custom": {
      "en": "Like ordering a custom burger: pick the bun, the cheese, the extras — then\r\nbuild it.\r",
      "fr": "Comme commander un burger personnalisé : on choisit le pain, le fromage, les\r\nextras — puis on assemble.\r",
      "lb": "Wéi ee personaliséierte Burger bestellen: een wielt d'Brout, de Kéis, d'Extraen\r\n— an da gëtt zesummegebaut.\r"
    },
    "adapter": {
      "en": "## Adapter\r",
      "fr": "## Adapter (Adaptateur)\r",
      "lb": "## Adapter (Adaptateur)\r"
    },
    "para-the-idea-make-two": {
      "en": "**The idea:** make two incompatible interfaces work together.\r",
      "fr": "**L'idée :** faire fonctionner ensemble deux interfaces incompatibles.\r",
      "lb": "**D'Iddi:** zwee inkompatibel Interfaces zesumme schaffe loossen.\r"
    },
    "para-like-a-travel-plug": {
      "en": "Like a travel plug adapter that lets your charger fit a foreign socket.\r",
      "fr": "Comme un adaptateur de prise de voyage qui permet à votre chargeur de se\r\nbrancher sur une prise étrangère.\r",
      "lb": "Wéi e Reesstecker-Adapter, dee äre Ladegerät an eng auslännesch Steckdous\r\npasst.\r"
    },
    "mvc-model-view-controller": {
      "en": "## MVC (Model-View-Controller)\r",
      "fr": "## MVC (Model-View-Controller)\r",
      "lb": "## MVC (Model-View-Controller)\r"
    },
    "para-the-idea-separate-data": {
      "en": "**The idea:** separate data, presentation, and control logic.\r",
      "fr": "**L'idée :** séparer les données, la présentation et la logique de contrôle.\r",
      "lb": "**D'Iddi:** d'Donnéeën, d'Duerstellung an d'Steierungslogik trennen.\r"
    },
    "para-the-model-holds-the": {
      "en": "The **model** holds the data, the **view** shows it, and the **controller**\r\nreacts to user input.\r",
      "fr": "Le **model** détient les données, la **view** les affiche et le **controller**\r\nréagit aux actions de l'utilisateur.\r",
      "lb": "De **Model** hält d'Donnéeën, d'**View** weist se un, an de **Controller**\r\nreagéiert op d'Aktiounen vum Benotzer.\r"
    },
    "mvvm-model-view-viewmodel": {
      "en": "## MVVM (Model-View-ViewModel)\r",
      "fr": "## MVVM (Model-View-ViewModel)\r",
      "lb": "## MVVM (Model-View-ViewModel)\r"
    },
    "para-the-idea-bind-the": {
      "en": "**The idea:** bind the view directly to a **view model**, so the UI updates\r\nautomatically when data changes.\r",
      "fr": "**L'idée :** lier directement la vue à un **view model**, afin que l'interface se\r\nmette à jour automatiquement quand les données changent.\r",
      "lb": "**D'Iddi:** d'View direkt un e **ViewModel** bannen, sou datt d'Interface sech\r\nautomatesch aktualiséiert, wann d'Donnéeë sech änneren.\r"
    },
    "para-popular-in-desktop-and": {
      "en": "Popular in desktop and mobile apps, where a button click changes a property and\r\nthe screen reflects it without manual wiring.\r",
      "fr": "Populaire dans les applications desktop et mobiles : un clic modifie une\r\npropriété et l'écran le reflète sans câblage manuel.\r",
      "lb": "Beléift an Desktop- a Mobil-Applikatiounen: ee Klick ännert eng Propriétéit an\r\nden Ecran spigelt dat, ouni manuell Verdrotung.\r"
    },
    "cqrs-command-query-responsibility-segregation": {
      "en": "## CQRS (Command Query Responsibility Segregation)\r",
      "fr": "## CQRS (Séparation commande/requête)\r",
      "lb": "## CQRS (Trennung vu Kommando an Ufro)\r"
    },
    "para-the-idea-separate-writes": {
      "en": "**The idea:** separate writes (commands) from reads (queries).\r",
      "fr": "**L'idée :** séparer les écritures (commandes) des lectures (requêtes).\r",
      "lb": "**D'Iddi:** d'Schreiwen (Kommandoen) vum Liesen (Ufroen) trennen.\r"
    },
    "para-reads-and-writes-often": {
      "en": "Reads and writes often need different models and different storage. Splitting\r\nthem keeps each side simple and scalable.\r",
      "fr": "Les lectures et les écritures ont souvent besoin de modèles et de stockages\r\ndifférents. Les séparer garde chaque côté simple et scalable.\r",
      "lb": "Liesen a Schreiwen brauchen dacks ënnerschiddlech Modeller a Späicheren. Se ze\r\ntrennen hält all Säit einfach a skaléierbar.\r"
    },
    "event-sourcing": {
      "en": "## Event Sourcing\r",
      "fr": "## Event Sourcing (Sourcing d'événements)\r",
      "lb": "## Event Sourcing (Event-Sourcing)\r"
    },
    "para-the-idea-store-every": {
      "en": "**The idea:** store every state change as an immutable event, and rebuild the\r\ncurrent state by replaying those events.\r",
      "fr": "**L'idée :** stocker chaque changement d'état comme un événement immuable, et\r\nreconstruire l'état courant en rejouant ces événements.\r",
      "lb": "**D'Iddi:** all Zoustandsännerung als immutabel Event späicheren, an den\r\naktuellen Zoustand nei opbauen, andeems een dës Eventen nei ofspillt.\r"
    },
    "para-instead-of-saving-the": {
      "en": "Instead of saving the current balance, you save \"deposited 100\", \"withdrew 40\".\r\nThe balance is a projection you can recompute at any time.\r",
      "fr": "Au lieu d'enregistrer le solde actuel, vous enregistrez « déposé 100 »,\r\n« retiré 40 ». Le solde est une projection que vous pouvez recalculer à tout\r\nmoment.\r",
      "lb": "Amplaz deen aktuelle Saldo ze späicheren, späichert Dir « 100 ageluecht »,\r\n« 40 ofgehuewen ». De Saldo ass eng Projektioun, déi Dir zu all Moment nei\r\nbereche kënnt.\r"
    },
    "para-event-sourcing-gives-you": {
      "en": "Event sourcing gives you a full audit trail, makes state reproducible, and\r\npairs naturally with CQRS — but it costs more storage and complexity.\r",
      "fr": "Le sourcing d'événements offre une piste d'audit complète, rend l'état\r\nreproductible et se marie naturellement avec CQRS — mais il coûte plus de\r\nstockage et de complexité.\r",
      "lb": "Event Sourcing gëtt Iech eng komplett Audit-Spur, mécht den Zoustand\r\nreproduzéierbar a passt natierlech mat CQRS zesummen — mee et kascht méi\r\nSpäicher a Komplexitéit.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-you-will-not-use": {
      "en": "You will not use every pattern every day — but recognising them helps you read\r\nother people's code, discuss designs clearly, and pick the right tool when a\r\nproblem looks familiar.\r",
      "fr": "Vous n'utiliserez pas chaque pattern tous les jours — mais les reconnaître vous\r\naide à lire le code des autres, à discuter clairement des conceptions et à\r\nchoisir le bon outil quand un problème vous semble familier.\r",
      "lb": "Dir wäert net all Pattern all Dag benotzen — awer se erëmzefannen hëlleft Iech,\r\nde Code vun aneren ze liesen, iwwer Designen kloer ze diskutéieren an dat\r\nrichtegt Handwierksgeschir ze wielen, wann e Problem Iech vertraut virkënnt.\r"
    }
  },
  "designing-a-ci-cd-pipeline": {
    "para-automating-your-delivery-pipeline": {
      "en": "Automating your delivery pipeline removes manual steps and makes every merge\r\nreproducible. Here is the pipeline I use for side projects.\r",
      "fr": "Automatiser votre pipeline de livraison supprime les étapes manuelles et rend\r\nchaque merge reproductible. Voici le pipeline que j'utilise pour mes projets\r\npersonnels.\r",
      "lb": "Äre Delivery-Pipeline ze automatiséieren ewechzehuelen manuell Schrëtt a mécht\r\nall Merge reproduzéierbar. Hei ass de Pipeline, deen ech fir Nieweprojeten\r\nbenotzen.\r"
    },
    "overview": {
      "en": "## Overview\r",
      "fr": "## Vue d'ensemble\r",
      "lb": "## Iwwerbléck\r"
    },
    "the-workflow-file": {
      "en": "## The workflow file\r",
      "fr": "## Le fichier de workflow\r",
      "lb": "## D'Workflow-Datei\r"
    },
    "release-process": {
      "en": "## Release process\r",
      "fr": "## Processus de release\r",
      "lb": "## Release-Prozess\r"
    },
    "para-releases-are-cut-from": {
      "en": "Releases are cut from tags and follow a staged rollout.\r",
      "fr": "Les releases sont créées à partir de tags et suivent un déploiement progressif.\r",
      "lb": "Releases ginn aus Tags geschnidden a verfollegen e stufenweise Rollout.\r"
    },
    "rollback-sequence": {
      "en": "## Rollback sequence\r",
      "fr": "## Séquence de rollback\r",
      "lb": "## Rollback-Sequenz\r"
    },
    "para-if-a-release-breaks": {
      "en": "If a release breaks, the rollback is fully automated.\r",
      "fr": "Si une release casse, le rollback est entièrement automatisé.\r",
      "lb": "Wann eng Release brécht, ass de Rollback komplett automatiséiert.\r"
    },
    "para-keep-the-pipeline-fast": {
      "en": "Keep the pipeline fast, deterministic, and observable — everything else follows.\r",
      "fr": "Gardez le pipeline rapide, déterministe et observable — tout le reste suit.\r",
      "lb": "Haalt de Pipeline séier, deterministesch an observéierbar — alles anert kënnt\r\ndann eleng.\r"
    }
  },
  "java-spring-ecosystem-for-experts": {
    "para-java-keeps-getting-more": {
      "en": "Java keeps getting more concise, and the Spring ecosystem keeps removing\r\nboilerplate. This guide covers the language features and Spring modules an\r\nexpert backend developer uses every day, then closes with a version timeline.\r",
      "fr": "Java ne cesse de devenir plus concis, et l'écosystème Spring ne cesse de\r\nsupprimer le boilerplate. Ce guide couvre les fonctionnalités du langage et les\r\nmodules Spring qu'un développeur backend expert utilise au quotidien, puis se\r\ntermine par une chronologie des versions.\r",
      "lb": "Java gëtt ëmmer méi kompakt, an den Spring-Ecosystem hëlt ëmmer méi Boilerplate\r\newech. Dëse Guide deckt d'Sproochfeatures an d'Spring-Moduler of, déi en\r\nExpert-Backend-Entwéckler all Dag benotzt, a schléisst mat enger\r\nVersiounschronologie.\r"
    },
    "modern-java": {
      "en": "## Modern Java\r",
      "fr": "## Java moderne\r",
      "lb": "## Modernt Java\r"
    },
    "lambdas": {
      "en": "### Lambdas\r",
      "fr": "### Lambdas\r",
      "lb": "### Lambdas\r"
    },
    "para-a-lambda-is-a": {
      "en": "A lambda is a compact implementation of a functional interface (an interface\r\nwith a single abstract method). It powers the Stream API and Spring's\r\nfunctional DSLs.\r",
      "fr": "Un lambda est une implémentation compacte d'une interface fonctionnelle (une\r\ninterface à une seule méthode abstraite). Il alimente l'API Stream et les DSL\r\nfonctionnels de Spring.\r",
      "lb": "E Lambda ass eng kompakt Ëmsetzung vun engem funktionellen Interface (en\r\nInterface mat enger eenzeger abstrakter Method). Et dreift d'Stream API an déi\r\nfunktionell DSLen vu Spring.\r"
    },
    "para-the-jdk-ships-the": {
      "en": "The JDK ships the common functional interfaces, so you rarely write your own.\r",
      "fr": "Le JDK fournit les interfaces fonctionnelles courantes, vous en écrivez donc\r\nrarement.\r",
      "lb": "D'JDK liwwert déi heefeg funktionell Interfaces, Dir schreift se also selten.\r"
    },
    "streams": {
      "en": "### Streams\r",
      "fr": "### Streams\r",
      "lb": "### Streams\r"
    },
    "para-a-stream-is-a": {
      "en": "A stream is a pipeline over a collection: a source, a chain of lazy\r\nintermediate operations, and one terminal operation that runs it.\r",
      "fr": "Un stream est un pipeline sur une collection : une source, une chaîne\r\nd'opérations intermédiaires paresseuses, et une opération terminale qui\r\nl'exécute.\r",
      "lb": "E Stream ass e Pipeline iwwer eng Kollektioun: eng Quell, eng Kette vu faulen\r\nZwëschenoperatiounen, an eng terminal Operatioun, déi e leeft.\r"
    },
    "para-common-terminal-operations": {
      "en": "Common terminal operations:\r",
      "fr": "Opérations terminales courantes :\r",
      "lb": "Heefeg terminal Operatiounen:\r"
    },
    "para-filter-map-sorted-distinct": {
      "en": "`filter`, `map`, `sorted`, `distinct`, and `limit` are lazy; `toList`,\r\n`collect`, `reduce`, and `forEach` trigger the pipeline. Streams encourage\r\nimmutable, declarative data processing.\r",
      "fr": "`filter`, `map`, `sorted`, `distinct` et `limit` sont paresseuses ; `toList`,\r\n`collect`, `reduce` et `forEach` déclenchent le pipeline. Les streams\r\nencouragent un traitement de données immuable et déclaratif.\r",
      "lb": "`filter`, `map`, `sorted`, `distinct` a `limit` si faul; `toList`, `collect`,\r\n`reduce` a `forEach` starten de Pipeline. Streams encouragéieren immutable,\r\ndeklarativ Dateveraarbechtung.\r"
    },
    "records": {
      "en": "### Records\r",
      "fr": "### Records\r",
      "lb": "### Records\r"
    },
    "para-records-give-you-immutable": {
      "en": "Records give you immutable data carriers with no boilerplate.\r",
      "fr": "Les records offrent des porteurs de données immuables sans boilerplate.\r",
      "lb": "Records ginn Iech immutable Daten-Droen ouni Boilerplate.\r"
    },
    "pattern-matching": {
      "en": "### Pattern matching\r",
      "fr": "### Pattern matching\r",
      "lb": "### Pattern Matching\r"
    },
    "para-instanceof-narrows-the-variable": {
      "en": "`instanceof` narrows the variable in place.\r",
      "fr": "`instanceof` rétrécit la variable sur place.\r",
      "lb": "`instanceof` schränkt d'Variabel direkt an.\r"
    },
    "para-switch-expressions-combine-with": {
      "en": "Switch expressions combine with pattern matching for exhaustive, typed logic.\r",
      "fr": "Les expressions switch se combinent au pattern matching pour une logique typée\r\net exhaustive.\r",
      "lb": "Switch Expressions kombinéiere sech mam Pattern Matching fir exhaustiv,\r\ntypiséiert Logik.\r"
    },
    "sealed-classes": {
      "en": "### Sealed classes\r",
      "fr": "### Classes scellées\r",
      "lb": "### Sealed Classes\r"
    },
    "para-sealed-hierarchies-declare-every": {
      "en": "Sealed hierarchies declare every allowed subtype, so the compiler can check\r\nexhaustiveness.\r",
      "fr": "Les hiérarchies scellées déclarent chaque sous-type autorisé, pour que le\r\ncompilateur puisse vérifier l'exhaustivité.\r",
      "lb": "Sealed Hierarchie deklaréieren all erlaabten Ënnertyp, sou datt de Compiler\r\nd'Exhaustivitéit ka kontrolléieren.\r"
    },
    "virtual-threads": {
      "en": "### Virtual threads\r",
      "fr": "### Threads virtuels\r",
      "lb": "### Virtuell Threads\r"
    },
    "para-project-loom-stable-since": {
      "en": "Project Loom (stable since Java 21) makes blocking code scale with cheap,\r\nlightweight threads.\r",
      "fr": "Le projet Loom (stable depuis Java 21) fait évoluer le code bloquant avec des\r\nthreads légers et peu coûteux.\r",
      "lb": "De Projet Loom (stabil zënter Java 21) léisst blockéierende Code mat liichten,\r\nbëllege Threads skaléieren.\r"
    },
    "spring-boot": {
      "en": "## Spring Boot\r",
      "fr": "## Spring Boot\r",
      "lb": "## Spring Boot\r"
    },
    "para-spring-boot-wires-an": {
      "en": "Spring Boot wires an application from a single annotation and sensible\r\ndefaults, configured via `application.yml`.\r",
      "fr": "Spring Boot câble une application à partir d'une seule annotation et de valeurs\r\npar défaut sensées, configurées via `application.yml`.\r",
      "lb": "Spring Boot verdrot eng Applikatioun aus enger eenzeger Annotatioun a vernünftege\r\nStandardwäerter, konfiguréiert iwwer `application.yml`.\r"
    },
    "para-starters-pull-in-a": {
      "en": "Starters pull in a whole feature (web, data, security) with one dependency, and\r\nauto-configuration adapts to what is on the classpath.\r",
      "fr": "Les starters apportent toute une fonctionnalité (web, data, security) avec une\r\nseule dépendance, et l'auto-configuration s'adapte à ce qui est sur le classpath.\r",
      "lb": "Starters bréngen eng ganz Funktioun (Web, Data, Security) mat enger eenzeger\r\nOfhängegkeet, an d'Auto-Configuratioun passt sech un dat un, wat um Classpath\r\nass.\r"
    },
    "spring-beans-and-components": {
      "en": "## Spring beans and components\r",
      "fr": "## Beans et composants Spring\r",
      "lb": "## Spring Beans a Komponenten\r"
    },
    "para-a-bean-is-any": {
      "en": "A **bean** is any object managed by Spring's IoC container. **Components** are\r\nclasses auto-detected by component scanning through stereotype annotations.\r",
      "fr": "Un **bean** est tout objet géré par le conteneur IoC de Spring. Les\r\n**composants** sont des classes auto-détectées par le scan de composants via des\r\nannotations stéréotypes.\r",
      "lb": "E **Bean** ass all Objet, dee vum Spring IoC-Container geréiert gëtt.\r\n**Komponenten** si Klassen, déi duerch Component Scanning iwwer Stereotyp-\r\nAnnotatiounen automatesch fonnt ginn.\r"
    },
    "para-component-is-the-generic": {
      "en": "`@Component` is the generic stereotype; `@Service`, `@Repository`, and\r\n`@Controller` are specializations that add meaning and future behaviour.\r",
      "fr": "`@Component` est le stéréotype générique ; `@Service`, `@Repository` et\r\n`@Controller` sont des spécialisations qui ajoutent du sens et des\r\ncomportements futurs.\r",
      "lb": "`@Component` ass de generesche Stereotyp; `@Service`, `@Repository` an\r\n`@Controller` si Spezialisatiounen, déi Bedeitung an zukünftegt Verhalen\r\nderbäisetzen.\r"
    },
    "para-for-third-party-or-manually": {
      "en": "For third-party or manually constructed objects, declare a bean in a\r\n`@Configuration` class.\r",
      "fr": "Pour les objets tiers ou construits manuellement, déclarez un bean dans une\r\nclasse `@Configuration`.\r",
      "lb": "Fir Drëtt-Partei- oder manuell gebauten Objeten, deklaréiert e Bean an enger\r\n`@Configuration`-Klass.\r"
    },
    "para-inject-dependencies-through-the": {
      "en": "Inject dependencies through the constructor — the modern, testable default.\r",
      "fr": "Injectez les dépendances par le constructeur — le choix moderne et testable.\r",
      "lb": "Injizéiert Ofhängegkeeten iwwer de Konstruktor — de modernen, testbaren\r\nStandard.\r"
    },
    "para-autowired-is-the-older": {
      "en": "`@Autowired` is the older, annotation-driven way. It can target fields,\r\nsetters, or constructors.\r",
      "fr": "`@Autowired` est l'ancienne méthode pilotée par annotations. Elle peut cibler les\r\nchamps, les setters ou les constructeurs.\r",
      "lb": "`@Autowired` ass déi eeler, annotatiounsgedriwwen Aart. Et kann Felder, Setteren\r\noder Konstruktoren zielen.\r"
    },
    "para-field-and-setter-injection": {
      "en": "Field and setter injection are flexible but make dependencies mutable and\r\nharder to test. Prefer constructor injection — on a single constructor,\r\n`@Autowired` is even optional.\r",
      "fr": "L'injection par champ et par setter est flexible mais rend les dépendances\r\nmutables et plus difficiles à tester. Préférez l'injection par constructeur —\r\nsur un constructeur unique, `@Autowired` est même optionnel.\r",
      "lb": "Feld- a Setter-Injektioun si flexibel, maachen awer Ofhängegkeeten mutabel a\r\nméi schwéier ze testen. Léiwer Konstruktor-Injektioun — bei engem eenzege\r\nKonstruktor ass `@Autowired` souguer fakultativ.\r"
    },
    "para-when-several-beans-share": {
      "en": "When several beans share the same type, `@Qualifier` picks the right one.\r",
      "fr": "Quand plusieurs beans partagent le même type, `@Qualifier` choisit le bon.\r",
      "lb": "Wann méi Beans dee selwechten Typ deelen, wielt `@Qualifier` de richtegen aus.\r"
    },
    "para-the-qualifier-is-the": {
      "en": "The qualifier is the bean name — by default the class name with a lowercase\r\nfirst letter. You can set an explicit name with `@Service(\"paypal\")` or\r\n`@Bean(\"paypal\")`.\r",
      "fr": "Le qualifier est le nom du bean — par défaut le nom de classe avec une première\r\nlettre minuscule. Vous pouvez fixer un nom explicite avec `@Service(\"paypal\")`\r\nou `@Bean(\"paypal\")`.\r",
      "lb": "De Qualifier ass de Bean-Numm — standardméisseg de Klassennumm mat engem klengen\r\néischte Buschtaf. Dir kënnt en expliziten Numm mat `@Service(\"paypal\")` oder\r\n`@Bean(\"paypal\")` setzen.\r"
    },
    "para-spring-provides-several-bean": {
      "en": "Spring provides several bean scopes. `singleton` (the default) creates one\r\ninstance per container; `prototype` creates a new instance on every request;\r\nthe web scopes (`request`, `session`, `application`, `websocket`) are tied to a\r\nweb context.\r",
      "fr": "Spring propose plusieurs scopes de beans. `singleton` (par défaut) crée une\r\ninstance par conteneur ; `prototype` crée une nouvelle instance à chaque\r\ndemande ; les scopes web (`request`, `session`, `application`, `websocket`) sont\r\nliés à un contexte web.\r",
      "lb": "Spring bitt méi Bean-Scopes. `singleton` (de Standard) mécht eng Instanz pro\r\nContainer; `prototype` mécht bei all Ufro eng nei Instanz; d'Web-Scopes\r\n(`request`, `session`, `application`, `websocket`) sinn un e Web-Kontext gebonnen.\r"
    },
    "para-the-short-lived-scopes-request": {
      "en": "The short-lived scopes (`request`, `session`, `websocket`) need\r\n`proxyMode = ScopedProxyMode.TARGET_CLASS` so they can be injected into\r\nlonger-lived singletons.\r",
      "fr": "Les scopes à courte durée (`request`, `session`, `websocket`) nécessitent\r\n`proxyMode = ScopedProxyMode.TARGET_CLASS` pour pouvoir être injectés dans des\r\nsingletons à plus longue durée.\r",
      "lb": "Déi kuerzliewend Scopes (`request`, `session`, `websocket`) brauchen\r\n`proxyMode = ScopedProxyMode.TARGET_CLASS`, fir an méi laang liewend\r\nSingletons injizéiert ze kënne ginn.\r"
    },
    "para-spring-ships-shorthand-annotations": {
      "en": "Spring ships shorthand annotations for the common web scopes:\r",
      "fr": "Spring fournit des annotations raccourcies pour les scopes web courants :\r",
      "lb": "Spring liwwert Kierzel-Annotatiounen fir déi heefeg Web-Scopes:\r"
    },
    "para-requestscope-and-sessionscope-are": {
      "en": "`@RequestScope` and `@SessionScope` are shortcuts for the `@Scope` version with\r\n`proxyMode = ScopedProxyMode.TARGET_CLASS`. There is no shorthand for\r\n`prototype` or `websocket` — use `@Scope` for those.\r",
      "fr": "`@RequestScope` et `@SessionScope` sont des raccourcis pour la version `@Scope`\r\navec `proxyMode = ScopedProxyMode.TARGET_CLASS`. Il n'y a pas de raccourci pour\r\n`prototype` ou `websocket` — utilisez `@Scope` pour ceux-là.\r",
      "lb": "`@RequestScope` a `@SessionScope` si Kierzel fir d'`@Scope`-Versioun mat\r\n`proxyMode = ScopedProxyMode.TARGET_CLASS`. Et gëtt kee Kierzel fir `prototype`\r\noder `websocket` — benotzt `@Scope` fir déi.\r"
    },
    "para-here-is-the-complete": {
      "en": "Here is the complete set:\r",
      "fr": "Voici l'ensemble complet :\r",
      "lb": "Hei ass de komplette Set:\r"
    },
    "para-scope-lifetime": {
      "en": "| Scope | Lifetime | Shorthand |\r\n| --- | --- | --- |\r\n| `singleton` | One instance per container | default |\r\n| `prototype` | New instance on every request | — |\r\n| `request` | One instance per HTTP request | `@RequestScope` |\r\n| `session` | One instance per HTTP session | `@SessionScope` |\r\n| `application` | One instance per `ServletContext` | `@ApplicationScope` |\r\n| `websocket` | One instance per WebSocket session | — |\r",
      "fr": "| Scope | Durée de vie | Raccourci |\r\n| --- | --- | --- |\r\n| `singleton` | Une instance par conteneur | par défaut |\r\n| `prototype` | Nouvelle instance à chaque demande | — |\r\n| `request` | Une instance par requête HTTP | `@RequestScope` |\r\n| `session` | Une instance par session HTTP | `@SessionScope` |\r\n| `application` | Une instance par `ServletContext` | `@ApplicationScope` |\r\n| `websocket` | Une instance par session WebSocket | — |\r",
      "lb": "| Scope | Liewensdauer | Kierzel |\r\n| --- | --- | --- |\r\n| `singleton` | Eng Instanz pro Container | Standard |\r\n| `prototype` | Nei Instanz bei all Ufro | — |\r\n| `request` | Eng Instanz pro HTTP-Ufro | `@RequestScope` |\r\n| `session` | Eng Instanz pro HTTP-Session | `@SessionScope` |\r\n| `application` | Eng Instanz pro `ServletContext` | `@ApplicationScope` |\r\n| `websocket` | Eng Instanz pro WebSocket-Session | — |\r"
    },
    "para-in-short-the-shorthand": {
      "en": "In short, the shorthand annotations are `@RequestScope`, `@SessionScope`, and\r\n`@ApplicationScope`. Spring Cloud also ships `@RefreshScope` for\r\n`@Scope(\"refresh\")`. There is no shorthand for `singleton` (the default),\r\n`prototype`, or `websocket`.\r",
      "fr": "En bref, les annotations raccourcies sont `@RequestScope`, `@SessionScope` et\r\n`@ApplicationScope`. Spring Cloud fournit aussi `@RefreshScope` pour\r\n`@Scope(\"refresh\")`. Il n'y a pas de raccourci pour `singleton` (par défaut),\r\n`prototype` ou `websocket`.\r",
      "lb": "Kuerz gesot, d'Kierzel-Annotatioune sinn `@RequestScope`, `@SessionScope` an\r\n`@ApplicationScope`. Spring Cloud liwwert och `@RefreshScope` fir\r\n`@Scope(\"refresh\")`. Et gëtt kee Kierzel fir `singleton` (de Standard),\r\n`prototype` oder `websocket`.\r"
    },
    "para-springbootapplication-enables-component-scanning": {
      "en": "`@SpringBootApplication` enables component scanning over its package, so any\r\nannotated class there is picked up automatically.\r",
      "fr": "`@SpringBootApplication` active le scan de composants sur son package, donc\r\ntoute classe annotée y est détectée automatiquement.\r",
      "lb": "`@SpringBootApplication` aktivéiert de Component Scanning iwwer säi Package, sou\r\ndatt all annotéiert Klass do automatesch opgeholl gëtt.\r"
    },
    "spring-security": {
      "en": "## Spring Security\r",
      "fr": "## Spring Security\r",
      "lb": "## Spring Security\r"
    },
    "para-security-is-configured-through": {
      "en": "Security is configured through a `SecurityFilterChain` bean. The lambda DSL is\r\nthe modern, readable style.\r",
      "fr": "La sécurité se configure via un bean `SecurityFilterChain`. Le DSL lambda est le\r\nstyle moderne et lisible.\r",
      "lb": "Security gëtt iwwer e `SecurityFilterChain`-Bean konfiguréiert. Den Lambda-DSL ass\r\nde modernen, liesbaren Stil.\r"
    },
    "para-jwt-resource-servers-are": {
      "en": "JWT resource servers are the default for stateless APIs; method security\r\n(`@PreAuthorize`) guards individual service calls. Enable it with\r\n`@EnableMethodSecurity` and annotate the methods you want to protect.\r",
      "fr": "Les resource servers JWT sont la norme pour les API sans état ; la sécurité par\r\nméthode (`@PreAuthorize`) protège les appels de service individuels. Activez-la\r\navec `@EnableMethodSecurity` et annotez les méthodes à protéger.\r",
      "lb": "JWT Resource Servers sinn de Standard fir stateless APIen; Method-Security\r\n(`@PreAuthorize`) schützt eenzel Service-Opruff. Aktivéiert et mat\r\n`@EnableMethodSecurity` an annotéiert d'Methoden, déi Dir schütze wëllt.\r"
    },
    "para-preauthorize-accepts-spel-so": {
      "en": "`@PreAuthorize` accepts SpEL, so you can check roles (`hasRole`), authorities\r\n(`hasAuthority`), or the request itself (`#id == authentication.name`). Use\r\n`@PostAuthorize` to filter the returned value after the method runs.\r",
      "fr": "`@PreAuthorize` accepte SpEL : vous pouvez vérifier les rôles (`hasRole`), les\r\nautorités (`hasAuthority`) ou la requête elle-même (`#id ==\r\nauthentication.name`). Utilisez `@PostAuthorize` pour filtrer la valeur\r\nretournée après l'exécution.\r",
      "lb": "`@PreAuthorize` akzeptéiert SpEL: Dir kënnt Rollen (`hasRole`), Autoritéiten\r\n(`hasAuthority`) oder d'Ufro selwer (`#id == authentication.name`) prüfen.\r\nBenotzt `@PostAuthorize`, fir de zeréckginnene Wäert no der Ausféierung ze\r\nfilteren.\r"
    },
    "filters-vs-interceptors": {
      "en": "## Filters vs interceptors\r",
      "fr": "## Filtres vs interceptors\r",
      "lb": "## Filter vs Interceptors\r"
    },
    "para-both-wrap-requests-but": {
      "en": "Both wrap requests, but at different layers. A **filter** is part of the\r\nServlet API and runs around the entire request, before Spring's\r\n`DispatcherServlet`. An **interceptor** is Spring MVC and runs inside the\r\ndispatcher, with access to the target controller.\r",
      "fr": "Les deux enveloppent les requêtes, mais à des couches différentes. Un **filtre**\r\nfait partie de l'API Servlet et s'exécute autour de toute la requête, avant le\r\n`DispatcherServlet` de Spring. Un **interceptor** est Spring MVC et s'exécute\r\ndans le dispatcher, avec accès au contrôleur cible.\r",
      "lb": "Béid wéckelen Ufroen an, awer op verschiddene Schichten. E **Filter** ass Deel\r\nvun der Servlet API a leeft ronderëm déi ganz Ufro, virum Spring säin\r\n`DispatcherServlet`. En **Interceptor** ass Spring MVC a leeft am Dispatcher,\r\nmat Zougang zum Zil-Controller.\r"
    },
    "para-a-filter-is-for": {
      "en": "A filter is for concerns that must run before Spring even sees the request:\r",
      "fr": "Un filtre sert aux préoccupations qui doivent s'exécuter avant même que Spring\r\nne voie la requête :\r",
      "lb": "E Filter ass fir Konzerner, déi musse lafen, ier Spring d'Ufro iwwerhaapt gesäit:\r"
    },
    "para-an-interceptor-is-for": {
      "en": "An interceptor is for concerns that need the controller, such as timing a\r\nspecific handler:\r",
      "fr": "Un interceptor sert aux préoccupations qui ont besoin du contrôleur, comme\r\nchronométrer un handler précis :\r",
      "lb": "En Interceptor ass fir Konzerner, déi de Controller brauchen, wéi zum Beispill e\r\nbestëmmten Handler ze stoppen:\r"
    },
    "para-filter": {
      "en": "| | Filter | Interceptor |\r\n| --- | --- | --- |\r\n| Layer | Servlet API | Spring MVC |\r\n| Runs | Before `DispatcherServlet` | Inside `DispatcherServlet` |\r\n| Sees the controller | No | Yes (`HandlerMethod`) |\r\n| Typical uses | Auth, CORS, encoding, logging | Timing, model attributes, handler-aware logging |\r",
      "fr": "| | Filtre | Interceptor |\r\n| --- | --- | --- |\r\n| Couche | API Servlet | Spring MVC |\r\n| S'exécute | Avant le `DispatcherServlet` | Dans le `DispatcherServlet` |\r\n| Voit le contrôleur | Non | Oui (`HandlerMethod`) |\r\n| Usages types | Auth, CORS, encodage, journalisation | Chronométrage, attributs de modèle, journalisation par handler |\r",
      "lb": "| | Filter | Interceptor |\r\n| --- | --- | --- |\r\n| Schicht | Servlet API | Spring MVC |\r\n| Leeft | Virum `DispatcherServlet` | Am `DispatcherServlet` |\r\n| Gesäit de Controller | Nee | Jo (`HandlerMethod`) |\r\n| Typesch Notzung | Auth, CORS, Encoding, Logging | Timing, Modellattributer, handlerbewosst Logging |\r"
    },
    "para-in-short-filters-for": {
      "en": "In short: filters for the container level, interceptors for the MVC level.\r",
      "fr": "En bref : les filtres pour le niveau conteneur, les interceptors pour le niveau\r\nMVC.\r",
      "lb": "Kuerz gesot: Filtere fir d'Containerniveau, Interceptore fir d'MVC-Niveau.\r"
    },
    "restcontroller-vs-controller": {
      "en": "## @RestController vs @Controller\r",
      "fr": "## @RestController vs @Controller\r",
      "lb": "## @RestController vs @Controller\r"
    },
    "para-controller-is-the-classic": {
      "en": "`@Controller` is the classic MVC stereotype: its methods return a **view name**\r\nresolved by a `ViewResolver`. `@RestController` is a convenience combination of\r\n`@Controller` + `@ResponseBody`, so methods return **data** serialized to JSON.\r",
      "fr": "`@Controller` est le stéréotype MVC classique : ses méthodes renvoient un **nom\r\nde vue** résolu par un `ViewResolver`. `@RestController` est la combinaison de\r\n`@Controller` + `@ResponseBody`, donc ses méthodes renvoient des **données**\r\nsérialisées en JSON.\r",
      "lb": "`@Controller` ass de klasseschen MVC-Stereotyp: seng Methode ginn en **View-Numm**\r\nzeréck, dee vun engem `ViewResolver` opgeléist gëtt. `@RestController` ass\r\nd'Kombinatioun vu `@Controller` + `@ResponseBody`, sou datt seng Methode\r\n**Donnéeën** zeréckginn, déi op JSON serialiséiert ginn.\r"
    },
    "para-getmapping-postmapping-putmapping-and": {
      "en": "`@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping` are\r\nshortcuts for `@RequestMapping(method = ...)`. Use `@Controller` for\r\nserver-rendered pages and `@RestController` for APIs.\r",
      "fr": "`@GetMapping`, `@PostMapping`, `@PutMapping` et `@DeleteMapping` sont des\r\nraccourcis pour `@RequestMapping(method = ...)`. Utilisez `@Controller` pour les\r\npages rendues côté serveur et `@RestController` pour les API.\r",
      "lb": "`@GetMapping`, `@PostMapping`, `@PutMapping` an `@DeleteMapping` si Kierzel fir\r\n`@RequestMapping(method = ...)`. Benotzt `@Controller` fir servergerendert\r\nSäiten an `@RestController` fir APIen.\r"
    },
    "spring-data-jpa": {
      "en": "## Spring Data JPA\r",
      "fr": "## Spring Data JPA\r",
      "lb": "## Spring Data JPA\r"
    },
    "para-entities-map-classes-to": {
      "en": "Entities map classes to tables, and repository interfaces generate the queries\r\nfrom method names.\r",
      "fr": "Les entités mappent les classes aux tables, et les interfaces de repository\r\ngénèrent les requêtes à partir des noms de méthode.\r",
      "lb": "Entitéite mappen Klasse op Tabellen, an Repository-Interfaces generéieren\r\nd'Querien aus de Methodennimm.\r"
    },
    "para-pagination-uses-pageable-with": {
      "en": "Pagination uses `Pageable` with `Page` or `Slice`:\r",
      "fr": "La pagination utilise `Pageable` avec `Page` ou `Slice` :\r",
      "lb": "D'Paginéierung benotzt `Pageable` mat `Page` oder `Slice`:\r"
    },
    "para-pagerequest-of-page-size-maps-to": {
      "en": "`PageRequest.of(page, size)` maps to `offset = page * size` and `limit = size`.\r\n`Page` runs an extra `COUNT` query for the total; use `Slice` to skip it when you\r\nonly need a \"has next\" flag.\r",
      "fr": "`PageRequest.of(page, size)` correspond à `offset = page * size` et\r\n`limit = size`. `Page` exécute une requête `COUNT` supplémentaire pour le total ;\r\nutilisez `Slice` pour l'éviter quand vous n'avez besoin que d'un indicateur\r\n« a-t-il une suite ».\r",
      "lb": "`PageRequest.of(page, size)` entsprécht `offset = page * size` an `limit = size`.\r\n`Page` mécht eng zousätzlech `COUNT`-Ufro fir den Total; benotzt `Slice`, fir se\r\nze spueren, wann Dir nëmmen en « huet et eng Säit méi »-Indikateur braucht.\r"
    },
    "para-use-transactional-on-service": {
      "en": "Use `@Transactional` on service boundaries so multiple writes commit or roll\r\nback together.\r",
      "fr": "Utilisez `@Transactional` sur les frontières de service pour que plusieurs\r\nécritures soient validées ou annulées ensemble.\r",
      "lb": "Benotzt `@Transactional` op de Service-Grenzen, fir datt méi Schreibvirstellungen\r\nzesumme committéiert oder zeréckgerullt ginn.\r"
    },
    "para-if-any-step-throws": {
      "en": "If any step throws a `RuntimeException`, the whole method rolls back. Fine-tune\r\nit with `rollbackFor` (for checked exceptions), `readOnly = true` (for\r\nread-only queries), and `propagation` (to join or require a new transaction).\r",
      "fr": "Si une étape lève une `RuntimeException`, toute la méthode est annulée.\r\nAjustez-la avec `rollbackFor` (pour les exceptions vérifiées), `readOnly = true`\r\n(pour les requêtes en lecture seule) et `propagation` (pour rejoindre ou exiger\r\nune nouvelle transaction).\r",
      "lb": "Wann ee Schrëtt eng `RuntimeException` werft, gëtt déi ganz Method zeréckgerullt.\r\nPasst et mat `rollbackFor` (fir Checked Exceptions), `readOnly = true` (fir\r\nRead-Only-Querien) a `propagation` (fir eng Transaktioun bäizetrieden oder eng\r\nnei ze verlaangen) un.\r"
    },
    "lombok-and-mapstruct": {
      "en": "## Lombok and MapStruct\r",
      "fr": "## Lombok et MapStruct\r",
      "lb": "## Lombok a MapStruct\r"
    },
    "lombok": {
      "en": "### Lombok\r",
      "fr": "### Lombok\r",
      "lb": "### Lombok\r"
    },
    "para-lombok-removes-boilerplate-with": {
      "en": "Lombok removes boilerplate with compile-time annotations. `@Getter`/`@Setter`\r\ngenerate accessors, `@Builder` a builder, and `@Slf4j` a logger.\r",
      "fr": "Lombok supprime le boilerplate avec des annotations à la compilation.\r\n`@Getter`/`@Setter` génèrent les accesseurs, `@Builder` un builder et `@Slf4j`\r\nun logger.\r",
      "lb": "Lombok hëlt Boilerplate mat Compile-Zäit-Annotatiounen ewech. `@Getter`/`@Setter`\r\ngeneréieren Accessoren, `@Builder` e Builder a `@Slf4j` e Logger.\r"
    },
    "para-requiredargsconstructor-generates-a-constructor": {
      "en": "`@RequiredArgsConstructor` generates a constructor for `final` fields, which\r\npairs perfectly with constructor injection.\r",
      "fr": "`@RequiredArgsConstructor` génère un constructeur pour les champs `final`, ce qui\r\nse marie parfaitement avec l'injection par constructeur.\r",
      "lb": "`@RequiredArgsConstructor` generéiert e Konstruktor fir `final`-Felder, wat\r\nperfekt mat der Konstruktor-Injektioun zesummegeet.\r"
    },
    "para-data-bundles-accessors-with": {
      "en": "`@Data` bundles accessors with `equals`/`hashCode`/`toString`, but avoid it on\r\nJPA entities, where the generated `equals` can behave badly on mutable state.\r",
      "fr": "`@Data` regroupe les accesseurs avec `equals`/`hashCode`/`toString`, mais\r\névitez-le sur les entités JPA, où le `equals` généré peut mal se comporter sur un\r\nétat mutable.\r",
      "lb": "`@Data` bündelt d'Accessoren mat `equals`/`hashCode`/`toString`, awer vermeit et\r\nop JPA-Entitéiten, wou de generéierten `equals` sech op mutablem Zoustand\r\nschlecht behuele kann.\r"
    },
    "mapstruct": {
      "en": "### MapStruct\r",
      "fr": "### MapStruct\r",
      "lb": "### MapStruct\r"
    },
    "para-mapstruct-generates-type-safe-mappers": {
      "en": "MapStruct generates type-safe mappers between DTOs and entities at compile time.\r\nDeclare an interface and it produces the implementation.\r",
      "fr": "MapStruct génère des mappers typés entre DTO et entités à la compilation.\r\nDéclarez une interface et il produit l'implémentation.\r",
      "lb": "MapStruct generéiert type-sécher Mapper tëscht DTOen an Entitéiten zur\r\nCompile-Zäit. Deklaréiert en Interface an et produzéiert d'Ëmsetzung.\r"
    },
    "para-with-componentmodel-spring": {
      "en": "With `componentModel = \"spring\"`, the mapper is a Spring bean you can inject.\r",
      "fr": "Avec `componentModel = \"spring\"`, le mapper est un bean Spring injectable.\r",
      "lb": "Mat `componentModel = \"spring\"` ass de Mapper e Spring Bean, deen Dir injizéiere\r\nkënnt.\r"
    },
    "para-unlike-reflection-based-mappers-mapstruct": {
      "en": "Unlike reflection-based mappers, MapStruct is type-safe and fails at compile\r\ntime when fields do not match.\r",
      "fr": "Contrairement aux mappers à réflexion, MapStruct est type-safe et échoue à la\r\ncompilation quand les champs ne correspondent pas.\r",
      "lb": "Am Géigesaz zu Reflexiouns-Mapper ass MapStruct type-sécher a feelt zur\r\nCompile-Zäit, wann d'Felder net iwwereneestëmmen.\r"
    },
    "spring-cloud-stream-with-the-kafka-binder": {
      "en": "## Spring Cloud Stream with the Kafka binder\r",
      "fr": "## Spring Cloud Stream avec le binder Kafka\r",
      "lb": "## Spring Cloud Stream mam Kafka Binder\r"
    },
    "para-cloud-stream-abstracts-the": {
      "en": "Cloud Stream abstracts the messaging infrastructure behind a binding model, so\r\nyour code speaks functions, not Kafka clients.\r",
      "fr": "Cloud Stream abstrait l'infrastructure de messagerie derrière un modèle de\r\nbinding, de sorte que votre code parle fonctions, pas clients Kafka.\r",
      "lb": "Cloud Stream abstrahéiert d'Messaging-Infrastruktur hannert engem Binding-Modell,\r\nsou datt Äre Code Funktiounen schwätzt, net Kafka-Clients.\r"
    },
    "para-swap-the-binder-kafka": {
      "en": "Swap the binder (Kafka, Rabbit, Kafka Streams) without touching the function.\r",
      "fr": "Changez le binder (Kafka, Rabbit, Kafka Streams) sans toucher à la fonction.\r",
      "lb": "Wiesselt de Binder (Kafka, Rabbit, Kafka Streams) ouni d'Funktioun ze beréieren.\r"
    },
    "profiles": {
      "en": "## Profiles\r",
      "fr": "## Profils\r",
      "lb": "## Profiler\r"
    },
    "para-profiles-load-different-configuration": {
      "en": "Profiles load different configuration per environment. Files are named\r\n`application-{profile}.yml`, and `spring.profiles.active` selects them.\r",
      "fr": "Les profils chargent une configuration différente par environnement. Les\r\nfichiers se nomment `application-{profile}.yml`, et `spring.profiles.active` les\r\nsélectionne.\r",
      "lb": "Profiler luede pro Ëmfeld eng aner Configuratioun. D'Dateien heeschen\r\n`application-{profile}.yml`, an `spring.profiles.active` wielt se aus.\r"
    },
    "loading-multiple-profiles": {
      "en": "### Loading multiple profiles\r",
      "fr": "### Chargement de plusieurs profils\r",
      "lb": "### Méi Profiler lueden\r"
    },
    "para-profiles-are-additive-and": {
      "en": "Profiles are additive and ordered — activate several at once:\r",
      "fr": "Les profils sont additifs et ordonnés — activez-en plusieurs à la fois :\r",
      "lb": "Profiler sinn additiv an uerdentlech — aktivéiert méi gläichzäiteg:\r"
    },
    "para-loading-rules": {
      "en": "Loading rules:\r",
      "fr": "Règles de chargement :\r",
      "lb": "Lued-Regelen:\r"
    },
    "list-a-later-profile-overrides-an-earlier-one": {
      "en": "- A **later** profile overrides an **earlier** one.\r\n- Every `application-{profile}.yml` overrides the base `application.yml`.\r\n- With no active profile, Spring uses the `default` profile (`application.yml`\r\n  only).\r\n- Activate externally with the `SPRING_PROFILES_ACTIVE` environment variable or\r\n  `--spring.profiles.active=dev,local`.\r",
      "fr": "- Un profil **plus tardif** remplace un profil **plus précoce**.\r\n- Chaque `application-{profile}.yml` remplace le `application.yml` de base.\r\n- Sans profil actif, Spring utilise le profil `default` (`application.yml`\r\n  seulement).\r\n- Activez-les en externe avec la variable d'environnement `SPRING_PROFILES_ACTIVE`\r\n  ou `--spring.profiles.active=dev,local`.\r",
      "lb": "- E **spéidere** Profil iwwerschreift e **frësche** Profil.\r\n- All `application-{profile}.yml` iwwerschreift d'Basis-`application.yml`.\r\n- Ouni aktive Profil benotzt Spring de `default`-Profil (`application.yml`\r\n  nëmmen).\r\n- Aktivéiert se vu baussen iwwer d'Ëmfeldvariabel `SPRING_PROFILES_ACTIVE` oder\r\n  `--spring.profiles.active=dev,local`.\r"
    },
    "para-a-profile-can-pull": {
      "en": "A profile can pull in others with `include`:\r",
      "fr": "Un profil peut aussi en inclure d'autres avec `include` :\r",
      "lb": "E Profil kann anerer mat `include` eraopzéien:\r"
    },
    "para-you-can-also-gate": {
      "en": "You can also gate beans with `@Profile`.\r",
      "fr": "Vous pouvez aussi conditionner des beans avec `@Profile`.\r",
      "lb": "Dir kënnt Beans och mat `@Profile` gaten.\r"
    },
    "spring-cloud-gateway": {
      "en": "## Spring Cloud Gateway\r",
      "fr": "## Spring Cloud Gateway\r",
      "lb": "## Spring Cloud Gateway\r"
    },
    "para-the-gateway-routes-requests": {
      "en": "The gateway routes requests to downstream services using predicates and\r\nfilters.\r",
      "fr": "La gateway route les requêtes vers les services en aval à l'aide de prédicats et\r\nde filtres.\r",
      "lb": "D'Gateway route Ufroen op Downstream-Servicer mat Predicates a Filteren.\r"
    },
    "para-predicates-match-the-request": {
      "en": "Predicates match the request; filters transform it (rewrite path, add headers,\r\ncircuit-break). Paired with a discovery client, `lb://` load-balances across\r\ninstances.\r",
      "fr": "Les prédicats font correspondre la requête ; les filtres la transforment\r\n(réécrire le chemin, ajouter des en-têtes, couper le circuit). Avec un client de\r\ndécouverte, `lb://` répartit la charge entre les instances.\r",
      "lb": "Predicates passen d'Ufro un; Filteren transforméieren se (Pad ëmschreiwen,\r\nHeader derbäisetzen, Circuit Breaker). Mat engem Discovery-Client verdeelt\r\n`lb://` d'Laascht iwwer d'Instanzen.\r"
    },
    "spring-batch": {
      "en": "## Spring Batch\r",
      "fr": "## Spring Batch\r",
      "lb": "## Spring Batch\r"
    },
    "para-spring-batch-handles-large": {
      "en": "Spring Batch handles large, scheduled data processing: read in chunks, process,\r\nwrite, with restart and retry built in. A job is made of chunk-oriented steps.\r",
      "fr": "Spring Batch gère de grands traitements de données planifiés : lire par blocs,\r\ntraiter, écrire, avec reprise et nouvelle tentative intégrées. Un job est\r\nconstitué d'étapes orientées par blocs (chunk).\r",
      "lb": "Spring Batch verschafft grouss, geplangt Dateveraarbechtung: a Bléck liesen,\r\nveraarbechten, schreiwen, mat Restart a Retry agebaut. E Job besteet aus\r\nchunkorientéierte Schrëtt.\r"
    },
    "list-job-the-whole-batch-process": {
      "en": "- **Job** — the whole batch process.\r\n- **Step** — one phase; here a chunk step that reads, transforms, and writes.\r\n- **Reader / Processor / Writer** — the chunk pipeline.\r\n- **chunk(100)** — process 100 items per transaction, so a failure rolls back\r\n  one chunk, not the whole job.\r",
      "fr": "- **Job** — tout le processus batch.\r\n- **Step** — une phase ; ici une étape par blocs qui lit, transforme et écrit.\r\n- **Reader / Processor / Writer** — le pipeline de blocs.\r\n- **chunk(100)** — traite 100 éléments par transaction, pour qu'un échec annule\r\n  un bloc, pas tout le job.\r",
      "lb": "- **Job** — de ganze Batch-Prozess.\r\n- **Step** — eng Phas; hei e Chunk-Schrëtt, dee liest, transforméiert a schreift.\r\n- **Reader / Processor / Writer** — de Chunk-Pipeline.\r\n- **chunk(100)** — veraarbecht 100 Elementer pro Transaktioun, sou datt e Feeler\r\n  ee Chunk zeréckrullt, net de ganze Job.\r"
    },
    "para-spring-batch-records-job": {
      "en": "Spring Batch records job and step status in a metadata store, so jobs can be\r\nrestarted from where they failed.\r",
      "fr": "Spring Batch enregistre l'état du job et des étapes dans un stockage de\r\nmétadonnées, pour que les jobs puissent reprendre là où ils ont échoué.\r",
      "lb": "Spring Batch protokolléiert de Job- a Schrëtt-Status an engem\r\nMetadaten-Späicher, sou datt Jobs do kënne weiderfueren, wou se feelgeschloe sinn.\r"
    },
    "java-version-history": {
      "en": "## Java version history\r",
      "fr": "## Historique des versions Java\r",
      "lb": "## Java Versiounsgeschicht\r"
    },
    "para-a-condensed-timeline-of": {
      "en": "A condensed timeline of the major releases and their headline changes.\r",
      "fr": "Une chronologie condensée des versions majeures et de leurs changements clés.\r",
      "lb": "Eng kompakt Chronologie vun de grousse Versiounen an hire Kärännerungen.\r"
    },
    "para-version-release": {
      "en": "| Version | Release | Breaking changes / news |\r\n| ------- | ------- | ----------------------- |\r\n| 8 | Mar 2014 | Lambdas, Streams, `Optional`, `java.time`; PermGen removed (Metaspace) |\r\n| 9 | Sep 2017 | Module system (JPMS/Jigsaw), JShell, `List.of`/`Map.of` |\r\n| 10 | Mar 2018 | `var` local-variable type inference |\r\n| 11 | Sep 2018 | LTS; `HttpClient`, `var` in lambdas; Java EE & CORBA modules removed |\r\n| 12 | Mar 2019 | Switch expressions (preview), Shenandoah GC |\r\n| 13 | Sep 2019 | Text blocks (preview), ZGC |\r\n| 14 | Mar 2020 | Switch expressions standard; records & pattern matching (preview) |\r\n| 15 | Sep 2020 | Text blocks standard; sealed classes (preview) |\r\n| 16 | Mar 2021 | Records standard; pattern matching for `instanceof` standard |\r\n| 17 | Sep 2021 | LTS; sealed classes standard; strong encapsulation of JDK internals |\r\n| 18 | Mar 2022 | UTF-8 default charset; simple web server |\r\n| 19 | Sep 2022 | Virtual threads (preview); record patterns (preview) |\r\n| 20 | Mar 2023 | Record patterns standard; virtual threads (2nd preview) |\r\n| 21 | Sep 2023 | LTS; virtual threads standard, pattern matching for switch, sequenced collections |\r\n| 22 | Mar 2024 | Unnamed variables & patterns; statements before `super()` |\r\n| 23 | Sep 2024 | Module import declarations (preview); primitive patterns (preview) |\r\n| 24 | Mar 2025 | Compact object headers, class-file API, stream gatherers |\r\n| 25 | Sep 2025 | LTS; structured concurrency & scoped values stable |\r",
      "fr": "| Version | Sortie | Changements majeurs / breaking changes |\r\n| ------- | ------ | -------------------------------------- |\r\n| 8 | Mars 2014 | Lambdas, Streams, `Optional`, `java.time` ; PermGen supprimé (Metaspace) |\r\n| 9 | Sept 2017 | Système de modules (JPMS/Jigsaw), JShell, `List.of`/`Map.of` |\r\n| 10 | Mars 2018 | Inférence de type `var` pour les variables locales |\r\n| 11 | Sept 2018 | LTS ; `HttpClient`, `var` dans les lambdas ; modules Java EE & CORBA supprimés |\r\n| 12 | Mars 2019 | Expressions switch (aperçu), Shenandoah GC |\r\n| 13 | Sept 2019 | Blocs de texte (aperçu), ZGC |\r\n| 14 | Mars 2020 | Expressions switch standard ; records & pattern matching (aperçu) |\r\n| 15 | Sept 2020 | Blocs de texte standard ; classes scellées (aperçu) |\r\n| 16 | Mars 2021 | Records standard ; pattern matching pour `instanceof` standard |\r\n| 17 | Sept 2021 | LTS ; classes scellées standard ; forte encapsulation des internes du JDK |\r\n| 18 | Mars 2022 | Jeu de caractères UTF-8 par défaut ; serveur web simple |\r\n| 19 | Sept 2022 | Threads virtuels (aperçu) ; record patterns (aperçu) |\r\n| 20 | Mars 2023 | Record patterns standard ; threads virtuels (2e aperçu) |\r\n| 21 | Sept 2023 | LTS ; threads virtuels standard, pattern matching pour switch, collections séquencées |\r\n| 22 | Mars 2024 | Variables & motifs sans nom ; instructions avant `super()` |\r\n| 23 | Sept 2024 | Déclarations d'import de module (aperçu) ; motifs primitifs (aperçu) |\r\n| 24 | Mars 2025 | En-têtes d'objets compacts, API class-file, stream gatherers |\r\n| 25 | Sept 2025 | LTS ; concurrence structurée & scoped values stables |\r",
      "lb": "| Versioun | Release | Breaking Changes / Neiegkeeten |\r\n| -------- | ------- | ------------------------------ |\r\n| 8 | Mäerz 2014 | Lambdas, Streams, `Optional`, `java.time`; PermGen ewechgeholl (Metaspace) |\r\n| 9 | Sept 2017 | Modulsystem (JPMS/Jigsaw), JShell, `List.of`/`Map.of` |\r\n| 10 | Mäerz 2018 | `var` Typinferenz fir lokal Variabelen |\r\n| 11 | Sept 2018 | LTS; `HttpClient`, `var` a Lambdas; Java EE & CORBA Moduler ewechgeholl |\r\n| 12 | Mäerz 2019 | Switch Expressions (Virschau), Shenandoah GC |\r\n| 13 | Sept 2019 | Text Blocks (Virschau), ZGC |\r\n| 14 | Mäerz 2020 | Switch Expressions standard; Records & Pattern Matching (Virschau) |\r\n| 15 | Sept 2020 | Text Blocks standard; Sealed Classes (Virschau) |\r\n| 16 | Mäerz 2021 | Records standard; Pattern Matching fir `instanceof` standard |\r\n| 17 | Sept 2021 | LTS; Sealed Classes standard; staark Enkapsulatioun vun den JDK-Internen |\r\n| 18 | Mäerz 2022 | UTF-8 Standard Charset; einfachen Webserver |\r\n| 19 | Sept 2022 | Virtuell Threads (Virschau); Record Patterns (Virschau) |\r\n| 20 | Mäerz 2023 | Record Patterns standard; Virtuell Threads (2. Virschau) |\r\n| 21 | Sept 2023 | LTS; Virtuell Threads standard, Pattern Matching fir Switch, Sequenced Collections |\r\n| 22 | Mäerz 2024 | Onbenannt Variabelen & Mustern; Aussoen virun `super()` |\r\n| 23 | Sept 2024 | Modul-Import-Deklaratiounen (Virschau); primitiv Mustern (Virschau) |\r\n| 24 | Mäerz 2025 | Kompakt Objet-Header, Class-File API, Stream Gatherers |\r\n| 25 | Sept 2025 | LTS; Strukturéiert Concurrency & Scoped Values stabil |\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-modern-java-leans-on": {
      "en": "Modern Java leans on records, pattern matching, sealed types, and virtual\r\nthreads to cut boilerplate and scale. The Spring ecosystem layers Boot's\r\nauto-configuration, Security's filter chain, JPA's repositories, Cloud Stream's\r\nbindings, profiles, and a gateway on top. Together they give you a production\r\nbackend that is concise, typed, and easy to reason about.\r",
      "fr": "Le Java moderne s'appuie sur les records, le pattern matching, les types\r\nscellés et les threads virtuels pour réduire le boilerplate et passer à\r\nl'échelle. L'écosystème Spring empile l'auto-configuration de Boot, la chaîne de\r\nfiltres de Security, les repositories de JPA, les bindings de Cloud Stream, les\r\nprofils et une gateway. Ensemble, ils donnent un backend de production concis,\r\ntypé et facile à raisonner.\r",
      "lb": "Modernt Java verléisst sech op Records, Pattern Matching, Sealed Types a\r\nVirtuell Threads, fir Boilerplate ze reduzéieren an ze skaléieren. Den\r\nSpring-Ecosystem leet d'Auto-Configuratioun vu Boot, d'Filterkette vu Security,\r\nd'Repositories vu JPA, d'Bindings vu Cloud Stream, Profiler an eng Gateway\r\ndrop. Zesummen ginn se Iech e Produktiouns-Backend, dee kompakt, typiséiert an\r\neinfach ze verstoen ass.\r"
    }
  },
  "mermaid-diagrams-guide": {
    "para-any-fenced-code-block": {
      "en": "Any fenced code block tagged with `mermaid` is rendered as an SVG diagram. Here\r\nis a tour of what is available.\r",
      "fr": "Tout bloc de code délimité et étiqueté `mermaid` est rendu sous forme de\r\ndiagramme SVG. Voici un tour d'horizon de ce qui est disponible.\r",
      "lb": "All Code-Blöck mat dem Tag `mermaid` gëtt als SVG-Diagramm gerëndert. Hei ass\r\nen Iwwerbléck iwwer dat, wat verfügbar ass.\r"
    },
    "flowchart": {
      "en": "## Flowchart\r",
      "fr": "## Organigramme\r",
      "lb": "## Flowchart\r"
    },
    "sequence": {
      "en": "## Sequence\r",
      "fr": "## Séquence\r",
      "lb": "## Sequenz\r"
    },
    "class-diagram": {
      "en": "## Class diagram\r",
      "fr": "## Diagramme de classes\r",
      "lb": "## Klassendiagramm\r"
    },
    "state-diagram": {
      "en": "## State diagram\r",
      "fr": "## Diagramme d'états\r",
      "lb": "## Zoustanksdiagramm\r"
    },
    "entity-relationship": {
      "en": "## Entity relationship\r",
      "fr": "## Entité-relation\r",
      "lb": "## Entitéits-Bezéiung\r"
    },
    "gantt-chart": {
      "en": "## Gantt chart\r",
      "fr": "## Diagramme de Gantt\r",
      "lb": "## Gantt-Diagramm\r"
    },
    "pie-chart": {
      "en": "## Pie chart\r",
      "fr": "## Diagramme circulaire\r",
      "lb": "## Kreesdiagramm\r"
    },
    "git-graph": {
      "en": "## Git graph\r",
      "fr": "## Graphe Git\r",
      "lb": "## Git-Graph\r"
    },
    "mindmap": {
      "en": "## Mindmap\r",
      "fr": "## Carte mentale\r",
      "lb": "## Mindmap\r"
    },
    "timeline": {
      "en": "## Timeline\r",
      "fr": "## Chronologie\r",
      "lb": "## Zäitlinn\r"
    },
    "para-wrap-any-of-these": {
      "en": "Wrap any of these in a `mermaid` fence and it will render on the page.\r",
      "fr": "Enveloppez n'importe lequel de ces exemples dans un bloc `mermaid` et il sera\r\nrendu sur la page.\r",
      "lb": "Setzt ee vun dëse Beispiller an e `mermaid`-Block an et gëtt op der Säit\r\ngerëndert.\r"
    }
  },
  "order-saga-state-machine": {
    "the-problem-with-a-single-transaction": {
      "en": "## The problem with a single transaction\r",
      "fr": "## Le problème d'une transaction unique\r",
      "lb": "## De Problem mat enger eenzeger Transaktioun\r"
    },
    "para-a-checkout-rarely-completes": {
      "en": "A checkout rarely completes in one request. Money must be captured, stock must be\r\nset aside, and the warehouse must be told to ship. Trying to wrap all of that in\r\none distributed transaction — a two-phase commit across services — looks tidy on\r\npaper but breaks down quickly in reality.\r",
      "fr": "Un checkout se termine rarement en une seule requête. L'argent doit être\r\nencaissé, le stock doit être réservé et l'entrepôt doit être prévenu pour\r\nl'expédition. Tout envelopper dans une transaction distribuée — un commit en\r\ndeux phases entre services — semble propre sur le papier, mais s'effondre vite\r\ndans la réalité.\r",
      "lb": "E Checkout ass selten an enger Ufro fäerdeg. D'Geld muss agezunn, de Stock muss\r\nreservéiert an d'Lager muss iwwer d'Liwwerung informéiert ginn. Dat alles an eng\r\neenzeg verdeelt Transaktioun ze wéckelen — en Zwee-Phase-Commit iwwer Servicer —\r\ngesäit op Pabeier propper aus, brécht awer an der Realitéit séier zesummen.\r"
    },
    "para-the-catch-is-that": {
      "en": "The catch is that no service can predict how long another will take. A payment\r\nprovider might wait on a fraud review, and a stock check might be slow under load.\r\nKeeping locks open across several systems for that long is impractical and can\r\ndrag the whole platform down.\r",
      "fr": "Le hic, c'est qu'aucun service ne peut prédire combien de temps un autre mettra.\r\nUn prestataire de paiement peut attendre une vérification anti-fraude, et un\r\ncontrôle de stock peut être lent sous la charge. Garder des verrous ouverts sur\r\nplusieurs systèmes pendant aussi longtemps est irréaliste et peut alourdir toute\r\nla plateforme.\r",
      "lb": "D'Problem ass, datt kee Service viraussoe kann, wéi laang en anere braucht. E\r\nBezuel-Provider ka waarden, bis eng Fraud-Prüfung duerch ass, an eng\r\nStock-Kontroll ka bei Laascht lues sinn. Spären iwwer verschidde Systemer sou\r\nlaang opzehalen ass onpraktesch a kann déi ganz Plattform bremsen.\r"
    },
    "para-a-saga-sidesteps-this": {
      "en": "A **saga** sidesteps this by cutting the flow into local steps that each finish\r\nquickly and can be undone on their own.\r",
      "fr": "Un **saga** contourne cela en découpant le flux en étapes locales qui se\r\nterminent rapidement et peuvent être annulées séparément.\r",
      "lb": "E **Saga** ëmgeet dat, andeems de Flux a lokal Schrëtt opgedeelt gëtt, déi\r\nséier fäerdeg sinn an eenzel réckgängeg gemaach kënne ginn.\r"
    },
    "what-a-saga-actually-is": {
      "en": "## What a saga actually is\r",
      "fr": "## Ce qu'est réellement un saga\r",
      "lb": "## Wat e Saga wierklech ass\r"
    },
    "para-a-saga-is-a": {
      "en": "A saga is a chain of local actions where every step has a matching **compensating\r\naction** that reverses it when a later step fails. Instead of one atomic\r\noperation, the work is split into small, independently recoverable pieces.\r",
      "fr": "Un saga est une chaîne d'actions locales où chaque étape possède une **action\r\ncompensatoire** qui l'inverse lorsqu'une étape ultérieure échoue. Au lieu d'une\r\nopération atomique, le travail est découpé en petits morceaux récupérables\r\nindépendamment.\r",
      "lb": "E Saga ass eng Kette vu lokalen Aktiounen, wou all Schrëtt eng passend\r\n**kompenséierend Aktioun** huet, déi e réckgängeg mécht, wann e spéidere Schrëtt\r\nfeelgeet. Amplaz vun enger atomarer Operatioun gëtt d'Aarbecht a kleng,\r\nonofhängeg erholbar Stécker opgedeelt.\r"
    },
    "para-take-an-order-as": {
      "en": "Take an order as an example:\r",
      "fr": "Prenons une commande comme exemple :\r",
      "lb": "Huelt eng Bestellung als Beispill:\r"
    },
    "para-if-the-inventory-step": {
      "en": "If the inventory step reports that an item is sold out after payment has already\r\ngone through, the saga fires a reimbursement to give the money back. Each piece\r\nis decoupled, and nothing stays locked for the entire journey.\r",
      "fr": "Si l'étape de stock signale qu'un article est épuisé après que le paiement est\r\ndéjà passé, le saga déclenche un remboursement pour rendre l'argent. Chaque\r\npièce est découplée et rien ne reste verrouillé pendant tout le parcours.\r",
      "lb": "Wann de Stock-Schrëtt mellt, datt en Artikel ausverkaaft ass nodeems d'Bezuelung\r\nscho duerch ass, léist de Saga eng Réckzuelung aus, fir d'Geld zeréckzeginn. All\r\nDeel ass entkoppelt, an näischt bleift de ganze Wee gespaart.\r"
    },
    "masstransit-sagas-are-state-machines": {
      "en": "## MassTransit sagas are state machines\r",
      "fr": "## Les sagas MassTransit sont des machines à états\r",
      "lb": "## MassTransit-Sagas si State-Machinen\r"
    },
    "para-masstransit-https-masstransit-io-implements-sagas-through": {
      "en": "[MassTransit](https://masstransit.io) implements sagas through a state machine,\r\nan approach inherited from Automatonymous. Before writing code it helps to know\r\nthe four parts that make up the model:\r",
      "fr": "[MassTransit](https://masstransit.io) implémente les sagas à travers une machine\r\nà états, une approche héritée d'Automatonymous. Avant d'écrire du code, il est\r\nutile de connaître les quatre éléments du modèle :\r",
      "lb": "[MassTransit](https://masstransit.io) setzt Sagas iwwer eng State-Machine ëm,\r\neng Approche, déi vun Automatonymous ierft. Ier ee Code schreift, hëlleft et,\r\ndéi véier Deeler vum Modell ze kennen:\r"
    },
    "list-states-the-positions-a-workflow-can-be-in": {
      "en": "1. **States** — the positions a workflow can be in\r\n2. **Events** — messages that push the workflow from one state to another\r\n3. **Behaviors** — the work performed when an event lands in a given state\r\n4. **Instance** — the persisted record holding data for a single conversation\r",
      "fr": "1. **États** — les positions que peut occuper un workflow\r\n2. **Événements** — les messages qui font passer le workflow d'un état à un autre\r\n3. **Comportements** — le travail effectué lorsqu'un événement arrive dans un état donné\r\n4. **Instance** — l'enregistrement persisté contenant les données d'une seule conversation\r",
      "lb": "1. **Staaten** — d'Positiounen, an deenen e Workflow ka sinn\r\n2. **Eventer** — Messagen, déi de Workflow vun engem Staat an en anere réckelen\r\n3. **Behavioren** — d'Aarbecht, déi ausgefouert gëtt, wann en Event an engem bestëmmte Staat ukënnt\r\n4. **Instanz** — den persistéierten Datensaz mat den Daten vun enger eenzeger Konversatioun\r"
    },
    "para-every-state-machine-ships": {
      "en": "Every state machine ships with an `Initial` and a `Final` state for free. A new\r\ninstance starts in `Initial`, and reaching `Final` means the saga has finished.\r",
      "fr": "Chaque machine à états inclut gratuitement un état `Initial` et un état `Final`.\r\nUne nouvelle instance démarre dans `Initial`, et atteindre `Final` signifie que\r\nle saga est terminé.\r",
      "lb": "All State-Machine huet gratis en `Initial`- an e `Final`-Staat. Eng nei Instanz\r\nfänkt am `Initial` un, a `Final` z'erreechen heescht, datt de Saga fäerdeg ass.\r"
    },
    "para-here-is-the-state": {
      "en": "Here is the state machine we are going to build:\r",
      "fr": "Voici la machine à états que nous allons construire :\r",
      "lb": "Hei ass d'State-Machine, déi mir baue wäerten:\r"
    },
    "the-saga-instance": {
      "en": "## The saga instance\r",
      "fr": "## L'instance du saga\r",
      "lb": "## D'Saga-Instanz\r"
    },
    "para-the-instance-is-the": {
      "en": "The instance is the entity that MassTransit persists between messages. It keeps\r\nthe correlation key, the current state, and any business data the steps need.\r",
      "fr": "L'instance est l'entité que MassTransit persiste entre les messages. Elle\r\nconserve la clé de corrélation, l'état courant et les données métier dont les\r\nétapes ont besoin.\r",
      "lb": "D'Instanz ass d'Entitéit, déi MassTransit tëscht de Messagen persistéiert. Se\r\nhält de Korrelatiounsschlëssel, den aktuellen Staat an d'Business-Daten, déi\r\nd'Schrëtt brauchen.\r"
    },
    "para-correlationid-is-the-identifier": {
      "en": "`CorrelationId` is the identifier that ties every incoming message back to the\r\nright instance, while `CurrentState` records where the workflow currently stands.\r\nThe remaining properties carry the data the process needs along the way.\r",
      "fr": "`CorrelationId` est l'identifiant qui relie chaque message entrant à la bonne\r\ninstance, tandis que `CurrentState` enregistre où en est le workflow. Les\r\npropriétés restantes transportent les données nécessaires au processus.\r",
      "lb": "`CorrelationId` ass den Identifikateur, deen all erakommende Message mat der\r\nrichteger Instanz verbënnt, iwwerdeems `CurrentState` festhält, wou de Workflow\r\ngrad steet. Déi reschtlech Eegenschaften droen d'Daten, déi de Prozess ënnerwee\r\nbrauch.\r"
    },
    "the-events": {
      "en": "## The events\r",
      "fr": "## Les événements\r",
      "lb": "## D'Eventer\r"
    },
    "para-events-are-the-messages": {
      "en": "Events are the messages that drive transitions. Each one must be correlated to a\r\nspecific instance through a shared identifier.\r",
      "fr": "Les événements sont les messages qui déclenchent les transitions. Chacun doit\r\nêtre corrélé à une instance précise via un identifiant partagé.\r",
      "lb": "Eventer sinn d'Messagen, déi Iwwergäng ausléisen. All eenzel muss iwwer en\r\ngemeinsamen Identifikateur mat enger bestëmmter Instanz korreléiert sinn.\r"
    },
    "para-these-records-travel-over": {
      "en": "These records travel over the bus; the saga reacts to them and may publish new\r\ncommands in response.\r",
      "fr": "Ces records circulent sur le bus ; le saga y réagit et peut publier de nouvelles\r\ncommandes en réponse.\r",
      "lb": "Dës Records lafen iwwer de Bus; de Saga reagéiert dorop a kann als Äntwert nei\r\nCommande publizéieren.\r"
    },
    "building-the-state-machine": {
      "en": "## Building the state machine\r",
      "fr": "## Construire la machine à états\r",
      "lb": "## D'State-Machine bauen\r"
    },
    "para-the-state-machine-ties": {
      "en": "The state machine ties states, events, and behaviors together and declares which\r\ntransitions are legal.\r",
      "fr": "La machine à états relie les états, les événements et les comportements, et\r\ndéclare quelles transitions sont autorisées.\r",
      "lb": "D'State-Machine verbënnt Staaten, Eventer a Behavioren an deklaréiert, wéi eng\r\nIwwergäng erlaabt sinn.\r"
    },
    "para-notice-the-compensation-logic": {
      "en": "Notice the compensation logic: when the stock step fails after payment, the saga\r\npublishes `ReimbursePayment` to unwind the charge. The happy path and the failure\r\npath are declared side by side, which makes the workflow easy to read.\r",
      "fr": "Remarquez la logique de compensation : lorsque l'étape de stock échoue après le\r\npaiement, le saga publie `ReimbursePayment` pour annuler le débit. Le chemin\r\nnominal et le chemin d'échec sont déclarés côte à côte, ce qui rend le workflow\r\nfacile à lire.\r",
      "lb": "Opgepasst op d'Kompensatiounslogik: wann de Stock-Schrëtt nom Bezuelen feelgeet,\r\npublizéiert de Saga `ReimbursePayment`, fir de Betrag zeréckzebezuelen. De\r\ngléckleche Wee an de Feelerwee ginn niewentenee deklaréiert, wat de Workflow\r\neinfach liesbar mécht.\r"
    },
    "the-consumers": {
      "en": "## The consumers\r",
      "fr": "## Les consumers\r",
      "lb": "## D'Consumer\r"
    },
    "para-the-saga-is-the": {
      "en": "The saga is the coordinator, not the doer. The actual work lives in message\r\nconsumers that handle commands and report back through events.\r",
      "fr": "Le saga est le coordinateur, pas l'exécutant. Le vrai travail se trouve dans les\r\nconsumers qui traitent les commandes et rendent compte via des événements.\r",
      "lb": "De Saga ass de Koordinator, net den Ausféierer. Déi richteg Aarbecht läit an de\r\nMessage-Consumer, déi Commande veraarbechten an iwwer Eventer zeréckmellen.\r"
    },
    "para-splitting-responsibilities-this-way": {
      "en": "Splitting responsibilities this way keeps each service focused on its own job,\r\nwhile the saga keeps the whole process moving in the right direction.\r",
      "fr": "Séparer les responsabilités de cette façon permet à chaque service de se\r\nconcentrer sur son propre rôle, pendant que le saga fait avancer tout le\r\nprocessus dans la bonne direction.\r",
      "lb": "D'Verantwortungen esou ze trennen erlaabt all Service, sech op seng eege Roll ze\r\nkonzentréieren, wärend de Saga de ganze Prozess an déi richteg Richtung beweegt.\r"
    },
    "wiring-it-up-with-azure-service-bus": {
      "en": "## Wiring it up with Azure Service Bus\r",
      "fr": "## Configuration avec Azure Service Bus\r",
      "lb": "## Mat Azure Service Bus opbauen\r"
    },
    "para-persisting-saga-state-requires": {
      "en": "Persisting saga state requires a repository. We will use Entity Framework Core\r\nagainst SQL Server, with Azure Service Bus as the transport.\r",
      "fr": "Persister l'état du saga nécessite un dépôt. Nous utiliserons Entity Framework\r\nCore sur SQL Server, avec Azure Service Bus comme transport.\r",
      "lb": "De Saga-Staat ze persistéieren brauch en Repository. Mir benotzen Entity\r\nFramework Core op SQL Server, mat Azure Service Bus als Transport.\r"
    },
    "para-first-the-required-packages": {
      "en": "First, the required packages:\r",
      "fr": "D'abord, les paquets requis :\r",
      "lb": "Als éischt déi néideg Packagen:\r"
    },
    "para-define-a-dbcontext-and": {
      "en": "Define a `DbContext` and a class map for the saga instance:\r",
      "fr": "Définissez un `DbContext` et une carte de classe pour l'instance du saga :\r",
      "lb": "Definéiert en `DbContext` an e Class-Map fir d'Saga-Instanz:\r"
    },
    "para-finally-register-everything-in": {
      "en": "Finally, register everything in the application:\r",
      "fr": "Enfin, enregistrez le tout dans l'application :\r",
      "lb": "Zum Schluss alles an der Applikatioun registréieren:\r"
    },
    "why-reach-for-sagas": {
      "en": "## Why reach for sagas\r",
      "fr": "## Pourquoi choisir les sagas\r",
      "lb": "## Firwat Sagas huelen\r"
    },
    "list-resilience-every-step-can-be-retried-on-its-own-and-failures-trigger": {
      "en": "- **Resilience** — every step can be retried on its own, and failures trigger\r\n  compensation instead of leaving the system half-done.\r\n- **Visibility** — the current state tells you exactly where each order stands,\r\n  which simplifies debugging and monitoring.\r\n- **Loose coupling** — services talk through messages and can evolve separately\r\n  without breaking the overall flow.\r\n- **Maintainability** — a change to one step does not ripple through the others.\r",
      "fr": "- **Résilience** — chaque étape peut être réessayée séparément, et les échecs\r\n  déclenchent une compensation au lieu de laisser le système à moitié fait.\r\n- **Visibilité** — l'état courant indique exactement où en est chaque commande,\r\n  ce qui simplifie le débogage et la supervision.\r\n- **Couplage lâche** — les services communiquent par messages et peuvent évoluer\r\n  séparément sans casser le flux global.\r\n- **Maintenabilité** — une modification sur une étape ne se répercute pas sur\r\n  les autres.\r",
      "lb": "- **Resilienz** — all Schrëtt kann eenzel nei probéiert ginn, a Feeler léisen\r\n  Kompensatioun aus, amplaz de System hallef fäerdeg hannerloossen.\r\n- **Visibilitéit** — den aktuellen Staat seet genee, wou all Bestellung steet,\r\n  wat Debuggen an Iwwerwaachung vereinfacht.\r\n- **Loos Kopplung** — Servicer kommunizéieren iwwer Messagen a kënne sech\r\n  separat weiderentwéckelen, ouni de ganze Flux ze briechen.\r\n- **Maintainabilitéit** — eng Ännerung an engem Schrëtt schléit net op déi aner\r\n  duerch.\r"
    },
    "para-the-state-machine-also": {
      "en": "The state machine also forces the business process to be explicit. Every state\r\nand transition is spelled out, turning a murky distributed flow into something a\r\nnew team member can follow.\r",
      "fr": "La machine à états force aussi le processus métier à être explicite. Chaque état\r\net transition est énoncé clairement, transformant un flux distribué opaque en\r\nquelque chose qu'un nouveau membre de l'équipe peut suivre.\r",
      "lb": "D'State-Machine zwéngt de Business-Prozess och, explizit ze sinn. All Staat an\r\nIwwergank ass kloer festgehalen, wat aus engem opaken verdeelte Flux eppes mécht,\r\ndat en neie Teammember novollzéie kann.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Conclusion\r",
      "lb": "## Resumé\r"
    },
    "para-modeling-a-checkout-as": {
      "en": "Modeling a checkout as a MassTransit saga gives you coordinated, recoverable\r\nworkflows without the pain of distributed transactions. Define the states and\r\nevents, persist the instance, and let Azure Service Bus carry the messages. The\r\nresult is a process that is clear, observable, and forgiving when things go\r\nwrong.\r",
      "fr": "Modéliser un checkout comme un saga MassTransit donne des workflows coordonnés\r\net récupérables sans la douleur des transactions distribuées. Définissez les\r\nétats et les événements, persistez l'instance et laissez Azure Service Bus\r\ntransporter les messages. Le résultat est un processus clair, observable et\r\nindulgent quand les choses tournent mal.\r",
      "lb": "E Checkout als MassTransit-Saga ze modelléieren gëtt koordinéiert, erholbar\r\nWorkflows ouni de Péng vun de verdeelten Transaktiounen. Definéiert d'Staaten an\r\nd'Eventer, persistéiert d'Instanz a loosst Azure Service Bus d'Messagen droen.\r\nD'Resultat ass e Prozess, dee kloer, observéierbar an nohalteg ass, wann eppes\r\nschif geet.\r"
    }
  },
  "python-for-finance": {
    "para-python-is-the-default": {
      "en": "Python is the default language of modern finance because its ecosystem covers\r\neverything from data cleaning to Monte Carlo simulation. This guide walks\r\nthrough the core libraries with real examples.\r",
      "fr": "Python est le langage de référence de la finance moderne, car son écosystème\r\ncouvre tout, du nettoyage de données à la simulation de Monte-Carlo. Ce guide\r\nparcourt les bibliothèques clés avec des exemples concrets.\r",
      "lb": "Python ass déi dominant Sprooch vun der moderner Finanz, well säin Ecosystem\r\nalles ofdeckt, vum Datenopraumen bis zur Monte-Carlo-Simulatioun. Dëse Guide\r\ngeet duerch d'Kärbibliothéiken mat reale Beispiller.\r"
    },
    "numpy-vectorized-financial-math": {
      "en": "## NumPy: vectorized financial math\r",
      "fr": "## NumPy : le calcul financier vectorisé\r",
      "lb": "## NumPy: vectoriséiert Finanz-Mathematik\r"
    },
    "para-numpy-gives-you-fast": {
      "en": "NumPy gives you fast, vectorized arrays — the foundation for every financial\r\ncalculation.\r",
      "fr": "NumPy fournit des tableaux rapides et vectorisés — le socle de tout calcul\r\nfinancier.\r",
      "lb": "NumPy gëtt Iech séier, vectoriséiert Arrays — d'Fundament fir all\r\nFinanzberechnung.\r"
    },
    "para-everything-is-element-wise-so": {
      "en": "Everything is element-wise, so you avoid Python loops and keep the math fast.\r",
      "fr": "Tout est élément par élément, ce qui évite les boucles Python et garde le\r\ncalcul rapide.\r",
      "lb": "Alles ass elementweis, sou datt Dir Python-Schleifen vermeit an d'Mathematik\r\nséier hält.\r"
    },
    "pandas-dataframes-and-time-series": {
      "en": "## pandas: DataFrames and time series\r",
      "fr": "## pandas : DataFrames et séries temporelles\r",
      "lb": "## pandas: DataFrames an Zäitserien\r"
    },
    "para-pandas-wraps-data-in": {
      "en": "pandas wraps data in a `DataFrame` with powerful time-series operations.\r",
      "fr": "pandas enveloppe les données dans un `DataFrame` avec de puissantes opérations\r\ntemporelles.\r",
      "lb": "pandas wéckelt d'Daten an en `DataFrame` mat mächtegen Zäitserie-Operatiounen.\r"
    },
    "para-resample-roll-and-shift": {
      "en": "Resample, roll, and shift time series with built-in methods:\r",
      "fr": "Rééchantillonnez, faites des fenêtres glissantes et des décalages avec des\r\nméthodes intégrées :\r",
      "lb": "Resamplet, rullt a verschitt Zäitserien mat agebaute Methoden:\r"
    },
    "getting-market-data-with-yfinance": {
      "en": "## Getting market data with yfinance\r",
      "fr": "## Récupérer des données de marché avec yfinance\r",
      "lb": "## Maartdaten mat yfinance kréien\r"
    },
    "para-yfinance-downloads-historical-prices": {
      "en": "`yfinance` downloads historical prices straight from Yahoo Finance.\r",
      "fr": "`yfinance` télécharge les historiques de prix directement depuis Yahoo Finance.\r",
      "lb": "`yfinance` luet historesch Präisser direkt vun Yahoo Finance erof.\r"
    },
    "para-you-can-also-pull": {
      "en": "You can also pull several tickers at once with `yf.download`.\r",
      "fr": "Vous pouvez aussi charger plusieurs tickers à la fois avec `yf.download`.\r",
      "lb": "Dir kënnt och méi Tickers gläichzäiteg mat `yf.download` lueden.\r"
    },
    "returns-and-portfolio-metrics": {
      "en": "## Returns and portfolio metrics\r",
      "fr": "## Rendements et métriques de portefeuille\r",
      "lb": "## Rendementer a Portfolio-Metriken\r"
    },
    "para-from-returns-compute-the": {
      "en": "From returns, compute the headline risk metrics.\r",
      "fr": "À partir des rendements, calculez les métriques de risque essentielles.\r",
      "lb": "Aus de Rendementer berechent d'Haaptrisikometriken.\r"
    },
    "para-correlation-between-two-assets": {
      "en": "Correlation between two assets:\r",
      "fr": "Corrélation entre deux actifs :\r",
      "lb": "Korrelatioun tëscht zwee Acteuren:\r"
    },
    "technical-indicators": {
      "en": "## Technical indicators\r",
      "fr": "## Indicateurs techniques\r",
      "lb": "## Technesch Indikatoren\r"
    },
    "para-moving-averages-are-a": {
      "en": "Moving averages are a few pandas calls.\r",
      "fr": "Les moyennes mobiles sont quelques appels pandas.\r",
      "lb": "Moyenne Mobilité si puer pandas-Opruff.\r"
    },
    "para-rolling-gives-a-simple": {
      "en": "`rolling` gives a simple window; `ewm` gives an exponential one. The crossover\r\nof a short over a long average is a classic signal.\r",
      "fr": "`rolling` donne une fenêtre simple ; `ewm` une exponentielle. Le croisement\r\nd'une moyenne courte au-dessus d'une longue est un signal classique.\r",
      "lb": "`rolling` gëtt eng einfach Fënster; `ewm` eng exponentiell. De Crossover vun\r\nenger kuerzer iwwer eng laang Moyenne ass e klassescht Signal.\r"
    },
    "visualization-with-matplotlib": {
      "en": "## Visualization with matplotlib\r",
      "fr": "## Visualisation avec matplotlib\r",
      "lb": "## Visualiséierung mat matplotlib\r"
    },
    "para-plot-prices-and-indicators": {
      "en": "Plot prices and indicators to sanity-check the data.\r",
      "fr": "Tracez les prix et les indicateurs pour vérifier les données.\r",
      "lb": "Zeechent Präisser an Indikatoren, fir d'Daten z'iwwerpréiwen.\r"
    },
    "monte-carlo-simulation": {
      "en": "## Monte Carlo simulation\r",
      "fr": "## Simulation de Monte-Carlo\r",
      "lb": "## Monte-Carlo-Simulatioun\r"
    },
    "para-simulate-many-future-price": {
      "en": "Simulate many future price paths by sampling random shocks.\r",
      "fr": "Simulez de nombreux chemins de prix futurs en échantillonnant des chocs\r\naléatoires.\r",
      "lb": "Simuléiert vill zukünfteg Präispied, andeems Dir zoufälleg Schocken sampelt.\r"
    },
    "para-this-underpins-risk-measures": {
      "en": "This underpins risk measures like value-at-risk and option pricing.\r",
      "fr": "Cela sous-tend des mesures de risque comme la value-at-risk et le pricing\r\nd'options.\r",
      "lb": "Dat ënnerleet Risikomoossen wéi Value-at-Risk an d'Optiounspräisser.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-numpy-does-the-math": {
      "en": "NumPy does the math, pandas shapes the data, yfinance feeds it, and matplotlib\r\nshows it. Master these four and you can compute returns, indicators, and Monte\r\nCarlo simulations — the backbone of quantitative finance in Python.\r",
      "fr": "NumPy fait le calcul, pandas façonne les données, yfinance les alimente et\r\nmatplotlib les montre. Maîtrisez ces quatre-là et vous pourrez calculer des\r\nrendements, des indicateurs et des simulations de Monte-Carlo — l'épine dorsale\r\nde la finance quantitative en Python.\r",
      "lb": "NumPy mécht d'Mathematik, pandas formt d'Daten, yfinance liwwert se a\r\nmatplotlib weist se. Wann Dir déi véier beherrscht, kënnt Dir Rendementer,\r\nIndikatoren a Monte-Carlo-Simulatiounen berechnen — d'Réckgrat vun der\r\nquantitativer Finanz a Python.\r"
    }
  },
  "relational-databases-for-experts": {
    "para-relational-databases-power-most": {
      "en": "Relational databases power most applications for good reason: they give you\r\nstrong guarantees and a clear model. This guide walks through the concepts every\r\nexpert DBA lives by, with SQL examples and diagrams.\r",
      "fr": "Les bases de données relationnelles font tourner la plupart des applications\r\npour une bonne raison : elles offrent de solides garanties et un modèle clair.\r\nCe guide parcourt les concepts sur lesquels tout DBA expert s'appuie, avec des\r\nexemples SQL et des diagrammes.\r",
      "lb": "Relationell Datenbanken dreuwen déi meescht Applikatiounen aus engem gudde\r\nGrond: si ginn Iech staark Garantien an e klore Modell. Dëse Guide geet duerch\r\nd'Konzepter, op déi sech all Expert-DBA verléisst, mat SQL-Beispiller an\r\nDiagrammer.\r"
    },
    "acid": {
      "en": "## ACID\r",
      "fr": "## ACID\r",
      "lb": "## ACID\r"
    },
    "para-acid-describes-the-four": {
      "en": "ACID describes the four guarantees a transaction provides.\r",
      "fr": "ACID décrit les quatre garanties qu'offre une transaction.\r",
      "lb": "ACID beschreift déi véier Garantien, déi eng Transaktioun bitt.\r"
    },
    "list-atomicity-all-statements-succeed-or-none-do": {
      "en": "- **Atomicity** — all statements succeed or none do.\r\n- **Consistency** — the database moves from one valid state to another.\r\n- **Isolation** — concurrent transactions do not interfere.\r\n- **Durability** — committed data survives a crash.\r",
      "fr": "- **Atomicité** — toutes les instructions réussissent ou aucune.\r\n- **Cohérence** — la base passe d'un état valide à un autre état valide.\r\n- **Isolation** — les transactions concurrentes n'interfèrent pas.\r\n- **Durabilité** — les données validées survivent à un crash.\r",
      "lb": "- **Atomicitéit** — all Aussoen erfollegen oder keng.\r\n- **Konsistenz** — d'Datebank wiesselt vun engem gültege Zoustand an en aneren.\r\n- **Isolatioun** — parallel Transaktioune stéieren sech net.\r\n- **Durabilitéit** — committéiert Daten iwwerliewen e Crash.\r"
    },
    "primary-keys": {
      "en": "## Primary keys\r",
      "fr": "## Clés primaires\r",
      "lb": "## Primärschlësselen\r"
    },
    "para-a-primary-key-uniquely": {
      "en": "A primary key uniquely identifies every row. It is always `NOT NULL` and unique.\r\nPrefer a surrogate key (identity, UUID) over a natural key that can change.\r",
      "fr": "Une clé primaire identifie chaque ligne de façon unique. Elle est toujours\r\n`NOT NULL` et unique. Préférez une clé de substitution (identité, UUID) à une\r\nclé naturelle qui peut changer.\r",
      "lb": "E Primärschlëssel identifizéiert all Zeil eendeiteg. En ass ëmmer `NOT NULL` an\r\neendeiteg. Léiwer e Surrogat-Schlëssel (Identity, UUID) wéi en natierleche\r\nSchlëssel, dee sech ännere kann.\r"
    },
    "para-composite-keys-identify-a": {
      "en": "Composite keys identify a row by several columns together — the classic\r\njoin-table case.\r",
      "fr": "Les clés composites identifient une ligne par plusieurs colonnes ensemble — le\r\ncas classique d'une table de jointure.\r",
      "lb": "Kompositschlësselen identifizéieren eng Zeil iwwer méi Spalten zesummen — dee\r\nklassesche Fall vun enger Join-Tabelle.\r"
    },
    "foreign-keys": {
      "en": "## Foreign keys\r",
      "fr": "## Clés étrangères\r",
      "lb": "## Friemschlësselen\r"
    },
    "para-a-foreign-key-enforces": {
      "en": "A foreign key enforces referential integrity: every value must exist in the\r\nreferenced table. `ON DELETE` / `ON UPDATE` tell the engine what to do when the\r\nparent changes.\r",
      "fr": "Une clé étrangère garantit l'intégrité référentielle : chaque valeur doit\r\nexister dans la table référencée. `ON DELETE` / `ON UPDATE` indiquent au moteur\r\nquoi faire quand le parent change.\r",
      "lb": "E Friemschlëssel garantéiert d'referenziell Integritéit: all Wäert muss an der\r\nreferenzéierter Tabelle existéieren. `ON DELETE` / `ON UPDATE` soen der Engine,\r\nwat se maache soll, wann den Elter sech ännert.\r"
    },
    "para-cascade-deletes-the-child": {
      "en": "`CASCADE` deletes the child when the parent goes; `SET NULL` clears the column;\r\n`RESTRICT` blocks the change.\r",
      "fr": "`CASCADE` supprime l'enfant quand le parent disparaît ; `SET NULL` efface la\r\ncolonne ; `RESTRICT` bloque le changement.\r",
      "lb": "`CASCADE` läscht d'Kand, wann den Elter verschwënnt; `SET NULL` läscht d'Spalt;\r\n`RESTRICT` blockéiert d'Ännerung.\r"
    },
    "sql-commands-ddl-dql-dml-dcl-tcl": {
      "en": "## SQL commands: DDL, DQL, DML, DCL, TCL\r",
      "fr": "## Commandes SQL : DDL, DQL, DML, DCL, TCL\r",
      "lb": "## SQL-Commande: DDL, DQL, DML, DCL, TCL\r"
    },
    "para-sql-divides-into-five": {
      "en": "SQL divides into five command families.\r",
      "fr": "SQL se divise en cinq familles de commandes.\r",
      "lb": "SQL deelt sech a fënnef Commandefamillen op.\r"
    },
    "ddl-data-definition-language": {
      "en": "### DDL — Data Definition Language\r",
      "fr": "### DDL — Langage de définition des données\r",
      "lb": "### DDL — Data Definition Language\r"
    },
    "para-defines-and-changes-the": {
      "en": "Defines and changes the schema.\r",
      "fr": "Définit et modifie le schéma.\r",
      "lb": "Definéiert an ännert de Schema.\r"
    },
    "dql-data-query-language": {
      "en": "### DQL — Data Query Language\r",
      "fr": "### DQL — Langage de requête des données\r",
      "lb": "### DQL — Data Query Language\r"
    },
    "para-reads-data-it-is": {
      "en": "Reads data. It is just `SELECT`.\r",
      "fr": "Lit les données. C'est simplement `SELECT`.\r",
      "lb": "Liest Daten. Et ass einfach `SELECT`.\r"
    },
    "dml-data-manipulation-language": {
      "en": "### DML — Data Manipulation Language\r",
      "fr": "### DML — Langage de manipulation des données\r",
      "lb": "### DML — Data Manipulation Language\r"
    },
    "para-changes-the-data-insert": {
      "en": "Changes the data: `INSERT`, `UPDATE`, `DELETE`.\r",
      "fr": "Modifie les données : `INSERT`, `UPDATE`, `DELETE`.\r",
      "lb": "Ännert d'Donnéeën: `INSERT`, `UPDATE`, `DELETE`.\r"
    },
    "para-update-and-delete-must": {
      "en": "`UPDATE` and `DELETE` must carry a `WHERE` clause — without one they affect\r\nevery row.\r",
      "fr": "`UPDATE` et `DELETE` doivent porter une clause `WHERE` — sans elle, ils\r\ntouchent chaque ligne.\r",
      "lb": "`UPDATE` an `DELETE` mussen eng `WHERE`-Klausel droen — ouni si betreffen se\r\nall Zeil.\r"
    },
    "dcl-data-control-language": {
      "en": "### DCL — Data Control Language\r",
      "fr": "### DCL — Langage de contrôle des données\r",
      "lb": "### DCL — Data Control Language\r"
    },
    "para-manages-permissions-with-grant": {
      "en": "Manages permissions with `GRANT` and `REVOKE`.\r",
      "fr": "Gère les permissions avec `GRANT` et `REVOKE`.\r",
      "lb": "Geréiert Permissiounen mat `GRANT` a `REVOKE`.\r"
    },
    "tcl-transaction-control-language": {
      "en": "### TCL — Transaction Control Language\r",
      "fr": "### TCL — Langage de contrôle des transactions\r",
      "lb": "### TCL — Transaction Control Language\r"
    },
    "para-controls-transactions-with-commit": {
      "en": "Controls transactions with `COMMIT`, `ROLLBACK`, and `SAVEPOINT`.\r",
      "fr": "Contrôle les transactions avec `COMMIT`, `ROLLBACK` et `SAVEPOINT`.\r",
      "lb": "Kontrolléiert Transaktioune mat `COMMIT`, `ROLLBACK` a `SAVEPOINT`.\r"
    },
    "joins": {
      "en": "## Joins\r",
      "fr": "## Jointures\r",
      "lb": "## Joins (Jointuren)\r"
    },
    "para-joins-combine-rows-from": {
      "en": "Joins combine rows from two or more tables using a join condition.\r",
      "fr": "Les jointures combinent des lignes de deux tables ou plus via une condition de\r\njointure.\r",
      "lb": "Joins kombinéieren Zeilen aus zwou oder méi Tabellen iwwer eng Join-Bedingung.\r"
    },
    "para-joins-pair-naturally-with": {
      "en": "Joins pair naturally with aggregation:\r",
      "fr": "Les jointures se combinent naturellement avec l'agrégation :\r",
      "lb": "Joins passen natierlech mat Aggregatioun zesummen:\r"
    },
    "para-use-table-aliases-c": {
      "en": "Use table aliases (`c`, `o`) for readability, and keep the join condition in\r\n`ON` rather than `WHERE` so the intent stays clear.\r",
      "fr": "Utilisez des alias de table (`c`, `o`) pour la lisibilité, et gardez la\r\ncondition de jointure dans `ON` plutôt que `WHERE` pour que l'intention reste\r\nclaire.\r",
      "lb": "Benotzt Table-Aliase (`c`, `o`) fir d'Liesbarkeet, an haalt d'Join-Bedingung am\r\n`ON` amplaz am `WHERE`, fir datt d'Intent kloer bleift.\r"
    },
    "indexes": {
      "en": "## Indexes\r",
      "fr": "## Index\r",
      "lb": "## Indexen\r"
    },
    "para-an-index-speeds-up": {
      "en": "An index speeds up lookups at the cost of write performance and storage. Most\r\ndatabases use a B-tree, which keeps data sorted for fast range and equality\r\nscans.\r",
      "fr": "Un index accélère les recherches au prix de performances d'écriture et de\r\nstockage. La plupart des bases utilisent un B-tree, qui garde les données triées\r\npour des recherches rapides par égalité et par plage.\r",
      "lb": "En Index beschleunegt Lookups op Käschte vu Schreifperformance a Späicher. Déi\r\nmeescht Datebanke benotzen e B-tree, deen d'Daten sortéiert hält fir séier\r\nEquality- a Range-Scans.\r"
    },
    "list-unique-index-enforces-uniqueness-like-a-unique-constraint": {
      "en": "- **Unique index** — enforces uniqueness like a unique constraint.\r\n- **Composite index** — covers multiple columns, left-to-right.\r\n- **Covering index** — stores extra columns so the query never touches the table.\r\n- **Partial index** — only indexes rows matching a condition.\r",
      "fr": "- **Index unique** — impose l'unicité comme une contrainte unique.\r\n- **Index composite** — couvre plusieurs colonnes, de gauche à droite.\r\n- **Index couvrant** — stocke des colonnes supplémentaires pour ne jamais toucher la table.\r\n- **Index partiel** — n'indexe que les lignes qui satisfont une condition.\r",
      "lb": "- **Unique Index** — setzt Eendeitegkeet duerch wéi en Unique Constraint.\r\n- **Kompositindex** — deckt méi Spalten, vu lénks no riets.\r\n- **Covering Index** — späichert zousätzlech Spalten, fir d'Tabelle ni ze beréieren.\r\n- **Partiellen Index** — indexéiert nëmmen d'Zeilen, déi eng Bedingung erfëllen.\r"
    },
    "para-a-rule-of-thumb": {
      "en": "A rule of thumb: index the columns you filter (`WHERE`), join (`JOIN`), and sort\r\n(`ORDER BY`) on.\r",
      "fr": "Une règle simple : indexez les colonnes que vous filtrez (`WHERE`), joignez\r\n(`JOIN`) et triez (`ORDER BY`).\r",
      "lb": "Eng einfach Reegel: indexéiert d'Spalten, déi Dir filtert (`WHERE`), joint\r\n(`JOIN`) a sortéiert (`ORDER BY`).\r"
    },
    "triggers": {
      "en": "## Triggers\r",
      "fr": "## Déclencheurs (triggers)\r",
      "lb": "## Triggers\r"
    },
    "para-a-trigger-runs-automatically": {
      "en": "A trigger runs automatically before or after `INSERT`, `UPDATE`, or `DELETE`.\r\nThey are great for audit trails and derived columns. In PostgreSQL the logic\r\nlives in a trigger *function*.\r",
      "fr": "Un trigger s'exécute automatiquement avant ou après `INSERT`, `UPDATE` ou\r\n`DELETE`. Ils sont parfaits pour les journaux d'audit et les colonnes dérivées.\r\nEn PostgreSQL, la logique vit dans une *fonction* de trigger.\r",
      "lb": "En Trigger leeft automatesch virun oder no `INSERT`, `UPDATE` oder `DELETE`. Si\r\nsinn ideal fir Audit-Loggen an ofgeleet Spalten. A PostgreSQL lieft d'Logik an\r\nenger Trigger-*Funktioun*.\r"
    },
    "functions": {
      "en": "## Functions\r",
      "fr": "## Fonctions\r",
      "lb": "## Funktiounen\r"
    },
    "para-functions-are-reusable-composable": {
      "en": "Functions are reusable, composable pieces of logic that return a value.\r",
      "fr": "Les fonctions sont des morceaux de logique réutilisables et composables qui\r\nrenvoient une valeur.\r",
      "lb": "Funktiounen si widderverwendbar, komponéierbar Stécker Logik, déi e Wäert\r\nzeréckginn.\r"
    },
    "para-a-scalar-function": {
      "en": "A scalar function:\r",
      "fr": "Une fonction scalaire :\r",
      "lb": "Eng Skalarfunktioun:\r"
    },
    "para-a-table-valued-function-returns": {
      "en": "A table-valued function (returns a set of rows):\r",
      "fr": "Une fonction table (renvoie un ensemble de lignes) :\r",
      "lb": "Eng Table-Funktioun (gëtt e Set vun Zeilen zeréck):\r"
    },
    "stored-procedures": {
      "en": "## Stored procedures\r",
      "fr": "## Procédures stockées\r",
      "lb": "## Stored Procedures\r"
    },
    "para-procedures-are-like-functions": {
      "en": "Procedures are like functions but can manage their own transactions and do not\r\nhave to return a value. Use them for multi-step, transactional operations.\r",
      "fr": "Les procédures ressemblent aux fonctions mais peuvent gérer leurs propres\r\ntransactions et n'ont pas à renvoyer de valeur. Utilisez-les pour des opérations\r\ntransactionnelles en plusieurs étapes.\r",
      "lb": "Proceduren sinn ewéi Funktiounen, kënnen awer hir eege Transaktioune geréieren a\r\nmussen kee Wäert zeréckginn. Benotzt se fir méi-Schrëtt-, transaktional\r\nOperatiounen.\r"
    },
    "isolation-levels": {
      "en": "## Isolation levels\r",
      "fr": "## Niveaux d'isolation\r",
      "lb": "## Isolatiounsniveauen\r"
    },
    "para-isolation-controls-how-much": {
      "en": "Isolation controls how much concurrent transactions see of each other.\r",
      "fr": "L'isolation contrôle ce que les transactions concurrentes voient les unes des\r\nautres.\r",
      "lb": "Isolatioun kontrolléiert, wéi vill parallel Transaktioune vunenee gesinn.\r"
    },
    "list-read-uncommitted-can-read-uncommitted-data-dirty-reads": {
      "en": "- **Read uncommitted** — can read uncommitted data (dirty reads).\r\n- **Read committed** — each statement sees a stable snapshot.\r\n- **Repeatable read** — the whole transaction sees one snapshot.\r\n- **Serializable** — transactions behave as if run one at a time.\r",
      "fr": "- **Read uncommitted** — peut lire des données non validées (lectures sales).\r\n- **Read committed** — chaque instruction voit un instantané stable.\r\n- **Repeatable read** — toute la transaction voit un seul instantané.\r\n- **Serializable** — les transactions se comportent comme si elles s'exécutaient une à une.\r",
      "lb": "- **Read uncommitted** — kann net-committéiert Daten liesen (dirty reads).\r\n- **Read committed** — all Ausso gesäit e stabilen Snapshot.\r\n- **Repeatable read** — déi ganz Transaktioun gesäit ee Snapshot.\r\n- **Serializable** — Transaktioune behuele sech, wéi wa se eng no där anerer lafen.\r"
    },
    "key-practices": {
      "en": "## Key practices\r",
      "fr": "## Bonnes pratiques\r",
      "lb": "## Wichteg Praktiken\r"
    },
    "list-use-stored-procedures-for-crud-centralize-the-data-logic-in-one-place": {
      "en": "- **Use stored procedures for CRUD** — centralize the data logic in one place\r\n  and grant access to the procedure instead of the table.\r\n- **Use parameterized queries** — never concatenate user input into SQL; bind\r\n  values as parameters to prevent SQL injection.\r\n- **Manage permissions** — let users execute CRUD procedures without direct\r\n  table access.\r",
      "fr": "- **Utilisez des procédures stockées pour le CRUD** — centralisez la logique de\r\n  données en un seul endroit et accordez l'accès à la procédure plutôt qu'à la\r\n  table.\r\n- **Utilisez des requêtes paramétrées** — ne concaténez jamais l'entrée\r\n  utilisateur dans le SQL ; liez les valeurs en paramètres pour prévenir\r\n  l'injection SQL.\r\n- **Gérez les permissions** — laissez les utilisateurs exécuter les procédures\r\n  CRUD sans accès direct aux tables.\r",
      "lb": "- **Benotzt Stored Procedures fir de CRUD** — zentraliséiert d'Datelogik op enger\r\n  Plaz a gëtt Zougang op d'Prozedur amplaz op d'Tabelle.\r\n- **Benotzt parametriséiert Querien** — concatenéiert ni Benotzerinput an SQL;\r\n  bindt Wäerter als Parameter, fir SQL-Injektioun ze verhënneren.\r\n- **Gitt Permissiounen** — loosst Benotzer CRUD-Prozeduren ausféieren, ouni\r\n  direkten Tabellenzougang.\r"
    },
    "para-parameterized-statements-separate-the": {
      "en": "Parameterized statements separate the SQL from the values, so input is treated\r\nas data. Combined with procedure-level grants, the surface stays small and\r\nauditable.\r",
      "fr": "Les instructions paramétrées séparent le SQL des valeurs, de sorte que l'entrée\r\nest traitée comme des données. Combinées aux permissions au niveau des\r\nprocédures, la surface reste petite et auditable.\r",
      "lb": "Parametriséiert Aussoen trennen de SQL vun de Wäerter, sou datt Input als Daten\r\nbehandelt gëtt. Kombinéiert mat Prozedurniveau-Permissioune bleift d'Uewerfläch\r\nkleng an auditéierbar.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-acid-gives-you-correctness": {
      "en": "ACID gives you correctness; keys give you integrity; indexes give you speed;\r\ntriggers, functions, and procedures give you reusable, enforced logic. Mastering\r\nthese — and knowing the trade-offs of each — is what separates a DBA from a\r\ndeveloper who happens to write SQL.\r",
      "fr": "ACID vous donne la correction ; les clés donnent l'intégrité ; les index donnent\r\nla vitesse ; les triggers, fonctions et procédures donnent une logique\r\nréutilisable et imposée. Maîtriser tout cela — et en connaître les compromis —\r\nc'est ce qui distingue un DBA d'un développeur qui écrit du SQL par hasard.\r",
      "lb": "ACID gëtt Iech Korrektheet; Schlësselen ginn Integritéit; Indexe ginn Tempo;\r\nTriggers, Funktiounen a Prozedure ginn eng widderverwendbar, duerchgesat Logik.\r\nDat alles ze beherrschen — an d'Kompromësser ze kennen — ënnerscheet en DBA vun\r\nengem Entwéckler, deen zoufälleg SQL schreift.\r"
    }
  },
  "solid-principles-in-practice": {
    "para-the-solid-principles-are": {
      "en": "The **SOLID** principles are a set of five design guidelines that help produce\r\nmaintainable, scalable software.\r",
      "fr": "Les principes **SOLID** sont un ensemble de cinq règles de conception qui aident\r\nà produire des logiciels maintenables et évolutifs.\r",
      "lb": "D'**SOLID**-Prinzipie sinn e Set vu fënnef Design-Regelen, déi hëllefen,\r\nerhalbar a skaléierbar Software ze produzéieren.\r"
    },
    "para-principle-focus": {
      "en": "| Principle | Focus |\r\n| --------- | ----- |\r\n| **S**RP | One reason to change |\r\n| **O**CP | Open for extension, closed for modification |\r\n| **L**SP | Subtypes must be substitutable |\r\n| **I**SP | Small, focused interfaces |\r\n| **D**IP | Depend on abstractions, not concretions |\r",
      "fr": "| Principe | Objectif |\r\n| -------- | -------- |\r\n| **S**RP | Une seule raison de changer |\r\n| **O**CP | Ouvert à l'extension, fermé à la modification |\r\n| **L**SP | Les sous-types doivent être substituables |\r\n| **I**SP | Des interfaces petites et ciblées |\r\n| **D**IP | Dépendre des abstractions, pas des implémentations |\r",
      "lb": "| Prinzip | Fokus |\r\n| ------- | ----- |\r\n| **S**RP | Nëmmen ee Grond fir ze änneren |\r\n| **O**CP | Oppen fir Extensioun, zou fir Ännerung |\r\n| **L**SP | Subtypen mussen austauschbar sinn |\r\n| **I**SP | Kleng, geziilt Interfaces |\r\n| **D**IP | Vun Abstraktiounen ofhänken, net vu Konkretiounen |\r"
    },
    "single-responsibility": {
      "en": "## Single Responsibility\r",
      "fr": "## Responsabilité unique\r",
      "lb": "## Single Responsibility\r"
    },
    "para-a-class-should-have": {
      "en": "A class should have only one reason to change.\r",
      "fr": "Une classe ne doit avoir qu'une seule raison de changer.\r",
      "lb": "Eng Klass soll nëmmen ee Grond hunn, fir sech z'änneren.\r"
    },
    "para-split-print-into-a": {
      "en": "Split `print()` into a dedicated `InvoicePrinter` class and each concern evolves\r\nindependently.\r",
      "fr": "Extraire `print()` dans une classe dédiée `InvoicePrinter` permet à chaque\r\npréoccupation d'évoluer indépendamment.\r",
      "lb": "Splitt `print()` an eng eege `InvoicePrinter`-Klass an all Concern kann sech\r\nonofhängeg weiderentwéckelen.\r"
    },
    "open-closed-principle": {
      "en": "## Open/Closed Principle\r",
      "fr": "## Principe ouvert/fermé (OCP)\r",
      "lb": "## Open/Closed Principle (OCP)\r"
    },
    "para-a-module-should-be": {
      "en": "A module should be open for extension but closed for modification — new behavior\r\narrives by adding code, not by rewriting existing code.\r",
      "fr": "Un module doit être ouvert à l'extension mais fermé à la modification — le\r\nnouveau comportement s'ajoute en écrivant du code, pas en réécrivant l'existant.\r",
      "lb": "E Modul soll oppen fir Extensioun sinn, awer zou fir Ännerung — neit Verhalen\r\nkënnt duerch neie Code derbäi, net duerch Ëmschreiwe vum existéierende.\r"
    },
    "para-adding-a-new-discount": {
      "en": "Adding a new discount type means adding a class; the existing ones stay untouched.\r",
      "fr": "Ajouter un nouveau type de remise revient à ajouter une classe ; les existantes\r\nrestent intactes.\r",
      "lb": "Eng nei Remiss-Art derbäisetzen heescht eng nei Klass derbäisetzen; déi\r\nexistéierend bleiwen onverännert.\r"
    },
    "liskov-substitution": {
      "en": "## Liskov Substitution\r",
      "fr": "## Substitution de Liskov (LSP)\r",
      "lb": "## Liskov Substitution (LSP)\r"
    },
    "para-objects-of-a-subtype": {
      "en": "Objects of a subtype should be usable anywhere the parent type is expected,\r\nwithout surprising behavior.\r",
      "fr": "Les objets d'un sous-type doivent pouvoir être utilisés partout où le type parent\r\nest attendu, sans comportement surprenant.\r",
      "lb": "Objeten vun engem Subtyp mussen iwwerall gebraucht kënne ginn, wou den Elterentyp\r\nerwaart gëtt, ouni iwwerraschend Verhalen.\r"
    },
    "para-a-square-is-not": {
      "en": "A `Square` is not a faithful substitute for `Rectangle` — resizing one side\r\nsilently changes the other. Model them separately or behind a common abstraction.\r",
      "fr": "Un `Square` n'est pas un substitut fidèle de `Rectangle` — redimensionner un côté\r\nmodifie silencieusement l'autre. Modélisez-les séparément ou derrière une\r\nabstraction commune.\r",
      "lb": "E `Square` ass keen treien Ersatz fir e `Rectangle` — eng Säit änneren ännert\r\nheimlech och déi aner. Modelléiert se getrennt oder hannert enger gemeinsamer\r\nAbstraktioun.\r"
    },
    "interface-segregation": {
      "en": "## Interface Segregation\r",
      "fr": "## Ségrégation des interfaces (ISP)\r",
      "lb": "## Interface Segregation (ISP)\r"
    },
    "para-a-client-should-not": {
      "en": "A client should not be forced to depend on methods it never uses. Prefer several\r\nnarrow interfaces over one broad one.\r",
      "fr": "Un client ne doit pas être forcé de dépendre de méthodes qu'il n'utilise jamais.\r\nPréférez plusieurs interfaces étroites à une seule interface large.\r",
      "lb": "E Client soll net gezwonge sinn, vu Methoden ofzehänken, déi en ni benotzt.\r\nLéiwer méi schmuel Interfaces wéi eent breet.\r"
    },
    "para-now-each-class-implements": {
      "en": "Now each class implements only what it actually needs.\r",
      "fr": "Désormais, chaque classe n'implémente que ce dont elle a réellement besoin.\r",
      "lb": "Elo implementéiert all Klass nëmmen dat, wat se wierklech brauch.\r"
    },
    "dependency-inversion": {
      "en": "## Dependency Inversion\r",
      "fr": "## Inversion des dépendances\r",
      "lb": "## Dependency Inversion\r"
    },
    "para-high-level-modules-should-not": {
      "en": "High-level modules should not depend on low-level modules. Both should depend on\r\nabstractions.\r",
      "fr": "Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau.\r\nTous deux doivent dépendre d'abstractions.\r",
      "lb": "Héich-Niveau-Module sollen net vun Déif-Niveau-Modulen ofhänken. Béid sollen\r\nvun Abstraktiounen ofhänken.\r"
    },
    "para-this-keeps-business-logic": {
      "en": "This keeps business logic testable and decoupled from the clock.\r",
      "fr": "La logique métier reste ainsi testable et découplée de l'horloge.\r",
      "lb": "D'Business-Logik bleift esou testbar an decoupled vun der Auer.\r"
    },
    "para-more-in-depth-articles-will": {
      "en": "More in-depth articles will follow — this one just sets the stage.\r",
      "fr": "D'autres articles plus détaillés suivront — celui-ci ne fait que poser les bases.\r",
      "lb": "Méi detailléiert Artikele kommen nach — dësen mécht just den Optakt.\r"
    }
  },
  "tailwind-css-for-experts": {
    "para-tailwind-css-v4-moved": {
      "en": "Tailwind CSS v4 moved to a CSS-first configuration and a faster engine. This\r\nguide covers the patterns and tools that keep a Tailwind codebase clean,\r\nscalable, and good-looking.\r",
      "fr": "Tailwind CSS v4 est passé à une configuration en CSS et à un moteur plus\r\nrapide. Ce guide couvre les motifs et les outils qui gardent une base Tailwind\r\npropre, scalable et agréable à regarder.\r",
      "lb": "Tailwind CSS v4 ass op eng CSS-first Configuratioun an e méi séieren Engine\r\ngewiesselt. Dëse Guide deckt d'Musteren an d'Tools of, déi eng Tailwind-Codebasis\r\npropper, skaléierbar an ugehueleg halen.\r"
    },
    "tailwind-css-v4": {
      "en": "## Tailwind CSS v4\r",
      "fr": "## Tailwind CSS v4\r",
      "lb": "## Tailwind CSS v4\r"
    },
    "para-version-4-is-configured": {
      "en": "Version 4 is configured entirely in CSS. There is no `tailwind.config.js`; you\r\njust import it and declare your design tokens.\r",
      "fr": "La version 4 se configure entièrement en CSS. Pas de `tailwind.config.js` : vous\r\nl'importez et déclarez vos jetons de design.\r",
      "lb": "Versioun 4 gëtt komplett am CSS konfiguréiert. Kee `tailwind.config.js`; Dir\r\nimportéiert en einfach an deklaréiert Är Design Tokens.\r"
    },
    "para-custom-utilities-and-variants": {
      "en": "Custom utilities and variants are declared in the same file.\r",
      "fr": "Les utilitaires et variantes personnalisés se déclarent dans le même fichier.\r",
      "lb": "Eegen Utilities a Variante ginn am selwechte Fichier deklaréiert.\r"
    },
    "design-tokens": {
      "en": "## Design tokens\r",
      "fr": "## Jetons de design\r",
      "lb": "## Design Tokens\r"
    },
    "para-define-tokens-once-and": {
      "en": "Define tokens once and reference them everywhere, so colors and spacing stay\r\nconsistent. Arbitrary values like `bg-[#6366f1]` are for one-offs, not a\r\ndesign system.\r",
      "fr": "Définissez les jetons une fois et référencez-les partout, pour que les couleurs\r\net les espacements restent cohérents. Les valeurs arbitraires comme\r\n`bg-[#6366f1]` sont pour les cas uniques, pas pour un design system.\r",
      "lb": "Definéiert Tokens eemol a referenzéiert se iwwerall, fir datt Faarwen an\r\nOfstänn konsequent bleiwen. Arbiträr Wäerter wéi `bg-[#6366f1]` sinn fir\r\nEemolegkeeten, net fir en Design System.\r"
    },
    "para-then-bg-primary-500-p-18-and": {
      "en": "Then `bg-primary-500`, `p-18`, and `text-primary-600` all work.\r",
      "fr": "Alors `bg-primary-500`, `p-18` et `text-primary-600` fonctionnent.\r",
      "lb": "Da funktionéieren `bg-primary-500`, `p-18` an `text-primary-600`.\r"
    },
    "utility-first-best-practices": {
      "en": "## Utility-first best practices\r",
      "fr": "## Bonnes pratiques utility-first\r",
      "lb": "## Utility-first Best Practices\r"
    },
    "para-compose-small-utilities-instead": {
      "en": "Compose small utilities instead of writing bespoke CSS, but extract a pattern\r\nthe moment it repeats.\r",
      "fr": "Composez de petits utilitaires plutôt que d'écrire du CSS sur mesure, mais\r\nextrayez un motif dès qu'il se répète.\r",
      "lb": "Komponéiert kleng Utilities amplaz eegent CSS ze schreiwen, awer extrahéiert e\r\nMuster, soubal et sech widderhëlt.\r"
    },
    "para-rules-that-keep-it": {
      "en": "Rules that keep it maintainable:\r",
      "fr": "Règles pour rester maintenable :\r",
      "lb": "Reegele fir et erhalbar ze halen:\r"
    },
    "list-reuse-tokens-not-raw-values": {
      "en": "- Reuse tokens, not raw values.\r\n- Sort classes automatically (see the Prettier plugin below).\r\n- Prefer `gap`/`space-*` over manual margins.\r\n- Keep responsive and state variants close to the base classes.\r",
      "fr": "- Réutilisez les jetons, pas les valeurs brutes.\r\n- Triez les classes automatiquement (voir le plugin Prettier ci-dessous).\r\n- Préférez `gap`/`space-*` aux marges manuelles.\r\n- Gardez les variantes responsive et d'état proches des classes de base.\r",
      "lb": "- Benotzt Tokens, keng réi Wäerter.\r\n- Sortéiert d'Klassen automatesch (kuckt de Prettier-Plugin drënner).\r\n- Léiwer `gap`/`space-*` wéi manuell Margen.\r\n- Haalt responsive- an Zoustandsvariante no bei de Basisklassen.\r"
    },
    "reusable-components": {
      "en": "## Reusable components\r",
      "fr": "## Composants réutilisables\r",
      "lb": "## Widderverwendbar Komponenten\r"
    },
    "para-when-a-pattern-repeats": {
      "en": "When a pattern repeats, extract it. Tailwind offers three levels.\r",
      "fr": "Quand un motif se répète, extrayez-le. Tailwind offre trois niveaux.\r",
      "lb": "Wann e Muster sech widderhëlt, extrahéiert et. Tailwind bitt dräi Niveauen.\r"
    },
    "para-component-classes-with-apply": {
      "en": "**Component classes** with `@apply`:\r",
      "fr": "**Classes composants** avec `@apply` :\r",
      "lb": "**Komponentklassen** mat `@apply`:\r"
    },
    "para-class-variants-with-class-variance-authority": {
      "en": "**Class variants** with `class-variance-authority` (great for React/Solid):\r",
      "fr": "**Variantes de classes** avec `class-variance-authority` (idéal pour React/Solid) :\r",
      "lb": "**Klassvariante** mat `class-variance-authority` (gutt fir React/Solid):\r"
    },
    "para-merging-classes-with-clsx": {
      "en": "**Merging classes** with `clsx` + `tailwind-merge`:\r",
      "fr": "**Fusion de classes** avec `clsx` + `tailwind-merge` :\r",
      "lb": "**Klassen zesummeféieren** mat `clsx` + `tailwind-merge`:\r"
    },
    "the-component-ecosystem": {
      "en": "## The component ecosystem\r",
      "fr": "## L'écosystème de composants\r",
      "lb": "## Den Komponenten-Ecosystem\r"
    },
    "para-you-do-not-have": {
      "en": "You do not have to build every primitive from scratch.\r",
      "fr": "Vous n'avez pas à construire chaque primitive de zéro.\r",
      "lb": "Dir musst net all Primitiv vun Null bauen.\r"
    },
    "list-shadcn-ui-copy-paste-radix-based-components-you-own-and-edit": {
      "en": "- **shadcn/ui** — copy-paste, Radix-based components you own and edit.\r\n- **Radix UI** / **Headless UI** — accessible, unstyled primitives.\r\n- **daisyUI** — ready-made, themeable component classes.\r",
      "fr": "- **shadcn/ui** — des composants à copier-coller, basés sur Radix, que vous\r\n  possédez et modifiez.\r\n- **Radix UI** / **Headless UI** — des primitives accessibles et sans style.\r\n- **daisyUI** — des classes de composants prêtes à l'emploi et thématisables.\r",
      "lb": "- **shadcn/ui** — Copy-Paste-Komponenten, op Radix baséiert, déi Dir besëtzt an\r\n  editéiert.\r\n- **Radix UI** / **Headless UI** — accessibel, ongestylt Primitiver.\r\n- **daisyUI** — fäerdeg, thematiséierbar Komponentklassen.\r"
    },
    "para-pair-them-with-tailwind": {
      "en": "Pair them with Tailwind for full control without the accessibility burden.\r",
      "fr": "Associez-les à Tailwind pour un contrôle total sans le fardeau de\r\nl'accessibilité.\r",
      "lb": "Kombinéiert se mat Tailwind fir voll Kontroll ouni d'Accessibilitéitslaascht.\r"
    },
    "tooling": {
      "en": "## Tooling\r",
      "fr": "## Outillage\r",
      "lb": "## Tooling\r"
    },
    "list-tailwindcss-vite-the-vite-plugin-add-it-once-forget-it": {
      "en": "- `@tailwindcss/vite` — the Vite plugin (add it once, forget it).\r\n- `prettier-plugin-tailwindcss` — sorts utility classes for a consistent order.\r\n- `clsx` + `tailwind-merge` — compose and dedupe classes.\r\n- `class-variance-authority` — typed component variants.\r",
      "fr": "- `@tailwindcss/vite` — le plugin Vite (ajoutez-le une fois, oubliez-le).\r\n- `prettier-plugin-tailwindcss` — trie les classes utilitaires pour un ordre\r\n  cohérent.\r\n- `clsx` + `tailwind-merge` — composez et dédupliquez les classes.\r\n- `class-variance-authority` — des variantes de composants typées.\r",
      "lb": "- `@tailwindcss/vite` — de Vite-Plugin (eemol addéieren, vergiessen).\r\n- `prettier-plugin-tailwindcss` — sortéiert Utility-Klassen fir eng konsequent\r\n  Reiefolleg.\r\n- `clsx` + `tailwind-merge` — komponéieren an deduplizéieren.\r\n- `class-variance-authority` — typiséiert Komponentvariante.\r"
    },
    "making-it-beautiful": {
      "en": "## Making it beautiful\r",
      "fr": "## Rendre l'UI magnifique\r",
      "lb": "## Schéin maachen\r"
    },
    "para-beautiful-ui-is-mostly": {
      "en": "Beautiful UI is mostly consistency, not decoration.\r",
      "fr": "Une belle UI est surtout de la cohérence, pas de la décoration.\r",
      "lb": "Eng schéin UI ass virun allem Konsequenz, net Dekoratioun.\r"
    },
    "list-typography-one-font-scale-comfortable-line-height-constrained-measure": {
      "en": "- **Typography** — one font scale, comfortable line height, constrained measure.\r\n- **Spacing** — stick to the 4px scale; align to a grid.\r\n- **Color** — a small palette with one accent; check contrast for text.\r\n- **Motion** — short, subtle transitions (`transition`, `duration-150`).\r\n- **Dark mode** — design both, driven by the `dark` variant.\r",
      "fr": "- **Typographie** — une seule échelle de polices, une hauteur de ligne\r\n  confortable, une mesure contrainte.\r\n- **Espacement** — restez sur l'échelle de 4px ; alignez sur une grille.\r\n- **Couleur** — une petite palette avec un accent unique ; vérifiez le contraste.\r\n- **Mouvement** — des transitions courtes et subtiles (`transition`,\r\n  `duration-150`).\r\n- **Mode sombre** — concevez les deux, piloté par la variante `dark`.\r",
      "lb": "- **Typographie** — eng Fontskala, eng gemittlech Zeilenhéicht, e begrenzten\r\n  Mooss.\r\n- **Ofstänn** — bleift op der 4px-Skala; alignéiert op e Gitter.\r\n- **Faarf** — eng kleng Palette mat engem Akzent; kontrolléiert de Kontrast.\r\n- **Beweegung** — kuerz, subtil Iwwergäng (`transition`, `duration-150`).\r\n- **Dark Mode** — designéiert béid, gedriwwen duerch d'`dark`-Variante.\r"
    },
    "ready-production-examples": {
      "en": "## Ready production examples\r",
      "fr": "## Exemples prêts pour la production\r",
      "lb": "## Fäerdeg Produktiounsbeispiller\r"
    },
    "para-a-complete-copy-pasteable-setup": {
      "en": "A complete, copy-pasteable setup: design tokens, a `cn` helper, and typed\r\ncomponents.\r",
      "fr": "Une configuration complète, prête à copier : des jetons de design, un utilitaire\r\n`cn` et des composants typés.\r",
      "lb": "E komplette, kopéierbare Setup: Design Tokens, en `cn`-Hëllefsmëttel a\r\ntypiséiert Komponenten.\r"
    },
    "para-theme-tokens-theme-css": {
      "en": "**Theme tokens** (`theme.css`):\r",
      "fr": "**Jetons de thème** (`theme.css`) :\r",
      "lb": "**Theme Tokens** (`theme.css`):\r"
    },
    "para-button-button-tsx-with-typed": {
      "en": "**Button** (`button.tsx`) with typed variants:\r",
      "fr": "**Bouton** (`button.tsx`) avec variantes typées :\r",
      "lb": "**Button** (`button.tsx`) mat typiséierte Varianten:\r"
    },
    "para-card-and-input-card-tsx": {
      "en": "**Card and Input** (`card.tsx`, `input.tsx`):\r",
      "fr": "**Carte et champ** (`card.tsx`, `input.tsx`) :\r",
      "lb": "**Card an Input** (`card.tsx`, `input.tsx`):\r"
    },
    "para-these-tokens-and-components": {
      "en": "These tokens and components form the base of a real design system: consistent\r\ncolors, typed variants, and a single source of truth.\r",
      "fr": "Ces jetons et composants forment la base d'un vrai design system : des couleurs\r\ncohérentes, des variantes typées et une source unique de vérité.\r",
      "lb": "Dës Tokens a Komponente bilden d'Basis vun engem richtegen Design System:\r\nkonsequent Faarwen, typiséiert Varianten an eng eenzeg Quell vun der Wourecht.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-tailwind-v4-s-css-first-setup": {
      "en": "Tailwind v4's CSS-first setup, design tokens, and component extraction (with\r\n`cva` and `cn`) give you a system that scales. Add shadcn/Radix for primitives\r\nand the Prettier plugin for order, and you get beautiful, maintainable UI.\r",
      "fr": "La configuration CSS-first de Tailwind v4, les jetons de design et l'extraction\r\nde composants (avec `cva` et `cn`) vous donnent un système qui passe à\r\nl'échelle. Ajoutez shadcn/Radix pour les primitives et le plugin Prettier pour\r\nl'ordre, et vous obtenez une UI belle et maintenable.\r",
      "lb": "Dem Tailwind v4 säi CSS-first Setup, Design Tokens a Komponentenextraktioun\r\n(mat `cva` a `cn`) ginn Iech e System, deen skaléiert. Füügt shadcn/Radix fir\r\nPrimitiver an de Prettier-Plugin fir d'Reiefolleg derbäi, an Dir kritt eng\r\nschéin, erhalbar UI.\r"
    }
  },
  "typescript-javascript-for-experts": {
    "para-javascript-keeps-gaining-small": {
      "en": "JavaScript keeps gaining small, sharp features, and TypeScript keeps turning\r\nruntime mistakes into compile-time errors. This guide covers the parts that\r\nmatter for production front-end code today, with examples.\r",
      "fr": "JavaScript gagne sans cesse de petites fonctionnalités précises, et TypeScript\r\ntransforme sans cesse les erreurs d'exécution en erreurs de compilation. Ce\r\nguide couvre ce qui compte pour du code front-end de production aujourd'hui,\r\navec des exemples.\r",
      "lb": "JavaScript kritt dauernd kleng, prezis Features, an TypeScript mécht aus\r\nRuntime-Feeler ëmmer méi Compile-Zäit-Feeler. Dëse Guide deckt dat of, wat haut\r\nfir Front-End-Code an der Produktioun wichteg ass, mat Beispiller.\r"
    },
    "javascript-the-modern-essentials": {
      "en": "## JavaScript: the modern essentials\r",
      "fr": "## JavaScript : les essentiels modernes\r",
      "lb": "## JavaScript: déi modern Essentiell\r"
    },
    "optional-chaining-and-nullish-coalescing": {
      "en": "### Optional chaining and nullish coalescing\r",
      "fr": "### Chaînage optionnel et coalescence des nuls\r",
      "lb": "### Optional Chaining an Nullish Coalescing\r"
    },
    "para-read-nested-data-without": {
      "en": "Read nested data without exploding, and fall back only on `null`/`undefined`.\r",
      "fr": "Lire des données imbriquées sans exploser, et ne retomber que sur\r\n`null`/`undefined`.\r",
      "lb": "Verschachtelt Daten liesen ouni ze explodéieren, an nëmmen op `null`/`undefined`\r\nzréckfalen.\r"
    },
    "logical-assignment": {
      "en": "### Logical assignment\r",
      "fr": "### Affectation logique\r",
      "lb": "### Logesch Zouwäisung\r"
    },
    "para-mutate-a-variable-only": {
      "en": "Mutate a variable only when it is falsy, nullish, or truthy.\r",
      "fr": "Ne modifier une variable que lorsqu'elle est fausse, nulle ou vraie.\r",
      "lb": "Eng Variabel nëmmen ännere, wann se falsch, nullish oder wouer ass.\r"
    },
    "non-mutating-array-methods": {
      "en": "### Non-mutating array methods\r",
      "fr": "### Méthodes de tableau non mutantes\r",
      "lb": "### Net-mutéierend Array-Methoden\r"
    },
    "para-tosorted-toreversed-tospliced-and": {
      "en": "`toSorted`, `toReversed`, `toSpliced`, and `with` return new arrays instead of\r\nmutating, which pairs perfectly with immutable state.\r",
      "fr": "`toSorted`, `toReversed`, `toSpliced` et `with` renvoient de nouveaux tableaux\r\nau lieu de muter, ce qui se marie parfaitement avec l'état immuable.\r",
      "lb": "`toSorted`, `toReversed`, `toSpliced` a `with` ginn nei Arrays zeréck amplaz ze\r\nmutéieren, wat perfekt mat immutablem Zoustand zesummegeet.\r"
    },
    "grouping-and-cloning": {
      "en": "### Grouping and cloning\r",
      "fr": "### Groupement et clonage\r",
      "lb": "### Gruppéieren a Klonen\r"
    },
    "para-object-groupby-buckets-a-collection": {
      "en": "`Object.groupBy` buckets a collection in one line, and `structuredClone` deep\r\ncopies without JSON hacks.\r",
      "fr": "`Object.groupBy` répartit une collection en une ligne, et `structuredClone` fait\r\nune copie profonde sans bidouillage JSON.\r",
      "lb": "`Object.groupBy` verdeelt eng Kollektioun an enger Zeil, an `structuredClone`\r\nmacht eng déif Kopie ouni JSON-Gefuddel.\r"
    },
    "promise-helpers": {
      "en": "### Promise helpers\r",
      "fr": "### Aides pour les promesses\r",
      "lb": "### Promise-Hëllefen\r"
    },
    "para-promise-withresolvers-gives-you-the": {
      "en": "`Promise.withResolvers` gives you the resolve/reject functions without wrapping\r\na promise in a constructor.\r",
      "fr": "`Promise.withResolvers` vous donne les fonctions resolve/reject sans envelopper\r\nune promesse dans un constructeur.\r",
      "lb": "`Promise.withResolvers` gëtt Iech d'resolve/reject-Funktiounen, ouni eng Promise\r\nan e Konstruktor ze wéckelen.\r"
    },
    "para-array-fromasync-turns-an-async": {
      "en": "`Array.fromAsync` turns an async iterable into an array.\r",
      "fr": "`Array.fromAsync` transforme un itérable asynchrone en tableau.\r",
      "lb": "`Array.fromAsync` mécht aus engem asynchrone Iterable en Array.\r"
    },
    "promises-and-observables": {
      "en": "## Promises and Observables\r",
      "fr": "## Promesses et Observables\r",
      "lb": "## Promises an Observables\r"
    },
    "promises": {
      "en": "### Promises\r",
      "fr": "### Promesses\r",
      "lb": "### Promises\r"
    },
    "para-a-promise-represents-a": {
      "en": "A promise represents a value that will be available later. `async`/`await`\r\nflattens the callbacks.\r",
      "fr": "Une promesse représente une valeur qui sera disponible plus tard.\r\n`async`/`await` aplatit les callbacks.\r",
      "lb": "Eng Promise representéiert e Wäert, deen méi spéit verfügbar ass.\r\n`async`/`await` flaacht d'Callbacken of.\r"
    },
    "para-run-independent-work-in": {
      "en": "Run independent work in parallel and collect the results:\r",
      "fr": "Exécutez des travaux indépendants en parallèle et récupérez les résultats :\r",
      "lb": "Lausst onofhängeg Aarbecht parallel an sammelt d'Resultater:\r"
    },
    "observables": {
      "en": "### Observables\r",
      "fr": "### Observables\r",
      "lb": "### Observables\r"
    },
    "para-observables-rxjs-model-a": {
      "en": "Observables (RxJS) model a stream of values over time. Build pipelines from\r\noperators and always unsubscribe.\r",
      "fr": "Les Observables (RxJS) modélisent un flux de valeurs dans le temps. Construisez\r\ndes pipelines d'opérateurs et désabonnez-vous toujours.\r",
      "lb": "Observables (RxJS) modelléieren e Stroum vu Wäerter iwwer d'Zäit. Baut Pipelines\r\naus Operatoren an deabonnéiert Iech ëmmer.\r"
    },
    "para-a-promise-produces-one": {
      "en": "A promise produces one value; an observable produces many over time. Use\r\npromises for single results, observables for events and streams.\r",
      "fr": "Une promesse produit une valeur ; un observable en produit plusieurs dans le\r\ntemps. Utilisez les promesses pour des résultats uniques, les observables pour\r\ndes événements et des flux.\r",
      "lb": "Eng Promise produzéiert ee Wäert; en Observable produzéiert méi iwwer d'Zäit.\r\nBenotzt Promise fir eenzel Resultater, Observables fir Eventer a Stréim.\r"
    },
    "typescript-the-type-system-that-matters": {
      "en": "## TypeScript: the type system that matters\r",
      "fr": "## TypeScript : le système de types qui compte\r",
      "lb": "## TypeScript: den Typsystem, deen zielt\r"
    },
    "unknown-beats-any": {
      "en": "### `unknown` beats `any`\r",
      "fr": "### `unknown` bat `any`\r",
      "lb": "### `unknown` schléit `any`\r"
    },
    "para-any-turns-the-type": {
      "en": "`any` turns the type checker off; `unknown` forces you to narrow first.\r",
      "fr": "`any` désactive le vérificateur de types ; `unknown` vous oblige à rétrécir\r\nd'abord.\r",
      "lb": "`any` schalt den Typprüfer aus; `unknown` zwéngt Iech, fir d'éischt anzeschränken.\r"
    },
    "satisfies-and-as-const": {
      "en": "### `satisfies` and `as const`\r",
      "fr": "### `satisfies` et `as const`\r",
      "lb": "### `satisfies` an `as const`\r"
    },
    "para-satisfies-checks-an-object": {
      "en": "`satisfies` checks an object against a type without widening it, and `as const`\r\nlocks values to their literal types.\r",
      "fr": "`satisfies` vérifie un objet contre un type sans l'élargir, et `as const` fige\r\nles valeurs sur leurs types littéraux.\r",
      "lb": "`satisfies` prüft en Objet géint en Typ ouni en ze verbreeden, an `as const`\r\nsperrt d'Wäerter op hir Literaltypen.\r"
    },
    "discriminated-unions": {
      "en": "### Discriminated unions\r",
      "fr": "### Unions discriminées\r",
      "lb": "### Discriminated Unions\r"
    },
    "para-model-each-state-with": {
      "en": "Model each state with a shared `kind` field, and the compiler narrows it for\r\nyou — the backbone of typed reducers and state machines.\r",
      "fr": "Modélisez chaque état avec un champ `kind` partagé, et le compilateur rétrécit\r\npour vous — le socle des reducers et machines à états typés.\r",
      "lb": "Modelléiert all Zoustand mat engem gemeinsame `kind`-Feld, an de Compiler\r\nschränkt fir Iech an — d'Fundament vun typiséierte Reduceren a State-Machinen.\r"
    },
    "type-predicates": {
      "en": "### Type predicates\r",
      "fr": "### Prédicats de type\r",
      "lb": "### Type Predicates\r"
    },
    "para-narrow-unknown-into-a": {
      "en": "Narrow `unknown` into a concrete shape safely.\r",
      "fr": "Rétrécissez `unknown` vers une forme concrète en toute sécurité.\r",
      "lb": "Schränkt `unknown` sécher op eng konkret Form an.\r"
    },
    "template-literal-types": {
      "en": "### Template literal types\r",
      "fr": "### Types template littéraux\r",
      "lb": "### Template Literal Types\r"
    },
    "para-build-string-types-from": {
      "en": "Build string types from unions — great for typed routes and API paths.\r",
      "fr": "Construisez des types de chaînes à partir d'unions — idéal pour les routes et\r\nchemins d'API typés.\r",
      "lb": "Baut String-Typen aus Unione — ideal fir typiséiert Routen an API-Pied.\r"
    },
    "const-type-parameters": {
      "en": "### `const` type parameters\r",
      "fr": "### Paramètres de type `const`\r",
      "lb": "### `const` Typparameter\r"
    },
    "para-keep-tuple-literals-precise": {
      "en": "Keep tuple literals precise without spreading `as const` everywhere.\r",
      "fr": "Gardez les littéraux de tuples précis sans saupoudrer `as const` partout.\r",
      "lb": "Haalt Tuple-Literale prezis, ouni iwwerall `as const` ze verstreien.\r"
    },
    "utility-types": {
      "en": "### Utility types\r",
      "fr": "### Types utilitaires\r",
      "lb": "### Utility Types\r"
    },
    "para-compose-new-types-from": {
      "en": "Compose new types from existing ones instead of hand-writing them.\r",
      "fr": "Composez de nouveaux types à partir d'existants au lieu de les écrire à la main.\r",
      "lb": "Komponéiert nei Typen aus existéierende, amplaz se vun Hand ze schreiwen.\r"
    },
    "recent-typescript-features": {
      "en": "## Recent TypeScript features\r",
      "fr": "## Fonctionnalités TypeScript récentes\r",
      "lb": "## Rezent TypeScript-Features\r"
    },
    "standard-decorators": {
      "en": "### Standard decorators\r",
      "fr": "### Décorateurs standard\r",
      "lb": "### Standard Decorators\r"
    },
    "para-decorators-are-now-part": {
      "en": "Decorators are now part of the language, no experimental flag required.\r",
      "fr": "Les décorateurs font désormais partie du langage, sans drapeau expérimental.\r",
      "lb": "Decorators sinn elo Deel vun der Sprooch, ouni experimentelle Fändel.\r"
    },
    "explicit-resource-management": {
      "en": "### Explicit resource management\r",
      "fr": "### Gestion explicite des ressources\r",
      "lb": "### Explizit Ressourcemanagement\r"
    },
    "para-using-runs-cleanup-deterministically": {
      "en": "`using` runs cleanup deterministically via `Symbol.dispose`.\r",
      "fr": "`using` exécute le nettoyage de manière déterministe via `Symbol.dispose`.\r",
      "lb": "`using` mécht d'Opraumen deterministesch iwwer `Symbol.dispose`.\r"
    },
    "noinfer": {
      "en": "### `NoInfer`\r",
      "fr": "### `NoInfer`\r",
      "lb": "### `NoInfer`\r"
    },
    "para-stop-the-compiler-from": {
      "en": "Stop the compiler from inferring a type argument in a specific position.\r",
      "fr": "Empêchez le compilateur d'inférer un argument de type à une position précise.\r",
      "lb": "Verhënnert, datt de Compiler en Typargument op enger bestëmmter Positioun\r\ninferéiert.\r"
    },
    "architecture-patterns": {
      "en": "## Architecture patterns\r",
      "fr": "## Modèles d'architecture\r",
      "lb": "## Architekturmuster\r"
    },
    "result-types-instead-of-exceptions": {
      "en": "### Result types instead of exceptions\r",
      "fr": "### Types Result au lieu d'exceptions\r",
      "lb": "### Result Types amplaz Exceptions\r"
    },
    "para-represent-success-and-failure": {
      "en": "Represent success and failure in the type, so callers cannot forget to handle\r\nerrors.\r",
      "fr": "Représentez le succès et l'échec dans le type, pour que les appelants ne puissent\r\npas oublier de gérer les erreurs.\r",
      "lb": "Stellt Erfolleg a Feelerschlag am Typ duer, sou datt Oprufer d'Feelerbehandlung\r\nnet vergiesse kënnen.\r"
    },
    "exhaustive-checks": {
      "en": "### Exhaustive checks\r",
      "fr": "### Vérifications exhaustives\r",
      "lb": "### Exhaustiv Checks\r"
    },
    "para-a-never-helper-guarantees": {
      "en": "A `never` helper guarantees every case is handled when the union grows.\r",
      "fr": "Un utilitaire `never` garantit que chaque cas est traité quand l'union grandit.\r",
      "lb": "En `never`-Hëllefsmëttel garantéiert, datt all Fall behandelt gëtt, wann d'Unioun\r\nwiisst.\r"
    },
    "branded-types": {
      "en": "### Branded types\r",
      "fr": "### Types marqués (branded types)\r",
      "lb": "### Branded Types\r"
    },
    "para-prevent-mixing-up-identifiers": {
      "en": "Prevent mixing up identifiers that share the same underlying type.\r",
      "fr": "Évitez de confondre des identifiants qui partagent le même type sous-jacent.\r",
      "lb": "Verhënnert, datt een Identifikateure vermëscht, déi de selwechte Basistyp deelen.\r"
    },
    "immutability-by-default": {
      "en": "### Immutability by default\r",
      "fr": "### Immutabilité par défaut\r",
      "lb": "### Immutabilitéit standardméisseg\r"
    },
    "para-prefer-readonly-as-const": {
      "en": "Prefer `readonly`, `as const`, and non-mutating methods so state changes are\r\nexplicit.\r",
      "fr": "Préférez `readonly`, `as const` et les méthodes non mutantes pour que les\r\nchangements d'état soient explicites.\r",
      "lb": "Léiwer `readonly`, `as const` an net-mutéierend Methoden, sou datt\r\nZoustandsännerungen explizit sinn.\r"
    },
    "esm-and-tree-shaking": {
      "en": "### ESM and tree-shaking\r",
      "fr": "### ESM et tree-shaking\r",
      "lb": "### ESM an Tree-Shaking\r"
    },
    "para-use-es-modules-and": {
      "en": "Use ES modules and named imports so bundlers can drop unused code, and prefer\r\ntype-only imports so types never leak into runtime bundles.\r",
      "fr": "Utilisez les modules ES et les imports nommés pour que les bundlers puissent\r\nsupprimer le code inutilisé, et préférez les imports de type pour que les types\r\nne s'infiltrent jamais dans les bundles d'exécution.\r",
      "lb": "Benotzt ES-Moduler an named Imports, fir datt Bundler onbenotzte Code kënnen\r\newechhuelen, a léiwer Type-Only-Imports, fir datt Typpen ni an d'Runtime-Bundles\r\nkommen.\r"
    },
    "wrapping-up": {
      "en": "## Wrapping up\r",
      "fr": "## Pour conclure\r",
      "lb": "## Zum Schluss\r"
    },
    "para-the-modern-front-end-expert": {
      "en": "The modern front-end expert leans on the sharp new JavaScript APIs for data\r\nhandling, and on TypeScript's discriminated unions, utility types, and result\r\ntypes to push errors to compile time. Adopt these patterns and your code gets\r\nsmaller, safer, and far easier to reason about.\r",
      "fr": "L'expert front-end moderne s'appuie sur les nouvelles API JavaScript pour le\r\ntraitement des données, et sur les unions discriminées, les types utilitaires et\r\nles types Result de TypeScript pour repousser les erreurs à la compilation.\r\nAdoptez ces motifs et votre code devient plus petit, plus sûr et bien plus\r\nfacile à raisonner.\r",
      "lb": "De modernen Front-End-Expert verléisst sech op déi nei JavaScript-APIen fir\r\nDateveraarbechtung, an op TypeScript seng Discriminated Unions, Utility Types a\r\nResult Types, fir Feeler op d'Compile-Zäit ze verleeën. Wann Dir dës Muster\r\nadoptéiert, gëtt Äre Code méi kleng, méi sécher a vill méi einfach ze verstoen.\r"
    }
  }
}
