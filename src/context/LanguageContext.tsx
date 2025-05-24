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
    { code: "en", name: "English", flag: "/src/assets/images/flag.jpg" },
    { code: "vn", name: "Vietnamese", flag: "/src/assets/images/vietnam.jpg" },
    { code: "jp", name: "Japanese", flag: "/src/assets/images/japanese.png" },
  ];

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const value: LanguageContextType = {
    currentLanguage: i18n.language || "en",
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
