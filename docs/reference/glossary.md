---
title: Glossary
description: SaaS terminology and community service-boundary definitions.
outline: false
---

## Glossary

Key terms used across SaaS and multitenancy guidance. See the
[Sources](../sources.md) page for the official Microsoft Learn guidance behind
these terms.

| Term | Meaning |
| --- | --- |
| **SaaS** | A **business model** where the vendor hosts and maintains the software and delivers it as a service to customers.  |
| **Managed SaaS** | Community working term for a repeatable software service with explicit provider responsibility for application operation, maintenance, security, and support within an agreed boundary. Not a separate Microsoft product category; see [What Is Managed SaaS](../start/what-is-managed-saas.md). |
| **Service boundary** | Community artifact identifying covered components, operating tasks, customer obligations, exclusions, and named owners. See the [Ownership Matrix](../design/ownership-matrix.md#record-the-service-boundary). |
| **Managed service** | An agreed scope of operational tasks performed for a customer; not by itself a SaaS business model. |
| **Provider-hosted SaaS** | The application is hosted in the provider's Azure subscriptions, using shared or dedicated resources. Corresponds to [Microsoft's pure SaaS deployment model](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/isv-landing-zone#isv-deployment-models). |
| **Dual-deployment SaaS** | A hosted SaaS service interacts with resources in customer subscriptions. Also called SaaS hybrid; assign operating responsibility for both sides. See [ISV deployment models](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/isv-landing-zone#dual-deployment-saas). |
| **Marketplace SaaS offer** | An online subscription offer for delivering and licensing SaaS. Marketplace commerce does not transfer application operation to Microsoft. See [SaaS offer planning](https://learn.microsoft.com/partner-center/marketplace-offers/plan-saas-offer). |
| **Azure Managed Application** | An Azure deployment offering with resources in a managed resource group in a customer's subscription. Publisher management access is configurable and can be absent; see [Managed Applications](https://learn.microsoft.com/azure/azure-resource-manager/managed-applications/overview). |
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
