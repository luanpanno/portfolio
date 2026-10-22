---
name: seo
description: Technical and on-page SEO for this Next.js Pages Router site, covering titles and meta descriptions, canonical and hreflang for en/pt, Open Graph and Twitter cards, JSON-LD Person schema, sitemap.xml, robots.txt, and manifest. Use when adding pages, changing copy or metadata, or when asked about SEO, social previews, or search visibility.
---

# SEO

## Where things live

- Per-page `<Head>` in `src/pages/*.tsx`. `index.tsx` sets the title,
  description, canonical, hreflang (`en`, `pt-BR`, `x-default`), OG, Twitter,
  and JSON-LD `Person`
- Site-wide meta goes in `src/pages/_app.tsx` (viewport, theme-color,
  manifest, author, application-name)
- Copy for meta tags lives in `public/locales/*/common.json` (`websiteTitle`,
  `websiteDescription`, `metaKeywords`)
- `public/sitemap.xml` and `public/robots.txt` are static and hand-maintained
- The base URL is `https://www.luanpanno.dev`, and Portuguese is under `/pt`

## Rules

- **Title**: 50–60 characters, unique per page and locale, in the format
  `Name | Role`
- **Description**: 140–160 characters, written for humans, with a value
  proposition and real keywords. Translate it, don't transliterate it
- **Canonical**: absolute, self-referencing per locale, with no trailing slash
  inconsistency
- **hreflang**: every locale variant lists all variants plus `x-default`, and
  the set is reciprocal across `en` and `pt`. `x-default` should point to the
  default (English) URL, not the current page
- **OG/Twitter**: `og:title`, `og:description`, `og:url`, `og:image` (an
  absolute URL, ideally 1200×630, with `og:image:alt`), `og:locale`, and
  `twitter:card=summary_large_image`
- **JSON-LD**: keep `Person` accurate (jobTitle, sameAs, image, url). Validate
  it with the Schema.org validator or Google's Rich Results Test. Consider
  `WebSite` as a second node if needed
- **New page**: add a `<Head>` block that mirrors `index.tsx`, a sitemap
  `<url>` for each locale, and hreflang links. Keep `getStaticProps` with
  `serverSideTranslations`
- **404**: `noindex` is appropriate
- `<meta name="keywords">` has no ranking value. Keep it harmless and don't
  invest effort there
- Content signals: one `h1` with the name and role, descriptive link text (not
  "click here"), and meaningful image `alt`
- Performance counts as SEO, because Core Web Vitals affect ranking (see the
  `web-performance` skill)

## Verify

- `yarn build && yarn start`, then view the source of `/` and `/pt` and check
  every tag above renders server-side
- Checking a deployed preview with Google Rich Results Test, the opengraph.xyz
  preview, and Lighthouse SEO is the user's call. Suggest it but don't
  submit URLs to external services without asking
