import { Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMapsEmbed from "@/components/ui/GoogleMapsEmbed";
import { CONTACT } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contacte a Nuestros Abogados de Bienes Raíces en Elmhurst",
  description:
    "Póngase en contacto con REAL Law Group para servicios legales en bienes raíces, negocios y planificación patrimonial. Llame al (630) 299-7600 o visítenos en Elmhurst, IL.",
  path: "/es/contact",
});

export default function ContactPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Contáctenos" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Agende Su Consulta Gratuita
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cuéntenos sobre su situación y nuestro equipo se comunicará con
            usted en un día hábil.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Inicio", href: "/es" }, { label: "Contáctenos" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-2">
                Comencemos
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Sin obligación, sin presión. Díganos qué necesita y nosotros nos
                encargamos del resto.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">
                Póngase en Contacto
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
                      Teléfono
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
                      Correo Electrónico
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
                      Dirección
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
                      Horario
                    </p>
                    <p className="text-primary font-medium">Lun-Vie: 8AM-7PM</p>
                    <p className="text-primary font-medium">Sáb: 8AM-3PM</p>
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
                  &ldquo;Más del 50% de nuestros nuevos clientes son referencias
                  de clientes anteriores y de otros abogados en
                  ejercicio.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
