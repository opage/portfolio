[[para-any-fenced-code-block]]

[[flowchart]]

```mermaid
flowchart LR
    A[Start] --> B{Logged in?}
    B -- Yes --> C[Dashboard]
    B -- No --> D[Login page]
    D --> E[Submit credentials]
    E --> B
```

[[sequence]]

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

[[class-diagram]]

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

[[state-diagram]]

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Published: publish()
    Published --> Archived: archive()
    Archived --> [*]
```

[[entity-relationship]]

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : "ordered as"
```

[[gantt-chart]]

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

[[pie-chart]]

```mermaid
pie title Tech stack usage
    "Java" : 40
    "C#" : 35
    "Python" : 15
    "Other" : 10
```

[[git-graph]]

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

[[mindmap]]

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

[[timeline]]

```mermaid
timeline
    title Project milestones
    2026 Q2 : Kickoff
    2026 Q3 : Beta release
    2026 Q4 : General availability
```

[[para-wrap-any-of-these]]
