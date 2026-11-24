'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, FileCheck, Medal, Sparkles, Maximize2, ArrowRight, ChevronUp, Award } from 'lucide-react';
import { ARTIST_DATA, AwardItem } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LightboxModal } from '@/components/ui/LightboxModal';

type AwardCategoryKey = 'trophies' | 'certificates' | 'competitions' | 'specialRecognitions';

interface CategoryTab {
  key: AwardCategoryKey;
  label: string;
  icon: React.ElementType;
  badge: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { key: 'trophies', label: 'Awards & Trophies', icon: Trophy, badge: 'Honors' },
  { key: 'certificates', label: 'Certificates', icon: FileCheck, badge: 'Collegiate' },
  { key: 'competitions', label: 'Competition Achievements', icon: Medal, badge: 'Statewide' },
  { key: 'specialRecognitions', label: 'Special Recognitions', icon: Award, badge: 'Tributes' },
];

export const Awards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AwardCategoryKey>('trophies');
  const [expandedCategories, setExpandedCategories] = useState<Record<AwardCategoryKey, boolean>>({
    trophies: false,
    certificates: false,
    competitions: false,
    specialRecognitions: false,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentCategoryItems = ARTIST_DATA.awardsCategories[activeTab];
  const isExpanded = expandedCategories[activeTab];
  const displayedItems = isExpanded ? currentCategoryItems : currentCategoryItems.slice(0, 4);

  const toggleExpand = (cat: AwardCategoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const lightboxImages = currentCategoryItems.map((item) => ({
    src: item.image,
    title: item.title,
    subtitle: `${item.category}${item.year ? ` • ${item.year}` : ''}${item.description ? ` — ${item.description}` : ''}`,
  }));

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="awards" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-gold-champagne/12 via-gold-muted/5 to-transparent rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Honors & Accolades"
          title="Awards & Recognition"
          subtitle="Distinguished state honors, prestigious collegiate championships, and verified merit certificates."
          align="center"
        />

        {/* FEATURED SPOTLIGHT: Kalai Chudar Award 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 rounded-3xl bg-gradient-to-br from-bg-card via-[#111111] to-bg-card border border-gold-champagne/35 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-champagne/15 rounded-full blur-[110px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Featured Image */}
            <div
              onClick={() => handleOpenLightbox(0)}
              className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-gold-champagne/50 bg-black shadow-2xl cursor-pointer group/img"
            >
              <Image
                src="/images/awards/4.jpg"
                alt="Kalai Chudar Award 2025"
                fill
                priority
                className="object-cover object-center group-hover/img:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

              {/* Badge on Featured Image */}
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gold-metallic-shine text-black text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                <Trophy className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Featured Honor</span>
              </div>

              <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Featured Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-champagne/10 border border-gold-champagne/40 text-gold-champagne text-xs uppercase tracking-widest font-semibold w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                <span className="text-gold-bright">Statewide Cultural Landmark • 2025</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-4 leading-tight">
                Kalai Chudar Award 2025
              </h3>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 font-light">
                Conferred upon Srinithi Anand in celebration of distinguished vocal virtuosity, emotive stage presence, and outstanding artistry across premier live concerts and symphonic productions.
              </p>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-text-secondary/70 block">Honor Title</span>
                  <span className="font-editorial text-xl sm:text-2xl text-gold-champagne font-medium mt-0.5 block">Kalai Chudar</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-text-secondary/70 block">Conferred Year</span>
                  <span className="font-editorial text-xl sm:text-2xl text-gold-champagne font-medium mt-0.5 block">2025 Annual</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-text-secondary/70 block">Distinction</span>
                  <span className="font-editorial text-xl sm:text-2xl text-gold-champagne font-medium mt-0.5 block">Excellence in Music</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 DISTINCT CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            const count = ARTIST_DATA.awardsCategories[tab.key].length;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-gold-metallic-shine text-black shadow-gold-glow-button scale-105'
                    : 'bg-bg-card border border-gold-champagne/25 text-text-secondary hover:text-white hover:border-gold-champagne/60 hover:bg-bg-card-hover'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-gold-champagne'}`} />
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gold-bright'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CATEGORY HEADER & COUNTER */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gold-bright font-medium">
            <Trophy className="w-4 h-4 text-gold-champagne" />
            <span>
              Showing {displayedItems.length} of {currentCategoryItems.length} {CATEGORY_TABS.find((t) => t.key === activeTab)?.label}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-text-secondary/70">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
            <span>Click any image to view details fullscreen</span>
          </div>
        </div>

        {/* 4-COLUMN DESKTOP GRID WITH LARGE ATTRACTIVE PHOTOGRAPHS */}
        <motion.div
          layout
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-bg-card border border-gold-champagne/25 hover:border-gold-champagne hover:shadow-gold-glow-lg transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* LARGE PHOTOGRAPH CONTAINER */}
                <div className={`relative w-full overflow-hidden bg-black/70 ${activeTab === 'certificates' ? 'aspect-[4/3] p-2' : 'aspect-[4/3]'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className={`transition-transform duration-700 ease-out ${
                      activeTab === 'certificates'
                        ? 'object-contain object-center group-hover:scale-105'
                        : 'object-cover object-center group-hover:scale-108'
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Vignette & Frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 border border-gold-champagne/15 rounded-t-2xl pointer-events-none group-hover:border-gold-champagne/50 transition-colors" />

                  {/* Year Tag */}
                  {item.year && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-gold-metallic-shine text-black text-[10px] font-bold tracking-wider shadow">
                      {item.year}
                    </div>
                  )}

                  {/* Fullscreen Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md border border-gold-champagne/40 text-gold-bright opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-bg-card">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold-champagne font-bold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-gold-bright transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-text-secondary/80 group-hover:text-white transition-colors">
                    <span>Inspect Fullscreen</span>
                    <span className="text-gold-champagne font-semibold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW ALL BUTTON FOR ACTIVE CATEGORY */}
        {currentCategoryItems.length > 4 && (
          <div className="mt-14 text-center">
            {!isExpanded ? (
              <button
                onClick={() => toggleExpand(activeTab)}
                className="px-10 py-4 rounded-full bg-gold-metallic-shine text-black font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-gold-glow-button hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
              >
                <span>
                  VIEW ALL {CATEGORY_TABS.find((t) => t.key === activeTab)?.label.toUpperCase()} ({currentCategoryItems.length} PHOTOS)
                </span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            ) : (
              <button
                onClick={() => {
                  toggleExpand(activeTab);
                  const el = document.getElementById('awards');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-9 py-3.5 rounded-full bg-bg-card border border-gold-champagne/50 hover:border-gold-champagne text-gold-champagne hover:bg-gold-champagne/10 font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer shadow-lg"
              >
                <span>COLLAPSE TO 4 PHOTOS</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={activeImageIndex}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />
    </section>
  );
};
