import Link from 'next/link';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';

interface AboutProps {
  lang: Language;
}

const About = ({ lang }: AboutProps) => {
  const t = translations[lang] || translations.en;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
      {/* Left side - Full Image */}
      <div className="order-2 lg:order-1 relative overflow-hidden">
        <Image
          src="/ivan-1.JPG"
          alt="Ivan Saxophon professional portrait"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Right side - Text Content */}
      <div className="order-1 lg:order-2 flex items-center">
        <div className="w-full p-8 lg:p-12">
          {/* Main description text */}
          <p className="text-lg sm:text-xl text-charcoal/80 mb-8 sm:mb-10 leading-relaxed">
            {t.about.title} {t.about.subtitle}
          </p>
          
          {/* CTA Text */}
          <p className="text-xl sm:text-2xl font-medium text-charcoal mb-8 sm:mb-12">
            {t.about.cta}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link 
              href={`/${lang}/lessons`}
              className="inline-flex items-center bg-bronze hover:bg-bronze-dark text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg min-w-[200px] justify-center"
            >
              {t.about.trialLessonBtn}
            </Link>
            
            <Link 
              href={`/${lang}/performances`}
              className="inline-flex items-center border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg min-w-[200px] justify-center"
            >
              {t.about.performanceBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 