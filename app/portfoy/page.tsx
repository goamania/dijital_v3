import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portföy | Dijital V3',
  description: 'Tamamladığımız projeler. Kemer Car Rental ve Define Tours başta olmak üzere öne çıkan çalışmalarımız.',
  alternates: { canonical: 'https://www.dijitalv3.com/portfoy' },
};

const projeler = [
  {
    title: 'Kemer Car Rental',
    url: 'https://kemercarrental.com/',
    kategori: 'Araç Kiralama',
    aciklama: 'Online rezervasyon, filo yönetimi ve çok dilli destek ile Kemer bölgesinin lider araç kiralama platformu. 200+ araç filosu, 5 dil desteği ve entegre online ödeme sistemiyle hizmet veriyor.',
    detaylar: [
      '200+ araç filosu yönetimi',
      '5 dil desteği (TR, EN, DE, RU, AR)',
      'Online rezervasyon ve ödeme entegrasyonu',
      'Mobil uyumlu responsive tasarım',
      'SEO optimize altyapı',
      'Admin panel ile filo ve fiyat yönetimi',
    ],
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · TypeScript · Tailwind CSS · PHP Backend',
    yil: '2024',
  },
  {
    title: 'Define Tours',
    url: 'https://www.definetours.com/',
    kategori: 'Turizm & Seyahat',
    aciklama: 'Tur paketleri, online ödeme ve canlı destek ile Antalya bölgesinde turizm acentesi web platformu. 50+ tur paketi, 3 dil desteği ve entegre rezervasyon sistemi.',
    detaylar: [
      '50+ tur paketi yönetimi',
      '3 dil desteği (TR, EN, DE)',
      'Online ödeme ve rezervasyon sistemi',
      'Canlı destek entegrasyonu',
      'SEO ve içerik stratejisi',
      'Sosyal medya entegrasyonu',
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · TypeScript · Tailwind CSS · Node.js Backend',
    yil: '2024',
  },
  {
    title: 'Lüks E-ticaret Platformu',
    url: '#',
    kategori: 'E-ticaret',
    aciklama: 'Dönüşümlerde %45 artış sağlayan kapsamlı yeniden tasarım. Modern UI/UX yaklaşımıyla alışveriş deneyimini baştan yarattık.',
    detaylar: [
      'Ödeme sistemleri entegrasyonu',
      'Stok ve sipariş yönetimi',
      'Mobil öncelikli tasarım',
      '%45 dönüşüm artışı',
      'A/B testi optimize edilmiş',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · Tailwind CSS · PostgreSQL',
    yil: '2025',
  },
  {
    title: 'Sağlık Platformu',
    url: '#',
    kategori: 'Sağlık',
    aciklama: 'Online randevu ve teletıp entegrasyonlu hasta portalı. Hasta memnuniyetini %85 artıran kapsamlı dijital dönüşüm projesi.',
    detaylar: [
      'Online randevu sistemi',
      'Teletıp entegrasyonu',
      'Hasta portalı ve kayıt yönetimi',
      'KVKK uyumlu altyapı',
      '%85 hasta memnuniyet artışı',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · .NET Core · SQL Server',
    yil: '2025',
  },
  {
    title: 'Emlak Pazaryeri',
    url: '#',
    kategori: 'Emlak',
    aciklama: 'Sanal tur ve gelişmiş arama özellikli emlak platformu. İlan sayısında %200, potansiyel müşteri kazanımında %156 artış.',
    detaylar: [
      'Gelişmiş arama ve filtreleme',
      'Sanal tur entegrasyonu',
      'Emlak danışmanı paneli',
      'Harita ve konum bazlı arama',
      'Otomatik ilan yayınlama',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · TypeScript · MongoDB',
    yil: '2025',
  },
  {
    title: 'Restoran Zinciri Dijitalleşme',
    url: '#',
    kategori: 'Restoran',
    aciklama: 'Online sipariş ve rezervasyon sistemli çok lokasyonlu restoran web sitesi. Siparişlerde %78, rezervasyonlarda %92 artış.',
    detaylar: [
      'Online sipariş sistemi',
      'Masa rezervasyon yönetimi',
      'Dijital QR menü',
      'Çoklu lokasyon desteği',
      'Sadakat programı entegrasyonu',
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    teknoloji: 'Next.js · Tailwind CSS · Firebase',
    yil: '2025',
  },
];

export default function PortfoyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Çalışmalarımız
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Öne Çıkan <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Projeler</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stratejik web tasarımı ve yazılım geliştirme ile müşterilerimize nasıl olağanüstü sonuçlar kazandırdığımızı görün.
          </p>
        </div>

        {/* Proje Kartları */}
        <div className="space-y-12">
          {projeler.map((proje, index) => (
            <div
              key={proje.title}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } md:flex`}
            >
              {/* Görsel */}
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px] bg-slate-100">
                <Image
                  src={proje.image}
                  alt={`${proje.title} - ${proje.kategori} projesi`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Canlı site badge (gerçek projeler için) */}
                {proje.url !== '#' && (
                  <a
                    href={proje.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Canlı Site
                  </a>
                )}
              </div>

              {/* İçerik */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {proje.kategori}
                  </span>
                  <span className="text-xs text-slate-400">{proje.yil}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  {proje.title}
                </h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {proje.aciklama}
                </p>

                {/* Detay Listesi */}
                <ul className="space-y-2 mb-6">
                  {proje.detaylar.map((detay) => (
                    <li key={detay} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-primary-500 mt-0.5">▸</span>
                      {detay}
                    </li>
                  ))}
                </ul>

                {/* Teknoloji & Link */}
                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full font-mono">
                    {proje.teknoloji}
                  </span>
                  {proje.url !== '#' ? (
                    <a
                      href={proje.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 transition-colors"
                    >
                      {proje.url.replace('https://', '')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">Detaylı bilgi için iletişime geçin</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">Siz de böyle bir proje hayal ediyor musunuz?</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Projenizi Anlatın
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

