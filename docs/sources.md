---
title: Official Microsoft Sources
description: Public Microsoft guidance supporting the managed SaaS playbook.
outline: [3, 3]
---

## Official Microsoft Sources

The curated link set this hub maintains. These pages are the **source of truth** —
this site links them rather than duplicating their content, because Microsoft's
guidance is updated frequently.

::: tip How to use this page
Start from the Well-Architected SaaS workload docs for architecture, and the
Partner Center / Marketplace docs for delivery. Re-run the WAF SaaS
assessment as your intake scorecard for every solution review.
:::

### Start here

- [SaaS and Multitenant Solution Architecture](https://learn.microsoft.com/azure/architecture/guide/saas-multitenant-solution-architecture/)
- [SaaS Workload documentation (Well-Architected Framework)](https://learn.microsoft.com/azure/well-architected/saas/)
- [SaaS design principles](https://learn.microsoft.com/azure/well-architected/saas/design-principles)
- [Plan your journey to SaaS](https://learn.microsoft.com/azure/architecture/guide/saas/plan-journey-saas)

### Service boundary and operating responsibilities

The following source sections were reviewed on 2026-10-05 for the
[Ownership Matrix](design/ownership-matrix.md#record-the-service-boundary).
The playbook's checklist is a community review artifact, not a Microsoft
contractual responsibility assignment.

- [What is a SaaS workload?](https://learn.microsoft.com/azure/well-architected/saas/get-started) - vendor operation of the solution and customer configuration/data responsibilities.
- [SaaS design methodology](https://learn.microsoft.com/azure/well-architected/saas/design-methodology) - business requirements, deployment ownership, and designing for operations.
- [ISV deployment models](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/isv-landing-zone#isv-deployment-models) - pure SaaS, customer-deployed, and dual-deployment boundaries.
- [Shared responsibility in the cloud](https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility) - Azure service-model responsibilities and retained customer controls.
- [Azure Managed Applications overview](https://learn.microsoft.com/azure/azure-resource-manager/managed-applications/overview) - customer-subscription deployment and optional publisher management access.
- [Incident management for SaaS workloads](https://learn.microsoft.com/azure/well-architected/saas/incident-management) - live-site response, support ownership, and customer communication.
- [Plan a SaaS offer](https://learn.microsoft.com/partner-center/marketplace-offers/plan-saas-offer) - publisher infrastructure responsibility and transactable commerce.

### Architecture and multitenancy

- [Architect multitenant solutions on Azure](https://learn.microsoft.com/azure/architecture/guide/multitenant/overview)
- [Tenancy models](https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/tenancy-models)
- [Architectural approaches for storage and data in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/storage-data)
- [Compute for SaaS workloads (Well-Architected Framework)](https://learn.microsoft.com/azure/well-architected/saas/compute)
- [Multitenancy checklist](https://learn.microsoft.com/azure/architecture/guide/multitenant/checklist)
- [WAF SaaS assessment tool](https://learn.microsoft.com/azure/well-architected/saas/assessment)

### Security and identity

- [Shared responsibility in the cloud (responsibility matrix)](https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility)
- [Identity and access management (SaaS Well-Architected Framework)](https://learn.microsoft.com/azure/well-architected/saas/identity-access)
- [Data (SaaS Well-Architected Framework)](https://learn.microsoft.com/azure/well-architected/saas/data)
- [Architectural approaches for identity in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/identity)
- [Architectural considerations for identity in a multitenant solution](https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/identity)

### AI in SaaS

- [Architectural approaches for AI and ML in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/ai-machine-learning)
- [AI workloads on Azure (Well-Architected Framework)](https://learn.microsoft.com/azure/well-architected/ai/)

### Delivery and Marketplace

- [Plan a SaaS offer for Microsoft Marketplace](https://learn.microsoft.com/partner-center/marketplace-offers/plan-saas-offer)
- [SaaS fulfillment APIs](https://learn.microsoft.com/partner-center/marketplace-offers/pc-saas-fulfillment-apis)
- [SaaS subscription lifecycle management](https://learn.microsoft.com/marketplace/saas-subscription-lifecycle-management)
- [Metered billing for SaaS](https://learn.microsoft.com/partner-center/marketplace-offers/saas-metered-billing)

### Patterns and reference

- [Considerations for multitenant control planes](https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/control-planes)
- [Architectural approaches for control planes in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/control-planes)
- [Deployment Stamps pattern](https://learn.microsoft.com/azure/architecture/patterns/deployment-stamp)
- [Resource organization and bin packing (multitenancy)](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/resource-organization)
- [Noisy Neighbor antipattern](https://learn.microsoft.com/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor)
- [Azure subscription and service limits](https://learn.microsoft.com/azure/azure-resource-manager/management/azure-subscription-service-limits)

### Actively maintained reference implementation

- [Commercial Marketplace SaaS Accelerator (GitHub)](https://github.com/Azure/Commercial-Marketplace-SaaS-Accelerator) — sample code for publishing transactable SaaS offers in the Microsoft commercial marketplace.

::: warning On GitHub reference repos
Some older Azure SaaS repositories (for example the Azure SaaS Development
Kit) are dated and may not reflect current guidance. Verify any repo against
the Well-Architected SaaS docs above before adopting it.
:::

---

*Existing source-list verification date: 2026-09-23. The service-boundary sources
above were reviewed on 2026-10-05; the remaining links were not reverified in
that review.*
