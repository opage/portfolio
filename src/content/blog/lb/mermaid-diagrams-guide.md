---
title: "Mermaid-Diagrammer an Ären Artikelen"
date: "2026-07-12"
description: "All Mermaid-Diagrammtyp, deen Dir an e Markdown-Artikel asetze kënnt."
tags: [markdown, mermaid, diagrams]
---

All Code-Blöck mat dem Tag `mermaid` gëtt als SVG-Diagramm gerëndert. Hei ass
en Iwwerbléck iwwer dat, wat verfügbar ass.

## Flowchart

```mermaid
flowchart LR
    A[Start] --> B{Logged in?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login page]
    D --> E[Submit credentials]
    E --> B
```

## Sequenz

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant A as API
    participant D as Database
    U->>A: POST /orders
    A->>D: INSERT order
    D-->>A: ok
    A-->>U: 201 Created
```

## Klassendiagramm

```mermaid
classDiagram
    class Order {
        +id: string
        +total: number
        +submit()
    }
    class LineItem {
        +sku: string
        +qty: number
    }
    Order "1" --> "*" LineItem
```

## Zoustanksdiagramm

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Published: publish()
    Published --> Archived: archive()
    Archived --> [*]
```

## Entitéits-Bezéiung

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : "ordered as"
```

## Gantt-Diagramm

```mermaid
gantt
    title Release plan
    dateFormat YYYY-MM-DD
    section Backend
    API design       :a1, 2026-07-01, 7d
    Implementation   :a2, after a1, 14d
    section Frontend
    UI design        :b1, 2026-07-01, 7d
    Implementation   :b2, after b1, 14d
```

## Kreesdiagramm

```mermaid
pie title Tech stack usage
    "Java" : 40
    "C#" : 35
    "Python" : 15
    "Other" : 10
```

## Git-Graph

```mermaid
gitGraph
    commit id: "init"
    branch feature
    checkout feature
    commit id: "feat: parser"
    checkout main
    commit id: "fix: typo"
    merge feature
```

## Mindmap

```mermaid
mindmap
  root((Blog))
    Content
      Markdown
      Frontmatter
    Rendering
      Code highlighting
      Mermaid
```

## Zäitlinn

```mermaid
timeline
    title Project milestones
    2026 Q2 : Kickoff
    2026 Q3 : Beta release
    2026 Q4 : General availability
```

Setzt ee vun dëse Beispiller an e `mermaid`-Block an et gëtt op der Säit
gerëndert.
