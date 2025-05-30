'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Performances = () => {
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
      title: t.performances.contemporary.title,
      description: t.performances.contemporary.description,
      features: t.performances.contemporary.features,
      videoId: "DGL6eN2x3TU", // Example contemporary saxophone video
      color: "from-emerald-50 to-green-100"
    }
  ];

  return (
    <section id="performances" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t.performances.title} <span className="text-bronze">{t.performances.titleAccent}</span>
          </h2>
          <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t.performances.subtitle}
          </p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden flex flex-col"
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
              <div className={`p-8 bg-gradient-to-br ${performance.color} relative overflow-hidden flex-1 flex flex-col`}>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {performance.title}
                </h3>
                <p className="text-charcoal/80 mb-6 leading-relaxed flex-1">
                  {performance.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal/70 mb-3 uppercase tracking-wide">
                    Featured Services
                  </h4>
                  <div className="grid grid-cols-2 gap-4 relative">
                    {performance.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-charcoal/70 text-sm h-8">
                        <div className="w-1.5 h-1.5 bg-bronze rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium transition-colors duration-300 group"
                  >
                    {t.performances.learnMore}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  {/* Performance Type Badge */}
                  <div className="bg-bronze/10 text-bronze px-3 py-1 rounded-full text-xs font-medium">
                    {index === 0 ? 'Jazz' : index === 1 ? 'Classical' : index === 2 ? 'Events' : 'Contemporary'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Ready to Experience Live Saxophone Music?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Each performance is tailored to your event's unique atmosphere and requirements. 
              Let's create an unforgettable musical experience together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-bronze hover:bg-bronze-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t.performances.bookYourPerformance}
              </a>
              <a
                href="#gallery"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-charcoal px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances; 