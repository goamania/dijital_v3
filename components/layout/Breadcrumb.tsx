'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/i18n-context';
import { t } from '@/lib/i18n';

/**
 * Breadcrumb — Ekmek Kırıntısı Bileşeni
 * ---------------------------------------------------------------------------
 * SEO: Google, breadcrumb yapısını SERP'te gösterir (tıklanabilir yol).
 * Ayrıca iç linkleme yapısını güçlendirir, crawl bütçesini optimize eder.
 * UX: Kullanıcının sitede nerede olduğunu anlamasını sağlar, hemen çıkma
 * oranını düşürür.
 *
 * Kullanım: Her sayfanın üst kısmına yerleştirilir.
 * Schema.org BreadcrumbList JSON-LD ile desteklenmelidir.
 */
export default function Breadcrumb() {
  const lang = useLanguage();
  const pathname = usePathname();

  // Segmentleri parse et
  const segments = pathname.split('/').filter(Boolean);

  // Ana sayfadaysak breadcrumb gösterme
  if (segments.length === 0) return null;

  // Breadcrumb item'lerini oluştur
  const items = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    // Segmenti okunabilir hale getir (kebab-case → Title Case)
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return { href, label };
  });

  // Schema.org BreadcrumbList için JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t(lang, 'breadcrumb.home'),
        item: lang === 'en' ? 'https://www.dijitalv3.com/en' : 'https://www.dijitalv3.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://www.dijitalv3.com${item.href}`,
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Görsel Breadcrumb */}
      <nav aria-label="Breadcrumb" className="w-full bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 mt-20">
        <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
          <li>
            <Link
              href={lang === 'en' ? '/en' : '/'}
              className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-1.5"
            >
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{t(lang, 'breadcrumb.home')}</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
              {index === items.length - 1 ? (
                <span className="text-slate-900 dark:text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
