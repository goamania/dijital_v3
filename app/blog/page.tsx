import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dijital V3',
  description: 'Web tasarım, SEO, dijital pazarlama ve yazılım geliştirme hakkında güncel makaleler ve rehberler.',
  alternates: { canonical: 'https://www.dijitalv3.com/blog' },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-xl text-slate-600 mb-12">Web tasarım, SEO ve yazılım dünyasından güncel içerikler.</p>
        <p className="text-slate-500">Blog yazılarımız yakında yayında. Bizi takip etmeye devam edin.</p>
      </div>
    </main>
  );
}
