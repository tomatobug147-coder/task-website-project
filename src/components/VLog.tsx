import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VLog: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t, isRTL } = useLanguage();

  const toggleClinicPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={`py-16 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-pet-secondary to-green-600 px-8 py-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">{t('vLog.title')}</h2>
             <p className="text-green-100 text-sm mt-2">{t('vLog.subtitle')}</p>
          </div>

          {/* Login Form */}
          <form method="POST" action="process-clinic-login.php" className="px-8 py-8 space-y-6" id="clinicLoginForm">
            {/* Clinic ID */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('vLog.clinicId')}</label>
               <div className="relative">
                 <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                     />
                   </svg>
                 </div>
                 <input
                   type="text"
                   name="clinic_id"
                   required
                   className={`w-full py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-secondary focus:border-transparent transition-all duration-200 ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                   placeholder={t('vLog.clinicIdPlaceholder')}
                 />
               </div>
               <p className="text-xs text-gray-500 mt-1">{t('vLog.clinicIdNote')}</p>
             </div>

            {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('vLog.username')}</label>
               <div className="relative">
                 <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                     />
                   </svg>
                 </div>
                 <input
                   type="text"
                   name="username"
                   required
                   className={`w-full py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-secondary focus:border-transparent transition-all duration-200 ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                   placeholder={t('vLog.usernamePlaceholder')}
                 />
               </div>
             </div>

            {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('vLog.password')}</label>
               <div className="relative">
                 <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                     />
                   </svg>
                 </div>
                 <input
                   type={showPassword ? 'text' : 'password'}
                   name="password"
                   required
                   id="clinicPassword"
                   className={`w-full py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-secondary focus:border-transparent transition-all duration-200 ${isRTL ? 'pr-10 pl-12' : 'pl-10 pr-12'}`}
                   placeholder={t('vLog.passwordPlaceholder')}
                 />
                 <button
                   type="button"
                   onClick={toggleClinicPassword}
                   className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center`}
                 >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showPassword ? (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.052 10.052 0 012.181-3.261M9.88 9.88a3 3 0 104.24 4.24"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 00-3-3m9.543 3c-1.274 4.057-5.065 7-9.543 7-1.157 0-2.27-.197-3.291-.558M3 3l18 18"
                        />
                      </>
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me & Support */}
             <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
               <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                 <input
                   type="checkbox"
                   name="remember_me"
                   id="clinic_remember_me"
                   className="w-4 h-4 text-pet-secondary border-gray-300 rounded focus:ring-pet-secondary"
                 />
                 <label htmlFor="clinic_remember_me" className={`${isRTL ? 'mr-2' : 'ml-2'} text-sm text-gray-700`}>
                    {t('vLog.rememberMe')}
                  </label>
                </div>
                <a href="contact.php?subject=clinic" className="text-sm text-pet-secondary hover:text-green-600 transition-colors">
                  {t('vLog.needSupport')}
                </a>
             </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pet-secondary to-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className={`flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                   />
                 </svg>
                 {t('vLog.accessDashboard')}
              </span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                 <span className="px-4 bg-white text-gray-500">{t('vLog.newPartner')}</span>
               </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <a
                href="contact.php?subject=clinic"
                className={`inline-flex items-center text-pet-secondary hover:text-green-600 transition-colors font-semibold ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                   />
                 </svg>
                 {t('vLog.partnerWithUs')}
              </a>
            </div>
          </form>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
             <h3 className="text-sm font-bold text-green-800 mb-2">{t('vLog.securityTitle')}</h3>
             <p className="text-xs text-green-700">
               {t('vLog.securityDesc')}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VLog;