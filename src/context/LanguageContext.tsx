import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { Language, LanguageContextType } from "../types";
import { useAsyncLanguage } from "../utils/useAsyncLanguage";

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
  const { i18n, t } = useTranslation();
  const { isChangingLanguage, error, changeLanguageAsync, clearError } =
    useAsyncLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language || i18n.resolvedLanguage || "en"
  );

  const availableLanguages: Language[] = [
    { code: "en", name: "English", flag: "/flag.jpg" },
    { code: "vn", name: "Vietnamese", flag: "/vietnam.jpg" },
    { code: "jp", name: "Japanese", flag: "/japanese.png" },
  ];

  // Listen for language changes from i18next
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    // Also update current language if i18n language changes
    if (i18n.language && i18n.language !== currentLanguage) {
      setCurrentLanguage(i18n.language);
    }

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n, currentLanguage]);

  const changeLanguage = async (lang: string): Promise<void> => {
    await changeLanguageAsync(lang);
  };

  // Translate function for backward compatibility with components using it
  const translate = (key: string): string => {
    return t(key);
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    isChangingLanguage,
    translate,
    error,
    clearError,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
