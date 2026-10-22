import { PropsWithChildren } from 'react';

import { Body, Container, Heading } from './styles';

type Props = PropsWithChildren<{
  id: string;
  title: string;
}>;

const Section: React.FC<Props> = ({ id, title, children }) => (
  <Container id={id} aria-labelledby={`${id}-heading`}>
    <Heading id={`${id}-heading`}>{title}</Heading>
    <Body>{children}</Body>
  </Container>
);

export default Section;
