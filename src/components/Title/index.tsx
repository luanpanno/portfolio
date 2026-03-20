import { PropsWithChildren } from 'react';

import { Container, Border } from './styles';

type Props = PropsWithChildren<{
  id?: string;
}>;

const Title: React.FC<Props> = ({ children, id }) => (
  <Container>
    <div>
      <h2 id={id}>{children}</h2>
      <Border />
    </div>
  </Container>
);

export default Title;
