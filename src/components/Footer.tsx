'use client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.lessons, href: '/lessons' },
    { name: t.nav.performances, href: '/performances' },
    { name: t.nav.aboutMe, href: '/about-me' },
    { name: t.nav.contact, href: '/#contact' },
  ];

  return (
    <footer className="bg-charcoal text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">
              Ivan <span className="text-bronze">Saxophone</span>
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {t.footer.description}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/ivan.saxophon/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-bronze p-3 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-bronze p-3 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-bronze">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-bronze transition-colors duration-300 text-sm sm:text-base py-1 block min-h-[32px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-bronze">{t.footer.connect}</h4>
            <div className="space-y-3">
              <p className="text-white/80 text-sm sm:text-base">
                <span className="block font-medium">{t.footer.email}:</span>
                <span className="break-all">info@ivansaxophon.ch</span>
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                <span className="block font-medium">{t.footer.phone}:</span>
                +41 (76) 376 19 06
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2025 {t.footer.copyright}
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="#" 
                className="text-white/60 hover:text-bronze text-xs sm:text-sm transition-colors duration-300 text-center min-h-[32px] flex items-center justify-center"
              >
                {t.footer.privacyPolicy}
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-bronze text-xs sm:text-sm transition-colors duration-300 text-center min-h-[32px] flex items-center justify-center"
              >
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 