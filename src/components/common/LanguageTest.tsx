import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

export const LanguageTest: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border shadow-lg">
      <div className="space-y-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Current Language: <span className="font-mono">{language}</span>
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Sample Translations:</p>
          <ul className="text-sm space-y-1">
            <li>Navigation Home: {t('navigation.home')}</li>
            <li>Projects Title: {t('projects.title')}</li>
            <li>Contact Form Name: {t('contact.form.name')}</li>
          </ul>
        </div>
        
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Reset Language Preference
          </Button>
        </div>
      </div>
    </div>
  );
};