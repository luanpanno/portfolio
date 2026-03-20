/* eslint-disable max-len */
import { appWithTranslation, useTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@fontsource/newsreader/latin-400.css';
import '@fontsource/newsreader/latin-500.css';
import '@fontsource/newsreader/latin-600.css';
import '@fontsource/plus-jakarta-sans/latin-400.css';
import '@fontsource/plus-jakarta-sans/latin-500.css';
import '@fontsource/plus-jakarta-sans/latin-600.css';
import '@fontsource/plus-jakarta-sans/latin-700.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from '@assets/styles';

import CookieConsent from '@components/CookieConsent';

import {
  CookieConsentProvider,
  useCookieConsent,
} from '@contexts/CookieConsentContext';
import { ThemeProvider, useTheme } from '@contexts/ThemeContext';

import { env } from '@utils/env';

import nextI18NextConfig from '../../next-i18next.config';

const hasAnalyticsIntegrations = Boolean(
  env.hotjarProjectId || env.clarityProjectId,
);

const AnalyticsScripts = () => {
  const { hasConsent } = useCookieConsent();

  return (
    <>
      {hasConsent && env.hotjarProjectId && (
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
      )}
      {hasConsent && env.clarityProjectId && (
        <Script id="clarity-script" strategy="afterInteractive">
          {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${env.clarityProjectId}");
        `}
        </Script>
      )}
    </>
  );
};

const AppShell = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <StyledThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.background} />
        <meta name="color-scheme" content="light dark" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={t('metaAuthor')} />
        <meta name="keywords" content={t('metaKeywords')} />
        <meta name="application-name" content={t('websiteTitle')} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={t('websiteTitle')} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta
          name="msapplication-TileColor"
          content={theme.colors.background}
        />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <a className="skip-link" href="#main-content">
        {t('skipToContent')}
      </a>
      <Component {...pageProps} />
      <GlobalStyles />
      {hasAnalyticsIntegrations && <CookieConsent />}
      {hasAnalyticsIntegrations && <AnalyticsScripts />}
    </StyledThemeProvider>
  );
};

const AppContent = (props: AppProps) =>
  hasAnalyticsIntegrations ? (
    <CookieConsentProvider>
      <AppShell {...props} />
    </CookieConsentProvider>
  ) : (
    <AppShell {...props} />
  );

const MyApp = (props: AppProps) => (
  <ThemeProvider>
    <AppContent {...props} />
  </ThemeProvider>
);

export default appWithTranslation(MyApp, nextI18NextConfig);
