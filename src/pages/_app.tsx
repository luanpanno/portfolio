/* eslint-disable max-len */
import { appWithTranslation, useTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from '@assets/styles';
import { ToastStyles } from '@assets/styles/toast';

import { ThemeProvider, useTheme } from '@contexts/ThemeContext';

import { env } from '@utils/env';

const AppContent = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <StyledThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f9cf0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={t('metaAuthor')} />
        <meta name="keywords" content={t('metaKeywords')} />
        <link rel="canonical" href="https://www.luanpanno.dev" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
      <ToastStyles />
      <ToastContainer
        theme={theme.colors.background === '#1a1a1a' ? 'dark' : 'light'}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Script id="hotjar-script" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${env.hotjarProjectId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${env.clarityProjectId}");
        `}
      </Script>
    </StyledThemeProvider>
  );
};

const MyApp = (props: AppProps) => (
  <ThemeProvider>
    <AppContent {...props} />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
