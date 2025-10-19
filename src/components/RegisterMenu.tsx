import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const PetRegistrationForm: React.FC = () => {
  const [form, setForm] = useState({
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue: string | boolean = value;
    if ('checked' in e.target && 'type' in e.target && e.target.type === 'checkbox') {
      newValue = e.target.checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    // console.log("hello")
  e.preventDefault();

  try {
    const response = await axios.post("https://localhost:5000/api/register", form);
    console.log("Form submitted successfully:", response.data);
    alert("Pet registration completed successfully!");
    // Optionally reset form or redirect
    setForm({
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
  } catch (error: any) {
    console.error("Error submitting form:", error.response?.data || error.message);
    alert("Failed to submit the form. Please try again.");
  }
};


  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pet Registration Form</h2>
            <p className="text-gray-600">
              Please fill out all required information for both you and your pet
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Owner Information Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-primary text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">1</span>
                Owner Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="full_name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* National ID Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="national_id">
                    National ID Number *
                  </label>
                  <input
                    type="text"
                    id="national_id"
                    name="national_id"
                    value={form.national_id}
                    onChange={handleChange}
                    required
                    placeholder="Enter your national ID number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                  <p className="text-sm text-gray-500 mt-1">Required for identity verification</p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum 8 characters</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="confirm_password">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={form.confirm_password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Alternative Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="alt_phone">
                    Alternative Phone
                  </label>
                  <input
                    type="tel"
                    id="alt_phone"
                    name="alt_phone"
                    value={form.alt_phone}
                    onChange={handleChange}
                    placeholder="(555) 987-6543"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="address">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="city">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="country">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    placeholder="Enter Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Pet Information Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-secondary text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">2</span>
                Pet Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Microchip Number */}
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="microchip_number"
                  >
                    Microchip Number *
                  </label>
                  <input
                    type="text"
                    id="microchip_number"
                    name="microchip_number"
                    value={form.microchip_number}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    pattern="\d{15}"
                    placeholder="123456789012345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200 font-mono text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">15-digit number found on microchip paperwork</p>
                </div>

                {/* Pet Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_name">
                    Pet Name *
                  </label>
                  <input
                    type="text"
                    id="pet_name"
                    name="pet_name"
                    value={form.pet_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter pet's name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Pet Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_type">
                    Pet Type *
                  </label>
                  <select
                    id="pet_type"
                    name="pet_type"
                    value={form.pet_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Pet Type</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Ferret">Ferret</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Breed */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="breed">
                    Breed *
                  </label>
                  <input
                    type="text"
                    id="breed"
                    name="breed"
                    value={form.breed}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Golden Retriever, Mixed Breed"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_sex">
                    Sex *
                  </label>
                  <select
                    id="pet_sex"
                    name="pet_sex"
                    value={form.pet_sex}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Male - Neutered">Male - Neutered</option>
                    <option value="Female - Spayed">Female - Spayed</option>
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_color">
                    Primary Color *
                  </label>
                  <input
                    type="text"
                    id="pet_color"
                    name="pet_color"
                    value={form.pet_color}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Golden, Black, Brown &amp; White"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_age">
                    Age
                  </label>
                  <input
                    type="text"
                    id="pet_age"
                    name="pet_age"
                    value={form.pet_age}
                    onChange={handleChange}
                    placeholder="e.g., 3 years, 6 months"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="pet_weight">
                    Weight
                  </label>
                  <input
                    type="text"
                    id="pet_weight"
                    name="pet_weight"
                    value={form.pet_weight}
                    onChange={handleChange}
                    placeholder="e.g., 65 lbs, 8 kg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Special Markings */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="special_markings">
                    Special Markings or Features
                  </label>
                  <textarea
                    id="special_markings"
                    name="special_markings"
                    rows={3}
                    value={form.special_markings}
                    onChange={handleChange}
                    placeholder="Describe any unique markings, scars, or distinguishing features"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Veterinary Information */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-pet-accent text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">3</span>
                Veterinary Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vet Clinic Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="vet_clinic">
                    Veterinary Clinic Name
                  </label>
                  <input
                    type="text"
                    id="vet_clinic"
                    name="vet_clinic"
                    value={form.vet_clinic}
                    onChange={handleChange}
                    placeholder="Enter clinic name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Vet Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="vet_phone">
                    Veterinary Phone
                  </label>
                  <input
                    type="tel"
                    id="vet_phone"
                    name="vet_phone"
                    value={form.vet_phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Microchip Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="microchip_date">
                    Microchip Implant Date
                  </label>
                  <input
                    type="date"
                    id="microchip_date"
                    name="microchip_date"
                    value={form.microchip_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Microchip Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="microchip_location">
                    Microchip Location
                  </label>
                  <select
                    id="microchip_location"
                    name="microchip_location"
                    value={form.microchip_location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Location</option>
                    <option value="Between shoulder blades">Between shoulder blades</option>
                    <option value="Left shoulder blade">Left shoulder blade</option>
                    <option value="Right shoulder blade">Right shoulder blade</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">4</span>
                Emergency Contact (Optional)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Emergency Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="emergency_name">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergency_name"
                    name="emergency_name"
                    value={form.emergency_name}
                    onChange={handleChange}
                    placeholder="Enter emergency contact name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Emergency Contact Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="emergency_phone">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="emergency_phone"
                    name="emergency_phone"
                    value={form.emergency_phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Relationship */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="emergency_relationship">
                    Relationship to Pet Owner
                  </label>
                  <input
                    type="text"
                    id="emergency_relationship"
                    name="emergency_relationship"
                    value={form.emergency_relationship}
                    onChange={handleChange}
                    placeholder="e.g., Family member, Friend, Neighbor"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Agreement */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6 border">
                <h4 className="font-semibold text-gray-800 mb-4">Terms and Agreement</h4>
                <div className="space-y-3">
                  <label className="flex items-start" htmlFor="terms_agree">
                    <input
                      type="checkbox"
                      id="terms_agree"
                      name="terms_agree"
                      checked={form.terms_agree}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a
                        href="terms_conditions.php"
                        className="text-pet-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="privacy_policy.php"
                        className="text-pet-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      *
                    </span>
                  </label>

                  <label className="flex items-start" htmlFor="info_accurate">
                    <input
                      type="checkbox"
                      id="info_accurate"
                      name="info_accurate"
                      checked={form.info_accurate}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I certify that all information provided is accurate and complete *
                    </span>
                  </label>

                  <label className="flex items-start" htmlFor="pet_ownership">
                    <input
                      type="checkbox"
                      id="pet_ownership"
                      name="pet_ownership"
                      checked={form.pet_ownership}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">I confirm that I am the legal owner of this pet *</span>
                  </label>

                  <label className="flex items-start" htmlFor="email_updates">
                    <input
                      type="checkbox"
                      id="email_updates"
                      name="email_updates"
                      checked={form.email_updates}
                      onChange={handleChange}
                      className="mt-1 mr-3 h-4 w-4 text-pet-primary focus:ring-pet-primary border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I would like to receive email updates about my pet's registration and important service announcements
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
                Complete Pet Registration
              </button>
              <p className="text-sm text-gray-500 mt-4">Lifetime protection for your beloved pet</p>
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
              <h4 className="font-semibold text-green-800">Your Information is Secure</h4>
              <p className="text-green-700 text-sm">
                All data is encrypted and stored securely. We never share your personal information with unauthorized parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetRegistrationForm;