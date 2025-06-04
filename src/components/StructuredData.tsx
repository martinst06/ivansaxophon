export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ivan Saxophon",
    "jobTitle": "Professional Saxophonist",
    "description": "Professional saxophonist based in Basel, Switzerland, offering live performances and saxophone lessons",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Basel",
      "addressRegion": "Baselland", 
      "addressCountry": "CH"
    },
    "telephone": "+41 (76) 376 19 06",
    "email": "info@ivansaxophon.ch",
    "url": "https://ivansaxophon.ch",
    "sameAs": [
      "https://www.instagram.com/ivan.saxophon/"
    ],
    "knowsAbout": [
      "Saxophone",
      "Jazz Music",
      "Classical Music", 
      "Contemporary Music",
      "Music Performance",
      "Music Education"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University Hl. Kyrill and Method",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Skopje",
        "addressCountry": "MK"
      }
    }
  };

  const musicGroupSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Saxocoustics Unplugged",
    "member": {
      "@type": "Person",
      "name": "Ivan Saxophon"
    },
    "genre": ["Jazz", "Acoustic"],
    "description": "Musical group featuring saxophone performances"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Music Performance and Education",
    "provider": {
      "@type": "Person",
      "name": "Ivan Saxophon"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Saxophone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live Saxophone Performance",
            "description": "Professional saxophone performances for weddings, corporate events, and special occasions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "EducationalService",
            "name": "Saxophone Lessons",
            "description": "Professional saxophone instruction for all skill levels",
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"]
          }
        }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MusicTeacher",
    "name": "Ivan Saxophon",
    "image": "https://ivansaxophon.ch/og-image.jpg",
    "url": "https://ivansaxophon.ch",
    "telephone": "+41 (76) 376 19 06",
    "email": "info@ivansaxophon.ch",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Basel",
      "addressRegion": "Baselland",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.5596",
      "longitude": "7.5886"
    },
    "openingHours": "Mo-Sa 09:00-20:00",
    "priceRange": "€50-€80",
    "acceptedPaymentMethod": "Cash, Bank Transfer",
    "currenciesAccepted": "CHF, EUR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(musicGroupSchema),
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
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
} 