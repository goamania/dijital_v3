'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';
import { t, ta } from '@/lib/i18n';

/**
 * AuthorBox — E-E-A-T Yazar Kutusu
 * ---------------------------------------------------------------------------
 * SEO stratejisi: Google'ın E-E-A-T (Experience, Expertise, Authoritativeness,
 * Trustworthiness) sinyallerini güçlendirir. Yazar bilgisi, sertifikalar ve
 * deneyim süresi, sayfanın otoritesini artırır.
 *
 * GEO/AEO: AI botlar, yazar entity'sini tanır ve alıntılarda yazar adını
 * gösterebilir. Person schema ile birleştiğinde Knowledge Graph uyumluluğu sağlar.
 *
 * Konum: Sayfanın alt kısmında, FAQ'dan önce veya sonra.
 */
export default function AuthorBox() {
  const lang = useLanguage();
  const credentials = ta(lang, 'author.credentials');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-50 to-primary-50 rounded-2xl border border-slate-200 p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-3xl font-bold text-white">KA</span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-900">{t(lang, 'author.name')}</h3>
                <span className="text-sm text-primary-600 font-medium bg-primary-100 px-3 py-1 rounded-full">
                  {t(lang, 'author.role')}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                {t(lang, 'author.bio')}
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-4">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600"
                  >
                    🏅 {cred}
                  </span>
                ))}
              </div>

              {/* Son güncelleme — E-E-A-T tazelik sinyali */}
              <p className="text-xs text-slate-400">
                {t(lang, 'author.updatedLabel')}: <time dateTime="2026-06-16">16 Haziran 2026</time>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
