---
name: seo-audit
description: Technical SEO audit of metadata, hreflang, structured data, sitemap, and robots for both locales.
disable-model-invocation: true
---

Run an SEO audit. Delegate it to the `seo-specialist` subagent, then relay its
report.

Scope:

- `src/pages/*.tsx` `<Head>` blocks and `_app.tsx` site-wide meta
- the `websiteTitle`, `websiteDescription`, and related copy in both locale
  files (lengths, intent, and natural pt-BR)
- canonical and hreflang reciprocity, OG and Twitter completeness, and
  JSON-LD validity
- `public/sitemap.xml` (URLs, `lastmod` freshness, and alternates),
  `robots.txt`, and `manifest.json`
- rendered HTML: build and start the production server and fetch `/` and
  `/pt` to confirm tags render server-side

Rank the output by impact, giving each finding a file:line and the exact
change to make.
