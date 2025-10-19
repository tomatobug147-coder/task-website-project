import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-pets.jpg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-pet-primary to-pet-secondary py-24 relative overflow-hidden hero-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-1"
        style={{ 
          backgroundImage: `url("https://pet-microchip-system.mrehman.com/assets/images/baner.jpg")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex-col items-center justify-start pt-16 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-amber-100/40 backdrop-blur-sm px-6 py-3 shadow-sm">
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <div className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                  <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-white">{t('hero.trustedBy')}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg font-sans">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons - Always visible */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'rtl' : 'ltr'}`}>
            <Button
              onClick={() => navigate('/registerpet')}
              size="lg"
              className="w-[240px] h-[64px] bg-white hover:bg-gray-50 text-blue-600 hover:text-blue-700 border-0 shadow-lg rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <span className={`${isRTL ? 'ml-2' : 'mr-2'} text-lg`}>🏠</span>
              {t('hero.cta')}
            </Button>
            <Button 
               onClick={() => navigate('*')}
              size="lg" 
              className="w-[240px] h-[64px] bg-red-600 hover:bg-red-700 text-white hover:text-white border-0 shadow-lg rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <span className={`${isRTL ? 'ml-2' : 'mr-2'} text-lg`}>🚨</span>
              {t('hero.reportLost')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
