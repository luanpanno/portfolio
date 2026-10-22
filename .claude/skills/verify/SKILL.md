---
name: verify
description: Run lint, type check, and production build, then fix what fails.
disable-model-invocation: true
allowed-tools: Bash(yarn lint:*) Bash(npx tsc:*) Bash(yarn build:*)
---

Verify the working tree.

1. `yarn lint`
2. `npx tsc --noEmit`
3. `yarn build`

Run them in order and stop at the first failure. Fix problems that are in
files changed on this branch (`git status`, `git diff`). For pre-existing
failures elsewhere, report them without changing them. Don't stage the
auto-generated `next-env.d.ts` change.

Finish with a short pass or fail summary per step.
