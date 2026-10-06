# Managed SaaS on Azure

A public, community-of-practice **playbook** for building and delivering
**Managed SaaS** on Microsoft Azure. It curates official Microsoft guidance and
adds shared language, qualification prompts, and design/governance patterns.

Built with [VitePress](https://vitepress.dev/) and published to GitHub Pages.

## Structure

```text
managed-saas-playbook/
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.mts        # site config, nav, sidebar
│  │  └─ theme/            # Azure-aligned brand overrides
│  ├─ index.md             # Home (VitePress "home" layout)
│  ├─ start/               # 01–02
│  ├─ qualify/             # 03–05
│  ├─ design/              # 06–12 (incl. Mermaid model diagrams)
│  ├─ deliver/             # 13 Marketplace & Delivery
│  ├─ govern/              # 14–15
│  ├─ reference/           # Glossary, Reference Implementations
│  └─ sources.md
├─ package.json
└─ .github/workflows/deploy.yml
```

## Run locally

```powershell
npm install
npm run docs:dev
```

Open the printed URL (default http://localhost:5173/managed-saas-playbook/).

## Build / preview production output

```powershell
npm run docs:build
npm run docs:preview
```

## Publish to GitHub Pages

1. Create a **public** GitHub repo named `managed-saas-playbook` and push this
   folder to `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Update `base` in [docs/.vitepress/config.mts](docs/.vitepress/config.mts) to
   `/<repo>/`, and the `socialLinks`/`editLink` URLs to your org.
4. Push to `main`. The workflow builds with VitePress and deploys automatically.

Site URL: `https://aishwaryaumachandran.github.io/managed-saas-playbook/`.

## Authoring notes

- Callouts use VitePress containers: `::: info`, `::: tip`, `::: warning`,
  `::: danger`.
- Mermaid diagrams use fenced ```mermaid blocks (via `vitepress-plugin-mermaid`).
- Prefer **linking** official Microsoft Learn pages over duplicating them; keep
  the "Last verified" note on `docs/sources.md` current.
