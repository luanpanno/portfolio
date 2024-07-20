import { PropsWithChildren, useRef, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Container, Main } from './styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function handleScroll() {
    setIsAtTop(containerRef?.current?.scrollTop === 0);
  }

  return (
    <Container ref={containerRef} onScroll={handleScroll}>
      <Header isAtTop={isAtTop} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
