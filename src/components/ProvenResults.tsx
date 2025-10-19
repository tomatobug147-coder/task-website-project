import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProvenResults = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-sky-500">
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('provenResults.title')}
          </h2>
          <p className="text-white/90 text-base md:text-lg">
            {t('provenResults.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-md">
              <span className="text-3xl font-extrabold">95%</span>
            </div>
            <div className="font-semibold text-lg">{t('provenResults.successRate')}</div>
            <div className="text-white/90 text-sm">{t('provenResults.successRateDesc')}</div>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-md">
              <span className="text-3xl font-extrabold">1,247</span>
            </div>
            <div className="font-semibold text-lg">{t('provenResults.happyReunions')}</div>
            <div className="text-white/90 text-sm">{t('provenResults.happyReunionsDesc')}</div>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-md">
              <span className="text-3xl font-extrabold">&lt; 24</span>
            </div>
            <div className="font-semibold text-lg">{t('provenResults.averageHours')}</div>
            <div className="text-white/90 text-sm">{t('provenResults.averageHoursDesc')}</div>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-md">
              <span className="text-3xl font-extrabold">10K+</span>
            </div>
            <div className="font-semibold text-lg">{t('provenResults.petsProtected')}</div>
            <div className="text-white/90 text-sm">{t('provenResults.petsProtectedDesc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;


