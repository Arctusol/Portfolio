import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

export const useTranslate = (namespace = 'common') => {
  const { t, i18n } = useTranslation(namespace);
  const { language, isLoading: isLanguageLoading } = useLanguage();
  const [isTranslationLoaded, setIsTranslationLoaded] = useState(false);

  useEffect(() => {
    const loadTranslation = async () => {
      setIsTranslationLoaded(false);
      try {
        if (namespace !== 'common') {
          await i18n.loadNamespaces(namespace);
        }
        setIsTranslationLoaded(true);
      } catch (error) {
        console.error(`Failed to load translations for namespace: ${namespace}`, error);
        setIsTranslationLoaded(true); // Set to true even on error to prevent infinite loading
      }
    };

    loadTranslation();
  }, [namespace, language, i18n]);

  return {
    t,
    i18n,
    isLoading: isLanguageLoading || !isTranslationLoaded,
    language,
  };
};

// Type-safe translation key helper
export type TranslationKey = string;

// Helper function to ensure type safety for translation keys
export const createTranslationKey = (key: TranslationKey): TranslationKey => key;