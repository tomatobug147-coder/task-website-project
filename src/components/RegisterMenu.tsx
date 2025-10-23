import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import axios from "axios";


const RegisterMenu: React.FC = () => {
  const navigate = useNavigate();
  const { t, setLanguage, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    nationalIdNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    alternativePhone: "",
    streetAddress: "",
    city: "",
    country: "",
    microchipNumber: "",
    petName: "",
    petType: "",
    breed: "",
    sex: "",
    primaryColor: "",
    age: "",
    weight: "",
    specialMarkings: "",
    veterinaryClinicName: "",
    veterinaryPhone: "",
    microchipImplantDate: "",
    microchipLocation: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    relationshipToOwner: "",
    termsAccepted: false,
    dataAccuracyConfirmed: false,
    ownershipConfirmed: false,
    emailUpdatesOptIn: false,
  });

  const [isPetMicrochipped, setIsPetMicrochipped] = useState<boolean | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;
    const type = (target as HTMLInputElement).type;
    const checked = (target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(false);
    try {
      // console.log(formData);
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log('Created:', response.data);
      navigate("/registersuccess");
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Microchip Question */}
          {isPetMicrochipped === null && (
            <div className="px-8 py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {t('registerMenu.isPetMicrochipped')}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPetMicrochipped(true)}
                    className="bg-pet-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-pet-primary/90 transition-colors"
                  >
                    {t('registerMenu.yesMicrochipped')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPetMicrochipped(false)}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    {t('registerMenu.noMicrochipped')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Microchip Required Message */}
          {isPetMicrochipped === false && (
            <div className="px-8 py-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <div className="text-yellow-800 mb-4">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-lg font-semibold mb-2">Microchipping Required</p>
                  <p className="text-sm">{t('registerMenu.microchipRequired')}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPetMicrochipped(null)}
                  className="bg-pet-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-pet-primary/90 transition-colors"
                >
                  {t('registerMenu.proceedToRegistration')}
                </button>
              </div>
            </div>
          )}

          {/* Registration Form */}
          {isPetMicrochipped === true && (
            <form onSubmit={handleSubmit} className="px-8 py-8">
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
                    name="fullName"
                    required
                    value={formData.fullName}
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
                    name="nationalIdNumber"
                    required
                    value={formData.nationalIdNumber}
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
                    name="confirmPassword"
                    required
                    minLength={8}
                    value={formData.confirmPassword}
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
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
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
                    name="alternativePhone"
                    value={formData.alternativePhone}
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
                    name="streetAddress"
                    required
                    value={formData.streetAddress}
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
                    name="microchipNumber"
                    required
                    maxLength={15}
                    pattern="\d{15}"
                    value={formData.microchipNumber}
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
                    name="petName"
                    required
                    value={formData.petName}
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
                    name="petType"
                    required
                    value={formData.petType}
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
                    name="sex"
                    required
                    value={formData.sex}
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
                    name="primaryColor"
                    required
                    value={formData.primaryColor}
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
                    name="age"
                    value={formData.age}
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
                    name="weight"
                    value={formData.weight}
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
                    name="specialMarkings"
                    rows={3}
                    value={formData.specialMarkings}
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
                    name="veterinaryClinicName"
                    value={formData.veterinaryClinicName}
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
                    name="veterinaryPhone"
                    value={formData.veterinaryPhone}
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
                    name="microchipImplantDate"
                    value={formData.microchipImplantDate}
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
                    name="microchipLocation"
                    value={formData.microchipLocation}
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
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
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
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
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
                    name="relationshipToOwner"
                    value={formData.relationshipToOwner}
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
                      name="termsAccepted"
                      required
                      checked={formData.termsAccepted}
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
                      name="dataAccuracyConfirmed"
                      required
                      checked={formData.dataAccuracyConfirmed}
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
                      name="ownershipConfirmed"
                      required
                      checked={formData.ownershipConfirmed}
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
                      name="emailUpdatesOptIn"
                      checked={formData.emailUpdatesOptIn}
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
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-pet-primary to-pet-secondary text-white px-12 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? t('registerMenu.submitting') || 'Submitting...' : t('registerMenu.submitButton')}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                {t('registerMenu.submitNote')}
              </p>
              </div>
            </form>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-green-600 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="false"
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
