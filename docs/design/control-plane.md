# 11 · Control-Plane Reference Architecture

The *control plane* is the set of services that manage tenants and the application
lifecycle: it registers tenants, manages placement and lifecycle, and sets entitlement
configuration such as plans, quotas, and feature flags. The *data plane* is the running
application your tenants use every day; it reads that configuration to route each
request and enforce authorization and quotas at runtime. The control plane
is the biggest technical link between tenancy design and repeatable service operation.
This page follows Microsoft's
[considerations for multitenant control planes][control-plane] and
[architectural approaches for control planes][control-plane-approaches].

## Administrative trust boundary

Treat the control plane as an administrative trust boundary. Its automation holds
elevated privilege across tenants, so isolate it from tenant workloads, restrict who
and what can invoke it, and keep it out of the per-tenant data path. The right hosting
choice depends on your platform; this page describes the boundary rather than a
specific Azure service.

## Core responsibilities

| Capability | What it does |
| --- | --- |
| Tenant registration | Capture tenant identity, tier, region, and metadata; create the system of record. |
| Provisioning | Create or assign the resources a tenant needs (database, schema, keys, config) for its isolation level. |
| Placement | Decide which deployment stamp, cluster, or shard a tenant lands on, honoring residency and capacity. |
| Routing configuration | Maintain the tenant-to-deployment map the data plane uses to resolve a request or sign-in to the correct tenant and deployment. |
| Entitlement configuration | Set plan, quota, and feature-flag configuration that the data plane enforces at runtime. |
| Offboarding | Apply the agreed termination policy to normal service and export access, retain data and audit evidence as required, and securely delete when contractual or regulatory obligations allow. |

## A tenant's lifecycle through the control plane

1. Register the tenant by creating a record with tier, region, and isolation level.
2. Place the tenant on a deployment stamp using residency and capacity.
3. Provision resources, then issue secrets and configuration.
4. Update the tenant-to-deployment map so traffic and sign-in resolve correctly.
5. Operate with entitlements, quotas, and per-tenant telemetry applied.
6. Offboard per the agreed termination policy: end normal service access, keep any
   agreed export access, preserve audit evidence for the retention period, and securely
   delete only when contractual or regulatory obligations allow. See Microsoft's
   [offboarding guidance][governance-compliance] and the
   [Onboarding, Lifecycle & AI](lifecycle-and-ai.md) page.

The tenant-to-deployment map (tenant ID to tier, region, stamp, isolation level, and
lifecycle state) is the control plane's source of truth. Keep it authoritative.

## Operating during a control-plane outage

The data plane depends on configuration the control plane publishes, so define a
bounded degraded-operation policy rather than assuming either plane fails completely.
Existing tenants keep serving on last known good configuration; new privileged changes
stop. Microsoft frames the impact of a control-plane outage and the separate
availability targets it needs in its
[reliability guidance for control planes][control-plane-reliability].

| Operation | During an outage |
| --- | --- |
| Existing authorized traffic | Continues where safe on cached config, until its freshness limit |
| New onboarding and provisioning | Accept durably as pending where supported; do not provision or activate until required controls are available |
| Routing and entitlement changes | Deferred; fail closed on anything that grants access or raises a limit |
| Emergency suspension or revocation | Use a tested independent revocation or containment path. If unavailable, escalate as a live-site incident and invoke a documented fallback through an available enforcement point, accepting broader availability impact if necessary. Verify access is blocked before declaring containment; escalation alone does not establish it |
| Offboarding | Apply the agreed termination policy; retention and legal obligations stay in effect, so reconcile deferred deletion on recovery and escalate any risk of a missed required deadline |

Set two values per service and tier with the service owner: configuration freshness
limits and control-plane availability, RTO, and RPO targets. No universal thresholds
apply, and different configuration types may need different limits. When
authorization-relevant configuration expires, deny the affected operations until it can
be refreshed. On recovery, reconcile intended against actual state before applying
queued work; queueing records intent but does not guarantee success, so retry
idempotently and compensate on failure.

## Build approaches

Microsoft describes three ways to [build a control plane][control-plane-approaches],
chosen by tenant count and operational complexity:

* Manual control planes use scripts or spreadsheets. They suit a handful of tenants
  but do not scale and risk inconsistency.
* Low-code control planes use pipelines or workflow tooling to automate onboarding and
  offboarding, with occasional manual steps.
* Custom-coded control planes are a first-class application that fully automates
  frequent lifecycle events at scale.

[control-plane]: https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/control-planes
[control-plane-reliability]: https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/control-planes#reliability
[control-plane-approaches]: https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/control-planes
[governance-compliance]: https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/governance-compliance#tenant-lifecycle
[stamps]: https://learn.microsoft.com/azure/architecture/patterns/deployment-stamp
[multitenant]: https://learn.microsoft.com/azure/architecture/guide/multitenant/overview
[resource-org]: https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/resource-organization
