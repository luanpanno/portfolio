import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

import NavLink from '@components/NavLink';

import { Container } from './styles';

const Flags = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <NavLink
        href="/"
        locale="pt"
        passHref
        aria-label={t('switchToPortuguese')}
      >
        <Image
          src="/images/flags/br_4x3.svg"
          alt={t('brazilianFlagAlt')}
          className="flag"
          width={24}
          height={18}
        />
      </NavLink>
      <NavLink href="/" locale="en" passHref aria-label={t('switchToEnglish')}>
        <Image
          src="/images/flags/us_4x3.svg"
          alt={t('usaFlagAlt')}
          className="flag"
          width={24}
          height={18}
        />
      </NavLink>
    </Container>
  );
};

export default Flags;
