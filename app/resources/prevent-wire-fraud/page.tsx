import { ShieldAlert, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prevent Wire Fraud",
  description:
    "Learn how to protect yourself from wire fraud during real estate transactions. Essential tips from REAL Law Group. Call (630) 299-7600 for a free consultation.",
  path: "/resources/prevent-wire-fraud",
});

const tips = [
  {
    title:
      "Be suspicious of any email requesting a change in wiring instructions",
    description:
      "Fraudsters commonly hack email accounts and send messages that appear to be from your real estate agent, title company, or attorney with new wiring instructions. Always verify any changes by calling a known phone number.",
  },
  {
    title: "Never email financial information",
    description:
      "Do not send bank account numbers, routing numbers, or other financial details via email. Email is not a secure communication method for sensitive financial data.",
  },
  {
    title: "Verify wiring instructions by phone before transferring funds",
    description:
      "Always call your attorney or title company at a phone number you have independently verified (not one from the suspicious email) to confirm wiring instructions before sending any money.",
  },
  {
    title: "Be cautious of last-minute changes to closing instructions",
    description:
      "Scammers often create a sense of urgency by sending last-minute changes to wiring instructions. Take time to verify any changes, even if you feel pressure to act quickly.",
  },
  {
    title: "Use strong, unique passwords for your email accounts",
    description:
      "Protect your email from being hacked by using strong passwords and enabling two-factor authentication. Many wire fraud schemes start with a compromised email account.",
  },
  {
    title: "Confirm the identity of anyone requesting funds",
    description:
      "Before wiring money, verify the identity of the person or company requesting the transfer. Use contact information you have collected independently, not information provided in the suspicious communication.",
  },
  {
    title: "Be aware of phishing attempts",
    description:
      "Watch for emails that contain misspellings, unusual formatting, or slight variations in email addresses. These are common indicators of phishing attempts designed to steal your information.",
  },
  {
    title: "Report suspicious activity immediately",
    description:
      "If you suspect you have been targeted by wire fraud, contact your bank immediately to attempt to recall the wire transfer. Also report the incident to the FBI Internet Crime Complaint Center (IC3) and your local law enforcement.",
  },
  {
    title: "Work with professionals who prioritize security",
    description:
      "Choose a real estate attorney and title company that take cybersecurity seriously and have protocols in place to protect your transaction from fraud.",
  },
];

export default function PreventWireFraudPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prevent Wire Fraud
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Protect yourself and your money during real estate transactions.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Prevent Wire Fraud" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Warning box */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-semibold text-red-800 mb-2">
                Wire Fraud Is a Growing Threat
              </h2>
              <p className="text-sm text-red-700 leading-relaxed">
                Wire fraud in real estate transactions has become increasingly
                common. Criminals target home buyers, sellers, and even real
                estate professionals to steal funds during closings. Awareness
                is your best defense.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            9 Tips to Protect Yourself from Wire Fraud
          </h2>

          <div className="space-y-8">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gold shrink-0">
                  <span className="text-secondary font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                REAL Law Group Protects You
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                At REAL Law Group, we use cutting-edge security protocols to
                protect our clients&apos; financial transactions. If you have
                any concerns about wire fraud, contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions about your closing?"
        text="Our team is here to ensure your real estate transaction is safe and secure."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Real Estate Closings
          </a>
          <a
            href="/resources/data-breach-prevention"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Data Breach Prevention
          </a>
        </div>
      </section>
    </>
  );
}
