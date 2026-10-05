# Glossary

Key terms used across SaaS and multitenancy guidance. See the
[Sources](../sources.md) page for the official Microsoft Learn guidance behind
these terms.

| Term | Meaning |
| --- | --- |
| **SaaS** | A **business model** where the vendor hosts and maintains the software and delivers it as a service to customers.  |
| **Multitenancy** | An **architecture pattern** where at least some components are shared across multiple tenants. Not every component must be shared. |
| **Tenant** | A logical customer of the solution. In B2B a tenant usually maps to a customer organization (with many users); in B2C it may be an individual, family, or group.  |
| **Tenancy model** | The chosen sharing strategy — one of four common models (automated single-tenant, fully multitenant, vertically partitioned, horizontally partitioned).  |
| **Isolation** | Where a tier sits on the continuum from **shared nothing** (fully isolated) to **shared everything** (fully shared). Different tiers can sit at different points.  |
| **Deployment stamp (supertenant)** | A discrete set of infrastructure that can be deployed as a unit; a tenant maps to one stamp, and a stamp can host one or many tenants.  |
| **Tenant map** | The routing source of truth that connects each tenant to its correct deployment/stamp.  |
| **Noisy neighbor** | When one busy tenant degrades others sharing the same resources; mitigated with throttling and rate limiting.  |
| **Sharding** | Splitting data across multiple databases (shards), each holding one or more tenants, to scale past single-store and service limits.  |
| **Geode pattern** | Data replicated across regions for geo-distributed, high-resiliency solutions.  |
| **Control plane** | The layer that manages and orchestrates tenants, infrastructure, and services (onboarding, configuration, observability).  |
| **Cost per tenant** | The attributed cost of serving one tenant, tracked against the revenue that tenant generates (cost of goods sold).  |

*See the [Sources](../sources.md) page for the official Microsoft Learn pages
behind these terms.*
