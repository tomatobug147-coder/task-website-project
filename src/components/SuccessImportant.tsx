import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const SuccessImportant: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          {t('successImportant.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Microchip Care */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V9H21M3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V11H3V19M5 19V13H19V19H5M8 15H10V17H8V15M6 15H7V17H6V15M12 15H16V17H12V15"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-3 text-center">
              {t('successImportant.microchipCare')}
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• {t('successImportant.noMaintenance')}</li>
              <li>• Lasts your pet&apos;s lifetime</li>
              <li>• {t('successImportant.askVetScan')}</li>
              <li>• {t('successImportant.cannotBeLost')}</li>
            </ul>
          </div>

          {/* Registry Updates */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-3 text-center">
              {t('successImportant.keepInfoUpdated')}
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• {t('successImportant.logInUpdate')}</li>
              <li>• {t('successImportant.updateWhenMove')}</li>
              <li>• {t('successImportant.addNewPhones')}</li>
              <li>• {t('successImportant.updateEmergencyContacts')}</li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-3 text-center">{t('successImportant.emergency247')}</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• {t('successImportant.saveHotline')}</li>
              <li>• {t('successImportant.available247')}</li>
              <li>• {t('successImportant.immediateHelp')}</li>
              <li>• {t('successImportant.emergencyAccess')}</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessImportant;
