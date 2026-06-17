'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, PlayIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

function getTestimonials(lang: 'tr' | 'en') {
  return [
    { name: t(lang, 'testimonials.items.ahmet.name'), role: t(lang, 'testimonials.items.ahmet.role'), image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.ahmet.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.sarah.name'), role: t(lang, 'testimonials.items.sarah.role'), image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.sarah.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.mehmet.name'), role: t(lang, 'testimonials.items.mehmet.role'), image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.mehmet.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.ayse.name'), role: t(lang, 'testimonials.items.ayse.role'), image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.ayse.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.can.name'), role: t(lang, 'testimonials.items.can.role'), image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.can.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.zeynep.name'), role: t(lang, 'testimonials.items.zeynep.role'), image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.zeynep.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.burak.name'), role: t(lang, 'testimonials.items.burak.role'), image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.burak.content'), rating: 5, video: null },
    { name: t(lang, 'testimonials.items.elif.name'), role: t(lang, 'testimonials.items.elif.role'), image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', content: t(lang, 'testimonials.items.elif.content'), rating: 5, video: null },
  ];
}

export default function TestimonialsSection() {
  const lang = useLanguage();
  const testimonials = getTestimonials(lang);
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            {t(lang, 'testimonials.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {t(lang, 'testimonials.title1')}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'testimonials.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t(lang, 'testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden relative flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More / Show Less */}
        {testimonials.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {showAll
                ? lang === 'tr' ? 'Daha Az Göster' : 'Show Less'
                : lang === 'tr' ? 'Tüm Yorumları Gör' : 'View All Reviews'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAll ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-900 to-slate-900 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-48 md:w-80 md:h-56 bg-slate-800 rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <PlayIcon className="w-16 h-16 text-white z-20 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 left-4 z-20 text-white text-sm font-medium">
                  {lang === 'tr' ? 'Video Referans' : 'Video Testimonial'}
                </div>
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-accent-500/40" />
              </div>
            </div>
            <div className="flex-1 text-white">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed mb-4 italic">
                {lang === 'tr'
                  ? '"Dijital V3 ile çalışmak işimizi tamamen değiştirdi. 3 ayda online satışlarımız 3 katına çıktı."'
                  : '"Working with Dijital V3 completely transformed our business. Online sales tripled in 3 months."'}
              </blockquote>
              <div className="font-bold">Koray Aksoy</div>
              <div className="text-sm text-gray-400">{lang === 'tr' ? 'Kurucu, Dijital V3' : 'Founder, Dijital V3'}</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-60"
        >
          <div className="text-2xl font-bold text-slate-400">Google</div>
          <div className="text-2xl font-bold text-slate-400">HubSpot</div>
          <div className="text-2xl font-bold text-slate-400">Shopify</div>
          <div className="text-2xl font-bold text-slate-400">Vercel</div>
          <div className="text-2xl font-bold text-slate-400">AWS</div>
        </motion.div>
      </div>
    </section>
  );
}
