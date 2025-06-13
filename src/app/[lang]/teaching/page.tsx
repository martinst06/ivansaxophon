'use server';

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/lib/translations';
import LessonCard from '@/components/LessonCard';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Saxophon-Unterricht Baselland | Professioneller Musiklehrer - Ivan Saxophon',
      description: 'Professioneller Saxophon-Unterricht in Baselland für alle Niveaus. Personalisierte Lektionen von erfahrenem Musiklehrer. Jazz, Klassik & zeitgenössische Musik. Jetzt buchen!',
      openGraph: {
        title: 'Saxophon-Unterricht Baselland | Professioneller Musiklehrer - Ivan Saxophon',
        description: 'Professioneller Saxophon-Unterricht in Baselland für alle Niveaus. Personalisierte Lektionen von erfahrenem Musiklehrer.',
        url: '/de/teaching',
      },
      alternates: {
        canonical: '/de/teaching',
      },
    };
  }
  
  return {
    title: 'Saxophone Lessons Baselland | Professional Music Teacher - Ivan Saxophon',
    description: 'Professional saxophone lessons in Baselland for all skill levels. Personalized instruction from experienced music teacher. Jazz, classical & contemporary styles. Book now!',
    openGraph: {
      title: 'Saxophone Lessons Baselland | Professional Music Teacher - Ivan Saxophon',
      description: 'Professional saxophone lessons in Baselland for all skill levels. Personalized instruction from experienced music teacher.',
      url: '/en/teaching',
    },
    alternates: {
      canonical: '/en/teaching',
    },
  };
}

export default async function TeachingPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang];

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal mb-3 sm:mb-4 leading-tight">
                {t.lessons.title} <span className="text-bronze">{t.lessons.titleAccent}</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-3 sm:mb-4"></div>
              <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
                {t.lessons.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Lesson Types */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <LessonCard 
                type="kids"
                lang={typedLang}
                translations={t}
              />
              <LessonCard 
                type="adults"
                lang={typedLang}
                translations={t}
              />
            </div>
          </div>
        </section>
        <div className="bg-white py-12 sm:py-16"></div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 