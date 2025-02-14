/* eslint-disable prefer-rest-params */
/* eslint-disable max-len */
/* eslint-disable @next/next/no-page-custom-font */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import { env } from '@utils/env';

import i18nextConfig from '../../next-i18next.config';

declare const window: any;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          {typeof window !== 'undefined' && (
            <Script id="hotjar-script">
              {`${(function (h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function () {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: env.hotjarProjectId, hjsv: 6 };
                a = o.getElementsByTagName('head')[0];
                r = o.createElement('script');
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(
                window,
                document,
                'https://static.hotjar.com/c/hotjar-',
                '.js?sv='
              )}`}
            </Script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          {typeof window !== 'undefined' && (
            <Script id="clarity-script" strategy="afterInteractive">
              {`${(function (c, l, a, r, i, t, y) {
                c[a] =
                  c[a] ||
                  function () {
                    (c[a].q = c[a].q || []).push(arguments);
                  };
                t = l.createElement(r);
                t.async = 1;
                t.src = 'https://www.clarity.ms/tag/' + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
              })(window, document, 'clarity', 'script', env.clarityProjectId)}`}
            </Script>
          )}
        </body>
      </Html>
    );
  }
}
