import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Dijital V3',
  description: 'Dijital V3, 2020\'den beri Türkiye\'de web tasarım, SEO ve dijital dönüşüm alanında hizmet veren ödüllü bir ajans.',
  alternates: { canonical: 'https://www.dijitalv3.com/hakkimizda' },
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hakkımızda</h1>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>Dijital V3, 2020 yılında Antalya/Kemer'de kurulmuş, web tasarım, SEO ve dijital dönüşüm alanında uzmanlaşmış bir teknoloji ajansıdır.</p>
          <p>Kurucumuz Koray Aksoy'un 15+ yıllık full-stack geliştirme deneyimiyle, müşterilerimize modern teknolojiler kullanarak yüksek performanslı ve dönüşüm odaklı dijital çözümler sunuyoruz.</p>
          <h2>Misyonumuz</h2>
          <p>İşletmelerin dijital dünyada görünür, rekabetçi ve başarılı olmalarını sağlamak. Her projede en son teknolojileri kullanarak, ölçülebilir sonuçlar elde etmek.</p>
          <h2>Değerlerimiz</h2>
          <ul><li>Şeffaflık: Her aşamada açık iletişim</li><li>Kalite: Ödün vermediğimiz standartlar</li><li>Yenilikçilik: Sürekli güncel teknoloji takibi</li><li>Müşteri Odaklılık: Sizin başarınız bizim başarımız</li></ul>
        </div>
      </div>
    </main>
  );
}
