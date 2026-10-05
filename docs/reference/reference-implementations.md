# Reference Implementations

Azure GitHub repositories that relate to Managed SaaS. **Verify any repo against
the current [Well-Architected SaaS docs](../sources.md) before adopting it** —
some are dated.

## Actively maintained

| Repo | What it is |
| --- | --- |
| [Commercial Marketplace SaaS Accelerator](https://github.com/Azure/Commercial-Marketplace-SaaS-Accelerator) | Sample code for publishing **transactable** SaaS offers in the Microsoft commercial marketplace (fulfillment + metering APIs). Actively maintained. |
| [Terraform AVM — Commercial Marketplace](https://github.com/Azure/terraform-azurerm-avm-ptn-commercial-marketplace) | Azure Verified Module (Terraform) pattern that deploys the SaaS Accelerator. Dependency-current; largely automated. |

## Older references

| Repo | Note |
| --- | --- |
| [Azure SaaS Development Kit (ASDK)](https://github.com/Azure/azure-saas) | Reference architecture for a SaaS **control plane**. Core content is several years old and built on Azure AD B2C (now succeeded by Microsoft Entra External ID). Useful conceptually; verify against current guidance. |
| [SaaS Private Connectivity](https://github.com/Azure/SaaS-Private-Connectivity) | Private Link + Managed Application pattern for private connectivity to a SaaS provider. Dormant, but the pattern remains valid. |

::: warning Docs beat repos for freshness
Microsoft's **Well-Architected SaaS** and **Architecture Center multitenancy**
docs are updated frequently and are the source of truth. Treat GitHub repos as
starting points, not authority.
:::

