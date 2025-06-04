'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Overview = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: "Professional Performances",
      description: "Elegant live saxophone music for weddings, corporate events, and special occasions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      link: "/#contact",
      linkText: "Book Event"
    },
    {
      title: "Saxophone Lessons",
      description: "Personalized instruction for all skill levels, from beginner to advanced musicians.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: "/lessons",
      linkText: "Learn More"
    },
    {
      title: "Multiple Genres",
      description: "Expertise in jazz, classical, and contemporary styles to match any event atmosphere.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: "/about-me",
      linkText: "About Ivan"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-beige/30 to-bronze-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Professional <span className="text-bronze">Saxophone Services</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
            Bringing exceptional saxophone music to your most important moments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8 text-center"
            >
              <div className="text-bronze mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal/80 mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium transition-colors duration-300 group text-sm sm:text-base"
              >
                {service.linkText}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">15+</div>
              <div className="text-charcoal/70 font-medium text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">500+</div>
              <div className="text-charcoal/70 font-medium text-sm sm:text-base">Performances</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">200+</div>
              <div className="text-charcoal/70 font-medium text-sm sm:text-base">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">3</div>
              <div className="text-charcoal/70 font-medium text-sm sm:text-base">Musical Genres</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-4">
            Ready to Create Unforgettable Musical Moments?
          </h3>
          <p className="text-charcoal/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Whether you're planning a special event or want to learn the saxophone, let's discuss how we can bring beautiful music into your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-bronze hover:bg-bronze-dark text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
            >
              Book Performance
            </Link>
            <Link
              href="/lessons"
              className="border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 