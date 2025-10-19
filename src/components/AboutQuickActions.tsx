import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PetProtectionServices: React.FC = () => {
  const { t } = useLanguage();
  const Check = () => (
    <span className="w-5 h-5 mr-2 flex items-center justify-center bg-green-50 text-green-600 rounded-sm flex-shrink-0 ring-1 ring-green-100">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            {t('aboutQuickActions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutQuickActions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1: Microchipping */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#11A1F2] to-blue-600 px-6 py-8 text-center rounded-t-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-30">
                  <svg className="w-8 h-8 text-[#11A1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V9H21M3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V11H3V19M5 19V13H19V19H5M8 15H10V17H8V15M6 15H7V17H6V15M12 15H16V17H12V15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white relative z-30">{t('aboutQuickActions.microchipping.title')}</h3>
              </div>

              {/* white seam between header and body */}
              <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white rounded-b-2xl z-20 pointer-events-none" />

            </div>

            <div className="p-8 bg-white rounded-b-2xl -mt-6 relative z-10">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aboutQuickActions.microchipping.description')}
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.microchipping.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.microchipping.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.microchipping.feature3')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.microchipping.feature4')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Online Database */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-8 text-center rounded-t-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-30">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white relative z-30">{t('aboutQuickActions.database.title')}</h3>
              </div>

              <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white rounded-b-2xl z-20 pointer-events-none" />
            </div>

            <div className="p-8 bg-white rounded-b-2xl -mt-6 relative z-10">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aboutQuickActions.database.description')}
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.database.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.database.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.database.feature3')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.database.feature4')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Home Visits */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-8 text-center rounded-t-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-30">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white relative z-30">{t('aboutQuickActions.homeService.title')}</h3>
              </div>

              <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white rounded-b-2xl z-20 pointer-events-none" />
            </div>

            <div className="p-8 bg-white rounded-b-2xl -mt-6 relative z-10">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('aboutQuickActions.homeService.description')}
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.homeService.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.homeService.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.homeService.feature3')}</span>
                </div>
                <div className="flex items-center">
                  <Check />
                  <span>{t('aboutQuickActions.homeService.feature4')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProtectionServices;