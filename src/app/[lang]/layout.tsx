import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Analytics from "@/components/Analytics";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

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
  const isGerman = lang === 'de';

  return (
    <html lang={lang} prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO Meta Tags */}
        <meta httpEquiv="content-language" content={lang} />
        <meta name="language" content={isGerman ? "German" : "English"} />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Business Information */}
        <meta name="contact" content="info@ivansaxophon.ch" />
        <meta name="reply-to" content="info@ivansaxophon.ch" />
        <meta name="owner" content="Ivan Saxophon" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="CH-BL" />
        <meta name="geo.placename" content="Baselland" />
        <meta name="geo.position" content="47.5596;7.5886" />
        <meta name="ICBM" content="47.5596, 7.5886" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/ivan.png" as="image" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Canonical and Alternative Languages */}
        <link rel="canonical" href={`https://ivansaxophon.ch/${lang}`} />
        <link rel="alternate" hrefLang="en" href="https://ivansaxophon.ch/en" />
        <link rel="alternate" hrefLang="de" href="https://ivansaxophon.ch/de" />
        <link rel="alternate" hrefLang="x-default" href="https://ivansaxophon.ch/en" />
      </head>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
} 