'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';

/**
 * PriceCalculator — İnteraktif Fiyat Hesaplayıcı
 * ---------------------------------------------------------------------------
 * Dönüşüm: Ziyaretçiye "acaba bütçem yeter mi?" sorusunu sormadan önce
 * tahmini fiyat gösterir. Lead yakalamayı artırır.
 * 3 adımlı quiz: Site türü → Sayfa sayısı → Ek özellikler → Tahmini fiyat
 */

type Step = 'type' | 'pages' | 'features' | 'result';

const questions = {
  tr: {
    title: 'Projene Özel Fiyat Hesapla',
    subtitle: '3 adımda tahmini fiyatını öğren, sürpriz maliyet yok.',
    typeLabel: 'Ne tür bir web sitesi istiyorsun?',
    types: [
      { id: 'landing', label: 'Landing Page', desc: 'Tek sayfa, ürün veya kampanya tanıtımı', price: 5000 },
      { id: 'corporate', label: 'Kurumsal Web Sitesi', desc: 'Çok sayfalı, şirket tanıtım sitesi', price: 12000 },
      { id: 'ecommerce', label: 'E-ticaret Sitesi', desc: 'Online mağaza, ödeme sistemli', price: 25000 },
      { id: 'custom', label: 'Özel Proje', desc: 'Kompleks ihtiyaçlar, özel yazılım', price: 40000 },
    ],
    pagesLabel: 'Kaç sayfalı olacak?',
    pageOptions: [
      { id: '1-5', label: '1-5 Sayfa', multiplier: 1 },
      { id: '5-10', label: '5-10 Sayfa', multiplier: 1.3 },
      { id: '10-20', label: '10-20 Sayfa', multiplier: 1.6 },
      { id: '20+', label: '20+ Sayfa', multiplier: 2.0 },
    ],
    featuresLabel: 'Hangi ek özellikleri istiyorsun?',
    featureOptions: [
      { id: 'seo', label: 'SEO Optimizasyonu', price: 3000 },
      { id: 'multilingual', label: 'Çok Dilli Destek', price: 5000 },
      { id: 'blog', label: 'Blog / Haber Sistemi', price: 2000 },
      { id: 'booking', label: 'Randevu / Rezervasyon Sistemi', price: 4000 },
      { id: 'payment', label: 'Ödeme Entegrasyonu', price: 3500 },
      { id: 'admin', label: 'Özel Yönetim Paneli', price: 6000 },
    ],
    calculating: 'Hesaplanıyor...',
    resultTitle: 'Tahmini Proje Bedeli',
    resultDesc: 'Bu fiyat tahminidir. Kesin fiyat için ücretsiz danışmanlık alın.',
    cta: 'Ücretsiz Danışmanlık Al',
    restart: 'Yeniden Hesapla',
    perMonth: 'aylık bakım',
    maintenanceNote: 'Yayına alma sonrası aylık bakım paketi: 2.000 TL/ay (opsiyonel)',
  },
  en: {
    title: 'Calculate Your Project Price',
    subtitle: 'Get an estimated price in 3 steps. No hidden costs.',
    typeLabel: 'What type of website do you need?',
    types: [
      { id: 'landing', label: 'Landing Page', desc: 'Single page, product or campaign promotion', price: 1000 },
      { id: 'corporate', label: 'Corporate Website', desc: 'Multi-page company website', price: 2500 },
      { id: 'ecommerce', label: 'E-commerce Site', desc: 'Online store with payment system', price: 5000 },
      { id: 'custom', label: 'Custom Project', desc: 'Complex needs, custom software', price: 8000 },
    ],
    pagesLabel: 'How many pages?',
    pageOptions: [
      { id: '1-5', label: '1-5 Pages', multiplier: 1 },
      { id: '5-10', label: '5-10 Pages', multiplier: 1.3 },
      { id: '10-20', label: '10-20 Pages', multiplier: 1.6 },
      { id: '20+', label: '20+ Pages', multiplier: 2.0 },
    ],
    featuresLabel: 'Which additional features?',
    featureOptions: [
      { id: 'seo', label: 'SEO Optimization', price: 600 },
      { id: 'multilingual', label: 'Multi-language', price: 1000 },
      { id: 'blog', label: 'Blog / News System', price: 400 },
      { id: 'booking', label: 'Booking System', price: 800 },
      { id: 'payment', label: 'Payment Integration', price: 700 },
      { id: 'admin', label: 'Custom Admin Panel', price: 1200 },
    ],
    calculating: 'Calculating...',
    resultTitle: 'Estimated Project Cost',
    resultDesc: 'This is an estimate. Get a free consultation for an exact quote.',
    cta: 'Get Free Consultation',
    restart: 'Recalculate',
    perMonth: '/month maintenance',
    maintenanceNote: 'Post-launch monthly maintenance: $150/month (optional)',
  },
};

