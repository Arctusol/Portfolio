import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageContextType, DEFAULT_LANGUAGE, DetectedLanguage } from '../types/language';
import { detectLanguage } from '../services/languageDetection';
import i18next from 'i18next';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  const setLanguage = async (newLanguage: Language) => {
    try {
      await i18next.changeLanguage(newLanguage);
      localStorage.setItem('preferredLanguage', newLanguage);
      setLanguageState(newLanguage);
      document.documentElement.lang = newLanguage;
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const detectedLanguage: DetectedLanguage = await detectLanguage();
        await setLanguage(detectedLanguage.language);
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};