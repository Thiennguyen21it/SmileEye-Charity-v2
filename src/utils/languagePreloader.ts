import i18n from "../i18n/config";

export class LanguagePreloader {
  private static preloadedLanguages = new Set<string>();

  /**
   * Preload a language to ensure faster switching
   */
  static async preloadLanguage(language: string): Promise<boolean> {
    if (this.preloadedLanguages.has(language)) {
      return true;
    }

    try {
      // Check if the language is already loaded
      if (i18n.hasResourceBundle(language, "translation")) {
        this.preloadedLanguages.add(language);
        return true;
      }

      // For this app, resources are already loaded at startup
      // But this could be extended to load resources dynamically
      if (["en", "vn", "jp"].includes(language)) {
        this.preloadedLanguages.add(language);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Failed to preload language ${language}:`, error);
      return false;
    }
  }

  /**
   * Preload all available languages
   */
  static async preloadAllLanguages(): Promise<void> {
    const languages = ["en", "vn", "jp"];

    await Promise.all(languages.map((lang) => this.preloadLanguage(lang)));
  }

  /**
   * Check if a language is preloaded
   */
  static isLanguagePreloaded(language: string): boolean {
    return this.preloadedLanguages.has(language);
  }

  /**
   * Get all preloaded languages
   */
  static getPreloadedLanguages(): string[] {
    return Array.from(this.preloadedLanguages);
  }
}

// Preload languages on module load
LanguagePreloader.preloadAllLanguages();
