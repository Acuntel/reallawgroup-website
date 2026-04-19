import {
  Shield,
  Lock,
  Eye,
  Wifi,
  Users,
  FileWarning,
  AlertCircle,
  Server,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Data Breach Prevention",
  description:
    "Essential strategies to protect your personal and business data from cyber threats. Tips from REAL Law Group. Call (630) 299-7600 for a free consultation.",
  path: "/resources/data-breach-prevention",
});

const strategies = [
  {
    icon: Lock,
    title: "Use Strong, Unique Passwords",
    description:
      "Create complex passwords that combine uppercase and lowercase letters, numbers, and special characters. Use a different password for every account and consider using a reputable password manager to keep track of your credentials securely.",
  },
  {
    icon: Shield,
    title: "Enable Multi-Factor Authentication (MFA)",
    description:
      "Multi-factor authentication adds an extra layer of security by requiring additional verification beyond just a password. This could be a text message code, an authentication app, or a biometric verification like fingerprint or face recognition.",
  },
  {
    icon: Eye,
    title: "Be Vigilant About Phishing",
    description:
      "Phishing attacks remain one of the most common methods of data breaches. Be cautious of unsolicited emails, text messages, or phone calls asking for personal information. Verify the sender before clicking any links or providing sensitive data.",
  },
  {
    icon: Wifi,
    title: "Secure Your Network",
    description:
      "Ensure your home and business Wi-Fi networks are encrypted with WPA3 security. Avoid conducting sensitive transactions on public Wi-Fi networks. Consider using a VPN (Virtual Private Network) when accessing the internet on public connections.",
  },
  {
    icon: Server,
    title: "Keep Software Updated",
    description:
      "Regularly update your operating system, browsers, and applications. Software updates often include critical security patches that address known vulnerabilities. Enable automatic updates whenever possible to ensure you are always protected.",
  },
  {
    icon: Users,
    title: "Limit Access to Sensitive Information",
    description:
      "Follow the principle of least privilege — only give employees and family members access to the data they need. Regularly review and update access permissions, and immediately revoke access when it is no longer needed.",
  },
  {
    icon: FileWarning,
    title: "Regularly Back Up Your Data",
    description:
      "Maintain regular backups of important data both locally and in the cloud. In the event of a ransomware attack or data breach, having current backups ensures you can recover your information without paying a ransom or losing critical data.",
  },
  {
    icon: AlertCircle,
    title: "Have an Incident Response Plan",
    description:
      "Both individuals and businesses should have a plan for what to do if a data breach occurs. This includes knowing how to report the breach, how to notify affected parties, and how to work with legal counsel to minimize liability and comply with applicable notification laws.",
  },
];

export default function DataBreachPreventionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Data Breach Prevention
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Protect your personal and business data from cyber threats.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Data Breach Prevention" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-6 text-lg">
            In today&apos;s digital landscape, data breaches pose a significant
            risk to both individuals and businesses. Cybercriminals are
            constantly developing new methods to steal sensitive information,
            from personal identification data to financial records and
            proprietary business information.
          </p>
          <p className="text-text-muted leading-relaxed mb-12">
            Whether you are a homeowner protecting personal data during a real
            estate transaction or a business owner safeguarding client
            information, taking proactive steps to prevent data breaches is
            essential. Below are key strategies to help protect your data.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            Essential Data Protection Strategies
          </h2>

          <div className="space-y-8">
            {strategies.map((strategy, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-background rounded-xl border border-border"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gold shrink-0">
                  <strategy.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 gold-border-left pl-8 py-4">
            <h3 className="text-xl font-heading font-semibold mb-3">
              Legal Implications of Data Breaches in Illinois
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Illinois has enacted strong data protection legislation, including
              the Personal Information Protection Act (PIPA) and the Biometric
              Information Privacy Act (BIPA). These laws impose specific
              obligations on businesses that collect personal data and provide
              individuals with important rights when their data is compromised.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              If your business experiences a data breach, Illinois law requires
              prompt notification to affected individuals and, in some cases, to
              the Attorney General&apos;s office. Working with legal counsel
              experienced in data privacy can help ensure compliance and
              minimize potential liability.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Concerned about data security?"
        text="Our team can help you understand your legal obligations and implement protective measures."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/practice-areas/business-law"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Business Law
          </a>
          <a
            href="/resources/prevent-wire-fraud"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Prevent Wire Fraud
          </a>
        </div>
      </section>
    </>
  );
}
