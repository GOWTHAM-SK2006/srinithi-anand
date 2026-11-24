'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Instagram, Youtube, Facebook, MessageCircle, Music2, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';

// 24K Gold Laurel Wreath Icon
const LaurelBranch: React.FC<{ flip?: boolean; className?: string }> = ({ flip = false, className = '' }) => (
  <svg
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-12 text-gold-rich shrink-0 filter drop-shadow-[0_0_8px_rgba(255,223,136,0.6)] ${flip ? '-scale-x-100' : ''} ${className}`}
  >
    <path
      d="M18 4C14 10 9 18 10 44"
      stroke="#FFDF88"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Metallic Leaves */}
    <path d="M16 6C12 7 9 11 11 14C13 14 16 11 16 6Z" fill="url(#laurelGold)" />
    <path d="M19 12C15 13 12 17 14 20C16 20 19 17 19 12Z" fill="url(#laurelGold)" />
    <path d="M17 19C13 20 10 24 12 27C14 27 17 24 17 19Z" fill="url(#laurelGold)" />
    <path d="M16 27C12 28 9 32 11 35C13 35 16 32 16 27Z" fill="url(#laurelGold)" />
    <path d="M14 34C11 35 8 38 10 41C12 41 14 38 14 34Z" fill="url(#laurelGold)" />
    <path d="M12 4C14 1 18 1 18 4C18 7 14 7 12 4Z" fill="url(#laurelGold)" />
    <defs>
      <linearGradient id="laurelGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8DC" />
        <stop offset="50%" stopColor="#ECC880" />
        <stop offset="100%" stopColor="#B38728" />
      </linearGradient>
    </defs>
  </svg>
);

// Spotify Icon SVG
const SpotifyIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-28 pb-12 overflow-hidden bg-[#050505] gold-sparkle-bg"
    >
      {/* Background Golden Waves / Ribbon Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Intense radial golden stage warmth */}
        <div className="absolute top-1/3 right-1/4 w-[850px] h-[850px] bg-gradient-to-br from-gold-rich/20 via-gold-champagne/10 to-transparent rounded-full blur-[170px]" />
        <div className="absolute -top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-gold-champagne/10 to-transparent rounded-full blur-[140px]" />

        {/* Left Golden Waves SVG with Shimmer Gradients */}
        <svg
          className="absolute -bottom-10 -left-20 w-[680px] h-[520px] opacity-40 filter drop-shadow-[0_0_15px_rgba(236,200,128,0.3)]"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 350C50 250 150 380 250 280C350 180 400 320 550 220"
            stroke="url(#goldRibbonHero1)"
            strokeWidth="2"
          />
          <path
            d="M-50 380C60 270 170 390 270 290C370 200 420 340 550 240"
            stroke="url(#goldRibbonHero1)"
            strokeWidth="1.5"
          />
          <path
            d="M-50 320C40 230 130 360 230 260C330 160 380 300 550 200"
            stroke="url(#goldRibbonHero1)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="goldRibbonHero1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF6D8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ECC880" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B38728" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right Golden Waves SVG */}
        <svg
          className="absolute -bottom-10 -right-20 w-[680px] h-[520px] opacity-40 filter drop-shadow-[0_0_15px_rgba(236,200,128,0.3)]"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M550 350C450 250 350 380 250 280C150 180 100 320 -50 220"
            stroke="url(#goldRibbonHero2)"
            strokeWidth="2"
          />
          <path
            d="M550 380C440 270 330 390 230 290C130 200 80 340 -50 240"
            stroke="url(#goldRibbonHero2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="goldRibbonHero2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF6D8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ECC880" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B38728" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* EXPANDED CONTAINER WIDTH */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100vh-7rem)]">
          
          {/* Left Column: Shiny Typography, Tagline, CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-20 pt-4 lg:pt-0"
          >
            {/* Top Subtitle with Glowing Golden Line */}
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <span className="text-gold-shine text-xs sm:text-sm md:text-base tracking-[0.32em] uppercase font-bold font-sans drop-shadow-[0_0_10px_rgba(236,200,128,0.4)]">
                AWARD WINNING SINGER
              </span>
              <div className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-gold-rich via-gold-champagne to-transparent shadow-[0_0_12px_rgba(255,223,136,0.8)]" />
            </div>

            {/* Grand Headline: Srinithi Anand with Subtle Metallic Luster */}
            <h1 className="font-editorial text-7xl sm:text-8xl md:text-[6.5rem] lg:text-[7.2rem] xl:text-[8.5rem] font-normal tracking-tight leading-[0.96] mb-4 sm:mb-5">
              <span className="block text-white hover:text-gold-shine transition-colors duration-500">Srinithi</span>
              <span className="block text-gold-metallic -mt-1 sm:-mt-3 drop-shadow-[0_4px_25px_rgba(223,186,116,0.3)]">Anand</span>
            </h1>

            {/* Disciplines */}
            <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-text-secondary font-medium mb-6 sm:mb-7 flex items-center">
              <span>SINGER</span>
              <span className="text-gold-rich mx-2">✦</span>
              <span>PERFORMER</span>
              <span className="text-gold-rich mx-2">✦</span>
              <span>ARTIST</span>
            </p>

            {/* Tagline Quote */}
            <p className="font-editorial text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.5rem] text-gold-bright italic font-light leading-relaxed mb-4 sm:mb-5 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              &ldquo;A Voice That Creates Unforgettable Moments.&rdquo;
            </p>

            {/* Editorial Description */}
            <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10 font-light">
              A versatile vocalist known for soulful performances across Carnatic, devotional, film and fusion music.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
              {/* Liquid 24K Gold Button */}
              <button
                onClick={() => scrollTo('about')}
                className="px-9 sm:px-11 py-4 sm:py-4.5 rounded-full bg-gold-metallic-shine text-black font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center gap-3 cursor-pointer shadow-gold-glow-button hover:scale-105 transition-all duration-300"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.8]" />
              </button>

              {/* Glowing Outlined Button with Play Icon */}
              <button
                onClick={() => scrollTo('live-performances')}
                className="px-9 sm:px-11 py-4 sm:py-4.5 rounded-full bg-black/60 border-2 border-gold-champagne/60 hover:border-gold-bright hover:bg-gold-champagne/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-[0_0_20px_rgba(223,186,116,0.2)] hover:shadow-[0_0_35px_rgba(223,186,116,0.4)]"
              >
                <div className="w-6 h-6 rounded-full border border-gold-bright flex items-center justify-center group-hover:scale-115 transition-transform bg-gold-champagne/20">
                  <Play className="w-3 h-3 fill-gold-bright text-gold-bright ml-0.5" />
                </div>
                <span>VIEW MY PORTFOLIO</span>
              </button>
            </div>

            {/* Connect Bar with Shiny Rounded Icons */}
            <div className="flex items-center gap-5 pt-2">
              <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-rich font-semibold">
                CONNECT
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={ARTIST_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-champagne/40 bg-black/70 text-gold-champagne hover:text-black hover:bg-gold-metallic-shine flex items-center justify-center transition-all hover:scale-115 shadow-[0_0_12px_rgba(223,186,116,0.2)]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={ARTIST_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-champagne/40 bg-black/70 text-gold-champagne hover:text-black hover:bg-gold-metallic-shine flex items-center justify-center transition-all hover:scale-115 shadow-[0_0_12px_rgba(223,186,116,0.2)]"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={ARTIST_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-champagne/40 bg-black/70 text-gold-champagne hover:text-black hover:bg-gold-metallic-shine flex items-center justify-center transition-all hover:scale-115 shadow-[0_0_12px_rgba(223,186,116,0.2)]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-champagne/40 bg-black/70 text-gold-champagne hover:text-black hover:bg-gold-metallic-shine flex items-center justify-center transition-all hover:scale-115 shadow-[0_0_12px_rgba(223,186,116,0.2)]"
                  aria-label="Spotify"
                >
                  <SpotifyIcon className="w-4 h-4" />
                </a>
                <a
                  href={ARTIST_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-champagne/40 bg-black/70 text-gold-champagne hover:text-black hover:bg-gold-metallic-shine flex items-center justify-center transition-all hover:scale-115 shadow-[0_0_12px_rgba(223,186,116,0.2)]"
                  aria-label="WhatsApp"
                >
                  <Music2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: ZOOMED Srinithi Portrait with MULTI-RING GOLD HALO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center z-10"
          >
            {/* Outer Glowing Golden Aura */}
            <div className="absolute w-[480px] sm:w-[600px] md:w-[700px] lg:w-[760px] xl:w-[840px] h-[480px] sm:h-[600px] md:h-[700px] lg:h-[760px] xl:h-[840px] rounded-full border-2 border-gold-rich/60 shadow-[0_0_140px_rgba(236,200,128,0.5)] pointer-events-none top-1/2 -translate-y-1/2 animate-pulse-subtle" />
            
            {/* Inner Ring with Subtle Golden Dash */}
            <div className="absolute w-[420px] sm:w-[540px] md:w-[630px] lg:w-[680px] xl:w-[760px] h-[420px] sm:h-[540px] md:h-[630px] lg:h-[680px] xl:h-[760px] rounded-full border border-gold-bright/35 pointer-events-none top-1/2 -translate-y-1/2" />
            
            {/* Core Golden Backlight Glow */}
            <div className="absolute w-[380px] sm:w-[500px] lg:w-[600px] h-[380px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-tr from-gold-rich/30 via-gold-champagne/18 to-transparent blur-3xl pointer-events-none top-1/2 -translate-y-1/2" />

            {/* Seamless Large Zoomed Portrait */}
            <div className="relative w-[380px] sm:w-[520px] md:w-[620px] lg:w-[700px] xl:w-[780px] h-[540px] sm:h-[680px] md:h-[760px] lg:h-[820px] xl:h-[880px] flex items-end justify-center">
              <Image
                src={ARTIST_DATA.hero.image}
                alt={ARTIST_DATA.name}
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] scale-105 xl:scale-115 origin-bottom"
                sizes="(max-width: 768px) 380px, (max-width: 1200px) 620px, 780px"
              />

              {/* Bottom Gradient Fade */}
              <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />

              {/* PROMINENT 24K LAUREL WREATH BADGE (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 right-0 sm:right-4 lg:right-0 xl:right-4 z-20 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl glass-gold-card border-2 border-gold-rich/60 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(236,200,128,0.35)] flex items-center gap-4 gold-light-sweep"
              >
                <LaurelBranch flip={false} />
                <div className="text-left">
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-shine font-extrabold block">
                    LIVE CONCERT VOCALIST
                  </span>
                  <span className="text-sm sm:text-base text-white font-semibold tracking-wide block mt-0.5">
                    150+ Stage Performances
                  </span>
                </div>
                <LaurelBranch flip={true} />
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
