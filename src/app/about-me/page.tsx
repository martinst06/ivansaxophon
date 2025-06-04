import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Ivan - Professional Saxophonist from Skopje to Switzerland',
  description: 'Meet Ivan, professional saxophonist with 15+ years experience. Bachelor degree from University Hl. Kyrill and Method in Skopje, now based in Basel, Switzerland. 500+ performances across Europe.',
  keywords: [
    'Ivan saxophonist',
    'professional musician Switzerland',
    'saxophonist Basel',
    'Skopje musician',
    'University Hl. Kyrill and Method',
    'Saxocoustics Unplugged',
    'Macedonian Opera',
    'jazz musician Switzerland',
    'saxophone instructor Basel'
  ],
  openGraph: {
    title: 'About Ivan - Professional Saxophonist | Ivan Saxophon',
    description: 'Meet Ivan, professional saxophonist with 15+ years experience, now based in Basel, Switzerland.',
    url: '/about-me',
    type: 'profile',
  },
  alternates: {
    canonical: '/about-me',
  },
};

export default function AboutMePage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </>
  );
} 