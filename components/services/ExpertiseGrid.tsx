'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';

/**
 * ExpertiseGrid — SEO/AIO/GEO/AEO Uzmanlık Kartları
 * ---------------------------------------------------------------------------
 * Dönüşüm: Ziyaretçiye "sıradan bir web tasarımcısı değil, geleceğe hazır
 * bir dijital partner" mesajını ilk bakışta verir.
 * Hover'da açıklamalar genişler, kart yükselir.
 */

const expertise = {
  tr: [
    { title: 'SEO', full: 'Search Engine Optimization', desc: 'Google ve Bing\'de üst sıralar için teknik altyapı, Core Web Vitals ve organik trafik optimizasyonu.', color: 'from-blue-600 to-blue-800', icon: '🔍' },
    { title: 'AIO', full: 'AI Optimization', desc: 'Yapay zeka sistemlerinin sitenizi hatasız tarayıp indekslemesi için sistem mimarisi optimizasyonu.', color: 'from-purple-600 to-purple-800', icon: '🤖' },
    { title: 'GEO', full: 'Generative Engine Optimization', desc: 'ChatGPT, Perplexity ve Gemini\'nin işletmenizi kaynak göstermesini sağlayan yeni nesil strateji.', color: 'from-cyan-600 to-cyan-800', icon: '🧠' },
    { title: 'AEO', full: 'Answer Engine Optimization', desc: 'Sesli aramalar ve AI asistanlarında işletmenizin ilk ve en net çözüm olarak konumlandırılması.', color: 'from-emerald-600 to-emerald-800', icon: '🎯' },
  ],
  en: [
    { title: 'SEO', full: 'Search Engine Optimization', desc: 'Technical infrastructure, Core Web Vitals, and organic traffic optimization for top Google and Bing rankings.', color: 'from-blue-600 to-blue-800', icon: '🔍' },
    { title: 'AIO', full: 'AI Optimization', desc: 'System architecture optimization for AI systems to flawlessly crawl and index your digital presence.', color: 'from-purple-600 to-purple-800', icon: '🤖' },
    { title: 'GEO', full: 'Generative Engine Optimization', desc: 'Next-gen strategy ensuring ChatGPT, Perplexity, and Gemini cite your business as a trusted source.', color: 'from-cyan-600 to-cyan-800', icon: '🧠' },
    { title: 'AEO', full: 'Answer Engine Optimization', desc: 'Positioning your business as the first and clearest solution in voice search and AI assistant direct answers.', color: 'from-emerald-600 to-emerald-800', icon: '🎯' },
  ],
};

export default function ExpertiseGrid() {
  const lang = useLanguage();
  const items = expertise[lang === 'tr' ? 'tr' : 'en'];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            {lang === 'tr' ? 'Dört Temel Uzmanlık' : 'Four Core Expertises'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === 'tr' ? 'Sıradan Bir Ajans' : 'We Are Not Just'}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {' '}{lang === 'tr' ? 'Değiliz' : 'Another Agency'}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {lang === 'tr'
              ? 'SEO yetmez. Bugünün dijital dünyasında AIO, GEO ve AEO ile işletmenizi geleceğe hazırlıyoruz.'
              : 'SEO is not enough. In today\'s digital world, we prepare your business for the future with AIO, GEO, and AEO.'}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Arka plan glow efekti */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />

              <div className="relative z-10">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-white/60 font-medium mb-3 uppercase tracking-wider">{item.full}</p>

                {/* Hover'da genişleyen açıklama */}
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/85 leading-relaxed pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Hover'da görünen ok */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
