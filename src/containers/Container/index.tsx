import type { NextPage } from 'next';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@assets/styles';

const Container: NextPage = ({ children }) => (
  <div>
    <Head>
      <title>Luan Panno - Front-End Developer</title>
      <meta name="description" content="Front-End Developer Portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        {children}
      </ThemeProvider>
    </main>
  </div>
);

export default Container;
