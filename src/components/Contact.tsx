'use client';

import React from 'react';
import Form from 'next/form';
import { translations, Language } from '@/lib/translations';
import { submitContactForm } from '@/lib/actions';
import SubmitButton from './SubmitButton';

interface ContactProps {
  lang: Language;
}

const Contact = ({ lang }: ContactProps) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t.contact.title} <span className="text-bronze">{t.contact.titleAccent}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto"></div>
        </div>

        {/* Contact Form - Centered */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 p-6 sm:p-8 shadow-xl">
            <Form action={submitContactForm} className="space-y-8">
              
              {/* Personal Information Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-bronze/30">
                  {t.contact.form.personalInfo}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.firstName} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.firstNamePlaceholder}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.lastName} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.lastNamePlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.email} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.phone} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
                      {t.contact.form.address} <span className="text-bronze">{t.contact.form.required}</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                      placeholder={t.contact.form.addressPlaceholder}
                    />
                  </div>
                </div>
              </div>

              {/* Event Details Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-bronze/30">
                  {t.contact.form.eventDetails}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Event Type */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      {t.contact.form.eventType} <span className="text-bronze">{t.contact.form.required}</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {['corporate', 'wedding', 'birthday', 'private', 'other'].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="eventType"
                            value={type}
                            required
                            className="sr-only peer"
                          />
                          <div className="w-full px-3 py-2 text-center text-sm border-2 transition-all duration-300 bg-white/10 text-white border-white/20 hover:border-bronze/50 peer-checked:bg-bronze peer-checked:text-white peer-checked:border-bronze">
                            {t.contact.form[type as keyof typeof t.contact.form]}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Performance Type */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      {t.contact.form.performanceType} <span className="text-bronze">{t.contact.form.required}</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {['acoustic', 'hits', 'jazz', 'saxDj', 'allInOne'].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="performanceType"
                            value={type}
                            required
                            className="sr-only peer"
                          />
                          <div className="w-full px-3 py-2 text-center text-sm border-2 transition-all duration-300 bg-white/10 text-white border-white/20 hover:border-bronze/50 peer-checked:bg-bronze peer-checked:text-white peer-checked:border-bronze">
                            {t.contact.form[type as keyof typeof t.contact.form]}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.guests} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.guestsPlaceholder}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="place" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.place} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <input
                        type="text"
                        id="place"
                        name="place"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                        placeholder={t.contact.form.placePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventAddress" className="block text-sm font-medium text-white mb-2">
                      {t.contact.form.eventAddress} <span className="text-bronze">{t.contact.form.required}</span>
                    </label>
                    <input
                      type="text"
                      id="eventAddress"
                      name="eventAddress"
                      required
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white placeholder-white/50 min-h-[48px]"
                      placeholder={t.contact.form.eventAddressPlaceholder}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.eventDate} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          className="w-full px-4 py-3 pr-12 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white min-h-[48px] h-[48px] [&::-webkit-calendar-picker-indicator]:opacity-0 appearance-none"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="durationType" className="block text-sm font-medium text-white mb-2">
                        {t.contact.form.durationType} <span className="text-bronze">{t.contact.form.required}</span>
                      </label>
                      <select
                        id="durationType"
                        name="durationType"
                        required
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 text-white min-h-[48px] h-[48px] appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23cd7f32' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1rem' }}
                      >
                        <option value="" className="bg-charcoal">Select duration</option>
                        <option value="30min" className="bg-charcoal">{t.contact.form.duration30min}</option>
                        <option value="1h" className="bg-charcoal">{t.contact.form.duration1h}</option>
                        <option value="1h30" className="bg-charcoal">{t.contact.form.duration1h30}</option>
                        <option value="2h" className="bg-charcoal">{t.contact.form.duration2h}</option>
                        <option value="2h+" className="bg-charcoal">{t.contact.form.duration2hPlus}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 focus:ring-2 focus:ring-bronze focus:border-bronze transition-all duration-300 resize-none text-white placeholder-white/50"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                </div>
              </div>

              <SubmitButton className="w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white py-3 px-6 font-medium transition-all duration-300 transform hover:-translate-y-0.5 min-h-[48px] flex items-center justify-center text-sm sm:text-base">
                {t.contact.form.sendMessage}
              </SubmitButton>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 