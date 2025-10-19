import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function MicrochipSearch() {
  const { t } = useLanguage();
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);
  const [chipNumber, setChipNumber] = useState('');

  const search = () => {
    setSearching(true);
    setFound(false);
    setNotFound(false);
    setTimeout(() => {
      if (chipNumber === '123456789012345' || chipNumber === '987654321098765') {
        setFound(true);
        const isFirst = chipNumber === '123456789012345';
        setSearchResult({
          chipNumber,
          petName: isFirst ? 'Max' : 'Luna',
          petType: isFirst ? 'Golden Retriever' : 'Siamese Cat',
          petAge: isFirst ? '4 years' : '2 years',
          petColor: isFirst ? 'Golden' : 'Cream & Brown',
          ownerName: isFirst ? 'Jennifer Thompson' : 'Carlos Rodriguez',
          phone: isFirst ? '(555) 123-4567' : '(555) 987-6543',
          email: isFirst ? 'jennifer.thompson@email.com' : 'carlos.rodriguez@email.com',
          address: isFirst ? '123 Oak Street, Springfield' : '456 Maple Ave, Riverside',
          registeredDate: isFirst ? '2023-03-15' : '2023-07-22'
        });
      } else if (chipNumber.length === 15) {
        setNotFound(true);
      } else {
        alert(t('searchSearch.invalidNumber'));
      }
      setSearching(false);
    }, 1500);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-2xl overflow-hidden">
          {/* Gradient Header (matches screenshot) */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-10 text-center rounded-t-2xl">
            <h2 className="text-3xl font-extrabold text-white">{t('searchSearch.title')}</h2>
            <p className="text-sm text-blue-100 mt-2">{t('searchSearch.subtitle')}</p>
          </div>

          {/* White card containing the form */}
          <div className="bg-white px-8 py-8 -mt-6 rounded-b-2xl">
            <form
              onSubmit={(e) => { e.preventDefault(); search(); }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('searchSearch.microchipNumber')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={chipNumber}
                    onChange={(e) => setChipNumber(e.target.value)}
                    id="chip_number"
                    name="chip_number"
                    required
                    maxLength={15}
                    pattern="[0-9]{15}"
                    placeholder="123456789012345"
                    className="w-full px-4 py-4 pl-16 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 font-mono text-lg text-center placeholder-gray-300"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-2">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V9H21M3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V11H3V19M5 19V13H19V19H5M8 15H10V17H8V15M6 15H7V17H6V15M12 15H16V17H12V15"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{t('searchSearch.instruction')}</p>
                <p className="text-xs text-gray-400 mt-1">{t('searchSearch.demoNumbers')}</p>
              </div>

              {/* Blue gradient search button */}
              <button
                type="submit"
                disabled={searching}
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 ${
                  searching ? 'opacity-75 cursor-not-allowed' : 'shadow-md'
                } bg-gradient-to-r from-blue-500 to-blue-600 text-white`}
              >
                {searching ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t('searchSearch.searchingDatabase')}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full inline-block" />
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>{t('searchSearch.searchDatabase')}</span>
                  </div>
                )}
              </button>
            </form>

            {/* Pet Found */}
            {found && (
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6" style={{ display: 'block' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">{t('searchSearch.petFound')}</h3>
                    <p className="text-green-700">{t('searchSearch.contactAvailable')}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">{t('searchSearch.petInfo')}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.name')}</span>
                          <span className="font-semibold">{searchResult?.petName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.typeBreed')}</span>
                          <span className="font-semibold">{searchResult?.petType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.age')}</span>
                          <span className="font-semibold">{searchResult?.petAge}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.color')}</span>
                          <span className="font-semibold">{searchResult?.petColor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.chipNumber')}</span>
                          <span className="font-mono text-sm">{searchResult?.chipNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('searchSearch.registered')}</span>
                          <span className="text-sm">{searchResult?.registeredDate}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">{t('searchSearch.ownerContact')}</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600 block text-sm">{t('searchSearch.name')}</span>
                          <span className="font-semibold text-lg">{searchResult?.ownerName}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block text-sm">{t('searchSearch.phone')}</span>
                          <a
                            href={`tel:${searchResult?.phone}`}
                            className="font-semibold text-pet-primary hover:text-blue-600 text-lg"
                          >
                            {searchResult?.phone}
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-600 block text-sm">{t('searchSearch.email')}</span>
                          <a
                            href={`mailto:${searchResult?.email}?subject=Found Pet: ${searchResult?.petName}`}
                            className="font-semibold text-pet-primary hover:text-blue-600 break-all"
                          >
                            {searchResult?.email}
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-600 block text-sm">{t('searchSearch.address')}</span>
                          <span className="font-semibold">{searchResult?.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`tel:${searchResult?.phone}`}
                        className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {t('searchSearch.callOwner')}
                      </a>
                      <a
                        href={`mailto:${searchResult?.email}?subject=Found Pet: ${searchResult?.petName}`}
                        className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {t('searchSearch.emailOwner')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pet Not Found */}
            {notFound && (
              <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-800">{t('searchSearch.notFound')}</h3>
                    <p className="text-red-700">{t('searchSearch.notInDatabase')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">{t('searchSearch.contactAssistance')}</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start">
                        <span className="font-bold text-pet-primary mr-2">1.</span>
                        <span>{t('searchSearch.assistance1')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-pet-primary mr-2">2.</span>
                        <span>{t('searchSearch.assistance2')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-pet-primary mr-2">3.</span>
                        <span>{t('searchSearch.assistance3')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-pet-primary mr-2">4.</span>
                        <span>{t('searchSearch.assistance4')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrochipSearch;