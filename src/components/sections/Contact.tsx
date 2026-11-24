'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Youtube, Facebook, CheckCircle2 } from 'lucide-react';
import { ARTIST_DATA } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gold-champagne/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Inquiries & Representation"
          title="Let's Connect"
          subtitle="For bookings, collaborations or media inquiries."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Representation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-medium mb-4">
                Reach Out Directly
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mb-8 font-light">
                Whether you are organizing a premier orchestral concert, cultural festival, corporate gala, or recording studio session, get in touch for official representations.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <a
                  href={`tel:${ARTIST_DATA.phoneRaw}`}
                  className="p-5 rounded-2xl bg-bg-card border border-white/5 hover:border-gold-champagne/50 hover:shadow-gold-glow flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-champagne/10 border border-gold-champagne/25 flex items-center justify-center text-gold-champagne group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary block">
                      Direct Phone
                    </span>
                    <span className="font-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-gold-champagne transition-colors">
                      {ARTIST_DATA.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${ARTIST_DATA.email}`}
                  className="p-5 rounded-2xl bg-bg-card border border-white/5 hover:border-gold-champagne/50 hover:shadow-gold-glow flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-champagne/10 border border-gold-champagne/25 flex items-center justify-center text-gold-champagne group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary block">
                      Official Email
                    </span>
                    <span className="font-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-gold-champagne transition-colors truncate block">
                      {ARTIST_DATA.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={ARTIST_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-bg-card border border-white/5 hover:border-gold-champagne/50 hover:shadow-gold-glow flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="font-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-gold-champagne transition-colors">
                      +91 95000 40780
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-4">
                Official Channels:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={ARTIST_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card border border-white/10 text-white hover:text-gold-champagne hover:border-gold-champagne/50 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={ARTIST_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card border border-white/10 text-white hover:text-gold-champagne hover:border-gold-champagne/50 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={ARTIST_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card border border-white/10 text-white hover:text-gold-champagne hover:border-gold-champagne/50 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-gold-champagne/30 shadow-2xl relative">
              <h4 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-2">
                Send a Message
              </h4>
              <p className="text-xs text-text-secondary mb-8">
                Please complete the form below. Inquiries are responded to within 24 to 48 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-gold-champagne/10 border border-gold-champagne/30 text-center my-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold-champagne mx-auto mb-3" />
                  <h5 className="font-editorial text-2xl text-white font-medium mb-1">
                    Message Sent Successfully
                  </h5>
                  <p className="text-sm text-text-secondary max-w-sm mx-auto">
                    Thank you for reaching out. We have received your inquiry and will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 rounded-full bg-gold-champagne text-bg-primary text-xs uppercase tracking-wider font-semibold hover:bg-gold-light transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-bg-secondary/90 border border-white/10 text-white placeholder-text-secondary/40 text-sm focus:outline-none focus:border-gold-champagne/60 focus:ring-1 focus:ring-gold-champagne/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-bg-secondary/90 border border-white/10 text-white placeholder-text-secondary/40 text-sm focus:outline-none focus:border-gold-champagne/60 focus:ring-1 focus:ring-gold-champagne/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-bg-secondary/90 border border-white/10 text-white placeholder-text-secondary/40 text-sm focus:outline-none focus:border-gold-champagne/60 focus:ring-1 focus:ring-gold-champagne/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Concert / Event Collaboration"
                        className="w-full px-4 py-3 rounded-xl bg-bg-secondary/90 border border-white/10 text-white placeholder-text-secondary/40 text-sm focus:outline-none focus:border-gold-champagne/60 focus:ring-1 focus:ring-gold-champagne/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide event dates, venue details, orchestra expectations, or inquiry description..."
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary/90 border border-white/10 text-white placeholder-text-secondary/40 text-sm focus:outline-none focus:border-gold-champagne/60 focus:ring-1 focus:ring-gold-champagne/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-gold-champagne to-gold-muted text-bg-primary font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-gold-glow hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? 'SENDING INQUIRY...' : 'SEND MESSAGE'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

