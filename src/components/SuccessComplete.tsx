import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SuccessComplete: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{t('successComplete.title')}</h2>
            <p className="text-green-100">{t('successComplete.subtitle')}</p>
          </div>

          <div className="px-8 py-8">
            {/* Registration Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-green-800 mb-4">{t('successComplete.doneTitle')}</h3>
              <div className="space-y-3 text-green-700">
                {[
                  {
                    label: <><strong>Bonduk</strong> {t('successComplete.registered').replace('{name}', '')}</>,
                  },
                  {
                    label: <>{t('successComplete.microchipActive').replace('{number}', '')} <strong>123456789012345</strong></>,
                  },
                  {
                    label: <>{t('successComplete.emergencyService')}</>,
                  },
                  {
                    label: <>{t('successComplete.confirmationEmail').replace('{email}', '')} <strong>user@example.com</strong></>,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Keep Info Updated */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">{t('successComplete.keepUpdatedTitle')}</h3>
                <p className="text-blue-700 text-sm mb-4">
                  {t('successComplete.keepUpdatedDesc')}
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• {t('successComplete.updateAddress')}</li>
                  <li>• {t('successComplete.updatePhone')}</li>
                  <li>• {t('successComplete.updateEmail')}</li>
                  <li>• {t('successComplete.addContacts')}</li>
                </ul>
              </div>

              {/* Emergency Protocol */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4">{t('successComplete.emergencyTitle')}</h3>
                <p className="text-red-700 text-sm mb-4">
                  {t('successComplete.emergencyDesc')}
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• {t('successComplete.callHotline').replace('{hotline}', '')} <strong>1-800-CHIP-PET</strong></li>
                  <li>• {t('successComplete.reportForm')}</li>
                  <li>• {t('successComplete.contactLocal')}</li>
                  <li>• {t('successComplete.postSocial')}</li>
                </ul>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">{t('successComplete.nextStepsTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    step: '1',
                    title: t('successComplete.checkEmailTitle'),
                    text: t('successComplete.checkEmailDesc'),
                    bg: 'bg-pet-primary',
                  },
                  {
                    step: '2',
                    title: t('successComplete.setupAccountTitle'),
                    text: t('successComplete.setupAccountDesc'),
                    bg: 'bg-pet-secondary',
                  },
                  {
                    step: '3',
                    title: t('successComplete.spreadWordTitle'),
                    text: t('successComplete.spreadWordDesc'),
                    bg: 'bg-pet-accent',
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pologin"
                className="bg-pet-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-colors text-center"
              >
                {t('successComplete.setupAccess')}
              </a>
              <a
                href="/"
                className="bg-pet-secondary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-600 transition-colors text-center"
              >
                {t('successComplete.returnHome')}
              </a>
              <button
                onClick={toggleLanguage}
                className="bg-pet-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-600 transition-colors text-center"
              >
                {t('successComplete.changeLanguage')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessComplete;
