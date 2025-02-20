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

    &, *{
      scroll-behavior: smooth;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      outline: 0;
      color: ${(props) => props.theme.colors.text};
    }
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
`;
export default GlobalStyles;
