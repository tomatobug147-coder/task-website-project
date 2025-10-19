import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ChipthemFeatures: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{t('aboutMicrochipPromo.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutMicrochipPromo.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-[#2aa4ff] to-[#4cb6ff] text-white ring-4 ring-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t('aboutMicrochipPromo.certifiedProfessionals')}</h3>
            <p className="text-sm text-gray-600">
              {t('aboutMicrochipPromo.certifiedProfessionalsDesc')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-[#22c55e] to-[#10b981] text-white ring-4 ring-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t('aboutMicrochipPromo.secureDatabase')}</h3>
            <p className="text-sm text-gray-600">
              {t('aboutMicrochipPromo.secureDatabaseDesc')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white ring-4 ring-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 18.6 6.8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t('aboutMicrochipPromo.provenResults')}</h3>
            <p className="text-sm text-gray-600">{t('aboutMicrochipPromo.provenResultsDesc')}</p>
          </div>

          {/* Feature 4 */}
          <div className="text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-[#a78bfa] to-[#f472b6] text-white ring-4 ring-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t('aboutMicrochipPromo.support247')}</h3>
            <p className="text-sm text-gray-600">{t('aboutMicrochipPromo.support247Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChipthemFeatures;