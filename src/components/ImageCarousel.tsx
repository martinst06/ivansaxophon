'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-gray-50">
        {/* Fixed three-image layout */}
        <div className="flex items-center justify-center h-full w-full relative px-2 sm:px-4">
          
          {/* Previous image (left side) */}
          <div 
            className="relative w-[18%] sm:w-[22%] h-[80%] opacity-70 scale-90 cursor-pointer hover:opacity-90 hover:scale-95 transition-all duration-200 z-10"
            onClick={prevSlide}
          >
            <div className="relative w-full h-full bg-white shadow-lg border border-gray-200 overflow-hidden rounded">
              <Image
                src={images[getPrevIndex()].src}
                alt={images[getPrevIndex()].alt}
                fill
                className="object-contain transition-opacity duration-300 ease-out"
                sizes="(max-width: 640px) 18vw, 22vw"
                quality={75}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 hover:bg-black/10 transition-colors duration-200"></div>
            </div>
          </div>

          {/* Main central image */}
          <div className="relative w-[56%] sm:w-[50%] h-[95%] mx-2 sm:mx-4 z-20">
            <div className="relative w-full h-full bg-white shadow-2xl border border-gray-100 overflow-hidden rounded">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain transition-opacity duration-300 ease-out"
                sizes="(max-width: 640px) 56vw, 50vw"
                quality={90}
                priority
              />
            </div>
          </div>

          {/* Next image (right side) */}
          <div 
            className="relative w-[18%] sm:w-[22%] h-[80%] opacity-70 scale-90 cursor-pointer hover:opacity-90 hover:scale-95 transition-all duration-200 z-10"
            onClick={nextSlide}
          >
            <div className="relative w-full h-full bg-white shadow-lg border border-gray-200 overflow-hidden rounded">
              <Image
                src={images[getNextIndex()].src}
                alt={images[getNextIndex()].alt}
                fill
                className="object-contain transition-opacity duration-300 ease-out"
                sizes="(max-width: 640px) 18vw, 22vw"
                quality={75}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 hover:bg-black/10 transition-colors duration-200"></div>
            </div>
          </div>

        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 sm:p-3 shadow-lg border border-gray-200 hover:border-bronze transition-all duration-300 group z-30 ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6 group-hover:text-bronze transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 sm:p-3 shadow-lg border border-gray-200 hover:border-bronze transition-all duration-300 group z-30 ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
          aria-label="Next image"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6 group-hover:text-bronze transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm font-medium z-30">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails/indicators */}
      <div className="flex justify-center mt-6 space-x-2 px-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 transition-all duration-200 ease-out ${
              index === currentIndex 
                ? 'bg-bronze scale-110 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
            } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
} 