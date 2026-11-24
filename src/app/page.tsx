'use client';

import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { MusicalJourney } from '@/components/sections/MusicalJourney';
import { Legends } from '@/components/sections/Legends';
import { LivePerformances } from '@/components/sections/LivePerformances';
import { Celebrities } from '@/components/sections/Celebrities';
import { LiveEvents } from '@/components/sections/LiveEvents';
import { Awards } from '@/components/sections/Awards';
import { Portfolio } from '@/components/sections/Portfolio';
import { Television } from '@/components/sections/Television';
import { RealityShows } from '@/components/sections/RealityShows';
import { ActingAndAlbums } from '@/components/sections/ActingAndAlbums';
import { TourDiaries } from '@/components/sections/TourDiaries';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/navigation/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-text-primary selection:bg-gold-champagne/40 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Srinithi Anand */}
      <About />

      {/* 3. Musical Journey Statistics & Versatility */}
      <MusicalJourney />

      {/* 4. Stage Shared with Legends */}
      <Legends />

      {/* 5. Live Performances Gallery (4 initially, View All) */}
      <LivePerformances />

      {/* 6. With Celebrities Gallery (4 initially, View All) */}
      <Celebrities />

      {/* 7. Live Events & Special Moments (4 initially, View All) */}
      <LiveEvents />

      {/* 8. Awards & Recognition (4 Categories, 4 initially each, View All) */}
      <Awards />

      {/* 9. Concert Archives & Instagram Reels */}
      <Portfolio />

      {/* 10. Television Performances */}
      <Television />

      {/* 11. Reality Shows */}
      <RealityShows />

      {/* 12. Acting & Albums */}
      <ActingAndAlbums />

      {/* 13. Tour Diaries */}
      <TourDiaries />

      {/* 14. Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Floating Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
