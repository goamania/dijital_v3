import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Dijital V3',
  description: 'Dijital V3 web sitesi kullanım şartları ve koşulları.',
  alternates: { canonical: 'https://www.dijitalv3.com/sartlar' },
};

export default function SartlarPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Kullanım Şartları</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.</p>
          <h2>Hizmet Kapsamı</h2>
          <p>Dijital V3, web tasarım, SEO ve dijital danışmanlık hizmetleri sunar. Fiyatlar ve hizmet kapsamı önceden haber verilmeksizin değiştirilebilir.</p>
          <h2>Fikri Mülkiyet</h2>
          <p>Site içeriği, tasarım ve kodlar Dijital V3\'e aittir. İzinsiz kullanımı yasaktır.</p>
        </div>
      </div>
    </main>
  );
}
