import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import enUS from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';

const resources = {
  'en-US': enUS,
  'pt-BR': ptBR,
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
