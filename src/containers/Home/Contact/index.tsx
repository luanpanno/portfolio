import { useTranslation } from 'next-i18next';

import Title from '@components/Title';

import Content from '@templates/Content';

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
