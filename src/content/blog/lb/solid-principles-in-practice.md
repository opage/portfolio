---
title: "D'SOLID-Prinzipien an der Praxis"
date: "2026-08-15"
description: "E kuerzen Opfrëscher iwwer déi fënnef SOLID-Prinzipien mat konkrete Beispiller."
tags: [solid, architecture, clean-code]
---

D'**SOLID**-Prinzipie sinn e Set vu fënnef Design-Regelen, déi hëllefen,
erhalbar a skaléierbar Software ze produzéieren.

| Prinzip | Fokus |
| ------- | ----- |
| **S**RP | Nëmmen ee Grond fir ze änneren |
| **O**CP | Oppen fir Extensioun, zou fir Ännerung |
| **L**SP | Subtypen mussen austauschbar sinn |
| **I**SP | Kleng, geziilt Interfaces |
| **D**IP | Vun Abstraktiounen ofhänken, net vu Konkretiounen |

## Single Responsibility

Eng Klass soll nëmmen ee Grond hunn, fir sech z'änneren.

```java
class Invoice {
    void calculateTotal() { /* ... */ }
    void print() { /* verletzt SRP */ }
}
```

Splitt `print()` an eng eege `InvoicePrinter`-Klass an all Concern kann sech
onofhängeg weiderentwéckelen.

## Dependency Inversion

Héich-Niveau-Module sollen net vun Déif-Niveau-Modulen ofhänken. Béid sollen
vun Abstraktiounen ofhänken.

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

D'Business-Logik bleift esou testbar an decoupled vun der Auer.

Méi detailléiert Artikele kommen nach — dësen mécht just den Optakt.
