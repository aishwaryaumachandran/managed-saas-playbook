import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'Managed SaaS on Azure',
    description:
      'A community-of-practice playbook for building and delivering Managed SaaS on Microsoft Azure — grounded in official Microsoft docs.',
    lang: 'en-US',
    // Update to match your GitHub Pages path: /<repo>/
    base: '/managed-saas-playbook/',
    cleanUrls: true,
    lastUpdated: true,

    // Force Vite to pre-bundle Mermaid's CommonJS deps so their default
    // exports resolve correctly in dev.
    vite: {
      optimizeDeps: {
        include: [
          'mermaid',
          'fastdom',
          'dayjs',
          'debug',
          'cytoscape',
          '@braintree/sanitize-url',
        ],
      },
      ssr: {
        noExternal: ['mermaid', 'vitepress-plugin-mermaid'],
      },
    },

    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Start', link: '/start/what-is-managed-saas' },
        { text: 'Qualify', link: '/qualify/how-to-use' },
        { text: 'Design', link: '/design/best-practices' },
        { text: 'Deliver', link: '/deliver/marketplace' },
        { text: 'Govern', link: '/govern/governance' },
        { text: 'Reference', link: '/reference/glossary' },
      ],

      sidebar: [
        {
          text: 'Start',
          items: [
            { text: '01 · What Is Managed SaaS', link: '/start/what-is-managed-saas' },
            { text: '02 · Community Operating Model', link: '/start/community-model' },
          ],
        },
        {
          text: 'Qualify',
          items: [
            { text: '03 · How to Use This Guide', link: '/qualify/how-to-use' },
            { text: '04 · Qualification Scorecard', link: '/qualify/scorecard' },
            { text: '05 · Capacity Planning', link: '/qualify/capacity' },
          ],
        },
        {
          text: 'Design',
          items: [
            { text: '06 · Best Practices at a Glance', link: '/design/best-practices' },
            { text: '07 · Ownership Matrix', link: '/design/ownership-matrix' },
            { text: '08 · Tenancy Models & Isolation', link: '/design/tenancy-models' },
            { text: '09 · Tenancy Model Diagrams', link: '/design/tenancy-decision-guide' },
            { text: '10 · Data Patterns', link: '/design/data-patterns' },
            { text: '11 · Control-Plane Reference Architecture', link: '/design/control-plane' },
            { text: '12 · Onboarding, Lifecycle & AI', link: '/design/lifecycle-and-ai' },
          ],
        },
        {
          text: 'Deliver',
          items: [
            { text: '13 · Marketplace & Delivery', link: '/deliver/marketplace' },
          ],
        },
        {
          text: 'Govern',
          items: [
            { text: '14 · Governance', link: '/govern/governance' },
            { text: '15 · Qualification Summary', link: '/govern/qualification-summary' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Glossary', link: '/reference/glossary' },
            { text: 'Reference Implementations', link: '/reference/reference-implementations' },
            { text: 'Sources', link: '/sources' },
          ],
        },
      ],

      search: { provider: 'local' },
      lastUpdated: {
        formatOptions: {
          dateStyle: 'long',
        },
      },

      // Update to your repo
      socialLinks: [
        { icon: 'github', link: 'https://github.com/aishwaryaumachandran/managed-saas-playbook' },
      ],

      footer: {
        message: 'Managed SaaS Playbook',
      },
    },
  })
)
