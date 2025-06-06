'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95">
      {/* Hero Section */}
      <div className="pt-20 pb-8 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pt-36 xl:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Text Content - Now on the Left */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  {t.aboutMe.title} <span className="text-bronze">{t.aboutMe.titleAccent}</span>
                </h1>
                <div className="w-12 h-1 bg-gradient-to-r from-bronze to-bronze-light mb-6 mx-auto lg:mx-0"></div>
                
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p className="text-lg text-white font-light">
                    {t.aboutMe.intro}
                  </p>
                  
                  <p className="text-lg">
                    {t.aboutMe.education}
                  </p>

                  <p className="text-lg">
                    {t.aboutMe.current}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-row gap-3 mt-8">
                  <Link
                    href="/lessons"
                    className="group bg-bronze hover:bg-bronze-dark text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center min-h-[48px] flex items-center justify-center text-lg"
                  >
                    <span className="mr-2">{t.aboutMe.startLearning}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/#contact"
                    className="group border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center min-h-[48px] flex items-center justify-center text-lg"
                  >
                    <span className="mr-2">{t.aboutMe.bookPerformance}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Section - Now on the Right */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative max-w-[280px] xs:max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto">
                {/* Main Image */}
                <div className="aspect-[4/5] relative rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/ivan.png"
                    alt="Ivan Saxophon - Professional Saxophonist"
                    fill
                    className="object-cover"
                    sizes="(max-width: 475px) 85vw, (max-width: 640px) 75vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Stats - Mobile Optimized */}
                <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 xs:p-4 sm:p-5 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-bronze mb-1">15+</div>
                    <div className="text-charcoal/70 font-medium text-xs xs:text-sm">{t.aboutMe.yearsExperience}</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 sm:-top-6 sm:-right-6 bg-bronze text-white rounded-xl sm:rounded-2xl shadow-xl p-3 xs:p-4 sm:p-5">
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-1">100+</div>
                    <div className="text-white/90 font-medium text-xs xs:text-sm">{t.aboutMe.performances}</div>
                  </div>
                </div>

                {/* Decorative elements - Subtle on mobile */}
                <div className="absolute top-1/4 -left-1 xs:-left-2 sm:-left-3 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 border-2 border-bronze/20 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-1/4 -right-1 xs:-right-2 sm:-right-3 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-bronze/15 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Background Section */}
      <div className="py-10 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-charcoal/95 to-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white mb-3 xs:mb-4 sm:mb-6 leading-tight">
              {t.aboutMe.professionalBackground.title} <span className="text-bronze">{t.aboutMe.professionalBackground.titleAccent}</span>
            </h2>
            <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-bronze to-bronze-light mx-auto mb-3 xs:mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-2">
              Discover the journey and expertise that shapes every performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                title: t.aboutMe.professionalBackground.education.title,
                items: t.aboutMe.professionalBackground.education.items,
                icon: (
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                )
              },
              {
                title: t.aboutMe.professionalBackground.performance.title,
                items: t.aboutMe.professionalBackground.performance.items,
                icon: (
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                )
              },
              {
                title: t.aboutMe.professionalBackground.teaching.title,
                items: t.aboutMe.professionalBackground.teaching.items,
                icon: (
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: t.aboutMe.professionalBackground.focus.title,
                items: t.aboutMe.professionalBackground.focus.items,
                icon: (
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((section, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 h-full border border-white/10 hover:bg-white/10 hover:border-bronze/30 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl">
                  <div className="text-bronze mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center sm:justify-start">
                    {section.icon}
                  </div>
                  <h3 className="text-bronze font-bold mb-3 xs:mb-4 text-sm xs:text-base sm:text-lg text-center sm:text-left">{section.title}</h3>
                  <ul className="text-white/80 text-xs xs:text-sm space-y-1.5 xs:space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-bronze mr-2 mt-0.5 text-xs">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-10 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center">
            <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-10 lg:p-16 border border-white/10 shadow-2xl">
              <div className="text-bronze mb-4 xs:mb-6 sm:mb-8 opacity-60">
                <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light italic mb-4 xs:mb-6 sm:mb-8 leading-relaxed px-1 xs:px-2">
                &ldquo;{t.aboutMe.quote}&rdquo;
              </blockquote>
              <div className="text-bronze font-semibold text-sm xs:text-base sm:text-lg">{t.aboutMe.quoteName}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;