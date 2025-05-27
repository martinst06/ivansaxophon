const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-beige to-bronze-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
            Ivan
            <span className="block text-bronze mt-2">Saxophone</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional saxophonist bringing soulful melodies to life through 
            <span className="text-bronze font-medium"> jazz</span>, 
            <span className="text-bronze font-medium"> classical</span>, and 
            <span className="text-bronze font-medium"> contemporary</span> performances
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#performances"
              className="bg-bronze hover:bg-bronze-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Performances
            </a>
            <a
              href="#contact"
              className="border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Book a Performance
            </a>
          </div>

          {/* Decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 