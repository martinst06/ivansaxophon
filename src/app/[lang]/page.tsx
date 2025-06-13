import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Language } from '@/lib/translations';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Professioneller Saxophonist Baselland Schweiz - Ivan Saxophon | Basel Hochzeits- & Eventmusik',
      description: 'Nr. 1 Professioneller Saxophonist in Baselland & Schweiz! Premium Live-Saxophon-Auftritte für Hochzeiten, Firmenveranstaltungen & private Feiern. Experten-Unterricht für alle Stufen. Jetzt buchen - 076 376 19 06',
      openGraph: {
        title: 'Professioneller Saxophonist Baselland Schweiz - Ivan Saxophon | Basel Hochzeits- & Eventmusik',
        description: 'Nr. 1 Professioneller Saxophonist in Baselland & Schweiz! Premium Live-Auftritte für Hochzeiten, Firmenveranstaltungen & private Feiern. Experten-Unterricht für alle Stufen.',
        url: '/de',
        type: 'website',
        images: [
          {
            url: '/bg-hero.jpg',
            width: 1200,
            height: 630,
            alt: 'Ivan Saxophon - Professioneller Saxophonist in Baselland, Schweiz',
          },
        ],
      },
      twitter: {
        title: 'Professioneller Saxophonist Baselland Schweiz - Ivan Saxophon',
        description: 'Nr. 1 Professioneller Saxophonist in Baselland & Schweiz! Premium Auftritte & Experten-Unterricht.',
      },
      alternates: {
        canonical: '/de',
      },
    };
  }
  
  return {
    title: 'Professional Saxophonist Baselland Switzerland - Ivan Saxophon | Basel Wedding & Event Music',
    description: '#1 Professional Saxophonist in Baselland & Switzerland! Premium live saxophone performances for weddings, corporate events & private parties. Expert lessons for all levels. Book today - 076 376 19 06',
    openGraph: {
      title: 'Professional Saxophonist Baselland Switzerland - Ivan Saxophon | Basel Wedding & Event Music',
      description: '#1 Professional Saxophonist in Baselland & Switzerland! Premium live performances for weddings, corporate events & private parties. Expert lessons for all levels.',
      url: '/en',
      type: 'website',
      images: [
        {
          url: '/bg-hero.jpg',
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
      canonical: '/en',
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;

  return (
    <>
      <StructuredData lang={typedLang} />
      <Navigation lang={typedLang} />
      <main>
        <Hero lang={typedLang} />
        <About lang={typedLang} />
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 