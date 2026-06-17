import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-ticaret Geliştirme | Dijital V3',
  description: 'Online mağaza kurulumu, ödeme entegrasyonu ve e-ticaret platform geliştirme. Satışlarınızı artıracak modern e-ticaret çözümleri.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/e-ticaret' },
};

export default function ETicaretPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">E-ticaret Geliştirme</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Satışlarınızı artıracak, hızlı ve güvenilir e-ticaret platformları kuruyoruz.</p>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p>Ürün yönetimi, stok takibi, ödeme entegrasyonu ve sipariş yönetimi gibi tüm e-ticaret ihtiyaçlarınızı karşılayan kapsamlı çözümler sunuyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Özel e-ticaret platformu geliştirme</li><li>Ödeme sistemleri entegrasyonu (İyzico, PayTR)</li><li>Stok ve sipariş yönetimi</li><li>Çoklu dil ve para birimi desteği</li><li>Mobil uyumlu alışveriş deneyimi</li><li>SEO optimizasyonlu ürün sayfaları</li></ul>
        </div>
      </div>
    </main>
  );
}
