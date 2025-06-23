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
    "@id": "https://ivansaxophon.ch",
    "name": isGerman ? "Ivan Saxophon - Professioneller Saxophonist" : "Ivan Saxophon - Professional Saxophonist",
    "alternateName": "Ivan Saxophon",
    "description": isGerman 
      ? "Professioneller Saxophonist in Basel und Baselland, Schweiz. Premium Live-Auftritte für Hochzeiten, Firmenveranstaltungen und private Feiern. Expertensaxophon-Unterricht für alle Niveaus."
      : "Professional saxophonist in Basel and Baselland, Switzerland. Premium live performances for weddings, corporate events, and private parties. Expert saxophone lessons for all levels.",
    "image": [
      "https://ivansaxophon.ch/bg-hero.jpg"
    ],
    "logo": "https://ivansaxophon.ch/icon.svg",
    "url": "https://ivansaxophon.ch",
    "telephone": "+41763761906",
    "email": "info@ivansaxophon.ch",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baselland",
      "addressLocality": "Baselland",
      "addressRegion": "Basel-Landschaft", 
      "postalCode": "4410",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.5596,
      "longitude": 7.5886
    },
    "areaServed": [
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
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "State", 
        "name": "Basel-Stadt"
      },
      {
        "@type": "State", 
        "name": "Basel-Landschaft"
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
      "name": isGerman ? "Professionelle Saxophon-Dienstleistungen" : "Professional Saxophone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Hochzeits-Saxophon Auftritte" : "Wedding Saxophone Performances",
            "description": isGerman 
              ? "Elegante Saxophon-Musik für Hochzeitszeremonien, Cocktailstunden und Empfänge in der ganzen Schweiz"
              : "Elegant saxophone music for wedding ceremonies, cocktail hours, and receptions throughout Switzerland",
            "category": "Entertainment Services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Firmenveranstaltung Musik" : "Corporate Event Music",
            "description": isGerman 
              ? "Professionelle Saxophon-Unterhaltung für Firmenveranstaltungen, Konferenzen und Geschäftstreffen"
              : "Professional saxophone entertainment for corporate events, conferences, and business meetings",
            "category": "Corporate Entertainment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalService",
            "name": isGerman ? "Professioneller Saxophon-Unterricht" : "Professional Saxophone Lessons",
            "description": isGerman 
              ? "Expertensaxophon-Unterricht für alle Niveaus von Anfänger bis Fortgeschritten"
              : "Expert saxophone lessons for all levels from beginner to advanced",
            "educationalLevel": isGerman 
              ? ["Anfänger", "Mittelstufe", "Fortgeschritten"]
              : ["Beginner", "Intermediate", "Advanced"],
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
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivansaxophon.ch"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ivansaxophon.ch/about",
    "name": "Ivan Saxophon",
    "givenName": "Ivan",
    "jobTitle": isGerman ? "Professioneller Saxophonist & Musiklehrer" : "Professional Saxophonist & Music Teacher",
    "description": isGerman 
      ? "Professioneller Saxophonist spezialisiert auf Jazz, klassische und zeitgenössische Musik. Ansässig in Basel und Baselland, Schweiz, mit Auftritten in ganz Europa."
      : "Professional saxophonist specializing in jazz, classical, and contemporary music. Based in Basel and Baselland, Switzerland, with performances across Europe.",
    "image": "https://ivansaxophon.ch/bg-hero.jpg",
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
      "name": isGerman ? "Professioneller Saxophonist" : "Professional Saxophonist",
      "description": isGerman 
        ? "Professioneller Saxophonist spezialisiert auf Live-Auftritte und Musikunterricht. Bietet Premium-Unterhaltung für Hochzeiten, Firmenveranstaltungen und private Feiern."
        : "Professional saxophonist specializing in live performances and music instruction. Providing premium entertainment for weddings, corporate events, and private celebrations.",
      "occupationLocation": {
        "@type": "City",
        "name": "Baselland, Switzerland"
      },
      "estimatedSalary": {
        "@type": "MonetaryAmountDistribution",
        "name": isGerman ? "Geschätztes Gehalt" : "Estimated Salary",
        "currency": "CHF",
        "duration": "P1H",
        "median": 65
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ivansaxophon.ch/about"
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
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivansaxophon.ch/about"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ivansaxophon.ch/offer",
    "name": isGerman ? "Professionelle Saxophon-Dienstleistungen" : "Professional Saxophone Services",
    "serviceType": isGerman ? "Musik-Auftritte und -Unterricht" : "Music Performances and Lessons",
    "description": isGerman 
      ? "Premium Saxophon Musik und Saxophon Unterricht in der ganzen Schweiz"
      : "Premium saxophone music and saxophone lessons throughout Switzerland",
    "provider": {
      "@type": "Person",
      "name": "Ivan Saxophon",
      "@id": "https://ivansaxophon.ch/about"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Füllinsdorf",
      "addressLocality": "Füllinsdorf",
      "addressRegion": "Basel-Landschaft", 
      "postalCode": "4414",
      "addressCountry": "CH"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "category": "Entertainment & Music Education",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isGerman ? "Saxophon-Dienstleistungen" : "Saxophone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Hochzeits-Saxophon Auftritte" : "Wedding Saxophone Performances",
            "description": isGerman 
              ? "Elegante Saxophon-Musik für Hochzeitszeremonien, Cocktailstunden und Empfänge"
              : "Elegant saxophone music for wedding ceremonies, cocktail hours, and receptions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "EducationalService",
            "name": isGerman ? "Privater Saxophon-Unterricht" : "Private Saxophone Lessons",
            "description": isGerman 
              ? "Einzelunterricht im Saxophon, angepasst an Ihr Können und Ihre musikalischen Ziele"
              : "One-on-one saxophone instruction tailored to your skill level and musical goals",
            "educationalLevel": isGerman 
              ? ["Anfänger", "Mittelstufe", "Fortgeschritten"]
              : ["Beginner", "Intermediate", "Advanced"]
          }
        }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivansaxophon.ch/offer"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ivansaxophon.ch",
    "name": isGerman 
      ? "Ivan Saxophon - Professioneller Saxophonist Schweiz"
      : "Ivan Saxophon - Professional Saxophonist Switzerland",
    "url": "https://ivansaxophon.ch",
    "description": isGerman 
      ? "Professioneller Saxophonist in Basel und Baselland, Schweiz bietet Premium Live-Auftritte und Expertensaxophon-Unterricht"
      : "Professional saxophonist in Basel and Baselland, Switzerland offering premium live performances and expert saxophone lessons",
    "publisher": {
      "@type": "Person",
      "name": "Ivan Saxophon",
      "@id": "https://ivansaxophon.ch/about"
    },
    "mainEntity": {
      "@id": "https://ivansaxophon.ch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivansaxophon.ch"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isGerman ? "Startseite" : "Home",
        "item": "https://ivansaxophon.ch"
      }
    ]
  };

  // Add additional breadcrumb items based on the current page
  if (lang === 'de') {
    breadcrumbSchema.itemListElement.push(
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Über Mich",
        "item": "https://ivansaxophon.ch/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Angebot",
        "item": "https://ivansaxophon.ch/offer"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Unterricht",
        "item": "https://ivansaxophon.ch/teaching"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Medien",
        "item": "https://ivansaxophon.ch/media"
      }
    );
  } else {
    breadcrumbSchema.itemListElement.push(
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://ivansaxophon.ch/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Offer",
        "item": "https://ivansaxophon.ch/offer"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Teaching",
        "item": "https://ivansaxophon.ch/teaching"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Media",
        "item": "https://ivansaxophon.ch/media"
      }
    );
  }

  const mediaGallerySchema = {
    "@context": "https://schema.org",
    "@type": "MediaGallery",
    "@id": "https://ivansaxophon.ch/media",
    "name": isGerman ? "Saxophon Auftritte und Medien" : "Saxophone Performances and Media",
    "description": isGerman 
      ? "Eine Sammlung von Saxophon-Auftritten, Videos und Fotos von Live-Performances"
      : "A collection of saxophone performances, videos, and photos from live shows",
    "publisher": {
      "@type": "Person",
      "name": "Ivan Saxophon",
      "@id": "https://ivansaxophon.ch/about"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ivansaxophon.ch/media"
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mediaGallerySchema),
        }}
      />
    </>
  );
} 