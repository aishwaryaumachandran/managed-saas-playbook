---
title: 14 · Governance
description: Govern SaaS architecture, service responsibilities, data, and operations.
outline: [3, 3]
---

## 14 · Governance

### 14.1 Decision governance

- **Tenancy and data decisions are documented** for every solution (model,
  isolation level, data classification, residency). 
- **WAF SaaS assessment** is the standard intake scorecard for solution reviews. 
- **Establish governance as the foundation for security** — good resource
  organization, tagging, and policy from the start. 
- **Deviations are explicit** — record why a solution departs from a standard
  pattern; formalize differences as SKUs rather than custom per-customer code. 

### 14.2 Data governance

- **Classification-driven controls** — encryption, residency, retention, and
  access follow the data classification from the
  [Qualification Scorecard](../qualify/scorecard.md). 
- **Per-tenant auditability** — who accessed what, per tenant, is queryable;
  incorporate audit trails early. 
- **Retention and deletion** are enforced, not aspirational. 

### 14.3 Operational governance

Record an agreed [service boundary](../design/ownership-matrix.md#record-the-service-boundary)
for each offer and deployment variant. Name the service owner, component
operators, customer obligations, third-party duties, and escalation paths.
Revisit the agreement when hosting, access, service tiers, or operators change.
Delegated operations and Marketplace commerce do not silently transfer the
provider's customer-facing commitments.

- **Per-tenant observability** — usage, cost, performance, and errors are visible
  per tenant. 
- **Service levels per tier** are defined and monitored; be explicit about SLAs
  and check composite SLAs of underlying Azure services. 
- **Incident management** has clear ownership, blast-radius awareness, and tenant
  communication paths; roll out changes with progressive exposure and rollback. 

### 14.4 Cost governance

- **Cost per tenant** is attributed and reviewed against the revenue each tenant
  generates (cost of goods sold). 
- **Capacity is reviewed** at defined stage gates (see [Capacity Planning](../qualify/capacity.md)). 

### 14.5 Community governance (lightweight)

- **Working groups** own design areas (tenancy, identity, data, billing,
  governance, DevOps, incident management, AI-in-SaaS).
- **Curated links** are preferred over rewriting the official guidance.
- **Accelerators** are reused before anything is rebuilt.

> Design principle: introduce only enough governance to sustain the portfolio.
> Reviews exist to help solutions progress safely and efficiently, not to act
> as gates.
