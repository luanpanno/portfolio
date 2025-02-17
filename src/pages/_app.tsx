import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@assets/styles';

import { env } from '@utils/env';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
    <ToastContainer />
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
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
