import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — REAL Law Group",
  description:
    "Comuníquese con REAL Law Group para una consulta gratuita. Llame al (630) 299-7600 o escríbanos a info@reallawgroup.com.",
  alternates: { canonical: "https://reallawgroup.com/es/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contáctenos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Programe su consulta gratuita con un abogado con experiencia.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gold rounded-xl p-8">
              <Phone className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Llámenos
              </h3>
              <a
                href={CONTACT.phoneHref}
                className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
              >
                {CONTACT.phone}
              </a>
              <p className="text-sm text-text-muted mt-2">
                Hablamos inglés, español y polaco.
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <Mail className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Envíenos un Correo
              </h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg font-semibold text-primary hover:text-secondary transition-colors break-all"
              >
                {CONTACT.email}
              </a>
              <p className="text-sm text-text-muted mt-2">
                Respondemos a todos los correos dentro de un día hábil.
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <MapPin className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Visítenos
              </h3>
              <p className="text-base text-primary font-semibold">
                {CONTACT.address}
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <Clock className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Horario
              </h3>
              <p className="text-base text-primary font-semibold mb-1">
                Lunes a Viernes: 8:00 AM - 7:00 PM
              </p>
              <p className="text-base text-primary font-semibold">
                Sábado: 8:00 AM - 3:00 PM
              </p>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              ¿Listo para Programar una Consulta?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              La forma más rápida de empezar es llamándonos. Un miembro de
              nuestro equipo puede programar su consulta gratuita y responder
              sus preguntas iniciales.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Llame al {CONTACT.phone}
            </a>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/es"
              className="text-secondary hover:text-primary font-semibold underline"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
