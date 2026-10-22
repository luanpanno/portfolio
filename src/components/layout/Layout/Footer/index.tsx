import { useTranslation } from 'next-i18next';

import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <span>{t('footerCopyright', { year: new Date().getFullYear() })}</span>
      <a href="#main-content">{t('backToTop')}</a>
    </Container>
  );
};

export default Footer;
