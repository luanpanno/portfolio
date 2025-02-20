import { useTranslation } from 'next-i18next';

import { useCookieConsent } from '@contexts/CookieConsentContext';

import { Container, Content, Actions } from './styles';

const CookieConsent = () => {
  const { t } = useTranslation('common');
  const { hasConsent, hasRejected, acceptCookies, rejectCookies } =
    useCookieConsent();
  const hide = hasConsent || hasRejected;

  if (hide) {
    return null;
  }

  return (
    <Container role="alert">
      <Content>
        <p>{t('cookieConsentText')}</p>
        <Actions>
          <button onClick={rejectCookies} className="reject">
            {t('cookieConsentReject')}
          </button>
          <button onClick={acceptCookies} className="accept">
            {t('cookieConsentAccept')}
          </button>
        </Actions>
      </Content>
    </Container>
  );
};

export default CookieConsent;
