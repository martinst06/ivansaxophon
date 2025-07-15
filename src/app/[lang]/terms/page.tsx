import { translations } from '@/lib/translations';
import { Language } from '@/lib/translations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang] || translations.en;

  return {
    title: t.terms.title,
    description: t.terms.description,
    alternates: {
      canonical: `https://ivansaxophon.ch/${lang}/terms`,
      languages: {
        'en': `https://ivansaxophon.ch/en/terms`,
        'de': `https://ivansaxophon.ch/de/terms`,
        'x-default': `https://ivansaxophon.ch/en/terms`
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;
  const t = translations[typedLang] || translations.en;

  return (
    <>
      <Navigation lang={typedLang} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-20">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-8">
              {t.terms.title}
            </h1>
            
            <div className="text-charcoal/80 mb-8">
              <p className="text-sm">
                <strong>{t.terms.lastUpdated}:</strong> {t.terms.lastUpdatedDate}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.introduction.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.terms.introduction.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.services.title}
                </h2>
                <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                  {t.terms.services.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.contactForm.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-charcoal/80">
                    {t.terms.contactForm.process}
                  </p>
                  <p className="text-charcoal/80">
                    {t.terms.contactForm.response}
                  </p>
                  <p className="text-charcoal/80">
                    {t.terms.contactForm.privateArrangement}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.liability.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.terms.liability.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.websiteUse.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-charcoal/80">
                    {t.terms.websiteUse.content}
                  </p>
                  <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                    {t.terms.websiteUse.restrictions.map((restriction, index) => (
                      <li key={index}>{restriction}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.intellectualProperty.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.terms.intellectualProperty.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.applicableLaw.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.terms.applicableLaw.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.changes.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.terms.changes.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.terms.contact.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.terms.contact.description}
                </p>
                <div className="bg-bronze/10 p-4 rounded-lg">
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.terms.contact.email}:</strong>{' '}
                    <a href="mailto:info@ivansaxophon.ch" className="text-bronze hover:text-bronze-dark transition-colors">
                      info@ivansaxophon.ch
                    </a>
                  </p>
                  <p className="text-charcoal/80">
                    <strong>{t.terms.contact.phone}:</strong>{' '}
                    <a href="tel:+41763761906" className="text-bronze hover:text-bronze-dark transition-colors">
                      +41 76 376 19 06
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={typedLang} />
    </>
  );
} 