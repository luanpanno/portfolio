import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  html, body {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;

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
  }


  :root {
    --body-horizontal-gap: 0;
    --body-max-width: 1024px;

    @media screen and (max-width: 1367px) {
      --body-horizontal-gap: 100px;
    }

    @media screen and (max-width: 1024px) {
      --body-horizontal-gap: 80px;
    }

    @media screen and (max-width: 894px) {
      --body-horizontal-gap: 50px;
    }

    @media screen and (max-width: 831px) {
      --body-horizontal-gap: 25px;
    }
  }
`;
export default GlobalStyles;
