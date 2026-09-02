---
title: "Designing a CI/CD pipeline with GitHub Actions"
date: "2026-06-05"
description: "A walkthrough of a production-ready pipeline: build, test, scan, and deploy."
tags: [devops, github-actions, ci-cd]
---

Automating your delivery pipeline removes manual steps and makes every merge
reproducible. Here is the pipeline I use for side projects.

## Overview

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

## The workflow file

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

## Release process

Releases are cut from tags and follow a staged rollout.

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

## Rollback sequence

If a release breaks, the rollback is fully automated.

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

Keep the pipeline fast, deterministic, and observable — everything else follows.
