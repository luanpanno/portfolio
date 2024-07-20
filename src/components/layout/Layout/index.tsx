import { PropsWithChildren, useRef, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Container, Main } from './styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isInTop, setIsInTop] = useState(true);
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function handleScroll() {
    setIsInTop(containerRef?.current?.scrollTop === 0);
  }

  return (
    <Container ref={containerRef} onScroll={handleScroll}>
      <Header isInTop={isInTop} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
