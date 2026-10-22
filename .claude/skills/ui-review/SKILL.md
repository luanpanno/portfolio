---
name: ui-review
description: Visual UI/UX review of the running site in a browser across viewports, themes, and locales.
argument-hint: [section or URL path, e.g. hero | projects | /pt]
disable-model-invocation: true
---

Review the UI and UX of: $ARGUMENTS (if empty, review the whole home page).

Use the `ui-ux-reviewer` subagent if it fits. Otherwise do it here:

1. Make sure `yarn dev` is running on http://localhost:3000 (start it in the
   background if not) and open it with whichever browser tool is available.
2. For each combination of **viewport** (1440, 768, and 375 wide), **theme**
   (light and dark, through the toggle), and **locale** (`/` and `/pt`),
   screenshot the target and note any:
   - visual hierarchy, alignment, spacing rhythm, or typographic scale issues
   - overflow, clipping, wrapping, or long Portuguese strings breaking layout
   - contrast or legibility problems (especially `mutedText` and `lightText`)
   - hover, focus, active, disabled, empty, error, or success states (for
     example, submit the contact form empty, but **never** send a real message)
   - keyboard flow: tab order, visible focus, skip link, and the hamburger
     menu
   - motion that feels gratuitous, or ignores reduced motion
3. Judge against the `frontend-design` and `accessibility` skills.

Output a prioritized list of findings (High, Medium, or Low), each with the
file:line responsible and a concrete fix. Don't edit code unless asked.
