---
name: a11y-audit
description: WCAG 2.2 AA accessibility audit (code plus runtime) with prioritized fixes.
argument-hint: [path or section]
disable-model-invocation: true
---

Run an accessibility audit of: $ARGUMENTS (if empty, the whole site under
`src/`). Delegate it
to the `accessibility-auditor` subagent, then relay its report.

The audit must cover:

- **Static**: read the components in scope against the `accessibility` skill
  checklist and run `yarn lint` for jsx-a11y findings
- **Contrast**: compute ratios for every text/background and UI/background
  token pair actually used, in both `lightTheme` and `darkTheme`
- **Runtime** (if a browser tool is available): load `yarn dev`, run axe-core,
  tab through the page, and test at 320px width and 200% zoom

Report the results as a table with WCAG criterion, severity, location
(file:line), the problem, and the fix. Apply fixes only if the user asks.
