import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Abogado de Cierres Inmobiliarios — Elmhurst y Chicago",
  description:
    "Abogados expertos en bienes raíces que manejan transacciones residenciales y comerciales, cierres, negociación de contratos, ventas cortas y más en Chicagoland. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/real-estate",
});

const residentialServices = [
  "Cierres (Ventas y Compras)",
  "Escrituras de Renuncia (Quit Claim Deeds)",
  "Certificado de Zonificación",
  "Certificación de Agua (Certificado de Pago Completo)",
  "Sellos de Transferencia",
  "Desarrollo y Conversión de Condominios",
  "Formación y Operación de Condominios/HOA",
  "Ejecución Hipotecaria y REO",
  "Ventas Cortas (Short Sales)",
  "Negociación y Revisión de Contratos",
];

const commercialServices = [
  "Cierres (Ventas y Compras)",
  "Registro de Edificios",
  "Revisión y Negociación de Documentos Financieros y de Préstamo",
  "Negociación de Transacciones",
  "Redacción de Contratos",
  "Arrendamiento",
  "Intercambios con Impuestos Diferidos (Intercambios 1031)",
  "Empresas Conjuntas (Joint Ventures)",
];

const closingCategories = [
  {
    id: "buyers",
    title: "Compradores",
    intro:
      "Comprar una casa o una propiedad de inversión es una de las transacciones más grandes que la mayoría de las personas realizará en su vida. Representamos a compradores desde la firma del contrato hasta la mesa de cierre, asegurando que el trato que acordó sea el trato que realmente recibe.",
    points: [
      "Revisión de abogado y modificaciones al contrato",
      "Negociación de reparaciones y créditos por inspección",
      "Revisión de título, plano (survey) y gravámenes",
      "Revisión de documentos hipotecarios y de cierre",
      "Coordinación del cierre con prestamista, título y agente",
      "Resolución de problemas en la inspección final (walk-through)",
    ],
  },
  {
    id: "sellers",
    title: "Vendedores",
    intro:
      "Cuando usted vende, nuestro trabajo es llevarlo a un cierre limpio y puntual con sus ganancias protegidas. Nos encargamos de la parte legal para que usted y su agente puedan enfocarse en la venta — y también apoyamos a vendedores por dueño (FSBO) que no tienen agente.",
    points: [
      "Preparación del contrato y revisión de abogado",
      "Respuesta a demandas de inspección y reparación",
      "Cartas de liquidación y resolución de problemas de título",
      "Sellos de transferencia y requisitos municipales",
      "Preparación de escritura y documentos de cierre",
      "Representación en venta por dueño (FSBO)",
    ],
  },
  {
    id: "short-sales",
    title: "Ventas Cortas (Short Sales)",
    intro:
      "Si debe más de lo que vale su casa, una venta corta puede ser una alternativa a la ejecución hipotecaria. Negociamos directamente con su prestamista y gestionamos el proceso de aprobación desde el paquete de dificultades económicas hasta el cierre.",
    points: [
      "Negociación con el prestamista y aprobación de la venta corta",
      "Preparación del paquete de dificultades económicas (hardship)",
      "Negociación de la exención de deficiencia",
      "Coordinación de múltiples acreedores",
      "Plazos realistas y coordinación con defensa de ejecución hipotecaria",
    ],
  },
  {
    id: "assignment-of-contract",
    title: "Cesión de Contrato",
    intro:
      "Los mayoristas e inversionistas que ceden contratos de compra necesitan documentos que realmente los protejan. Redactamos y revisamos acuerdos de cesión, confirmamos que el contrato subyacente sea cedible y estructuramos el cierre para proteger la posición de cada parte.",
    points: [
      "Redacción y revisión de acuerdos de cesión",
      "Revisión de cedibilidad y lenguaje del contrato",
      "Manejo de honorarios de cesión y depósito de garantía",
      "Cierres dobles cuando la cesión no es una opción",
      "Cumplimiento de divulgación para cedentes y compradores finales",
    ],
  },
  {
    id: "seller-financing",
    title: "Financiamiento del Vendedor",
    intro:
      "El financiamiento del vendedor puede abrir la venta a más compradores y generar ingresos para el vendedor — pero solo si se documenta correctamente. Estructuramos y documentamos ventas a plazos e hipotecas del vendedor para ambas partes del trato.",
    points: [
      "Contratos de venta a plazos (articles of agreement for deed)",
      "Pagarés e hipotecas del vendedor",
      "Pagos iniciales, intereses y pagos globales (balloon)",
      "Registro y depósito en custodia (escrow) de la escritura",
      "Remedios por incumplimiento y consideraciones de cumplimiento",
    ],
  },
];

