import { useTranslation } from 'react-i18next';

import Title from '@components/Title';

import ContactForm from './Form';
import { Container } from './styles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <Title>{t('titleContact')}</Title>
      <ContactForm />
    </Container>
  );
};

export default Contact;
