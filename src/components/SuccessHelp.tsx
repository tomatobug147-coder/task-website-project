import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SuccessHelp: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent('Check out this amazing way to help protect pets!');

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`;
    window.open(twitterUrl, '_blank');
  };

  const shareViaEmail = () => {
    const subject = 'Help Protect More Pets';
    const body = `I found this great resource to help protect pets and reunite families. Check it out: ${window.location.href}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="py-16 bg-pet-primary">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">{t('successHelp.title')}</h2>
        <p className="text-xl text-blue-100 mb-8">
          {t('successHelp.subtitle')}
        </p>

        {/* Social Share Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={shareOnFacebook}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            📘 {t('successHelp.shareFacebook')}
          </button>
          <button
            onClick={shareOnTwitter}
            className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            🐦 {t('successHelp.shareTwitter')}
          </button>
          <button
            onClick={shareViaEmail}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            📧 {t('successHelp.shareEmail')}
          </button>
        </div>

        <p className="text-blue-100 text-sm mb-6">
          {t('successHelp.footer')}
        </p>
      </div>
    </section>
  );
};

export default SuccessHelp;
