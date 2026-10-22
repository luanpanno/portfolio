---
name: i18n-check
description: Find missing, unused, empty, or hard-coded translation strings across en and pt.
disable-model-invocation: true
---

Check translation health.

1. Compare the keys in `public/locales/en/common.json` and
   `public/locales/pt/common.json` for keys missing in either file, empty
   values, and values identical in both files that look untranslated.
2. Find unused keys by grepping `src/` for each key, remembering dynamic keys
   such as `project.name` in `projects.ts`.
3. Find keys used in `t('…')` calls that are missing from the JSON files.
4. Find hard-coded user-visible strings in JSX text, `aria-label`, `alt`,
   `placeholder`, and `title`.
5. Spot-check the pt-BR copy for unnatural phrasing.

Report each category. Offer to fix them, adding pt-BR translations written
naturally.
