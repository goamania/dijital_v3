import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Dijital V3',
  description: 'Projeniz hakkında konuşalım. Bize ulaşın, 24 saat içinde dönüş yapalım.',
  alternates: { canonical: 'https://www.dijitalv3.com/iletisim' },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">İletişim</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">Projenizden bahsedin, 24 saat içinde size dönüş yapalım.</p>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 space-y-4 border border-slate-200 dark:border-slate-700">
          <p><strong>Adres:</strong> Arslanbucak Mah. Karanfil Cad. No 14/B Kemer, Antalya</p>
          <p><strong>Telefon:</strong> <a href="tel:+905312760791" className="text-primary-600">+90 531 276 0791</a></p>
          <p><strong>E-posta:</strong> <a href="mailto:kaksoy@gmail.com" className="text-primary-600">kaksoy@gmail.com</a></p>
        </div>
        <p className="mt-8 text-slate-500">Hızlı iletişim için ana sayfadaki formu kullanabilirsiniz.</p>
      </div>
    </main>
  );
}
