import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language, translations } from '@/lib/translations';
import OfferGrid from '@/components/OfferGrid';

type Props = {
  params: Promise<{ lang: string }>
}

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang];
  
  return {
    title: `Professional Saxophone Services - Ivan Saxophon`,
    description: 'Discover our complete range of saxophone services: Acoustic performances, Hit songs, Jazz sessions, and Sax/DJ combinations for unforgettable events.',
    keywords: ['saxophone services', 'acoustic music', 'jazz performances', 'saxophone DJ', 'live music', 'event entertainment'],
    openGraph: {
      title: `Professional Saxophone Services - Ivan Saxophon`,
      description: 'Complete range of saxophone services for every occasion',
      images: ['/ivan-3.JPG'],
    },
  };
}

export default async function OfferPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  
  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: 'url(/ivan-3.jpg)' }}
        >
        </section>

        {/* Offers Grid Section */}
        <OfferGrid lang={typedLang} />

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Book Your <span className="text-bronze">Perfect Performance</span>?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Each service can be customized to match your event's atmosphere and requirements. 
              Let's discuss which option would be perfect for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href={`/${typedLang}#contact`}
                className="inline-flex items-center bg-bronze hover:bg-bronze-dark text-white px-8 sm:px-12 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg justify-center"
              >
                Contact Us Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={`/${typedLang}/about`}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 sm:px-12 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg justify-center"
              >
                About Ivan
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={typedLang} />
    </>
  );
}

 