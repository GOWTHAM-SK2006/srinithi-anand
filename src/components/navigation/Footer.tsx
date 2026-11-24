'use client';

import React from 'react';
import { Music, Phone, Mail, Instagram, Youtube, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';

const FOOTER_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Awards', href: '#awards' },
  { label: 'Television', href: '#television' },
  { label: 'Acting & Albums', href: '#acting-albums' },
  { label: 'Tour Diaries', href: '#tour-diaries' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gold-champagne/20 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-champagne/40 flex items-center justify-center bg-gold-champagne/10">
                <Music className="w-4 h-4 text-gold-champagne" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-medium tracking-wider text-white">
                  SRINITHI ANAND
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-champagne font-medium -mt-1">
                  Singer | Performer | Artist
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-sm max-w-sm font-light leading-relaxed mb-6">
              Official portfolio of Srinithi Anand. Bringing unforgettable vocal experiences, classical refinement, and stage mastery to audiences worldwide.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={ARTIST_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 text-text-secondary hover:text-gold-champagne hover:border-gold-champagne/40 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_DATA.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 text-text-secondary hover:text-gold-champagne hover:border-gold-champagne/40 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 text-text-secondary hover:text-gold-champagne hover:border-gold-champagne/40 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 text-text-secondary hover:text-gold-champagne hover:border-gold-champagne/40 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-semibold mb-6">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs text-text-secondary hover:text-gold-champagne transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-champagne font-semibold mb-6">
              Official Inquiries
            </h4>
            <div className="space-y-3 text-xs text-text-secondary">
              <a
                href={`tel:${ARTIST_DATA.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{ARTIST_DATA.phone}</span>
              </a>
              <a
                href={`mailto:${ARTIST_DATA.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gold-champagne" />
                <span>{ARTIST_DATA.email}</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs text-gold-champagne hover:text-gold-light uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-secondary/70 gap-4">
          <p>© 2026 Srinithi Anand. All Rights Reserved.</p>
          <p className="text-[11px] font-light">
            Designed with cinematic luxury & precision
          </p>
        </div>

      </div>
    </footer>
  );
};

