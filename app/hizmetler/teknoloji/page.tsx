import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknoloji Altyapısı | Dijital V3',
  description: 'Next.js, React, TypeScript, Tailwind CSS ve .NET Core ile modern web uygulamaları geliştiriyoruz.',
  alternates: { canonical: 'https://www.dijitalv3.com/hizmetler/teknoloji' },
};

export default function TeknolojiPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Teknoloji Altyapısı</h1>
        <p className="text-xl text-slate-600 mb-8">En güncel teknolojilerle hızlı, ölçeklenebilir ve güvenli çözümler üretiyoruz.</p>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>Next.js, React, TypeScript, Tailwind CSS gibi modern frontend teknolojileri ve .NET Core, SQL Server gibi güçlü backend altyapılarıyla kurumsal projeler geliştiriyoruz.</p>
          <h2>Kullandığımız Teknolojiler</h2>
          <ul><li>Next.js 16 + React 19 (Frontend)</li><li>TypeScript (Tip güvenliği)</li><li>Tailwind CSS (Modern UI)</li><li>.NET Core 8 (Backend)</li><li>SQL Server / PostgreSQL (Veritabanı)</li><li>Vercel / Azure (Hosting)</li></ul>
        </div>
      </div>
    </main>
  );
}
