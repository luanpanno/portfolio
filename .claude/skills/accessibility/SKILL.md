---
name: accessibility
description: WCAG 2.2 AA accessibility rules for this site, covering semantics, keyboard, focus, ARIA, forms, contrast in both themes, motion, and images. Use when building or changing any interactive element, form, navigation, image, or color, and when asked about a11y.
---

# Accessibility (WCAG 2.2 AA)

## Already in place (don't regress)

- A skip link to `#main-content` in `_app.tsx`, which needs a matching `id` on
  `<main>`
- A global `:focus-visible` ring in `GlobalStyles.ts`
- `prefers-reduced-motion` neutralizing animations and transitions globally
- A contact form that uses `noValidate`, custom validation, and
  `role="alert"`/`role="status"` messages
- Theme and language toggles with translated `aria-label`s

## Checklist

**Semantics**
- One `<h1>` per page, and headings never skip levels (sections use `h2` via
  `Title`, cards use `h3`)
- Use landmarks: `header`, `nav` with an `aria-label`, `main`, and `footer`.
  Sections get `aria-labelledby` pointing at their heading `id`
- Use `<a>` for navigation and `<button>` for actions. Never use a clickable
  `div`
- Prefer native semantics over ARIA, because no ARIA is better than wrong
  ARIA. Don't put `aria-label` on elements that already have visible text,
  unless the label contains that text (WCAG 2.5.3 Label in Name)

**Keyboard and focus**
- Every interactive element is reachable and operable by keyboard, in a
  logical order
- Never use `outline: none` without a visible replacement
- The hamburger menu exposes `aria-expanded` and `aria-controls`, closes on
  Escape, and returns focus to its trigger
- Focus is not hidden behind sticky headers or the cookie banner
  (WCAG 2.4.11)

**Forms**
- Every input has a `<label>`. Errors are tied to inputs with
  `aria-describedby` and announced, and `aria-invalid` is set when invalid
- Use the right `type` and `autoComplete` (`name`, `email`)
- A disabled submit button gives no feedback, so make sure the reason is
  visible

**Visual**
- Contrast meets 4.5:1 for body text and 3:1 for large text, icons, borders
  of inputs, and focus indicators. Check **both** `lightTheme` and
  `darkTheme`, including `mutedText` and `lightText` on `surface` and
  `background`
- Never use color alone to convey state
- Target size is at least 24×24 CSS px (WCAG 2.5.8), with 44px preferred on
  touch
- Content reflows at 320px width and at 200% zoom without loss

**Media and language**
- Meaningful images get an i18n `alt`. Decorative ones get `alt=""` or
  `aria-hidden`
- Use `<html lang>` that matches the locale (`en` or `pt-BR`). Links that open
  a new tab say so in their accessible name
- External links use `rel="noopener noreferrer"`

## How to verify

- Static check: `yarn lint` (eslint-config-next includes `jsx-a11y` rules)
- Runtime check: open the page in a browser tool and tab through it. If a
  JavaScript tool is available, inject axe-core from a CDN and run
  `axe.run()`, then report violations by impact
- Compute contrast ratios from the theme hex values instead of eyeballing
  them
