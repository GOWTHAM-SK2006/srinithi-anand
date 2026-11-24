'use client';

import React from 'react';
import { ExternalLink, Video, Instagram, Youtube, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-gold-champagne/10 via-gold-muted/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        
        <SectionHeading
          badge="Live Concert Media & Reels"
          title="Concert Archives & Reels"
          subtitle="Watch high-definition live stage performances, grand orchestral concerts, and signature Instagram vocal reels."
          align="center"
        />

        {/* Featured YouTube Concert Video */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-gold-champagne/35 bg-bg-card shadow-2xl">
          <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[520px]">
            <iframe
              src="https://www.youtube.com/embed/C6o4ZvbRgag?si=F2_LbkFrPulLFQdL"
              title="Srinithi Anand Live Concert"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-6 sm:p-8 bg-bg-card/95 border-t border-gold-champagne/25 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold-champagne font-bold block mb-1">
                Featured YouTube Broadcast
              </span>
              <h4 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                Grand Live Stage Performance – Melodic Showcase
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Performed with full live orchestra to a packed auditorium.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@anandsindu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-gold-metallic-shine text-black text-xs font-bold uppercase tracking-[0.18em] hover:scale-105 transition-all flex items-center justify-center gap-2 self-start sm:self-auto shadow-gold-glow"
            >
              <Youtube className="w-4 h-4" />
              <span>Visit YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Performance Recordings Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gold-champagne/10 border border-gold-champagne/30 flex items-center justify-center text-gold-champagne">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                Live Orchestral Recordings
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Original video recordings from grand musical tours and orchestra stages
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ARTIST_DATA.videos.slice(1, 4).map((vid) => (
              <div
                key={vid.id}
                className="rounded-2xl overflow-hidden bg-bg-card border border-gold-champagne/25 hover:border-gold-champagne hover:shadow-gold-glow transition-all duration-300 flex flex-col shadow-lg group"
              >
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={vid.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-editorial text-xl text-white font-medium group-hover:text-gold-bright transition-colors">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1.5 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Reels Highlights */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5 text-gold-champagne text-xs sm:text-sm uppercase tracking-widest font-semibold">
              <Instagram className="w-4 h-4 text-gold-champagne" />
              <span>Instagram Portfolio Highlights</span>
            </div>
            <a
              href={ARTIST_DATA.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-text-secondary hover:text-gold-champagne flex items-center gap-1.5 transition-colors font-medium"
            >
              <span>@srinithi_anand</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ARTIST_DATA.instagramReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-bg-card border border-gold-champagne/20 hover:border-gold-champagne/60 hover:shadow-gold-glow hover:bg-bg-card-hover transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-[1.5px] shrink-0">
                    <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-editorial text-xl text-white font-medium group-hover:text-gold-bright transition-colors">
                      {reel.title}
                    </h5>
                    <p className="text-xs text-text-secondary mt-0.5">
                      View original reel on Instagram
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-gold-champagne group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
