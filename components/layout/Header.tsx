'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

export default function Header() {
  const lang = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dil değiştirme — Next.js router ile sayfa yenilemeden geçiş
  const switchLang = useCallback(() => {
    // Cookie'yi ayarla
    if (lang === 'tr') {
      document.cookie = 'lang=en; path=/; max-age=31536000; SameSite=Lax';
      // Next.js router ile yumuşak geçiş (tam sayfa yenilemesi olmaz)
      router.push(`/en${pathname === '/' ? '' : pathname.replace(/^\/en/, '')}`);
    } else {
      document.cookie = 'lang=tr; path=/; max-age=31536000; SameSite=Lax';
      router.push(pathname.replace(/^\/en/, '') || '/');
    }
  }, [lang, pathname, router]);

  const navigation = [
    { name: t(lang, 'header.services'), href: '/hizmetler' },
    { name: t(lang, 'header.portfolio'), href: '/portfoy' },
    { name: t(lang, 'header.industries'), href: '/sektorler' },
    { name: t(lang, 'header.about'), href: '/hakkimizda' },
    { name: t(lang, 'header.blog'), href: '/blog' },
    { name: t(lang, 'header.contact'), href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">D</span>
            </div>
            <span className={`text-xl font-display font-bold transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Dijital V3
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" role="navigation" aria-label={lang === 'tr' ? 'Ana menü' : 'Main navigation'}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dil Değiştirici */}
            <button
              onClick={switchLang}
              className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all ${
                scrolled 
                  ? 'border-slate-300 text-slate-700 hover:bg-slate-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title={lang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
            >
              <LanguageIcon className="w-4 h-4" />
              <span>{lang === 'tr' ? 'EN' : 'TR'}</span>
            </button>

            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all"
            >
              {t(lang, 'header.getStarted')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? (lang === 'tr' ? 'Menüyü kapat' : 'Close menu') : (lang === 'tr' ? 'Menüyü aç' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Bars3Icon className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-6"
              role="navigation"
              aria-label={lang === 'tr' ? 'Mobil menü' : 'Mobile navigation'}
            >
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 font-medium py-2 hover:text-primary-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    switchLang();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-full text-sm hover:bg-primary-50 transition-colors"
                >
                  <LanguageIcon className="w-4 h-4" />
                  {lang === 'tr' ? 'English (EN)' : 'Türkçe (TR)'}
                </button>
                <Link
                  href="/#contact"
                  className="px-5 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(lang, 'header.getStarted')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
