import { CONTACT } from "@/lib/constants";

/**
 * Renders the non-affiliation and general-information disclaimer that must
 * appear on every page naming a third-party home-buying company.
 *
 * Why this exists: naming a company in page copy is not by itself an Illinois
 * RPC 7.1 problem, but a page that names companies without disclaiming
 * affiliation can imply sponsorship or association. That implication is what
 * 815 ILCS 510/2(a)(2)-(3) and Lanham Act section 43(a)(1)(A) reach, and
 * neutral tone is not a defense to it because confusion, not disparagement,
 * is the element. RPC 7.1 cmt [3] also treats a disclaimer as the rule's own
 * cure for statements that could create unjustified expectations.
 *
 * Keep the company list here so a page cannot ship naming a company that the
 * disclaimer does not cover. Render it in the first viewport after the
 * named-company block, never behind a link or an accordion.
 */

export const NAMED_HOME_BUYERS = [
  "Grandview Homes",
  "Kendall Partners",
  "Big Door Home Buyers",
  "Direct Property Aid",
] as const;

function formatList(names: readonly string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")}, or ${names[names.length - 1]}`;
}

interface ThirdPartyDisclaimerProps {
  /** Overrides the default roster when a page names a narrower set. */
  companies?: readonly string[];
}

export default function ThirdPartyDisclaimer({
  companies = NAMED_HOME_BUYERS,
}: ThirdPartyDisclaimerProps) {
  return (
    <aside
      aria-label="Disclaimer"
      className="rounded-xl border border-border bg-background p-6 text-xs leading-relaxed text-text-muted"
    >
      <p className="mb-3">
        REAL Law Group, P.C. is not affiliated with, endorsed by, sponsored by,
        or acting on behalf of {formatList(companies)}. These companies are
        named only to identify the party whose purchase agreement we are asked
        to review. All company names and marks are the property of their
        respective owners.
      </p>
      <p className="mb-3">
        This page is general information about contract review. It is not legal
        advice, it is not a statement about any particular company or contract,
        and no attorney-client relationship is created by reading it or by
        contacting us. Every purchase agreement is different, and outcomes
        depend on the specific document and the specific facts. Prior results do
        not guarantee a similar outcome.
      </p>
      <p>
        REAL Law Group, P.C., {CONTACT.address}. {CONTACT.phone}.
      </p>
    </aside>
  );
}
