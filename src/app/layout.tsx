import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Saxophon Basel & Baselland | Professioneller Saxophonist & Unterricht",
    template: "%s | Ivan Saxophon - Saxophonist Basel"
  },
  description: "Professioneller Saxophonist in Basel & Baselland. ✓ Saxophon-Unterricht ✓ Live-Musik für Hochzeiten & Events ✓ 10+ Jahre Erfahrung ✓ Flexible Termine. Jetzt Saxophon-Stunden buchen!",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/icon.svg',
  },
  keywords: [
    // Primary Keywords - German
    "Saxophon Basel",
    "Saxophonist Basel",
    "Saxophon Unterricht Basel",
    "Saxophon Lehrer Basel",
    "Saxophon Baselland",
    "Saxophonist Baselland",
    "Sax Basel",
    "Saxophon Stunden Basel",
    
    // Primary Keywords - Location Variants
    "Saxophon Unterricht Baselland",
    "Saxophon Lehrer Baselland",
    "Saxophonist Basel-Stadt",
    "Saxophon Lehrer Basel-Stadt",
    "Saxophon Unterricht Basel-Stadt",
    
    // Event Related - German
    "Hochzeit Saxophonist Basel",
    "Event Saxophonist Basel",
    "Live Saxophon Basel",
    "Saxophon Hochzeit Basel",
    "Firmenanlass Saxophon Basel",
    "Live-Musik Basel Saxophon",
    
    // Lesson Related - German
    "Saxophon lernen Basel",
    "Saxophon Anfänger Basel",
    "Saxophon Fortgeschrittene Basel",
    "Privatunterricht Saxophon Basel",
    "Saxophon Musikschule Basel",
    "Saxophon Musikunterricht Basel",
    
    // English Keywords
    "saxophone lessons Basel",
    "saxophone teacher Basel",
    "saxophone player Basel",
    "saxophone wedding Basel",
    "saxophone lessons Baselland",
    "saxophone instructor Basel",
    "sax lessons Basel",
    "live saxophone Basel",
    
    // Style & Genre Keywords
    "Jazz Saxophon Basel",
    "Pop Saxophon Basel",
    "Klassik Saxophon Basel",
    "Modern Saxophon Basel",
    
    // Long-tail Keywords
    "Saxophon Unterricht für Anfänger Basel",
    "Saxophon Privatunterricht Basel",
    "professioneller Saxophonist für Hochzeit Basel",
    "Saxophon Lehrer mit Erfahrung Basel",
    "Saxophon Stunden für Kinder Basel",
    "Saxophon Unterricht für Erwachsene Basel",
    
    // Existing keywords...
  ],
  authors: [{ 
    name: "Ivan Saxophon",
    url: "https://ivansaxophon.ch"
  }],
  creator: "Ivan Saxophon - Professioneller Saxophonist Basel",
  publisher: "Ivan Saxophon - Saxophon Unterricht & Live-Musik Basel",
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
      'x-default': '/'
    },
  },
  openGraph: {
    title: "Saxophon Basel & Baselland | Professioneller Saxophonist & Unterricht",
    description: "Professioneller Saxophonist & Saxophon-Lehrer in Basel. ✓ Individueller Unterricht ✓ Live-Musik für Events ✓ Langjährige Erfahrung. Kontaktieren Sie mich für Ihr Event oder Saxophon-Unterricht!",
    url: 'https://ivansaxophon.ch',
    siteName: 'Ivan Saxophon - Saxophonist Basel',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/bg-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Saxophon - Professioneller Saxophonist & Saxophon-Lehrer in Basel',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saxophon Basel - Unterricht & Live-Musik | Ivan Saxophon",
    description: "Professioneller Saxophonist in Basel. Saxophon-Unterricht & Live-Auftritte. Erfahren Sie mehr über Saxophon-Stunden oder buchen Sie mich für Ihr Event!",
    images: ['/bg-hero.jpg'],
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
    google: 'your-google-verification-code',
  },
  category: 'Music & Education',
  classification: 'Music Education, Live Performance',
  other: {
    'geo.region': 'CH-BL',
    'geo.placename': 'Basel, Baselland',
    'geo.position': '47.5596;7.5886',
    'ICBM': '47.5596, 7.5886',
    'og:locality': 'Basel',
    'og:region': 'Basel-Landschaft',
    'og:country-name': 'Switzerland',
    'business:contact_data:locality': 'Basel',
    'business:contact_data:region': 'Basel-Landschaft',
    'business:contact_data:country_name': 'Switzerland'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodoniModa.variable} prefix="og: http://ogp.me/ns#">
      <head>
        {/* Preload critical hero images */}
        <link rel="preload" as="image" href="/bg-hero.jpg" />
        <link rel="preload" as="image" href="/main-1.jpg" />
        <link rel="preload" as="image" href="/main-2.jpg" />
        <link rel="preload" as="image" href="/main-3.jpg" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://deindj.ch" />
      </head>
      <body className={`${bodoniModa.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
