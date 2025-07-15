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
    title: t.privacy.title,
    description: t.privacy.description,
    alternates: {
      canonical: `https://ivansaxophon.ch/${lang}/privacy`,
      languages: {
        'en': `https://ivansaxophon.ch/en/privacy`,
        'de': `https://ivansaxophon.ch/de/privacy`,
        'x-default': `https://ivansaxophon.ch/en/privacy`
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
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
              {t.privacy.title}
            </h1>
            
            <div className="text-charcoal/80 mb-8">
              <p className="text-sm">
                <strong>{t.privacy.lastUpdated}:</strong> {t.privacy.lastUpdatedDate}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.introduction.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.privacy.introduction.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.dataController.title}
                </h2>
                <div className="bg-bronze/10 p-6 rounded-lg mb-4">
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.dataController.name}:</strong> Ivan Saxophon
                  </p>
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.dataController.address}:</strong> Baselland, Schweiz
                  </p>
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.dataController.email}:</strong> info@ivansaxophon.ch
                  </p>
                  <p className="text-charcoal/80">
                    <strong>{t.privacy.dataController.phone}:</strong> +41 76 376 19 06
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.dataCollection.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataCollection.contactForm.title}
                    </h3>
                    <p className="text-charcoal/80 mb-2">
                      {t.privacy.dataCollection.contactForm.description}
                    </p>
                    <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                      {t.privacy.dataCollection.contactForm.dataTypes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataCollection.analytics.title}
                    </h3>
                    <p className="text-charcoal/80">
                      {t.privacy.dataCollection.analytics.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataCollection.localStorage.title}
                    </h3>
                    <p className="text-charcoal/80">
                      {t.privacy.dataCollection.localStorage.description}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.dataProcessing.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataProcessing.purpose.title}
                    </h3>
                    <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                      {t.privacy.dataProcessing.purpose.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataProcessing.legalBasis.title}
                    </h3>
                    <p className="text-charcoal/80">
                      {t.privacy.dataProcessing.legalBasis.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.dataProcessing.noStorage.title}
                    </h3>
                    <p className="text-charcoal/80">
                      {t.privacy.dataProcessing.noStorage.description}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.thirdParties.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.thirdParties.resend.title}
                    </h3>
                    <p className="text-charcoal/80 mb-2">
                      {t.privacy.thirdParties.resend.description}
                    </p>
                    <p className="text-charcoal/80">
                      <strong>{t.privacy.thirdParties.resend.privacyPolicy}:</strong>{' '}
                      <a href="https://resend.com/privacy" className="text-bronze hover:text-bronze-dark transition-colors" target="_blank" rel="noopener noreferrer">
                        https://resend.com/privacy
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {t.privacy.thirdParties.vercel.title}
                    </h3>
                    <p className="text-charcoal/80 mb-2">
                      {t.privacy.thirdParties.vercel.description}
                    </p>
                    <p className="text-charcoal/80">
                      <strong>{t.privacy.thirdParties.vercel.privacyPolicy}:</strong>{' '}
                      <a href="https://vercel.com/privacy" className="text-bronze hover:text-bronze-dark transition-colors" target="_blank" rel="noopener noreferrer">
                        https://vercel.com/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.userRights.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.privacy.userRights.description}
                </p>
                <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                  {t.privacy.userRights.rights.map((right, index) => (
                    <li key={index}>{right}</li>
                  ))}
                </ul>
                <p className="text-charcoal/80 mt-4">
                  {t.privacy.userRights.contact}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.security.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.privacy.security.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.changes.title}
                </h2>
                <p className="text-charcoal/80">
                  {t.privacy.changes.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.complaints.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.privacy.complaints.description}
                </p>
                <div className="bg-bronze/10 p-4 rounded-lg">
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.complaints.authority.name}:</strong> {t.privacy.complaints.authority.fullName}
                  </p>
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.complaints.authority.website}:</strong>{' '}
                    <a href="https://www.edoeb.admin.ch" className="text-bronze hover:text-bronze-dark transition-colors" target="_blank" rel="noopener noreferrer">
                      https://www.edoeb.admin.ch
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {t.privacy.contact.title}
                </h2>
                <p className="text-charcoal/80 mb-4">
                  {t.privacy.contact.description}
                </p>
                <div className="bg-bronze/10 p-4 rounded-lg">
                  <p className="text-charcoal/80 mb-2">
                    <strong>{t.privacy.contact.email}:</strong>{' '}
                    <a href="mailto:info@ivansaxophon.ch" className="text-bronze hover:text-bronze-dark transition-colors">
                      info@ivansaxophon.ch
                    </a>
                  </p>
                  <p className="text-charcoal/80">
                    <strong>{t.privacy.contact.phone}:</strong>{' '}
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