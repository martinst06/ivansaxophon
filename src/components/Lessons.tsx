'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Lessons = () => {
  const { t } = useLanguage();

  const lessonTypes = [
    {
      key: 'beginner',
      color: "from-blue-50 to-indigo-100"
    },
    {
      key: 'intermediate',
      color: "from-green-50 to-emerald-100"
    },
    {
      key: 'advanced',
      color: "from-amber-50 to-orange-100"
    }
  ];

  return (
    <section id="lessons" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t.lessons.title} <span className="text-bronze">{t.lessons.titleAccent}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
            {t.lessons.subtitle}
          </p>
        </div>

        {/* Lesson Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {lessonTypes.map((lesson, index) => {
            const lessonData = t.lessons.types[lesson.key as keyof typeof t.lessons.types];
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
              >
                <div className={`p-6 sm:p-8 bg-gradient-to-br ${lesson.color} relative overflow-hidden`}>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                    {lessonData.title}
                  </h3>
                  <p className="text-charcoal/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {lessonData.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-charcoal/70 mb-3 uppercase tracking-wide">
                      {t.lessons.whatYoullLearn}
                    </h4>
                    <div className="space-y-2">
                      {lessonData.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-charcoal/70 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 bg-bronze rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-charcoal/10">
                    <div>
                      <p className="text-xs text-charcoal/60 uppercase tracking-wide">{t.lessons.duration}</p>
                      <p className="text-sm font-semibold text-charcoal">{lessonData.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-charcoal/60 uppercase tracking-wide">{t.lessons.price}</p>
                      <p className="text-lg font-bold text-bronze">{lessonData.price}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center bg-bronze hover:bg-bronze-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                  >
                    {t.lessons.bookNow}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-beige to-bronze-light/20 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-4">
                {t.lessons.whyChoose.title}
              </h3>
              <ul className="space-y-3 text-charcoal/80">
                {t.lessons.whyChoose.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-bronze rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-charcoal mb-2">{t.lessons.cta.title}</h4>
                <p className="text-charcoal/70 mb-4 text-sm">{t.lessons.cta.subtitle}</p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center bg-bronze hover:bg-bronze-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {t.lessons.cta.button}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons; 