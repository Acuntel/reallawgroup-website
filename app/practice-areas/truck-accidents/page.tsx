import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Truck Accident Lawyer — Semi & Commercial Vehicle Crashes",
  description:
    "Injured in a truck or semi accident in Illinois? The Kryder Law Group holds trucking companies accountable. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/truck-accidents",
});

const services = [
  "Semi-truck and 18-wheeler collisions",
  "Jackknife and rollover accidents",
  "Underride and override crashes",
  "Delivery truck and commercial vehicle accidents",
  "Hazardous materials spill injuries",
  "Federal Motor Carrier Safety Regulation violations",
];

const faqs = [
  {
    question:
      "Why are truck accident cases more complex than car accident cases?",
    answer:
      "Truck accidents involve multiple potentially liable parties — the driver, the trucking company, the cargo loader, and the vehicle manufacturer. Federal regulations (FMCSA rules) govern hours of service, maintenance, and driver qualifications. An experienced truck accident attorney knows how to obtain electronic logging device data, driver qualification files, and maintenance records before they are destroyed.",
  },
  {
    question: "What federal regulations apply to truck drivers in Illinois?",
    answer:
      "The Federal Motor Carrier Safety Administration (FMCSA) sets rules that apply nationwide, including hours-of-service limits (11 hours of driving within a 14-hour window after 10 consecutive hours off), mandatory drug and alcohol testing, vehicle maintenance and inspection requirements, and minimum insurance coverage. Violations of these regulations can be powerful evidence of negligence.",
  },
  {
    question: "Who can be held liable in a truck accident?",
    answer:
      "Potentially liable parties include the truck driver, the trucking company (under respondeat superior or negligent hiring theories), the cargo loading company if improperly loaded freight caused the crash, the truck or parts manufacturer if a mechanical defect contributed, and brokers who hired unqualified carriers. Our team investigates every angle to maximize your recovery.",
  },
  {
    question: "How much is my truck accident case worth?",
    answer:
      "Truck accident claims tend to involve more severe injuries and higher damages than typical car accidents. Compensation may include medical expenses, rehabilitation costs, lost wages, diminished earning capacity, pain and suffering, and in some cases punitive damages. The value depends on the severity of your injuries, the strength of the liability evidence, and available insurance coverage.",
  },
];

export default function TruckAccidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Truck Accidents" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Chicago Truck Accident Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Crashes involving semis and commercial trucks cause catastrophic
            injuries. We take on the trucking companies and their insurers to
            get you justice.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Truck Accidents" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Illinois is a major freight corridor, and Chicago&apos;s highways
            see thousands of commercial trucks daily. When a fully loaded semi
            weighing up to 80,000 pounds collides with a passenger vehicle, the
            results are often catastrophic or fatal. The Kryder Law Group has
            the resources and experience to take on large trucking companies and
            their aggressive defense teams, ensuring victims receive the
            compensation they need to rebuild their lives.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Truck Accident Cases We Handle
            </h2>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <span className="text-secondary mt-1">&#9656;</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
