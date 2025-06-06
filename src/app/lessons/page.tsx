import type { Metadata } from 'next';
import Lessons from '@/components/Lessons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Saxophone Lessons in Baselland, Switzerland | Basel Music Instruction',
  description: 'Professional saxophone lessons for all skill levels in Baselland, Switzerland. Learn jazz, classical, and contemporary saxophone techniques with experienced instructor Ivan. Beginner to advanced lessons available.',
  keywords: [
    'saxophone lessons Baselland',
    'saxophone lessons Basel',
    'learn saxophone Baselland',
    'saxophone teacher Baselland',
    'saxophone instructor Basel',
    'music lessons Baselland',
    'jazz saxophone lessons',
    'classical saxophone lessons',
    'beginner saxophone lessons',
    'advanced saxophone lessons'
  ],
  openGraph: {
    title: 'Saxophone Lessons in Baselland, Switzerland | Ivan Saxophon',
    description: 'Professional saxophone lessons for all skill levels. Learn from experienced instructor Ivan in Baselland, Switzerland.',
    type: 'website',
  },
  alternates: {
    canonical: '/lessons',
  },
};

export default function LessonsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Lessons />
      </main>
      <Footer />
    </>
  );
} 