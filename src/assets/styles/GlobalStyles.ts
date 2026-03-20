import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  :root {
    --font-sans:
      'Plus Jakarta Sans',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
    --font-serif: 'Newsreader', Georgia, 'Times New Roman', serif;
    --body-horizontal-gap: 32px;
    --body-max-width: 1180px;
    --section-padding: 80px;
    --content-spacing: 32px;

    @media screen and (max-width: 1024px) {
      --body-horizontal-gap: 24px;
      --section-padding: 64px;
      --content-spacing: 28px;
    }

    @media screen and (max-width: 768px) {
      --body-horizontal-gap: 20px;
      --section-padding: 52px;
      --content-spacing: 24px;
    }

    @media screen and (max-width: 480px) {
      --body-horizontal-gap: 16px;
      --section-padding: 40px;
      --content-spacing: 20px;
    }
  }

  html {
    font-size: 16px;
    color-scheme: ${(props) => props.theme.mode};
    background-color: ${(props) => props.theme.colors.background};

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    position: relative;
    background:
      radial-gradient(circle at top left, ${(props) =>
        props.theme.colors.primarySoft} 0, transparent 32%),
      radial-gradient(circle at top right, ${(props) =>
        props.theme.colors.backgroundAlt} 0, transparent 34%),
      linear-gradient(
        180deg,
        ${(props) => props.theme.colors.background} 0%,
        ${(props) => props.theme.colors.background} 58%,
        ${(props) => props.theme.colors.backgroundAlt} 100%
      );
    color: ${(props) => props.theme.colors.text};
    font-family: var(--font-sans);
    line-height: 1.65;
    letter-spacing: -0.01em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        180deg,
        rgba(
          255,
          255,
          255,
          ${(props) => (props.theme.mode === 'light' ? 0.22 : 0.03)}
        ) 0%,
        transparent 24%
      ),
      radial-gradient(
        circle at 50% 0%,
        ${(props) =>
          props.theme.mode === 'light'
            ? 'rgba(255, 255, 255, 0.45)'
            : 'rgba(141, 216, 199, 0.05)'} 0%,
        transparent 46%
      );
    z-index: 0;
  }

  #__next {
    position: relative;
    z-index: 1;
    width: 100%;
    overflow-x: hidden;
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: var(--font-sans);
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.colors.title};
    font-family: var(--font-serif);
    letter-spacing: -0.04em;
    line-height: 1.04;
    margin: 0;
  }

  p,
  span,
  small,
  strong,
  label,
  li {
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    display: block;
  }

  button,
  input,
  textarea {
    transition:
      color 0.2s ease,
      background-color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  button {
    border: none;
    background: none;
    color: inherit;
  }

  ::selection {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.surfaceAccent};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.borderStrong};
    border-radius: 999px;
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 4px;
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primarySoft};
  }

  .skip-link {
    position: absolute;
    left: 20px;
    top: -72px;
    z-index: 1000;
    padding: 12px 18px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.borderStrong};
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    box-shadow: ${(props) => props.theme.colors.shadow};
    font-size: 0.9rem;
    font-weight: 600;
  }

  .skip-link:focus {
    top: 20px;
  }

  .__react_component_tooltip {
    max-width: 320px;
    white-space: pre-line;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (prefers-reduced-motion: reduce) {
    html,
    body,
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
