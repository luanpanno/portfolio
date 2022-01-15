import Title from '@components/Title';

import { ContactForm } from './Form';
import { Container } from './styles';

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contato</Title>
      <ContactForm />
    </Container>
  );
};

export default Contact;
