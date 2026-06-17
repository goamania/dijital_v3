import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hizmetler | Dijital V3',
  description: 'Web tasarım, SEO, e-ticaret, marka kimliği ve dijital pazarlama hizmetlerimiz. İşletmenizi büyütecek kapsamlı dijital çözümler.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler' },
};

const hizmetler = [
  { href: '/hizmetler/web-tasarim', title: 'Web Tasarım', desc: 'Kurumsal web siteleri, landing page ve özel tasarım çözümleri.' },
  { href: '/hizmetler/e-ticaret', title: 'E-ticaret', desc: 'Online mağaza kurulumu, ödeme entegrasyonu ve stok yönetimi.' },
  { href: '/hizmetler/seo', title: 'SEO Optimizasyonu', desc: 'Arama motorlarında üst sıralara çıkmak için kapsamlı SEO hizmeti.' },
  { href: '/hizmetler/marka-kimligi', title: 'Marka Kimliği', desc: 'Logo, kurumsal kimlik ve marka stratejisi tasarımı.' },
  { href: '/hizmetler/dijital-pazarlama', title: 'Dijital Pazarlama', desc: 'Google Ads, sosyal medya ve içerik pazarlama yönetimi.' },
  { href: '/hizmetler/bakim', title: 'Site Bakımı', desc: 'Güvenlik güncellemeleri, yedekleme ve 7/24 teknik destek.' },
  { href: '/hizmetler/teknoloji', title: 'Teknoloji Altyapısı', desc: 'Next.js, React, .NET Core ve modern teknolojilerle geliştirme.' },
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Hizmetlerimiz</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">İşletmeniz için ihtiyacınız olan tüm dijital çözümler tek çatı altında.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hizmetler.map((h) => (
            <Link key={h.href} href={h.href} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg hover:border-primary-300 transition-all">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{h.title}</h2>
              <p className="text-slate-600 dark:text-slate-400">{h.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
