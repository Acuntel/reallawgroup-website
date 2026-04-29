import Link from "next/link";
import {
  FileText,
  ExternalLink,
  ShieldAlert,
  Wind,
  Paintbrush,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";

const CONTRACT_PDF_URL =
  "https://chicagorealtor.com/wp-content/uploads/wp-private-media/2025/01/8.0-Multi-Board-Residential-Contract.pdf";
const PROPERTY_DISCLOSURE_PDF_URL =
  "https://www.illinoisrealtors.org/wp-content/uploads/2023/08/108.pdf";
const RADON_DISCLOSURE_PDF_URL =
  "https://www.primeratemortgage.com/img/user_files/6029.pdf";
const LEAD_PAINT_DISCLOSURE_PDF_URL =
  "https://chicagorealtor.com/wp-content/uploads/2024/12/Form-420-10.2024.pdf";

export const metadata = generatePageMetadata({
  title: "Illinois Real Estate Forms & Disclosures",
  description:
    "Plain-English guide to the standard forms used in Chicagoland residential real estate transactions — the Multi-Board Contract, Illinois Property Disclosure, Radon and Lead-Based Paint disclosures, and more.",
  path: "/resources/illinois-real-estate-forms",
});

type FormItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  body: string;
  action:
    | { kind: "download"; href: string; label: string }
    | { kind: "request"; label: string };
};

const forms: FormItem[] = [
  {
    icon: FileText,
    title: "Multi-Board Residential Real Estate Contract",
    blurb:
      "The standard purchase contract used for most single-family and condo sales in the Chicago area.",
    body: "Jointly approved by the Chicago Association of REALTORS® and several Chicagoland bar associations, this is the contract you will most likely sign when buying or selling a home. It sets the price, financing terms, contingencies, attorney review window, inspection rights, and closing date. Illinois law gives both sides a short attorney review period after signing — that is the window where most negotiation actually happens.",
    action: {
      kind: "download",
      href: CONTRACT_PDF_URL,
      label: "Open Contract PDF",
    },
  },
  {
    icon: ClipboardCheck,
    title: "Illinois Residential Real Property Disclosure Report",
    blurb:
      "The seller's sworn statement about known material defects in the property.",
    body: "Required by the Illinois Residential Real Property Disclosure Act (765 ILCS 77) for most residential sales. The seller answers a fixed list of yes/no questions covering the roof, foundation, basement, plumbing, electrical, HVAC, environmental conditions, and known code violations. It is not a warranty, but a knowing misstatement can expose the seller to liability — buyers should read it carefully and follow up on anything flagged.",
    action: {
      kind: "download",
      href: PROPERTY_DISCLOSURE_PDF_URL,
      label: "Open Disclosure PDF",
    },
  },
  {
    icon: Wind,
    title: "Illinois Radon Disclosure",
    blurb:
      "Required radon-awareness disclosure given to buyers before contract.",
    body: "Under the Illinois Radon Awareness Act (420 ILCS 46), sellers of most residential property must give buyers a disclosure form and the IEMA pamphlet describing the health risks of radon. Sellers must also disclose any radon test results and known elevated levels. Radon is a naturally occurring radioactive gas that can collect in basements and lower levels — the only way to know your level is to test.",
    action: {
      kind: "download",
      href: RADON_DISCLOSURE_PDF_URL,
      label: "Open Disclosure PDF",
    },
  },
  {
    icon: Paintbrush,
    title: "Lead-Based Paint Disclosure",
    blurb: "Required federal disclosure for any home built before 1978.",
    body: "The federal Residential Lead-Based Paint Hazard Reduction Act requires sellers (and landlords) of housing built before 1978 to disclose any known lead-based paint or hazards, share any reports they have, and give buyers a 10-day window to conduct a lead inspection. Buyers must also receive the EPA's lead pamphlet and sign the disclosure acknowledgment before the contract is binding.",
    action: {
      kind: "download",
      href: LEAD_PAINT_DISCLOSURE_PDF_URL,
      label: "Open Disclosure PDF",
    },
  },
  {
    icon: BookOpen,
    title: 'EPA Lead Pamphlet — "Protect Your Family From Lead in Your Home"',
    blurb:
      "The federal pamphlet that must accompany every pre-1978 transaction.",
    body: "Issued by the EPA, HUD, and the Consumer Product Safety Commission. It explains where lead is typically found in older homes, the health effects on children and pregnant women, how to test for it, and what to do if it is present. A copy must be delivered to the buyer alongside the lead-based paint disclosure for any pre-1978 home.",
    action: {
      kind: "request",
      label: "Request a Copy",
    },
  },
  {
    icon: ShieldAlert,
    title: "IEMA Radon Testing Guidance",
    blurb:
      "Illinois Emergency Management Agency guidance on testing for radon.",
    body: "The Illinois Emergency Management Agency (IEMA) publishes the official guidance buyers and homeowners use to evaluate radon risk — what action levels matter, how to choose between short-term and long-term tests, when to use a licensed measurement professional, and what mitigation looks like if levels come back elevated.",
    action: {
      kind: "request",
      label: "Request a Copy",
    },
  },
];

export default function IllinoisRealEstateFormsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: "Illinois Real Estate Forms" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Illinois Real Estate Forms &amp; Disclosures
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A plain-English guide to the standard contracts, disclosures, and
            pamphlets you will see in a Chicagoland residential real estate
            transaction.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Illinois Real Estate Forms" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-text-muted leading-relaxed mb-4">
              Buying or selling a home in Illinois involves a stack of standard
              forms — a purchase contract, several disclosures, and a couple of
              federal and state pamphlets. The forms below are the ones you are
              most likely to encounter on a typical Chicagoland residential
              deal.
            </p>
            <p className="text-text-muted leading-relaxed">
              We have summarized what each one is for so you know what you are
              signing. If you would like a copy of any form, or you want an
              attorney to review one before you sign, contact REAL Law Group for
              a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map(({ icon: Icon, title, blurb, body, action }) => (
              <div
                key={title}
                className="bg-light-gold rounded-xl p-7 border border-secondary/30 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="w-7 h-7 text-secondary shrink-0 mt-1" />
                  <div>
                    <h2 className="text-lg font-heading font-semibold text-primary mb-1.5 leading-snug">
                      {title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {blurb}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {body}
                </p>
                <div className="mt-auto">
                  {action.kind === "download" ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      {action.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      {action.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-background border border-border rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-primary mb-3">
              Have an attorney review before you sign
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-2">
              Illinois law builds an attorney review period into the Multi-Board
              contract for a reason — the form is standardized, but the deal is
              not. Inspection responses, financing terms, closing dates,
              credits, and disclosure follow-ups are all negotiated during that
              window.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              REAL Law Group represents buyers and sellers across the Chicago
              area from contract review through closing. If you have a contract
              in hand or a question about any form on this page, we are happy to
              look at it.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need help with a contract or disclosure?"
        text="Our Chicagoland real estate attorneys can review, negotiate, and close on your behalf. Free consultation — call (630) 299-7600."
      />
    </>
  );
}
