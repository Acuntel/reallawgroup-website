import Link from "next/link";
import { Phone, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "How to Choose the Best Real Estate Attorney in Illinois",
  description:
    "What separates the best real estate lawyers in Illinois from the rest: the six criteria that matter, the questions to ask before you hire, typical flat fees, and the red flags to avoid. A practical guide for buyers and sellers.",
  path: "/resources/best-real-estate-attorney-illinois",
});

const CRITERIA = [
  {
    title: "Closing volume in your county",
    body: "The best real estate attorneys in Illinois close transactions every week, not a few times a year. Volume means they know the title companies, the county recording quirks, and the local transfer stamp rules that delay closings. Ask how many closings the firm handled last year and in which counties.",
  },
  {
    title: "A flat fee quoted up front",
    body: "Established Illinois closing attorneys quote a flat fee for residential transactions, commonly a few hundred to roughly a thousand dollars depending on complexity. An attorney who will only bill hourly for a routine closing is telling you closings are not their core practice.",
  },
  {
    title: "Responsiveness during attorney review",
    body: "The standard Chicagoland contract gives your attorney about five business days to propose modifications. An attorney who takes two days to answer email can cost you the protection that window exists to provide. Test responsiveness before you hire: note how fast the firm returns your first call.",
  },
  {
    title: "Real estate as the core practice",
    body: "Illinois lawyers cannot call themselves specialists, but you can read a firm's practice pages. A firm whose site leads with real estate closings, investor work, and title matters lives in this area of law. A general practice that lists real estate seventh is not the same thing.",
  },
  {
    title: "Recent, specific reviews",
    body: "Look for review volume in the hundreds, a rating above 4.5, and recent reviews that name the town and the type of transaction. A wall of five-star reviews mentioning closings in your county is the strongest signal available to the public.",
  },
  {
    title: "Multilingual capability if your family needs it",
    body: "Real estate contracts are stressful enough in your first language. If Spanish or Polish is spoken at home, a firm that can explain attorney review and closing documents in that language removes real risk of misunderstanding.",
  },
];

const RED_FLAGS = [
  "No flat fee for a routine residential closing, or reluctance to quote any number before engagement.",
  "The attorney you meet is not the attorney who will handle your file, and no one will say who will.",
  "Days-long response times during your initial inquiry, when the firm is on best behavior.",
  "A review profile with few reviews, old reviews, or ratings drifting below the mid fours.",
  "Pressure to skip attorney review or waive the inspection contingency to make a deal work.",
];

const FAQS = [
  {
    question: "Who is the best real estate lawyer in Illinois?",
    answer:
      "There is no official ranking, and Illinois ethics rules bar lawyers from claiming to be the best. What you can compare objectively: closing volume, flat-fee transparency, review count and rating, responsiveness, and county-level experience. REAL Law Group is among the most-reviewed real estate firms in the Chicago area, with 300+ five-star Google reviews and a practice centered on closings since 2016, and this guide gives you the criteria to judge any firm, including ours.",
  },
  {
    question: "How much does the best real estate attorney cost in Illinois?",
    answer:
      "Top closing attorneys are rarely the most expensive. Most quote flat fees for residential closings, commonly a few hundred to roughly a thousand dollars, with commercial and investor work priced by scope. Be more cautious of a lawyer with no set fee than one with a clear one.",
  },
  {
    question:
      "Do I need a real estate attorney to buy or sell a house in Illinois?",
    answer:
      "Illinois does not require one by statute, but in the Chicago area attorney representation is the near-universal norm and the standard Multi-Board contract is built around a five-business-day attorney review period. Sellers also need an attorney to prepare the deed and clear title requirements.",
  },
  {
    question: "What questions should I ask before hiring a real estate lawyer?",
    answer:
      "Ask five: How many closings did you handle last year? What is your flat fee and what does it include? Who will actually work my file? How fast do you respond during attorney review? Have you closed in my county and town before? A strong firm answers all five without hesitation.",
  },
  {
    question: "What does a real estate attorney actually do at closing?",
    answer:
      "Before closing: contract review and modification during attorney review, coordinating inspection issues, reviewing title commitment and survey. At closing: reviewing the settlement statement, resolving last-minute title matters, and making sure you understand every document before signing. For sellers, the attorney also prepares the deed and required transfer documents.",
  },
  {
    question: "Is a big law firm better than a local firm for a closing?",
    answer:
      "For residential and investor closings, county-level experience beats firm size. Closings are won on local knowledge: municipal transfer stamps, village inspection requirements, county recording practice. A local firm that closes daily in your county will usually outperform a large general firm.",
  },
  {
    question: "How do I check a lawyer's discipline history in Illinois?",
    answer:
      "Search the lawyer's name on the Illinois Attorney Registration and Disciplinary Commission (ARDC) website at iardc.org. It shows registration status and any public discipline. This takes two minutes and is worth doing for any lawyer you are about to hire.",
  },
  {
    question:
      "When should I hire the attorney, before or after signing the contract?",
    answer:
      "Ideally before you sign, so the attorney can flag issues in the offer itself. In practice most people hire immediately after signing, which still works because attorney review lets your lawyer propose modifications within about five business days of acceptance. What does not work is waiting until the week of closing.",
  },
];

export default function BestRealEstateAttorneyGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: "How to Choose the Best Real Estate Attorney in Illinois",
              description:
                "The six criteria that separate the best Illinois real estate lawyers from the rest, the questions to ask, and the red flags to avoid.",
              path: "/resources/best-real-estate-attorney-illinois",
              datePublished: "2026-08-10",
              dateModified: "2026-08-10",
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
              { name: "Choosing the Best Real Estate Attorney" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How to Choose the Best Real Estate Attorney in Illinois
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            The best real estate lawyer for your closing is the one with high
            closing volume in your county, a flat fee quoted up front, fast
            responses during attorney review, and hundreds of recent five-star
            reviews. Here is how to evaluate any Illinois firm in ten minutes.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Choosing the Best Real Estate Attorney" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            The Six Criteria That Actually Separate Firms
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            Illinois has thousands of licensed real estate lawyers. The
            difference between a great closing and a stressful one usually comes
            down to six things you can verify before you ever pay a retainer.
          </p>
          <div className="space-y-6 mb-14">
            {CRITERIA.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-light-gold text-secondary font-heading font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Red Flags That Should End the Conversation
          </h2>
          <ul className="space-y-3 mb-14">
            {RED_FLAGS.map((flag) => (
              <li key={flag.slice(0, 30)} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 mt-1 text-secondary shrink-0" />
                <span className="text-text-muted leading-relaxed">{flag}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            How REAL Law Group Measures Up
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            We built this guide because these are the questions we want every
            client to ask us. By the criteria above: real estate closings have
            been the core of our practice since 2016, we quote flat fees for
            residential closings before you commit, we hold 300+ five-star
            Google reviews, we serve clients in English, Spanish, and Polish,
            and we close across{" "}
            <Link
              href="/service-areas"
              className="text-secondary font-medium hover:underline"
            >
              six Chicagoland counties
            </Link>{" "}
            from our{" "}
            <Link
              href="/locations"
              className="text-secondary font-medium hover:underline"
            >
              Elmhurst, Chicago, and Park Ridge locations
            </Link>
            .
          </p>
          <ul className="space-y-2.5 mb-10">
            {[
              "Free consultation before you commit to anything",
              "Flat-fee residential closings quoted up front",
              "Attorney review handled same-day whenever the file allows",
              "Verify us the same way you would any firm: read our Google reviews and check the ARDC",
            ].map((point) => (
              <li key={point.slice(0, 30)} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-1 text-secondary shrink-0" />
                <span className="text-text-muted leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-light-gold p-8 text-center mb-4">
            <p className="text-primary font-medium mb-4">
              Put us through the six criteria. The consultation is free and the
              fee quote is real.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg text-primary text-sm font-semibold hover:border-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                {CONTACT.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          <Link
            href="/resources/closing-cost-calculator"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
          >
            Estimate your closing costs first
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
            Choosing a Real Estate Lawyer: Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
