import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ lang: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  const baseUrl = 'https://ivansaxophon.ch';
  
  if (isGerman) {
    return {
      title: {
        default: "Ivan Saxophon - Professioneller Saxophonist Baselland | Basel Schweiz Musiker",
        template: "%s | Ivan Saxophon - Professioneller Saxophonist Schweiz"
      },
      description: "Nr. 1 Professioneller Saxophonist in Baselland & Schweiz! Premium Live-Saxophon-Auftritte für Hochzeiten, Firmenveranstaltungen & private Feiern. Experten-Unterricht für alle Stufen. Jetzt buchen - 076 376 19 06",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `/de`,
        languages: {
          'en': '/en',
          'de': '/de',
          'x-default': '/en'
        },
      },
      openGraph: {
        title: "Ivan Saxophon - Professioneller Saxophonist Baselland | Basel Schweiz",
        description: "Nr. 1 Professioneller Saxophonist in Baselland mit Premium Live-Auftritten für Hochzeiten, Firmenveranstaltungen & private Feiern.",
        url: `${baseUrl}/de`,
        siteName: 'Ivan Saxophon - Professioneller Saxophonist',
        locale: 'de_CH',
        type: 'website',
        images: [{ url: '/ivan.png', width: 1200, height: 630, alt: 'Ivan Saxophon - Professioneller Saxophonist in Baselland, Schweiz' }],
      },
      other: {
        'geo.region': 'CH-BL',
        'geo.placename': 'Baselland',
        'geo.position': '47.5596;7.5886',
        'ICBM': '47.5596, 7.5886',
        'content-language': 'de',
        'language': 'German',
        'rating': 'General',
        'distribution': 'global',
        'revisit-after': '7 days',
        'expires': 'never',
        'HandheldFriendly': 'True',
        'MobileOptimized': '320',
        'contact': 'info@ivansaxophon.ch',
        'reply-to': 'info@ivansaxophon.ch',
        'owner': 'Ivan Saxophon',
        'coverage': 'Worldwide',
        'target': 'all',
        'audience': 'all',
      },
    };
  }

  return {
    title: {
      default: "Ivan Saxophon - Professional Saxophonist Baselland | Basel Switzerland Musician",
      template: "%s | Ivan Saxophon - Professional Saxophonist Switzerland"
    },
    description: "#1 Professional Saxophonist in Baselland & Switzerland! Premium live saxophone performances for weddings, corporate events & private parties. Expert lessons for all levels. Book today - 076 376 19 06",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/en`,
      languages: {
        'en': '/en',
        'de': '/de',
        'x-default': '/en'
      },
    },
    openGraph: {
      title: "Ivan Saxophon - Professional Saxophonist Baselland | Basel Switzerland",
      description: "#1 Professional Saxophonist in Baselland offering premium live performances for weddings, corporate events & private parties.",
      url: `${baseUrl}/en`,
      siteName: 'Ivan Saxophon - Professional Saxophonist',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/ivan.png', width: 1200, height: 630, alt: 'Ivan Saxophon - Professional Saxophonist in Baselland, Switzerland' }],
    },
    other: {
      'geo.region': 'CH-BL',
      'geo.placename': 'Baselland',
      'geo.position': '47.5596;7.5886',
      'ICBM': '47.5596, 7.5886',
      'content-language': 'en',
      'language': 'English',
      'rating': 'General',
      'distribution': 'global',
      'revisit-after': '7 days',
      'expires': 'never',
      'HandheldFriendly': 'True',
      'MobileOptimized': '320',
      'contact': 'info@ivansaxophon.ch',
      'reply-to': 'info@ivansaxophon.ch',
      'owner': 'Ivan Saxophon',
      'coverage': 'Worldwide',
      'target': 'all',
      'audience': 'all',
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Validate language parameter - redirect invalid languages to English
  if (lang !== 'en' && lang !== 'de') {
    redirect('/en');
  }

  return children;
} 