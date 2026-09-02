---
title: "Concevoir un pipeline CI/CD avec GitHub Actions"
date: "2026-06-05"
description: "Un tour d'horizon d'un pipeline prêt pour la production : build, test, scan et déploiement."
tags: [devops, github-actions, ci-cd]
---

Automatiser votre pipeline de livraison supprime les étapes manuelles et rend
chaque merge reproductible. Voici le pipeline que j'utilise pour mes projets
personnels.

## Vue d'ensemble

```mermaid
flowchart TD
    P[Push to main] --> L[Lint]
    L --> T[Unit tests]
    T --> S[SonarQube scan]
    S --> B[Build image]
    B --> V[Vulnerability scan]
    V --> D{Pass?}
    D -- Yes --> E[Deploy]
    D -- No --> R[Notify & block]
```

## Le fichier de workflow

```yaml
name: ci

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build
```

## Processus de release

Les releases sont créées à partir de tags et suivent un déploiement progressif.

```mermaid
gantt
    title Release rollout
    dateFormat  YYYY-MM-DD
    section Deploy
    Tag release        :2026-06-01, 1d
    Staging            :2d
    Canary (5%)        :2d
    Full rollout       :2d
```

## Séquence de rollback

Si une release casse, le rollback est entièrement automatisé.

```mermaid
sequenceDiagram
    participant M as Monitoring
    participant O as Orchestrator
    participant K as Kubernetes
    M->>O: error rate > 1%
    O->>K: kubectl rollout undo
    K-->>O: rollout reverted
    O-->>M: healthy again
```

Gardez le pipeline rapide, déterministe et observable — tout le reste suit.
