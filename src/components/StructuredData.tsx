import { Language } from '@/lib/translations';

interface StructuredDataProps {
  lang: Language;
}

export default function StructuredData({ lang }: StructuredDataProps) {
  // Localized content based on language
  const isGerman = lang === 'de';
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MusicTeacher",
    "@id": "https://ivansaxophon.ch/#business",
    "name": "Ivan Saxophon - Professional Saxophonist",
    "alternateName": "Ivan Saxophon",
    "description": isGerman 
      ? "Professioneller Saxophonist in Baselland, Schweiz. Premium Live-Auftritte für Hochzeiten, Firmenveranstaltungen und private Feiern. Expertensaxophon-Unterricht für alle Niveaus."
      : "Professional saxophonist in Baselland, Switzerland. Premium live performances for weddings, corporate events, and private parties. Expert saxophone lessons for all levels.",
    "image": [
      "https://ivansaxophon.ch/ivan.png"
      // "https://ivansaxophon.ch/ivan-saxophon-performance.jpg" // TODO: Add when photo available
    ],
    // "logo": "https://ivansaxophon.ch/logo.png", // TODO: Add when logo available
    "url": "https://ivansaxophon.ch",
    "telephone": "+41763761906",
    "email": "info@ivansaxophon.ch",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baselland",
      "addressLocality": "Baselland",
      "addressRegion": "Basel-Landschaft", 
      "postalCode": "4000",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.5596,
      "longitude": 7.5886
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "State", 
        "name": "Basel-Landschaft"
      },
      {
        "@type": "State", 
        "name": "Basel-Stadt"
      },
      {
        "@type": "City",
        "name": "Basel",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "4000",
          "addressCountry": "CH"
        }
      },
      {
        "@type": "City",
        "name": "Baselland",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "4410",
          "addressCountry": "CH"
        }
      },
      {
        "@type": "City",
        "name": "Liestal",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "4410",
          "addressCountry": "CH"
        }
      },
      {
        "@type": "City",
        "name": "Füllinsdorf",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "4414",
          "addressCountry": "CH"
        }
      },
      {
        "@type": "City",
        "name": "Frenkendorf",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "4402",
          "addressCountry": "CH"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Saxophone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hochzeits-Saxophon Auftritte",
            "description": "Elegante Saxophon-Musik für Hochzeitszeremonien, Cocktailstunden und Empfänge in der ganzen Schweiz",
            "category": "Entertainment Services"
            // wedding pricing was here
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Firmenveranstaltung Musik",
            "description": "Professionelle Saxophon-Unterhaltung für Firmenveranstaltungen, Konferenzen und Geschäftstreffen",
            "category": "Corporate Entertainment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalService",
            "name": "Professioneller Saxophon-Unterricht",
            "description": "Expertensaxophon-Unterricht für alle Niveaus von Anfänger bis Fortgeschritten",
            "educationalLevel": ["Anfänger", "Mittelstufe", "Fortgeschritten"],
            "category": "Music Education"
          },
          "priceRange": "50-80 CHF",
          "priceCurrency": "CHF"
        }
      ]
    },
    "openingHours": [
      "Mo-Fr 18:00-21:00",
      "Sa 10:00-16:00"
    ],
    // "paymentAccepted": ["Cash", "Bank Transfer", "Credit Card"],
    // "currenciesAccepted": "CHF",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.5596,
        "longitude": 7.5886
      },
      "geoRadius": "100000"
    },
    "sameAs": [
      "https://www.instagram.com/ivan.saxophon/"
    ]
    // TODO: Add real reviews after setting up Google Business Profile
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.9",
    //   "reviewCount": "27",
    //   "bestRating": "5",
    //   "worstRating": "1"
    // },
    // "review": [
    //   {
    //     "@type": "Review",
    //     "author": {
    //       "@type": "Person",
    //       "name": "Real Customer Name"
    //     },
    //     "reviewRating": {
    //       "@type": "Rating",
    //       "ratingValue": "5",
    //       "bestRating": "5"
    //     },
    //     "reviewBody": "Real customer review here..."
    //   }
    // ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ivansaxophon.ch/about-me",
    "name": "Ivan Saxophon",
    "givenName": "Ivan",
    "jobTitle": isGerman ? "Professioneller Saxophonist & Musiklehrer" : "Professional Saxophonist & Music Teacher",
    "description": isGerman 
      ? "Professioneller Saxophonist spezialisiert auf Jazz, klassische und zeitgenössische Musik. Ansässig in Baselland, Schweiz, mit Auftritten in ganz Europa."
      : "Professional saxophonist specializing in jazz, classical, and contemporary music. Based in Baselland, Switzerland, with performances across Europe.",
    "image": "https://ivansaxophon.ch/ivan.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baselland",
      "addressRegion": "Basel-Landschaft", 
      "addressCountry": "CH"
    },
    "telephone": "+41763761906",
    "email": "info@ivansaxophon.ch",
    "url": "https://ivansaxophon.ch",
    "sameAs": [
      "https://www.instagram.com/ivan.saxophon/"
    ],
    "knowsAbout": [
      "Saxophone Performance",
      "Saxophone Teaching",
      "Music Teaching",
      "Jazz Music",
      "Classical Music", 
      "Contemporary Music",
      "Music Education",
      "Wedding Entertainment",
      "Corporate Event Music",
      "Music Instruction"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Professioneller Saxophonist",
      "occupationLocation": {
        "@type": "City",
        "name": "Baselland, Switzerland"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University Hl. Kyrill and Method",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Skopje",
        "addressCountry": "MK"
      }
    },
    "performerIn": {
      "@type": "MusicGroup",
      "name": "Saxocoustics Unplugged"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ivansaxophon.ch/#service",
    "name": "Professionelle Saxophon-Dienstleistungen",
    "serviceType": "Musik-Auftritte und -Unterricht",
    "description": "Premium Saxophon Musik und Saxophon Unterricht in der ganzen Schweiz",
    "provider": {
      "@type": "Person",
      "name": "Ivan Saxophon",
      "@id": "https://ivansaxophon.ch/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "category": "Entertainment & Music Education",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Saxophone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Saxophone Performance",
            "description": "Elegant saxophone music for wedding ceremonies, cocktail hours, and receptions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "EducationalService",
            "name": "Private Saxophone Lessons",
            "description": "One-on-one saxophone instruction tailored to your skill level and musical goals",
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"]
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ivansaxophon.ch/#website",
    "name": "Ivan Saxophon - Professioneller Saxophonist Schweiz",
    "url": "https://ivansaxophon.ch",
    "description": "Professioneller Saxophonist in Baselland, Schweiz bietet Premium Live-Auftritte und Expertensaxophon-Unterricht",
    "publisher": {
      "@type": "Person",
      "name": "Ivan Saxophon",
      "@id": "https://ivansaxophon.ch/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ivansaxophon.ch/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@id": "https://ivansaxophon.ch/#business"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ivansaxophon.ch"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Performances",
        "item": "https://ivansaxophon.ch/performances"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Lessons",
        "item": "https://ivansaxophon.ch/lessons"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
} 