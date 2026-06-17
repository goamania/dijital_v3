import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marka Kimliği Tasarımı | Dijital V3',
  description: 'Logo tasarımı, kurumsal kimlik ve marka stratejisi. Markanızı rakiplerinizden ayıracak özgün görsel kimlik.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/marka-kimligi' },
};

export default function MarkaKimligiPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Marka Kimliği Tasarımı</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Markanıza özgün, hatırlanabilir ve profesyonel bir kimlik kazandırıyoruz.</p>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p>Logo tasarımından kurumsal kimlik kılavuzuna, kartvizitten sosyal medya şablonlarına kadar markanızın ihtiyaç duyduğu tüm görsel unsurları bir bütünlük içinde tasarlıyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Logo tasarımı (3 alternatif)</li><li>Kurumsal kimlik kılavuzu</li><li>Kartvizit ve antetli kağıt tasarımı</li><li>Sosyal medya şablonları</li><li>Renk paleti ve tipografi seçimi</li><li>Marka stratejisi danışmanlığı</li></ul>
        </div>
      </div>
    </main>
  );
}
