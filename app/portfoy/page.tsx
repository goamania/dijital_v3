import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portföy | Dijital V3',
  description: 'Tamamladığımız projeler. E-ticaret, sağlık, emlak ve restoran sektörlerinde başarı hikayelerimiz.',
  alternates: { canonical: 'https://www.dijitalv3.com/portfoy' },
};

export default function PortfoyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Portföy</h1>
        <p className="text-xl text-slate-600 mb-12">Bugüne kadar tamamladığımız projelerden öne çıkanlar.</p>
        <p className="text-slate-500">Portföy sayfası yakında güncellenecek. Ana sayfadaki öne çıkan projeler bölümünü inceleyebilirsiniz.</p>
      </div>
    </main>
  );
}
