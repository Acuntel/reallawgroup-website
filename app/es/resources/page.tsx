import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ResourceCard from "@/components/cards/ResourceCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Recursos y Guías",
  description:
    "Recursos y guías legales de REAL Law Group sobre prevención de fraude por transferencia, escrituras de renuncia, prevención de violaciones de datos y seguro de título. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources",
});

const resources = [
  {
    title: "Calculadora de Costos de Cierre",
    excerpt:
      "Calcule los costos de cierre como comprador o vendedor para transacciones de bienes raíces en el área de Chicago con nuestra calculadora interactiva.",
    href: "/es/resources/closing-cost-calculator",
  },
  {
    title: "Venta por el Propietario (FSBO)",
    excerpt:
      "¿Está vendiendo su vivienda sin un agente? Conozca por qué los vendedores FSBO en Illinois aún necesitan un abogado de bienes raíces.",
    href: "/es/resources/for-sale-by-owner",
  },
  {
    title: "Guía de Propiedad Heredada",
    excerpt:
      "¿Perdió a un ser querido y heredó una propiedad? Conozca sus opciones para la sucesión, venta o conservación de una vivienda heredada en Illinois.",
    href: "/es/resources/inherited-property",
  },
  {
    title: "Preguntas Frecuentes sobre Arras",
    excerpt:
      "¿Qué son las arras, cuánto debería depositar y cuándo puede recuperarlas? Todo lo que los compradores en Illinois deben saber.",
    href: "/es/emd",
  },
  {
    title: "Estampillas de Transferencia",
    excerpt:
      "Consulte las ordenanzas y tasas de estampillas de transferencia para los municipios del área de Chicago.",
    href: "/es/resources/transfer-stamps",
  },
  {
    title: "Contrato de Bienes Raíces",
    excerpt:
      "Acceda al Contrato Residencial Multi-Board utilizado en las transacciones del área de Chicago.",
    href: "/es/resources/real-estate-contract",
  },
  {
    title: "Prevenir el Fraude por Transferencia",
    excerpt:
      "Aprenda a protegerse del fraude por transferencia durante las transacciones de bienes raíces con estos consejos esenciales.",
    href: "/es/resources/prevent-wire-fraud",
  },
  {
    title: "Escrituras de Renuncia (Quit Claim)",
    excerpt:
      "Todo lo que necesita saber sobre las escrituras de renuncia, incluyendo cuándo y cómo se utilizan.",
    href: "/es/resources/quit-claim-deeds-illinois",
  },
  {
    title: "Inversionistas de Bienes Raíces",
    excerpt:
      "Apoyo legal para inversionistas que compran, venden y mantienen bienes raíces en el área de Chicago — adquisiciones, formación de entidades, títulos y cierres.",
    href: "/es/real-estate-investors",
  },
  {
    title: "Guía: Carta de Filtración de Datos",
    excerpt:
      "¿Recibió una carta de notificación de filtración de datos? Los siete pasos que los residentes de Illinois deben tomar ahora — y los derechos legales que les da la ley de Illinois.",
    href: "/es/resources/data-breach-notification-letter",
  },
  {
    title: "Prevención de Violaciones de Datos",
    excerpt:
      "Estrategias esenciales para proteger sus datos personales y empresariales de amenazas cibernéticas cada vez más sofisticadas.",
    href: "/es/resources/data-breach-prevention",
  },
  {
    title: "Preguntas Frecuentes sobre Seguro de Título",
    excerpt:
      "Respuestas a preguntas comunes sobre el seguro de título, incluyendo qué cubre y por qué es importante.",
    href: "/es/resources/title-insurance-faq",
  },
];

export default function ResourcesPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Recursos" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Recursos y Guías
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Información y guías útiles de nuestro equipo legal.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Inicio", href: "/es" }, { label: "Recursos" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <ResourceCard key={i} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
