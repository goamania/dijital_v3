'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';

/**
 * TrustBadges — Güven Rozetleri Bölümü
 * ---------------------------------------------------------------------------
 * Dönüşüm: SSL, performans, mobil uyum gibi teknik rozetlerle müşteri güvenini
 * perçinler. Footer'dan hemen önce veya Testimonials'tan sonra konumlandırılır.
 */
export default function TrustBadges() {
  const lang = useLanguage();
  const isTr = lang === 'tr';

  const badges = [
    { icon: ShieldCheckIcon, label: 'SSL Güvenli', color: 'text-green-400' },
    { icon: BoltIcon, label: isTr ? 'Hız Optimize' : 'Speed Optimized', color: 'text-yellow-400' },
    { icon: DevicePhoneMobileIcon, label: 'Mobile First', color: 'text-blue-400' },
    { icon: MagnifyingGlassCircleIcon, label: 'SEO Ready', color: 'text-primary-400' },
    { icon: GlobeAltIcon, label: 'Core Web Vitals', color: 'text-purple-400' },
    { icon: ClockIcon, label: isTr ? '7/24 Destek' : '24/7 Support', color: 'text-cyan-400' },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            {isTr ? 'Neden Bize Güvenmelisiniz?' : 'Why Trust Us?'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <badge.icon className={`w-8 h-8 ${badge.color}`} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
