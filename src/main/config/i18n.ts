import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translations from '@main/locales'

const i18nConfig = {
  fallbackLng: 'pt-BR',
  debug: false,
  resources: translations,
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false
  }
}

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)
