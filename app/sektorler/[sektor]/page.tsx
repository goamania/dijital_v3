import type { Metadata } from 'next';

const meta: Record<string, { title: string; desc: string; content: string; items: string[] }> = {
  'e-ticaret': {
    title: 'E-ticaret Sektörü | Dijital V3',
    desc: 'Online satışlarınızı artıracak e-ticaret web sitesi çözümleri.',
    content: 'E-ticaret sektöründe faaliyet gösteren işletmelere özel, yüksek dönüşüm oranlı online mağaza ve pazaryeri entegrasyonları geliştiriyoruz.',
    items: ['Online mağaza kurulumu', 'Ödeme sistemi entegrasyonu', 'Stok yönetimi', 'Çoklu dil desteği', 'Mobil alışveriş optimizasyonu'],
  },
  saglik: {
    title: 'Sağlık Sektörü | Dijital V3',
    desc: 'Hastane, klinik ve sağlık kuruluşları için profesyonel web çözümleri.',
    content: 'Sağlık sektörünün KVKK ve hasta gizliliği gibi özel gereksinimlerini karşılayan, randevu ve hasta portalı entegrasyonlu web platformları.',
    items: ['Hasta portalı geliştirme', 'Online randevu sistemi', 'Teletıp entegrasyonu', 'KVKK uyumlu altyapı', 'Sağlık turizmi web sitesi'],
  },
  emlak: {
    title: 'Emlak Sektörü | Dijital V3',
    desc: 'Gayrimenkul portalları ve emlak ofisleri için özel web çözümleri.',
    content: 'Emlak sektörüne özel gelişmiş arama, sanal tur ve ilan yönetim sistemleriyle gayrimenkul işletmelerini dijitale taşıyoruz.',
    items: ['Emlak listeleme platformu', 'Sanal tur entegrasyonu', 'Gelişmiş arama/filtreleme', 'Emlak danışmanı paneli', 'Harita entegrasyonu'],
  },
  restoran: {
    title: 'Restoran Sektörü | Dijital V3',
    desc: 'Restoran ve kafeler için online sipariş ve rezervasyon çözümleri.',
    content: 'Restoran işletmelerine özel dijital menü, online sipariş ve masa rezervasyon sistemleriyle müşteri deneyimini iyileştiriyoruz.',
    items: ['Online sipariş sistemi', 'Masa rezervasyonu', 'Dijital menü (QR)', 'Paket servis yönetimi', 'Sadakat programı entegrasyonu'],
  },
  'seyahat-acentalari': {
    title: 'Seyahat Acentaları | Dijital V3',
    desc: 'Seyahat acentaları için online rezervasyon, tur paketi yönetimi ve çok dilli web platformları.',
    content: 'Seyahat acentalarına özel; tur paketi yönetimi, online rezervasyon, ödeme entegrasyonu ve çok dilli destek sunan kapsamlı web çözümleri geliştiriyoruz. Define Tours ve Kemer Car Rental gibi başarılı projelerimizle seyahat sektöründe kanıtlanmış deneyime sahibiz.',
    items: ['Online rezervasyon sistemi', 'Tur paketi yönetimi', 'Çoklu dil desteği (TR, EN, DE, RU)', 'Online ödeme entegrasyonu', 'Canlı destek ve WhatsApp entegrasyonu', 'SEO ve Google Haritalar optimizasyonu'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ sektor: string }> }) {
  const { sektor } = await params;
  const data = meta[sektor];
  return {
    title: data?.title || 'Sektör | Dijital V3',
    description: data?.desc,
    alternates: { canonical: `https://www.dijitalv3.com/sektorler/${sektor}` },
  };
}

export default async function SektorPage({ params }: { params: Promise<{ sektor: string }> }) {
  const { sektor } = await params;
  const data = meta[sektor];
  if (!data) return <main className="min-h-screen pt-24 pb-16"><div className="max-w-4xl mx-auto px-4"><h1 className="text-4xl font-bold">Sektör bulunamadı</h1></div></main>;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{data.title.split('|')[0].trim()}</h1>
        <p className="text-xl text-slate-600 mb-8">{data.desc}</p>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>{data.content}</p>
          <h2>Hizmet Kapsamı</h2>
          <ul>{data.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </main>
  );
}
