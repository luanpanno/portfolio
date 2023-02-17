module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  localePath: require('path').resolve('./public/locales'),
};
