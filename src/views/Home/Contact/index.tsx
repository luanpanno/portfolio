import { useTranslation } from 'next-i18next';

import Content from '@components/layout/Content';
import Title from '@components/Title';

import ContactForm from './Form';
import { Container, Intro } from './styles';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <Content>
      <Container id="contact" aria-labelledby="contact-heading">
        <Title id="contact-heading">{t('titleContact')}</Title>
        <Intro>{t('contactLead')}</Intro>
        <ContactForm />
      </Container>
    </Content>
  );
};

export default Contact;
