import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kariyer | Dijital V3',
  description: 'Dijital V3 ekibine katılın. Güncel iş ilanlarımız ve başvuru süreci.',
  alternates: { canonical: 'https://www.dijitalv3.com/kariyer' },
};

export default function KariyerPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Kariyer</h1>
        <p className="text-xl text-slate-600 mb-12">Dijital V3 ailesine katılın, birlikte büyüyelim.</p>
        <p className="text-slate-500">Şu anda açık pozisyonumuz bulunmamaktadır. Güncellemeler için bizi takip edin.</p>
      </div>
    </main>
  );
}
