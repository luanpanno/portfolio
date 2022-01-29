import { HTMLAttributes } from 'react';

import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement>;

const Content: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Content;
