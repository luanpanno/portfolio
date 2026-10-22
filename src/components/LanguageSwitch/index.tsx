import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from './styles';

const languages = [
  { locale: 'en', short: 'EN', labelKey: 'switchToEnglish', hrefLang: 'en' },
  {
    locale: 'pt',
    short: 'PT',
    labelKey: 'switchToPortuguese',
    hrefLang: 'pt-BR',
  },
];

const LanguageSwitch = () => {
  const { t } = useTranslation('common');
  const { locale: currentLocale, asPath } = useRouter();
  const path = asPath.split('#')[0];

  return (
    <Container aria-label={t('languageSwitch')}>
      {languages.map(({ locale, short, labelKey, hrefLang }) => {
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={path}
            locale={locale}
            hrefLang={hrefLang}
            lang={hrefLang}
            aria-current={isCurrent ? 'true' : undefined}
            aria-label={t(labelKey)}
            scroll={false}
          >
            {short}
          </Link>
        );
      })}
    </Container>
  );
};

export default LanguageSwitch;
