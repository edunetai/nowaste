import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import en from './en.json';
import vi from './vi.json';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, typeof en> = {
  en,
  vi,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'vi') {
        return saved;
      }
    }
    return 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const resolvePath = (obj: Record<string, unknown>, keys: string[]): string | Record<string, unknown> => {
    let current: string | Record<string, unknown> = obj;
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = (current as Record<string, unknown>)[k] as Record<string, unknown>;
      } else {
        return '';
      }
    }
    return current;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    const result = resolvePath(translations[language] as unknown as Record<string, unknown>, keys);
    
    if (typeof result === 'string' && result !== '') {
      return result;
    }

    const fallbackResult = resolvePath(translations.en as unknown as Record<string, unknown>, keys);
    if (typeof fallbackResult === 'string' && fallbackResult !== '') {
      return fallbackResult;
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
