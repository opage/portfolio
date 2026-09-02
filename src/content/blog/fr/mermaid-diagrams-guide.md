---
title: "Les diagrammes Mermaid dans vos articles"
date: "2026-07-12"
description: "Tous les types de diagrammes Mermaid que vous pouvez insérer dans un article markdown."
tags: [markdown, mermaid, diagrams]
---

Tout bloc de code délimité et étiqueté `mermaid` est rendu sous forme de
diagramme SVG. Voici un tour d'horizon de ce qui est disponible.

## Organigramme

```mermaid
flowchart LR
    A[Start] --> B{Logged in?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login page]
    D --> E[Submit credentials]
    E --> B
```

## Séquence

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

## Diagramme de classes

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

## Diagramme d'états

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Published: publish()
    Published --> Archived: archive()
    Archived --> [*]
```

## Entité-relation

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : "ordered as"
```

## Diagramme de Gantt

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

## Diagramme circulaire

```mermaid
pie title Tech stack usage
    "Java" : 40
    "C#" : 35
    "Python" : 15
    "Other" : 10
```

## Graphe Git

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

## Carte mentale

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

## Chronologie

```mermaid
timeline
    title Project milestones
    2026 Q2 : Kickoff
    2026 Q3 : Beta release
    2026 Q4 : General availability
```

Enveloppez n'importe lequel de ces exemples dans un bloc `mermaid` et il sera
rendu sur la page.
