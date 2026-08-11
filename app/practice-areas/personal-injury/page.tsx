import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Personal Injury Attorney Referrals: Chicago and Suburbs",
  description:
    "Injured in a car accident? REAL Law Group connects you with experienced personal injury attorneys who fight for the compensation you deserve. Free consultation. Call (630) 299-7600.",
  path: "/practice-areas/personal-injury",
});

const caseTypes = [
  "Car and truck accidents",
  "Motorcycle accidents",
  "Pedestrian and bicycle accidents",
  "Rideshare accidents (Uber/Lyft)",
  "Slip and fall injuries",
  "Workplace injuries",
];

const postAccidentSteps = [
  {
    step: "1",
    title: "Seek Medical Attention Immediately",
    description:
      "Your health comes first. Even if injuries seem minor, get evaluated by a medical professional. Delayed symptoms are common in car accidents, and a documented medical record is critical to your claim.",
  },
  {
    step: "2",
    title: "Document the Scene",
    description:
      "If you are able, take photos of the vehicles, road conditions, traffic signs, and any visible injuries. Collect names and contact information from witnesses. This evidence can be decisive later.",
  },
  {
    step: "3",
    title: "File a Police Report",
    description:
      "Contact law enforcement and file an official accident report. The police report provides an independent record of the incident, including the officer's observations and any citations issued.",
  },
  {
    step: "4",
    title: "Do Not Give Recorded Statements",
    description:
      "Insurance adjusters may contact you quickly and ask for a recorded statement. You are not obligated to provide one. Anything you say can be used to minimize or deny your claim.",
  },
  {
    step: "5",
    title: "Contact an Attorney Before Accepting Any Settlement",
    description:
      "Insurance companies often extend early settlement offers that are far below the true value of your claim. An experienced attorney evaluates the full extent of your damages — including future medical costs and lost earning capacity — before any settlement is considered.",
  },
];

const faqs = [
  {
    question: "How much does it cost to hire a personal injury attorney?",
    answer:
      "Through REAL Law Group's network, personal injury cases are handled on a contingency fee basis. That means there is no upfront cost and no fee unless you recover compensation. The attorney fee is a percentage of the settlement or verdict, so you never pay out of pocket.",
  },
  {
    question: "How long do I have to file a personal injury claim in Illinois?",
    answer:
      "In Illinois, the statute of limitations for most personal injury claims is two years from the date of the accident. However, there are exceptions that can shorten or extend this deadline depending on the circumstances. It is important to consult an attorney as soon as possible to preserve your rights.",
  },
  {
    question: "What compensation can I recover after a car accident?",
    answer:
      "Depending on the facts of your case, you may be entitled to compensation for medical expenses (past and future), lost wages and lost earning capacity, pain and suffering, property damage, and in some cases punitive damages. An attorney will evaluate the full scope of your damages to pursue maximum recovery.",
  },
  {
    question: "What if the other driver does not have insurance?",
    answer:
      "Illinois requires drivers to carry liability insurance, but not all drivers comply. If you are hit by an uninsured or underinsured motorist, your own auto insurance policy may provide coverage through uninsured/underinsured motorist provisions. An attorney can review your policy and identify all available sources of recovery.",
  },
];

export default function PersonalInjuryPage() {
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
              { name: "Car Accident & Personal Injury" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Car Accident & Personal Injury
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experienced legal representation for injury victims throughout
            Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Personal Injury" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Personal Injury</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Fighting for Injury Victims Across Chicagoland
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              If you or a loved one has been injured in a car accident, you
              deserve legal representation that prioritizes your recovery and
              your rights. REAL Law Group helps injury victims recover the
              compensation they deserve through a network of trusted personal
              injury attorneys with proven track records in Illinois courts.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              From the initial consultation through settlement or trial, our
              role is to connect you with the right attorney for your case and
              ensure you receive personalized attention every step of the way.
              You focus on healing — we handle the legal fight.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Types of Cases We Handle
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
              What to Do After a Car Accident
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              The steps you take immediately after an accident can significantly
              impact the outcome of your case. Follow these guidelines to
              protect yourself and your claim:
            </p>
            <div className="space-y-6">
              {postAccidentSteps.map((item) => (
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
              Why Choose REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Since 2016, REAL Law Group has built a reputation for putting
              clients first. When you contact us about a personal injury matter,
              you get a free consultation to evaluate your case — no obligation,
              no pressure. Through our network of personal injury attorneys,
              your case is handled on a contingency basis, meaning you pay no
              fees unless you win.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Every case receives personalized attention. We do not operate on
              volume — we focus on matching you with an attorney who has
              specific experience with your type of injury and the resources to
              pursue maximum compensation on your behalf.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Injured in an accident? Get a free consultation."
        text="Call REAL Law Group at (630) 299-7600 or schedule a consultation to discuss your case with an experienced personal injury attorney."
        buttonText="Free Consultation"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Related Practice Areas
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/practice-areas/real-estate"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Real Estate Closings
            </a>
            <a
              href="/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Real Estate Investors
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
