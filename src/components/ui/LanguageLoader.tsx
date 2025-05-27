import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface LanguageLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LanguageLoader: React.FC<LanguageLoaderProps> = ({
  children,
  fallback,
}) => {
  const { isChangingLanguage } = useLanguage();

  if (isChangingLanguage) {
    return (
      <div className="relative">
        {fallback || (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-gray-600 font-medium">
                Changing language...
              </span>
            </div>
          </div>
        )}
        <div className="opacity-50 pointer-events-none">{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LanguageLoader;
