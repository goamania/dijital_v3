import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vaka Çalışmaları | Dijital V3',
  description: 'Müşterilerimizin başarı hikayeleri. Dijital dönüşüm projelerimizin detaylı analizleri.',
  alternates: { canonical: 'https://www.dijitalv3.com/vaka-calismalari' },
};

export default function VakaCalismalariPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Vaka Çalışmaları</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">Müşterilerimizin dijital dönüşüm yolculukları.</p>
        <p className="text-slate-500">Vaka çalışmalarımız yakında yayında. Portföy bölümünü inceleyebilirsiniz.</p>
      </div>
    </main>
  );
}
