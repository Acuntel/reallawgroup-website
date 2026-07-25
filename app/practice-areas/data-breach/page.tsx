import Link from "next/link";
import { CheckCircle, FileWarning, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  caseTypes,
  ilStatutes,
  evidenceItems,
  processSteps,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "Illinois Data Breach Lawyers — Chicago & DuPage County",
  description:
    "Received a data breach notification letter? REAL Law Group represents Illinois residents in data breach and privacy claims. Free case review. (630) 299-7600.",
  path: "/practice-areas/data-breach",
});

export default function DataBreachPage() {
  return (
    <>
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
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Data Breach & Privacy Litigation" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Data Breach & Privacy Litigation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Representing Illinois residents whose personal information was
            exposed in a data breach. Free, confidential case review — no
            attorney&apos;s fees unless you recover.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Data Breach & Privacy" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Data Breach & Privacy</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Received a Data Breach Notification Letter?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              If a company sent you a letter saying your personal information
              was involved in a data breach, that letter exists because Illinois
              law required it. It also means your Social Security number,
              medical records, financial accounts, or other private information
              may now be in criminals&apos; hands. You may have legal rights
              under Illinois and federal law — and acting promptly protects both
              your identity and your potential claim.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group represents individuals and families across
              Chicagoland, Cook County, and DuPage County in data breach and
              privacy matters, and co-counsels active data breach cases with
              experienced national data breach litigation firms. You get a local
              attorney you can actually sit down with in Elmhurst — backed by
              the resources these cases demand.
            </p>

            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <FileWarning className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Got a &ldquo;Notice of Data Breach&rdquo; letter? Keep it.
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  The letter identifies what was exposed and when — it is the
                  single most important document in your case. Don&apos;t throw
                  it away. Then follow our{" "}
                  <Link
                    href="/resources/data-breach-notification-letter"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    step-by-step Illinois guide on what to do after a data
                    breach letter
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Illinois Has Some of the Strongest Privacy Laws in the Country
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Illinois has no single comprehensive privacy statute — instead it
              has a set of focused laws that, together, give Illinois residents
              stronger privacy remedies than residents of almost any other
              state:
            </p>
            <div className="space-y-6">
              {ilStatutes.map((statute) => (
                <div
                  key={statute.citation}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {statute.name}
                  </h3>
                  <a
                    href={statute.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-secondary font-semibold mb-3 hover:underline"
                  >
                    {statute.citation}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {statute.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Breaches We Review for Illinois Residents
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseTypes.map((caseType, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{caseType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What Makes a Data Breach Claim Stronger?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              In 2025, the Illinois Supreme Court held that the increased risk
              of identity theft after a breach is generally not, by itself,
              enough to sue for damages in Illinois state court. What turns a
              notification letter into a viable claim is documentation. Save and
              bring us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {evidenceItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How It Works — and What It Costs
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {processSteps.map((item) => (
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
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              A Local Firm for an Impersonal Problem
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Most data breach victims who look for help online find national
              intake mills: stock photos, anonymous forms, and a firm they will
              never meet. REAL Law Group is different. Managing Partner{" "}
              <Link
                href="/our-team"
                className="text-primary font-semibold underline hover:text-secondary"
              >
                Vincent Anthony Incopero
              </Link>{" "}
              and our team work from a real office in Elmhurst, serve clients in
              English, Spanish, and Polish, and have represented Chicagoland
              families since 2016.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              When a breach case calls for class action resources, we co-counsel
              with experienced national data breach litigation firms on active
              cases — so you get personal, local attention without giving up the
              firepower these cases require. Prior results do not guarantee a
              similar outcome; every case depends on its own facts.
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
            Illinois residents and is not legal advice about any specific
            situation. Contacting REAL Law Group, P.C. or submitting a form does
            not create an attorney-client relationship and does not stop any
            statute of limitations or other deadline; representation begins only
            when a written engagement agreement is signed. Our attorneys are
            licensed in Illinois.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Was your information exposed in a data breach?"
        text="Call REAL Law Group at (630) 299-7600 or send us a message for a free, confidential case review. No attorney's fees unless you recover."
        buttonText="Free Case Review"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Related Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resources/data-breach-notification-letter"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              What to Do After a Data Breach Letter
            </Link>
            <Link
              href="/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Data Breach Prevention for Businesses
            </Link>
            <Link
              href="/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Real Estate Investors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
