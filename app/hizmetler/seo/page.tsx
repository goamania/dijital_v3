import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Hizmeti | Dijital V3',
  description: 'Google\'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve AEO/GEO optimizasyonu ile organik trafiğinizi artırıyoruz.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/seo' },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">SEO Optimizasyonu</h1>
        <p className="text-xl text-slate-600 mb-8">Google, Bing ve yapay zeka arama motorlarında görünürlüğünüzü artırıyoruz.</p>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>SEO (Arama Motoru Optimizasyonu), web sitenizin arama motorlarında üst sıralarda yer almasını sağlayan stratejik bir süreçtir. Teknik SEO, içerik optimizasyonu ve AEO/GEO stratejileriyle organik trafiğinizi katlıyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Teknik SEO denetimi ve iyileştirme</li><li>Anahtar kelime araştırması ve stratejisi</li><li>Schema.org yapılandırılmış veri</li><li>AEO (Answer Engine) optimizasyonu</li><li>GEO (Generative Engine) optimizasyonu</li><li>Core Web Vitals iyileştirme</li></ul>
        </div>
      </div>
    </main>
  );
}
