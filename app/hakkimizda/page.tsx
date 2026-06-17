import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Dijital V3',
  description: 'Dijital V3, 2020\'den beri Antalya/Kemer\'de SEO, AIO, GEO ve AEO optimizasyonu ile modern web teknolojileri alanında uzmanlaşmış ileri düzey teknoloji ajansı.',
  alternates: { canonical: 'https://www.dijitalv3.com/hakkimizda' },
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Hakkımızda</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mb-12">Geleceğin dijital standartlarını bugünden inşa ediyoruz.</p>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6">

          <p className="lead text-xl text-slate-600 dark:text-slate-300">
            <strong>Dijital V3</strong>, 2020 yılında Antalya/Kemer'de kurulmuş; modern web teknolojileri, yeni nesil optimizasyon stratejileri ve uçtan uca dijital dönüşüm alanlarında uzmanlaşmış ileri düzey bir teknoloji ajansıdır.
          </p>

          <p>
            Kurucumuz <strong>Koray Aksoy</strong>'un satış, pazarlama ve iş geliştirme alanlarındaki 20 yılı aşkın sektörel tecrübesi ile Commodore 64 döneminden bu yana gelen köklü ve tutkulu full-stack geliştirme deneyimi, <strong>Dijital V3</strong>'ün vizyonunu oluşturmaktadır. Geleneksel yaklaşımların ötesine geçerek; işletmelerin dijital dünyadaki mimarisini sıfırdan kuruyor, onlara sadece bir web sitesi değil, yüksek performanslı ve doğrudan dönüşüm odaklı dijital varlıklar kazandırıyoruz.
          </p>

          <p>
            Ajansımız; hantallaşmış eski sistemleri geride bırakarak <strong>Next.js, React, Tailwind CSS ve Firebase</strong> gibi modern teknoloji stack'leri ile ultra hızlı, kullanıcı deneyimi (UX) en üst seviyede web platformları inşa eder. Sadece bugünün değil, geleceğin internet ekosistemine de yön veren derin teknik uzmanlığımızla, işletmeleri dört temel optimizasyon disiplininde zirveye taşıyoruz:
          </p>

          {/* SEO-AIO-GEO-AEO Kartları */}
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {[
              { title: 'SEO', full: 'Search Engine Optimization', desc: 'Geleneksel arama motorlarında (Google, Bing) görünürlüğü, teknik altyapıyı (Core Web Vitals) ve organik trafiği en üst seviyeye çıkarma.', color: 'from-blue-500 to-blue-700', icon: '🔍' },
              { title: 'AIO', full: 'AI Optimization', desc: 'Dijital varlıkların, yapay zeka sistemleri tarafından kolayca taranabilmesi, anlamlandırılabilmesi ve doğru indekslenmesi için sistem mimarisinin optimize edilmesi.', color: 'from-purple-500 to-purple-700', icon: '🤖' },
              { title: 'GEO', full: 'Generative Engine Optimization', desc: 'Üretken yapay zeka motorlarının (Perplexity, ChatGPT, Gemini) kullanıcı sorularına yanıt üretirken işletmenizi kaynak ve referans olarak göstermesini sağlayan yeni nesil optimizasyon.', color: 'from-cyan-500 to-cyan-700', icon: '🧠' },
              { title: 'AEO', full: 'Answer Engine Optimization', desc: 'Sesli aramalar ve yapay zeka asistanlarının sunduğu doğrudan yanıtlarda (Featured Snippets) işletmenizin ilk ve en net çözüm olarak konumlandırılması.', color: 'from-emerald-500 to-emerald-700', icon: '🎯' },
            ].map((item) => (
              <div
                key={item.title}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-xs text-white/70">{item.full}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Misyonumuz</h2>
          <p>
            İşletmelerin dijital dünyada sadece var olmalarını değil; görünür, yüksek derecede rekabetçi ve sürdürülebilir bir şekilde başarılı olmalarını sağlamak. Geliştirdiğimiz her projeyi bir mühendislik ve pazarlama harikası olarak ele alarak; <strong>SEO, AIO, GEO ve AEO</strong> entegrasyonlarıyla işletmelere ölçülebilir, veri odaklı ve somut ticari sonuçlar sunmak.
          </p>

          <h2>Vizyonumuz</h2>
          <p>
            Hızla değişen dijital ekosistemde, en güncel teknolojileri ve yapay zeka tabanlı optimizasyon trendlerini ilk uygulayan öncülerden biri olmak; Antalya bölgesinden başlayarak ulusal ve uluslararası ölçekte, işletmeleri geleceğin dijital standartlarına bugünden taşımak.
          </p>

          <h2>Değerlerimiz</h2>
          <ul>
            <li><strong>Teknik Mükemmeliyetçilik:</strong> Kod kalitesinden, sayfa açılış hızlarından ve güvenlikten asla ödün vermeyiz. Geliştirdiğimiz her sistem mimarisi yapay zeka botlarının ve arama motorlarının en sevdiği standartlardadır.</li>
            <li><strong>Şeffaflık ve Açık İletişim:</strong> Projenin planlama aşamasından canlıya alınmasına ve sonrasındaki analiz süreçlerine kadar her adımı verilerle ve tam bir açıklıkla paylaşırız.</li>
            <li><strong>Yenilikçilik (İnovasyon):</strong> Teknoloji dünyasını ve yapay zeka algoritmalarını günü gününe takip eder; işletmenizi her zaman en modern, en güncel ve en efektif araçlarla donatırız.</li>
            <li><strong>Sonuç ve Dönüşüm Odaklılık:</strong> Bizim için başarı sadece şık tasarımlar yapmak değil; o tasarımların işletmenize yeni müşteriler, yüksek trafik ve ciro artışı olarak geri dönmesini sağlamaktır. Sizin başarınız, bizim en büyük referansımızdır.</li>
          </ul>

        </div>
      </div>
    </main>
  );
}

