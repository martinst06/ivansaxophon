'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-16 sm:py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t.aboutMe.title} <span className="text-bronze">{t.aboutMe.titleAccent}</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-bronze mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed">
              {t.aboutMe.intro}
            </p>
            
            <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed">
              {t.aboutMe.education}
            </p>

            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
              {t.aboutMe.current}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/lessons"
                className="bg-bronze hover:bg-bronze-dark text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
              >
                {t.aboutMe.startLearning}
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
              >
                {t.aboutMe.bookPerformance}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Ivan's Image */}
              <div className="aspect-[3/4] relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/ivan.png"
                  alt="Ivan Saxophon - Professional Saxophonist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  priority
                />
                
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-bronze/50 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-bronze/30 rounded-full backdrop-blur-sm"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 sm:p-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-bronze mb-1">15+</div>
                  <div className="text-charcoal/70 font-medium text-xs sm:text-sm">{t.aboutMe.yearsExperience}</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-bronze text-white rounded-xl shadow-xl p-4 sm:p-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">500+</div>
                  <div className="text-white/90 font-medium text-xs sm:text-sm">{t.aboutMe.performances}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t.aboutMe.professionalBackground.title} <span className="text-bronze">{t.aboutMe.professionalBackground.titleAccent}</span>
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h4 className="text-bronze font-semibold mb-2 text-sm sm:text-base">{t.aboutMe.professionalBackground.education.title}</h4>
              <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                {t.aboutMe.professionalBackground.education.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h4 className="text-bronze font-semibold mb-2 text-sm sm:text-base">{t.aboutMe.professionalBackground.performance.title}</h4>
              <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                {t.aboutMe.professionalBackground.performance.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h4 className="text-bronze font-semibold mb-2 text-sm sm:text-base">{t.aboutMe.professionalBackground.teaching.title}</h4>
              <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                {t.aboutMe.professionalBackground.teaching.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h4 className="text-bronze font-semibold mb-2 text-sm sm:text-base">{t.aboutMe.professionalBackground.focus.title}</h4>
              <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                {t.aboutMe.professionalBackground.focus.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-bronze mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote className="text-lg sm:text-xl md:text-2xl text-white/90 font-light italic mb-6 leading-relaxed">
              &quot;{t.aboutMe.quote}&quot;
            </blockquote>
            <div className="text-bronze font-medium">{t.aboutMe.quoteName}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 