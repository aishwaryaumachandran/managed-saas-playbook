# 07 · Tenancy Models & Isolation

::: info TL;DR
Start by defining what a **tenant** is for your business, treat **isolation
as a spectrum** (not a switch), keep a **tenant-to-deployment map**, and
choose one of the **four common tenancy models**. 
:::

## 7.1 First, define a "tenant"

Start tenancy design by defining what a tenant *is* for your
business. 

- **B2B:** tenants usually map to customer organizations; one customer may need
  multiple tenants (divisions, regions, or dev vs. prod). A single tenant
  typically has many users. 
- **B2C:** the customer–tenant–user relationship is looser; a tenant might be an
  individual, a family, or a group. 

## 7.2 Isolation is a spectrum, not a switch

Isolation is a **continuum from "shared nothing" (fully
isolated) to "shared everything" (fully shared)**, and you can place each tier of
your architecture at a different point. 

- **UI tier** might be a shared multitenant web app (shared host name).
- **Middle tier** might be a shared application layer with shared queues.
- **Data tier** might be isolated databases, tables, or blob containers.

More sharing lowers cost but raises blast radius and noisy-neighbor risk. 

## 7.3 Tenants vs. deployments (stamps)

A **tenant** is a logical customer; a **deployment** (also called a *stamp* or
*supertenant*) is a set of infrastructure. The relationship can be one-to-one or
one-to-many, so maintain a **tenant mapping** that routes each request to the
correct deployment. Modeling the solution as a **Deployment Stamp** lets you
redeploy it as a unit as new opportunities arise.   

## 7.4 The four common tenancy models

| Model | What is shared | Best fit | Key risks |
| --- | --- | --- | --- |
| **Automated single-tenant deployments** | Nothing — dedicated infrastructure per tenant | Few customers; high isolation / regulatory needs | Low cost efficiency (100 tenants ≈ 100× cost); heavy fleet maintenance |
| **Fully multitenant deployment** | Everything — one shared set of infrastructure | Large numbers of tenants; cost-sensitive | Data-leak risk, noisy neighbor, changes affect all tenants, scale limits |
| **Vertically partitioned** | Some tiers shared, dedicated stamps for specific tenants | Mixed base; premium/regulated tenants pay for isolation | Codebase must support both paths; migration between them |
| **Horizontally partitioned** | Shared app tier, isolated component(s) per tenant (e.g., database) | Isolating the tier that carries most load | Automated deployment/management of the per-tenant components |

Need help choosing? Use the [Tenancy Decision Guide](tenancy-decision-guide.md).

::: tip ✅ Do
- Apply **different isolation levels per tier** (identity, data, network).
- Keep a **tenant-to-deployment map** as the source of truth.
- Treat model choice as a **commercial and technical** decision.
:::

::: danger ⛔ Avoid
- Picking a tenancy model by accident or default.
- Assuming isolation is all-or-nothing.
:::

