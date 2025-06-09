'use client';

import { useState, useRef, useEffect } from 'react';
import { Language } from '@/lib/translations';

interface OfferGridProps {
  lang: Language;
}

const OfferGrid = ({ lang }: OfferGridProps) => {
  const offers = [
    {
      id: 'acoustic',
      title: 'Acoustic',
      description: 'Intimate acoustic saxophone performances perfect for quiet moments and elegant gatherings. Pure, unprocessed sound that connects directly with your soul.',
      features: [
        'Solo saxophone performances',
        'Unplugged intimate sessions',
        'Classical and contemporary pieces',
        'Perfect for ceremonies and quiet venues'
      ],
      audioFiles: [
        { file: '/audio/ACOUSTICS/Yesterday - Ivan_Saxophon.wav', title: 'Yesterday' },
        { file: '/audio/ACOUSTICS/Watermelon Sugar - Ivan_Saxophon.m4a', title: 'Watermelon Sugar' },
        { file: '/audio/ACOUSTICS/Valerie - Ivan_Saxophon.m4a', title: 'Valerie' },
        { file: '/audio/ACOUSTICS/Can\'t Take My Eyes Off You - Ivan_Saxophon.m4a', title: 'Can\'t Take My Eyes Off You' }
      ]
    },
    {
      id: 'hits',
      title: 'Hits',
      description: 'Popular songs and chart-toppers reimagined for saxophone. From yesterday\'s classics to today\'s favorites, bringing familiar melodies to life.',
      features: [
        'Top 40 hits arranged for saxophone',
        'Popular music from all decades',  
        'Recognizable melodies everyone loves',
        'Perfect for parties and celebrations'
      ],
      audioFiles: [
        { file: '/audio/HITS/September - Ivan_Saxophon.wav', title: 'September' },
        { file: '/audio/HITS/Sara Perche Ti Amo - Ivan_Saxophon.wav', title: 'Sara Perche Ti Amo' },
        { file: '/audio/HITS/Espresso - Ivan_Saxophon.m4a', title: 'Espresso' },
        { file: '/audio/HITS/Ain\'t Nobody - Ivan_Saxophon.m4a', title: 'Ain\'t Nobody' }
      ]
    },
    {
      id: 'jazz',
      title: 'Jazz',
      description: 'Smooth jazz standards, bebop classics, and contemporary jazz fusion. The saxophone\'s natural home in sophisticated musical expression.',
      features: [
        'Classic jazz standards',
        'Smooth jazz and fusion',
        'Improvisation and interaction',
        'Perfect for cocktails and dining'
      ],
      audioFiles: [
        { file: '/audio/JAZZ/Summertime - Ivan_Saxophon.wav', title: 'Summertime' },
        { file: '/audio/JAZZ/Sandu - Ivan_Saxophon.m4a', title: 'Sandu' },
        { file: '/audio/JAZZ/Blue Bossa - Ivan_Saxophon.wav', title: 'Blue Bossa' },
        { file: '/audio/JAZZ/Autumn Leaves - Ivan_Saxophon.wav', title: 'Autumn Leaves' }
      ]
    },
    {
      id: 'sax-dj',
      title: 'Sax / DJ',
      description: 'The perfect fusion of live saxophone with DJ mixing. Modern entertainment that combines electronic beats with live instrumental performance.',
      features: [
        'Live sax over DJ sets',
        'Electronic and house music backing',
        'Dynamic party atmosphere',
        'Perfect for clubs and modern events'
      ]
    }
  ];

  // Audio player state
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSongs, setSelectedSongs] = useState<{ [key: string]: number }>({
    acoustic: 0,
    hits: 0,
    jazz: 0
  });
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const toggleAudio = (offerId: string) => {
    const audioKey = `${offerId}-${selectedSongs[offerId]}`;
    const audio = audioRefs.current[audioKey];
    if (!audio) return;

    if (currentPlaying === audioKey && isPlaying) {
      // Pause current audio
      audio.pause();
      setIsPlaying(false);
    } else {
      // Stop any currently playing audio
      Object.values(audioRefs.current).forEach(a => {
        if (a) {
          a.pause();
          a.currentTime = 0;
        }
      });
      
      // Play selected audio
      audio.play();
      setCurrentPlaying(audioKey);
      setIsPlaying(true);
    }
  };

  const changeSong = (offerId: string, songIndex: number) => {
    // Stop current audio if playing
    if (isPlaying && currentPlaying?.startsWith(offerId)) {
      const currentAudio = audioRefs.current[currentPlaying];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentPlaying(null);
    }
    
    setSelectedSongs(prev => ({
      ...prev,
      [offerId]: songIndex
    }));
  };

  useEffect(() => {
    // Setup audio event listeners for all audio elements
    const setupAudioListeners = () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          const handleEnded = () => {
            setIsPlaying(false);
            setCurrentPlaying(null);
          };
          audio.addEventListener('ended', handleEnded);
        }
      });
    };

    setupAudioListeners();

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.removeEventListener('ended', () => {});
        }
      });
    };
  }, [selectedSongs]);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-beige/20 via-white to-bronze-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {offers.map((offer, index) => (
            <div 
              key={offer.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50"
            >
              {/* Title */}
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-charcoal">
                  {offer.title}
                </h2>
              </div>

              {/* Audio Preview - Only for first 3 offers */}
              {offer.audioFiles && (
                <div className="mb-6 p-4 bg-bronze/5 rounded-xl border border-bronze/20">
                  {/* Song Selection */}
                  <div className="mb-4">
                    <p className="text-sm text-charcoal/60 mb-2">Choose a song:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {offer.audioFiles.map((audioFile, songIndex) => (
                        <button
                          key={songIndex}
                          onClick={() => changeSong(offer.id, songIndex)}
                          className={`text-xs p-2 rounded-lg transition-colors duration-200 text-left ${
                            selectedSongs[offer.id] === songIndex
                              ? 'bg-bronze text-white'
                              : 'bg-white/60 text-charcoal hover:bg-white/80'
                          }`}
                        >
                          {audioFile.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-charcoal/60 mb-1">Now playing:</p>
                      <p className="font-medium text-charcoal">
                        {offer.audioFiles[selectedSongs[offer.id]]?.title}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleAudio(offer.id)}
                      className="w-12 h-12 bg-bronze hover:bg-bronze-dark text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {currentPlaying === `${offer.id}-${selectedSongs[offer.id]}` && isPlaying ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Audio Elements */}
                  {offer.audioFiles.map((audioFile, songIndex) => (
                    <audio
                      key={songIndex}
                      ref={(el) => {
                        if (el) audioRefs.current[`${offer.id}-${songIndex}`] = el;
                      }}
                      src={audioFile.file}
                      preload="metadata"
                    />
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                {offer.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {offer.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-bronze rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-bronze to-bronze-dark text-white font-medium py-4 px-6 rounded-xl hover:from-bronze-dark hover:to-bronze transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More About {offer.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferGrid;
export type { OfferGridProps }; 