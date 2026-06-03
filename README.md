### Architecture

```txt
/src
  /domain
    /entities
    /value-objects
    /services              # Domain services puros (si los necesitas)
    /events                # Eventos de dominio (puros)
    /errors                # Errores de dominio (p.ej. DomainError)

  /application
    /use-cases             # Orquestación por caso de uso
    /ports                 # Interfaces de repos, buses, clocks, mailers...
    /dto                   # Tipos de entrada/salida (planos)
    /errors                # Errores de aplicación (p.ej. ValidationError)

  /infrastructure
    /persistence
      /in-memory           # Dobles (fakes) para tests/arranque
      /postgres            # Adaptadores reales (cuando toque)
      /mappers             # Mapeo entidad <-> modelos de persistencia

    /http
      /controllers         # Adaptadores de entrada (HTTP)
      /routes              # Declaración de rutas
      server.ts            # Bootstrap HTTP (Fastify/Express)

    /messaging             # Kafka/Rabbit/etc (cuando toque)
    /observability         # Logger, metrics, tracing (adaptadores)
    /config                # Carga de config (dotenv, etc.) — solo infra

  /composition
    container.ts           # “Composition raíz” e inversión de dependencias

  /shared
    result.ts              # Result/Either
    utils                  # Utilidades puras compartidas

  main.ts                  # Punto de entrada (levanta HTTP/CLI)
```
### Conventions

● Entities and VOs in PascalCase (Order, Price, SKU, Quantity).
● Ports with domain names + suffix (OrderRepository, PricingService).
● Adapters with technical suffix (InMemoryOrderRepository, PostgresOrderRepository).
● Use cases in PascalCase with a verb (CreateOrder, AddItemToOrder).
● HTTP controllers describe resource + action (OrdersController.create).
● Avoid barrels (index.ts) that export across layers; limit them to subfolders at the same level.