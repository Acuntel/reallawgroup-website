import {
  CalendarClock,
  CheckCircle,
  MapPin,
  ShieldAlert,
  XCircle,
} from "lucide-react";

/**
 * Presentational blocks for the Illinois e-bike law guide.
 *
 * The English, Spanish, and Polish guides render identical structures over
 * translated data, so the markup lives here once and each locale passes its
 * own content plus its own column headings. Keeping it shared means a layout
 * fix (for example the mobile card fallback for the age table) lands in all
 * three languages at the same time instead of drifting.
 */

interface Category {
  name: string;
  citation: string;
  test: string;
  detail: string;
  verdict: string;
}

export function CategoryCards({ items }: { items: readonly Category[] }) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((c) => (
        <div
          key={c.name}
          className="rounded-xl border border-border bg-background p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-heading font-semibold text-lg">{c.name}</h3>
            <span className="text-xs text-text-muted">{c.citation}</span>
          </div>
          <p className="text-text font-medium mb-2">{c.test}</p>
          <p className="text-text-muted leading-relaxed mb-3">{c.detail}</p>
          <p className="inline-flex items-start gap-2 text-sm font-semibold text-secondary">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
            {c.verdict}
          </p>
        </div>
      ))}
    </div>
  );
}

interface AgeRule {
  device: string;
  age: string;
  change: string;
  citation: string;
}

/**
 * The age rules read as a three-column table on a wide screen, but that third
 * column is long, so on a phone it forces tall rows with the explanation
 * parked off-screen. Below md the same data renders as stacked cards instead.
 */
export function AgeRules({
  items,
  headings,
}: {
  items: readonly AgeRule[];
  headings: { device: string; age: string; change: string };
}) {
  return (
    <>
      <div className="md:hidden space-y-3 mb-14">
        {items.map((r) => (
          <div
            key={r.device}
            className="rounded-lg border border-border bg-background p-5"
          >
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-semibold">{r.device}</h3>
              <span className="text-secondary font-semibold whitespace-nowrap text-sm">
                {r.age}
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {r.change}
            </p>
            <p className="text-xs text-text-muted mt-1">{r.citation}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto mb-14">
        <table className="w-full text-left text-sm border border-border rounded-lg">
          <thead className="bg-light-gold">
            <tr>
              <th className="p-4 font-heading font-semibold">
                {headings.device}
              </th>
              <th className="p-4 font-heading font-semibold">{headings.age}</th>
              <th className="p-4 font-heading font-semibold">
                {headings.change}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r.device} className="border-t border-border">
                <td className="p-4 align-top font-medium">{r.device}</td>
                <td className="p-4 align-top whitespace-nowrap text-secondary font-semibold">
                  {r.age}
                </td>
                <td className="p-4 align-top text-text-muted">
                  {r.change}
                  <span className="block text-xs mt-1">{r.citation}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

interface WhereRule {
  device: string;
  allowed: string;
  banned: string;
  citation: string;
}

export function WhereRules({
  items,
  labels,
}: {
  items: readonly WhereRule[];
  labels: { allowed: string; banned: string };
}) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((w) => (
        <div key={w.device} className="rounded-xl border border-border p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
            <h3 className="font-heading font-semibold">{w.device}</h3>
            <span className="text-xs text-text-muted">{w.citation}</span>
          </div>
          <p className="flex items-start gap-2 text-text-muted leading-relaxed mb-3">
            <MapPin className="w-4 h-4 text-success shrink-0 mt-1" />
            <span>
              <strong className="text-text">{labels.allowed} </strong>
              {w.allowed}
            </span>
          </p>
          <p className="flex items-start gap-2 text-text-muted leading-relaxed">
            <XCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
            <span>
              <strong className="text-text">{labels.banned} </strong>
              {w.banned}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

interface Duty {
  duty: string;
  detail: string;
  citation: string;
}

export function DutyList({ items }: { items: readonly Duty[] }) {
  return (
    <div className="space-y-3 mb-14">
      {items.map((d) => (
        <div
          key={d.duty}
          className="flex items-start gap-3 rounded-lg border border-border bg-background p-5"
        >
          <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold mb-1">{d.duty}</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              {d.detail}
            </p>
            <p className="text-xs text-text-muted mt-1">{d.citation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface Myth {
  myth: string;
  reality: string;
}

export function MythList({ items }: { items: readonly Myth[] }) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((n) => (
        <div
          key={n.myth}
          className="rounded-xl border border-border p-6 bg-white"
        >
          <p className="flex items-start gap-2 font-semibold mb-2">
            <XCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
            {n.myth}
          </p>
          <p className="text-text-muted leading-relaxed pl-6">{n.reality}</p>
        </div>
      ))}
    </div>
  );
}

interface ActionItem {
  who: string;
  action: string;
}

export function ActionList({ items }: { items: readonly ActionItem[] }) {
  return (
    <div className="space-y-3 mb-14">
      {items.map((b) => (
        <div
          key={b.who}
          className="rounded-lg border-l-4 border-accent bg-background p-5"
        >
          <h3 className="font-semibold mb-1">{b.who}</h3>
          <p className="text-text-muted leading-relaxed text-sm">{b.action}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * The answer-first summary that opens each guide. Children are the <li>
 * elements, because each locale's bullets carry their own inline emphasis
 * around the effective date.
 */
export function SummaryCard({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-light-gold p-6 mb-14">
      <div className="flex items-start gap-3">
        <CalendarClock className="w-5 h-5 text-secondary shrink-0 mt-1" />
        <div>
          <h2 className="font-heading font-semibold text-lg mb-3">{heading}</h2>
          <ul className="space-y-2 text-text-muted leading-relaxed">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}
