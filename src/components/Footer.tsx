'use client';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';

interface FooterProps {
  lang: Language;
}

const Footer = ({ lang }: FooterProps) => {
  const t = translations[lang] || translations.en;

  return (
    <footer className="bg-charcoal text-white py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4">
              IVAN <span className="text-bronze">SAXOPHON</span>
            </h3>
            <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              {t.footer.description}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-5">
              <a
                href="https://www.instagram.com/ivan.saxophon/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-bronze p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
                aria-label="Follow on Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ivansaxophon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-bronze p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
                aria-label="Watch on YouTube"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@ivansaxophon.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-bronze p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
                aria-label="Follow on TikTok"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-bronze">
              {t.footer.partners}
            </h4>
            <div className="space-y-6 sm:space-y-8">
              {/* DeinDJ */}
              <div className="flex justify-center">
                <a
                  href="https://deindj.ch/saxophonist/ivan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity duration-300 touch-manipulation"
                  aria-label="Visit DeinDJ profile"
                >
                  <Image
                    src="https://deindj.ch/wp-content/uploads/2022/02/DeinDJ-Logo-Dark-2.svg"
                    alt="DeinDJ Partner"
                    width={84}
                    height={34}
                    className="h-6 sm:h-8 filter brightness-0 invert"
                  />
                </a>
              </div>
              
              {/* Matchspace Music */}
              <div className="flex justify-center">
                <a
                  href="https://matchspace-music.ch/ch-de/teachers/ivan-mojsoski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity duration-300 touch-manipulation"
                  aria-label="Visit Ivan's Matchspace Music profile"
                >
                  <div>
                    <div className="font-roboto font-bold text-white text-lg leading-tight">
                      matchspace
                    </div>
                    <div className="text-left font-roboto font-normal text-white text-lg leading-tight -mt-2">
                      music
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-right">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-bronze">
              {t.footer.connect}
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div>
                <p className="text-white/60 text-base sm:text-lg mb-1 font-medium">
                  {t.footer.email}:
                </p>
                <a 
                  href="mailto:info@ivansaxophon.ch"
                  className="text-white hover:text-bronze text-base sm:text-lg transition-colors duration-300 touch-manipulation inline-block"
                  aria-label="Send email to Ivan Saxophon"
                >
                  info@ivansaxophon.ch
                </a>
              </div>
              <div>
                <p className="text-white/60 text-base sm:text-lg mb-1 font-medium">
                  {t.footer.phone}:
                </p>
                <a 
                  href="tel:+41763761906"
                  className="text-white hover:text-bronze text-base sm:text-lg transition-colors duration-300 touch-manipulation inline-block"
                  aria-label="Call Ivan Saxophon"
                >
                  +41 (76) 376 19 06
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-white/60 text-sm sm:text-base text-center sm:text-left order-2 sm:order-1">
              © 2025 {t.footer.copyright}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 order-1 sm:order-2">
              <a 
                href={`/${lang}/privacy`}
                className="text-white/60 hover:text-bronze text-sm sm:text-base transition-colors duration-300 touch-manipulation min-h-[44px] flex items-center justify-center px-2"
                aria-label="Privacy Policy"
              >
                {t.footer.privacyPolicy}
              </a>
              <a 
                href={`/${lang}/terms`}
                className="text-white/60 hover:text-bronze text-sm sm:text-base transition-colors duration-300 touch-manipulation min-h-[44px] flex items-center justify-center px-2"
                aria-label="Terms of Service"
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