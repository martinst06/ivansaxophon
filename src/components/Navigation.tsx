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
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
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
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-charcoal hover:text-bronze focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50 touch-manipulation"
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
        className={`fixed inset-0 z-[55] lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
            <h2 className="text-lg font-serif font-semibold text-charcoal">Navigation</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-charcoal hover:text-bronze transition-colors duration-200 rounded-lg hover:bg-gray-50 touch-manipulation"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 py-8 space-y-1">
            {allNavItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-4 py-4 text-base font-medium text-charcoal hover:text-bronze hover:bg-gray-50 rounded-xl transition-all duration-200 touch-manipulation"
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