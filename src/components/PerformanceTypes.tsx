'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const PerformanceTypes = () => {
  const { t } = useLanguage();

  const performances = [
    {
      title: t.performances.jazz.title,
      description: t.performances.jazz.description,
      features: t.performances.jazz.features,
      videoId: "kxopViU98Xo", // Example jazz saxophone video
      color: "from-amber-50 to-orange-100"
    },
    {
      title: t.performances.wedding.title,
      description: t.performances.wedding.description,
      features: t.performances.wedding.features,
      videoId: "DGL6eN2x3TU", // Example wedding saxophone video
      color: "from-rose-50 to-pink-100"
    },
    {
      title: t.performances.contemporary.title,
      description: t.performances.contemporary.description,
      features: t.performances.contemporary.features,
      videoId: "DGL6eN2x3TU", // Example contemporary saxophone video
      color: "from-emerald-50 to-green-100"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t.performances.title} <span className="text-bronze">{t.performances.titleAccent}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
            {t.performances.subtitle}
          </p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {performances.map((performance, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden flex flex-col border border-gray-100"
            >
              {/* Video Section */}
              <div className="relative aspect-video bg-gradient-to-br from-beige to-bronze-light/30">
                <iframe
                  src={`https://www.youtube.com/embed/${performance.videoId}?rel=0&modestbranding=1`}
                  title={performance.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content Section */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${performance.color} relative overflow-hidden flex-1 flex flex-col`}>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                  {performance.title}
                </h3>
                <p className="text-charcoal/80 mb-4 sm:mb-6 leading-relaxed flex-1 text-sm sm:text-base">
                  {performance.description}
                </p>
                
                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-charcoal/70 mb-3 uppercase tracking-wide">
                    Featured Services
                  </h4>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4 relative">
                    {performance.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-charcoal/70 text-xs sm:text-sm min-h-[32px]">
                        <div className="w-1.5 h-1.5 bg-bronze rounded-full mr-2 flex-shrink-0"></div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mt-auto">
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium transition-colors duration-300 group min-h-[44px] text-sm sm:text-base"
                  >
                    {t.performances.learnMore}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  {/* Performance Type Badge */}
                  <div className="bg-bronze/10 text-bronze px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">
                    {index === 0 ? 'Jazz' : index === 1 ? 'Wedding' : 'Contemporary'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-br from-beige to-bronze-light/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
              {t.performances.ctaTitle}
            </h3>
            <p className="text-charcoal/80 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {t.performances.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-bronze hover:bg-bronze-dark text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center text-sm sm:text-base"
              >
                {t.performances.bookYourPerformance}
              </Link>
              <Link
                href="#gallery"
                className="border-2 border-bronze text-bronze hover:bg-bronze hover:text-charcoal px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
              >
                {t.performances.viewGallery}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTypes; 