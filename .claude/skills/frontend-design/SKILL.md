---
name: frontend-design
description: Visual design direction for this portfolio. Use when designing or restyling a section, page, or component, choosing typography, color, spacing, layout, or motion, or when a UI looks generic or templated. Keeps work consistent with the existing design language.
---

# Frontend design

Adapted for this project from the principles in Anthropic's `frontend-design`
skill (github.com/anthropics/skills, Apache-2.0).

## The existing identity is the brief

This site already has a deliberate look. Extend it and don't replace it unless
the user asks for a redesign.

- **Type**: Newsreader (serif) for `h1`–`h4` with tight tracking (`-0.04em`)
  and line-height `1.04`. Plus Jakarta Sans for body text at line-height `1.65`.
  Both are loaded in `src/pages/_app.tsx`, and only the weights already
  imported (400/500/600, plus 700 for the sans) are available.
- **Color**: tokens live in `src/assets/styles/theme.ts`. Light uses a warm
  paper background with a deep teal `primary`, and dark uses near-black blue
  with a mint `primary`. Use `primarySoft` for tinted fills and `border` or
  `borderStrong` for hairlines.
- **Surfaces**: large radii (24–28px), translucent `surface` over a soft
  radial-gradient body, and subtle `shadow` or `shadowStrong`.
- **Rhythm**: `--section-padding`, `--content-spacing`, and
  `--body-max-width: 1180px` already step down at 1024, 768, and 480px.

## Before writing code

1. State the job of the element: who sees it and what they should do or feel.
2. Write a short plan covering the tokens used (or new ones, named for both
   themes), type roles, a one-line layout concept, a tiny ASCII wireframe for
   desktop and mobile, and what makes it memorable.
3. Compare the plan to the generic default for this kind of section. Rework
   any part that could appear on any template site.

## Principles

- Typography carries the personality. Use a clear scale with `clamp()` for
  display sizes, keep body measure at or under about 70ch, and treat headings
  as designed elements.
- Make one deliberate moment per section rather than decorating everything.
- Structure (numbers, dividers, eyebrows, badges) must encode real
  information. Use numbers only for a real sequence.
- Motion is scarce and purposeful. Use transform or opacity only, 150–350ms,
  ease-out. Hover effects go behind `@media (hover: hover)`, and
  `GlobalStyles` already neutralizes motion for `prefers-reduced-motion`. Don't
  fight it.
- Copy is design. Use active voice, the visitor's perspective, and errors that
  say what to do next. All text goes through i18n (see the `i18n` skill).

## Avoid (common AI-design tells)

- An accent color on a single word of a headline, or tracked ALL-CAPS eyebrow
  labels above every section
- Identical rounded cards with a uniform shadow repeated across every section
- Gradient-text hero numbers, purple-to-blue gradients, glassmorphism stacks
- Arrows appended to every link, and middle-dot meta strings
- Fade-up-on-scroll applied to every block

## Quality floor (always)

- Responsive from 320px up with no horizontal scroll, and tap targets of at
  least 44×44px
- Visible `:focus-visible` (the global ring already exists, so don't remove
  `outline`)
- WCAG AA contrast in **both** themes: 4.5:1 for text and 3:1 for large text
  and UI
- Check both themes and both locales, since Portuguese strings run about
  20–30% longer

Finish by checking the result in the browser (see `/ui-review`) when one is
available.
