'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Language } from '@/lib/translations';

// Price calculation function
const calculatePrice = (packageSize: string, duration: string): number => {
  const basePrice = {
    '5': { '30': 40, '60': 70, '90': 100 },
    '10': { '30': 35, '60': 65, '90': 95 },
    '20': { '30': 30, '60': 60, '90': 90 }
  };
  return basePrice[packageSize as keyof typeof basePrice][duration as keyof typeof basePrice['5']];
};

type LessonCardProps = {
  type: 'kids' | 'adults';
  lang: Language;
  translations: any; // TODO: Add proper type
}

export default function LessonCard({ type, lang, translations: t }: LessonCardProps) {
  const [selectedPackage, setSelectedPackage] = useState('5');
  const [selectedDuration, setSelectedDuration] = useState('30');

  return (
    <div className="bg-white border-2 border-charcoal/10 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="text-bronze mb-4">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mb-3 sm:mb-4">
        {t.lessons.types[type].title}
      </h3>
      <p className="text-charcoal/80 mb-4 leading-relaxed text-sm sm:text-base text-justify">
        {t.lessons.types[type].description}
      </p>
      <ul className="space-y-2 mb-6 flex-grow">
        {t.lessons.types[type].features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-charcoal/70 text-sm sm:text-base text-justify">
            <svg className="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            {lang === 'de' ? 'Abo' : 'Package'}
          </label>
          <div className="relative">
            <select 
              className="w-full border-2 border-bronze text-bronze font-medium px-6 py-3 focus:outline-none hover:bg-bronze hover:text-white transition-all duration-300 appearance-none cursor-pointer"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
            >
              <option value="5">{lang === 'de' ? '5 Lektionen' : '5 Lessons'}</option>
              <option value="10">{lang === 'de' ? '10 Lektionen' : '10 Lessons'}</option>
              <option value="20">{lang === 'de' ? '20 Lektionen' : '20 Lessons'}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-bronze">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            {lang === 'de' ? 'Lektionsdauer' : 'Lesson Duration'}
          </label>
          <div className="relative">
            <select 
              className="w-full border-2 border-bronze text-bronze font-medium px-6 py-3 focus:outline-none hover:bg-bronze hover:text-white transition-all duration-300 appearance-none cursor-pointer"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              <option value="30">30 {lang === 'de' ? 'Min' : 'min'}</option>
              <option value="60">60 {lang === 'de' ? 'Min' : 'min'}</option>
              <option value="90">90 {lang === 'de' ? 'Min' : 'min'}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-bronze">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm text-charcoal/70">
          <span>{t.lessons.price}:</span>
          <span className="font-semibold text-bronze">
            {calculatePrice(selectedPackage, selectedDuration)} CHF / {lang === 'de' ? 'Lektion' : 'Lesson'}
          </span>
        </div>
      </div>
      <Link 
        href={`/${lang}#contact`}
        className="block w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white text-center py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
      >
        {t.lessons.bookNow}
      </Link>
    </div>
  );
} 