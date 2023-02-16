import { PropsWithChildren } from 'react';

import { Container, Border } from './styles';

const Title: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <div>
      <h2>{children}</h2>
      <Border />
    </div>
  </Container>
);

export default Title;
