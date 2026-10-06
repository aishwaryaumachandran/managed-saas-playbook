# 07 · Ownership Matrix

Who is accountable for each part of the service, who executes the work, and where
the customer's responsibilities begin. "Managed" SaaS depends on clear
accountability — not just where the application runs.

## Record the service boundary

Copy this table per offer and service tier. Exactly one **accountable owner** per
row; record the executing team separately so accountability never blurs with delivery.

| Activity | Accountable owner | Executing team | Customer obligations | Escalation path | Approval / evidence | Unresolved gaps |
| --- | --- | --- | --- | --- | --- | --- |
| Hosting & configuration |  |  |  |  |  |  |
| Application releases & maintenance |  |  |  |  |  |  |
| Tenant isolation |  |  |  |  |  |  |
| Identity & access management |  |  |  |  |  |  |
| Data protection, retention & residency |  |  |  |  |  |  |
| Backup & restore (RTO/RPO) |  |  |  |  |  |  |
| Monitoring & alerting |  |  |  |  |  |  |
| Incident response & customer communication |  |  |  |  |  |  |
| Customer support & SLAs |  |  |  |  |  |  |
| Onboarding & provisioning |  |  |  |  |  |  |
| Offboarding, export & deletion |  |  |  |  |  |  |
| Change approval & compliance evidence |  |  |  |  |  |  |

### How to use it

- **Accountable vs executing** — exactly one accountable owner per row; the executing
  team may differ (including a third-party operator). Never leave a row unassigned;
  record an explicit gap instead.
- **Customer obligations & escalation** — state what the customer must do and the path
  when something goes wrong, end to end.
- **Incident, restore, access, offboarding** — the rows most often assumed; confirm who
  acts, within what commitment, and how it is proven.
- **Approval & evidence** — link the artifact that proves the control works; mark any
  **unresolved gap** so it is visible, not silent.

## Platform responsibilities

See [Shared responsibility in the cloud](https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility)
for the responsibility matrix across on-premises, IaaS, PaaS, and SaaS. Apply
the model of the underlying Azure service being consumed, not the SaaS label
of your own product.

For Azure resources consumed by the ISV/provider, read the platform's "Customer"
as that provider. For customer-controlled resources, record the resource and
subscription owner separately from the operator and explicitly delegated duties.
In hybrid deployments, assign responsibilities per component rather than
mapping every customer responsibility to the provider. A third-party operator
takes on only explicitly delegated tasks.

---