const faqs = [
  {
    question:
      "¿Necesito un abogado de bienes raíces para la compra de una vivienda en Illinois?",
    answer:
      "Aunque Illinois no exige legalmente la participación de un abogado en transacciones inmobiliarias, es altamente recomendable. Un abogado revisa los contratos, negocia los términos, resuelve problemas de título y asegura que sus intereses estén protegidos desde el contrato hasta el cierre. La mayoría de las transacciones en el área de Chicago involucran abogados de ambas partes.",
  },
  {
    question: "¿Qué hace un abogado de bienes raíces en el cierre?",
    answer:
      "Su abogado revisa todos los documentos de cierre, incluyendo la declaración de liquidación, la escritura, los documentos hipotecarios y el compromiso de título. Se asegura de que todas las cifras financieras sean precisas, resuelve cualquier problema de última hora y verifica que la transacción se registre correctamente en el condado.",
  },
  {
    question: "¿Cuánto cuesta un abogado de bienes raíces en Illinois?",
    answer:
      "Los honorarios varían según la complejidad de la transacción. REAL Law Group ofrece precios transparentes y competitivos. Contáctenos para una cotización específica para su transacción — con gusto discutiremos los honorarios por adelantado durante una consulta.",
  },
  {
    question: "¿Qué es un intercambio 1031 y cómo funciona?",
    answer:
      "Un intercambio 1031 (intercambio con impuestos diferidos) le permite diferir los impuestos sobre ganancias de capital al vender una propiedad de inversión reinvirtiendo los ingresos en una propiedad similar. Se aplican plazos y reglas estrictas — tiene 45 días para identificar propiedades de reemplazo y 180 días para cerrar. Nuestro equipo guía a los clientes en cada paso.",
  },
  {
    question:
      "¿Cuál es la diferencia entre una escritura de renuncia (quit claim deed) y una escritura de garantía (warranty deed)?",
    answer:
      "Una escritura de garantía garantiza que el vendedor posee un título claro y tiene el derecho de vender. Una escritura de renuncia transfiere cualquier interés que el vendedor tenga — sin garantías. Las escrituras de renuncia son comunes para transferencias familiares, divorcios y para trasladar propiedades a fideicomisos, pero conllevan más riesgo para los compradores.",
  },
];

export default function RealEstatePage() {
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
              { name: "Cierres de Bienes Raíces" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Cierres de Bienes Raíces
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Cierres de Bienes Raíces" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Bienes Raíces Residenciales
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Atendemos las necesidades inmobiliarias residenciales de clientes
              ubicados en el norte de Illinois. Desde el contrato hasta el
              cierre, protegemos los intereses de nuestros clientes y les
              ayudamos a comprender las implicaciones comerciales, fiscales y
              legales relacionadas con su transacción inmobiliaria. Como
              pensadores creativos y solucionadores de problemas, buscamos
              asegurar la prosperidad de la inversión inmobiliaria de cada
              cliente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {residentialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Bienes Raíces Comerciales
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Brindamos asesoría a empresas establecidas y proyectos
              emprendedores. Gracias a nuestra experiencia en finanzas y
              negocios, contamos con el conocimiento necesario para analizar
              transacciones inmobiliarias comerciales para nuestros clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commercialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {closingCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="mb-16 scroll-mt-32"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                {category.title}
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8" />
              <p className="text-text-muted leading-relaxed mb-8">
                {category.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Necesita ayuda con una transacción inmobiliaria?"
        text="Nuestro equipo está listo para guiarlo desde el contrato hasta el cierre."
        buttonText="Contáctenos Hoy"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Áreas de Práctica Relacionadas
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/es/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Inversionistas de Bienes Raíces
            </a>
            <a
              href="/es/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Fideicomisos de Tierras
            </a>
            <a
              href="/es/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planificación Patrimonial
            </a>
            <a
              href="/es/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Cierres HUD
            </a>
          </div>
          <h3 className="font-heading text-lg text-primary mt-6 mb-3">
            Recursos Útiles
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/es/resources/closing-cost-calculator"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Calculadora de Costos de Cierre
            </a>
            <a
              href="/es/resources/title-insurance-faq"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Preguntas Frecuentes sobre Seguro de Título
            </a>
            <a
              href="/es/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevenir el Fraude de Transferencias
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
