import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * The closing disclaimer and consultation prompt used by the e-bike guide and
 * claims pages in all three languages.
 *
 * The disclaimer is deliberately a required prop rather than a default: every
 * one of these pages states Illinois law, so each must carry its own accurate,
 * translated wording, and nobody should be able to ship one of these pages
 * without consciously supplying it.
 */

export function LegalDisclaimer({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: readonly string[];
}) {
  return (
    <aside
      aria-label={label}
      className="mt-14 rounded-xl border border-border bg-background p-6 text-xs leading-relaxed text-text-muted"
    >
      {paragraphs.map((p) => (
        <p key={p} className="mb-3">
          {p}
        </p>
      ))}
      <p>
        REAL Law Group, P.C., {CONTACT.address}. {CONTACT.phone}.
      </p>
    </aside>
  );
}

export function ConsultationCTA({
  heading,
  body,
  contactHref,
  contactLabel,
}: {
  heading: string;
  body: string;
  contactHref: string;
  contactLabel: string;
}) {
  return (
    <div className="mt-14 bg-light-gold rounded-lg p-8 text-center">
      <h2 className="text-2xl font-heading font-semibold mb-3">{heading}</h2>
      <p className="text-text-muted mb-6 max-w-xl mx-auto">{body}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={CONTACT.phoneHref}
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          {CONTACT.phone}
        </a>
        <Link
          href={contactHref}
          className="btn-navy inline-flex items-center justify-center"
        >
          {contactLabel}
        </Link>
      </div>
    </div>
  );
}
