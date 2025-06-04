import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Professional Saxophonist in Switzerland - Ivan Saxophon',
  description: 'Professional saxophonist based in Basel, Switzerland. Live performances for weddings and events, saxophone lessons for all levels. Jazz, classical, and contemporary music across Switzerland.',
  keywords: [
    'saxophonist Switzerland',
    'Basel musician',
    'wedding music Switzerland',
    'saxophone lessons Basel',
    'professional musician',
    'jazz saxophonist',
    'classical saxophone',
    'live music Switzerland',
    'event musician Basel'
  ],
  openGraph: {
    title: 'Professional Saxophonist in Switzerland - Ivan Saxophon',
    description: 'Professional saxophonist based in Basel, Switzerland. Live performances and saxophone lessons.',
    url: '/',
    type: 'website',
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
