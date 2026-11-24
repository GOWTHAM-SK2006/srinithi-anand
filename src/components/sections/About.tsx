'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, Mic } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gold-champagne/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <SectionHeading
          badge="Artist Profile"
          title={ARTIST_DATA.about.heading}
          subtitle={ARTIST_DATA.about.subheading}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artistic Image Composition with Gold Borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Background Decorative Shape 1 */}
            <div className="absolute -top-6 -left-6 w-36 h-36 opacity-30 pointer-events-none">
              <Image
                src={ARTIST_DATA.about.shapes[0]}
                alt="Decorative Shape"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Portrait Card */}
            <div className="relative w-full max-w-md h-[480px] sm:h-[540px] rounded-3xl overflow-hidden glass-gold-card border-gold-glow shadow-2xl group gold-light-sweep">
              <Image
                src={ARTIST_DATA.about.image}
                alt="About Srinithi Anand"
                fill
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
              {/* Gold Framing Accent */}
              <div className="absolute inset-4 border border-gold-champagne/30 rounded-2xl pointer-events-none" />

              {/* Bottom Quote Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-gold-champagne/40 shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gold-champagne/20 border border-gold-champagne/50 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(236,200,128,0.3)]">
                    <Mic className="w-5 h-5 text-gold-bright" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-shine font-bold">
                      STARTED AT AGE 7
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5 font-light">
                      A lifetime of dedicated vocal mastery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Shape 2 */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-30 pointer-events-none">
              <Image
                src={ARTIST_DATA.about.shapes[1]}
                alt="Decorative Shape"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Biography & Persona Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Editorial Lead Paragraph */}
            <h3 className="font-editorial text-3xl sm:text-4xl text-gold-bright font-medium mb-6 leading-relaxed">
              A passionate voice sculpted by dedication, versatility, and heartfelt emotion.
            </h3>

            <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-light">
              <p>{ARTIST_DATA.about.bioParagraph1}</p>
              <p>{ARTIST_DATA.about.bioParagraph2}</p>
            </div>

            {/* Creative Personality Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 pt-8 border-t border-white/10">
              
              <div className="p-5 rounded-2xl glass-gold-card border-gold-glow gold-light-sweep group">
                <div className="w-10 h-10 rounded-xl bg-gold-champagne/15 border border-gold-champagne/40 flex items-center justify-center text-gold-bright mb-4 group-hover:scale-110 group-hover:bg-gold-metallic-shine group-hover:text-black transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-xl text-white font-medium">Musical Virtuoso</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-light">
                  Classical foundation in Carnatic with versatile playback delivery.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-gold-card border-gold-glow gold-light-sweep group">
                <div className="w-10 h-10 rounded-xl bg-gold-champagne/15 border border-gold-champagne/40 flex items-center justify-center text-gold-bright mb-4 group-hover:scale-110 group-hover:bg-gold-metallic-shine group-hover:text-black transition-all">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-xl text-white font-medium">Makeup Artistry</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-light">
                  Creative eye for aesthetics, glamour, and visual stage presentation.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-gold-card border-gold-glow gold-light-sweep group">
                <div className="w-10 h-10 rounded-xl bg-gold-champagne/15 border border-gold-champagne/40 flex items-center justify-center text-gold-bright mb-4 group-hover:scale-110 group-hover:bg-gold-metallic-shine group-hover:text-black transition-all">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-xl text-white font-medium">Culinary Passion</h4>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-light">
                  An appreciation for craft, flavors, and mindful creative living.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
