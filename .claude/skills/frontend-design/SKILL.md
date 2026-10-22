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

The concept is "Index": a minimalist, typographic page that reads like a
well-set CV.

- **Type**: a single family, Instrument Sans Variable (`wght.css`, imported
  in `_app.tsx`). Hierarchy comes from **color and weight, not size**. Body
  text is 16px, headings use weight 500, and section labels are `muted`. The
  hero lead is the only large type on the page.
- **Color**: tokens live in `src/assets/styles/theme.ts`. The base is
  near-neutral grey (no warm or cool tint), with `text`, `muted`, `border`,
  and `borderStrong` (3:1, for form controls). The only accent is cobalt
  `accent`, used for focus rings, selection, and the active input. Don't add
  a second accent.
- **Structure**: one column, `--page-width: 720px`. `Section` renders a
  label column (`--label-column`) plus content, which stack at 768px or
  below. Hairline `border` dividers separate list rows. Radii are small
  (4–8px), with no shadows except the cookie banner.
- **Links**: text links with a `borderStrong` underline that turns
  `currentColor` on hover. No icons or arrows.
- **Rhythm**: `--section-gap` and `--page-gutter` step down at 768px and
  480px.

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
