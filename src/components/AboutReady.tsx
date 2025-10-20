import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const PetProtectionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {t('aboutReady.title')}
        </h2>

        <p className="text-base md:text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('aboutReady.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/registerpet"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="text-xl">🏠</span>
            <span>{t('aboutReady.registerPet')}</span>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200"
          >
            <span className="text-xl">📞</span>
            <span>{t('aboutReady.scheduleVisit')}</span>
          </a>
        </div>

        <p className="flex items-center justify-center text-blue-100 mt-6 text-sm gap-2">
          <span>💡</span>
          <span>{t('aboutReady.questions')}</span>
        </p>
      </div>
    </section>
  );
};

export default PetProtectionSection;