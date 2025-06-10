'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/lib/translations';

interface NavigationProps {
  lang: Language;
}

const Navigation = ({ lang }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Split navigation items for left and right sections
  const leftNavItems = [
    { name: 'About', href: `/${lang}/about` },
    { name: 'Offer', href: `/${lang}/offer` },
  ];

  const rightNavItems = [
    { name: 'Teaching', href: `/${lang}/teaching` },
    { name: 'Media', href: `/${lang}/media` },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'de' as Language, name: 'Deutsch' },
  ];

  const handleLanguageChange = (langCode: Language) => {
    const currentRoute = pathname.replace(/^\/[a-z]{2}/, '') || '';
    router.push(`/${langCode}${currentRoute}`);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageOpen(false); // Close language dropdown when opening menu
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        if (isLanguageOpen) {
          setIsLanguageOpen(false);
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, isLanguageOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left Section - Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              {leftNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-charcoal hover:text-bronze transition-all duration-300 px-4 py-2 text-sm font-medium tracking-wide group"
                >
                  {item.name}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Center Section - Logo */}
            <div className="flex-shrink-0">
              <Link 
                href={`/${lang}`}
                className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-charcoal hover:text-bronze transition-colors duration-300 px-4"
              >
                Ivan <span className="text-bronze">Saxophon</span>
              </Link>
            </div>

            {/* Right Section - About & Language */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-charcoal hover:text-bronze transition-all duration-300 px-4 py-2 text-sm font-medium tracking-wide group"
                >
                  {item.name}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center space-x-2 text-charcoal hover:text-bronze transition-all duration-300 px-4 py-2 text-sm font-medium border border-gray-200 rounded-full hover:border-bronze hover:shadow-sm bg-white/80"
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <span className="text-xs font-semibold tracking-wider">{lang.toUpperCase()}</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-3 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 overflow-hidden">
                    {languages.map((langOption) => (
                      <button
                        key={langOption.code}
                        onClick={() => handleLanguageChange(langOption.code)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between ${
                          lang === langOption.code ? 'text-bronze font-medium bg-bronze/5' : 'text-charcoal'
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

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center space-x-1 text-charcoal hover:text-bronze transition-colors duration-300 px-3 py-2 text-xs font-semibold tracking-wider border border-gray-200 rounded-full bg-white/80 touch-manipulation"
                  aria-label="Change language"
                  aria-expanded={isLanguageOpen}
                >
                  <span>{lang.toUpperCase()}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-[60]">
                    {languages.map((langOption) => (
                      <button
                        key={langOption.code}
                        onClick={() => handleLanguageChange(langOption.code)}
                        className={`w-full text-left px-3 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 touch-manipulation ${
                          lang === langOption.code ? 'text-bronze font-medium' : 'text-charcoal'
                        }`}
                      >
                        {langOption.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="text-charcoal hover:text-bronze focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50 touch-manipulation"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                type="button"
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          <div 
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white via-beige/10 to-bronze-light/5 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with Logo */}
            <div className="flex items-center justify-between px-6 py-8 border-b border-bronze/20">
              <Link 
                href={`/${lang}`}
                className="text-2xl font-serif font-bold text-charcoal hover:text-bronze transition-colors duration-300"
                onClick={closeMenu}
              >
                Ivan <span className="text-bronze">Saxophon</span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 text-charcoal hover:text-bronze transition-colors duration-200 rounded-lg hover:bg-white/50 touch-manipulation"
                aria-label="Close menu"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col px-6 py-8 space-y-2">
              {allNavItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between px-6 py-4 text-lg font-medium text-charcoal hover:text-bronze hover:bg-white/40 rounded-xl transition-all duration-300 transform hover:scale-[1.02] touch-manipulation"
                  onClick={closeMenu}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="font-serif">{item.name}</span>
                  <svg 
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-bronze" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Language Selector in Mobile Menu */}
            <div className="px-6 py-4 border-t border-bronze/20 mt-auto">
              <p className="text-sm font-medium text-charcoal/70 mb-3 font-serif">Language</p>
              <div className="flex space-x-3">
                {languages.map((langOption) => (
                  <button
                    key={langOption.code}
                    onClick={() => handleLanguageChange(langOption.code)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 touch-manipulation ${
                      lang === langOption.code 
                        ? 'bg-bronze text-white shadow-lg' 
                        : 'bg-white/50 text-charcoal hover:bg-white/70 hover:text-bronze'
                    }`}
                    type="button"
                  >
                    {langOption.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 