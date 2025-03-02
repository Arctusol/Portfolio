import { Language, DetectedLanguage, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../types/language';

export const detectLanguage = async (): Promise<DetectedLanguage> => {
  // Check localStorage first
  const storedLanguage = localStorage.getItem('preferredLanguage');
  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage as Language)) {
    return {
      language: storedLanguage as Language,
      source: 'localStorage'
    };
  }

  // Check browser language
  const browserLanguages = navigator.languages || [navigator.language];
  for (const lang of browserLanguages) {
    const browserLang = lang.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(browserLang as Language)) {
      return {
        language: browserLang as Language,
        source: 'browser'
      };
    }
  }

  // Return default language if no match found
  return {
    language: DEFAULT_LANGUAGE,
    source: 'default'
  };
};