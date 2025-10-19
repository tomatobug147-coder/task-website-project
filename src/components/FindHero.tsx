import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const FindHero: React.FC = () => {
    const { t } = useLanguage();
    // const LocationNotification: React.FC = () => {

    //     const [visible, setVisible] = React.useState(true);

    //         if (!visible) return null;

    //         return (
    //             <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-white max-w-sm transition-all duration-300 transform bg-blue-500">
    //             <div className="flex items-center justify-between">
    //                 <span className="text-sm font-medium">
    //                 Click "Use My Location" to find nearby clinics
    //                 </span>
    //                 <button
    //                 onClick={() => setVisible(false)}
    //                 className="ml-3 text-white hover:text-gray-200"
    //                 aria-label="Close notification"
    //                 >
    //                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    //                     <path d="M6 18L18 6M6 6l12 12" />
    //                 </svg>
    //                 </button>
    //             </div>
    //             </div>
    //         );
    // };
  return (
    <section
      className="relative h-[300px] bg-fixed bg-center bg-cover"
      style={{
        // screenshot-style background: subtle top->bottom gradient over image
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url("https://pet-microchip-system.mrehman.com/assets/images/baner.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      aria-label="Found a pet hero"
      >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full  flex-col items-center justify-start pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('findHero.title')}
        </h1>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          {t('findHero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default FindHero;