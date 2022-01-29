import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@assets/styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
    <ToastContainer />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
