'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Film, Disc, Sparkles, Clapperboard, Music2 } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ActingAndAlbums: React.FC = () => {
  const { shortFilms, albums } = ARTIST_DATA.actingAndAlbums;

  return (
    <section id="acting-albums" className="py-24 sm:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Cinematic & Studio Discography"
          title={ARTIST_DATA.actingAndAlbums.heading}
          subtitle="Venturing beyond the microphone into acclaimed cinematic lead roles and prolific recording studio albums."
          align="center"
        />

        {/* Two Clearly Separated Subsections */}
        <div className="space-y-20">
          
          {/* SUBSECTION 1: SHORT FILMS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gold-champagne/10 border border-gold-champagne/30 flex items-center justify-center text-gold-champagne">
                <Clapperboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                  Lead Roles in Short Films
                </h3>
                <p className="text-xs text-text-secondary">
                  Critically recognized dramatic performances portraying central protagonists
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shortFilms.map((film, idx) => (
                <motion.div
                  key={film.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="p-8 rounded-2xl bg-bg-card/70 border border-white/5 hover:border-gold-champagne/40 hover:bg-bg-card transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-gold-champagne/15 border border-gold-champagne/30 text-[10px] uppercase tracking-wider text-gold-champagne font-semibold">
                        {film.role}
                      </span>
                      <Film className="w-4 h-4 text-text-secondary/60 group-hover:text-gold-champagne transition-colors" />
                    </div>

                    <h4 className="font-editorial text-3xl text-white font-medium mb-3 group-hover:text-gold-champagne transition-colors">
                      {film.title}
                    </h4>

                    <p className="text-sm text-text-secondary leading-relaxed font-light">
                      {film.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold-light/80">
                    <span>Central Protagonist</span>
                    <span className="text-gold-champagne">Featured</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SUBSECTION 2: STUDIO ALBUMS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gold-champagne/10 border border-gold-champagne/30 flex items-center justify-center text-gold-champagne">
                <Disc className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                  Studio Albums & Discography
                </h3>
                <p className="text-xs text-text-secondary">
                  Featured playback vocalist across 7 studio albums with celebrated music composers
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-gold-champagne/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Album Cover Card */}
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-champagne/40 bg-black">
                  <Image
                    src={albums.coverImage}
                    alt="Acting and Album Cover"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-gold-champagne text-bg-primary text-xs font-bold uppercase tracking-wider">
                      7 Studio Albums
                    </span>
                    <Music2 className="w-5 h-5 text-gold-champagne" />
                  </div>
                </div>

                {/* Album Information */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-champagne/10 border border-gold-champagne/30 text-gold-champagne text-xs uppercase tracking-widest font-semibold w-fit mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Playback Vocalist</span>
                  </div>

                  <h4 className="font-editorial text-3xl sm:text-4xl text-white font-medium mb-4">
                    Collaboration with Composer John Peter
                  </h4>

                  <p className="text-text-secondary text-base leading-relaxed mb-6 font-light">
                    {albums.highlight}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div className="p-4 rounded-xl bg-bg-secondary/70 border border-white/5">
                      <span className="text-[11px] uppercase tracking-wider text-text-secondary block">Music Director</span>
                      <span className="text-lg font-editorial text-gold-champagne font-medium">John Peter</span>
                      <span className="text-[11px] text-text-secondary block mt-0.5">(Sowcarpettai, Saaya fame)</span>
                    </div>

                    <div className="p-4 rounded-xl bg-bg-secondary/70 border border-white/5">
                      <span className="text-[11px] uppercase tracking-wider text-text-secondary block">Studio Tracks</span>
                      <span className="text-lg font-editorial text-gold-champagne font-medium">7 Recorded Albums</span>
                      <span className="text-[11px] text-text-secondary block mt-0.5">Devotional & Commercial Releases</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

