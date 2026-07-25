import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title:
    "Abogado de Planificación Patrimonial — Testamentos y Fideicomisos en Illinois",
  description:
    "Servicios de planificación patrimonial que incluyen testamentos, fideicomisos, poderes legales, administración sucesoria y protección de activos en Chicagoland. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/estate-planning",
});

const services = [
  "Testamentos",
  "Testamentos Vitales",
  "Fideicomisos en Vida",
  "Poderes Legales",
  "Fideicomisos de Tierras",
  "Administración de Fideicomisos",
  "Administración Sucesoria",
  "Planes de Protección de Activos",
];

const faqs = [
  {
    question:
      "¿Cuál es la diferencia entre un testamento y un fideicomiso en vida?",
    answer:
      "Un testamento entra en vigor después del fallecimiento y debe pasar por la sucesión — un proceso supervisado por el tribunal que puede tomar meses y convertirse en registro público. Un fideicomiso en vida entra en vigor de inmediato, evita la sucesión por completo y mantiene su patrimonio privado. Para muchas familias, un fideicomiso ofrece una distribución más rápida y costos más bajos para los herederos.",
  },
  {
    question:
      "¿Necesito un plan patrimonial si no tengo activos significativos?",
    answer:
      "Sí. La planificación patrimonial no se trata solo de distribuir riqueza. Incluye designar quién toma decisiones médicas y financieras si queda incapacitado (mediante poderes legales), nombrar tutores para hijos menores y asegurar que se cumplan sus deseos. Sin un plan, la ley de Illinois decide por usted.",
  },
  {
    question: "¿Qué es un poder legal y por qué lo necesito?",
    answer:
      "Un poder legal es un documento que autoriza a alguien de su confianza a actuar en su nombre en decisiones financieras o de atención médica si usted no puede. Sin él, es posible que su familia deba pasar por un costoso proceso judicial para obtener la autoridad necesaria para administrar sus asuntos. Illinois reconoce tanto poderes legales financieros como de atención médica.",
  },
  {
    question: "¿Con qué frecuencia debo actualizar mi plan patrimonial?",
    answer:
      "Revise su plan patrimonial cada 3 a 5 años o después de eventos importantes en la vida: matrimonio, divorcio, nacimiento de un hijo, cambios significativos de activos o mudanza a otro estado. Las leyes de Illinois también pueden cambiar de formas que afecten su plan. Nuestro equipo brinda asesoría continua para mantener su plan actualizado.",
  },
  {
    question: "¿Qué es la sucesión y cómo puedo evitarla?",
    answer:
      "La sucesión es el proceso judicial para validar un testamento, pagar deudas y distribuir activos. En Illinois generalmente toma de 6 a 12 meses e implica cargos judiciales y costos de abogado. Puede evitar la sucesión utilizando fideicomisos en vida, tenencia conjunta, designaciones de beneficiarios e instrumentos de transferencia por fallecimiento. Nuestro equipo estructura planes para minimizar o eliminar la sucesión.",
  },
];

export default function EstatePlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Áreas de Práctica", url: "/es/practice-areas" },
              { name: "Planificación Patrimonial" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Planificación Patrimonial
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Planificación Patrimonial" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            Más que simplemente estructurar la transferencia de activos, creamos
            planes patrimoniales y empresariales únicos que preservan los bienes
            y minimizan los impuestos durante la vida y por muchos años más.
            Estamos sumamente familiarizados con el proceso sucesorio y
            proporcionamos la asesoría necesaria para orientarlo y planificar
            por usted y su familia.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Nuestros Servicios de Planificación Patrimonial
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="¿Listo para proteger el futuro de su familia?"
        text="Permítanos ayudarle a crear un plan patrimonial integral adaptado a sus necesidades."
        buttonText="Programar una Consulta"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Áreas de Práctica Relacionadas
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/es/practice-areas/real-estate"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Derecho Inmobiliario
            </a>
            <a
              href="/es/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Fideicomisos de Tierras
            </a>
            <a
              href="/es/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Inversionistas de Bienes Raíces
            </a>
          </div>
          <h3 className="font-heading text-lg text-primary mt-6 mb-3">
            Recursos Útiles
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/es/resources/inherited-property"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Guía de Propiedades Heredadas
            </a>
            <a
              href="/es/resources/quit-claim-deeds-illinois"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Escrituras de Renuncia en Illinois
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
