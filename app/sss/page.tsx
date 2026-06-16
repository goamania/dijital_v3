import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Dijital V3',
  description: 'Web tasarım, SEO ve dijital hizmetlerimiz hakkında en çok sorulan sorular ve yanıtları.',
  alternates: { canonical: 'https://www.dijitalv3.com/sss' },
};

const faqs = [
  { q: 'Profesyonel bir web sitesi ne kadar tutar?', a: 'Özel web tasarım paketlerimiz 7.500 TL\'den başlar. Kurumsal siteler 15.000 TL, e-ticaret çözümleri 35.000 TL\'den başlamaktadır.' },
  { q: 'Web sitesi yapımı ne kadar sürer?', a: 'Standart kurumsal siteler 4-8 hafta, e-ticaret platformları 8-12 hafta arası tamamlanır.' },
  { q: 'SEO hizmeti veriyor musunuz?', a: 'Evet, tüm sitelerimiz temel SEO ile gelir. Ayrıca gelişmiş SEO paketlerimiz de mevcuttur.' },
  { q: 'Siteyi kendim güncelleyebilir miyim?', a: 'Evet, tüm projelerimizi kullanıcı dostu yönetim paneli ile teslim ediyoruz.' },
  { q: 'Hangi teknolojileri kullanıyorsunuz?', a: 'Next.js, React, TypeScript, Tailwind CSS ve .NET Core başta olmak üzere en güncel teknolojileri kullanıyoruz.' },
];

export default function SSSPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h1>
        <p className="text-xl text-slate-600 mb-12">Hizmetlerimiz hakkında en çok merak edilenler.</p>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h2>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
