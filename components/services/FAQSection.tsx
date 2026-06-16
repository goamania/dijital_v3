'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

function getFaqs(lang: 'tr' | 'en') {
  return [
    { question: t(lang, 'faq.items.0.q'), answer: t(lang, 'faq.items.0.a') },
    { question: t(lang, 'faq.items.1.q'), answer: t(lang, 'faq.items.1.a') },
    { question: t(lang, 'faq.items.2.q'), answer: t(lang, 'faq.items.2.a') },
    { question: t(lang, 'faq.items.3.q'), answer: t(lang, 'faq.items.3.a') },
    { question: t(lang, 'faq.items.4.q'), answer: t(lang, 'faq.items.4.a') },
    { question: t(lang, 'faq.items.5.q'), answer: t(lang, 'faq.items.5.a') },
    { question: t(lang, 'faq.items.6.q'), answer: t(lang, 'faq.items.6.a') },
    { question: t(lang, 'faq.items.7.q'), answer: t(lang, 'faq.items.7.a') },
  ];
}

export default function FAQSection() {
  const lang = useLanguage();
  const faqs = getFaqs(lang);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            {t(lang, 'faq.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            {t(lang, 'faq.title1')}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'faq.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600">
            {t(lang, 'faq.description')}
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
