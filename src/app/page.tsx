import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Professional Saxophonist Basel Switzerland - Ivan Saxophon | Wedding & Event Music',
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
    'event entertainment Switzerland'
  ],
  openGraph: {
    title: 'Professional Saxophonist Basel Switzerland - Ivan Saxophon | Wedding & Event Music',
    description: '🎷 #1 Professional Saxophonist in Basel & Switzerland! Premium live performances for weddings, corporate events & private parties. Expert lessons for all levels.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Saxophon - Professional Saxophonist performing in Basel, Switzerland',
      },
    ],
  },
  twitter: {
    title: 'Professional Saxophonist Basel Switzerland - Ivan Saxophon',
    description: '🎷 #1 Professional Saxophonist in Basel & Switzerland! Premium performances & expert lessons.',
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
