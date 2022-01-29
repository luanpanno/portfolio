import { useTranslation } from 'next-i18next';

import Title from '@components/Title';

import ContactForm from './Form';
import { Container } from './styles';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <Container id="contact">
      <Title>{t('titleContact')}</Title>
      <ContactForm />
    </Container>
  );
};

export default Contact;
