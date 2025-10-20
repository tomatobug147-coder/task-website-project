import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SuccessStoriesMore: React.FC = () => {
  const { t } = useLanguage();

  const stories = [
    {
      name: t('successStoriesMore.Samur.name'),
      breed: t('successStoriesMore.Samur.breed'),
      time: t('successStoriesMore.Samur.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/labrador.jpg",
      story: t('successStoriesMore.Samur.story'),
      author: t('successStoriesMore.Samur.author'),
    },
    {
      name: t('successStoriesMore.whiskers.name'),
      breed: t('successStoriesMore.whiskers.breed'),
      time: t('successStoriesMore.whiskers.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/persian-cat.jpg",
      story: t('successStoriesMore.whiskers.story'),
      author: t('successStoriesMore.whiskers.author'),
    },
    {
      name: t('successStoriesMore.rex.name'),
      breed: t('successStoriesMore.rex.breed'),
      time: t('successStoriesMore.rex.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/german-shepherd.jpg",
      story: t('successStoriesMore.rex.story'),
      author: t('successStoriesMore.rex.author'),
    },
    {
      name: t('successStoriesMore.mittens.name'),
      breed: t('successStoriesMore.mittens.breed'),
      time: t('successStoriesMore.mittens.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/calico-cat.jpg",
      story: t('successStoriesMore.mittens.story'),
      author: t('successStoriesMore.mittens.author'),
    },
    {
      name: t('successStoriesMore.charlie.name'),
      breed: t('successStoriesMore.charlie.breed'),
      time: t('successStoriesMore.charlie.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/beagle.jpg",
      story: t('successStoriesMore.charlie.story'),
      author: t('successStoriesMore.charlie.author'),
    },
    {
      name: t('successStoriesMore.Zatar.name'),
      breed: t('successStoriesMore.Zatar.breed'),
      time: t('successStoriesMore.Zatar.time'),
      imgSrc: "https://pet-microchip-system.mrehman.com/assets/images/Sunny.jpg",
      story: t('successStoriesMore.Zatar.story'),
      author: t('successStoriesMore.Zatar.author'),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('successStoriesMore.title')}</h2>
          <p className="text-lg text-gray-600">{t('successStoriesMore.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map(({ name, breed, time, imgSrc, story, author }) => (
            <div key={name} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{name}</h4>
                  <p className="text-sm text-gray-600">
                    {breed} &bull; {time}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">&quot;{story}&quot;</p>
              <p className="text-xs text-gray-500 mt-2">- {author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesMore;