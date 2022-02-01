import { HTMLAttributes } from 'react';

import Separator from '@components/Separator';

import { Container, Wrapper } from './styles';

type Props = HTMLAttributes<HTMLDivElement>;

const Content: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>
    <Wrapper>
      <Separator />
      {children}
    </Wrapper>
  </Container>
);

export default Content;
