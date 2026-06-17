import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Dijital V3 - SEO, AIO, GEO, AEO Uyumlu Dijital Mimari',
  description: 'Define Tours operasyonu ve Commodore 64\'ten gelen 20 yılı aşkın tecrübe. Next.js ile 95+ PageSpeed, Arama Motoru Optimizasyonu (SEO), Yapay Zeka Optimizasyonu (AIO), Üretken Motor (GEO) ve Yanıt Motoru (AEO) optimizasyonu. Akdeniz turizmini içeriden bilen teknoloji stüdyosu.',
  keywords: ['Next.js ajans', 'GEO optimizasyon', 'AEO', 'AIO', 'turizm web tasarım', 'Antalya Kemer web ajansı', '95 PageSpeed'],
  alternates: { canonical: 'https://www.dijitalv3.com/hakkimizda' },
  openGraph: {
    title: 'Dijital V3 | Sınırları Aşan Mühendislik',
    description: 'Hazır şablon yok. 95+ PageSpeed, yapay zeka çağına hazır mimari var.',
    url: 'https://www.dijitalv3.com/hakkimizda',
    type: 'website',
  },
};

export default function HakkimizdaPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.dijitalv3.com/hakkimizda',
        url: 'https://www.dijitalv3.com/hakkimizda',
        name: 'Hakkımızda — Dijital V3',
        description: 'Dijital V3 kurumsal geçmişi, teknoloji stackleri ve dijital dönüşüm vizyonu.',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.dijitalv3.com/#organization',
        name: 'Dijital V3',
        url: 'https://www.dijitalv3.com/',
        logo: 'https://www.dijitalv3.com/logo.png',
        foundingDate: '2020',
        sameAs: [
          'https://www.definetours.com',
          'https://www.linkedin.com/company/dijitalv3',
          'https://www.instagram.com/dijitalv3',
        ],
        areaServed: ['Antalya', 'Kemer', 'Kalkan', 'Fethiye', 'Türkiye'],
        knowsAbout: [
          'Web Design',
          'SEO',
          'Technical SEO',
          'AIO',
          'GEO',
          'AEO',
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Core Web Vitals',
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://www.dijitalv3.com/#koray-aksoy',
        name: 'Koray Aksoy',
        jobTitle: 'Founder, Full Stack Developer and Define Tours Digital Operations Manager',
        worksFor: { '@id': 'https://www.dijitalv3.com/#organization' },
        sameAs: [
          'https://www.definetours.com',
          'https://www.linkedin.com/company/dijitalv3',
        ],
        knowsAbout: [
          'SEO',
          'Technical SEO',
          'Next.js',
          'React',
          'TypeScript',
          'Tourism Technology',
          'AIO',
          'GEO',
          'AEO',
          'Core Web Vitals',
          'PageSpeed Optimization',
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Hakkımızda</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12">Yazılım geliştiren, SEO bilen ve turizm sektörünün içinde çalışan bir ekip.</p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6">

            {/* ── Giriş ── */}
            <p className="lead text-xl text-slate-600 dark:text-slate-300">
              <strong>Dijital V3</strong>, Antalya merkezli bir web tasarım, SEO ve dijital dönüşüm stüdyosudur. Modern web teknolojilerini, teknik SEO uzmanlığını ve yapay zeka odaklı optimizasyon stratejilerini bir araya getirerek işletmelerin dijital görünürlüğünü artırmayı hedefler.
            </p>

            {/* ── Kurucu ── */}
            <p>
              Kurucusu <strong>Koray Aksoy</strong>, yazılım geliştirme ve SEO alanlarındaki deneyiminin yanı sıra Akdeniz turizm sektöründe aktif olarak görev almaktadır. Define Tours'ta satış ve dijital operasyon süreçlerinde yer alan Koray; turizm işletmelerinin müşteri kazanımı, rezervasyon süreçleri, çok dilli web yapıları ve uluslararası pazarlama ihtiyaçlarını sahadan deneyimlemektedir. Bu sayede özellikle turizm, hizmet, emlak, sağlık ve yerel işletmelerin karşılaştığı dijital pazarlama ve müşteri kazanımı sorunlarını yalnızca teknik açıdan değil, operasyonel açıdan da yakından tanımaktadır.
            </p>

            {/* ── Yaklaşım ── */}
            <p>
              Dijital V3 için bir web sitesi yalnızca estetik bir vitrin değildir. Her proje; performans, kullanıcı deneyimi, SEO ve dönüşüm optimizasyonu kriterleriyle değerlendirilir. Amaç, işletmelerin yalnızca internette var olması değil; doğru müşterilere ulaşması ve sürdürülebilir büyüme elde etmesidir.
            </p>

            {/* ── SEO-AIO-GEO-AEO Kartları ── */}
            <p>
              Günümüzde dijital görünürlük yalnızca Google sıralamalarından ibaret değildir. Bu nedenle projelerimize dört temel optimizasyon disiplinini entegre ediyoruz:
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                { title: 'SEO', full: 'Search Engine Optimization', desc: 'Google ve Bing\'de organik görünürlüğü, teknik altyapıyı ve trafiği üst seviyeye çıkarmak.', color: 'from-blue-600 to-blue-800', icon: '🔍' },
                { title: 'AIO', full: 'AI Optimization', desc: 'Yapay zeka sistemlerinin sitenizi doğru tarayıp anlamlandırması için yapılandırılmış veri ve semantik HTML mimarisi.', color: 'from-purple-600 to-purple-800', icon: '🤖' },
                { title: 'GEO', full: 'Generative Engine Optimization', desc: 'ChatGPT, Perplexity ve Gemini gibi üretken motorların işletmenizi kaynak göstermesini sağlamak.', color: 'from-cyan-600 to-cyan-800', icon: '🧠' },
                { title: 'AEO', full: 'Answer Engine Optimization', desc: 'Sesli aramalarda ve AI asistanlarının doğrudan yanıtlarında ilk çözüm olarak konumlanmak.', color: 'from-emerald-600 to-emerald-800', icon: '🎯' },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group relative p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden`}
                >
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

            {/* ── Misyon ── */}
            <h2>Misyonumuz</h2>
            <p>
              İşletmeleri dijital dünyada daha görünür, daha rekabetçi ve daha sürdürülebilir hale getirmek. Geliştirdiğimiz her projeyi teknik mükemmeliyet ve iş sonuçları odağıyla ele alarak; SEO, AIO, GEO ve AEO entegrasyonlarıyla ölçülebilir ticari katkı sağlamak.
            </p>

            {/* ── Vizyon ── */}
            <h2>Vizyonumuz</h2>
            <p>
              Akdeniz bölgesinden başlayarak ulusal ve uluslararası ölçekte, işletmelerin yapay zeka çağının dijital standartlarına uyum sağlamasına yardımcı olan güvenilir teknoloji partneri olmak.
            </p>

            {/* ── Değerler ── */}
            <h2>Değerlerimiz</h2>
            <ul>
              <li><strong>Teknik Mükemmeliyet:</strong> Kod kalitesi, sayfa hızı ve güvenlikten ödün vermeyiz. Her proje yüksek performans hedefiyle geliştirilir.</li>
              <li><strong>Şeffaflık:</strong> Planlamadan lansmana, sonrasındaki analiz süreçlerine kadar her adımı açıkça paylaşırız.</li>
              <li><strong>Yenilikçilik:</strong> Teknoloji dünyasını ve yapay zeka algoritmalarını yakından takip eder, işletmenizi en güncel araçlarla donatırız.</li>
              <li><strong>Sonuç Odaklılık:</strong> Başarı sadece şık bir tasarım değil; o tasarımın işletmenize müşteri, trafik ve büyüme olarak geri dönmesidir.</li>
            </ul>

            {/* ── CTA ── */}
            <div className="not-prose mt-12 p-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl text-white text-center">
              <p className="text-xl font-bold mb-4">
                Projenizi birlikte değerlendirelim.
              </p>
              <p className="text-white/80 mb-6">
                İhtiyacınızı anlayalım, size en uygun çözümü birlikte belirleyelim.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary-700 font-bold rounded-xl hover:shadow-xl transition-all"
              >
                İletişime Geç
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}



