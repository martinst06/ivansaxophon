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
  const { lang } = await params;
  const isGerman = lang === 'de';
  const baseUrl = 'https://ivansaxophon.ch';
  
  if (isGerman) {
    return {
      title: 'Saxophon Services | Premium Angebote - Ivan Saxophon Baselland',
      description: 'Entdecken Sie unsere komplette Palette an Saxophon-Services: Akustische Auftritte, Hit-Songs, Jazz-Sessions und Sax/DJ-Kombinationen für unvergessliche Events.',
      keywords: ['Saxophon Services', 'Akustikmusik', 'Jazz Auftritte', 'Saxophon DJ', 'Live-Musik', 'Event Entertainment'],
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/de/offer`,
        languages: {
          'en': `${baseUrl}/en/offer`,
          'de': `${baseUrl}/de/offer`,
          'x-default': `${baseUrl}/en/offer`
        },
      },
      openGraph: {
        title: 'Saxophon Services | Premium Angebote - Ivan Saxophon Baselland',
        description: 'Komplette Palette an Saxophon-Services für jeden Anlass',
        url: `${baseUrl}/de/offer`,
        images: ['/main-3.jpg'],
      },
    };
  }
  
  return {
    title: 'Professional Saxophone Services - Ivan Saxophon',
    description: 'Discover our complete range of saxophone services: Acoustic performances, Hit songs, Jazz sessions, and Sax/DJ combinations for unforgettable events.',
    keywords: ['saxophone services', 'acoustic music', 'jazz performances', 'saxophone DJ', 'live music', 'event entertainment'],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/en/offer`,
             languages: {
         'en': `${baseUrl}/en/offer`,
         'de': `${baseUrl}/de/offer`,
         'x-default': `${baseUrl}/en/offer`
       },
    },
    openGraph: {
      title: 'Professional Saxophone Services - Ivan Saxophon',
      description: 'Complete range of saxophone services for every occasion',
      url: `${baseUrl}/en/offer`,
      images: ['/main-3.jpg'],
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
            src="/main-3.jpg"
            alt="Ivan Saxophon professional performance"
            fill
            className="object-cover object-center hero-image"
            priority
            sizes="100vw"
          />
          
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/38 z-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-20">
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-full mx-auto leading-relaxed px-4">
                {t.offers.heroText.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t.offers.heroText.split('\n').length - 1 && <br />}
                  </span>
                ))}
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

 