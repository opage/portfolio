---
title: "Les principes SOLID en pratique"
date: "2026-08-15"
description: "Un rappel des cinq principes SOLID avec des exemples concrets."
tags: [solid, architecture, clean-code]
---

Les principes **SOLID** sont un ensemble de cinq règles de conception qui aident
à produire des logiciels maintenables et évolutifs.

| Principe | Objectif |
| -------- | -------- |
| **S**RP | Une seule raison de changer |
| **O**CP | Ouvert à l'extension, fermé à la modification |
| **L**SP | Les sous-types doivent être substituables |
| **I**SP | Des interfaces petites et ciblées |
| **D**IP | Dépendre des abstractions, pas des implémentations |

## Responsabilité unique

Une classe ne doit avoir qu'une seule raison de changer.

```java
class Invoice {
    void calculateTotal() { /* ... */ }
    void print() { /* viole le SRP */ }
}
```

Extraire `print()` dans une classe dédiée `InvoicePrinter` permet à chaque
préoccupation d'évoluer indépendamment.

## Inversion des dépendances

Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau.
Tous deux doivent dépendre d'abstractions.

```csharp
public interface IClock
{
    DateTime UtcNow { get; }
}

public class SystemClock : IClock
{
    public DateTime UtcNow => DateTime.UtcNow;
}
```

La logique métier reste ainsi testable et découplée de l'horloge.

D'autres articles plus détaillés suivront — celui-ci ne fait que poser les bases.
