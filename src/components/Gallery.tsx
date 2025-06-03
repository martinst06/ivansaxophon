'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryItems = [
    {
      title: t.gallery.items.jazzClub.title,
      description: t.gallery.items.jazzClub.description,
      category: "Jazz"
    },
    {
      title: t.gallery.items.wedding.title,
      description: t.gallery.items.wedding.description,
      category: "Wedding"
    },
    {
      title: t.gallery.items.concert.title,
      description: t.gallery.items.concert.description,
      category: "Classical"
    },
    {
      title: t.gallery.items.corporate.title,
      description: t.gallery.items.corporate.description,
      category: "Corporate"
    },
    {
      title: t.gallery.items.studio.title,
      description: t.gallery.items.studio.description,
      category: "Studio"
    },
    {
      title: t.gallery.items.festival.title,
      description: t.gallery.items.festival.description,
      category: "Festival"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t.gallery.title} <span className="text-bronze">{t.gallery.titleAccent}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-bronze mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-2">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-beige via-bronze-light/30 to-bronze/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-charcoal/40">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <p className="text-xs sm:text-sm">{item.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Content overlay - Mobile: Always visible, Desktop: Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent sm:bg-none">
                  <h3 className="text-base sm:text-lg font-serif font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90 leading-tight">{item.description}</p>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <span className="bg-bronze text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-charcoal/60 mb-4 sm:mb-6 text-sm sm:text-base">
            {t.gallery.followText}
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a 
              href="https://www.instagram.com/ivan.saxophon/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-bronze-dark transition-colors duration-300 p-2 rounded-full hover:bg-bronze/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-bronze hover:text-bronze-dark transition-colors duration-300 p-2 rounded-full hover:bg-bronze/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 