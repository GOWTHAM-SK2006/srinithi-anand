'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Compass, Radio, Mic2, Award } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Animated Counter Component with Shiny 24K Gold Text
const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-editorial font-bold text-5xl sm:text-6xl md:text-7xl text-gold-shine tracking-tight drop-shadow-[0_4px_15px_rgba(236,200,128,0.4)]">
      {count}
      <span className="text-gold-bright text-4xl sm:text-5xl">{suffix}</span>
    </span>
  );
};

export const MusicalJourney: React.FC = () => {
  const genreIcons = [Mic2, Compass, Radio, Sparkles];

  return (
    <section id="musical-journey" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Stage Aura */}
      <div className="absolute inset-0 bg-radial-gold-stage pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <SectionHeading
          badge="Milestones & Acclaim"
          title="Musical Journey"
          subtitle="A distinguished career marked by hundreds of grand orchestral concerts, prestigious broadcasts, and versatile musical mastery."
          align="center"
        />

        {/* 4 Animated Counter Statistics Cards with Gold Light Sweep & Glass Surface */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
          {ARTIST_DATA.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl glass-gold-card border-gold-glow gold-light-sweep text-center flex flex-col items-center justify-center group"
            >
              <div className="mb-3">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mt-2 group-hover:text-gold-bright transition-colors">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-2 max-w-[220px] font-light leading-relaxed">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Musical Versatility Cards */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-shine font-bold">
              ARTISTIC RANGE
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-medium mt-1">
              Versatility Across Musical Genres
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ARTIST_DATA.versatility.map((item, idx) => {
              const Icon = genreIcons[idx % genreIcons.length];
              return (
                <motion.div
                  key={item.genre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="p-7 sm:p-8 rounded-3xl glass-gold-card border-gold-glow gold-light-sweep flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gold-champagne/15 border border-gold-champagne/40 flex items-center justify-center text-gold-bright mb-6 group-hover:scale-110 group-hover:bg-gold-metallic-shine group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(236,200,128,0.25)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3 group-hover:text-gold-bright transition-colors">
                      {item.genre}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-rich font-medium">
                    <span>Performance Ready</span>
                    <span className="w-2 h-2 rounded-full bg-gold-champagne shadow-[0_0_8px_#ECC880]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
