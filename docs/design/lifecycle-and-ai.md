# 12 · Onboarding, Lifecycle & AI

::: info TL;DR
Automate the tenant lifecycle end to end — provisioning, state transitions,
and clean offboarding — and treat AI features as **per-tenant, metered, and
guarded**.  
:::

## Onboarding and lifecycle patterns

- **Automated provisioning** — infrastructure, identity, and seed data created by
  pipeline, not by hand; essential once you deploy per-tenant resources. 
- **Tenant lifecycle states** — pending, active, suspended, offboarding, deleted;
  each with defined transitions. 
- Offboard per the agreed termination policy: end normal service access,
  preserve any agreed export access, and retain data and audit evidence as
  required. Honor residency, retention periods, and legal holds; securely delete
  when obligations allow, accounting for backup expiry and retaining deletion
  evidence. Automate backup, restore, migration, and offboarding so they stay
  repeatable. See [Control-Plane Reference Architecture](control-plane.md).

## AI-in-SaaS patterns

- **Per-tenant grounding data** — isolate vector stores and retrieval scope by
  tenant. 
- **Token and cost metering per tenant** — treat inference as a metered capacity
  dimension. 
- **Guardrails and evaluation** — content safety, prompt-injection defense, and
  ongoing evaluation as standard, not optional. 

::: tip ✅ Do
- Provision and offboard tenants through **pipelines**.
- Isolate AI **grounding data and retrieval scope** per tenant.
- Meter **tokens/inference** as a capacity dimension.
:::

::: danger ⛔ Avoid
- Manual, click-ops tenant onboarding once per-tenant resources exist.
- Shared vector stores that leak one tenant's data into another's answers.
- Shipping AI features without content safety, injection defense, or eval.
:::
