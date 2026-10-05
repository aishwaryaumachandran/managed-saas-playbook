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

Prefer **scaling out** (more instances) over scaling up — it's usually simpler,
more reliable, and cheaper, and it avoids the ceiling of a single resource.
Design tiers to be **stateless** (keep state in an external store) so they can
scale out cleanly. 

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
- **Bin packing** — condense tenants onto as few resources as possible for cost
  efficiency, without crossing a stamp's capacity. 
- **Define the threshold** that triggers deploying a new stamp rather than
  scaling an existing one further. 

## Step 5 — Map to limits and cost

- Identify the **first hard limit** each dimension will hit — Azure subscription
  and service quotas, throughput ceilings, throttling — and the plan to cross it
  (pool resources, shard, add a stamp, or spread across subscriptions).  
- Attribute **cost per tenant** so capacity and pricing stay connected. 
- Prefer **autoscale to demand** over static over-provisioning. 
- Use **cost alerts** to catch runaway usage, **caching** to cut compute load,
  and **Azure reservations** for steady, committed capacity. 

## Step 6 — Re-check at each stage

Capacity is not a one-time exercise. **Load test before production** to find
bottlenecks and scaling thresholds, and re-run this model at first external
customer, at early scale, and before any large tenant onboards.  

::: tip ✅ Do
- Prefer **scale out** (horizontal) over scale up; keep tiers **stateless**.
- Know each **deployment stamp's capacity** and **bin pack** tenants into it.
- Plan to cross a hard limit **before** you approach it.
- **Load test** before production; attribute **cost per tenant**.
:::

::: danger ⛔ Avoid
- Relying on scale-up alone — it always hits a ceiling.
- Letting a stamp exceed its known capacity before adding another.
- Static over-provisioning instead of autoscaling to demand.
- Treating capacity as a one-time calculation.
:::

