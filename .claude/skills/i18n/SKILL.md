---
name: i18n
description: Internationalization with next-i18next for the en and pt locales, covering adding or renaming translation keys, interpolation, keeping both locale files in sync, and locale-aware links. Use whenever adding or changing user-visible text.
---

# i18n (next-i18next)

- Config: `next-i18next.config.js` (`en` default, `pt`). A single namespace,
  `common`
- Files: `public/locales/en/common.json` and `public/locales/pt/common.json`
- Usage: `const { t } = useTranslation('common'); t('key')`. Pages load
  translations with `serverSideTranslations(locale, ['common'])` in
  `getStaticProps`

## Rules

- No hard-coded user-visible strings in JSX, including `aria-label`, `alt`,
  `placeholder`, `title`, and validation messages
- Add every key to **both** files, in the same position, keeping key order
  aligned so diffs stay readable
- Keys are camelCase and prefixed by area: `home*`, `project*`, `contact*`,
  `contactForm*`, `validation*`, `nav*`, `cookie*`
- Use interpolation for dynamic values: `"projectLinkAria": "Open {{projectName}}"`
  with `t('projectLinkAria', { projectName })`. Never concatenate translated
  fragments
- Portuguese is Brazilian Portuguese (`pt-BR` in hreflang and `og:locale`).
  Write natural pt-BR, not a literal translation
- Expect Portuguese strings to be about 20–30% longer, so check that layouts
  don't break
- Language switching uses Next's `locale` routing (`/pt`). Use
  `next/link` with the `locale` prop instead of hand-building URLs

## Check sync quickly

```bash
node -e "const a=require('./public/locales/en/common.json'),b=require('./public/locales/pt/common.json');const ka=Object.keys(a),kb=Object.keys(b);console.log('missing in pt:',ka.filter(k=>!(k in b)));console.log('missing in en:',kb.filter(k=>!(k in a)));console.log('empty:',[...ka.filter(k=>!a[k]),...kb.filter(k=>!b[k])])"
```
