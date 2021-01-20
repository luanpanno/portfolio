import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
