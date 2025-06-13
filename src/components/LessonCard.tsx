'use client';

import Link from 'next/link';
import type { Language, translations } from '@/lib/translations';

type LessonCardProps = {
  type: 'kids' | 'adults';
  lang: Language;
  translations: typeof translations.en;
}

export default function LessonCard({ type, lang, translations: t }: LessonCardProps) {
  // Create subject line based on lesson type and language
  const getSubject = () => {
    if (lang === 'de') {
      return type === 'kids' ? 'Privatunterricht für Kinder' : 'Privatunterricht für Erwachsene';
    } else {
      return type === 'kids' ? 'Private Lessons for Kids' : 'Private Lessons for Adults';
    }
  };

  // Create email body based on lesson type
  const getEmailBody = () => {
    if (lang === 'de') {
      const lessonType = type === 'kids' ? 'Kinder' : 'Erwachsene';
      return `Hallo Ivan

Ich interessiere mich für Saxophonunterricht für ${lessonType}.

Bitte kontaktieren Sie mich.

Freundliche Grüsse`;
    } else {
      const lessonType = type === 'kids' ? 'kids' : 'adults';
      return `Hi Ivan

I'm interested in saxophone lessons for ${lessonType}.

Please contact me.

Kind regards`;
    }
  };

  // Get email from environment variable or fallback
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL_TO;
  const subject = encodeURIComponent(getSubject());
  const body = encodeURIComponent(getEmailBody());
  const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  return (
    <div className="bg-white border-2 border-bronze p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4 text-center">
        {t.lessons.types[type].title}
      </h3>
      <p className="text-charcoal/80 mb-4 leading-relaxed text-sm sm:text-base text-justify">
        {t.lessons.types[type].description}
      </p>
      <div className="mb-6">
        <div className="flex items-center text-charcoal/70 text-sm sm:text-base">
          <svg className="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{lang === 'de' ? 'Studio in Füllinsdorf, Baselland' : 'Studio in Füllinsdorf, Baselland'}</span>
        </div>
      </div>
      <Link 
        href={mailtoLink}
        className="block w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white text-center py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
      >
        {t.lessons.bookNow}
      </Link>
    </div>
  );
} 