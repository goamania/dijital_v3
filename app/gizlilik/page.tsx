import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Dijital V3',
  description: 'Dijital V3 gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.',
  alternates: { canonical: 'https://www.dijitalv3.com/gizlilik' },
};

export default function GizlilikPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Gizlilik Politikası</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          <p>Dijital V3 olarak, kişisel verilerinizin güvenliği bizim için önceliklidir. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında verilerinizin nasıl işlendiğini açıklar.</p>
          <h2>Toplanan Veriler</h2>
          <p>İletişim formu aracılığıyla ad, e-posta, telefon ve şirket bilgileriniz toplanmaktadır.</p>
          <h2>Verilerin Kullanımı</h2>
          <p>Toplanan veriler yalnızca sizinle iletişim kurmak ve hizmet talebinizi değerlendirmek için kullanılır. Üçüncü kişilerle paylaşılmaz.</p>
          <h2>Haklarınız</h2>
          <p>KVKK kapsamında verilerinize erişme, düzeltme ve silme hakkına sahipsiniz. Talepleriniz için kaksoy@gmail.com adresine yazabilirsiniz.</p>
        </div>
      </div>
    </main>
  );
}
