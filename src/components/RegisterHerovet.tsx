import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const RegisterHerovet: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full  flex-col items-center justify-start pt-16 text-center">
        <div className="mb-6">
          <svg
            className="w-20 h-20 text-white mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('registerHerovet.title')}
        </h1>
        <p className="text-xl text-green-100 mb-2">{t('registerHerovet.registered').replace('{petName}', 'ABC Veterinary Clinic')}</p>
        <p className="text-lg text-green-200">
          {t('registerHerovet.welcome')}
        </p>
      
      </div>
    </section>
  );
};

export default RegisterHerovet;
