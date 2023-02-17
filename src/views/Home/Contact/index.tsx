import { useTranslation } from 'next-i18next';

import Content from '@components/layout/Content';
import Title from '@components/Title';

import ContactForm from './Form';
import { Container } from './styles';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <Content>
      <Container id="contact">
        <Title>{t('titleContact')}</Title>
        <ContactForm />
      </Container>
    </Content>
  );
};

export default Contact;
