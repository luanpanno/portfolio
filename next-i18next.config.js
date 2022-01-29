const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    localePath: path.resolve('./public/locales')
  },
};
