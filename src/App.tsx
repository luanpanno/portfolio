import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ToastContainer />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
