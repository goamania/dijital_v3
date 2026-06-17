'use client';

import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';
import { t, ta } from '@/lib/i18n';

/**
 * PricingSection — Dönüşüm Odaklı Fiyatlandırma ve Karşılaştırma Tablosu
 * ---------------------------------------------------------------------------
 * Strateji: 3'lü fiyatlandırma (Good-Better-Best) modeli. "Profesyonel" paket
 * "En Çok Tercih Edilen" olarak vurgulanır — karar felcini azaltır, dönüşümü artırır.
 * Karşılaştırma tablosu ile şeffaflık sinyali verir, güven inşa eder.
 *
 * SEO Etkisi: Schema.org Offer/PriceSpecification ile zenginleştirildiğinde
 * Google'da fiyat bilgisi doğrudan SERP'te gösterilebilir.
 */
export default function PricingSection() {
  const lang = useLanguage();

  const plans = [
    {
      key: 'starter' as const,
      recommended: false,
      gradient: 'from-slate-500 to-slate-700',
    },
    {
      key: 'professional' as const,
      recommended: true,
      gradient: 'from-primary-600 to-accent-500',
    },
    {
      key: 'enterprise' as const,
      recommended: false,
      gradient: 'from-primary-800 to-primary-600',
    },
  ];

  // Karşılaştırma tablosu satırları
  const comparisonRows = [
    { feature: t(lang, 'pricing.features.pages'), starter: '5', professional: '10', enterprise: t(lang, 'pricing.comparison.unlimited') },
    { feature: t(lang, 'pricing.features.responsive'), starter: true, professional: true, enterprise: true },
    { feature: t(lang, 'pricing.features.seo'), starter: true, professional: true, enterprise: true },
    { feature: t(lang, 'pricing.features.cms'), starter: false, professional: true, enterprise: true },
    { feature: t(lang, 'pricing.features.ecommerce'), starter: false, professional: false, enterprise: true },
    { feature: t(lang, 'pricing.features.paymentGateway'), starter: false, professional: false, enterprise: true },
    { feature: t(lang, 'pricing.features.analytics'), starter: false, professional: true, enterprise: true },
    { feature: t(lang, 'pricing.features.speedOptimization'), starter: false, professional: true, enterprise: true },
    { feature: t(lang, 'pricing.features.multiLanguage'), starter: false, professional: false, enterprise: true },
    { feature: t(lang, 'pricing.features.apiIntegration'), starter: false, professional: false, enterprise: true },
    { feature: t(lang, 'pricing.features.support247'), starter: false, professional: false, enterprise: true },
  ];

  const CheckOrX = ({ value }: { value: boolean | string }) => {
    if (typeof value === 'string') return <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</span>;
    return value ? (
      <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <XMarkIcon className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
    );
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            {t(lang, 'pricing.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {t(lang, 'pricing.title1')}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'pricing.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t(lang, 'pricing.description')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const p = t; // shorthand
            const features = ta(lang, `pricing.plans.${plan.key}.features`);
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-slate-900 rounded-2xl border-2 ${
                  plan.recommended
                    ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-105 z-10'
                    : 'border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl'
                } overflow-hidden transition-all`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-center py-2 text-sm font-bold">
                    ✨ {t(lang, 'pricing.popular')}
                  </div>
                )}

                <div className={`p-8 ${plan.recommended ? 'pt-14' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {t(lang, `pricing.plans.${plan.key}.name`)}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                    {t(lang, `pricing.plans.${plan.key}.desc`)}
                  </p>

                  <div className="mb-6">
                    <span className="text-sm text-slate-400 dark:text-slate-400">{t(lang, 'pricing.startingAt')}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900 dark:text-white">
                        {t(lang, `pricing.plans.${plan.key}.price`)}
                      </span>
                      <span className="text-xl text-slate-400 dark:text-slate-400">{t(lang, 'pricing.currency')}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.03]'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {plan.recommended ? t(lang, 'pricing.getStarted') : t(lang, 'pricing.contactUs')}
                  </a>

                  <ul className="mt-8 space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          <div className="p-6 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
              {t(lang, 'pricing.comparison.title')}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left p-4 font-semibold text-slate-700 dark:text-slate-200 text-sm">{t(lang, 'pricing.comparison.feature')}</th>
                  <th className="p-4 font-semibold text-slate-700 dark:text-slate-200 text-sm text-center">{t(lang, 'pricing.plans.starter.name')}</th>
                  <th className="p-4 font-semibold text-primary-700 dark:text-primary-300 text-sm text-center bg-primary-50 dark:bg-primary-900/30">{t(lang, 'pricing.plans.professional.name')}</th>
                  <th className="p-4 font-semibold text-slate-700 dark:text-slate-200 text-sm text-center">{t(lang, 'pricing.plans.enterprise.name')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 dark:border-slate-700 ${i % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-800/30' : ''}`}>
                    <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-200">{row.feature}</td>
                    <td className="p-4 text-center"><CheckOrX value={row.starter} /></td>
                    <td className="p-4 text-center bg-primary-50/50 dark:bg-primary-900/20"><CheckOrX value={row.professional} /></td>
                    <td className="p-4 text-center"><CheckOrX value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
