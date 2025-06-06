import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Professional Saxophonist Baselland Switzerland - Ivan Saxophon | Basel Wedding & Event Music',
  description: '#1 Professional Saxophonist in Baselland & Switzerland! Premium live saxophone performances for weddings, corporate events & private parties. Expert lessons for all levels. Book today - 076 376 19 06',
  keywords: [
    'best saxophonist Switzerland',
    'top Basel musician',
    'wedding saxophone Basel', 
    'premium event music Switzerland',
    'professional Basel saxophonist',
    'corporate event music Basel',
    'private party musician',
    'saxophone lessons Basel Switzerland',
    'jazz saxophonist Basel',
    'classical saxophone Switzerland',
    'contemporary music Basel',
    'live music performances Switzerland',
    'professional musician Basel',
    'saxophone teacher Switzerland',
    'wedding music Basel',
    'event entertainment Switzerland',
    'best saxophonist Baselland',
    'top Baselland musician',
    'wedding saxophone Baselland',
    'premium event music Baselland',
    'professional Baselland saxophonist',
    'corporate event music Baselland',
    'private party musician Baselland',
    'saxophone lessons Baselland',
    'jazz saxophonist Baselland',
    'classical saxophone Baselland',
    'contemporary music Baselland',
    'live music performances Baselland',
    'professional musician Baselland',
    'saxophone teacher Baselland',
    'wedding music Baselland',
    'event entertainment Baselland',
    'Baselland music instructor',
    'premium performances Baselland',
    'bester Saxophonist Schweiz',
    'Saxophonist Hochzeit Basel',
    'Hochzeitsmusiker Baselland',
    'Saxophon Unterricht Basel',
    'Professioneller Musiker Schweiz',
    'Musiklehrer Basel',
    'Jazz Musik Basel',
    'Firmenveranstaltung Musiker',
    'Private Feiern Musik',
    'Live Musik Hochzeit Schweiz',
    'bester Saxophonist Baselland',
    'Saxophonist Hochzeit Baselland',
    'Hochzeitsmusiker Baselland',
    'Saxophon Unterricht Baselland',
    'Professioneller Musiker Baselland',
    'Musiklehrer Baselland',
    'Jazz Musik Baselland',
    'Firmenveranstaltung Musiker Baselland',
    'Private Feiern Musik Baselland',
    'Live Musik Hochzeit Baselland',
    'Event Musiker Baselland',
    'Konzert Saxophon Baselland',
    'Musikunterricht Baselland',
    'Privatunterricht Saxophon Baselland',
    'Hochzeitsmusik Baselland',
    'Veranstaltungsmusik Baselland'
  ],
  openGraph: {
    title: 'Professional Saxophonist Baselland Switzerland - Ivan Saxophon | Basel Wedding & Event Music',
    description: '#1 Professional Saxophonist in Baselland & Switzerland! Premium live performances for weddings, corporate events & private parties. Expert lessons for all levels.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Saxophon - Professional Saxophonist performing in Baselland, Switzerland',
      },
    ],
  },
  twitter: {
    title: 'Professional Saxophonist Baselland Switzerland - Ivan Saxophon',
    description: '#1 Professional Saxophonist in Baselland & Switzerland! Premium performances & expert lessons.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
