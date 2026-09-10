import Link from "next/link";
import { Phone, GraduationCap, Scale, Award, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Vincent Incopero, Illinois Real Estate Lawyer",
  description:
    "Vincent Anthony Incopero is the managing partner of REAL Law Group, P.C., an Illinois real estate lawyer handling closings across Chicago and the collar counties since 2016. Selected to Super Lawyers Rising Stars 2021 to 2024.",
  path: "/our-team/vincent-incopero",
});

const CREDENTIALS = [
  {
    icon: GraduationCap,
    label: "Education",
    items: [
      "The John Marshall Law School, J.D., 2014",
      "Elmhurst College, B.S., double major in Finance and Economics, 2010",
    ],
  },
  {
    icon: Scale,
    label: "Bar Admissions",
    items: [
      "State of Illinois, admitted 2014",
      "U.S. District Court for the Northern District of Illinois",
    ],
  },
  {
    icon: Award,
    label: "Recognition",
    items: [
      "Selected to Super Lawyers Rising Stars, 2021 through 2024",
      "Recognition conferred by Super Lawyers, a Thomson Reuters rating service",
    ],
  },
  {
    icon: Users,
    label: "Professional Associations",
    items: [
      "Chicago Bar Association",
      "DuPage County Bar Association",
      "Illinois State Bar Association",
      "Illinois Real Estate Lawyers Association",
      "Justinian Society of Lawyers",
    ],
  },
];

const FOCUS = [
  {
    title: "Residential closings across Chicagoland",
    body: "Purchases and sales from contract through recorded deed, including attorney review under the Multi-Board contract, title clearance, and closing in Cook, DuPage, Will, Kane, Lake, and McHenry counties.",
  },
  {
    title: "Real estate investor transactions",
    body: "Assignment of contract and wholesale deals, double closings, seller financing and installment agreements, Illinois land trusts, series LLCs, and 1031 tax-deferred exchanges.",
  },
  {
    title: "Distressed and non-standard deals",
    body: "Short sales, inherited property and probate real estate, for sale by owner transactions, and Chicago building code violation matters that have to be cleared before a property can transfer.",
  },
  {
    title: "Business organizations and estate planning",
    body: "LLC and corporate formation for property holdings, alongside wills and trusts, so an investor's entity structure and estate plan are handled by the same firm as the closings.",
  },
  {
    title: "Data breach and privacy litigation",
    body: "Vincent leads the firm's data breach and privacy practice, representing Illinois residents under the Biometric Information Privacy Act and the Personal Information Protection Act, co-counseling active cases with national data breach litigation firms.",
  },
];

const FAQS = [
  {
    question: "Who is the real estate lawyer at REAL Law Group?",
    answer:
      "Vincent Anthony Incopero is the managing partner and attorney at REAL Law Group, P.C. in Elmhurst, Illinois. He has been licensed in Illinois since 2014, founded the firm in 2016, and concentrates his practice on residential and commercial real estate transactions, real estate investor work, business organizations, and estate planning. He was selected to Super Lawyers Rising Stars from 2021 through 2024.",
  },
  {
    question: "What areas of Illinois does Vincent Incopero serve?",
    answer:
      "The firm handles closings throughout Chicagoland and across Illinois. Its main office is at 381 N York Street, Suite 1, Elmhurst, IL 60126, in DuPage County, with satellite offices in Chicago and Park Ridge available by appointment. Closings outside the Chicago area are handled remotely.",
  },
  {
    question: "What is Vincent Incopero's background before founding the firm?",
    answer:
      "Before founding REAL Law Group, P.C., Vincent worked at one of Chicago's most recognized title companies and practiced law with one of Chicago's largest plaintiff's personal injury firms. His undergraduate background is a double major in finance and economics, which informs how he approaches the financial side of real estate transactions.",
  },
  {
    question: "Where did Vincent Incopero go to law school?",
    answer:
      "He earned his J.D. from The John Marshall Law School in 2014 and his B.S. from Elmhurst College in 2010, where he double majored in finance and economics. He was admitted to the Illinois bar in 2014 and is also admitted to the U.S. District Court for the Northern District of Illinois.",
  },
  {
    question: "How do I reach Vincent Incopero about a closing?",
    answer:
      "Call the firm at (630) 299-7600 or use the contact form. Initial consultations about a purchase, sale, or investor transaction are free, and the firm can explain attorney review and closing documents in English, Spanish, and Polish.",
  },
];

export default function VincentIncoperoPage() {
  return (
    <>
      {/* Person schema is emitted site-wide from app/layout.tsx and its @id
          resolves to this page, so it is deliberately not repeated here. */}
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
              { name: "Our Team", url: "/our-team" },
              { name: "Vincent Anthony Incopero" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
            Managing Partner
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Vincent Anthony Incopero
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Vincent Anthony Incopero is an Illinois real estate lawyer and the
            managing partner of REAL Law Group, P.C. in Elmhurst. He has been
            licensed in Illinois since 2014, founded the firm in 2016, and
            handles residential closings, investor transactions, business
            formation, and estate planning across Chicago and the collar
            counties. He was selected to Super Lawyers Rising Stars each year
            from 2021 through 2024.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/our-team" },
          { label: "Vincent Anthony Incopero" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Practice Focus
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            Vincent concentrates his practice in real estate, business
            organizations, and estate planning, three areas that overlap
            constantly for Illinois property owners and investors. Keeping them
            under one roof means the entity that takes title, the contract that
            transfers it, and the plan that passes it on are all drafted with
            the others in mind.
          </p>
          <div className="space-y-6 mb-14">
            {FOCUS.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Credentials
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {CREDENTIALS.map((block) => (
              <div
                key={block.label}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <block.icon className="w-5 h-5 text-secondary shrink-0" />
                  <h3 className="font-heading font-semibold text-primary">
                    {block.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-muted text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Before REAL Law Group
          </h2>
          <p className="text-text-muted leading-relaxed mb-14">
            Prior to founding the firm, Vincent worked at one of Chicago&apos;s
            most recognized title companies and practiced law with one of
            Chicago&apos;s largest plaintiff&apos;s personal injury firms. That
            combination, title work on one side and litigation on the other,
            shapes how the firm handles closings: title problems get identified
            early, and contract terms get drafted with an eye toward how they
            would hold up if a deal ever went sideways.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-14 bg-light-gold rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Talk to Vincent about your transaction
            </h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Consultations about a purchase, sale, or investor deal are free.
              The firm works in English, Spanish, and Polish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT.phoneHref}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <Link
                href="/contact"
                className="btn-navy inline-flex items-center justify-center"
              >
                Contact the Firm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
