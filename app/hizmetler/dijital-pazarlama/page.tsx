import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dijital Pazarlama | Dijital V3',
  description: 'Google Ads, sosyal medya reklamları ve içerik pazarlama stratejileriyle markanızı büyütüyoruz.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/dijital-pazarlama' },
};

export default function DijitalPazarlamaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dijital Pazarlama</h1>
        <p className="text-xl text-slate-600 mb-8">Veri odaklı stratejilerle markanızı hedef kitlenizle buluşturuyoruz.</p>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>Google Ads, sosyal medya reklamcılığı, e-posta pazarlama ve içerik stratejisi gibi kanalları kullanarak ölçülebilir sonuçlar elde ediyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Google Ads kampanya yönetimi</li><li>Sosyal medya reklamcılığı (Meta, Instagram)</li><li>İçerik pazarlama stratejisi</li><li>E-posta pazarlama otomasyonu</li><li>Dönüşüm optimizasyonu (CRO)</li><li>A/B testi ve performans raporlama</li></ul>
        </div>
      </div>
    </main>
  );
}
