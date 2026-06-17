/**
 * TechBadges — Hero altı 4 teknik rozet
 * "Next.js | 95+ PageSpeed | AIO Ready | GEO Optimized"
 * Müşteri daha scroll etmeden farkı anlasın.
 */
export default function TechBadges() {
  const badges = [
    { label: 'Next.js', color: 'bg-black text-white dark:bg-white dark:text-black' },
    { label: '95+ PageSpeed', color: 'bg-green-600 text-white' },
    { label: 'AIO Ready', color: 'bg-purple-600 text-white' },
    { label: 'GEO Optimized', color: 'bg-cyan-600 text-white' },
  ];

  return (
    <section className="py-8 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`px-5 py-2.5 rounded-full text-sm font-bold ${badge.color} shadow-lg`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
