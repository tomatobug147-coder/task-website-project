import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RegisterMenu: React.FC = () => {
  const navigate = useNavigate();
  const { t, setLanguage, language } = useLanguage();
  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    alt_phone: "",
    address: "",
    city: "",
    country: "",
    microchip_number: "",
    pet_name: "",
    pet_type: "",
    breed: "",
    pet_sex: "",
    pet_color: "",
    pet_age: "",
    pet_weight: "",
    special_markings: "",
    vet_clinic: "",
    vet_phone: "",
    microchip_date: "",
    microchip_location: "",
    emergency_name: "",
    emergency_phone: "",
    emergency_relationship: "",
    terms_agree: false,
    info_accurate: false,
    pet_ownership: false,
    email_updates: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send to API or PHP endpoint
    console.log("Form submitted:", formData);
    // Navigate to success page
    navigate("/registersuccess");
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {t('registerMenu.title')}
            </h2>
            <p className="text-gray-600">
              {t('registerMenu.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-8" noValidate>
            {/* Owner Information Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-primary text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                {t('registerMenu.ownerInfo')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.fullName')}
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.fullNamePlaceholder')}
                  />
                </div>

                {/* National ID Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.nationalId')}
                  </label>
                  <input
                    type="text"
                    name="national_id"
                    required
                    value={formData.national_id}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.nationalIdPlaceholder')}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {t('registerMenu.nationalIdNote')}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.emailPlaceholder')}
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.password')}
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.passwordPlaceholder')}
                  />
                  <p className="text-sm text-gray-500 mt-1">{t('registerMenu.passwordNote')}</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.confirmPassword')}
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    required
                    minLength={8}
                    value={formData.confirm_password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.confirmPasswordPlaceholder')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.phonePlaceholder')}
                  />
                </div>

                {/* Alternative Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.altPhone')}
                  </label>
                  <input
                    type="tel"
                    name="alt_phone"
                    value={formData.alt_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.altPhonePlaceholder')}
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.address')}
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.addressPlaceholder')}
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.city')}
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.cityPlaceholder')}
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.country')}
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder={t('registerMenu.countryPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Pet Information Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-secondary text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                {t('registerMenu.petInfo')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Microchip Number */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.microchipNumber')}
                  </label>
                  <input
                    type="text"
                    name="microchip_number"
                    required
                    maxLength={15}
                    pattern="\d{15}"
                    value={formData.microchip_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200 font-mono text-lg"
                    placeholder="123456789012345"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {t('registerMenu.microchipNumberNote')}
                  </p>
                </div>

                {/* Pet Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.petName')}
                  </label>
                  <input
                    type="text"
                    name="pet_name"
                    required
                    value={formData.pet_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.petNamePlaceholder')}
                  />
                </div>

                {/* Pet Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.petType')}
                  </label>
                  <select
                    name="pet_type"
                    required
                    value={formData.pet_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">{t('registerMenu.selectPetType')}</option>
                    <option value="Dog">{t('registerMenu.dog')}</option>
                    <option value="Cat">{t('registerMenu.cat')}</option>
                    <option value="Bird">{t('registerMenu.bird')}</option>
                    <option value="Rabbit">{t('registerMenu.rabbit')}</option>
                    <option value="Ferret">{t('registerMenu.ferret')}</option>
                    <option value="Other">{t('registerMenu.other')}</option>
                  </select>
                </div>

                {/* Breed */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.breed')}
                  </label>
                  <input
                    type="text"
                    name="breed"
                    required
                    value={formData.breed}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.breedPlaceholder')}
                  />
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.sex')}
                  </label>
                  <select
                    name="pet_sex"
                    required
                    value={formData.pet_sex}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">{t('registerMenu.selectSex')}</option>
                    <option value="Male">{t('registerMenu.male')}</option>
                    <option value="Female">{t('registerMenu.female')}</option>
                    <option value="Male - Neutered">{t('registerMenu.maleNeutered')}</option>
                    <option value="Female - Spayed">{t('registerMenu.femaleSpayed')}</option>
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.primaryColor')}
                  </label>
                  <input
                    type="text"
                    name="pet_color"
                    required
                    value={formData.pet_color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Golden, Black, Brown &amp; White"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.age')}
                  </label>
                  <input
                    type="text"
                    name="pet_age"
                    value={formData.pet_age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.agePlaceholder')}
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.weight')}
                  </label>
                  <input
                    type="text"
                    name="pet_weight"
                    value={formData.pet_weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.weightPlaceholder')}
                  />
                </div>

                {/* Special Markings */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.specialMarkings')}
                  </label>
                  <textarea
                    name="special_markings"
                    rows={3}
                    value={formData.special_markings}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.specialMarkingsPlaceholder')}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Veterinary Information */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-accent text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                {t('registerMenu.vetInfo')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vet Clinic Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.vetClinicName')}
                  </label>
                  <input
                    type="text"
                    name="vet_clinic"
                    value={formData.vet_clinic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.vetClinicPlaceholder')}
                  />
                </div>

                {/* Vet Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.vetPhone')}
                  </label>
                  <input
                    type="tel"
                    name="vet_phone"
                    value={formData.vet_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.vetPhonePlaceholder')}
                  />
                </div>

                {/* Microchip Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.microchipDate')}
                  </label>
                  <input
                    type="date"
                    name="microchip_date"
                    value={formData.microchip_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Microchip Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.microchipLocation')}
                  </label>
                  <select
                    name="microchip_location"
                    value={formData.microchip_location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">{t('registerMenu.selectLocation')}</option>
                    <option value="Between shoulder blades">
                      {t('registerMenu.betweenShoulderBlades')}
                    </option>
                    <option value="Left shoulder blade">{t('registerMenu.leftShoulderBlade')}</option>
                    <option value="Right shoulder blade">{t('registerMenu.rightShoulderBlade')}</option>
                    <option value="Other">{t('registerMenu.other')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                {t('registerMenu.emergencyContact')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Emergency Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.emergencyName')}
                  </label>
                  <input
                    type="text"
                    name="emergency_name"
                    value={formData.emergency_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.emergencyNamePlaceholder')}
                  />
                </div>

                {/* Emergency Contact Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.emergencyPhone')}
                  </label>
                  <input
                    type="tel"
                    name="emergency_phone"
                    value={formData.emergency_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.emergencyPhonePlaceholder')}
                  />
                </div>

                {/* Relationship */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('registerMenu.relationship')}
                  </label>
                  <input
                    type="text"
                    name="emergency_relationship"
                    value={formData.emergency_relationship}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    placeholder={t('registerMenu.relationshipPlaceholder')}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Agreement */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6 border">
                <h4 className="font-semibold text-gray-800 mb-4">
                  {t('registerMenu.termsTitle')}
                </h4>
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="terms_agree"
                      required
                      checked={formData.terms_agree}
                      onChange={handleChange}
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {t('registerMenu.agreeTo')} {" "}
                      <a
                        href="terms_conditions.php"
                        className="text-pet-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('registerMenu.termsOfService')}
                      </a>{" "}
                      {t('registerMenu.and')} {" "}
                      <a
                        href="privacy_policy.php"
                        className="text-pet-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('registerMenu.privacyPolicy')}
                      </a>{" "}
                      *
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="info_accurate"
                      required
                      checked={formData.info_accurate}
                      onChange={handleChange}
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {t('registerMenu.certifyAccurate')} *
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="pet_ownership"
                      required
                      checked={formData.pet_ownership}
                      onChange={handleChange}
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {t('registerMenu.confirmOwnership')} *
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="email_updates"
                      checked={formData.email_updates}
                      onChange={handleChange}
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {t('registerMenu.emailUpdates')}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-pet-primary to-pet-secondary text-white px-12 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                {t('registerMenu.submitButton')}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                {t('registerMenu.submitNote')}
              </p>
            </div>
          </form>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-green-600 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
            </svg>
            <div>
              <h4 className="font-semibold text-green-800">
                {t('registerMenu.securityTitle')}
              </h4>
              <p className="text-green-700 text-sm">
                {t('registerMenu.securityDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterMenu;
