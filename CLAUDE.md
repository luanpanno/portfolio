# CLAUDE.md

Personal portfolio for Luan Panno (https://www.luanpanno.dev). Frontend only:
there is no backend, database, or API route. It is a single landing page
(Hero → Projects → Contact) plus a 404 page, deployed on Netlify.

## Stack

- Next.js 16, **Pages Router** (`src/pages`), React 19, TypeScript (`strict: false`)
- styled-components 6, compiled by the Next.js compiler (`compiler.styledComponents`)
- next-i18next: locales `en` (default) and `pt`. Translations are in `public/locales/{en,pt}/common.json`
- Self-hosted fonts: Bricolage Grotesque Variable for display (`--font-display`) and Instrument Sans Variable for body (`--font-sans`)
- Yarn Classic 1.x, Node 20+

## Commands

```bash
yarn dev          # http://localhost:3000 (/pt for Portuguese)
yarn lint         # ESLint 9 + Prettier + import ordering
npx tsc --noEmit  # type check
yarn build        # production build; also catches SSR and i18n errors
yarn analyze      # build with the bundle analyzer
```

There is no test suite. Run lint, type check, and build to verify a change.

## Layout

- `src/pages`: routes, `<Head>` SEO metadata, `getStaticProps` with `serverSideTranslations`
- `src/views/Home/*`: page sections (Hero, About, Work, Contact). Each one is a folder with `index.tsx` and `styles.ts`
- `src/components/*`: shared UI (Section, Input, LanguageSwitch, ThemeToggle, LocalTime, CookieConsent, layout/Layout)
- `src/contexts`: ThemeContext (light/dark: stored choice, otherwise `prefers-color-scheme`) and CookieConsentContext
- `src/assets/styles`: `theme.ts` (design tokens), `GlobalStyles.ts` (CSS variables, base type, focus ring, reduced motion), `Reset.ts`
- `src/views/Home/Work/projects.ts`: project data. `name` is an i18n key, `stack` is an array formatted with `Intl.ListFormat`, and images live in `public/images/projects/*.webp`
- `src/utils/links.ts`: email and profile URLs, shared by the Hero, Contact, and JSON-LD
- Static SEO files: `public/sitemap.xml`, `public/robots.txt`, `public/manifest.json`

## Conventions

- Component folder: `index.tsx` (component, default export) plus `styles.ts` (named styled exports such as `Container`)
- Use path aliases: `@assets/*`, `@components/*`, `@contexts/*`, `@hooks/*`, `@views/*`, `@utils/*`, `@pages/*`
- Import order is enforced by ESLint. Groups are modules, @assets, @components, @contexts, @hooks, @views, @pages, @utils, then relative imports, with a blank line between groups
- Prettier uses single quotes, trailing commas, and an 80 column limit (`max-len` 80 is an ESLint error)
- Read colors only from `props.theme.colors.*`. Never hard-code hex values in components. Every new token goes into **both** `lightTheme` and `darkTheme`
- Read spacing and layout from the CSS variables in `GlobalStyles` (`--page-width`, `--page-gutter`, `--label-column`, `--section-gap`)
- All user-visible text goes through `t('key')` from `useTranslation('common')`, and every key is added to **both** locale files
- Analytics (Hotjar and Clarity) load only when their env vars are set **and** the visitor has given cookie consent. Keep it that way

## Gotchas

- `next-env.d.ts` is rewritten by `next dev`/`next build`. Don't commit those changes
- The theme is read on the client, so SSR always renders the light theme. Avoid layout that depends on the theme during render
- `next dev` caches the locale JSON files. Restart it after editing `public/locales/*`
- `public/sitemap.xml` is hand-maintained. Update `lastmod` when page content changes meaningfully
- The contact form posts to formsubmit.co, so there is no server code to change

## Claude tooling in this repo

- Skills, which Claude loads automatically when relevant (`.claude/skills/`): `frontend-design`, `styling-conventions`, `accessibility`, `seo`, `i18n`, `web-performance`
- Slash commands (`.claude/skills/`, manual only): `/new-component`, `/add-project`, `/ui-review`, `/a11y-audit`, `/seo-audit`, `/perf-audit`, `/i18n-check`, `/verify`
- Subagents (`.claude/agents/`): `frontend-specialist`, `ui-ux-reviewer`, `accessibility-auditor`, `seo-specialist`
