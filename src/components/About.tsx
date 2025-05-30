'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              {t.about.title} <span className="text-bronze">{t.about.titleAccent}</span>
            </h2>
            <div className="w-24 h-1 bg-bronze mb-8"></div>
            
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-bronze mb-2">50+</div>
                <div className="text-charcoal/70 font-medium">{t.about.performances}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-bronze mb-2">15+</div>
                <div className="text-charcoal/70 font-medium">{t.about.experience}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/ivan-sax.jpeg"
                alt="Ivan playing saxophone"
                width={600}
                height={800}
                className="object-cover w-full h-[600px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-bronze/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-beige/60 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 