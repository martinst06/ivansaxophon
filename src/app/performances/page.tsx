import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PerformanceTypes from '@/components/PerformanceTypes';
import PerformanceGallery from '@/components/PerformanceGallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Professional Saxophone Performances in Switzerland',
  description: 'Live saxophone performances for weddings, corporate events, and special occasions throughout Switzerland. Jazz, classical, and contemporary music by professional saxophonist Ivan.',
  keywords: [
    'saxophone performances Switzerland',
    'wedding musician Basel',
    'corporate event music',
    'jazz saxophone performances',
    'classical saxophone concerts',
    'live music Switzerland',
    'wedding saxophonist',
    'professional musician Basel',
    'event entertainment Switzerland'
  ],
  openGraph: {
    title: 'Professional Saxophone Performances | Ivan Saxophon',
    description: 'Live saxophone performances for weddings, corporate events, and special occasions throughout Switzerland.',
    url: '/performances',
    type: 'website',
  },
  alternates: {
    canonical: '/performances',
  },
};

export default function PerformancesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PerformanceTypes />
        <PerformanceGallery />
      </main>
      <Footer />
    </>
  );
} 