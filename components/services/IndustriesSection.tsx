'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

function getIndustries(lang: 'tr' | 'en') {
  return [
    { name: t(lang, 'industries.items.ecommerce.name'), description: t(lang, 'industries.items.ecommerce.desc'), icon: '🛒', href: '/sektorler/e-ticaret', color: 'from-blue-500 to-cyan-500' },
    { name: t(lang, 'industries.items.healthcare.name'), description: t(lang, 'industries.items.healthcare.desc'), icon: '🏥', href: '/sektorler/saglik', color: 'from-green-500 to-emerald-500' },
    { name: t(lang, 'industries.items.realestate.name'), description: t(lang, 'industries.items.realestate.desc'), icon: '🏠', href: '/sektorler/emlak', color: 'from-purple-500 to-pink-500' },
    { name: t(lang, 'industries.items.restaurants.name'), description: t(lang, 'industries.items.restaurants.desc'), icon: '🍽️', href: '/sektorler/restoran', color: 'from-orange-500 to-red-500' },
  ];
}

export default function IndustriesSection() {
  const lang = useLanguage();
  const industries = getIndustries(lang);

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
            {t(lang, 'industries.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {t(lang, 'industries.title1')}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'industries.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t(lang, 'industries.description')}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={industry.href}
                className="group block h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all overflow-hidden"
              >
                {/* Icon Header */}
                <div className={`h-32 bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                  <span className="text-6xl">{industry.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                    {t(lang, 'industries.learnMore')}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
