import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LanguagePreloader } from "./languagePreloader";

interface UseAsyncLanguageReturn {
  isChangingLanguage: boolean;
  error: string | null;
  changeLanguageAsync: (language: string) => Promise<void>;
  clearError: () => void;
}

export const useAsyncLanguage = (): UseAsyncLanguageReturn => {
  const { i18n } = useTranslation();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const changeLanguageAsync = useCallback(
    async (language: string): Promise<void> => {
      if (isChangingLanguage || i18n.language === language) {
        return;
      }

      try {
        setError(null);
        setIsChangingLanguage(true);

        // Check if language is preloaded
        if (!LanguagePreloader.isLanguagePreloaded(language)) {
          await LanguagePreloader.preloadLanguage(language);
        }

        // Add a small delay to ensure UI updates are visible for better UX
        await new Promise((resolve) => setTimeout(resolve, 150));

        await i18n.changeLanguage(language);

        // Ensure localStorage is updated
        localStorage.setItem("i18nextLng", language);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to change language";
        setError(errorMessage);
        console.error("Language change failed:", err);
        throw err;
      } finally {
        setIsChangingLanguage(false);
      }
    },
    [i18n, isChangingLanguage]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isChangingLanguage,
    error,
    changeLanguageAsync,
    clearError,
  };
};
