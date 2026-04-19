import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Formación de Empresas y Derecho Corporativo en Illinois",
  description:
    "Servicios de derecho comercial que incluyen formación de entidades, acuerdos operativos, gobierno corporativo y planificación de sucesión para empresas en Chicagoland. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/business-law",
});

const services = [
  "Elección y Formación de Entidades Legales",
  "Acuerdos Operativos",
  "Estatutos Corporativos",
  "Número de Identificación del Empleador (EIN)",
  "Gobierno Corporativo",
  "Transacciones de Compra/Venta/Arrendamiento/Licencias",
  "Propiedad y Administración",
  "Planificación de Sucesión",
  "Acuerdos entre Accionistas",
  "Acuerdos de Empleador",
  "Acuerdos de Consultoría",
  "Acuerdos de No Competencia",
  "Acuerdos de Confidencialidad",
];

const faqs = [
  {
    question: "¿Debo formar una LLC o una corporación para mi negocio?",
    answer:
      "Depende de sus objetivos. Una LLC ofrece una administración flexible y tributación por transferencia, lo que la hace popular entre pequeñas empresas. Una corporación puede ser mejor si planea buscar inversionistas externos o cotizar en bolsa. Nuestro equipo analiza su situación específica — tipo de negocio, número de propietarios, implicaciones fiscales — y recomienda la mejor estructura.",
  },
  {
    question: "¿Cuánto tiempo toma formar una entidad comercial en Illinois?",
    answer:
      "La presentación ante la Secretaría de Estado de Illinois generalmente toma de 5 a 10 días hábiles para el procesamiento estándar. Se encuentran disponibles opciones aceleradas por una tarifa adicional. REAL Law Group maneja todo el proceso, incluyendo los artículos de organización, solicitudes de EIN y acuerdos operativos.",
  },
  {
    question: "¿Necesito un acuerdo operativo para mi LLC?",
    answer:
      "Aunque Illinois no exige legalmente un acuerdo operativo, operar sin uno es arriesgado. Un acuerdo operativo define los porcentajes de propiedad, la estructura de administración, la distribución de ganancias y lo que ocurre si un miembro se retira. Sin él, se aplican las reglas predeterminadas de Illinois — que pueden no coincidir con sus intenciones.",
  },
  {
    question:
      "¿Qué es un acuerdo de no competencia y son exigibles en Illinois?",
    answer:
      "Un acuerdo de no competencia restringe a un empleado para que no trabaje para competidores o inicie un negocio competidor durante un período determinado después de dejar la empresa. Illinois hace cumplir los acuerdos de no competencia razonables — deben estar limitados en tiempo, geografía y alcance, y el empleado debe recibir una contraprestación adecuada. Nuestro equipo redacta acuerdos que protegen su negocio y, a la vez, son exigibles.",
  },
];

export default function BusinessLawPage() {
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
              { name: "Derecho Comercial" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Derecho Comercial
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Derecho Comercial" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            REAL Law Group asesora a pequeñas y medianas empresas que operan en
            diversas industrias. Apoyándonos en nuestra experiencia financiera y
            comercial, ayudamos a nuestros clientes con los desafíos que
            enfrentan los propietarios de negocios. Ofrecemos soluciones
            proactivas a los problemas comerciales y legales que surgen.
            Asistimos a nuestros clientes en el proceso de seleccionar y
            organizar nuevas entidades comerciales. Preparamos y presentamos los
            documentos organizacionales apropiados para crear Corporaciones y
            compañías de responsabilidad limitada (LLC). Trabajamos con el
            Estado de Illinois para obtener las licencias de nuestros clientes.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Nuestros Servicios de Derecho Comercial
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
        heading="¿Necesita ayuda con su negocio?"
        text="Desde la formación hasta el gobierno corporativo, nuestro equipo brinda soluciones prácticas y rentables en derecho comercial."
        buttonText="Comenzar"
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
              href="/es/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planificación Patrimonial
            </a>
            <a
              href="/es/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Fideicomisos de Tierras
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
