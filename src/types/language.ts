export type Language = 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

export interface DetectedLanguage {
  language: Language;
  source: 'localStorage' | 'browser' | 'geolocation' | 'default';
}

export const DEFAULT_LANGUAGE: Language = 'fr';
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr'];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  fr: 'Français'
};