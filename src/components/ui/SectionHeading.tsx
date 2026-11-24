'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-champagne/10 border border-gold-champagne/40 text-gold-champagne text-[11px] font-medium uppercase tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(223,186,116,0.15)]`}
        >
          <span className="text-[10px] text-gold-champagne">✦</span>
          <span className="font-semibold text-gold-bright">{badge}</span>
          <span className="text-[10px] text-gold-champagne">✦</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-tight"
      >
        {title}
      </motion.h2>

      {/* Rich Metallic Gold Accent Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-[2px] w-28 bg-gradient-to-r from-transparent via-gold-champagne to-transparent my-5 shadow-[0_0_12px_rgba(223,186,116,0.6)] ${
          isCenter ? 'mx-auto' : 'mr-auto origin-left'
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
