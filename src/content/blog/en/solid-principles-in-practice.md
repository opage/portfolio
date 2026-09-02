---
title: "SOLID principles in practice"
date: "2026-08-15"
description: "A quick refresher on the five SOLID principles with concrete examples."
tags: [solid, architecture, clean-code]
---

The **SOLID** principles are a set of five design guidelines that help produce
maintainable, scalable software.

| Principle | Focus |
| --------- | ----- |
| **S**RP | One reason to change |
| **O**CP | Open for extension, closed for modification |
| **L**SP | Subtypes must be substitutable |
| **I**SP | Small, focused interfaces |
| **D**IP | Depend on abstractions, not concretions |

## Single Responsibility

A class should have only one reason to change.

```java
class Invoice {
    void calculateTotal() { /* ... */ }
    void print() { /* violates SRP */ }
}
```

Split `print()` into a dedicated `InvoicePrinter` class and each concern evolves
independently.

## Open/Closed Principle

A module should be open for extension but closed for modification — new behavior
arrives by adding code, not by rewriting existing code.

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

Adding a new discount type means adding a class; the existing ones stay untouched.

## Liskov Substitution

Objects of a subtype should be usable anywhere the parent type is expected,
without surprising behavior.

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

A `Square` is not a faithful substitute for `Rectangle` — resizing one side
silently changes the other. Model them separately or behind a common abstraction.

## Interface Segregation

A client should not be forced to depend on methods it never uses. Prefer several
narrow interfaces over one broad one.

```csharp
// one fat interface
public interface IWorker
{
    void Work();
    void Eat();
}

// focused interfaces
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}
```

Now each class implements only what it actually needs.

## Dependency Inversion

High-level modules should not depend on low-level modules. Both should depend on
abstractions.

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

This keeps business logic testable and decoupled from the clock.

More in-depth articles will follow — this one just sets the stage.
