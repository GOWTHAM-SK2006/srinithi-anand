'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Camera, Maximize2, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTIST_DATA, TourDiary } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LightboxModal } from '@/components/ui/LightboxModal';

export const TourDiaries: React.FC = () => {
  const [selectedDiary, setSelectedDiary] = useState<TourDiary | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openDestinationGallery = (diary: TourDiary, index = 0) => {
    setSelectedDiary(diary);
    setActiveImageIndex(index);
  };

  const currentLightboxImages = selectedDiary
    ? selectedDiary.images.map((img, i) => ({
        src: img,
        title: `${selectedDiary.title} • Photo ${i + 1}`,
        subtitle: `${selectedDiary.tagline}`,
      }))
    : [];

  return (
    <section id="tour-diaries" className="py-24 sm:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-gold-champagne/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Global Concert Tours"
          title="Music Takes Me Places"
          subtitle="Tour chronicles from international concert journeys and scenic expeditions across Kashmir, Malaysia, Sri Lanka, and Vietnam."
          align="center"
        />

        {/* 4 Premium Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ARTIST_DATA.tourDiaries.map((diary, idx) => (
            <motion.div
              key={diary.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => openDestinationGallery(diary, 0)}
              className="group relative rounded-2xl overflow-hidden bg-bg-card border border-white/10 hover:border-gold-champagne/60 hover:shadow-gold-glow-lg cursor-pointer flex flex-col justify-between transition-all duration-500 h-[480px]"
            >
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={diary.coverImage}
                  alt={diary.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Top Meta Pill */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-champagne/30 text-[10px] uppercase font-bold tracking-wider text-gold-champagne flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  <span>{diary.country}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Details Content */}
              <div className="relative z-10 p-6">
                <h3 className="font-editorial text-3xl text-white font-medium group-hover:text-gold-champagne transition-colors">
                  {diary.title}
                </h3>
                <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
                  {diary.tagline}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-gold-light/90 font-medium flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{diary.images.length} Photographs</span>
                  </span>
                  <span className="text-xs text-gold-champagne group-hover:translate-x-1 transition-transform">
                    View Gallery →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Destination Interactive Gallery Modal */}
      <LightboxModal
        isOpen={Boolean(selectedDiary)}
        onClose={() => setSelectedDiary(null)}
        images={currentLightboxImages}
        currentIndex={activeImageIndex}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />
    </section>
  );
};

