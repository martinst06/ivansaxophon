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
      title: 'Über Ivan | Professioneller Saxophonist aus Baselland',
      description: 'Erfahren Sie mehr über Ivans musikalische Reise - von seinem Abschluss in Skopje bis zu seinen Auftritten in der Schweiz.',
      openGraph: {
        title: 'Über Ivan | Professioneller Saxophonist aus Baselland',
        description: 'Erfahren Sie mehr über Ivans musikalische Reise - von seinem Abschluss in Skopje bis zu seinen Auftritten in der Schweiz.',
        url: '/de/about',
      },
      alternates: {
        canonical: '/de/about',
      },
    };
  }
  
  return {
    title: 'About Ivan | Professional Saxophonist from Baselland',
    description: 'Learn about Ivan\'s musical journey - from his degree in Skopje to performing in Switzerland.',
    openGraph: {
      title: 'About Ivan | Professional Saxophonist from Baselland',
      description: 'Learn about Ivan\'s musical journey - from his degree in Skopje to performing in Switzerland.',
      url: '/en/about',
    },
    alternates: {
      canonical: '/en/about',
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;

  const content = {
    en: {
      title: "About",
      subtitle: "Ivan",
      education: "Education & Development",
      performance: "Performance Experience",
      current: "Current Work",
      educationText: "I graduated with a Bachelor's degree in Music Performance from the University \"Hl. Kyrill and Method\" in Skopje. During my studies, I attended international masterclasses with Baptiste Herbin, Nikita Zimin, Nikola Arsenijevic, and Derek Brown.",
      performanceText: "With my band \"Saxocoustics Unplugged,\" I have performed over 100 gigs and played as a saxophonist with the Macedonian Opera, the Philharmonic Orchestra, and the FMU Bigband.",
      currentText: "Now I live in Switzerland, offer private lessons in my studio in Baselland, and perform at various events — with heart, skill, and personality."
    },
    de: {
      title: "Über",
      subtitle: "Ivan",
      education: "Ausbildung & Entwicklung",
      performance: "Aufführungserfahrung",
      current: "Aktuelle Arbeit",
      educationText: "Ich habe meinen Bachelor-Abschluss in Musikperformance an der Universität \"Hl. Kyrill und Method\" in Skopje gemacht. Während meines Studiums besuchte ich internationale Meisterklassen mit Baptiste Herbin, Nikita Zimin, Nikola Arsenijevic und Derek Brown.",
      performanceText: "Mit meiner Band \"Saxocoustics Unplugged\" habe ich über 100 Auftritte gespielt und als Saxophonist mit der Mazedonischen Oper, dem Philharmonischen Orchester und der FMU Bigband gespielt.",
      currentText: "Jetzt lebe ich in der Schweiz, biete Privatstunden in meinem Studio im Baselbiet an und trete bei verschiedenen Veranstaltungen auf — mit Herz, Können und Persönlichkeit."
    }
  };

  const t = content[typedLang as keyof typeof content] || content.en;

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-16">
        {/* Main Section with Half-Screen Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] hero-optimized above-fold">
          {/* Left Side - Ivan's Image */}
          <div className="order-1 lg:order-1 relative overflow-hidden min-h-[50vh] lg:min-h-full">
            <Image
              src="/ivan-2.jpg"
              alt="Ivan Saxophon personal portrait"
              fill
              className="object-cover object-center hero-image"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 z-10"></div>
          </div>

          {/* Right Side - Personal Story */}
          <div className="order-2 lg:order-2 flex items-center bg-gradient-to-br from-white via-beige/20 to-bronze-light/5">
            <div className="w-full p-8 lg:p-16 space-y-8">
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4 border-l-4 border-bronze pl-4">
                  {t.education}
                </h2>
                <p className="text-lg text-charcoal/90 leading-relaxed text-justify">
                  {t.educationText}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4 border-l-4 border-bronze pl-4">
                  {t.performance}
                </h2>
                <p className="text-lg text-charcoal/90 leading-relaxed text-justify">
                  {t.performanceText}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4 border-l-4 border-bronze pl-4">
                  {t.current}
                </h2>
                <p className="text-lg text-charcoal/90 leading-relaxed text-justify">
                  {t.currentText}
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 