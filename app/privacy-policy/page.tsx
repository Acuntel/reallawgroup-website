import { Metadata } from 'next';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Privacy Policy & Disclaimer',
  description: 'Privacy policy and legal disclaimer for REAL Law Group, P.C.',
  openGraph: {
    title: 'Privacy Policy & Disclaimer | REAL Law Group',
    description: 'Privacy policy and legal disclaimer for REAL Law Group, P.C.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy &amp; Disclaimer</h1>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Privacy Policy */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Privacy Policy</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 text-text-muted text-sm leading-relaxed mb-16">
            <p>
              REAL Law Group, P.C. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you contact us through our website, including your name, email address, phone number, and any information you include in your message. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and browsing behavior.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">How We Use Your Information</h3>
            <p>
              We use the information we collect to respond to your inquiries and provide legal services, communicate with you about our services, improve our website and user experience, and comply with legal obligations.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our legal services, comply with law, or protect our rights. We may share information with trusted third parties who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Data Security</h3>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Cookies</h3>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some features of the website may not function properly without cookies.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any website you visit.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us at info@reallawgroup.com or (630) 299-7600.
            </p>
          </div>

          {/* Disclaimer */}
          <div id="disclaimer">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Legal Disclaimer</h2>
            <div className="w-12 h-1 bg-secondary mb-8" />

            <div className="space-y-6 text-text-muted text-sm leading-relaxed">
              <p>
                The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by your use of this website or by contacting REAL Law Group, P.C. through this website.
              </p>

              <p>
                You should not act upon any information on this website without first seeking qualified professional counsel on your specific matter. The outcome of any particular legal matter depends on the specific facts and applicable law, and prior results do not guarantee a similar outcome.
              </p>

              <p>
                REAL Law Group, P.C. makes no representations or warranties regarding the accuracy, completeness, or timeliness of the information on this website. We are not responsible for any errors or omissions, or for the results obtained from the use of this information.
              </p>

              <p>
                Attorney advertising. The materials on this website may be considered advertising in some jurisdictions. The determination of the need for legal services and the choice of a lawyer are extremely important decisions and should not be based solely upon advertisements or self-proclaimed expertise.
              </p>

              <p>
                If you require legal advice, please contact us directly at (630) 299-7600 or info@reallawgroup.com to schedule a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
