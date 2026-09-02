---
title: "Relationell Datenbanke fir Experten: ACID, Schlësselen, Triggers an Indexen"
date: "2026-09-02"
description: "D'Kärkonzepter, déi all DBA musse beherrschen: ACID, Primär- a Friemschlësselen, Indexen, Triggers, Funktiounen a Stored Procedures."
tags: [sql, database, postgresql, dba]
---

Relationell Datenbanken dreuwen déi meescht Applikatiounen aus engem gudde
Grond: si ginn Iech staark Garantien an e klore Modell. Dëse Guide geet duerch
d'Konzepter, op déi sech all Expert-DBA verléisst, mat SQL-Beispiller an
Diagrammer.

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : mécht
    ORDER ||--|{ ORDER_LINE : enthält
    PRODUCT ||--o{ ORDER_LINE : "bestallt als"
```

## ACID

ACID beschreift déi véier Garantien, déi eng Transaktioun bitt.

```mermaid
flowchart LR
    T[Transaktioun] --> A[Atomicitéit]
    T --> C[Konsistenz]
    T --> I[Isolatioun]
    T --> D[Durabilitéit]
```

- **Atomicitéit** — all Aussoen erfollegen oder keng.
- **Konsistenz** — d'Datebank wiesselt vun engem gültege Zoustand an en aneren.
- **Isolatioun** — parallel Transaktioune stéieren sech net.
- **Durabilitéit** — committéiert Daten iwwerliewen e Crash.

```mermaid
stateDiagram-v2
    [*] --> Active
    Active --> Committed: COMMIT
    Active --> Aborted: ROLLBACK
    Committed --> [*]
    Aborted --> [*]
```

```sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;
```

## Primärschlësselen

E Primärschlëssel identifizéiert all Zeil eendeiteg. En ass ëmmer `NOT NULL` an
eendeiteg. Léiwer e Surrogat-Schlëssel (Identity, UUID) wéi en natierleche
Schlëssel, dee sech ännere kann.

```sql
CREATE TABLE customer (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

Kompositschlësselen identifizéieren eng Zeil iwwer méi Spalten zesummen — dee
klassesche Fall vun enger Join-Tabelle.

```sql
CREATE TABLE order_line (
  order_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (order_id, product_id)
);
```

## Friemschlësselen

E Friemschlëssel garantéiert d'referenziell Integritéit: all Wäert muss an der
referenzéierter Tabelle existéieren. `ON DELETE` / `ON UPDATE` soen der Engine,
wat se maache soll, wann den Elter sech ännert.

```sql
CREATE TABLE "order" (
  id BIGINT PRIMARY KEY,
  customer_id BIGINT NOT NULL
    REFERENCES customer(id) ON DELETE CASCADE
);
```

`CASCADE` läscht d'Kand, wann den Elter verschwënnt; `SET NULL` läscht d'Spalt;
`RESTRICT` blockéiert d'Ännerung.

## Indexen

En Index beschleunegt Lookups op Käschte vu Schreifperformance a Späicher. Déi
meescht Datebanke benotzen e B-tree, deen d'Daten sortéiert hält fir séier
Equality- a Range-Scans.

```mermaid
flowchart TD
    R[Wuerzel] --> N1[Node 10 - 20]
    R --> N2[Node 20 - 30]
    N1 --> L1[Blat 10]
    N1 --> L2[Blat 15]
    N2 --> L3[Blat 20]
    N2 --> L4[Blat 25]
```

- **Unique Index** — setzt Eendeitegkeet duerch wéi en Unique Constraint.
- **Kompositindex** — deckt méi Spalten, vu lénks no riets.
- **Covering Index** — späichert zousätzlech Spalten, fir d'Tabelle ni ze beréieren.
- **Partiellen Index** — indexéiert nëmmen d'Zeilen, déi eng Bedingung erfëllen.

```sql
CREATE UNIQUE INDEX idx_customer_email ON customer(email);

CREATE INDEX idx_order_customer ON "order"(customer_id);

CREATE INDEX idx_order_line_product
  ON order_line(product_id) INCLUDE (quantity);
```

Eng einfach Reegel: indexéiert d'Spalten, déi Dir filtert (`WHERE`), joint
(`JOIN`) a sortéiert (`ORDER BY`).

## Triggers

En Trigger leeft automatesch virun oder no `INSERT`, `UPDATE` oder `DELETE`. Si
sinn ideal fir Audit-Loggen an ofgeleet Spalten. A PostgreSQL lieft d'Logik an
enger Trigger-*Funktioun*.

```sql
CREATE FUNCTION audit_order() RETURNS trigger AS $$
BEGIN
  INSERT INTO audit_log (table_name, row_id, action, changed_at)
  VALUES ('order', COALESCE(NEW.id, OLD.id), TG_OP, now());
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER order_audit
AFTER INSERT OR UPDATE OR DELETE ON "order"
FOR EACH ROW EXECUTE FUNCTION audit_order();
```

## Funktiounen

Funktiounen si widderverwendbar, komponéierbar Stécker Logik, déi e Wäert
zeréckginn.

Eng Skalarfunktioun:

```sql
CREATE FUNCTION order_total(order_id BIGINT) RETURNS NUMERIC AS $$
  SELECT COALESCE(SUM(price * quantity), 0)
  FROM order_line
  JOIN product ON product.id = order_line.product_id
  WHERE order_line.order_id = order_total.order_id;
$$ LANGUAGE sql;
```

Eng Table-Funktioun (gëtt e Set vun Zeilen zeréck):

```sql
CREATE FUNCTION customer_orders(customer_id BIGINT)
RETURNS TABLE(order_id BIGINT, total NUMERIC, placed_at TIMESTAMPTZ) AS $$
  SELECT id, total, placed_at
  FROM "order"
  WHERE customer_id = customer_orders.customer_id;
$$ LANGUAGE sql;
```

## Stored Procedures

Proceduren sinn ewéi Funktiounen, kënnen awer hir eege Transaktioune geréieren a
mussen kee Wäert zeréckginn. Benotzt se fir méi-Schrëtt-, transaktional
Operatiounen.

```sql
CREATE PROCEDURE transfer(from_acc BIGINT, to_acc BIGINT, amount NUMERIC)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE accounts SET balance = balance - amount WHERE id = from_acc;
  UPDATE accounts SET balance = balance + amount WHERE id = to_acc;
  COMMIT;
END;
$$;
```

## Isolatiounsniveauen

Isolatioun kontrolléiert, wéi vill parallel Transaktioune vunenee gesinn.

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

- **Read uncommitted** — kann net-committéiert Daten liesen (dirty reads).
- **Read committed** — all Ausso gesäit e stabilen Snapshot.
- **Repeatable read** — déi ganz Transaktioun gesäit ee Snapshot.
- **Serializable** — Transaktioune behuele sech, wéi wa se eng no där anerer lafen.

## Zum Schluss

ACID gëtt Iech Korrektheet; Schlësselen ginn Integritéit; Indexe ginn Tempo;
Triggers, Funktiounen a Prozedure ginn eng widderverwendbar, duerchgesat Logik.
Dat alles ze beherrschen — an d'Kompromësser ze kennen — ënnerscheet en DBA vun
engem Entwéckler, deen zoufälleg SQL schreift.
