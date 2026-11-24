'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Legends: React.FC = () => {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#060606] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-gold-champagne/12 via-gold-muted/5 to-transparent rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        <SectionHeading
          badge="Esteemed Collaborations"
          title="Stage Shared with Legends"
          subtitle="Honored to have shared iconic musical stages with the most revered maestros and playback icons of Indian cinema."
          align="center"
        />

        {/* 4 Legend Cards with Glassmorphism, 24K Gold Accents & Light Sweep */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ARTIST_DATA.legends.map((legend, index) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative rounded-3xl overflow-hidden glass-gold-card border-gold-glow gold-light-sweep flex flex-col justify-between"
            >
              {/* Image Frame with Consistent 4:5 Aspect Ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-black/60">
                <Image
                  src={legend.image}
                  alt={legend.name}
                  fill
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 border border-gold-champagne/20 rounded-t-3xl pointer-events-none group-hover:border-gold-champagne/60 transition-colors" />

                {/* Legend Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-champagne/50 text-[11px] uppercase tracking-wider text-gold-bright font-bold shadow-lg">
                  Legend
                </div>
              </div>

              {/* Text Information Content */}
              <div className="p-7 flex flex-col flex-grow justify-between bg-black/40">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium group-hover:text-gold-bright transition-colors">
                    {legend.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.22em] text-gold-rich font-semibold mt-1">
                    {legend.role}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed font-light">
                    {legend.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-secondary/80 group-hover:text-white transition-colors">
                  <span>Grand Stage Collab</span>
                  <span className="text-gold-champagne font-bold group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
