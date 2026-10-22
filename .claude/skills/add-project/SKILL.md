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
   roughly a 16:10 landscape ratio (shown as a 16:10 thumbnail) at
   ≥ 1280px wide. If the source isn't webp, convert it with `sharp`, which is
   already a dependency:
   `node -e "require('sharp')('<src>').resize(1280).webp({quality:80}).toFile('public/images/projects/<kebab-name>.webp')"`
2. **Data**: add an entry to `src/views/Home/Work/projects.ts` with
   a kebab-case `id`, `imageUrl`, `name` (an i18n key `project<PascalName>`),
   `stack` (an array of tech names, which `Intl.ListFormat` joins per
   locale), and `link`. A github.com link shows as "Code", anything else as
   "Live". Ask where in the order it goes, since the newest or strongest
   project usually comes first.
3. **i18n**: add `project<PascalName>` to both locale files.
4. Run `yarn lint` and, if a browser tool is available, check the row at
   desktop and 375px widths in both themes.
