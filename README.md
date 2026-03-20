# 🚀 Luan Panno Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/d7aff8f9-2791-4ea4-882d-69f2bfcde0f2/deploy-status)](https://app.netlify.com/sites/luanpanno-portfolio/deploys)

Personal portfolio and landing page built with Next.js, React, TypeScript, styled-components, and `next-i18next`.

The project is designed to present my profile, selected work, and contact information in a clean bilingual experience with polished UI, SEO-friendly metadata, and a lightweight, responsive frontend.

## Live Website

[www.luanpanno.dev](https://www.luanpanno.dev)

## Highlights

- Bilingual experience in English and Portuguese
- Light and dark themes
- Responsive one-page portfolio layout
- SEO and social sharing metadata
- Accessible navigation, form, and content structure
- Cookie-consent-aware analytics loading
- Lightweight contact form with client-side validation
- Optimized images, local fonts, and bundle-aware setup

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- styled-components
- next-i18next / i18next / react-i18next
- ESLint + Prettier
- Sharp for image optimization

## Project Sections

The homepage is organized as a single landing page with the following sections:

- Hero
- Selected projects
- Contact

The project also includes:

- Custom 404 page
- Locale-aware SEO metadata
- Sitemap and `robots.txt`
- Web app manifest

## Getting Started

### Prerequisites

Before running the project locally, make sure you have:

- Node.js 20 or newer
- Yarn Classic (`1.x`)

### Installation

Install dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
yarn dev
```

Starts the local development server.

```bash
yarn build
```

Creates an optimized production build.

```bash
yarn start
```

Runs the production server after a build.

```bash
yarn lint
```

Runs ESLint across the project.

```bash
yarn analyze
```

Builds the project with the Next.js bundle analyzer enabled.

## Environment Variables

These variables are optional. If they are not set, the portfolio still works normally.

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_HOTJAR_PROJECT_ID=
```

Notes:

- Analytics scripts are only loaded after the visitor accepts cookie consent.
- If you do not use Hotjar or Microsoft Clarity, you can leave these values undefined.

## Internationalization

The portfolio supports two locales:

- English (`en`)
- Portuguese (`pt`)

Translations are stored in:

- `public/locales/en/common.json`
- `public/locales/pt/common.json`

Locale configuration is handled through `next-i18next`.

## Project Structure

```text
.
├── public
│   ├── images
│   ├── locales
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── pages
│   ├── utils
│   └── views
├── next.config.js
├── next-i18next.config.js
└── package.json
```

## Notable Implementation Details

- Styled-components are compiled through the Next.js compiler.
- Fonts are self-hosted through `@fontsource`.
- The contact form submits through `formsubmit.co`.
- Analytics are gated behind cookie consent.
- The site includes structured data and social metadata for better sharing and discoverability.

## Deployment

The project is currently deployed with Netlify and available at:

- [https://www.luanpanno.dev](https://www.luanpanno.dev)

You can also deploy it on any platform that supports Next.js.

## Development Notes

- This project uses the Pages Router.
- The portfolio is intentionally kept lightweight and content-focused.
- `sharp` is included for image optimization in production builds.

## Contact

If you want to get in touch with me:

- Email: [luanpanno@gmail.com](mailto:luanpanno@gmail.com)
- LinkedIn: [linkedin.com/in/luanpanno](https://www.linkedin.com/in/luanpanno)
- GitHub: [github.com/luanpanno](https://github.com/luanpanno)
