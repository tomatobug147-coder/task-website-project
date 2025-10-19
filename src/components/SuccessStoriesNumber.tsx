import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SuccessStoriesNumber: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('successStoriesNumber.title')}</h2>
          <p className="text-lg text-gray-600">{t('successStoriesNumber.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-white">95%</span>
             </div>
             <h3 className="font-bold text-gray-800 mb-2">{t('successStoriesNumber.microchippedPets')}</h3>
             <p className="text-sm text-gray-600">{t('successStoriesNumber.returnHome')}</p>
           </div>

           <div className="text-center">
             <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-white">22%</span>
             </div>
             <h3 className="font-bold text-gray-800 mb-2">{t('successStoriesNumber.nonMicrochipped')}</h3>
             <p className="text-sm text-gray-600">{t('successStoriesNumber.everReunited')}</p>
           </div>

           <div className="text-center">
             <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-white">18</span>
             </div>
             <h3 className="font-bold text-gray-800 mb-2">{t('successStoriesNumber.averageHours')}</h3>
             <p className="text-sm text-gray-600">{t('successStoriesNumber.forReunion')}</p>
           </div>

           <div className="text-center">
             <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-2xl font-bold text-white">10K+</span>
             </div>
             <h3 className="font-bold text-gray-800 mb-2">{t('successStoriesNumber.petsProtected')}</h3>
             <p className="text-sm text-gray-600">{t('successStoriesNumber.inDatabase')}</p>
           </div>
         </div>
      </div>
    </section>
  );
};

export default SuccessStoriesNumber;