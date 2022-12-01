import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '@assets/styles';

import { ThemeProvider, useTheme } from '@contexts/ThemeContext';

const Container: React.FC = ({ children }) => {
  const { selectedTheme } = useTheme();

  return (
    <StyledThemeProvider
      theme={selectedTheme === 'light' ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <ToastContainer />
      {children}
    </StyledThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Container>
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
