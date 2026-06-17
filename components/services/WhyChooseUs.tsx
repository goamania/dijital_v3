'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

function getStats(lang: 'tr' | 'en') {
  return [
    { value: t(lang, 'whyUs.stats.projects.value'), label: t(lang, 'whyUs.stats.projects.label'), icon: '🚀' },
    { value: t(lang, 'whyUs.stats.satisfaction.value'), label: t(lang, 'whyUs.stats.satisfaction.label'), icon: '⭐' },
    { value: t(lang, 'whyUs.stats.awards.value'), label: t(lang, 'whyUs.stats.awards.label'), icon: '🏆' },
    { value: t(lang, 'whyUs.stats.experience.value'), label: t(lang, 'whyUs.stats.experience.label'), icon: '💼' },
  ];
}

function getFeatures(lang: 'tr' | 'en') {
  return [
    { title: t(lang, 'whyUs.features.performance.title'), description: t(lang, 'whyUs.features.performance.desc'), metric: t(lang, 'whyUs.features.performance.metric'), metricLabel: t(lang, 'whyUs.features.performance.metricLabel') },
    { title: t(lang, 'whyUs.features.conversion.title'), description: t(lang, 'whyUs.features.conversion.desc'), metric: t(lang, 'whyUs.features.conversion.metric'), metricLabel: t(lang, 'whyUs.features.conversion.metricLabel') },
    { title: t(lang, 'whyUs.features.ai.title'), description: t(lang, 'whyUs.features.ai.desc'), metric: t(lang, 'whyUs.features.ai.metric'), metricLabel: t(lang, 'whyUs.features.ai.metricLabel') },
    { title: t(lang, 'whyUs.features.support.title'), description: t(lang, 'whyUs.features.support.desc'), metric: t(lang, 'whyUs.features.support.metric'), metricLabel: t(lang, 'whyUs.features.support.metricLabel') },
  ];
}

export default function WhyChooseUs() {
  const lang = useLanguage();
  const stats = getStats(lang);
  const features = getFeatures(lang);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 dark:from-slate-950 dark:via-primary-950 dark:to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-4">
            {t(lang, 'whyUs.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t(lang, 'whyUs.title1')}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> {t(lang, 'whyUs.title2')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(lang, 'whyUs.description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-400">{feature.metric}</div>
                  <div className="text-sm text-gray-400">{feature.metricLabel}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
