import { AlertTriangle, Phone, Building2, MapPin, Hash } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Earnest Money Deposit Instructions — REAL Law Group",
  description:
    "Earnest money deposit instructions for REAL Law Group, P.C. clients. Wire transfer and Chase Bank deposit details, ABA routing number, and wire fraud prevention.",
  path: "/sendemd",
});

export default function SendEMDPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Earnest Money Deposit Instructions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Congratulations on your new home!
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Earnest Money Deposit Instructions" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Numbered instructions — loud and proud */}
          <div className="space-y-4 mb-12">
            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                1. DO NOT MAIL OR DELIVER EMD TO OUR OFFICE.
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                2. PLEASE SEND A WIRE OR DEPOSIT FUNDS AT CHASE BANK.
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                3. WE DO NOT ACCEPT CASH{" "}
                <span className="block md:inline text-base md:text-lg font-semibold normal-case mt-1 md:mt-0">
                  (BITCOIN 😉 OR STARBUCKS ☹).
                </span>{" "}
                <span className="block text-base md:text-lg font-semibold normal-case mt-1">
                  IF YOU DEPOSIT CASH, WE CAN&apos;T CONFIRM YOUR DEPOSIT.
                </span>
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                4. EMD CAN BE WIRED TO OR DEPOSITED AT ANY CHASE BANK LOCATION.
                <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                  Save your time and skip a trip to our office!
                </span>
              </p>
            </div>

            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                5. FUNDS MUST BE PAYABLE TO{" "}
                <span className="underline decoration-4">
                  REAL LAW GROUP P.C. IOLTA
                </span>
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                  6. REAL LAW GROUP P.C. WILL NEVER SEND YOU AN EMAIL WITH WIRE
                  INSTRUCTIONS OR ASK YOU TO WIRE US MONEY.
                  <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                    Stop, think & be safe if you are not sure!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Routing / Account Info */}
          <div className="bg-light-gold rounded-xl p-8 border-2 border-secondary mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
              Routing & Account Information
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Account Number
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    939106337
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    ABA Number (Routing Number)
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    071000013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Bank
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    Chase Bank (any Chase Bank location)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Reference on the Wire or Check
                  </p>
                  <p className="text-lg md:text-xl font-heading font-bold text-primary">
                    The property address you are purchasing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm / Questions */}
          <div className="bg-primary rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
              To Confirm Instructions or If You Have Questions
            </h3>
            <p className="text-gray-200 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Please contact us directly before sending any funds.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Call {CONTACT.phone}
            </a>
          </div>

          {/* Wire Fraud Warning */}
          <div className="bg-red-50 border-4 border-red-500 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-10 h-10 text-red-600 shrink-0 mt-0.5" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-red-800 uppercase">
                Wire Fraud Warning
              </h2>
            </div>
            <p className="text-red-900 font-semibold text-base md:text-lg leading-relaxed">
              We do not want you to be a victim of wire fraud. Most money wired
              to a fraudulent account is stolen and cannot be recovered.
              Additionally, there is no insurance for this loss. You may never
              get your money back.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
