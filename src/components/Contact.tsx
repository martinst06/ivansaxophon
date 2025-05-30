'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t.contact.title} <span className="text-bronze">{t.contact.titleAccent}</span>
          </h2>
          <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              {t.contact.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.name} <span className="text-bronze">{t.contact.form.required}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.email} <span className="text-bronze">{t.contact.form.required}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2">
                    {t.contact.form.eventType}
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="" className="bg-charcoal">{t.contact.form.selectEventType}</option>
                    <option value="wedding" className="bg-charcoal">{t.contact.form.wedding}</option>
                    <option value="corporate" className="bg-charcoal">{t.contact.form.corporate}</option>
                    <option value="private" className="bg-charcoal">{t.contact.form.private}</option>
                    <option value="concert" className="bg-charcoal">{t.contact.form.concert}</option>
                    <option value="other" className="bg-charcoal">{t.contact.form.other}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-white mb-2">
                  {t.contact.form.eventDate}
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  {t.contact.form.message} <span className="text-bronze">{t.contact.form.required}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-bronze focus:border-transparent transition-all duration-300 resize-none text-white placeholder-white/50"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-bronze hover:bg-bronze-dark text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t.contact.form.sendMessage}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-bronze p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.contact.info.email}</h4>
                    <p className="text-white/80">info@ivansaxophon.ch</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-bronze p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.contact.info.phone}</h4>
                    <p className="text-white/80">+41 (76) 376 19 06</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-bronze p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.contact.info.location}</h4>
                    <p className="text-white/80 whitespace-pre-line">{t.contact.info.locationText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <svg className="w-5 h-5 text-bronze mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.contact.info.quickResponse}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {t.contact.info.quickResponseText}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <svg className="w-5 h-5 text-bronze mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-1a4 4 0 014-4h4a4 4 0 014 4v1a4 4 0 11-8 0z" />
                    </svg>
                    {t.contact.info.availability}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {t.contact.info.availabilityText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 