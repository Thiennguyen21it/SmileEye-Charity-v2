import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    isChangingLanguage,
    error,
    clearError,
  } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear error when component unmounts or dropdown closes
  useEffect(() => {
    if (!isLanguageOpen && error) {
      const timer = setTimeout(() => {
        clearError();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLanguageOpen, error, clearError]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = (): void => {
    if (!isChangingLanguage) {
      setIsLanguageOpen(!isLanguageOpen);
    }
  };

  const handleLanguageChange = async (langCode: string): Promise<void> => {
    try {
      await changeLanguage(langCode);
      setIsLanguageOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
      // Error is now handled by the context, just keep dropdown open
    }
  };

  const getCurrentLanguage = () => {
    const language = availableLanguages.find(
      (lang) => lang.code === currentLanguage
    );
    // Fallback to first available language if current language is not found
    return language || availableLanguages[0];
  };

  const isActiveLink = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Error notification */}
      {error && (
        <div className="bg-red-600 text-white text-center py-2 px-4 text-sm">
          <span>{error}</span>
          <button
            onClick={clearError}
            className="ml-2 text-white hover:text-red-200"
          >
            ×
          </button>
        </div>
      )}

      {/* Top header with logo and language selector */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Smile Eye Charity"
                className="w-10 h-10 object-contain"
              />
              <Link
                to="/"
                className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
              >
                Smile Eye Charity
              </Link>
            </div>

            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                className={`flex items-center space-x-2 px-3 py-2 rounded-md bg-green-600 hover:bg-green-500 transition-colors ${
                  isChangingLanguage ? "opacity-75 cursor-wait" : ""
                }`}
                onClick={toggleLanguageDropdown}
                disabled={isChangingLanguage}
                aria-label="Change language"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${
                    getCurrentLanguage().flag
                  }`}
                  alt={getCurrentLanguage().name}
                  className="w-6 h-4 object-cover rounded"
                />
                <span className="text-sm font-medium">
                  {getCurrentLanguage().name}
                </span>
                {isChangingLanguage ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {isLanguageOpen && !isChangingLanguage && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999] overflow-hidden">
                  {availableLanguages.map((language) => (
                    <button
                      key={language.code}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        currentLanguage === language.code
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700"
                      } ${
                        currentLanguage === language.code
                          ? "cursor-default"
                          : ""
                      }`}
                      onClick={() => handleLanguageChange(language.code)}
                      disabled={currentLanguage === language.code}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${language.flag}`}
                        alt={language.name}
                        className="w-6 h-4 object-cover rounded flex-shrink-0"
                      />
                      <span className="text-sm font-medium whitespace-nowrap">
                        {language.name}
                      </span>
                      {currentLanguage === language.code && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* Navigation menu */}
            <ul
              className={`${
                isMenuOpen
                  ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-lg py-4 space-y-2 md:relative md:flex-row md:shadow-none md:py-0 md:space-y-0 md:space-x-8"
                  : "hidden md:flex md:flex-row md:space-x-8"
              } transition-all duration-300`}
            >
              <li>
                <Link
                  to="/"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("home")}
                </Link>
              </li>
              {/* <li>
                <a
                  href="/#activities"
                  className="block px-4 py-2 font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("activities")}
                </a>
              </li> */}
              <li>
                <Link
                  to="/blog"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/blog")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/achievement"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/achievement")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("achievement")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contributors"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/contributors")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contributors")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contribute"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/contribute")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contribute")}
                </Link>
              </li>
              <li>
                <Link
                  to="/qa-contact"
                  className={`block px-4 py-2 font-medium transition-colors hover:text-green-600 ${
                    isActiveLink("/qa-contact")
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("qa_contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
