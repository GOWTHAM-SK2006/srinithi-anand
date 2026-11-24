'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tv, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Television: React.FC = () => {
  return (
    <section id="television" className="py-24 sm:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-champagne/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Broadcast History"
          title="Television Performances"
          subtitle="Celebrated televised concerts, channel features, and landmark musical tributes broadcast across premier South Indian networks."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Featured Broadcast Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-[460px] sm:h-[500px] rounded-2xl overflow-hidden border border-gold-champagne/30 shadow-2xl bg-bg-card group">
              <Image
                src="/images/television/tv.jpg"
                alt="Television Performances - Srinithi Anand"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-85" />

              {/* Broadcast Live Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-red-600/90 text-white text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Televised Broadcasts</span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-gold-champagne/30">
                <h4 className="font-editorial text-xl text-white font-medium">
                  Prime-Time Musical Features
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Reaching millions of viewers across Mega TV, Sankara TV, Colors Tamil & Kalaignar TV.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline / Appearance Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {ARTIST_DATA.television.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-bg-card/70 border border-white/5 hover:border-gold-champagne/40 hover:bg-bg-card transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-champagne/10 border border-gold-champagne/25 flex items-center justify-center text-gold-champagne group-hover:scale-110 transition-transform">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-editorial text-2xl text-white font-medium group-hover:text-gold-champagne transition-colors">
                        {item.channel}
                      </h4>
                      <p className="text-xs text-gold-light/90 font-medium">
                        {item.program}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-gold-champagne/10 border border-gold-champagne/20 text-[10px] uppercase tracking-wider text-gold-champagne font-semibold">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed pl-0 sm:pl-13">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

