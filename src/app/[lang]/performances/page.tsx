import type { Metadata } from 'next';
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
      title: 'Saxophon-Auftritte Baselland | Hochzeits- & Eventmusik - Ivan Saxophon',
      description: 'Premium Saxophon-Auftritte für Hochzeiten, Firmenveranstaltungen & private Feiern in Baselland. Jazz, Klassik & zeitgenössische Musik. Professioneller Musiker buchen!',
      openGraph: {
        title: 'Saxophon-Auftritte Baselland | Hochzeits- & Eventmusik - Ivan Saxophon',
        description: 'Premium Saxophon-Auftritte für Hochzeiten, Firmenveranstaltungen & private Feiern in Baselland.',
        url: '/de/performances',
      },
      alternates: {
        canonical: '/de/performances',
      },
    };
  }
  
  return {
    title: 'Saxophone Performances Baselland | Wedding & Event Music - Ivan Saxophon',
    description: 'Premium saxophone performances for weddings, corporate events & private parties in Baselland. Jazz, classical & contemporary music. Book professional musician now!',
    openGraph: {
      title: 'Saxophone Performances Baselland | Wedding & Event Music - Ivan Saxophon',
      description: 'Premium saxophone performances for weddings, corporate events & private parties in Baselland.',
      url: '/en/performances',
    },
    alternates: {
      canonical: '/en/performances',
    },
  };
}

export default async function PerformancesPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang];

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-br from-white via-beige/30 to-bronze-light/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                {t.performances.title} <span className="text-bronze">{t.performances.titleAccent}</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
                {t.performances.subtitle}
              </p>
            </div>

            {/* Performance Types Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Jazz Ensembles */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {t.performances.jazz.title}
                </h3>
                <p className="text-charcoal/70 mb-6">
                  {t.performances.jazz.description}
                </p>
                <ul className="space-y-2">
                  {t.performances.jazz.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/80">
                      <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-bronze hover:text-bronze-dark font-medium transition-colors">
                  {t.performances.learnMore} →
                </button>
              </div>

              {/* Classical Concerts */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {t.performances.classical.title}
                </h3>
                <p className="text-charcoal/70 mb-6">
                  {t.performances.classical.description}
                </p>
                <ul className="space-y-2">
                  {t.performances.classical.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/80">
                      <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-bronze hover:text-bronze-dark font-medium transition-colors">
                  {t.performances.learnMore} →
                </button>
              </div>

              {/* Wedding & Events */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {t.performances.wedding.title}
                </h3>
                <p className="text-charcoal/70 mb-6">
                  {t.performances.wedding.description}
                </p>
                <ul className="space-y-2">
                  {t.performances.wedding.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/80">
                      <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-bronze hover:text-bronze-dark font-medium transition-colors">
                  {t.performances.learnMore} →
                </button>
              </div>

              {/* Contemporary & Fusion */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-bronze rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {t.performances.contemporary.title}
                </h3>
                <p className="text-charcoal/70 mb-6">
                  {t.performances.contemporary.description}
                </p>
                <ul className="space-y-2">
                  {t.performances.contemporary.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-charcoal/80">
                      <div className="w-2 h-2 bg-bronze rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-bronze hover:text-bronze-dark font-medium transition-colors">
                  {t.performances.learnMore} →
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-bronze/5 to-bronze/10 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                {t.performances.ctaTitle}
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto mb-8">
                {t.performances.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-bronze text-white px-8 py-3 rounded-full font-medium hover:bg-bronze-dark transition-colors">
                  {t.performances.bookYourPerformance}
                </button>
                <button className="border-2 border-bronze text-bronze px-8 py-3 rounded-full font-medium hover:bg-bronze hover:text-white transition-colors">
                  {t.performances.viewGallery}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 