'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { translations, Language } from '@/lib/translations';

interface NavigationProps {
  lang: Language;
}

const Navigation = ({ lang }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = translations[lang] || translations.en; // Fallback to English if translation doesn't exist

  const navItems = [
    { name: t.nav.lessons, href: `/${lang}/lessons` },
    { name: t.nav.performances, href: `/${lang}/performances` },
    { name: t.nav.aboutMe, href: `/${lang}/about-me` },
  ];

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'de' as Language, name: 'Deutsch' },
  ];

  const handleLanguageChange = (langCode: Language) => {
    // Get the current route without the language prefix
    const currentRoute = pathname.replace(/^\/[a-z]{2}/, '') || '';
    // Navigate to the same route in the new language
    router.push(`/${langCode}${currentRoute}`);
    setIsLanguageOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-16">
            {/* Logo - Clickable */}
            <div className="flex-shrink-0">
              <Link 
                href={`/${lang}`}
                className="text-xl sm:text-2xl font-serif font-bold text-charcoal hover:text-bronze transition-colors duration-300 min-h-[44px] flex items-center"
              >
                Ivan <span className="text-bronze">Saxophon</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-baseline space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-charcoal hover:text-bronze transition-colors duration-300 px-3 py-2 text-sm font-medium min-h-[44px] flex items-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-charcoal hover:text-bronze transition-colors duration-300 px-3 py-2 text-sm font-medium border border-charcoal/20 rounded-lg hover:border-bronze min-h-[44px]"
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <span>{lang.toUpperCase()}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-beige py-2 z-50">
                    {languages.map((langOption) => (
                      <button
                        key={langOption.code}
                        onClick={() => handleLanguageChange(langOption.code)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-beige/50 transition-colors duration-200 flex items-center justify-between min-h-[44px] ${
                          lang === langOption.code ? 'text-bronze font-medium' : 'text-charcoal'
                        }`}
                      >
                        <span>{langOption.name}</span>
                        {lang === langOption.code && (
                          <svg className="w-4 h-4 text-bronze" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button and language switcher */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 text-charcoal hover:text-bronze transition-colors duration-300 text-sm font-medium min-h-[44px] px-2"
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <span>{lang.toUpperCase()}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-beige py-2 z-50">
                    {languages.map((langOption) => (
                      <button
                        key={langOption.code}
                        onClick={() => handleLanguageChange(langOption.code)}
                        className={`w-full text-left px-3 py-3 text-sm hover:bg-beige/50 transition-colors duration-200 min-h-[44px] ${
                          lang === langOption.code ? 'text-bronze font-medium' : 'text-charcoal'
                        }`}
                      >
                        {langOption.code}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-charcoal hover:text-bronze focus:outline-none focus:text-bronze transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center relative z-[60]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span 
                    className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span 
                    className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span 
                    className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/30 transition-opacity duration-300 ease-in-out"
          onClick={closeMenu}
          aria-hidden="true"
        />
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-beige">
            <h2 className="text-lg font-serif font-semibold text-charcoal">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 -mr-2 text-charcoal hover:text-bronze transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-beige/50"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-4 py-4 text-base font-medium text-charcoal hover:text-bronze hover:bg-beige/30 rounded-xl transition-all duration-200 min-h-[56px]"
                onClick={closeMenu}
                style={{
                  animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="flex-1">{item.name}</span>
                <svg 
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default Navigation; 