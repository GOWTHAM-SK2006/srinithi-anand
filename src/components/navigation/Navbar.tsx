'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PERFORMANCES', href: '#live-performances' },
  { label: 'CELEBRITIES', href: '#celebrities' },
  { label: 'EVENTS', href: '#events' },
  { label: 'AWARDS', href: '#awards' },
  { label: 'CONCERTS', href: '#portfolio' },
  { label: 'TELEVISION', href: '#television' },
  { label: 'ACTING & ALBUMS', href: '#acting-albums' },
  { label: 'TOUR DIARIES', href: '#tour-diaries' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy for active section indicator
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gold-champagne/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-decoration-none"
          >
            <div className="w-8 h-8 rounded-full border border-gold-champagne/50 flex items-center justify-center bg-gold-champagne/15 group-hover:border-gold-champagne group-hover:shadow-gold-glow transition-all duration-300">
              <Music className="w-4 h-4 text-gold-champagne group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-medium tracking-[0.18em] text-white group-hover:text-gold-champagne transition-colors">
                SRINITHI ANAND
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-gold-champagne/90 group-hover:text-gold-light transition-colors -mt-0.5">
                OFFICIAL ARTIST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[11px] tracking-[0.16em] uppercase font-medium transition-all duration-300 py-1.5 ${
                    isActive
                      ? 'text-gold-bright font-bold'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent shadow-[0_0_8px_rgba(223,186,116,0.8)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-bg-card border border-gold-champagne/30 text-gold-champagne hover:border-gold-champagne focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-black/98 backdrop-blur-xl border-b border-gold-champagne/20 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xs tracking-[0.18em] uppercase py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                      isActive ? 'text-gold-bright font-bold' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
