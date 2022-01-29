import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Brazil from '@assets/imgs/flags/brazil.png';
import USA from '@assets/imgs/flags/usa.png';

import { Container } from './styles';

const Flags = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en-US');

  useEffect(() => {
    setCurrentLanguage(navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US');
  }, []);

  const handleLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Container language={currentLanguage}>
      <button
        type="button"
        className="pt-BR flag"
        onClick={() => handleLanguage('pt-BR')}
        title="Mudar para Português"
      >
        <Image src={Brazil} alt="brazilian-flag" height="650px" />
      </button>
      <button
        type="button"
        className="en-US flag"
        onClick={() => handleLanguage('en-US')}
        title="Switch to English"
      >
        <Image src={USA} alt="usa-flag" height="650px" />
      </button>
    </Container>
  );
};

export default Flags;
