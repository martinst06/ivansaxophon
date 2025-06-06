import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Analytics from "@/components/Analytics";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Ivan Saxophon - Professional Saxophonist in Switzerland | Basel Musician",
    template: "%s | Ivan Saxophon - Professional Saxophonist Switzerland"
  },
  description: "🎷 Professional saxophonist in Basel, Switzerland. Premium live music for weddings, corporate events & private parties. Expert saxophone lessons for all levels. Book Switzerland's top saxophonist today!",
  keywords: [
    "professional saxophonist Switzerland",
    "Basel saxophonist musician",
    "wedding saxophone music Switzerland", 
    "corporate event saxophonist Basel",
    "private party musician Switzerland",
    "saxophone lessons Basel Switzerland",
    "jazz saxophonist Switzerland",
    "classical saxophone Basel",
    "contemporary saxophone music",
    "professional musician Basel",
    "Swiss saxophonist performances",
    "live music Basel Switzerland",
    "saxophone teacher Basel",
    "wedding musician Switzerland",
    "event saxophonist Basel",
    "premium saxophone performances",
    "Basel jazz musician",
    "Swiss music professional",
    "saxophone instruction Switzerland",
    "Basel music lessons"
  ],
  authors: [{ name: "Ivan Saxophon", url: "https://ivansaxophon.ch" }],
  creator: "Ivan Saxophon",
  publisher: "Ivan Saxophon - Professional Saxophonist",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ivansaxophon.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de',
      'fr': '/fr',
      'x-default': '/'
    },
  },
  openGraph: {
    title: "Ivan Saxophon - Professional Saxophonist in Switzerland | Basel Musician",
    description: "🎷 Professional saxophonist in Basel offering premium live performances for weddings, corporate events & private parties. Expert saxophone lessons for all levels throughout Switzerland.",
    url: 'https://ivansaxophon.ch',
    siteName: 'Ivan Saxophon - Professional Saxophonist',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Saxophon - Professional Saxophonist in Basel, Switzerland',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ivan Saxophon - Professional Saxophonist in Switzerland",
    description: "🎷 Professional saxophonist in Basel. Premium live performances & saxophone lessons across Switzerland.",
    images: ['/og-image.jpg'],
    creator: '@ivan_saxophon',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  category: 'Professional Services',
  classification: 'Music & Entertainment',
  other: {
    'geo.region': 'CH-BS',
    'geo.placename': 'Basel',
    'geo.position': '47.5596;7.5886',
    'ICBM': '47.5596, 7.5886',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
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
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
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
        <meta name="geo.region" content="CH-BS" />
        <meta name="geo.placename" content="Basel" />
        <meta name="geo.position" content="47.5596;7.5886" />
        <meta name="ICBM" content="47.5596, 7.5886" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/og-image.jpg" as="image" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Canonical and Alternative Languages */}
        <link rel="canonical" href="https://ivansaxophon.ch/" />
        <link rel="alternate" hrefLang="en" href="https://ivansaxophon.ch/en" />
        <link rel="alternate" hrefLang="de" href="https://ivansaxophon.ch/de" />
        <link rel="alternate" hrefLang="fr" href="https://ivansaxophon.ch/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://ivansaxophon.ch/" />
      </head>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Analytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
