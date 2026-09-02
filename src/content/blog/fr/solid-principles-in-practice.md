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

## Principe ouvert/fermé (OCP)

Un module doit être ouvert à l'extension mais fermé à la modification — le
nouveau comportement s'ajoute en écrivant du code, pas en réécrivant l'existant.

```csharp
public interface IDiscount
{
    decimal Apply(Order order);
}

public class SeasonalDiscount : IDiscount
{
    public decimal Apply(Order order) => order.Total * 0.10m;
}

public class LoyaltyDiscount : IDiscount
{
    public decimal Apply(Order order) => order.Total * 0.15m;
}
```

Ajouter un nouveau type de remise revient à ajouter une classe ; les existantes
restent intactes.

## Substitution de Liskov (LSP)

Les objets d'un sous-type doivent pouvoir être utilisés partout où le type parent
est attendu, sans comportement surprenant.

```csharp
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
}

public class Square : Rectangle
{
    public override int Width { set { base.Width = value; base.Height = value; } }
    public override int Height { set { base.Width = value; base.Height = value; } }
}
```

Un `Square` n'est pas un substitut fidèle de `Rectangle` — redimensionner un côté
modifie silencieusement l'autre. Modélisez-les séparément ou derrière une
abstraction commune.

## Ségrégation des interfaces (ISP)

Un client ne doit pas être forcé de dépendre de méthodes qu'il n'utilise jamais.
Préférez plusieurs interfaces étroites à une seule interface large.

```csharp
// une interface trop large
public interface IWorker
{
    void Work();
    void Eat();
}

// des interfaces ciblées
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}
```

Désormais, chaque classe n'implémente que ce dont elle a réellement besoin.

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
