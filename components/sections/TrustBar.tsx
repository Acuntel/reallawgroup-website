const CREDENTIALS = [
  { name: "Super Lawyers Rising Star 2022-2024" },
  { name: "Illinois State Bar Association" },
  { name: "Chicago Bar Association" },
  { name: "Lake County Bar Association" },
  { name: "U.S. Supreme Court Admitted" },
  { name: "Top 10 Under 40 — NAPIA" },
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-light-gold border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {CREDENTIALS.map((cred) => (
            <span
              key={cred.name}
              className="text-sm font-semibold text-primary tracking-wide whitespace-nowrap"
            >
              {cred.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
