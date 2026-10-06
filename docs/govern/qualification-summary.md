---
title: 15 · Qualification Summary
description: Record SaaS qualification and the agreed managed-service boundary.
outline: [3, 3]
---

## 15 · Qualification Summary

::: info TL;DR
Copy this one-page block per opportunity to produce a consistent, comparable
profile for review.
:::

### One-page qualification block

```text
- Solution / customer:
- Repeatable across customers?: yes / no / partial
- Journey stage:            internal / first external / scaling
- Workload type:            traditional / AI-enabled / agent-based
- Deployment location:     provider subscriptions / customer subscriptions / both
- Service owner:
- Operator per component:  ISV / named third party / customer (identify scope)
- Service boundary / responsibility matrix reference:
- Customer obligations, delegated access, and exclusions:
- Incident / customer support / Azure escalation owners:
- Backup and restore execution owner:
- Unresolved ownership gaps and action owners:
- Tenancy model:            single-tenant / fully multitenant /
                            vertically partitioned / horizontally partitioned
- Isolation level (per tier): UI · app · data
- Data volume (per tenant / aggregate, order of magnitude):
- Data types and sensitivity:
- Residency requirements:
- Units of scale and peak concurrency:
- First hard limit and plan to cross it:
- Target cost per tenant:
- Service level per tier:
- Acceptable onboarding time per tenant:
- Help needed from the community:
```

Fill this alongside the [Qualification Scorecard](../qualify/scorecard.md) and
the [Ownership Matrix](../design/ownership-matrix.md#record-the-service-boundary).
Carry the service boundary and tenancy/data decisions into [Governance](governance.md).
