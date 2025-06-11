'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { translations, Language } from '@/lib/translations';

interface AboutProps {
  lang: Language;
}

const About = ({ lang }: AboutProps) => {
  const t = translations[lang] || translations.en;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] hero-optimized above-fold pt-0 lg:pt-16">
      {/* Left side - Full Image */}
      <div className="order-2 lg:order-1 relative overflow-hidden h-[350px] sm:h-[400px] lg:h-auto">
        {/* Loading backdrop */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-beige/40 via-bronze/20 to-bronze-light/30 z-5 animate-pulse"></div>
        )}
        
        <Image
          src="/ivan-1.JPG"
          alt="Ivan Saxophon professional portrait"
          fill
          className="object-cover object-center hero-image"
          sizes="(max-width: 1024px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFz4QQeqb/eFt/8AN/aLPgdnMVgUhQR1bSBgUpk2mOG4j5FBMRmSiDDTwU+kAzrUhqGtgxP/2Q=="
          onLoad={() => setImageLoaded(true)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Right side - Text Content */}
      <div className="order-1 lg:order-2 flex items-center min-h-[400px] sm:min-h-[450px] lg:min-h-auto">
        <div className="w-full p-6 sm:p-8 lg:p-12">
          {/* Main description text */}
          <p className="text-base sm:text-lg lg:text-xl text-charcoal/80 mb-16 sm:mb-18 lg:mb-20 leading-relaxed text-justify">
            {t.about.title} {t.about.subtitle}
          </p>
          
          {/* CTA Text */}
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-charcoal mb-6 sm:mb-8 lg:mb-12 text-center">
            {t.about.cta}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              href="#contact"
              className="inline-flex items-center border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-base sm:text-lg min-w-[180px] sm:min-w-[200px] justify-center touch-manipulation"
            >
              {t.about.trialLessonBtn}
            </Link>
            <Link 
              href="#offers"
              className="inline-flex items-center border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-base sm:text-lg min-w-[180px] sm:min-w-[200px] justify-center touch-manipulation"
            >
              {t.about.performanceBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 