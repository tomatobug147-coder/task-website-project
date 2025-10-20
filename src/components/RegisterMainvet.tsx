import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const RegisterMainvet: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('registerMainVet.whatHappensNext')}</h2>
            <p className="text-gray-600">{t('registerMainVet.registrationUnderReview')}</p>
          </div>
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Steps */}
              {[
                {
                  title: t('registerMainVet.registrationComplete'),
                  text: t('registerMainVet.clinicInfoSubmitted'),
                  iconColor: "text-green-600",
                  bgColor: "bg-green-100",
                  path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                },
                {
                  title: t('registerMainVet.underVerification'),
                  text: t('registerMainVet.verificationTime'),
                  iconColor: "text-yellow-600",
                  bgColor: "bg-yellow-100",
                  path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                },
                {
                  title: t('registerMainVet.accessGranted'),
                  text: t('registerMainVet.receiveCredentials'),
                  iconColor: "text-blue-600",
                  bgColor: "bg-blue-100",
                  path: "M21 8V7l-3 2-3-2v1l3 2 3-2zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM21 19H3V5h18v14z"
                }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-8 h-8 ${step.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d={step.path}></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('registerMainVet.registrationDetails')}</h2>
            <p className="text-gray-600">{t('registerMainVet.keepDetails')}</p>
          </div>
          <div className="px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t('registerMainVet.clinicInformation')}</h4>
                <div className="space-y-2">
                  <InfoRow label={t('registerMainVet.clinicName')} value="ABC Veterinary Clinic" />
                  <InfoRow label={t('registerMainVet.contactPerson')} value="Dr. John Smith" />
                  <InfoRow label={t('registerMainVet.location')} value="Los Angeles" />
                  <InfoRow label={t('registerMainVet.registrationDate')} value="October 19, 2025" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t('registerMainVet.accountInformation')}</h4>
                <div className="space-y-2">
                  <InfoRow label={t('registerMainVet.loginEmail')} value="clinic@example.com" />
                  <InfoRow label={t('registerMainVet.accountType')} value={t('registerMainVet.veterinaryProfessional')} />
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('registerMainVet.verificationStatus')}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {t('registerMainVet.pendingVerification')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Process Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </svg>
            <h4 className="font-semibold text-blue-800">{t('registerMainVet.verificationProcess')}</h4>
          </div>
          <div className="text-blue-700 space-y-2">
            <p><strong>{t('registerMainVet.documentReview')}</strong> {t('registerMainVet.documentReviewDesc')}</p>
            <p><strong>{t('registerMainVet.contactVerification')}</strong> {t('registerMainVet.contactVerificationDesc')}</p>
            <p><strong>{t('registerMainVet.licenseCheck')}</strong> {t('registerMainVet.licenseCheckDesc')}</p>
            <p><strong>{t('registerMainVet.emailConfirmation')}</strong> {t('registerMainVet.emailConfirmationDesc')}</p>
          </div>
        </div>

        {/* Access Features */}
        {/* ... you can follow the same pattern for this and below blocks ... */}

        {/* Action Buttons */}
        <div className="text-center space-x-4 mb-8">
          <a href="/" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block">
            {t('registerMainVet.returnHome')}
          </a>
          <a href="/search" className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-600 hover:text-white transition-all duration-200 inline-block">
            {t('registerMainVet.searchDatabase')}
          </a>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">{t('registerMainVet.questions')}</p>
          <div className="space-x-6">
            <ContactLink type="email" href="mailto:Info@chipthem.com" text={t('registerMainVet.supportEmail')} />
            <ContactLink type="phone" href="tel:+1-800-CHIP-VET" text={t('registerMainVet.supportPhone')} />
          </div>
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h5 className="font-semibold text-gray-800 mb-2">{t('registerMainVet.needHelpIntegration')}</h5>
            <p className="text-gray-600 text-sm">
              {t('registerMainVet.integrationDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

const ContactLink: React.FC<{ type: 'email' | 'phone'; href: string; text: string }> = ({ type, href, text }) => {
  const iconPath =
    type === 'email'
      ? "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      : "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z";

  return (
    <a href={href} className="text-green-600 hover:underline">
      <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d={iconPath}></path>
      </svg>
      {text}
    </a>
  );
};

export default RegisterMainvet;
