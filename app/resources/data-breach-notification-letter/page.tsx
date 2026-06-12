import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  steps,
  freezeVsAlert,
  dataTypeGuides,
  recentBreaches,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "Data Breach Notification Letter? What to Do in Illinois",
  description:
    "Step-by-step Illinois guide after a data breach notification letter: verify it's real, freeze your credit, document losses, and know your legal rights.",
  path: "/resources/data-breach-notification-letter",
});

const ARTICLE_META = {
  title: "What to Do After a Data Breach Notification Letter in Illinois",
  description:
    "A step-by-step guide for Illinois residents who received a data breach notification letter: verifying the letter, credit freezes, fraud alerts, and legal rights.",
  path: "/resources/data-breach-notification-letter",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
};

export default function DataBreachLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(ARTICLE_META)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: "Data Breach Notification Letter Guide" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Received a Data Breach Notification Letter in Illinois?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            What the letter means, the seven steps to take now, and the legal
            rights Illinois gives you — in plain English.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Data Breach Letter Guide" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-sm text-text-muted mb-10">
            Reviewed by{" "}
            <Link
              href="/our-team"
              className="text-primary font-semibold underline hover:text-secondary"
            >
              Vincent Anthony Incopero
            </Link>
            , Managing Partner, REAL Law Group, P.C. · Licensed in Illinois ·
            Last updated June 12, 2026
          </p>

          <div className="mb-16">
            <p className="section-label">Data Breach Letter Guide</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              &ldquo;I received a letter saying my personal information was
              involved in a data breach.&rdquo;
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Don&apos;t panic — but don&apos;t ignore it either. That letter
              exists because Illinois law required the company to tell you.
              Under the Illinois Personal Information Protection Act (815 ILCS
              530), a company that exposes your personal information must notify
              you in the most expedient time possible and without unreasonable
              delay — and if more than 500 Illinois residents are affected, it
              must also report the breach to the Illinois Attorney General.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              &ldquo;Personal information&rdquo; under Illinois law means your
              name combined with a Social Security number, driver&apos;s license
              or state ID number, financial account or card numbers, medical
              information, health insurance information, or biometric data — or
              a username or email address combined with a password that unlocks
              an online account. If you got a letter, at least one of those was
              likely exposed.
            </p>
            <p className="text-text-muted leading-relaxed">
              Here is exactly what to do, step by step.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What to Do After a Data Breach Letter: 7 Steps
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href="https://www.annualcreditreport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                AnnualCreditReport.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.identitytheft.gov/databreach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                IdentityTheft.gov (FTC)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.illinoisattorneygeneral.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                Illinois Attorney General
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Credit Freeze vs. Fraud Alert: Which Should You Choose?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Both are free. A credit freeze is the stronger protection; a fraud
              alert is the lighter, more convenient one. If your Social Security
              number was exposed, most experts recommend the freeze.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    {freezeVsAlert.headers.map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {freezeVsAlert.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-light-gold/50"}
                    >
                      <td className="px-4 py-3 font-semibold text-primary align-top">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.freeze}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.alert}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What to Do Based on What Was Exposed
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {dataTypeGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {guide.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Can I Sue Over a Data Breach in Illinois?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Possibly. Illinois law requires companies to maintain reasonable
              security measures for personal information, and a violation of the
              state&apos;s breach notification law is automatically an unlawful
              practice under the Illinois Consumer Fraud Act. Victims with
              documented losses — fraudulent charges, accounts opened in their
              name, out-of-pocket costs — may have claims, and exposures of
              biometric or genetic information can trigger Illinois statutes
              that provide set statutory damages without proof of identity
              theft. That is why Step 7 above matters: documentation is what
              turns a letter into a claim.
            </p>
            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Free case review for Illinois residents
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  REAL Law Group represents Illinois residents in{" "}
                  <Link
                    href="/practice-areas/data-breach"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    data breach and privacy litigation
                  </Link>{" "}
                  on a contingency basis — no attorney&apos;s fees unless you
                  recover. Have your notification letter handy and{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    contact us
                  </Link>{" "}
                  or call (630) 299-7600.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Breaches That Have Affected Illinois Residents
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Data breaches are not rare events that happen somewhere else.
              Recent publicly reported breaches affecting Illinois residents
              include:
            </p>
            <div className="space-y-4">
              {recentBreaches.map((breach) => (
                <div key={breach.name} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <p className="text-sm text-text-muted leading-relaxed">
                    <span className="font-semibold text-primary">
                      {breach.name}:
                    </span>{" "}
                    {breach.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-relaxed mt-6">
              This list summarizes public reports and disclosures for
              informational purposes. It is not a list of lawsuits, and no court
              has determined that any company listed violated any law.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>

          <p className="text-xs text-text-muted leading-relaxed border-t border-border pt-6">
            Attorney Advertising. This page provides general information for
            Illinois residents and is not legal advice about your specific
            situation. Contacting REAL Law Group, P.C. or submitting a form does
            not create an attorney-client relationship and does not stop any
            statute of limitations or other deadline; representation begins only
            when a written engagement agreement is signed.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Have a data breach letter? Find out where you stand."
        text="Call REAL Law Group at (630) 299-7600 or send us a message for a free, confidential case review. No attorney's fees unless you recover."
        buttonText="Free Case Review"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Related Pages
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/practice-areas/data-breach"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Data Breach & Privacy Litigation
            </Link>
            <Link
              href="/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Data Breach Prevention for Businesses
            </Link>
            <Link
              href="/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevent Wire Fraud
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
