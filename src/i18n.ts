const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR',
  pages: {
    '*': ['common'],
  },
})
