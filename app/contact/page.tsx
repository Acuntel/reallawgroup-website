import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMapsEmbed from "@/components/ui/GoogleMapsEmbed";
import { CONTACT } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Our Chicago Personal Injury Lawyers",
  description:
    "Contact The Kryder Law Group for a free case review. Car accidents, truck accidents, medical malpractice, wrongful death. Call (312) 223-1700 — available 24/7.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact Us" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Free Case Review
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us about your injury and our team will review your case for
            free — no obligation, no fees unless we win.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-2">
                Get Started
              </h2>
              <p className="text-text-muted text-sm mb-8">
                No obligation, no pressure. Tell us what happened and we&apos;ll
                take it from there.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">
                      Phone
                    </p>
                    <p className="text-xl font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">
                      Email
                    </p>
                    <p className="text-primary font-medium group-hover:text-secondary transition-colors">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">
                      Main Office
                    </p>
                    <p className="text-primary font-medium">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-1">
                      Availability
                    </p>
                    <p className="text-primary font-medium">Available 24/7</p>
                    <p className="text-text-muted text-sm">
                      Free consultations anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border mb-8">
                <GoogleMapsEmbed />
              </div>

              {/* No fee note */}
              <div className="flex items-start gap-4 bg-light-gold rounded-xl p-6">
                <p className="text-sm text-text-muted leading-relaxed italic">
                  &ldquo;No fees unless we win. We advance all case costs. You
                  focus on healing — we handle the rest.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
