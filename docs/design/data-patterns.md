# 10 · Data Patterns

::: info TL;DR
Choose a data pattern along the isolation spectrum — from a shared
multitenant store (highest density, lowest cost) to a database per tenant
(strongest isolation). Avoid the classic **antipatterns**: per-tenant tables,
per-tenant columns, and manual schema changes. 
:::

## Storage/data patterns for multitenancy

- **Shared multitenant database / store** — highest density, lowest cost, lowest
  management overhead; watch scale limits, noisy neighbors, and per-tenant
  metering. 
- **Sharding** — multiple databases (shards), each holding one or more tenants;
  scales to large tenant counts and helps dodge subscription/service limits. 
- **Dedicated database per tenant** (with a shared app tier) — strong isolation
  and some per-tenant customization; use elastic pools / shared throughput to
  control cost, and **automate provisioning**. 
- **Geode pattern** — data replicated across regions for geo-distributed,
  high-resiliency solutions. 
- **Per-type store selection** — use the right store per data shape (relational,
  document, blob, search, vector) rather than forcing one engine. 

## Choosing a data pattern

| Pattern | Density / cost | Isolation | Watch out for |
| --- | --- | --- | --- |
| Shared multitenant store | Highest / lowest | Lowest | Scale limits, noisy neighbor, metering |
| Sharding | High | Medium | Shard routing and rebalancing |
| Database per tenant | Lower / higher | Highest | Cost control, provisioning automation |
| Geode | Varies | Varies | Replication complexity |

::: tip ✅ Do
- Use a **single set of multitenant tables with a tenant-identifier column**,
  or **separate databases per tenant**.
- Deploy schema changes through **automated tooling**.
- Select the store by data **shape and access pattern**.
:::

::: danger ⛔ Avoid
These data **antipatterns** in a shared database :

- **Per-tenant tables**
- **Per-tenant columns**
- **Manual schema changes**
:::

