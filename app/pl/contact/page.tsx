import { Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMapsEmbed from "@/components/ui/GoogleMapsEmbed";
import { CONTACT } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Skontaktuj się z naszymi adwokatami ds. nieruchomości w Elmhurst",
  description:
    "Skontaktuj się z REAL Law Group w sprawie usług prawnych dotyczących nieruchomości, biznesu i planowania spadkowego. Zadzwoń (630) 299-7600 lub odwiedź nas w Elmhurst, IL.",
  path: "/pl/contact",
});

export default function ContactPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Kontakt" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Umów swoją bezpłatną konsultację
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Opowiedz nam o swojej sytuacji, a nasz zespół odezwie się w ciągu
            jednego dnia roboczego.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Strona główna", href: "/pl" }, { label: "Kontakt" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-2">
                Rozpocznij współpracę
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Bez zobowiązań, bez presji. Powiedz nam, czego potrzebujesz, a
                my zajmiemy się resztą.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">
                Skontaktuj się z nami
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
                      Telefon
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
                      E-mail
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
                      Adres
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
                      Godziny otwarcia
                    </p>
                    <p className="text-primary font-medium">
                      Pon-Pt: 8:00-19:00
                    </p>
                    <p className="text-primary font-medium">Sob: 8:00-15:00</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border mb-8">
                <GoogleMapsEmbed />
              </div>

              {/* Referral note */}
              <div className="flex items-start gap-4 bg-light-gold rounded-xl p-6">
                <Users className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed italic">
                  &ldquo;Ponad 50% naszych nowych klientów to polecenia od
                  dotychczasowych klientów i innych praktykujących
                  prawników.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
