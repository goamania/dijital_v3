import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | Dijital V3',
  description: 'Dijital V3 çerez politikası. Sitemizde kullanılan çerezler ve yönetimi hakkında bilgi.',
  alternates: { canonical: 'https://www.dijitalv3.com/cerezler' },
};

export default function CerezlerPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Çerez Politikası</h1>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>Dijital V3 web sitesi, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır.</p>
          <h2>Çerez Nedir?</h2>
          <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.</p>
          <h2>Kullandığımız Çerezler</h2>
          <ul><li>Zorunlu çerezler: Site çalışması için gereklidir.</li><li>Analitik çerezler: Ziyaretçi trafiğini analiz eder.</li><li>Tercih çerezleri: Dil seçimi gibi tercihlerinizi hatırlar.</li></ul>
        </div>
      </div>
    </main>
  );
}
