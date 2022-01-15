import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@assets/styles';

import '../i18n';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
    <ToastContainer />
  </ThemeProvider>
);

export default MyApp;
