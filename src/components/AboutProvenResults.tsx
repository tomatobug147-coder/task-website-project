import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutProvenResults: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('pricing.basic.title')}</h3>
                <div className="text-3xl font-bold text-pet-primary mb-6">{t('pricing.basic.price')}</div>
                <p className="text-gray-600 mb-6">{t('pricing.basic.description')}</p>
                <div className="space-y-3 text-sm text-gray-700 mb-8 text-left">
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.basic.features.database')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.basic.features.access')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.basic.features.support')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.basic.features.updates')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.basic.features.emergency')}</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    navigate('/registerpet');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                >
                  {t('pricing.basic.button')}
                </Button>
              </div>
            </div>
          </div>

          {/* Complete Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-500 relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-pet-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                {t('pricing.complete.badge')}
              </span>
            </div>
            <div className="p-8 pt-10">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t('pricing.complete.title')}</h3>
                  <div className="text-3xl font-bold text-pet-primary mb-6">{t('pricing.complete.price')}</div>
                  <p className="text-gray-600 mb-6">{t('pricing.complete.description')}</p>
                  <div className="space-y-3 text-sm text-gray-700 mb-8 text-left">
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                      <span>{t('pricing.complete.features.chipping')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                      <span>{t('pricing.complete.features.registration')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                      <span>24/7 support &amp; database access</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                      <span>{t('pricing.complete.features.updates')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                      <span>{t('pricing.complete.features.emergency')}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      navigate('/registerpet');
                      window.scrollTo(0, 0);
                    }}
                    className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                  >
                    {t('pricing.complete.button')}
                  </Button>
                </div>
            </div>
          </div>

          {/* Home Visit Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('pricing.home.title')}</h3>
                <div className="text-3xl font-bold text-pet-primary mb-6">{t('pricing.home.price')}</div>
                <p className="text-gray-600 mb-6">{t('pricing.home.description')}</p>
                <div className="space-y-3 text-sm text-gray-700 mb-8 text-left">
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.home.features.chipping')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.home.features.complete')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.home.features.scheduling')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.home.features.discounts')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-xs mr-3">✓</span>
                    <span>{t('pricing.home.features.comfort')}</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo(0, 0);
                  }}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  {t('pricing.home.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProvenResults;