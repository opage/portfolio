---
title: "Mermaid diagrams in your articles"
date: "2026-07-12"
description: "Every Mermaid diagram type you can drop into a markdown article."
tags: [markdown, mermaid, diagrams]
---

Any fenced code block tagged with `mermaid` is rendered as an SVG diagram. Here
is a tour of what is available.

## Flowchart

```mermaid
flowchart LR
    A[Start] --> B{Logged in?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login page]
    D --> E[Submit credentials]
    E --> B
```

## Sequence

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

## Class diagram

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

## State diagram

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Published: publish()
    Published --> Archived: archive()
    Archived --> [*]
```

## Entity relationship

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : "ordered as"
```

## Gantt chart

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

## Pie chart

```mermaid
pie title Tech stack usage
    "Java" : 40
    "C#" : 35
    "Python" : 15
    "Other" : 10
```

## Git graph

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

## Timeline

```mermaid
timeline
    title Project milestones
    2026 Q2 : Kickoff
    2026 Q3 : Beta release
    2026 Q4 : General availability
```

Wrap any of these in a `mermaid` fence and it will render on the page.
