import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language, translations } from '@/lib/translations';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Über Ivan Saxophon | Professioneller Saxophonist Baselland Schweiz',
      description: 'Lernen Sie Ivan kennen - professioneller Saxophonist mit 15+ Jahren Erfahrung in Baselland. Spezialist für Jazz, Klassik & zeitgenössische Musik. Hochzeiten & Events.',
      openGraph: {
        title: 'Über Ivan Saxophon | Professioneller Saxophonist Baselland Schweiz',
        description: 'Lernen Sie Ivan kennen - professioneller Saxophonist mit 15+ Jahren Erfahrung in Baselland.',
        url: '/de/about-me',
      },
      alternates: {
        canonical: '/de/about-me',
      },
    };
  }
  
  return {
    title: 'About Ivan Saxophon | Professional Saxophonist Baselland Switzerland',
    description: 'Meet Ivan - professional saxophonist with 15+ years experience in Baselland. Specialist in jazz, classical & contemporary music. Weddings & events.',
    openGraph: {
      title: 'About Ivan Saxophon | Professional Saxophonist Baselland Switzerland',
      description: 'Meet Ivan - professional saxophonist with 15+ years experience in Baselland.',
      url: '/en/about-me',
    },
    alternates: {
      canonical: '/en/about-me',
    },
  };
}

export default async function AboutMePage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang];

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-white via-beige/30 to-bronze-light/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                {t.aboutMe.title} <span className="text-bronze">{t.aboutMe.titleAccent}</span>
              </h1>
              <div className="w-24 h-1 bg-bronze mx-auto mb-8"></div>
              
              {/* Ivan's Image */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Image 
                    src="/ivan.png" 
                    alt="Ivan playing saxophone"
                    width={320}
                    height={320}
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-bronze/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed mb-8 font-light">
                {t.aboutMe.intro}
              </p>
              <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed mb-8 font-light">
                {t.aboutMe.education}
              </p>
              <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed font-light">
                {t.aboutMe.current}
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-bronze/20 hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-bronze mb-2">15+</div>
                <div className="text-sm text-charcoal font-medium">{t.aboutMe.yearsExperience}</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-bronze/20 hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-bronze mb-2">100+</div>
                <div className="text-sm text-charcoal font-medium">{t.aboutMe.performances}</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-bronze/20 hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-bronze mb-2">200+</div>
                <div className="text-sm text-charcoal font-medium">{t.overview.stats.students}</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-bronze/20 hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-bronze mb-2">3</div>
                <div className="text-sm text-charcoal font-medium">{t.overview.stats.genres}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                {t.aboutMe.professionalBackground.title} <span className="text-bronze">{t.aboutMe.professionalBackground.titleAccent}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Education */}
              <div className="bg-gradient-to-br from-beige/20 to-bronze-light/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {t.aboutMe.professionalBackground.education.title}
                </h3>
                <ul className="space-y-2">
                  {t.aboutMe.professionalBackground.education.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-bronze rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Experience */}
              <div className="bg-gradient-to-br from-beige/20 to-bronze-light/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {t.aboutMe.professionalBackground.performance.title}
                </h3>
                <ul className="space-y-2">
                  {t.aboutMe.professionalBackground.performance.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-bronze rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teaching Experience */}
              <div className="bg-gradient-to-br from-beige/20 to-bronze-light/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {t.aboutMe.professionalBackground.teaching.title}
                </h3>
                <ul className="space-y-2">
                  {t.aboutMe.professionalBackground.teaching.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-bronze rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-br from-beige/20 to-bronze-light/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  {t.aboutMe.professionalBackground.focus.title}
                </h3>
                <ul className="space-y-2">
                  {t.aboutMe.professionalBackground.focus.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-bronze rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-bronze/5 to-bronze-light/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl text-bronze mb-6">&quot;</div>
            <blockquote className="text-xl md:text-2xl font-serif text-charcoal/80 leading-relaxed mb-6">
              {t.aboutMe.quote}
            </blockquote>
            <cite className="text-bronze font-medium">
              {t.aboutMe.quoteName}
            </cite>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
              {lang === 'de' ? 'Lassen Sie uns zusammenarbeiten' : 'Let\'s Work Together'}
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              {lang === 'de' 
                ? 'Ob Sie Saxophonunterricht suchen oder Live-Musik für Ihre Veranstaltung benötigen - ich freue mich darauf, von Ihnen zu hören.'
                : 'Whether you\'re looking for saxophone lessons or need live music for your event, I\'d love to hear from you.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-bronze text-white px-8 py-3 rounded-full font-medium hover:bg-bronze-dark transition-colors">
                {t.aboutMe.startLearning}
              </button>
              <button className="border-2 border-bronze text-bronze px-8 py-3 rounded-full font-medium hover:bg-bronze hover:text-white transition-colors">
                {t.aboutMe.bookPerformance}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 