---
description: A high-level map of Managed SaaS architecture and delivery.
---

# 01 · What Is Managed SaaS

A high-level map of what "Managed SaaS" means, and the two
dimensions a healthy practice owns.

::: info Keep the concepts distinct
* **SaaS** is a business model.
* **Multitenancy** is an architecture pattern.
* They are related but not the same.
:::

## The two dimensions at a glance

### 1. Delivery via Microsoft Marketplace

* Publish and sell a SaaS offer; Microsoft facilitates the transaction for transactable offers.
* Customers discover, buy, and manage subscriptions through Marketplace, the Azure portal, or the Microsoft 365 Admin Center.
* Pricing options include flat rate, flat rate with metered usage, and per user; free trials and private offers are supported.

Who cares: business, GTM, and partner teams.

### 2. Architecture via the Well-Architected Framework (WAF)

* Five pillars: **Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency**.
* Design areas: identity, tenancy/isolation, data, compute, networking, billing, governance, DevOps, incident management.
* An official assessment tool scores your solution against these principles.

Who cares: architects and engineering.

::: tip Who operates the service?
The provider operates and supports the application; customers retain duties for
their users, data, and settings. Microsoft operates the underlying Azure services.
Marketplace is a commercial channel, not a prerequisite for SaaS.
See the [Ownership Matrix](../design/ownership-matrix.md) to record who operates
each component.
:::

---

