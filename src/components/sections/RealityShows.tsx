'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Star, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const RealityShows: React.FC = () => {
  return (
    <section id="reality-shows" className="py-24 sm:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="National & State Contests"
          title="Reality Shows"
          subtitle="A competitive journey marked by title championships, finalist honors, and celebrated television appearances across premier singing leagues."
          align="center"
        />

        {/* 5 Reality Show Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTIST_DATA.realityShows.map((show, idx) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-bg-card border border-white/10 hover:border-gold-champagne/60 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] bg-black/60 overflow-hidden">
                <Image
                  src={show.image}
                  alt={`${show.channel} - ${show.show}`}
                  fill
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-85" />

                {/* Top Channel Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold-champagne/30 text-[10px] uppercase font-bold tracking-wider text-gold-champagne">
                  {show.channel}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-editorial text-2xl text-white font-medium group-hover:text-gold-champagne transition-colors">
                    {show.show}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-gold-champagne/10 border border-gold-champagne/20">
                    <Trophy className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span className="text-xs font-medium text-gold-light">
                      {show.achievement}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-text-secondary/70">
                  <span>Television Competition</span>
                  <span className="text-gold-champagne font-semibold">Featured</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

