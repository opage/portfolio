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

## Open/Closed Principle (OCP)

E Modul soll oppen fir Extensioun sinn, awer zou fir Ännerung — neit Verhalen
kënnt duerch neie Code derbäi, net duerch Ëmschreiwe vum existéierende.

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

Eng nei Remiss-Art derbäisetzen heescht eng nei Klass derbäisetzen; déi
existéierend bleiwen onverännert.

## Liskov Substitution (LSP)

Objeten vun engem Subtyp mussen iwwerall gebraucht kënne ginn, wou den Elterentyp
erwaart gëtt, ouni iwwerraschend Verhalen.

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

E `Square` ass keen treien Ersatz fir e `Rectangle` — eng Säit änneren ännert
heimlech och déi aner. Modelléiert se getrennt oder hannert enger gemeinsamer
Abstraktioun.

## Interface Segregation (ISP)

E Client soll net gezwonge sinn, vu Methoden ofzehänken, déi en ni benotzt.
Léiwer méi schmuel Interfaces wéi eent breet.

```csharp
// ee breet Interface
public interface IWorker
{
    void Work();
    void Eat();
}

// geziilt Interfaces
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}
```

Elo implementéiert all Klass nëmmen dat, wat se wierklech brauch.

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
