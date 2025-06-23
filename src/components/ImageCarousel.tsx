'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';  
import type { SwiperRef } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Language } from '@/lib/translations';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  lang: Language;
}

const ImageCarousel = ({ lang }: ImageCarouselProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const carouselImages = [
    '/ivan-carousel/IMG_9067.jpg',
    '/ivan-carousel/IMG_9055.jpg', 
    '/ivan-carousel/IMG_9003.jpg',
    '/ivan-carousel/IMG_9002.jpg',
    '/ivan-carousel/IMG_9001.jpg',
    '/ivan-carousel/IMG_8997.jpg',
    '/ivan-carousel/F1BA95C5-2751-4F0A-9EC8-AEA703EFE0B6.jpg',
    '/ivan-carousel/CFBACA83-9C3A-4A04-958F-C65338C85927.jpg',
    '/ivan-carousel/BC723E29-623E-435C-BE55-DB27ACE08B03.jpg',
    '/ivan-carousel/54DB7281-958D-4740-8845-51B5DA8EE912.jpg',
    '/ivan-carousel/0C690ACE-6385-4AEC-8E7B-74EF198A1198.jpg',
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-beige/10 to-bronze-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            className="!pb-16"
          >
            {carouselImages.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                    <Image
                      src={imageSrc}
                      alt={`Ivan Saxophon performance ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-bronze hover:text-white transition-all duration-200 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-bronze hover:text-white transition-all duration-200 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6 sm:mt-8">
          <span className="text-sm sm:text-base text-charcoal/60 block mb-4 sm:mb-6">
            {lang === 'de' 
              ? 'Für mehr Fotos und Videos folge mir auf meinen Social Media Kanälen!'
              : 'For more photos and videos follow me on my social media accounts!'}
          </span>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 sm:space-x-5">
            <a
              href="https://www.instagram.com/ivan.saxophon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal/10 hover:bg-bronze text-charcoal hover:text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              aria-label="Follow on Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ivansaxophon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal/10 hover:bg-bronze text-charcoal hover:text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              aria-label="Watch on YouTube"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ivansaxophon.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal/10 hover:bg-bronze text-charcoal hover:text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
              aria-label="Follow on TikTok"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #B9B1A2 !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: #A9A192 !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 0.7 !important;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
