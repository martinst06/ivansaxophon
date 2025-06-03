'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-beige to-bronze-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t.hero.title}
            <span className="block text-bronze mt-1 sm:mt-2">{t.hero.subtitle}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-charcoal/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {t.hero.description}{' '}
            <span className="text-bronze font-medium">{t.hero.jazz}</span>, 
            <span className="text-bronze font-medium"> {t.hero.classical}</span>, and 
            <span className="text-bronze font-medium"> {t.hero.contemporary}</span> {t.hero.performances}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <a
              href="#performances"
              className="bg-bronze hover:bg-bronze-dark text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-h-[48px] flex items-center justify-center"
            >
              {t.hero.viewPerformances}
            </a>
            <a
              href="#contact"
              className="border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
            >
              {t.hero.bookPerformance}
            </a>
          </div>

          {/* Decorative element */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 