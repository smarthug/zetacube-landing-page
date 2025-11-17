import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translation.json'
import ko from '../locales/ko/translation.json'

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem('locale')
  if (stored) return stored
  return navigator.language?.startsWith('ko') ? 'ko' : 'en'
}

const resources = {
  en: { translation: en },
  ko: { translation: ko }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', lng)
  }
})

export default i18n
