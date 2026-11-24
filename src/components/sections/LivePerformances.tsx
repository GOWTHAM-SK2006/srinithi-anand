'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles, ArrowRight, ChevronUp, Music } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LightboxModal } from '@/components/ui/LightboxModal';

export const LivePerformances: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = ARTIST_DATA.livePerformances;
  const initialCount = 4;
  const displayedPhotos = expanded ? photos : photos.slice(0, initialCount);

  const lightboxImages = photos.map((item) => ({
    src: item.image,
    title: item.title,
    subtitle: item.subtitle || 'Live Concert Performance',
  }));

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="live-performances" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-gold-champagne/10 via-gold-muted/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        
        <SectionHeading
          badge="Live Stage Concerts"
          title="Live Performances"
          subtitle="Captivating concert evenings, grand orchestral spotlights, and electrifying stage moments witnessed by thousands."
          align="center"
        />

        {/* Gallery Info Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gold-bright font-medium">
            <Music className="w-4 h-4 text-gold-champagne" />
            <span>
              Showing {displayedPhotos.length} of {photos.length} Concert Photographs
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-text-secondary/70">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span>Click any image for fullscreen preview</span>
          </div>
        </div>

        {/* Responsive Grid: 4 Large Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-bg-card border border-gold-champagne/25 hover:border-gold-champagne hover:shadow-gold-glow-lg transition-all duration-500 cursor-pointer aspect-[3/4] flex flex-col justify-end"
              >
                {/* Large Photo */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Vignette & Gold Frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 border border-gold-champagne/15 rounded-2xl pointer-events-none group-hover:border-gold-champagne/50 transition-colors" />

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-champagne/40 text-gold-bright opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Card Content Footer */}
                <div className="relative p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-champagne font-bold block mb-1">
                    {photo.subtitle || 'Concert Highlight'}
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl text-white font-medium line-clamp-1 group-hover:text-gold-bright transition-colors">
                    {photo.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All / Collapse Button */}
        <div className="mt-14 text-center">
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="px-10 py-4 rounded-full bg-gold-metallic-shine text-black font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-gold-glow-button hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
            >
              <span>VIEW ALL PERFORMANCES ({photos.length} PHOTOS)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          ) : (
            <button
              onClick={() => {
                setExpanded(false);
                const el = document.getElementById('live-performances');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-9 py-3.5 rounded-full bg-bg-card border border-gold-champagne/50 hover:border-gold-champagne text-gold-champagne hover:bg-gold-champagne/10 font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer shadow-lg"
            >
              <span>COLLAPSE TO 4 PHOTOS</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={currentIndex}
        onNavigate={(newIndex) => setCurrentIndex(newIndex)}
      />
    </section>
  );
};

