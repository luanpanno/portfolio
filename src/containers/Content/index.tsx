import { HTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
