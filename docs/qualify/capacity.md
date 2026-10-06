# 05 · Capacity Planning

## Step 1 — Name the units of scale

Pick the few dimensions that actually drive cost and load. The common
scale points :

- **Tenants** and **users per tenant**
- **Transactions per user** / **requests per second**
- **Data volume** (storage growth, per tenant and aggregate) 
- **Tokens or inference calls** (AI/agent workloads)
- **Geographic reach** — regions served and tenants per region; drives global
  scale and data residency 

## Step 2 — Establish per-tenant baseline and peak

For each unit, capture a **typical tenant**, a **large tenant**, and the **peak**.
Model **best, average, and worst-case growth** — analyze trends and consult your
sales team for realistic projections. This exposes noisy-neighbor risk and
informs isolation.  

## Step 3 — Choose the scaling axis

Consider **scaling out** (more instances) for growing workloads that can distribute
load. It can improve capacity and resilience, but is not inherently simpler or
cheaper: evaluate coordination overhead, redundancy, shared dependencies, and
cost against scaling up for the workload.
Design tiers to be **stateless** (keep state in an external store) so they can
scale out cleanly; the external store still needs its own capacity and resilience
design.

| Axis | When to use | Trade-off |
| --- | --- | --- |
| **Scale up** (bigger resources) | Simple, low tenant count; stateful tiers | Hits a ceiling; brief interruptions; single point of contention |
| **Scale out** (more instances) | Growing, stateless tiers | Needs load distribution and shared-state design |
| **Shard by tenant** | Isolation or very large tenants | More moving parts; routing and operations overhead |

## Step 4 — Scale out with deployment stamps

Scaling up and out eventually hits limits (networking, storage, service quotas).
A **deployment stamp** — an independent instance of your solution — adds another
scaling dimension: deploy more stamps as you grow. 

- **Know each stamp's capacity** — how many tenants (or how much load) one stamp
  supports — so you know when to deploy the next. 
- Bin pack tenants for cost efficiency within a safe operating limit, preserving
  headroom for peak demand, growth, and the recovery scenarios you support.
  Do not treat a stamp's maximum capacity as its normal operating target.
- **Define the threshold** that triggers deploying a new stamp rather than
  scaling an existing one further; account for provisioning lead time before
  the reserved headroom is consumed.

## Step 5 — Map to limits and cost

- Identify the **first hard limit** each dimension will hit — Azure subscription
  and service quotas, throughput ceilings, throttling — and the plan to cross it
  (pool resources, shard, add a stamp, or spread across subscriptions).  
- Attribute **cost per tenant** so capacity and pricing stay connected. 
- Use autoscaling for variable demand while retaining baseline capacity and
  headroom for scaling delays and recovery.
- Use **cost alerts** to catch runaway usage, **caching** to cut compute load,
  and **Azure reservations** for steady, committed capacity. 

## Step 6 — Re-check at each stage

Capacity is not a one-time exercise. **Load test before production** to find
bottlenecks and scaling thresholds, and re-run this model at first external
customer, at early scale, and before any large tenant onboards.  

::: tip ✅ Do
- Compare scale-out and scale-up trade-offs; keep application tiers stateless where practical.
- Know each stamp's safe operating limit and preserve recovery and growth headroom when bin packing.
- Plan to cross a hard limit **before** you approach it.
- **Load test** before production; attribute **cost per tenant**.
:::

::: danger ⛔ Avoid
- Relying on scale-up alone — it always hits a ceiling.
- Waiting until a stamp's recovery or growth headroom is exhausted before adding another.
- Confusing unnecessary over-provisioning with capacity reserved for recovery and scaling delays.
- Treating capacity as a one-time calculation.
:::
