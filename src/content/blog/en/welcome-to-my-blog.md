---
title: "Welcome to my technical blog"
date: "2026-06-02"
description: "Kickoff post: how this blog is built and what you can expect to read here."
tags: [solidjs, vite, markdown]
---

## Why a blog?

I built this space to share the notes and lessons I gather while working on
side projects and production systems. Expect deep dives on **SolidJS**, **.NET**,
**Java**, **Angular**, and the tooling around them.

## Markdown power

Articles are written as plain Markdown files, so I can focus on content. The
renderer supports the usual suspects out of the box:

- Headings, lists, and blockquotes
- Tables
- Links and images
- Fenced code blocks with **syntax highlighting**
- **Mermaid** diagrams

## Syntax highlighting

Code blocks are highlighted automatically based on the language tag:

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

## Mermaid diagrams

Diagrams render from a `mermaid` code block:

```mermaid
flowchart TD
    A[Write Markdown] --> B{Contains mermaid?}
    B -- Yes --> C[Render SVG diagram]
    B -- No --> D[Render plain HTML]
    C --> E[Show article]
    D --> E
```

Sequence diagrams work too:

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

## Wrapping up

That is the basics. Stay tuned for more detailed technical articles.
