import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  :root {
    --font-sans:
      'Geist Variable',
      system-ui,
      -apple-system,
      'Segoe UI',
      sans-serif;
    --page-width: 720px;
    --page-gutter: 24px;
    --label-column: 152px;
    --section-gap: 112px;

    @media screen and (max-width: 768px) {
      --page-gutter: 20px;
      --section-gap: 80px;
    }

    @media screen and (max-width: 480px) {
      --page-gutter: 16px;
      --section-gap: 64px;
    }
  }

  html {
    font-size: 16px;
    color-scheme: ${(props) => props.theme.mode};
    background-color: ${(props) => props.theme.colors.background};
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--font-sans);
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    display: block;
  }

  button {
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
  }

  ::selection {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.onAccent};
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 3px;
    border-radius: 2px;
  }

  [id] {
    scroll-margin-top: 32px;
  }

  .skip-link {
    position: absolute;
    left: var(--page-gutter);
    top: -64px;
    z-index: 1000;
    padding: 8px 14px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
    font-size: 0.875rem;
    font-weight: 500;
  }

  .skip-link:focus {
    top: 16px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
