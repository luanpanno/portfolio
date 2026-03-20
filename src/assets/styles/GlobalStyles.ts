import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  html {
    font-size: 16px;
    
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  html, body {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    background-color: ${(props) => props.theme.colors.background};
    transition: background-color 0.3s ease-in-out;
    overflow-x: hidden;

    &, *{
      scroll-behavior: smooth;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      color: ${(props) => props.theme.colors.text};
    }
  }

  body {
    line-height: 1.5;
  }

  #__next {
    width: 100%;
    overflow-x: hidden;
  }

  a,
  button,
  input,
  textarea {
    transition:
      color 0.2s ease-in-out,
      background-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
  }

  :focus-visible {
    outline: 3px solid ${(props) => props.theme.colors.primary};
    outline-offset: 3px;
  }

  .skip-link {
    position: absolute;
    left: 16px;
    top: -64px;
    z-index: 1000;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }

  .skip-link:focus {
    top: 16px;
  }

  .__react_component_tooltip {
    max-width: 350px;
    white-space: pre-line;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      max-width: 280px;
    }
  }

  :root {
    --body-horizontal-gap: 0;
    --body-max-width: 1024px;
    --section-padding: 64px;
    --content-spacing: 32px;

    @media screen and (max-width: 1367px) {
      --body-horizontal-gap: 100px;
    }

    @media screen and (max-width: 1024px) {
      --body-horizontal-gap: 80px;
      --section-padding: 48px;
    }

    @media screen and (max-width: 894px) {
      --body-horizontal-gap: 50px;
      --body-max-width: 100vw;
      --content-spacing: 24px;
    }

    @media screen and (max-width: 831px) {
      --body-horizontal-gap: 25px;
    }

    @media screen and (max-width: 480px) {
      --body-horizontal-gap: 16px;
      --section-padding: 32px;
      --content-spacing: 16px;
    }
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
