import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FoundPetFormData {
  pet_type: string;
  size: string;
  color: string;
  description: string;
  date_found: string;
  time_found: string;
  found_location: string;
  finder_name: string;
  phone: string;
  email: string;
  current_location: string;
}

const LostFoundFoundreport: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FoundPetFormData>({
    pet_type: '',
    size: '',
    color: '',
    description: '',
    date_found: '',
    time_found: '',
    found_location: '',
    finder_name: '',
    phone: '',
    email: '',
    current_location: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/process-found-pet.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


  return (
    <section id="report-found" className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('foundPet.title')}</h2>
          <p className="text-lg text-gray-600">{t('foundPet.subtitle')}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-yellow-500 px-8 py-6 text-center">
            <h3 className="text-xl font-bold text-white">{t('foundPet.formTitle')}</h3>
            <p className="text-yellow-100">{t('foundPet.formSubtitle')}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            action="process-found-pet.php"
            className="px-8 py-8"
            encType="multipart/form-data"
          >
            {/* Pet Description */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('foundPet.petDescription')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.petType')}
                  </label>
                  <select
                    name="pet_type"
                    required
                    value={formData.pet_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">{t('foundPet.selectPetType')}</option>
                    <option value="Dog">{t('foundPet.dog')}</option>
                    <option value="Cat">{t('foundPet.cat')}</option>
                    <option value="Bird">{t('foundPet.bird')}</option>
                    <option value="Other">{t('foundPet.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.size')}
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">{t('foundPet.selectSize')}</option>
                    <option value="Small">{t('foundPet.small')}</option>
                    <option value="Medium">{t('foundPet.medium')}</option>
                    <option value="Large">{t('foundPet.large')}</option>
                    <option value="Extra Large">{t('foundPet.extraLarge')}</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.color')}
                  </label>
                  <input
                    type="text"
                    name="color"
                    required
                    value={formData.color}
                    onChange={handleChange}
                    placeholder={t('foundPet.colorPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.description')}
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={t('foundPet.descriptionPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Found Location */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('foundPet.locationSection')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.dateFound')}
                  </label>
                  <input
                    type="date"
                    name="date_found"
                    required
                    value={formData.date_found}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.timeFound')}
                  </label>
                  <input
                    type="time"
                    name="time_found"
                    value={formData.time_found}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.locationFound')}
                  </label>
                  <input
                    type="text"
                    name="found_location"
                    required
                    value={formData.found_location}
                    onChange={handleChange}
                    placeholder={t('foundPet.locationPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('foundPet.contactSection')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.name')}
                  </label>
                  <input
                    type="text"
                    name="finder_name"
                    required
                    value={formData.finder_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('foundPet.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('foundPet.currentLocation')}
                  </label>
                  <select
                    name="current_location"
                    value={formData.current_location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">{t('foundPet.selectCurrentLocation')}</option>
                    <option value="With me">{t('foundPet.withMe')}</option>
                    <option value="Veterinary clinic">{t('foundPet.vetClinic')}</option>
                    <option value="Animal shelter">{t('foundPet.animalShelter')}</option>
                    <option value="Still roaming">{t('foundPet.roaming')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-600 transition-all duration-200"
              >
                {t('foundPet.submit')}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                {t('foundPet.submitNote')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LostFoundFoundreport;