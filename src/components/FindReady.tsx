import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const FindReady: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-blue-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('findReady.title')}</h2>
        <p className="text-lg text-gray-600 mb-8">
          {t('findReady.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/registerpet')}
            className="bg-pet-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-colors"
          >
            {t('findReady.registerPet')}
          </button>
          <button
            onClick={() => navigate('/about')}
            className="bg-gray-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-700 transition-colors"
          >
            {t('findReady.learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindReady;