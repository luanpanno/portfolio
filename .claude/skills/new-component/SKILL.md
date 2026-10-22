---
name: new-component
description: Scaffold a new component or section folder (index.tsx + styles.ts) following repo conventions.
argument-hint: <Name> [components|views/Home/<Section>]
disable-model-invocation: true
---

Create a new component named `$0`. The target location is `$1`, relative to
`src/`.

Arguments: $ARGUMENTS. If the location argument is missing, use
`src/components/$0/`. If the name suggests a page section, ask whether it belongs
in `src/views/Home/` instead.

Steps:

1. Read one sibling component in the target folder to mirror its style
   exactly.
2. Create `index.tsx` (a default-exported `React.FC<Props>`, with text through
   `useTranslation('common')`) and `styles.ts` (named styled exports, theme
   tokens, and CSS variables, following the `styling-conventions` skill).
3. Add any new i18n keys to **both** `public/locales/en/common.json` and
   `public/locales/pt/common.json`.
4. If the user described where it renders, wire it in. Otherwise leave it
   unused and say so.
5. Run `yarn lint` on the new files and fix any problems.

Report the files created and any keys added.