export default function PriceCalculator() {
  const lang = useLanguage();
  const t = questions[lang === 'tr' ? 'tr' : 'en'];

  const [step, setStep] = useState<Step>('type');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedPages, setSelectedPages] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const basePrice = t.types.find((tp) => tp.id === selectedType)?.price || 0;
  const pageMultiplier = t.pageOptions.find((p) => p.id === selectedPages)?.multiplier || 1;
  const featuresTotal = t.featureOptions
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.price, 0);
  const totalPrice = Math.round((basePrice * pageMultiplier + featuresTotal) / 1000) * 1000;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    if (lang === 'tr') {
      return new Intl.NumberFormat('tr-TR').format(price) + ' TL';
    }
    return '$' + new Intl.NumberFormat('en-US').format(price);
  };

  const reset = () => {
    setStep('type');
    setSelectedType(null);
    setSelectedPages(null);
    setSelectedFeatures([]);
  };

  return (
    <section id="price-calculator" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            💰 {lang === 'tr' ? 'Fiyat Hesaplayıcı' : 'Price Calculator'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">{t.subtitle}</p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 md:p-10"
        >
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {(['type', 'pages', 'features'] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step === 'result' || (s === 'type' && step !== 'type') || (s === 'pages' && (step === 'features' || step === 'result'))
                      ? 'bg-green-500 text-white'
                      : step === s
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                  }`}
                >
                  {step === 'result' || ((s === 'type' && step !== 'type') || (s === 'pages' && (step === 'features' || step === 'result'))) ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < 2 && <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700" />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Type */}
            {step === 'type' && (
              <motion.div key="type" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.typeLabel}</h3>
                <div className="space-y-3">
                  {t.types.map((tp) => (
                    <button
                      key={tp.id}
                      onClick={() => { setSelectedType(tp.id); setStep('pages'); }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedType === tp.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                          : 'border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 dark:text-white">{tp.label}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{tp.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Pages */}
            {step === 'pages' && (
              <motion.div key="pages" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.pagesLabel}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {t.pageOptions.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setSelectedPages(p.id); setStep('features'); }}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedPages === p.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                          : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 dark:text-white">{p.label}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep('type')} className="mt-4 text-sm text-slate-500 hover:text-primary-600 transition-colors">
                  ← {lang === 'tr' ? 'Geri' : 'Back'}
                </button>
              </motion.div>
            )}

            {/* Step 3: Features */}
            {step === 'features' && (
              <motion.div key="features" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.featuresLabel}</h3>
                <div className="space-y-3 mb-6">
                  {t.featureOptions.map((f) => (
                    <label
                      key={f.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedFeatures.includes(f.id)
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                          : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(f.id)}
                        onChange={() => toggleFeature(f.id)}
                        className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 dark:text-white text-sm">{f.label}</div>
                      </div>
                      <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        +{formatPrice(f.price)}
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep('pages')} className="text-sm text-slate-500 hover:text-primary-600 transition-colors">
                    ← {lang === 'tr' ? 'Geri' : 'Back'}
                  </button>
                  <button
                    onClick={() => setStep('result')}
                    className="flex-1 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    {t.calculating}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === 'result' && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.resultTitle}</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent my-6">
                  {formatPrice(totalPrice)}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{t.resultDesc}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-8">{t.maintenanceNote}</p>

                <div className="flex gap-3 justify-center">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {t.cta}
                    <ArrowRightIcon className="w-5 h-5" />
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                    {t.restart}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
