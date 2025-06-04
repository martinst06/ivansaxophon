import type { Metadata } from 'next';
import Lessons from '@/components/Lessons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Saxophone Lessons in Basel, Switzerland',
  description: 'Professional saxophone lessons for all skill levels in Basel, Switzerland. Learn jazz, classical, and contemporary saxophone techniques with experienced instructor Ivan. Beginner to advanced lessons available.',
  keywords: [
    'saxophone lessons Basel',
    'saxophone teacher Switzerland',
    'learn saxophone Basel',
    'jazz saxophone lessons',
    'classical saxophone instruction',
    'beginner saxophone lessons',
    'advanced saxophone coaching',
    'music lessons Basel',
    'saxophone instruction Switzerland'
  ],
  openGraph: {
    title: 'Saxophone Lessons in Basel, Switzerland | Ivan Saxophon',
    description: 'Professional saxophone lessons for all skill levels. Learn from experienced instructor Ivan in Basel, Switzerland.',
    url: '/lessons',
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