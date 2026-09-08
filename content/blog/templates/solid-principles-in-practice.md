[[para-the-solid-principles-are]]

[[para-principle-focus]]

[[single-responsibility]]

[[para-a-class-should-have]]

```java
class Invoice {
    void calculateTotal() { /* ... */ }
    void print() { /* violates SRP */ }
}
```

[[para-split-print-into-a]]

[[open-closed-principle]]

[[para-a-module-should-be]]

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

[[para-adding-a-new-discount]]

[[liskov-substitution]]

[[para-objects-of-a-subtype]]

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

[[para-a-square-is-not]]

[[interface-segregation]]

[[para-a-client-should-not]]

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

[[para-now-each-class-implements]]

[[dependency-inversion]]

[[para-high-level-modules-should-not]]

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

[[para-this-keeps-business-logic]]

[[para-more-in-depth-articles-will]]
