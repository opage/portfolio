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
