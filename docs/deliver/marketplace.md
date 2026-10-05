# 11 · Marketplace & Delivery

## What "managed delivery" means

- Publish and sell a SaaS offer; **Microsoft facilitates the transaction** on the
  ISV's behalf (billing, invoicing, payouts).
- Customers **discover, buy, and manage** subscriptions through Marketplace, the
  Azure portal, or the Microsoft 365 Admin Center.

## Pricing models

| Model | Bills on | Good fit |
| --- | --- | --- |
| **Flat rate** | A fixed recurring fee | Simple, predictable offers |
| **Per user** | Number of seats | User-based value |
| **Metered** | Consumption (via the metering API) | Usage-based value (tokens, jobs, GB) |

Free **trials** and **private offers** are supported.

## Integration path

1. **Plan the offer** — pricing, plans, and terms.
2. **Landing page** — where customers complete subscription activation after
   purchase.
3. **SaaS fulfillment APIs** — resolve, activate, and manage the subscription.
4. **Webhook** — receive subscription lifecycle events (renew, suspend, cancel).
5. **Metered billing API** — emit usage events for metered plans.

## Subscription lifecycle

Handle the full lifecycle: **pending → subscribed → suspended → unsubscribed**,
reconciling each state change from the webhook against your tenant records.

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
