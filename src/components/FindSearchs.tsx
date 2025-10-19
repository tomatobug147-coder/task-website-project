import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FindSearchs: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [radius, setRadius] = useState("25");
  const [locationInput, setLocationInput] = useState("");

  const getCurrentLocation = () => {
    // Implement your logic here
    console.log("Get current location");
  };

  const updateRadius = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRadius(e.target.value);
    // Additional logic when radius changes
    console.log("Radius updated:", e.target.value);
  };

  const searchByLocation = () => {
    // Implement your search logic here
    console.log("Search by location:", locationInput);
  };

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row gap-4 items-center justify-between ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Location Controls */}
          <div className={`flex flex-col sm:flex-row gap-4 items-center ${isRTL ? 'rtl' : 'ltr'}`}>
            <button
              onClick={getCurrentLocation}
              className="bg-pet-secondary hover:bg-pet-secondary/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              <svg
                className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
              {t('findSearch.useMyLocation')}
            </button>

            <div className="flex items-center gap-2">
              <label
                htmlFor="radius"
                className="text-sm font-medium text-gray-700"
              >
                {t('findSearch.searchRadius')}
              </label>
              <select
                id="radius"
                value={radius}
                onChange={updateRadius}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="5">5 km</option>
                <option value="10">10 km</option>
                <option value="25">25 km</option>
                <option value="50">50 km</option>
              </select>
            </div>
          </div>

          {/* Manual Location Input */}
          <div className={`flex gap-2 ${isRTL ? 'rtl' : 'ltr'}`}>
            <input
              type="text"
              id="location-input"
              placeholder={t('findSearch.enterCityOrAddress')}
              className="border border-gray-300 rounded-lg px-4 py-2 w-64"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            <button
              onClick={searchByLocation}
              className="bg-pet-primary hover:bg-pet-primary/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {t('findSearch.search')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindSearchs;