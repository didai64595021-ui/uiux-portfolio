'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'ko' | 'zh-TW';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (ko: string, zhTW: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ko');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ko' ? 'zh-TW' : 'ko'));
  }, []);

  const t = useCallback(
    (ko: string, zhTW: string) => {
      return lang === 'ko' ? ko : zhTW;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
