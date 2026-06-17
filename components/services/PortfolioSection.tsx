'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

function getProjects(lang: 'tr' | 'en') {
  const isTr = lang === 'tr';
  return [
    // ── Gerçek projeler ──
    {
      title: 'Kemer Car Rental',
      category: isTr ? 'Araç Kiralama' : 'Car Rental',
      description: isTr 
        ? 'Online rezervasyon, filo yönetimi ve çok dilli destek ile Kemer bölgesinin lider araç kiralama platformu.'
        : 'Leading car rental platform in Kemer region with online booking, fleet management, and multilingual support.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop',
      url: 'https://kemercarrental.com/',
      metrics: { [isTr ? 'Araç Filosu' : 'Fleet']: '200+', [isTr ? 'Dil Desteği' : 'Languages']: '5', [isTr ? 'Online Rez.' : 'Online Book.']: '✓' },
    },
    {
      title: 'Define Tours',
      category: isTr ? 'Turizm & Seyahat' : 'Tourism & Travel',
      description: isTr 
        ? 'Tur paketleri, online ödeme ve canlı destek ile Antalya bölgesinde turizm acentesi web platformu.'
        : 'Tourism agency web platform in Antalya region with tour packages, online payment, and live support.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      url: 'https://www.definetours.com/',
      metrics: { [isTr ? 'Tur Paketi' : 'Tour Packs.']: '50+', [isTr ? 'Online Ödeme' : 'Online Pay.']: '✓', [isTr ? 'Dil Desteği' : 'Languages']: '3' },
    },
    // ── Örnek portföy projeleri ──
    {
      title: t(lang, 'portfolio.projects.ecommerce.title'),
      category: t(lang, 'industries.items.ecommerce.name'),
      description: t(lang, 'portfolio.projects.ecommerce.desc'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      metrics: { [t(lang, 'portfolio.projects.ecommerce.conversion')]: '+45%', [t(lang, 'portfolio.projects.ecommerce.revenue')]: '+67%', [t(lang, 'portfolio.projects.ecommerce.speed')]: '98/100' },
    },
    {
      title: t(lang, 'portfolio.projects.healthcare.title'),
      category: t(lang, 'industries.items.healthcare.name'),
      description: t(lang, 'portfolio.projects.healthcare.desc'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      metrics: { [t(lang, 'portfolio.projects.healthcare.patients')]: '+120%', [t(lang, 'portfolio.projects.healthcare.booking')]: '+85%', [t(lang, 'portfolio.projects.healthcare.satisfaction')]: '4.9/5' },
    },
    {
      title: t(lang, 'portfolio.projects.realestate.title'),
      category: t(lang, 'industries.items.realestate.name'),
      description: t(lang, 'portfolio.projects.realestate.desc'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      metrics: { [t(lang, 'portfolio.projects.realestate.listings')]: '+200%', [t(lang, 'portfolio.projects.realestate.leads')]: '+156%', [t(lang, 'portfolio.projects.realestate.engagement')]: '+89%' },
    },
    {
      title: t(lang, 'portfolio.projects.restaurants.title'),
      category: t(lang, 'industries.items.restaurants.name'),
      description: t(lang, 'portfolio.projects.restaurants.desc'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      metrics: { [t(lang, 'portfolio.projects.restaurants.orders')]: '+78%', [t(lang, 'portfolio.projects.restaurants.reservations')]: '+92%', [t(lang, 'portfolio.projects.restaurants.traffic')]: '+245%' },
    },
  ];
}

export default function PortfolioSection() {
  const lang = useLanguage();
  const projects = getProjects(lang);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            {t(lang, 'portfolio.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {t(lang, 'portfolio.title1')}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'portfolio.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t(lang, 'portfolio.description')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Tıklanabilir link overlay (gerçek projeler için) */}
              {'url' in project && project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  title={project.title}
                >
                  <span className="sr-only">{project.title}</span>
                </a>
              )}

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  {'url' in project && project.url && (
                    <span className="text-xs text-primary-500 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗ {lang === 'tr' ? 'Ziyaret Et' : 'Visit'}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="text-xl font-bold text-primary-600">{value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            {t(lang, 'portfolio.viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
