/**
 * Skeleton — Yükleme İskeleti Bileşenleri
 * ---------------------------------------------------------------------------
 * Performans/UX: İçerik yüklenirken kullanıcıya boş ekran yerine iskelet
 * gösterimi yaparak CLS (Cumulative Layout Shift) değerini sıfıra indirir.
 * Aynı zamanda algılanan performansı artırır — kullanıcı "bir şey oluyor" hisseder.
 */
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-pulse">
      <div className="w-14 h-14 bg-slate-200 rounded-xl mb-6" />
      <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-slate-100 rounded w-full mb-2" />
      <div className="h-4 bg-slate-100 rounded w-5/6" />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-slate-200 rounded"
          style={{ width: `${100 - i * 15}%` }}
        />
      ))}
    </div>
  );
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-slate-200 rounded-2xl animate-pulse ${className}`} />
  );
}

export function SectionSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16 animate-pulse">
        <div className="w-32 h-8 bg-slate-200 rounded-full mx-auto mb-4" />
        <div className="h-10 bg-slate-200 rounded w-1/2 mx-auto mb-4" />
        <div className="h-6 bg-slate-100 rounded w-2/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
