---
name: styling-conventions
description: How to write components and styled-components in this repo, covering folder structure, theme tokens, CSS variables, responsive breakpoints, import order, and lint rules. Use whenever creating or editing a .tsx component or a styles.ts file.
---

# Component and styling conventions

## Structure

```
src/components/Foo/      # shared UI
  index.tsx              # default export, React.FC<Props>
  styles.ts              # named styled exports: Container, ...
src/views/Home/Section/  # page sections, same shape, nested subfolders allowed
```

```tsx
import { useTranslation } from 'next-i18next';

import { Container } from './styles';

type Props = {
  title: string;
};

const Foo: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation('common');

  return <Container>{t(title)}</Container>;
};

export default Foo;
```

```ts
import styled from 'styled-components';

export const Container = styled.section`
  gap: var(--section-gap);
  color: ${(props) => props.theme.colors.text};
`;
```

## Rules

- Theme access is always `${(props) => props.theme.colors.x}`, which matches
  the existing code. Don't hard-code hex values or rgba colors except for
  theme-mode branches that already follow the
  `props.theme.mode === 'dark' ? a : b` pattern.
- A new color token goes into `Theme` plus both `lightTheme` and
  `darkTheme` in `src/assets/styles/theme.ts`.
- Spacing and width come from the CSS variables in `GlobalStyles.ts`.
- Breakpoints are max-width `768px` and `480px`
  (`@media screen and (max-width: …)`), matching what's already there.
- Hover goes inside `@media (hover: hover) { &:hover { … } }`.
- Nested element and class selectors inside one `Container` are the house
  style (see `Work/styles.ts`). Prefer that over many tiny styled
  components.
- For custom props, use transient props (`$active`) so they don't leak into
  the DOM.
- Images use `next/image` with an explicit `sizes` and `alt` that comes from
  i18n.

## Lint and format (failures block CI)

- Import groups in order, separated by blank lines: modules, `@assets`,
  `@components`, `@contexts`, `@hooks`, `@views`, `@pages`, `@utils`, then
  relative imports. Alphabetical within each group.
- Single quotes, trailing commas, semicolons, and an 80 column limit
  (`max-len`). For unavoidable long strings, the existing pattern is
  `/* eslint-disable max-len */` at the top of the file.
- Run `yarn lint` after edits, and `yarn lint --fix` handles most formatting.
