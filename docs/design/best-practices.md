# 06 · Best Practices at a Glance

The practices below map to the five WAF pillars: **Reliability, Security, Cost
Optimization, Operational Excellence, Performance Efficiency** .

## Design and tenancy

- Choose a **tenancy model deliberately** (see [Tenancy Models](tenancy-models.md)
  for the four common models) and document the trade-offs — selecting a model
  is a commercial *and* technical decision, not an accident. 
- Treat **tenant isolation as a spectrum** from fully shared to fully isolated,
  and apply different levels per tier (identity, data, network). 
- Keep a **tenant-to-deployment map** as the source of truth: tenant ID, tier,
  region, isolation level, and lifecycle state. 

## Data

- Classify data **per tenant and per type** (see the
  [Qualification Scorecard](../qualify/scorecard.md)) and let sensitivity,
  compliance, and residency drive the isolation level. 
- Plan for the **noisy-neighbor problem** early — apply throttling or rate
  limiting so one busy tenant cannot degrade others. 
- Make **onboarding, migration, retention, and offboarding** repeatable and
  automated so they scale as tenant count grows. 
- Avoid the data **antipatterns**: per-tenant tables, per-tenant columns, and
  manual schema changes in a shared database. 

## Reliability

- **Design for resilience** — use availability zones and, where a tier requires
  it, multi-region deployment to meet each tier's availability target. 
- **Define RTO/RPO per tier** and validate **backup, restore, and failover**
  regularly rather than assuming they work. 
- **Model health at the tenant boundary** so you can detect, isolate, and
  contain failures before they spread across tenants. 

## Operations

- **Prepare to operate the solution on behalf of customers** — set up team,
  process, and tooling for SaaS at scale. 
- Use **deployment stamps** and consistent, automated processes; roll out changes
  with progressive exposure and rollback. 
- Instrument **per-tenant telemetry** (usage, cost, performance, errors) so you
  can meter and monitor at the tenant boundary. 
- Define **service levels per tier** and monitor against them. 

## Security and compliance

- **Establish governance as the foundation for security** from day one, and
  follow a cloud security baseline. 
- **Isolate customers and segments** — use the tenancy model as the data
  isolation strategy. 
- **Start with Zero Trust and least privilege**; default to no access. 
- **Avoid credentials where possible** — use managed identity; protect any
  unavoidable secrets. 

## Cost

- **Model your cost of goods sold** and monitor **cost per tenant** relative to
  the revenue each tenant generates. 
- Keep **costs and revenue related** — avoid features that raise cost without
  raising revenue. 
- Higher tenant density lowers cost but raises noisy-neighbor risk — weigh the
  trade-off. 
