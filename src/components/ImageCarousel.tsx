'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Language } from '@/lib/translations';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface ImageCarouselProps {
  lang: Language;
}

const ImageCarousel = ({ lang }: ImageCarouselProps) => {
  // Array of all carousel images - memoized for performance
  const carouselImages = useMemo(() => [
    {
      src: '/ivan-carousel/IMG_9067.jpg',
      alt: 'Ivan Saxophon performing at live event',
    },
    {
      src: '/ivan-carousel/IMG_9055.jpg',
      alt: 'Professional saxophone performance',
    },
    {
      src: '/ivan-carousel/IMG_9003.jpg',
      alt: 'Ivan Saxophon live performance',
    },
    {
      src: '/ivan-carousel/IMG_9002.jpg',
      alt: 'Saxophone performance at event',
    },
    {
      src: '/ivan-carousel/IMG_9001.jpg',
      alt: 'Professional saxophonist in action',
    },
    {
      src: '/ivan-carousel/IMG_8997.jpg',
      alt: 'Ivan Saxophon concert performance',
    },
    {
      src: '/ivan-carousel/F1BA95C5-2751-4F0A-9EC8-AEA703EFE0B6.jpg',
      alt: 'Ivan Saxophon professional performance',
    },
    {
      src: '/ivan-carousel/CFBACA83-9C3A-4A04-958F-C65338C85927.jpg',
      alt: 'Live saxophone performance',
    },
    {
      src: '/ivan-carousel/BC723E29-623E-435C-BE55-DB27ACE08B03.jpg',
      alt: 'Professional saxophonist performing',
    },
    {
      src: '/ivan-carousel/54DB7281-958D-4740-8845-51B5DA8EE912.jpg',
      alt: 'Ivan Saxophon event performance',
    },
    {
      src: '/ivan-carousel/0C690ACE-6385-4AEC-8E7B-74EF198A1198.jpg',
      alt: 'Professional saxophone performance',
    },
  ], []);



  useEffect(() => {
    // Preload first few images for better performance
    carouselImages.slice(0, 3).forEach(image => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [carouselImages]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-beige/20 via-white to-bronze-light/10 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-8 lg:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            onSlideChange={(swiper) => {}}
            className="pb-16 sm:pb-20"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">

                  
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"

                    />
                    
                    {/* Gradient overlay for better aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-6 sm:mt-8"></div>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6 sm:mt-8">
          <span className="text-sm sm:text-base text-charcoal/60">
            {lang === 'de' 
              ? 'Für mehr Fotos und Videos folge mir auf meinen Social Media Kanälen!'
              : 'For more photos and videos follow me on my social media accounts!'}
          </span>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #B9B1A2 !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
          background: #A9A192 !important;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
          transform: scale(1.1) !important;
        }
        
        @media (max-width: 640px) {
          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
