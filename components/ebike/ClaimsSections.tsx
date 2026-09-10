import { CheckCircle, Scale, ShieldQuestion } from "lucide-react";

/**
 * Presentational blocks for the e-bike and scooter injury pages.
 *
 * Shared by the English, Spanish, and Polish versions so the three stay in
 * structural lockstep while each supplies its own translated data and labels.
 */

interface InsurancePoint {
  heading: string;
  body: string;
}

export function InsurancePoints({
  items,
}: {
  items: readonly InsurancePoint[];
}) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((p) => (
        <div
          key={p.heading}
          className="rounded-xl border border-border bg-background p-6"
        >
          <h3 className="font-heading font-semibold mb-2 flex items-start gap-2">
            <ShieldQuestion className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            {p.heading}
          </h3>
          <p className="text-text-muted leading-relaxed pl-7">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

interface Scenario {
  scenario: string;
  theory: string;
  coverage: string;
  pitfall: string;
}

export function ScenarioList({
  items,
  labels,
}: {
  items: readonly Scenario[];
  labels: { theory: string; coverage: string; pitfall: string };
}) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((s) => (
        <div key={s.scenario} className="rounded-xl border border-border p-6">
          <h3 className="font-heading font-semibold text-lg mb-3">
            {s.scenario}
          </h3>
          <dl className="space-y-2 text-sm leading-relaxed">
            <div>
              <dt className="inline font-semibold">{labels.theory} </dt>
              <dd className="inline text-text-muted">{s.theory}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">{labels.coverage} </dt>
              <dd className="inline text-text-muted">{s.coverage}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-secondary">
                {labels.pitfall}{" "}
              </dt>
              <dd className="inline text-text-muted">{s.pitfall}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

export function FaultPoints({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
          <span className="text-text-muted leading-relaxed">{f}</span>
        </li>
      ))}
    </ul>
  );
}

interface Deadline {
  claim: string;
  period: string;
  citation: string;
}

export function DeadlineTable({
  items,
  headings,
}: {
  items: readonly Deadline[];
  headings: { claim: string; period: string };
}) {
  return (
    <div className="overflow-x-auto mb-14">
      <table className="w-full text-left text-sm border border-border rounded-lg">
        <thead className="bg-light-gold">
          <tr>
            <th className="p-4 font-heading font-semibold">{headings.claim}</th>
            <th className="p-4 font-heading font-semibold">
              {headings.period}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.claim} className="border-t border-border">
              <td className="p-4 align-top font-medium">
                {d.claim}
                <span className="block text-xs text-text-muted font-normal mt-1">
                  {d.citation}
                </span>
              </td>
              <td className="p-4 align-top text-text-muted">{d.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EvidenceList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 mb-14">
      {items.map((e) => (
        <li key={e} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
          <span className="text-text-muted leading-relaxed">{e}</span>
        </li>
      ))}
    </ul>
  );
}

interface HelpItem {
  title: string;
  body: string;
}

export function HelpList({ items }: { items: readonly HelpItem[] }) {
  return (
    <div className="space-y-4 mb-14">
      {items.map((h) => (
        <div
          key={h.title}
          className="rounded-xl border border-border bg-background p-6"
        >
          <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
          <p className="text-text-muted leading-relaxed">{h.body}</p>
        </div>
      ))}
    </div>
  );
}
