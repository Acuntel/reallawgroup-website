import Link from "next/link";
import { AlertTriangle, FileText, Gavel, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  AGE_RULES,
  BEFORE_JANUARY,
  CATEGORIES,
  LAW,
  MOTOR_DRIVEN_DUTIES,
  NOT_IN_THE_LAW,
  WHERE_RULES,
} from "./content";
import { FAQS } from "./faqs";
import {
  ActionList,
  AgeRules,
  CategoryCards,
  DutyList,
  MythList,
  SummaryCard,
  WhereRules,
} from "@/components/ebike/GuideSections";

const TITLE = "Illinois E-Bike Law 2027: What Public Act 104-0854 Changes";
const DESCRIPTION =
  "Illinois' new e-bike and e-scooter law takes effect January 1, 2027. New minimum ages of 15 and 16, no sidewalk riding, license and insurance for machines over 750 watts, and every local ordinance preempted. What the enacted law actually says.";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/resources/illinois-e-bike-law",
});

export default function IllinoisEBikeLawPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: TITLE,
              description: DESCRIPTION,
              path: "/resources/illinois-e-bike-law",
              datePublished: "2026-09-09",
              dateModified: "2026-09-09",
            }),
          ),
        }}
      />
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
              { name: "Resources", url: "/resources" },
              { name: "Illinois E-Bike Law" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Illinois E-Bike Law: What Changes on January 1, 2027
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Illinois now has a statewide framework for e-bikes, e-scooters, and
            the higher-powered machines sold as e-motos. It sets minimum riding
            ages of 15 and 16, keeps every one of these devices off sidewalks,
            requires a driver&apos;s license, title, registration, and insurance
            for anything with a motor rated over 750 watts, and takes local
            e-bike ordinances off the table.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Illinois E-Bike Law" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SummaryCard heading="The short version">
            <li>
              The law is {LAW.publicAct}, enacted as {LAW.bill}. The Governor
              approved it on {LAW.approved} and it takes effect{" "}
              <strong className="text-text">{LAW.effective}</strong>.
            </li>
            <li>
              If your bike has pedals and a motor under 750 watts, nothing about
              licensing changes. There is still no license, plate, registration,
              or insurance requirement.
            </li>
            <li>
              If it has a motor over 750 watts, Illinois now treats it as a
              motor driven cycle, and that means a driver&apos;s license, a
              title, registration, and insurance.
            </li>
            <li>
              New minimum ages arrive for ordinary e-bikes: 15 for Class 1 and
              Class 2, 16 for Class 3, and 16 for every scooter, skateboard, and
              unicycle.
            </li>
          </SummaryCard>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            A correction worth making first
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Much of the coverage still circulating describes a different bill.
            SB 3336, the e-bike bill championed by Secretary of State Alexi
            Giannoulias, passed the Illinois Senate 54 to 0 on April 15, 2026,
            and passed the House 80 to 30 on May 27 with two floor amendments.
            The Senate then had to vote to concur in those amendments and never
            did. On July 2, 2026 the bill was referred back to Assignments under
            Senate Rule 3-9(b), which is where bills go to sit. SB 3336 is not
            law.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            The provisions did become law, on a different vehicle. House Floor
            Amendment 1 placed them onto SB 3484, a Secretary of State omnibus
            bill. It passed both chambers on June 1, 2026, the Governor signed
            it on August 26, 2026, and it is now {LAW.publicAct}. Everything on
            this page is drawn from that enacted text rather than from coverage
            of the bill that stalled.
          </p>
          <div className="flex flex-wrap gap-4 mb-14 text-sm">
            <a
              href={LAW.textUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <FileText className="w-4 h-4" />
              Read {LAW.publicAct}
            </a>
            <a
              href={LAW.statusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <Gavel className="w-4 h-4" />
              SB 3484 legislative history
            </a>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Step one: figure out which category your device is in
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Every rule in the new law depends on the category, and the category
            depends on the motor. The number that matters most is the wattage on
            the manufacturer&apos;s label.
          </p>
          <CategoryCards items={CATEGORIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Minimum riding ages
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            This is the change most families will notice. Illinois previously
            set a minimum age only for Class 3 e-bikes, so a 12 year old on a
            Class 2 throttle bike was riding legally. That ends on{" "}
            {LAW.effective}.
          </p>
          <AgeRules
            items={AGE_RULES}
            headings={{
              device: "Device",
              age: "Minimum",
              change: "What is different",
            }}
          />

          <div className="border-l-4 border-secondary bg-light-gold p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold mb-2">
                  The passenger rule almost nobody is reporting
                </h3>
                <p className="text-text-muted leading-relaxed">
                  An e-bike, gas bicycle, or motor driven cycle built to carry a
                  passenger may not be operated by anyone under 18 while
                  carrying one, unless that passenger is a sibling, stepsibling,
                  child, or stepchild of the rider. Two teenagers doubling up on
                  one e-bike becomes a violation on {LAW.effective}. For
                  scooters and similar devices there is no family exception at
                  all: no passenger unless the device was designed to carry more
                  than one person.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Where each device may be ridden
          </h2>
          <WhereRules
            items={WHERE_RULES}
            labels={{ allowed: "Allowed.", banned: "Not allowed." }}
          />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            If your machine is over 750 watts
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            The reclassification is the substance of this law. An electric motor
            rated over 750 watts and up to 8,000 watts makes the machine a motor
            driven cycle, and the full motor-vehicle apparatus follows. This is
            the category most dirt-bike-style electric machines fall into,
            whatever the shop called them at the point of sale.
          </p>
          <DutyList items={MOTOR_DRIVEN_DUTIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            What the law does not do
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Several widely repeated claims about this law are not in the enacted
            text.
          </p>
          <MythList items={NOT_IN_THE_LAW} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            What to do before January 1
          </h2>
          <ActionList items={BEFORE_JANUARY} />

          <div className="rounded-xl border border-border bg-background p-6 mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                If someone has already been hurt, the legal questions are
                different from the compliance questions on this page. Insurance
                coverage for these devices does not follow the Vehicle Code
                categories, and the deadlines to bring a claim in Illinois are
                shorter than most people expect.{" "}
                <Link
                  href="/practice-areas/e-bike-accidents"
                  className="text-secondary font-semibold hover:underline"
                >
                  See our page on e-bike and scooter injury claims
                </Link>
                .
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Disclaimer"
            paragraphs={[
              "This page is general information about Illinois law, current as of September 9, 2026. It is not legal advice, it is not a substitute for reading the statute or speaking with a lawyer about your own situation, and no attorney-client relationship is created by reading it or by contacting us. Statutes are amended and agencies adopt rules under them, so confirm the current text before relying on any summary.",
            ]}
          />

          <ConsultationCTA
            heading="Questions about how this applies to you?"
            body="Whether it is a citation, an impounded machine, an injury, or a bike that was sold to you as something it is not, tell us what happened and we will tell you where you stand. Consultations are free, in English, Spanish, or Polish."
            contactHref="/contact"
            contactLabel="Contact the Firm"
          />
        </div>
      </section>
    </>
  );
}
