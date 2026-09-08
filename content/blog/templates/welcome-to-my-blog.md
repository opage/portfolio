## [[why-a-blog]]

[[para-i-built-this-space]]

## [[markdown-power]]

[[para-articles-are-written-as]]

- [[list-headings-lists-and-blockquotes]]
- [[list-tables]]
- [[list-links-and-images]]
- [[list-fenced-code-blocks-with-syntax-highlighting]]
- [[list-mermaid-diagrams]]

## [[syntax-highlighting]]

[[para-code-blocks-are-highlighted]]

```typescript
export interface Feature<T> {
  run(input: T): Promise<T>
}

export const identity = <T,>(value: T): T => value
```

```csharp
public sealed class Greeter
{
    public string Hello(string name) => $"Hello, {name}!";
}
```

## [[mermaid-diagrams]]

[[para-diagrams-render-from-a]]

```mermaid
flowchart TD
    A[Write Markdown] --> B{Contains mermaid?}
    B -- Yes --> C[Render SVG diagram]
    B -- No --> D[Render plain HTML]
    C --> E[Show article]
    D --> E
```

[[para-sequence-diagrams-work-too]]

```mermaid
sequenceDiagram
    participant Client
    participant API
    participant Cache
    Client->>API: GET /posts
    API->>Cache: lookup
    alt hit
        Cache-->>API: data
    else miss
        API-->>API: build response
        API->>Cache: store
    end
    API-->>Client: 200 OK
```

## [[wrapping-up]]

[[para-that-is-the-basics]]
