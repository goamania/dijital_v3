'use client';

import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  PaintBrushIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';

/**
 * ProcessTimeline — Görsel Süreç Haritası (Roadmap)
 * ---------------------------------------------------------------------------
 * UX/Dönüşüm: Müşterinin zihnindeki "ne kadar sürer, nasıl ilerler?"
 * sorularını görselleştirir. Belirsizliği giderir, güven inşa eder.
 *
 * SEO: HowTo schema ile eşleşir (Google rich result).
 * 6 adımlı süreç, zigzag layout ile mobilde dikey akar.
 */

const steps = [
  { icon: MagnifyingGlassIcon, color: 'from-blue-500 to-cyan-500', key: 'discovery' },
  { icon: Squares2X2Icon, color: 'from-purple-500 to-pink-500', key: 'wireframe' },
  { icon: PaintBrushIcon, color: 'from-orange-500 to-red-500', key: 'design' },
  { icon: CodeBracketIcon, color: 'from-green-500 to-emerald-500', key: 'development' },
  { icon: CheckBadgeIcon, color: 'from-yellow-500 to-amber-500', key: 'testing' },
  { icon: RocketLaunchIcon, color: 'from-primary-500 to-accent-500', key: 'launch' },
];

function getStepData(lang: 'tr' | 'en') {
  const isTr = lang === 'tr';
  return [
    { title: isTr ? 'Keşif & Strateji' : 'Discovery & Strategy', desc: isTr ? 'İş hedeflerinizi, hedef kitlenizi ve rakiplerinizi analiz ediyor, size özel strateji oluşturuyoruz.' : 'We analyze your business goals, target audience, and competitors to create a tailored strategy.', time: isTr ? '1-2 Gün' : '1-2 Days' },
    { title: isTr ? 'Wireframe & Planlama' : 'Wireframe & Planning', desc: isTr ? 'Kullanıcı yolculuğunu haritalandırıp sayfa yapısını ve içerik hiyerarşisini oluşturuyoruz.' : 'We map the user journey and establish page structure and content hierarchy.', time: isTr ? '2-3 Gün' : '2-3 Days' },
    { title: isTr ? 'Tasarım & Prototip' : 'Design & Prototype', desc: isTr ? 'Figma\'da yüksek kaliteli görsel tasarım ve etkileşimli prototipler hazırlıyor, onayınıza sunuyoruz.' : 'We create high-quality visual designs and interactive prototypes in Figma for your approval.', time: isTr ? '3-5 Gün' : '3-5 Days' },
    { title: isTr ? 'Geliştirme' : 'Development', desc: isTr ? 'Next.js, TypeScript ve Tailwind CSS ile performans odaklı, SEO uyumlu kodlama yapıyoruz.' : 'We build with performance-focused, SEO-friendly code using Next.js, TypeScript, and Tailwind CSS.', time: isTr ? '5-10 Gün' : '5-10 Days' },
    { title: isTr ? 'Test & Kalite Kontrol' : 'Testing & QA', desc: isTr ? 'Tüm cihazlarda kapsamlı test, hız optimizasyonu ve SEO denetimi gerçekleştiriyoruz.' : 'We run comprehensive tests across all devices, speed optimization, and SEO audit.', time: isTr ? '1-2 Gün' : '1-2 Days' },
    { title: isTr ? 'Lansman & Optimizasyon' : 'Launch & Optimization', desc: isTr ? 'Sitenizi yayına alıyor, performans izleme ve sürekli iyileştirme ile yanınızda oluyoruz.' : 'We launch your site and stay with you through performance monitoring and continuous improvement.', time: isTr ? '1 Gün' : '1 Day' },
  ];
}

export default function ProcessTimeline() {
  const lang = useLanguage();
  const data = getStepData(lang);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            {lang === 'tr' ? 'Nasıl Çalışıyoruz' : 'How We Work'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === 'tr' ? 'Tasarım' : 'Our Design'}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {' '}{lang === 'tr' ? 'Sürecimiz' : 'Process'}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {lang === 'tr'
              ? '6 adımda, ortalama 12 iş gününde projenizi hayata geçiriyoruz.'
              : 'We bring your project to life in 6 steps, averaging 12 business days.'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Orta çizgi (masaüstü) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {data.map((step, index) => {
              const isEven = index % 2 === 0;
              const StepIcon = steps[index].icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} md:min-h-[140px]`}
                >
                  {/* İçerik kartı */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-3 md:justify-end">
                        <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-2.5 py-1 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Orta ikon (masaüstü) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${steps[index].color} flex items-center justify-center shadow-lg`}>
                      <StepIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Mobil ikon */}
                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${steps[index].color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <StepIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400">Adım {index + 1}</span>
                  </div>

                  {/* Boş alan (diğer taraf) */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Alt CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {lang === 'tr' ? 'Ortalama 12 iş gününde siteniz yayında!' : 'Your site goes live in just 12 business days on average!'}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {lang === 'tr' ? 'Projeni Başlat' : 'Start Your Project'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
