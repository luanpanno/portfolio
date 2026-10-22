---
name: web-performance
description: Core Web Vitals and frontend performance for this Next.js site (LCP, INP, CLS), covering next/image, fonts, third-party scripts, bundle size, and styled-components cost. Use when adding images, scripts, fonts, or dependencies, or when asked about speed, Lighthouse, or bundle size.
---

# Web performance

Targets at p75 are LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1.

## Images

- Always use `next/image`. The config allows only `webp` output and
  qualities `70`, `72`, and `75`, so a different `quality` value fails
- Above the fold (the hero profile picture) uses `priority` or
  `fetchPriority="high"` and is not lazy. Everything below the fold uses lazy
  loading
- Give an accurate `sizes`, because an oversized `sizes` downloads oversized
  images. Prefer explicit `width`/`height` (see `Work/index.tsx`), and with
  `fill` the parent needs a fixed aspect box
- Source assets are `.webp` in `public/images`, roughly 2× the largest
  rendered size and no more

## Fonts

- Fonts are self-hosted through `@fontsource`, imported per weight in
  `_app.tsx`. Every extra weight is another file, so only add weights that are
  actually used
- Only the `latin-*` subsets are imported. Keep it that way, since Portuguese
  accents are in Latin-1

## JavaScript

- Check the dependency budget before adding a package by running
  `yarn analyze` before and after. Prefer platform APIs and CSS over libraries
  (no animation library for simple transitions)
- Third-party scripts go through `next/script` with `afterInteractive` or
  `lazyOnload`, and only after cookie consent (the current pattern)
- Use `next/dynamic` for heavy, below-the-fold, or interaction-only components

## Rendering and CSS

- The page is statically generated (`getStaticProps`). Don't introduce
  `getServerSideProps` without a real need
- Avoid layout shift: reserve space for images and the cookie banner, and
  don't render theme-dependent layout differences
- Animate only `transform` and `opacity`. Large `backdrop-filter` and
  `filter: blur` surfaces are expensive, especially on mobile
- Avoid per-render dynamic styled-component props with many unique values.
  Use CSS variables or `attrs` instead

## Measure

- `yarn build` prints per-route First Load JS, and you should compare it
  before and after
- `yarn analyze` opens the bundle treemaps
- Run Lighthouse in Chrome DevTools against `yarn build && yarn start`, not
  the dev server
