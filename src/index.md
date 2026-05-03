---
layout: base.njk
title: Home
---

# Lotus House

Placeholder home page. The locked v2 copy from `08_website/copy/Lotus_House_Website_Copy_Home_and_FAQ_v2_locked.md` (in the brand repo) will land here in a later session.

## What this page proves

If you can read this, the build pipeline is working end to end:

- **11ty** has read this markdown file from `src/index.md`.
- **Nunjucks** has wrapped it in the `base.njk` layout.
- The base layout has rendered the wordmark, navigation, and footer using values from `src/_data/site.json`.
- Static HTML output has been written to `_site/index.html` and served by the dev server.

The other navigation links above (About, Services, FAQ, Contact) will 404 until the locked v2 copy is brought in next session.
