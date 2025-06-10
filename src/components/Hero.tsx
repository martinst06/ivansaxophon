'use client';

import Image from 'next/image';
import { useState } from 'react';
import { translations, Language } from '@/lib/translations';

interface HeroProps {
  lang: Language;
}

const Hero = ({ lang }: HeroProps) => {
  const t = translations[lang] || translations.en;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-start justify-center relative overflow-hidden hero-optimized above-fold"
    >
      {/* Loading backdrop */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-beige/30 via-bronze/10 to-bronze-light/20 z-5"></div>
      )}
      
      {/* Background Image */}
      <Image
        src="/bg-hero.jpg"
        alt="Professional saxophonist performing"
        fill
        className="object-cover object-center hero-image"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFz4QQeqb/eFt/8AN/aLPgdnMVgUhQR1bSBgUpk2mOG4j5FBMRmSiDDTwU+kAzrUhqGtgxP/2Q=="
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Mobile-specific background overlay to ensure proper image display */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 z-[11] md:hidden"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 relative z-20">
        <div className="text-center">
          {/* Subtitle */}
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 font-medium shadow-text">
            {t.hero.description}{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 