---
title: 04 · Qualification Scorecard
description: Capture SaaS fit, operating ownership, data, and capacity requirements.
outline: [3, 3]
---

## 04 · Qualification Scorecard

The single most important sizing inputs are **repeatability, data volume, and
data type**. Capture ranges, not false precision.

### 4.1 Fit and journey

| Question | Why it matters |
| --- | --- |
| Is the solution **repeatable** across multiple customers? | Repeatability is the core signal of a SaaS candidate. |
| Where is it in the **business journey** — internal, first external customer, or scaling? | Sets expectations for effort and maturity. |
| What is the **workload type** — traditional app, AI-enabled app, or agent-based? | Drives architecture, cost, and governance needs. |
| Where does it run: provider subscriptions, customer subscriptions, or both? | Deployment location and operating responsibility are separate decisions. |
| Who owns the service and who operates each component after go-live, including any third party? | Record the application operator, customer duties, delegated access, and support boundary, not just "shared." |

Use the [Ownership Matrix](../design/ownership-matrix.md#record-the-service-boundary)
to capture ownership. Provider-hosted SaaS is the core scope. Customer-hosted and
hybrid variants require explicit responsibility changes; customer-operated
software with vendor support is not automatically a provider-operated service.

### 4.2 Volume of data

Consider the **number of tenants, the volume of data, and
the workload — per tenant and in aggregate** — because these determine how much
capacity a resource can provide and how many tenants it can support. 

- **How much data per tenant** today, and the expected range (small / medium / large)?
- **How much data across all tenants** now and at target scale?
- **Growth rate** — mostly append-only, or does it churn?
- **Peak vs. steady state** — ingestion spikes (batch loads, end-of-month, seasonal)?
- **Retention** — how long must data be kept, and when can it be deleted or archived?

> Our working position : qualify volume in **orders of magnitude per
> tenant and in aggregate**, not exact numbers. The order of magnitude changes
> the architecture; the exact figure rarely does.

### 4.3 What kind of data it serves

Data *type* drives isolation, compliance, and store selection as much as volume.
Higher isolation may be required when tenants need their own encryption keys,
individual backup/restore policies, or data in specific geographies. 

- **Sensitivity / classification** — public, internal, confidential, regulated (PII, PHI, financial)? 
- **Shape** — relational, document, key-value, blob/file, time-series, vector (AI/RAG), or a mix? 
- **Access pattern** — transactional, analytical, search, or streaming? 
- **Residency** — must data stay in specific regions or sovereign clouds? 
- **Tenancy of the data** — strictly per-tenant, shared reference data, or both? 
- **Customer-managed keys / backup policy** — does any tenant require its own keys or backup/restore policy? 
- **Freshness** — real-time, near-real-time, or batch acceptable?

> Our working position : **sensitivity and residency usually decide
> the tenancy model**; **shape and access pattern usually decide the data store**.
> Separate the two decisions.

### 4.4 How to think about capacity

Translate volume and data type into a capacity conversation (see
[Capacity Planning](capacity.md)). The common **scale points** are the
number of customers/tenants, users, and transactions per user. 

- **Units of scale** — tenants, users per tenant, requests, documents, tokens (AI)? 
- **Concurrency** — peak simultaneous tenants/users/requests; overlapping peaks? 
- Are limits **per tenant, per tier, or global**?
- **Scaling strategy** — scale up, scale out, or shard by tenant? Prefer to **design for scale out**. 
- **Hard limits** — Azure subscription/service quotas, throttling, storage ceilings — that force an architectural change. Plan to scale out *before* you approach a limit. 
- **Cost envelope** per tenant that keeps the offer viable. 

### 4.5 Support and expectations

- **Service levels** expected per tier (availability, RTO/RPO, support hours)?
- **Onboarding time** acceptable for a new tenant?
- Who owns live-site response, customer communication, Azure escalation, and
  backup/restore execution?
- Which obligations, exclusions, and customer prerequisites are recorded in the
  agreed service boundary?
