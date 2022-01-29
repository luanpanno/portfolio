import { HTMLAttributes } from 'react';

import Separator from '@components/Separator';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement>;

const Content: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>
    <Separator />
    {children}
  </Container>
);

export default Content;
