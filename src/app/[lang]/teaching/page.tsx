import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/lib/translations';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Saxophon-Unterricht Baselland | Professioneller Musiklehrer - Ivan Saxophon',
      description: 'Professioneller Saxophon-Unterricht in Baselland für alle Niveaus. Personalisierte Lektionen von erfahrenem Musiklehrer. Jazz, Klassik & zeitgenössische Musik. Jetzt buchen!',
      openGraph: {
        title: 'Saxophon-Unterricht Baselland | Professioneller Musiklehrer - Ivan Saxophon',
        description: 'Professioneller Saxophon-Unterricht in Baselland für alle Niveaus. Personalisierte Lektionen von erfahrenem Musiklehrer.',
        url: '/de/teaching',
      },
      alternates: {
        canonical: '/de/teaching',
      },
    };
  }
  
  return {
    title: 'Saxophone Lessons Baselland | Professional Music Teacher - Ivan Saxophon',
    description: 'Professional saxophone lessons in Baselland for all skill levels. Personalized instruction from experienced music teacher. Jazz, classical & contemporary styles. Book now!',
    openGraph: {
      title: 'Saxophone Lessons Baselland | Professional Music Teacher - Ivan Saxophon',
      description: 'Professional saxophone lessons in Baselland for all skill levels. Personalized instruction from experienced music teacher.',
      url: '/en/teaching',
    },
    alternates: {
      canonical: '/en/teaching',
    },
  };
}

export default async function TeachingPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang];

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
                {t.lessons.title} <span className="text-bronze">{t.lessons.titleAccent}</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-4 sm:mb-6"></div>
              <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
                {t.lessons.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Lesson Types */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Beginner Lessons */}
              <div className="bg-white border-2 border-charcoal/10 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="text-bronze mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                  {t.lessons.types.beginner.title}
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed text-sm sm:text-base">
                  {t.lessons.types.beginner.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.lessons.types.beginner.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/70 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.duration}:</span>
                    <span>{t.lessons.types.beginner.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.price}:</span>
                    <span className="font-semibold text-bronze">{t.lessons.types.beginner.price}</span>
                  </div>
                </div>
                <Link 
                  href={`/${typedLang}#contact`}
                  className="block w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white text-center py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
                >
                  {t.lessons.bookNow}
                </Link>
              </div>

              {/* Intermediate Lessons */}
              <div className="bg-white border-2 border-bronze/50 p-6 sm:p-8 shadow-md hover:shadow-lg hover:border-bronze transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="text-bronze mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className="bg-bronze text-white text-xs font-semibold px-3 py-1 inline-block mb-3 self-start">
                  {lang === 'de' ? 'BELIEBT' : 'POPULAR'}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                  {t.lessons.types.intermediate.title}
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed text-sm sm:text-base">
                  {t.lessons.types.intermediate.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.lessons.types.intermediate.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/70 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.duration}:</span>
                    <span>{t.lessons.types.intermediate.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.price}:</span>
                    <span className="font-semibold text-bronze">{t.lessons.types.intermediate.price}</span>
                  </div>
                </div>
                <Link 
                  href={`/${typedLang}#contact`}
                  className="block w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white text-center py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
                >
                  {t.lessons.bookNow}
                </Link>
              </div>

              {/* Advanced Lessons */}
              <div className="bg-white border-2 border-charcoal/10 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="text-bronze mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
                  {t.lessons.types.advanced.title}
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed text-sm sm:text-base">
                  {t.lessons.types.advanced.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.lessons.types.advanced.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/70 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.duration}:</span>
                    <span>{t.lessons.types.advanced.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm text-charcoal/70">
                    <span>{t.lessons.price}:</span>
                    <span className="font-semibold text-bronze">{t.lessons.types.advanced.price}</span>
                  </div>
                </div>
                <Link 
                  href={`/${typedLang}#contact`}
                  className="block w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white text-center py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
                >
                  {t.lessons.bookNow}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
                {t.lessons.whyChoose.title}
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {t.lessons.whyChoose.reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 shadow-sm">
                  <div className="bg-bronze p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t.lessons.cta.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
              {t.lessons.cta.subtitle}
            </p>
            <Link
              href={`/${typedLang}#contact`}
              className="inline-flex items-center border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-8 sm:px-12 py-4 font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-lg"
            >
              {t.lessons.cta.button}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 