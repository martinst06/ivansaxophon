'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
              {t.about.title} <span className="text-bronze">{t.about.titleAccent}</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-bronze mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg text-charcoal/80 mb-4 sm:mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            
            <p className="text-base sm:text-lg text-charcoal/80 mb-6 sm:mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center p-4 rounded-lg bg-beige/30">
                <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">50+</div>
                <div className="text-charcoal/70 font-medium text-sm sm:text-base">{t.about.performances}</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-beige/30">
                <div className="text-3xl sm:text-4xl font-bold text-bronze mb-2">15+</div>
                <div className="text-charcoal/70 font-medium text-sm sm:text-base">{t.about.experience}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl mx-auto max-w-md lg:max-w-none">
              <Image
                src="/ivan-sax.jpeg"
                alt="Ivan playing saxophone"
                width={600}
                height={800}
                className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-bronze/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-beige/60 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 