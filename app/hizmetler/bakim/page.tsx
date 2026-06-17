import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Site Bakımı | Dijital V3',
  description: 'Güvenlik güncellemeleri, yedekleme ve 7/24 teknik destek. Web siteniz her zaman güncel ve güvende.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/bakim' },
};

export default function BakimPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Site Bakımı</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Web sitenizin güvenli, hızlı ve güncel kalmasını sağlıyoruz.</p>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p>Düzenli güvenlik güncellemeleri, yedekleme, performans izleme ve içerik güncellemeleri ile web sitenizin sorunsuz çalışmasını garanti ediyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Güvenlik güncellemeleri ve yamalar</li><li>Günlük otomatik yedekleme</li><li>Performans izleme ve raporlama</li><li>İçerik güncelleme desteği</li><li>7/24 acil durum desteği</li><li>SSL sertifika yönetimi</li></ul>
        </div>
      </div>
    </main>
  );
}
