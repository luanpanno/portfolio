import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      Desenvolvido por Luan Panno - Todos os direitos reservados &copy;{' '}
      {new Date().getFullYear()}
    </Container>
  );
};

export default Footer;
