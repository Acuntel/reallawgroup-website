import {
  Building2,
  Handshake,
  ShieldCheck,
  Landmark,
  Star,
} from "lucide-react";

const testimonials = [
  {
    text: "Vince y su equipo hicieron que nuestro cierre fuera completamente fluido. Profesionales, receptivos y siempre disponibles cuando teníamos preguntas. ¡Altamente recomendados!",
    author: "M.R.",
    context: "Compradora de vivienda, Elmhurst",
  },
  {
    text: "El mejor abogado de bienes raíces del área de Chicago. Se encargaron de todo, desde el contrato hasta el cierre, y explicaron cada paso con claridad.",
    author: "J.P.",
    context: "Cliente de bienes raíces, Naperville",
  },
  {
    text: "Sarah y el equipo fueron increíbles durante nuestro cierre comercial. La atención al detalle en los documentos del préstamo nos salvó de un error costoso.",
    author: "R.T.",
    context: "Cliente de bienes raíces comerciales",
  },
];
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

          <div id="partners" className="mb-16 scroll-mt-32">
            <p className="section-label">Socios de Bienes Raíces</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Asóciese con REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8 max-w-3xl">
              Los buenos negocios se construyen sobre buenas relaciones.
              Trabajamos junto a las personas en las que los inversionistas ya
              confían — y documentamos las asociaciones que los inversionistas
              forman entre sí.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Socios de Inversión
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Acuerdos de empresa conjunta (joint venture), acuerdos de
                  sociedad y acuerdos operativos entre co-inversionistas,
                  estructuras de tenencia en común y documentación de capital
                  privado — para que cada socio sepa exactamente dónde está
                  parado antes del cierre.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Socios de la Industria
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Agentes, corredores, mayoristas, prestamistas, compañías de
                  título y administradores de propiedades: somos el abogado de
                  cierres con el que sus clientes pueden contar. Si busca un
                  socio legal confiable para sus transacciones, hablemos.
                </p>
              </div>
            </div>
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

      <section
        id="testimonials"
        className="section-padding bg-background scroll-mt-32"
      >
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-14">
            <p className="section-label">Testimonios</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-border h-full"
              >
                <div
                  aria-label="5 de 5 estrellas"
                  role="img"
                  className="flex gap-1 mb-4"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-sm font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-xs text-text-muted">{testimonial.context}</p>
              </div>
            ))}
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
