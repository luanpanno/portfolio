---
name: add-project
description: Add a portfolio project card (data entry, image, en/pt translations).
argument-hint: <name> <link> [stack] [image-path]
disable-model-invocation: true
---

Add a project to the Selected Work section. Input: $ARGUMENTS

Ask for anything missing: the display name, the URL (live demo or repo), the
stack text, and a screenshot path.

1. **Image**: put a `.webp` at `public/images/projects/<kebab-name>.webp` with
   roughly a 16:10 landscape ratio (the card box is 64% padding-top) at
   ≥ 1280px wide. If the source isn't webp, convert it with `sharp`, which is
   already a dependency:
   `node -e "require('sharp')('<src>').resize(1280).webp({quality:80}).toFile('public/images/projects/<kebab-name>.webp')"`
2. **Data**: add an entry to `src/views/Home/Projects/projects.ts` with
   `imageUrl`, `name` (an i18n key `project<PascalName>`), `stack`, and
   `link`. Ask where in the order it goes, since the newest or strongest
   project usually comes first.
3. **i18n**: add `project<PascalName>` to both locale files. If the stack
   text needs translating (for example "and" → "e"), add a key for it as well,
   because `t(project.stack)` falls back to the raw string.
4. Run `yarn lint` and, if a browser tool is available, check the card at
   desktop and 375px widths in both themes.
