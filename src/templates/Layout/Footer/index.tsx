import Separator from '@components/Separator';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <Separator />
    <span>&copy; {new Date().getFullYear()} - Luan Panno</span>
  </Container>
);

export default Footer;
