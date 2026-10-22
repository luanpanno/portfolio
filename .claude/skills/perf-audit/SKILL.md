---
name: perf-audit
description: Build the site and audit bundle size, images, fonts, and Core Web Vitals risks.
disable-model-invocation: true
allowed-tools: Bash(yarn build:*) Bash(yarn analyze:*)
---

Audit frontend performance using the `web-performance` skill.

1. Run `yarn build` and record the per-route First Load JS and any warnings.
2. Look at the largest dependencies in `package.json` and how they're
   imported. If useful, suggest `yarn analyze`, which opens browser tabs, so
   ask first.
3. Check every `next/image` usage (`priority` for the LCP image, accurate
   `sizes`, and allowed `quality` values) and the file sizes in
   `public/images`.
4. Check the font weights imported in `_app.tsx` against the weights actually
   used in styles.
5. Check for CLS risks (images without a reserved box, the cookie banner, and
   theme flash) and INP risks (heavy handlers, unnecessary re-renders from
   contexts).

Report the findings with an estimated impact and a concrete fix for each.
