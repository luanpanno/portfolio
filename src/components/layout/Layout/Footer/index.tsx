import { useTranslation } from 'next-i18next';

import Separator from '@components/Separator';

import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Separator />
      <span>{t('footerCopyright', { year: new Date().getFullYear() })}</span>
    </Container>
  );
};

export default Footer;
