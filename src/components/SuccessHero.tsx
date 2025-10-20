import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const SuccessHero: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="bg-gradient-to-r from-green-500 to-green-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('successHero.title')}
          </h1>
          <p className="text-xl text-green-100">
            {t('successHero.subtitle').replace('{petName}', 'Bonduk')}
          </p>
        </div>

        {/* Success Animation */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg mb-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 animate-pulse">
            <span className="text-2xl" role="img" aria-label="paw">
              🐾
            </span>
          </div>
          <span className="text-lg font-semibold text-white">
            {t('successHero.message')}
          </span>
        </div>

      </div>
    </section>
  );
};

export default SuccessHero;
