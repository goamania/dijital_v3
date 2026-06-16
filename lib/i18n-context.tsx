'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Language } from '@/lib/i18n';

const LanguageContext = createContext<Language>('tr');

export function LanguageProvider({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Language;
}) {
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Language {
  return useContext(LanguageContext);
}
