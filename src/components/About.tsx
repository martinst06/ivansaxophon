import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              About <span className="text-bronze">Ivan</span>
            </h2>
            
            <div className="w-16 h-1 bg-bronze"></div>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              With over 15 years of professional experience, Ivan brings passion and precision 
              to every performance. His journey with the saxophone began in childhood and has 
              evolved into a distinguished career spanning multiple genres and venues.
            </p>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              From intimate jazz clubs to grand concert halls, Ivan's versatile style and 
              technical mastery have captivated audiences worldwide. His repertoire includes 
              classical masterpieces, smooth jazz standards, and contemporary compositions.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-beige/50 rounded-lg">
                <div className="text-3xl font-bold text-bronze mb-2">500+</div>
                <div className="text-charcoal/70">Performances</div>
              </div>
              <div className="text-center p-6 bg-beige/50 rounded-lg">
                <div className="text-3xl font-bold text-bronze mb-2">15+</div>
                <div className="text-charcoal/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Professional Portrait */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/ivan-sax.jpeg"
                alt="Ivan - Professional Saxophonist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-bronze/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-bronze/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 