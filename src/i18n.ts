import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import index from '../public/locales/en/index.json'
import common from '../public/locales/en/common.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    ns: ['index', 'common'],
    react: {
      useSuspense: false,
    },
  })

// preload english
i18n.addResourceBundle('en', 'index', index)
i18n.addResourceBundle('en', 'common', common)

export default i18n
