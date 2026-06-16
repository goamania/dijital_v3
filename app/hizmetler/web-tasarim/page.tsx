import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Tasarım Hizmeti | Dijital V3',
  description: 'Kurumsal web tasarım, responsive site geliştirme ve SEO uyumlu modern web siteleri. Next.js ve Tailwind CSS ile profesyonel çözümler.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/web-tasarim' },
};

export default function WebTasarimPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Web Tasarım</h1>
        <p className="text-xl text-slate-600 mb-8">Kurumsal kimliğinizi yansıtan, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz.</p>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>Modern web teknolojileri (Next.js, React, TypeScript, Tailwind CSS) kullanarak işletmenize özel, mobil uyumlu ve SEO optimize web siteleri geliştiriyoruz. Her projede performans, erişilebilirlik ve kullanıcı deneyimini ön planda tutuyoruz.</p>
          <h2>Hizmet Kapsamı</h2>
          <ul><li>Kurumsal web sitesi tasarımı</li><li>Landing page (açılış sayfası) geliştirme</li><li>Responsive (mobil uyumlu) tasarım</li><li>SEO uyumlu altyapı</li><li>Hız optimizasyonu (Core Web Vitals)</li><li>İçerik yönetim sistemi entegrasyonu</li></ul>
        </div>
      </div>
    </main>
  );
}
