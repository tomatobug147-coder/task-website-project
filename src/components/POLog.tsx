import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageTransitionWrapper from './LanguageTransitionWrapper';

const POLog: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t, isRTL } = useLanguage();

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <LanguageTransitionWrapper>
      <section className={`py-16 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-pet-primary to-blue-600 px-8 py-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">{t('petOwnerLogin.title')}</h2>
            <p className="text-blue-100 text-sm mt-2">{t('petOwnerLogin.subtitle')}</p>
          </div>

          {/* Login Form */}
          <form method="POST" action="process-owner-login.php" className="px-8 py-8 space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('petOwnerLogin.email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  placeholder={t('petOwnerLogin.emailPlaceholder')}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('petOwnerLogin.password')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  placeholder={t('petOwnerLogin.passwordPlaceholder')}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.964 9.964 0 012.592-4.568m1.664-1.383A9.935 9.935 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.964 9.964 0 01-4.209 5.318M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="w-4 h-4 text-pet-primary border-gray-300 rounded focus:ring-pet-primary"
                />
                <label htmlFor="remember_me" className="ml-2 text-sm text-gray-700">
                  {t('petOwnerLogin.rememberMe')}
                </label>
              </div>
              <a href="forgot-password.php" className="text-sm text-pet-primary hover:text-blue-600 transition-colors">
                {t('petOwnerLogin.forgotPassword')}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pet-primary to-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
{t('petOwnerLogin.loginButton')}
              </span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">{t('petOwnerLogin.newToChipthem')}</span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <a
                href="/registerpet"
                className="inline-flex items-center text-pet-primary hover:text-blue-600 transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
{t('petOwnerLogin.createAccount')}
              </a>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-blue-800 mb-2">{t('petOwnerLogin.secureLogin')}</h3>
            <p className="text-xs text-blue-700">
              {t('petOwnerLogin.securityDesc')}
            </p>
          </div>
        </div>
        </div>
      </section>
    </LanguageTransitionWrapper>
  );
};

export default POLog;