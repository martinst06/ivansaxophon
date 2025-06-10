'use client';

import { useState, useRef, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

interface OfferGridProps {
  lang: Language;
}

const OfferGrid = ({ lang }: OfferGridProps) => {
  const t = translations[lang] || translations.en;
  
  const offers = [
    {
      id: 'acoustic',
      title: t.offers.acoustic.title,
      description: t.offers.acoustic.description,
      audioFiles: [
        { file: '/audio/ACOUSTICS/Yesterday - Ivan_Saxophon.wav', title: 'Yesterday' },
        { file: '/audio/ACOUSTICS/Watermelon Sugar - Ivan_Saxophon.m4a', title: 'Watermelon Sugar' },
        { file: '/audio/ACOUSTICS/Valerie - Ivan_Saxophon.m4a', title: 'Valerie' },
        { file: '/audio/ACOUSTICS/Can\'t Take My Eyes Off You - Ivan_Saxophon.m4a', title: 'Can\'t Take My Eyes Off You' }
      ]
    },
    {
      id: 'hits',
      title: t.offers.hits.title,
      description: t.offers.hits.description,
      audioFiles: [
        { file: '/audio/HITS/September - Ivan_Saxophon.wav', title: 'September' },
        { file: '/audio/HITS/Sara Perche Ti Amo - Ivan_Saxophon.wav', title: 'Sara Perche Ti Amo' },
        { file: '/audio/HITS/Espresso - Ivan_Saxophon.m4a', title: 'Espresso' },
        { file: '/audio/HITS/Ain\'t Nobody - Ivan_Saxophon.m4a', title: 'Ain\'t Nobody' }
      ]
    },
    {
      id: 'jazz',
      title: t.offers.jazz.title,
      description: t.offers.jazz.description,
      audioFiles: [
        { file: '/audio/JAZZ/Summertime - Ivan_Saxophon.wav', title: 'Summertime' },
        { file: '/audio/JAZZ/Sandu - Ivan_Saxophon.m4a', title: 'Sandu' },
        { file: '/audio/JAZZ/Blue Bossa - Ivan_Saxophon.wav', title: 'Blue Bossa' },
        { file: '/audio/JAZZ/Autumn Leaves - Ivan_Saxophon.wav', title: 'Autumn Leaves' }
      ]
    },
    {
      id: 'sax-dj',
      title: t.offers.saxDj.title,
      description: t.offers.saxDj.description,
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
  const [loadedAudioFiles, setLoadedAudioFiles] = useState<Set<string>>(new Set());
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  // Load audio file on demand
  const loadAudioFile = (audioKey: string, audioFile: string) => {
    if (!loadedAudioFiles.has(audioKey)) {
      const audio = audioRefs.current[audioKey];
      if (audio && !audio.src) {
        audio.src = audioFile;
        audio.preload = 'metadata';
        setLoadedAudioFiles(prev => new Set(prev).add(audioKey));
      }
    }
  };

  const toggleAudio = (offerId: string) => {
    const audioKey = `${offerId}-${selectedSongs[offerId]}`;
    const offer = offers.find(o => o.id === offerId);
    
    if (offer?.audioFiles) {
      const audioFile = offer.audioFiles[selectedSongs[offerId]];
      // Load audio file if not already loaded
      loadAudioFile(audioKey, audioFile.file);
    }

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
      audio.play().catch(e => console.log('Audio play failed:', e));
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
    // Setup audio event listeners for loaded audio elements
    const currentAudioRefs = audioRefs.current;
    
    Object.values(currentAudioRefs).forEach(audio => {
      if (audio && audio.src) {
        const handleEnded = () => {
          setIsPlaying(false);
          setCurrentPlaying(null);
        };
        
        const handleError = () => {
          setIsPlaying(false);
          setCurrentPlaying(null);
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        
        // Cleanup function for this audio element
        return () => {
          audio.removeEventListener('ended', handleEnded);
          audio.removeEventListener('error', handleError);
        };
      }
    });

    return () => {
      // Cleanup all audio on unmount
      Object.values(currentAudioRefs).forEach(audio => {
        if (audio) {
          audio.pause();
        }
      });
    };
  }, [selectedSongs, loadedAudioFiles]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white border-2 border-charcoal/10 p-8 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Title */}
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-charcoal text-center">
                  {offer.title}
                </h2>
              </div>

              {/* Audio Preview - Only for first 3 offers */}
              {offer.audioFiles && (
                <div className="mb-6 p-4 bg-white border border-bronze/30">
                  {/* Song Selection */}
                  <div className="mb-4">
                    <p className="text-sm text-charcoal/60 mb-2">Choose a song:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {offer.audioFiles.map((audioFile, songIndex) => (
                        <button
                          key={songIndex}
                          onClick={() => changeSong(offer.id, songIndex)}
                          className={`text-xs p-2 border transition-colors duration-200 text-left ${
                            selectedSongs[offer.id] === songIndex
                              ? 'bg-bronze text-white border-bronze'
                              : 'bg-white text-charcoal border-charcoal/20 hover:border-bronze/50'
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
                      className="w-12 h-12 border-2 border-bronze hover:bg-bronze hover:border-bronze text-bronze hover:text-white flex items-center justify-center transition-all duration-200"
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

                  {/* Audio Elements - Create without src, load on demand */}
                  {offer.audioFiles.map((audioFile, songIndex) => (
                    <audio
                      key={songIndex}
                      ref={(el) => {
                        if (el) audioRefs.current[`${offer.id}-${songIndex}`] = el;
                      }}
                      preload="none"
                    />
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6 text-justify">
                {offer.description}
              </p>

              {/* CTA Button */}
              <button className="w-full border-2 border-bronze text-bronze hover:bg-bronze hover:text-white font-medium py-4 px-6 transition-all duration-300 transform hover:-translate-y-0.5 mt-auto">
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