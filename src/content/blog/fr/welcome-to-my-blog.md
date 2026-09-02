---
title: "Bienvenue sur mon blog technique"
date: "2026-09-02"
description: "Article d'ouverture : comment ce blog est construit et ce que vous y trouverez."
tags: [solidjs, vite, markdown]
---

## Pourquoi un blog ?

J'ai créé cet espace pour partager les notes et leçons que je recueille au fil de
mes projets personnels et de mes missions en production. Attendez-vous à des
articles de fond sur **SolidJS**, **.NET**, **Java**, **Angular** et leurs outils.

## La puissance du Markdown

Les articles sont rédigés en Markdown, ce qui me permet de me concentrer sur le
contenu. Le moteur de rendu prend en charge l'essentiel :

- Titres, listes et citations
- Tableaux
- Liens et images
- Blocs de code avec **coloration syntaxique**
- Diagrammes **Mermaid**

## Coloration syntaxique

Les blocs de code sont colorés automatiquement selon le langage indiqué :

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

## Diagrammes Mermaid

Les diagrammes sont rendus à partir d'un bloc `mermaid` :

```mermaid
flowchart TD
    A[Write Markdown] --> B{Contains mermaid?}
    B -- Yes --> C[Render SVG diagram]
    B -- No --> D[Render plain HTML]
    C --> E[Show article]
    D --> E
```

Les diagrammes de séquence fonctionnent aussi :

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

## Pour finir

Voilà l'essentiel. Restez à l'écoute pour des articles techniques plus détaillés.
