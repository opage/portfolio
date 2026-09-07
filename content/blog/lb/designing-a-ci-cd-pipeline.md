---
title: "E CI/CD-Pipeline mat GitHub Actions designen"
date: "2026-06-05"
description: "En Iwwerbléck iwwer e produktiounsbereete Pipeline: bauen, testen, scannen an deployéieren."
tags: [devops, github-actions, ci-cd]
---

Äre Delivery-Pipeline ze automatiséieren ewechzehuelen manuell Schrëtt a mécht
all Merge reproduzéierbar. Hei ass de Pipeline, deen ech fir Nieweprojeten
benotzen.

## Iwwerbléck

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

## D'Workflow-Datei

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

## Release-Prozess

Releases ginn aus Tags geschnidden a verfollegen e stufenweise Rollout.

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

## Rollback-Sequenz

Wann eng Release brécht, ass de Rollback komplett automatiséiert.

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

Haalt de Pipeline séier, deterministesch an observéierbar — alles anert kënnt
dann eleng.
