import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Container, Main } from './styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main id="main-content" tabIndex={-1}>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
