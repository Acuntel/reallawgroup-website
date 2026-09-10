import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Scale,
  ShieldQuestion,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  DEADLINES,
  EVIDENCE,
  FAULT_POINTS,
  HOW_WE_HELP,
  INSURANCE_POINTS,
  SCENARIOS,
} from "./content";
import { FAQS } from "./faqs";

export const metadata = generatePageMetadata({
  title: "E-Bike & Scooter Accident Claims in Illinois",
  description:
    "Hurt in an e-bike, e-scooter, or e-moto crash in Illinois? Who pays when the rider has no insurance, how the January 2027 law changes fault, and the one-year deadline that catches people out. Free consultation. Call (630) 299-7600.",
  path: "/practice-areas/e-bike-accidents",
});

export default function EBikeAccidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "E-Bike & Scooter Accidents" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            E-Bike &amp; Scooter Accident Claims
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Electric bikes and scooters put riders into traffic at car speeds
            with none of the protection and, very often, none of the insurance.
            When someone is hurt, the first question is rarely who was at fault.
            It is which policy is going to pay, and that answer is different for
            an e-bike than it is for a car.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "E-Bike & Scooter Accidents" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="rounded-xl border border-border bg-light-gold p-6 mb-14">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-semibold text-lg mb-2">
                  If a crash just happened, three things matter today
                </h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  Get medical attention and keep the record. Keep the machine
                  exactly as it is, because the device and the label on it are
                  evidence. Do not give a recorded statement to an insurance
                  adjuster before you have spoken with a lawyer.
                </p>
                <p className="text-text-muted leading-relaxed">
                  If a city, village, township, or park district may be
                  responsible for the road or path, the filing deadline can be{" "}
                  <strong className="text-text">one year</strong>, not two.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            The insurance question, explained properly
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            This is where most e-bike cases are won or lost, and it is where the
            general advice online is least reliable. An e-bike is not a car, and
            the coverage does not work the way people assume.
          </p>
          <div className="space-y-4 mb-14">
            {INSURANCE_POINTS.map((p) => (
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

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Common situations, and the trap in each one
          </h2>
          <div className="space-y-4 mb-14">
            {SCENARIOS.map((s) => (
              <div
                key={s.scenario}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {s.scenario}
                </h3>
                <dl className="space-y-2 text-sm leading-relaxed">
                  <div>
                    <dt className="inline font-semibold">The claim. </dt>
                    <dd className="inline text-text-muted">{s.theory}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">Likely coverage. </dt>
                    <dd className="inline text-text-muted">{s.coverage}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-secondary">
                      Watch out.{" "}
                    </dt>
                    <dd className="inline text-text-muted">{s.pitfall}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            How the new law changes the fault fight
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Illinois&apos; new e-bike framework, Public Act 104-0854, takes
            effect January 1, 2027. It does not create a new type of lawsuit. It
            creates a longer list of rules that either side can point to when
            fault is argued.
          </p>
          <ul className="space-y-3 mb-8">
            {FAULT_POINTS.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/resources/illinois-e-bike-law"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline mb-14"
          >
            Read our full guide to the Illinois e-bike law taking effect January
            1, 2027
            <ArrowRight className="w-4 h-4" />
          </Link>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Deadlines that decide cases
          </h2>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-left text-sm border border-border rounded-lg">
              <thead className="bg-light-gold">
                <tr>
                  <th className="p-4 font-heading font-semibold">Claim</th>
                  <th className="p-4 font-heading font-semibold">
                    Time to file
                  </th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map((d) => (
                  <tr key={d.claim} className="border-t border-border">
                    <td className="p-4 align-top font-medium">
                      {d.claim}
                      <span className="block text-xs text-text-muted font-normal mt-1">
                        {d.citation}
                      </span>
                    </td>
                    <td className="p-4 align-top text-text-muted">
                      {d.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-secondary bg-background p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                These are general periods, and the one that applies to your
                claim depends on who is responsible and when the injury was
                discovered. Exceptions can shorten them. Treat the earliest
                plausible deadline as the real one.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            What to do in the first 48 hours
          </h2>
          <ul className="space-y-3 mb-14">
            {EVIDENCE.map((e) => (
              <li key={e} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{e}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            How REAL Law Group helps
          </h2>
          <div className="space-y-4 mb-14">
            {HOW_WE_HELP.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
                <p className="text-text-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Disclaimer"
            paragraphs={[
              "This page is general information about Illinois law, current as of September 9, 2026. It is not legal advice, no attorney-client relationship is created by reading it or by contacting the firm, and every case depends on its own facts. Personal injury matters are referred to and handled by attorneys in the network REAL Law Group works with. Prior results do not guarantee a similar outcome, and no outcome is ever guaranteed.",
            ]}
          />

          <ConsultationCTA
            heading="Tell us what happened"
            body="A consultation costs nothing and there is no obligation. Bring the police report if you have one, photographs of the machine and its label, and any letter you have received from an insurer."
            contactHref="/contact"
            contactLabel="Contact the Firm"
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
