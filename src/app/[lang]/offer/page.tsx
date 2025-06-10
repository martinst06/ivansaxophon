import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Language, translations } from '@/lib/translations';
import OfferGrid from '@/components/OfferGrid';

type Props = {
  params: Promise<{ lang: string }>
}

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params; // Ensure params is awaited but we don't need the destructured value
  
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
  const t = translations[typedLang];
  
  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-start justify-center relative overflow-hidden hero-optimized above-fold">
          <Image
            src="/ivan-4.JPG"
            alt="Ivan Saxophon professional performance"
            fill
            className="object-cover object-top hero-image"
            priority
            sizes="100vw"
          />
          
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-20">
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                {t.offers.heroText}
              </p>
            </div>
          </div>
        </section>

        {/* Offers Grid Section */}
        <OfferGrid lang={typedLang} />

        {/* Contact Section */}
        <Contact lang={typedLang} />
      </main>
      <Footer lang={typedLang} />
    </>
  );
}

 