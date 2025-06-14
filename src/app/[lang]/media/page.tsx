import type { Metadata } from 'next';
import { Language } from '@/lib/translations';
import ImageCarousel from '@/components/ImageCarousel';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  const baseUrl = 'https://ivansaxophon.ch';
  
  if (isGerman) {
    return {
      title: 'Medien Galerie - Ivan Saxophon | Professionelle Auftritte & Events',
      description: 'Entdecken Sie Bilder von Ivan Saxophons professionellen Auftritten bei Hochzeiten, Firmenveranstaltungen und privaten Feiern in der Schweiz.',
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/de/media`,
        languages: {
          'en': `${baseUrl}/en/media`,
          'de': `${baseUrl}/de/media`,
          'x-default': `${baseUrl}/en/media`
        },
      },
      openGraph: {
        title: 'Medien Galerie - Ivan Saxophon | Professionelle Auftritte & Events',
        description: 'Entdecken Sie Bilder von Ivan Saxophons professionellen Auftritten bei Hochzeiten, Firmenveranstaltungen und privaten Feiern.',
        url: `${baseUrl}/de/media`,
        type: 'website',
        images: [
          {
            url: '/bg-hero.jpg',
            width: 1200,
            height: 630,
            alt: 'Ivan Saxophon Medien Galerie',
          },
        ],
      },
    };
  }
  
  return {
    title: 'Media Gallery - Ivan Saxophon | Professional Performances & Events',
    description: 'Explore photos from Ivan Saxophon\'s professional performances at weddings, corporate events, and private celebrations in Switzerland.',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/en/media`,
             languages: {
         'en': `${baseUrl}/en/media`,
         'de': `${baseUrl}/de/media`,
         'x-default': `${baseUrl}/en/media`
       },
    },
    openGraph: {
      title: 'Media Gallery - Ivan Saxophon | Professional Performances & Events',
      description: 'Explore photos from Ivan Saxophon\'s professional performances at weddings, corporate events, and private celebrations.',
      url: `${baseUrl}/en/media`,
      type: 'website',
      images: [
        {
          url: '/bg-hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Ivan Saxophon Media Gallery',
        },
      ],
    },
  };
}

export default async function MediaPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={typedLang} />
      <ImageCarousel lang={typedLang} />
      <Footer lang={typedLang} />
    </main>
  );
}
