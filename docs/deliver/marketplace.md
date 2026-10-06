---
title: 13 · Marketplace & Delivery
description: Use Marketplace as a SaaS commercial channel without changing operational ownership.
outline: [3, 3]
---

## 13 · Marketplace & Delivery

### Marketplace as a commercial channel

Marketplace is optional for the SaaS business model. This chapter focuses on
transactable SaaS offers, not on defining who operates the application.
The [publisher manages the infrastructure supporting its SaaS offer](https://learn.microsoft.com/partner-center/marketplace-offers/plan-saas-offer);
Microsoft facilitating the transaction does not transfer application operations
or support. Record those duties in the
[Ownership Matrix](../design/ownership-matrix.md#record-the-service-boundary).

- Publish and sell a SaaS offer; **Microsoft facilitates the transaction** on the
  ISV's behalf (billing, invoicing, payouts).
- Customers **discover, buy, and manage** subscriptions through Marketplace, the
  Azure portal, or the Microsoft 365 Admin Center.

### Pricing models

| Model                            | Bills on                                                  | Good fit                           |
| -------------------------------- | --------------------------------------------------------- | ---------------------------------- |
| **Flat rate**                    | A fixed recurring fee                                     | Simple, predictable offers         |
| **Per user**                     | Number of seats                                           | User-based value                   |
| **Flat rate with metered usage** | A recurring fee plus usage above included plan quantities | Usage-based value (tokens, jobs, GB) |

Custom metering is an optional extension to flat-rate pricing, not a separate
pricing model, and does not apply to per-user plans. The recurring fee can be
zero. See Microsoft's
[metered-billing prerequisites](https://learn.microsoft.com/partner-center/marketplace-offers/saas-metered-billing#prerequisites-for-metered-billing).

Free **trials** and **private offers** are supported.

### Integration path

1. **Plan the offer** — pricing, plans, and terms.
2. Landing page: let customers complete setup after purchase; manually activated
   plans also require publisher activation.
3. SaaS fulfillment APIs: resolve, activate where required, and manage the subscription.
4. **Webhook** — receive subscription lifecycle events (renew, suspend, cancel).
5. **Metered billing API** — emit usage events for metered plans.

### Subscription lifecycle

Reconcile Marketplace subscription state with your tenant records throughout
the lifecycle:

- Manual activation moves `PendingFulfillmentStart` to `Subscribed`.
  Auto-activated plans enter `Subscribed` at purchase.
- Suspension moves `Subscribed` to `Suspended`; successful reinstatement returns
  the subscription to `Subscribed`.
- Cancellation moves an active or suspended subscription to `Unsubscribed`;
  pending subscriptions can also be canceled. Canceled subscriptions cannot
  be reactivated.

Keep suspended tenant accounts recoverable so reinstatement can restore full
functionality without losing data or settings. Suspension is not offboarding.
Cancellation also does not mean immediate data deletion; follow Marketplace
retention requirements and the agreed data obligations. See Microsoft's
[SaaS subscription lifecycle guidance](https://learn.microsoft.com/partner-center/marketplace-offers/pc-saas-fulfillment-life-cycle).

::: tip ✅ Do
- Map Marketplace subscription states to your **tenant lifecycle** states.
- Emit metered usage reliably and idempotently.
- Keep offer terms and pricing in sync with your cost-per-tenant model.
:::

::: danger ⛔ Avoid
- Treating delivery as an afterthought disconnected from architecture.
- Missing webhook events, leaving tenants in the wrong lifecycle state.
:::

See the [Sources](../sources.md) page for the official Partner Center and
Marketplace documentation links.
