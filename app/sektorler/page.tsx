import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sektörler | Dijital V3',
  description: 'E-ticaret, sağlık, emlak ve restoran sektörlerine özel web tasarım ve dijital çözümler.',
  alternates: { canonical: 'https://www.dijitalv3.com/sektorler' },
};

const sektorler = [
  { href: '/sektorler/e-ticaret', title: 'E-ticaret', desc: 'Online satış platformları ve pazaryeri entegrasyonları.', icon: '🛒' },
  { href: '/sektorler/saglik', title: 'Sağlık', desc: 'Hasta portalları, randevu sistemleri ve medikal web siteleri.', icon: '🏥' },
  { href: '/sektorler/emlak', title: 'Emlak', desc: 'Gayrimenkul listeleme, sanal tur ve emlak yönetim platformları.', icon: '🏠' },
  { href: '/sektorler/restoran', title: 'Restoran', desc: 'Online sipariş, rezervasyon ve dijital menü çözümleri.', icon: '🍽️' },
];

export default function SektorlerPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hizmet Verdiğimiz Sektörler</h1>
        <p className="text-xl text-slate-600 mb-12">Her sektörün ihtiyacına özel, deneyimle şekillendirilmiş çözümler.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sektorler.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-primary-300 transition-all flex gap-6">
              <span className="text-5xl">{s.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h2>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
