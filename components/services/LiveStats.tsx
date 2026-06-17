'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';

/**
 * LiveStats — Canlı Proje Sayacı
 * ---------------------------------------------------------------------------
 * Dönüşüm: Gerçek zamanlı sayaç animasyonu ile sosyal kanıtı güçlendirir.
 * Hero'dan hemen sonra, sayfanın üst kısmında konumlandırılır.
 * Her sayaç "görünene kadar" (in-view) animasyonu tetiklemez — performans dostu.
 */

function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white tabular-nums">
      {count}{suffix}
    </div>
  );
}

export default function LiveStats() {
  const lang = useLanguage();
  const isTr = lang === 'tr';

  const stats = [
    { end: 150, suffix: '+', label: isTr ? 'Proje Teslim Edildi' : 'Projects Delivered', icon: '🚀' },
    { end: 98, suffix: '%', label: isTr ? 'Müşteri Memnuniyeti' : 'Client Satisfaction', icon: '⭐' },
    { end: 6, suffix: '+', label: isTr ? 'Yıllık Deneyim' : 'Years Experience', icon: '💼' },
    { end: 12, suffix: '+', label: isTr ? 'Sektör Ödülü' : 'Industry Awards', icon: '🏆' },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-primary-900 via-primary-800 to-slate-900 dark:from-slate-950 dark:via-primary-950 dark:to-slate-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-3"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
