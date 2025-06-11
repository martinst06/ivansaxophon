import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
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



  // Images from ivan-carousel directory
  const images = [
    {
      src: "/ivan-carousel/IMG_9067.JPG",
      alt: "Ivan performing saxophone",
      description: typedLang === 'de' ? "Ivan in Aktion bei einem besonderen Auftritt" : "Ivan in action during a special performance"
    },
    {
      src: "/ivan-carousel/IMG_9055.JPG", 
      alt: "Ivan saxophone performance",
      description: typedLang === 'de' ? "Leidenschaftliche Saxophon-Performance" : "Passionate saxophone performance"
    },
    {
      src: "/ivan-carousel/IMG_9003.JPG",
      alt: "Ivan musical performance",
      description: typedLang === 'de' ? "Musikalische Darbietung mit vollem Einsatz" : "Musical performance with full dedication"
    },
    {
      src: "/ivan-carousel/IMG_9002.JPG",
      alt: "Ivan live performance",
      description: typedLang === 'de' ? "Live-Auftritt in einzigartiger Atmosphäre" : "Live performance in unique atmosphere"
    },
    {
      src: "/ivan-carousel/IMG_9001.JPG",
      alt: "Ivan saxophone artistry",
      description: typedLang === 'de' ? "Kunstvolle Saxophon-Interpretation" : "Artistic saxophone interpretation"
    },
    {
      src: "/ivan-carousel/IMG_8997.JPG",
      alt: "Ivan professional performance",
      description: typedLang === 'de' ? "Professionelle Performance mit Leidenschaft" : "Professional performance with passion"
    },
    {
      src: "/ivan-carousel/F1BA95C5-2751-4F0A-9EC8-AEA703EFE0B6.JPG",
      alt: "Ivan elegant performance",
      description: typedLang === 'de' ? "Elegante Darbietung bei einem exklusiven Event" : "Elegant performance at an exclusive event"
    },
    {
      src: "/ivan-carousel/CFBACA83-9C3A-4A04-958F-C65338C85927.JPG",
      alt: "Ivan sophisticated performance",
      description: typedLang === 'de' ? "Stilvolle musikalische Präsentation" : "Sophisticated musical presentation"
    },
    {
      src: "/ivan-carousel/BC723E29-623E-435C-BE55-DB27ACE08B03.JPG",
      alt: "Ivan memorable performance",
      description: typedLang === 'de' ? "Unvergesslicher Moment während der Performance" : "Memorable moment during performance"
    },
    {
      src: "/ivan-carousel/54DB7281-958D-4740-8845-51B5DA8EE912.JPG",
      alt: "Ivan expressive performance",
      description: typedLang === 'de' ? "Ausdrucksstarke musikalische Darbietung" : "Expressive musical performance"
    },
    {
      src: "/ivan-carousel/0C690ACE-6385-4AEC-8E7B-74EF198A1198.JPG",
      alt: "Ivan captivating performance",
      description: typedLang === 'de' ? "Fesselnde Performance mit emotionaler Tiefe" : "Captivating performance with emotional depth"
    }
  ];

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="pt-20 sm:pt-24">

        {/* Image Carousel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ImageCarousel images={images} />
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 