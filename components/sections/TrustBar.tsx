'use client';

const credentials = [
  { icon: '⭐', label: 'Top Rated on Expertise.com' },
  { icon: '⚖️', label: 'Illinois State Bar Association' },
  { icon: '🏛️', label: 'Chicago Bar Association' },
  { icon: '📋', label: 'DuPage County Bar Association' },
  { icon: '🏠', label: 'IL Real Estate Lawyers Association' },
  { icon: '🤝', label: 'Justinian Society of Lawyers' },
];

export default function TrustBar() {
  // Double the items for seamless loop
  const items = [...credentials, ...credentials];

  return (
    <section className="bg-white border-b border-border overflow-hidden py-5">
      <div className="trust-scroll-track flex gap-12 items-center w-max">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap text-text-muted text-sm font-medium select-none"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
