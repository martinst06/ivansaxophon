const Performances = () => {
  const performances = [
    {
      title: "Jazz Ensembles",
      description: "Smooth jazz performances for intimate venues, restaurants, and private events. Featuring classic standards and contemporary jazz pieces.",
      features: ["Solo performances", "Small ensembles", "Background music", "Interactive sets"],
    },
    {
      title: "Classical Concerts",
      description: "Formal concert performances featuring classical saxophone repertoire and chamber music collaborations.",
      features: ["Concert halls", "Chamber music", "Orchestral solos", "Recitals"],
    },
    {
      title: "Wedding & Events",
      description: "Elegant musical accompaniment for weddings, corporate events, and special celebrations.",
      features: ["Ceremony music", "Cocktail hour", "Reception entertainment", "Custom arrangements"],
    },
    {
      title: "Contemporary & Fusion",
      description: "Modern interpretations blending jazz, classical, and contemporary styles for unique musical experiences.",
      features: ["Original compositions", "Genre fusion", "Collaborative projects", "Studio recordings"],
    }
  ];

  return (
    <section id="performances" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Performance <span className="text-bronze">Types</span>
          </h2>
          <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From intimate jazz sessions to grand classical performances, 
            discover the perfect musical experience for your event.
          </p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {performance.title}
                </h3>
                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  {performance.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {performance.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-charcoal/70">
                      <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6">
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium transition-colors duration-300"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-bronze hover:bg-bronze-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Your Performance
          </a>
        </div>
      </div>
    </section>
  );
};

export default Performances; 