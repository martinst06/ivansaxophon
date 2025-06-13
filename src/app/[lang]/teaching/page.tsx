'use server';

import type { Metadata } from 'next';
import Link from 'next/link';
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
        <section className="py-8 sm:py-12 bg-white">
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

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t.lessons.cta.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
              {t.lessons.cta.subtitle}
            </p>
            <Link
              href={`/${typedLang}#contact`}
              className="inline-flex items-center border-2 border-bronze text-bronze hover:bg-bronze hover:text-white px-8 sm:px-12 py-4 font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-lg"
            >
              {t.lessons.cta.button}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 