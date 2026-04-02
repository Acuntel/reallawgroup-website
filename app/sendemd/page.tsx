import { ShieldAlert, AlertTriangle, Phone } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "EMD Instructions — REAL Law Group",
  description:
    "Earnest money deposit instructions and wire fraud prevention information from REAL Law Group, P.C. Always verify wiring instructions by phone before sending funds.",
  path: "/sendemd",
});

export default function SendEMDPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            EMD Instructions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Important information for sending your earnest money deposit.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "EMD Instructions" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Wire Fraud Warning */}
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 shrink-0 mt-0.5" />
              <h2 className="text-2xl font-heading font-bold text-red-800">
                Wire Fraud Resources
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 rounded-lg p-6 border border-red-200">
                <p className="text-red-800 font-bold text-lg leading-relaxed mb-4">
                  ONLINE BANKING FRAUD IS ON THE RISE.{" "}
                  <span className="text-red-900">
                    Criminals intercept emails containing instructions,
                    including attachments and substitute fake instructions.
                  </span>{" "}
                  FUNDS ARE NOT RECOVERABLE!
                </p>

                <p className="text-red-800 font-bold leading-relaxed mb-4">
                  REAL LAW GROUP, P.C. WILL NEVER ASK YOU VIA EMAIL TO WIRE OR
                  SEND FUNDS TO A TITLE COMPANY OR ANY OTHER TRANSACTION
                  PARTICIPANT. ALWAYS GET VERBAL CONFIRMATION OF THE
                  INSTRUCTIONS BEFORE SENDING FUNDS.
                </p>

                <p className="text-text-muted leading-relaxed mb-4">
                  Always contact the Title Company directly and obtain verbal
                  confirmation that the wire instructions are accurate prior to
                  initiating a wire transfer.
                </p>

                <p className="text-red-800 font-bold leading-relaxed">
                  DO NOT COMPLY WITH ANY EMAIL INSTRUCTING, DIRECTING OR
                  REQUESTING THAT YOU WIRE FUNDS.{" "}
                  <span className="text-text font-normal">
                    Change your computer passwords often to protect yourself
                    from becoming a victim of wire fraud.
                  </span>
                </p>
              </div>

              <a
                href="/resources/prevent-wire-fraud"
                className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-900 transition-colors underline underline-offset-4"
              >
                Click here for tips and advice to protect yourself against scams
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* EMD Delivery Instructions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How to Send Your Earnest Money Deposit
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />

            <div className="space-y-6">
              <div className="bg-light-gold rounded-xl p-8">
                <div className="space-y-6">
                  <div className="gold-border-left pl-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Make Check Payable To
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      REAL Law Group, P.C. Trust Account
                    </p>
                  </div>

                  <div className="gold-border-left pl-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Mail or Deliver To
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      REAL Law Group, P.C.
                      <br />
                      {CONTACT.address}
                    </p>
                  </div>

                  <div className="gold-border-left pl-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Include in the Memo Line
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      The property address for your transaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Important Reminders
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="font-semibold text-primary">
                    Verify before you send.
                  </span>{" "}
                  Always call our office at{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="text-secondary font-semibold hover:underline"
                  >
                    {CONTACT.phone}
                  </a>{" "}
                  to confirm wiring or mailing instructions before sending any
                  funds.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="font-semibold text-primary">
                    Timely delivery.
                  </span>{" "}
                  Your earnest money deposit is typically due within one to
                  three business days after the seller accepts the buyer&apos;s
                  offer. Check your contract for the exact deadline.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="font-semibold text-primary">
                    Never trust email alone.
                  </span>{" "}
                  If you receive instructions via email that differ from what
                  you were told verbally, do not act on them. Call our office
                  immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-xl p-8 text-center">
            <h3 className="text-xl font-heading font-semibold text-white mb-3">
              Questions About Your Deposit?
            </h3>
            <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
              If you have any questions about sending your earnest money deposit
              or need to verify instructions, contact our office directly.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#b8994e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
