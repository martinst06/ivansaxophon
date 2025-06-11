import type { Metadata } from 'next';
import { Language } from '@/lib/translations';
import ImageCarousel from '@/components/ImageCarousel';

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isGerman = lang === 'de';
  
  if (isGerman) {
    return {
      title: 'Medien Galerie - Ivan Saxophon | Professionelle Auftritte & Events',
      description: 'Entdecken Sie Bilder von Ivan Saxophons professionellen Auftritten bei Hochzeiten, Firmenveranstaltungen und privaten Feiern in der Schweiz.',
      openGraph: {
        title: 'Medien Galerie - Ivan Saxophon | Professionelle Auftritte & Events',
        description: 'Entdecken Sie Bilder von Ivan Saxophons professionellen Auftritten bei Hochzeiten, Firmenveranstaltungen und privaten Feiern.',
        url: '/de/media',
        type: 'website',
        images: [
          {
            url: '/ivan.png',
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
    openGraph: {
      title: 'Media Gallery - Ivan Saxophon | Professional Performances & Events',
      description: 'Explore photos from Ivan Saxophon\'s professional performances at weddings, corporate events, and private celebrations.',
      url: '/en/media',
      type: 'website',
      images: [
        {
          url: '/ivan.png',
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
      <ImageCarousel lang={typedLang} />
    </main>
  );
}
