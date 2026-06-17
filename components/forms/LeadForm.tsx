'use client';

import { useState, useOptimistic, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { submitLead } from '@/app/actions/lead';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  kvkk: boolean; // KVKK onayı — Türkiye'de yasal zorunluluk
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type OptimisticState = {
  formData: FormState;
  status: FormStatus;
  message?: string;
};

export default function LeadForm() {
  const lang = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    kvkk: false,
  });

  const [optimisticState, setOptimistic] = useOptimistic<OptimisticState>({
    formData,
    status: 'idle',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Checkbox için 'checked', diğer inputlar için 'value' kullan
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // KVKK onayı kontrolü — yasal zorunluluk
    if (!formData.kvkk) {
      setStatus('error');
      setMessage(t(lang, 'contact.kvkk.required'));
      return;
    }
    
    // Optimistic update - show success immediately
    setOptimistic({
      formData,
      status: 'success',
      message: t(lang, 'contact.success.message'),
    });

    // Actual submission
    setStatus('submitting');
    
    try {
      const result = await submitLead(formData);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          kvkk: false,
        });
        formRef.current?.reset();
      } else {
        setStatus('error');
        setMessage(result.message || t(lang, 'contact.error.message'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(t(lang, 'contact.error.message'));
    }
  };

  const services = [
    { value: '', label: t(lang, 'contact.serviceOptions.select') },
    { value: 'web-design', label: t(lang, 'contact.serviceOptions.webDesign') },
    { value: 'ecommerce', label: t(lang, 'contact.serviceOptions.ecommerce') },
    { value: 'seo', label: t(lang, 'contact.serviceOptions.seo') },
    { value: 'branding', label: t(lang, 'contact.serviceOptions.branding') },
    { value: 'digital-marketing', label: t(lang, 'contact.serviceOptions.marketing') },
    { value: 'maintenance', label: t(lang, 'contact.serviceOptions.maintenance') },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-primary-50 dark:from-slate-950 dark:to-primary-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {t(lang, 'contact.title1')}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> {t(lang, 'contact.title2')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {t(lang, 'contact.description')}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {optimisticState.status === 'success' && status === 'idle' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-12 text-center"
            >
              <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t(lang, 'contact.success.title')}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {optimisticState.message || t(lang, 'contact.success.message')}
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setOptimistic({ formData, status: 'idle' });
                }}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                {t(lang, 'contact.success.resubmit')}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    {t(lang, 'contact.fields.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={t(lang, 'contact.fields.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    {t(lang, 'contact.fields.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={t(lang, 'contact.fields.email')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    {t(lang, 'contact.fields.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+90 531 276 0791"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    {t(lang, 'contact.fields.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={t(lang, 'contact.fields.company')}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  {t(lang, 'contact.fields.service')} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  {t(lang, 'contact.fields.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder={t(lang, 'contact.fields.message')}
                />
              </div>

              {/* KVKK Onayı — 6698 sayılı Kişisel Verilerin Korunması Kanunu gereği zorunludur */}
              <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="kvkk"
                    checked={formData.kvkk}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500 cursor-pointer flex-shrink-0"
                    aria-required="true"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(lang, 'contact.kvkkFullText')}
                  </span>
                </label>
              </div>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                  >
                    <ExclamationCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-red-700">{message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
              >
                {status === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {t(lang, 'contact.submitting')}
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-6 h-6" />
                    {t(lang, 'contact.submit')}
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-sm text-slate-500 text-center">
                🔒 {t(lang, 'contact.security')}
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
