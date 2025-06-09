import type { Metadata } from 'next';
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

        {/* Contact Section */}
        <Contact lang={typedLang} />
      </main>
      <Footer lang={typedLang} />
    </>
  );
}

 