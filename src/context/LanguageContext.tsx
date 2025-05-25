import React, { createContext, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Language, LanguageContextType } from "../types";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  const availableLanguages: Language[] = [
    { code: "en", name: "English", flag: "/flag.jpg" },
    { code: "vn", name: "Vietnamese", flag: "/vietnam.jpg" },
    { code: "jp", name: "Japanese", flag: "/japanese.png" },
  ];

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  // Ensure we always have a current language, defaulting to 'en' if none is set
  const currentLanguage = i18n.language || i18n.resolvedLanguage || "en";

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
