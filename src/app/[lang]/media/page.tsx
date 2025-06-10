import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/translations';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Medien | Ivan Saxophon - Videos, Musik und Auftritte',
      description: 'Entdecken Sie Ivans musikalische Welt durch Videos, Aufnahmen und Live-Auftritte. Hören Sie seine Saxophon-Interpretationen und erleben Sie seine Performances.',
      openGraph: {
        title: 'Medien | Ivan Saxophon - Videos, Musik und Auftritte',
        description: 'Entdecken Sie Ivans musikalische Welt durch Videos, Aufnahmen und Live-Auftritte. Hören Sie seine Saxophon-Interpretationen und erleben Sie seine Performances.',
        url: '/de/media',
      },
      alternates: {
        canonical: '/de/media',
      },
    };
  }
  
  return {
    title: 'Media | Ivan Saxophon - Videos, Music and Performances',
    description: 'Discover Ivan\'s musical world through videos, recordings, and live performances. Listen to his saxophone interpretations and experience his performances.',
    openGraph: {
      title: 'Media | Ivan Saxophon - Videos, Music and Performances',
      description: 'Discover Ivan\'s musical world through videos, recordings, and live performances. Listen to his saxophone interpretations and experience his performances.',
      url: '/en/media',
    },
    alternates: {
      canonical: '/en/media',
    },
  };
}

export default async function MediaPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;

  const content = {
    en: {
      title: "Media",
      subtitle: "Music & Performances",
      videoSection: "Video Performances",
      audioSection: "Audio Recordings",
      gallerySection: "Performance Gallery",
      videoDescription: "Watch Ivan's live performances and studio recordings showcasing his saxophone artistry across different musical styles.",
      audioDescription: "Listen to selected recordings featuring Ivan's saxophone performances, from classical pieces to contemporary arrangements.",
      galleryDescription: "A collection of moments captured during live performances, studio sessions, and musical collaborations.",
      comingSoon: "Content Coming Soon",
      comingSoonDesc: "We're currently preparing an exciting collection of videos, audio recordings, and performance photos. Check back soon to experience Ivan's musical journey."
    },
    de: {
      title: "Medien",
      subtitle: "Musik & Auftritte",
      videoSection: "Video-Auftritte",
      audioSection: "Audio-Aufnahmen",
      gallerySection: "Auftritts-Galerie",
      videoDescription: "Sehen Sie Ivans Live-Auftritte und Studio-Aufnahmen, die sein Saxophon-Können in verschiedenen Musikstilen zeigen.",
      audioDescription: "Hören Sie ausgewählte Aufnahmen mit Ivans Saxophon-Performances, von klassischen Stücken bis zu zeitgenössischen Arrangements.",
      galleryDescription: "Eine Sammlung von Momenten aus Live-Auftritten, Studio-Sessions und musikalischen Kollaborationen.",
      comingSoon: "Inhalte folgen bald",
      comingSoonDesc: "Wir bereiten gerade eine aufregende Sammlung von Videos, Audio-Aufnahmen und Auftrittsfotos vor. Schauen Sie bald wieder vorbei, um Ivans musikalische Reise zu erleben."
    }
  };

  const t = content[typedLang as keyof typeof content] || content.en;

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-beige/20 to-bronze-light/10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-4">
                {t.title}
              </h1>
              <p className="text-xl lg:text-2xl text-charcoal/80 font-light">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Coming Soon Section */}
          <div className="text-center mb-16">
            <div className="bg-white shadow-lg border border-gray-100 p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                  {t.comingSoon}
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  {t.comingSoonDesc}
                </p>
                <div className="mt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze/10 text-bronze mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Video Section Preview */}
            <div className="bg-white shadow-lg border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze/10 text-bronze mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                {t.videoSection}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t.videoDescription}
              </p>
            </div>

            {/* Audio Section Preview */}
            <div className="bg-white shadow-lg border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze/10 text-bronze mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M8.5 21l3.5-3.5-3.5-3.5M4 12h1m6 0h1" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                {t.audioSection}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t.audioDescription}
              </p>
            </div>

            {/* Gallery Section Preview */}
            <div className="bg-white shadow-lg border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze/10 text-bronze mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                {t.gallerySection}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t.galleryDescription}
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 