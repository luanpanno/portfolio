module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  debug: process.env.NODE_ENV === 'development',
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  localePath: require('path').resolve('./public/locales'),
};
