import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Preguntas Frecuentes sobre Seguro de Título",
  description:
    "Preguntas comunes sobre el seguro de título respondidas por REAL Law Group. Aprenda qué cubre el seguro de título y por qué es importante. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/title-insurance-faq",
});

const faqs = [
  {
    question: "¿Qué es el seguro de título?",
    answer:
      "El seguro de título es una forma de seguro de indemnización que protege al titular contra pérdidas financieras relacionadas con defectos en el título de una propiedad. A diferencia del seguro tradicional, que protege contra eventos futuros, el seguro de título protege contra eventos pasados que podrían afectar sus derechos de propiedad. Una póliza de seguro de título generalmente se emite después de una búsqueda exhaustiva del título, que examina los registros públicos para verificar el historial legal de propiedad del inmueble.",
  },
  {
    question: "¿Por qué necesito un seguro de título?",
    answer:
      "Incluso después de una búsqueda exhaustiva del título, existen riesgos ocultos que no siempre pueden descubrirse a través de los registros públicos. El seguro de título lo protege contra problemas como documentos falsificados, herederos no revelados, errores en los registros públicos, gravámenes no descubiertos, disputas de límites y otros problemas que podrían amenazar su propiedad. Sin un seguro de título, usted podría ser personalmente responsable de defender su título y cubrir cualquier pérdida.",
  },
  {
    question:
      "¿Cuál es la diferencia entre una póliza de propietario y una póliza de prestamista?",
    answer:
      "Una póliza de seguro de título del prestamista (también llamada póliza de préstamo) protege el interés del prestamista hipotecario en la propiedad y generalmente es requerida por el prestamista como condición del préstamo. Una póliza del propietario protege la equidad del comprador en la propiedad. Mientras que una póliza del prestamista solo protege al prestamista, una póliza del propietario lo protege a usted, el propietario de la vivienda, durante el tiempo que usted o sus herederos posean la propiedad.",
  },
  {
    question: "¿Cuánto cuesta el seguro de título en Illinois?",
    answer:
      "Las tarifas del seguro de título en Illinois están reguladas y se basan en el precio de compra o el monto del préstamo de la propiedad. El costo es una prima única pagada al momento del cierre y proporciona cobertura durante el tiempo que usted posea la propiedad. Aunque las tarifas están estandarizadas, el costo total puede variar según el valor de la propiedad y las opciones específicas de cobertura seleccionadas. Su abogado de bienes raíces puede proporcionarle una estimación precisa basada en su transacción.",
  },
  {
    question: "¿Qué cubre el seguro de título?",
    answer:
      "El seguro de título cubre una amplia gama de defectos y problemas de título, incluyendo: errores u omisiones en documentos legales registrados, escrituras, hipotecas o liberaciones falsificadas, herederos no revelados o faltantes que reclaman la propiedad, gravámenes por impuestos no pagados, evaluaciones u otras deudas, servidumbres o gravámenes no mostrados en los registros públicos y registro defectuoso de documentos legales. Cada póliza puede tener exclusiones específicas, por lo que es importante revisar su póliza detenidamente.",
  },
  {
    question: "¿Cuándo debo comprar un seguro de título?",
    answer:
      "El seguro de título generalmente se compra durante el proceso de cierre de una transacción inmobiliaria. La mayoría de los prestamistas hipotecarios requieren una póliza del prestamista antes de financiar un préstamo. Una póliza del propietario, aunque opcional, es altamente recomendable y generalmente se compra al mismo tiempo. La prima es un costo único pagado al cierre — no se requieren primas recurrentes ni renovaciones.",
  },
  {
    question: "¿Qué es una búsqueda de título y por qué es importante?",
    answer:
      "Una búsqueda de título es un examen de los registros públicos relacionados con una propiedad específica. Rastrea el historial de propiedad, identifica cualquier gravamen existente y confirma que el vendedor tiene el derecho legal de vender la propiedad. La búsqueda de título es un paso fundamental en cualquier transacción inmobiliaria porque revela posibles problemas que podrían afectar sus derechos de propiedad. El seguro de título se emite en función de los resultados de esta búsqueda.",
  },
  {
    question: "¿Puedo elegir mi propia compañía de seguro de título?",
    answer:
      "Sí. Según la ley federal (RESPA), usted tiene derecho a elegir su compañía de seguro de título. Aunque su prestamista, agente de bienes raíces o abogado puede recomendar una compañía de títulos, la elección es en última instancia suya. Comparar empresas y servicios puede ser beneficioso, pero es importante trabajar con una compañía de buena reputación que proporcione búsquedas de título exhaustivas y una cobertura integral.",
  },
];

export default function TitleInsuranceFaqPage() {
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
              { name: "Recursos", url: "/es/resources" },
              { name: "Preguntas Frecuentes sobre Seguro de Título" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Preguntas Frecuentes sobre Seguro de Título
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Preguntas comunes sobre el seguro de título respondidas.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Preguntas Frecuentes sobre Seguro de Título" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            El seguro de título es un componente fundamental de cualquier
            transacción inmobiliaria, sin embargo, muchos compradores y
            vendedores tienen preguntas sobre qué es, por qué se necesita y cómo
            funciona. A continuación se encuentran las respuestas a las
            preguntas más frecuentes sobre el seguro de título en Illinois.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-border pb-8 last:border-0"
              >
                <h2 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-start gap-3">
                  <span className="text-secondary font-body text-sm font-bold mt-1">
                    P{i + 1}.
                  </span>
                  {faq.question}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold mb-3">
              ¿Aún Tiene Preguntas?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              El seguro de título puede ser complejo, y cada transacción
              inmobiliaria es única. Si tiene preguntas específicas sobre el
              seguro de título para su compra o venta, nuestros abogados
              experimentados en bienes raíces están aquí para ayudarle a guiar
              el proceso.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Necesita ayuda con su cierre inmobiliario?"
        text="Nuestro equipo se asegurará de que el título de su propiedad esté libre de problemas y sus intereses estén protegidos."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/es/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Derecho Inmobiliario
          </a>
          <a
            href="/es/resources/closing-cost-calculator"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Calculadora de Costos de Cierre
          </a>
        </div>
      </section>
    </>
  );
}
