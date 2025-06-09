'use client';

import { translations, Language } from '@/lib/translations';

interface HeroProps {
  lang: Language;
}

const Hero = ({ lang }: HeroProps) => {
  const t = translations[lang] || translations.en;

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-start justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/bg-hero.jpg)' }}
    >
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        <div className="text-center">
          {/* Subtitle */}
          <p className="text-xl xs:text-2xl sm:text-2xl md:text-3xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {t.hero.description}{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 