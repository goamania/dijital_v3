'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';

/**
 * Differentiators — 3 Maddelik Farklılaştırıcı
 * BeforeAfterSlider'dan hemen sonra, LiveStats'tan önce.
 */
export default function Differentiators() {
  const lang = useLanguage();
  const isTr = lang === 'tr';

  const items = [
    {
      icon: '🏗️',
      title: isTr ? 'Saha Tecrübesi + Mühendislik' : 'Field Experience + Engineering',
      desc: isTr
        ? '20 yılı aşkın ticari saha deneyimi ve 15 yılı aşkın full-stack geliştirme uzmanlığı. İşletmenizin dilinden anlıyoruz.'
        : '20+ years of commercial field experience and 15+ years of full-stack development. We speak your business language.',
    },
    {
      icon: '⚡',
      title: isTr ? 'Next.js ile 95+ PageSpeed' : '95+ PageSpeed with Next.js',
      desc: isTr
        ? 'Hazır şablon ve hantal altyapı yok. Next.js, TypeScript ve Tailwind CSS ile Core Web Vitals skorlarında zirveye oynayan, ultra hızlı sistemler.'
        : 'No templates or sluggish infrastructure. Ultra-fast systems built with Next.js, TypeScript, and Tailwind CSS that top Core Web Vitals scores.',
    },
    {
      icon: '🤖',
      title: isTr ? 'Google Yetmez: AI Aramalarda da 1. Sıra' : 'Beyond Google: Rank 1st on AI Search Too',
      desc: isTr
        ? 'Sitenizi sadece Google için değil; ChatGPT, Perplexity, Gemini ve sesli asistanlar için de optimize ediyoruz. Arama Motoru, Üretken Motor ve Yanıt Motoru Optimizasyonu bir arada.'
        : 'We optimize for ChatGPT, Perplexity, Gemini, and voice assistants, not just Google. Search, Generative, and Answer Engine Optimization combined.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
