import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SuccessStoriesRecent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('successStoriesRecent.title')}</h2>
          <p className="text-lg text-gray-600">{t('successStoriesRecent.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-green-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{t('successStoriesRecent.max.title')}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">{t('successStoriesRecent.max.time')}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://pet-microchip-system.mrehman.com/assets/images/Max.jpg" alt={t('successStoriesRecent.max.petType')} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t('successStoriesRecent.max.petName')} - {t('successStoriesRecent.max.petType')}</h4>
                  <p className="text-sm text-gray-600">{t('successStoriesRecent.max.location')}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                {t('successStoriesRecent.max.story')}
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">- Sarah &amp; Mike Johnson</p>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm font-semibold">{t('successStoriesRecent.reunited')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{t('successStoriesRecent.luna.title')}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">{t('successStoriesRecent.luna.time')}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://pet-microchip-system.mrehman.com/assets/images/Luna.jpg" alt={t('successStoriesRecent.luna.petType')} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t('successStoriesRecent.luna.petName')} - {t('successStoriesRecent.luna.petType')}</h4>
                  <p className="text-sm text-gray-600">{t('successStoriesRecent.luna.location')}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                {t('successStoriesRecent.luna.story')}
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">- Yazan Rashed &amp; Yara Haddad</p>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm font-semibold">{t('successStoriesRecent.reunited')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-purple-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Bonduk's Second Chance</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">1 week</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://pet-microchip-system.mrehman.com/assets/images/Buddy.jpg" alt={t('successStoriesRecent.Bonduk.petType')} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t('successStoriesRecent.Bonduk.petName')} - {t('successStoriesRecent.Bonduk.petType')}</h4>
                  <p className="text-sm text-gray-600">{t('successStoriesRecent.Bonduk.location')}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                {t('successStoriesRecent.Bonduk.story')}
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">- {t('successStoriesRecent.Bonduk.author')}</p>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm font-semibold">{t('successStoriesRecent.reunited')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story 4 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-orange-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{t('successStoriesRecent.milo.title')}</h3>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">{t('successStoriesRecent.milo.time')}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://pet-microchip-system.mrehman.com/assets/images/milo.jpg" alt={t('successStoriesRecent.milo.petType')} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t('successStoriesRecent.milo.petName')} - {t('successStoriesRecent.milo.petType')}</h4>
                  <p className="text-sm text-gray-600">{t('successStoriesRecent.milo.location')}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                {t('successStoriesRecent.milo.story')}
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">- {t('successStoriesRecent.milo.author')}</p>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm font-semibold">{t('successStoriesRecent.reunited')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesRecent;