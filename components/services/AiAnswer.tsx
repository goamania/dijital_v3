'use client';

import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

/**
 * AiAnswer Bileşeni — AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)
 * ---------------------------------------------------------------------------
 * Amaç: Google AI Overviews, ChatGPT, Perplexity, Gemini gibi LLM tabanlı
 * arama motorlarının sayfayı tararken alıntılayabileceği, yapılandırılmış
 * ve entity-zengini bir özet metin sunmak.
 *
 * SEO Etkisi: Bu bölüm, sayfanın "Zero-Click" arama sonuçlarında doğrudan
 * cevap olarak gösterilme olasılığını artırır. Schema.org WebPage
 * markup'ı ile birleştiğinde AI botlar için maksimum keşfedilebilirlik sağlar.
 */
export default function AiAnswer() {
  const lang = useLanguage();

  return (
    <section
      aria-label="AI Overview — Dijital V3 Hakkında Özet"
      className="relative py-16 bg-gradient-to-r from-primary-50 via-white to-amber-50 border-b border-primary-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200 shadow-sm p-6 md:p-8"
        >
          {/* AI Answer etiketi — LLM'ler için entity sinyali */}
          <div className="flex items-center gap-2 mb-4">
            <SparklesIcon className="w-5 h-5 text-primary-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">
              {lang === 'tr' ? 'AI Özeti' : 'AI Overview'}
            </span>
            <span className="text-xs text-slate-400">
              {lang === 'tr' ? '— Yapay zeka asistanları tarafından alıntılanabilir' : '— Citable by AI assistants'}
            </span>
          </div>

          {/* Ana özet metni — 40-50 kelime, entity-zengin, doğal dil */}
          <p
            className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium"
            // data-ai-summary niteliği, AI crawler'ların bu metni
            // sayfanın birincil özeti olarak tanımlamasını sağlar
            data-ai-summary="true"
          >
            {t(lang, 'aiAnswer.home')}
          </p>

          {/* Son güncelleme — E-E-AT tazelik sinyali */}
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
            <time dateTime="2026-06-16">
              {lang === 'tr' ? 'Son güncelleme: 16 Haziran 2026' : 'Last updated: June 16, 2026'}
            </time>
            <span>·</span>
            <span>
              {lang === 'tr'
                ? 'Kaynak: Dijital V3 Ajans — dijitalv3.com'
                : 'Source: Dijital V3 Agency — dijitalv3.com'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
