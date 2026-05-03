# Lotus House — Website

Public deploy target for the Lotus House brand identity project, a children & adolescent psychotherapy practice.

This repo holds two things:

1. **The production website** at the repo root, built with [11ty (Eleventy)](https://www.11ty.dev/) from markdown source in `src/`. Currently a placeholder home page; locked v2 copy lands page by page in upcoming sessions.
2. **The multi-device review harness** in `harness/`, deployed by `deploy.sh` from the (private) brand source repo. Used to review brand work in progress on phone, tablet, and desktop during the design process.

## Repo structure

```
.
├── src/                  # 11ty input
│   ├── _includes/        # Layouts (base.njk) and partials
│   ├── _data/            # Global site data (site.json: title, nav, etc.)
│   ├── assets/           # Static assets (favicons; CSS lands here later)
│   └── index.md          # Page sources, frontmatter selects layout
├── _site/                # 11ty build output (gitignored)
├── harness/              # Brand review harness, populated by deploy.sh
├── eleventy.config.js    # 11ty configuration (ESM)
├── package.json          # npm scripts: dev / build / clean
└── node_modules/         # npm dependencies (gitignored)
```

## Local development

```bash
npm install              # First time only: install 11ty into node_modules/
npm run dev              # Start local dev server at http://localhost:8080/
npm run build            # One-shot build into _site/
npm run clean            # Remove _site/
```

The dev server auto-rebuilds and live-reloads on save.

## How the harness gets updated

The `harness/` subfolder is populated by `deploy.sh` in the (private) brand source repo at `/Users/arek/Documents/Claude_Code/lotus-house-brand`. Don't edit harness files directly here, they're overwritten on each deploy.

`deploy.sh` is scoped to commit only the `harness/` path, so an in-flight 11ty edit at the repo root never gets swept into a harness deploy.

## Hosting

Will be served by [GitHub Pages](https://docs.github.com/en/pages) once the production site is wired up. The custom domain `lotushousetherapy.com` (registered at Namecheap, Session 8) maps to this repo via a `CNAME` file plus apex A records, with `lotushousetherapy.co.uk` 301-redirecting to the .com primary.

## Live URLs

- Production: 🔜 `https://lotushousetherapy.com/` (once deployed)
- Harness: [`https://arekb67.github.io/lotus-house-website/harness/`](https://arekb67.github.io/lotus-house-website/harness/)
