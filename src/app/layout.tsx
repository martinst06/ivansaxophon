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
    default: "Ivan Saxophon - Professional Saxophonist in Switzerland",
    template: "%s | Ivan Saxophon"
  },
  description: "Professional saxophonist in Switzerland offering live performances, saxophone lessons, and musical services for weddings, corporate events, and special occasions. Based in Basel, serving all of Switzerland.",
  keywords: [
    "saxophonist Switzerland",
    "saxophone lessons Basel",
    "wedding musician Switzerland",
    "jazz saxophonist",
    "classical saxophone",
    "corporate event music",
    "saxophone teacher Basel",
    "live music performances",
    "professional musician Switzerland",
    "saxophone instruction"
  ],
  authors: [{ name: "Ivan Saxophon" }],
  creator: "Ivan Saxophon",
  publisher: "Ivan Saxophon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ivansaxophon.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-CH': '/de',
    },
  },
  openGraph: {
    title: "Ivan Saxophon - Professional Saxophonist in Switzerland",
    description: "Professional saxophonist offering live performances and saxophone lessons throughout Switzerland. Based in Basel, specializing in jazz, classical, and contemporary music.",
    url: 'https://ivansaxophon.ch',
    siteName: 'Ivan Saxophon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Saxophon - Professional Saxophonist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ivan Saxophon - Professional Saxophonist in Switzerland",
    description: "Professional saxophonist offering live performances and saxophone lessons throughout Switzerland.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'music',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
