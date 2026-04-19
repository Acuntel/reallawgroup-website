import { Building2, Handshake, ShieldCheck, Landmark } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Inversionistas de Bienes Raíces — REAL Law Group",
  description:
    "Servicios legales para inversionistas de bienes raíces en el área de Chicago: adquisiciones, ventas, formación de entidades, fideicomisos de tierra, intercambios 1031 y cierres. Llame al (630) 299-7600.",
  path: "/es/real-estate-investors",
});

const services = [
  {
    icon: Building2,
    title: "Adquisiciones y Ventas",
    description:
      "Redacción, revisión y negociación de contratos para alquileres unifamiliares, edificios multifamiliares, remodelaciones para reventa y propiedades comerciales.",
  },
  {
    icon: Landmark,
    title: "Formación y Estructuración de Entidades",
    description:
      "Formación de LLC, acuerdos operativos y estructuras de Series LLC diseñadas para mantener inversiones inmobiliarias con la adecuada separación de responsabilidad.",
  },
  {
    icon: ShieldCheck,
    title: "Fideicomisos de Tierra y Protección de Activos",
    description:
      "Fideicomisos de tierra de Illinois para privacidad y planificación patrimonial, combinados con estructuras de entidades para una protección de activos en capas.",
  },
  {
    icon: Handshake,
    title: "Cierres y Trabajo de Títulos",
    description:
      "Cierres eficientes con atención a la revisión del título, la medición topográfica y los impuestos de transferencia — adaptados a inversionistas que cierran con frecuencia.",
  },
];

export default function RealEstateInvestorsPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Inversionistas de Bienes Raíces" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Inversionistas de Bienes Raíces
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Apoyo legal para comprar, mantener y vender propiedades de inversión
            en el área de Chicago.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Inversionistas de Bienes Raíces" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <p className="section-label">Para Inversionistas</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Representación práctica diseñada en torno al flujo de trabajo del
              inversionista
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Los inversionistas de bienes raíces cierran más rápido y con más
              frecuencia que los compradores y vendedores tradicionales.
              Representamos a inversionistas — desde arrendadores primerizos
              hasta operadores de múltiples propiedades — en toda el área
              metropolitana de Chicago. Nuestro equipo se encarga de todo, desde
              la revisión de contratos en una sola adquisición hasta el trabajo
              continuo de portafolio.
            </p>
            <p className="text-text-muted leading-relaxed">
              Nos enfocamos en mover las transacciones de manera eficiente
              mientras protegemos los intereses del inversionista en cada etapa
              — contrato, título, estructura de entidad, cierre y post-cierre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <Icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-primary mb-3">
              ¿Cierra con frecuencia? Hablemos de un acuerdo de trabajo.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Los inversionistas activos se benefician de un socio legal
              constante que conoce sus criterios de inversión, sus estructuras
              de entidad preferidas y su ritmo de cierre. Trabajamos con
              inversionistas en contratos de tarifa fija para trabajo
              transaccional recurrente.
            </p>
            <a
              href="/es/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Agendar una Consulta
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Trabajando en su próxima adquisición?"
        text="REAL Law Group representa a inversionistas de bienes raíces en toda el área de Chicago. Llame al (630) 299-7600 para hablar sobre su transacción o portafolio."
      />
    </>
  );
}
