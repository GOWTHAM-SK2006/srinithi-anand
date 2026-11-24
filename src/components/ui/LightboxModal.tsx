'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title?: string; subtitle?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-bg-card/80 border border-gold-champagne/30 text-white hover:text-gold-champagne hover:border-gold-champagne transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-50 px-4 py-1.5 rounded-full bg-bg-card/80 border border-gold-champagne/20 text-xs tracking-wider text-text-secondary font-mono">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-bg-card/80 border border-gold-champagne/30 text-white hover:text-gold-champagne hover:border-gold-champagne hover:scale-110 transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-bg-card/80 border border-gold-champagne/30 text-white hover:text-gold-champagne hover:border-gold-champagne hover:scale-110 transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Content Container */}
        <div
          className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-[70vh] flex items-center justify-center"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.title || 'Portfolio Image'}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </motion.div>

          {/* Caption */}
          {(currentImage.title || currentImage.subtitle) && (
            <div className="mt-4 text-center max-w-xl px-4">
              {currentImage.title && (
                <h4 className="font-editorial text-xl sm:text-2xl text-gold-champagne tracking-wide">
                  {currentImage.title}
                </h4>
              )}
              {currentImage.subtitle && (
                <p className="text-sm text-text-secondary mt-1">{currentImage.subtitle}</p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

