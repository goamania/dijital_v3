'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';

/**
 * BeforeAfterSlider — Öncesi/Sonrası Karşılaştırma
 * ---------------------------------------------------------------------------
 * Dönüşüm: Ziyaretçiye somut bir dönüşüm kanıtı gösterir.
 * "Eski site vs Yeni site" yatay kaydırma ile etkileşimli demo.
 * Hero'dan hemen sonra, sosyal kanıt olarak konumlandırılır.
 */

export default function BeforeAfterSlider() {
  const lang = useLanguage();
  const isTr = lang === 'tr';
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPos(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-4">
            {isTr ? 'Gerçek Dönüşüm' : 'Real Transformation'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {isTr ? 'Define Tours: Eski vs Yeni' : 'Define Tours: Before vs After'}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {isTr
              ? 'Sürükle veya kaydır. 2022 PHP site ile 2026 Next.js site arasındaki farkı görün.'
              : 'Drag or swipe. Compare the 2022 PHP site with the 2026 Next.js version.'}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl cursor-ew-resize select-none bg-slate-800"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* AFTER görsel — Yeni Next.js site */}
          <div className="absolute inset-0">
            <Image
              src="/photos/definetours-2026.webp"
              alt="Define Tours yeni web sitesi, 2026 Next.js"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
              {isTr ? '2026: YENİ' : '2026: NEW'}
            </div>
          </div>

          {/* BEFORE görsel — Eski PHP site */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              src="/photos/definetours-2025.webp"
              alt="Define Tours eski PHP web sitesi, 2025"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
              {isTr ? '2022 — ESKİ PHP' : '2022 — OLD PHP'}
            </div>
          </div>

          {/* Kaydırma çizgisi */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-0 bottom-0 -translate-x-1/2 w-1 bg-white shadow-lg" />
            {/* Tutma kolu */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="flex gap-1 text-slate-500">
                <ArrowLeftIcon className="w-3 h-3" />
                <ArrowRightIcon className="w-3 h-3" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alt metin */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          {isTr
            ? 'Define Tours — 2022 PHP site vs. 2026 Dijital V3 Next.js yenilemesi. '
            : 'Define Tours — 2022 PHP site vs. 2026 Dijital V3 Next.js redesign. '}
          <a
            href="https://web.archive.org/web/20221006051141/http://definetours.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary-400 transition-colors"
          >
            {isTr ? 'Eski siteyi Wayback Machine\'de görün →' : 'View old site on Wayback Machine →'}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
