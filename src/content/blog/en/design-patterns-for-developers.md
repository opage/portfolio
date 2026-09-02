---
title: "Design patterns for developers: a friendly guide"
date: "2026-09-02"
description: "A plain-English tour of the most useful design patterns, with small C# examples."
tags: [design-patterns, architecture, csharp, dotnet]
---

Design patterns are reusable solutions to common problems. They are not
copy-paste templates — they are ideas you adapt to your own situation. This
guide walks through ten of the most useful ones, grouped by what they do.

```mermaid
flowchart TD
    A[Design patterns] --> B[Creational]
    A --> C[Structural]
    A --> D[Behavioral]
    A --> E[Architectural]
    B --> B1[Singleton]
    B --> B2[Builder]
    C --> C1[Adapter]
    C --> C2[Decorator]
    C --> C3[Facade]
    D --> D1[Strategy]
    D --> D2[Observer]
    E --> E1[MVC]
    E --> E2[MVVM]
    E --> E3[CQRS]
```

## Strategy

**The idea:** pick an algorithm at runtime without changing the code that calls
it.

Think of a checkout page: the customer can pay by card, PayPal, or bank
transfer. Each option is a different strategy behind the same button.

```csharp
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount) => Console.WriteLine($"Paid {amount} by card");
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount) => Console.WriteLine($"Paid {amount} via PayPal");
}

public class Checkout
{
    private readonly IPaymentStrategy _strategy;

    public Checkout(IPaymentStrategy strategy) => _strategy = strategy;

    public void Complete(decimal amount) => _strategy.Pay(amount);
}
```

## Decorator

**The idea:** add behavior to an object by wrapping it, layer by layer.

Like adding toppings to a coffee: you start with an espresso and keep piling on
milk, sugar, or caramel without changing the espresso itself.

```csharp
public interface ICoffee
{
    string Description { get; }
    decimal Cost { get; }
}

public class Espresso : ICoffee
{
    public string Description => "Espresso";
    public decimal Cost => 2.00m;
}

public class MilkDecorator : ICoffee
{
    private readonly ICoffee _inner;

    public MilkDecorator(ICoffee inner) => _inner = inner;

    public string Description => _inner.Description + ", milk";
    public decimal Cost => _inner.Cost + 0.50m;
}
```

## Observer

**The idea:** one object notifies many listeners when something changes.

Like a newsletter: people subscribe, and everyone gets an update when a new
edition is published.

```csharp
public interface IListener
{
    void Notify(string message);
}

public class NewsFeed
{
    private readonly List<IListener> _listeners = new();

    public void Subscribe(IListener listener) => _listeners.Add(listener);

    public void Publish(string message) =>
        _listeners.ForEach(listener => listener.Notify(message));
}
```

## Singleton

**The idea:** guarantee there is exactly one instance of a class.

Like a single settings file for an app — everyone reads the same one.

```csharp
public sealed class Configuration
{
    public static Configuration Instance { get; } = new Configuration();

    private Configuration() { }

    public string AppName => "MyApp";
}
```

## Facade

**The idea:** hide a complex system behind one simple front door.

Like a car ignition: you turn one key, and many parts work together underneath.

```csharp
public class OrderFacade
{
    private readonly PaymentService _payment = new();
    private readonly InventoryService _inventory = new();

    public void PlaceOrder(Order order)
    {
        _payment.Charge(order);
        _inventory.Reserve(order);
    }
}
```

## Builder

**The idea:** build a complex object step by step instead of one giant
constructor.

Like ordering a custom burger: pick the bun, the cheese, the extras — then
build it.

```csharp
public class Burger
{
    public bool Cheese { get; set; }
    public bool Bacon { get; set; }
}

public class BurgerBuilder
{
    private readonly Burger _burger = new();

    public BurgerBuilder AddCheese() { _burger.Cheese = true; return this; }

    public BurgerBuilder AddBacon() { _burger.Bacon = true; return this; }

    public Burger Build() => _burger;
}
```

## Adapter

**The idea:** make two incompatible interfaces work together.

Like a travel plug adapter that lets your charger fit a foreign socket.

```csharp
public interface IShape
{
    double Area();
}

public class LegacyRectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
}

public class RectangleAdapter : IShape
{
    private readonly LegacyRectangle _rect;

    public RectangleAdapter(LegacyRectangle rect) => _rect = rect;

    public double Area() => _rect.Width * _rect.Height;
}
```

## MVC (Model-View-Controller)

**The idea:** separate data, presentation, and control logic.

The **model** holds the data, the **view** shows it, and the **controller**
reacts to user input.

```csharp
public class User
{
    public string Name { get; set; } = "Olivier";
}

public class UserController
{
    public string GetUserName() => new User().Name;
}
```

## MVVM (Model-View-ViewModel)

**The idea:** bind the view directly to a **view model**, so the UI updates
automatically when data changes.

Popular in desktop and mobile apps, where a button click changes a property and
the screen reflects it without manual wiring.

```csharp
public class CounterViewModel : INotifyPropertyChanged
{
    private int _count;

    public int Count
    {
        get => _count;
        set { _count = value; OnPropertyChanged(); }
    }

    public void Increment() => Count++;

    // INotifyPropertyChanged implementation omitted for brevity
}
```

## CQRS (Command Query Responsibility Segregation)

**The idea:** separate writes (commands) from reads (queries).

Reads and writes often need different models and different storage. Splitting
them keeps each side simple and scalable.

```csharp
public record CreateOrderCommand(int Id, decimal Total);

public record GetOrderQuery(int Id);

public class CreateOrderHandler
{
    public void Handle(CreateOrderCommand command) { /* save the order */ }
}

public class GetOrderHandler
{
    public Order Handle(GetOrderQuery query) => /* load the order */ null!;
}
```

## Wrapping up

You will not use every pattern every day — but recognising them helps you read
other people's code, discuss designs clearly, and pick the right tool when a
problem looks familiar.
