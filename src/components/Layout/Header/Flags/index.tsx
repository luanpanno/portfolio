import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Brazil from '@assets/img/flags/brazil.png';
import USA from '@assets/img/flags/usa.png';

import { Container } from './styles';

const Flags = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US'
  );

  function handleLanguage(language: string) {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  }

  return (
    <Container language={currentLanguage}>
      <button
        type="button"
        className="pt-BR"
        onClick={() => handleLanguage('pt-BR')}
      >
        <img src={Brazil} alt="brazilian-flag" />
      </button>
      <button
        type="button"
        className="en-US"
        onClick={() => handleLanguage('en-US')}
      >
        <img src={USA} alt="usa-flag" />
      </button>
    </Container>
  );
};

export default Flags;
