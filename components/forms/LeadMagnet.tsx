'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

/**
 * LeadMagnet — Ücretsiz Analiz Teklifi (Sticky CTA Banner)
 * ---------------------------------------------------------------------------
 * Dönüşüm Stratejisi: Sayfanın alt kısmında sabitlenmiş, düşük sürtünmeli
 * bir lead yakalama banner'ı. Kullanıcıdan sadece web site adresi ister —
 * minimum taahhüt, maksimum dönüşüm.
 *
 * SEO/GEO: Bu banner, AI botlar tarafından "ücretsiz hizmet" olarak
 * algılanır ve marka otoritesini artırır.
 */
export default function LeadMagnet() {
  const lang = useLanguage();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;
    setIsSubmitting(true);

    // Simüle edilmiş API çağrısı — production'da gerçek endpoint ile değiştirilmeli
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 text-white shadow-2xl border-t border-primary-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Sol taraf — Teklif metni */}
            <div className="flex-1">
              <p className="text-lg font-bold">{t(lang, 'leadMagnet.title')}</p>
              <p className="text-sm text-gray-400">{t(lang, 'leadMagnet.description')}</p>
            </div>

            {/* Sağ taraf — Form veya Success */}
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-3 bg-green-500/20 px-6 py-3 rounded-xl"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-400" />
                <span className="text-green-300 text-sm">
                  {t(lang, 'leadMagnet.success')}
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  placeholder={t(lang, 'leadMagnet.placeholder')}
                  className="w-full sm:w-64 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="E-posta adresiniz"
                  className="w-full sm:w-48 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 disabled:opacity-50 transition-all text-sm whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t(lang, 'leadMagnet.cta')}
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Kapatma butonu */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-4 p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label={lang === 'tr' ? 'Kapat' : 'Close'}
            >
              <XMarkIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
