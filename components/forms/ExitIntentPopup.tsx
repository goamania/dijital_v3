'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

/**
 * ExitIntentPopup — Çıkış Niyeti Popup'ı
 * ---------------------------------------------------------------------------
 * Dönüşüm Stratejisi: Kullanıcı mouse'u sayfa dışına çıkardığında (exit intent)
 * tetiklenir. Son bir dönüşüm fırsatı sunar. Agresif olmayan tasarım —
 * kapatması kolay, değer teklifi net.
 *
 * UX: Sadece masaüstünde çalışır (mouse tracking). Mobil kullanıcılar için
 * scroll-depth bazlı alternatif düşünülebilir.
 */
export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Sadece mouse yukarı çıkışta (üst kenardan) tetikle
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
      }
    },
    [hasShown, isVisible]
  );

  useEffect(() => {
    // Sadece masaüstünde dinle (dokunmatik cihazlarda mouse event yok)
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) return;

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVisible(false)}
          >
            {/* Popup Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500" />

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Kapat"
              >
                <XMarkIcon className="w-5 h-5 text-slate-400" />
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Kaydınız Alındı!
                  </h3>
                  <p className="text-slate-600">
                    Ücretsiz danışmanlık için en kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">🚀</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Ayrılmadan Önce...
                    </h3>
                    <p className="text-slate-600">
                      Ücretsiz 30 dakikalık dijital strateji danışmanlığı için e-posta adresinizi bırakın. Projenizi birlikte değerlendirelim.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="E-posta adresiniz"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Ücretsiz Danışmanlık Al
                          <ArrowRightIcon className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    Spam yapmıyoruz. Bilgileriniz asla paylaşılmaz.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
