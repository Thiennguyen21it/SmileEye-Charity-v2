export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => Promise<void>;
  availableLanguages: Language[];
  isChangingLanguage: boolean;
  translate: (key: string) => string;
  error: string | null;
  clearError: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ProgramData {
  id: string;
  titleKey: string;
  contentKey: string;
  image?: string;
  status: "calling" | "running" | "done";
}

export interface BlogPost {
  id: string;
  titleKey: string;
  date: string;
  content: string;
  image?: string;
}

export interface Contributor {
  id: string;
  name: string;
  role?: string;
  description?: string;
  image?: string;
}
