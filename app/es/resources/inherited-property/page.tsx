import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Propiedad Heredada y Bienes Raíces en Sucesión",
  description:
    "Orientación sobre propiedad heredada y bienes raíces en sucesión en Illinois. Conozca sus opciones para conservar, vender o transferir viviendas y terrenos heredados. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/inherited-property",
});

const sellingServices = [
  "Presentaciones y aprobación del tribunal de sucesiones",
  "Búsqueda de título y saneamiento del título de propiedad heredada",
  "Manejo de hipotecas, gravámenes o deudas fiscales pendientes",
  "Coordinación con agentes inmobiliarios o compradores en efectivo",
  "Consideraciones sobre impuestos de transferencia y ganancias de capital",
  "Coordinación del cierre y preparación de documentos",
];

const faqs = [
  {
    question:
      "¿Tengo que pasar por el proceso de sucesión para vender una propiedad heredada en Illinois?",
    answer:
      "Depende de cómo se mantenía la propiedad. Si el fallecido era dueño de la propiedad únicamente a su nombre sin un fideicomiso, tenencia conjunta o instrumento de transferencia por fallecimiento, generalmente se requiere un proceso de sucesión antes de que la propiedad pueda venderse. Las propiedades mantenidas en un fideicomiso de tierra, fideicomiso en vida o con una escritura TOD a menudo pueden evitar la sucesión por completo. Un abogado puede revisar la escritura y los documentos patrimoniales para determinar si la sucesión es necesaria en su situación.",
  },
  {
    question:
      "¿Cuánto tiempo dura el proceso de sucesión de Illinois para bienes raíces?",
    answer:
      "Un caso típico de sucesión en Illinois toma entre 6 y 12 meses, aunque los patrimonios complejos con disputas, títulos poco claros o deudas pendientes pueden tardar más. Si necesita vender la propiedad durante la sucesión, el tribunal debe aprobar la venta, lo que agrega pasos adicionales al cronograma. Trabajar con un abogado de sucesiones con experiencia puede ayudar a que el proceso avance de manera eficiente.",
  },
  {
    question: "¿Tengo que pagar impuestos por una propiedad heredada?",
    answer:
      "Illinois no impone un impuesto sobre la herencia, pero existen otras consideraciones fiscales. Los impuestos a la propiedad siguen siendo exigibles independientemente de los cambios de propietario. Si vende la propiedad heredada, es posible que deba pagar el impuesto federal sobre ganancias de capital por cualquier apreciación por encima de la base escalonada (el valor justo de mercado de la propiedad en la fecha del fallecimiento). También puede haber impuestos de transferencia al cierre. Recomendamos consultar tanto con un abogado de bienes raíces como con un profesional de impuestos para comprender sus obligaciones específicas.",
  },
  {
    question:
      "¿Qué sucede si múltiples miembros de la familia heredan la misma propiedad?",
    answer:
      "Cuando múltiples herederos heredan una propiedad, se convierten en copropietarios (tenencia en común). Todos los copropietarios deben ponerse de acuerdo sobre las decisiones relativas a la propiedad — ya sea conservarla, venderla o alquilarla. Si los copropietarios no pueden ponerse de acuerdo, cualquier propietario puede presentar una acción de partición ante el tribunal para forzar una venta. REAL Law Group ayuda a las familias a negociar acuerdos y, cuando es necesario, a navegar el proceso de partición.",
  },
  {
    question:
      "¿Puedo vender una casa heredada rápidamente sin ponerla en el mercado?",
    answer:
      "Sí. Muchas familias que heredan una propiedad prefieren una venta más rápida y sencilla en lugar de pasar por el proceso tradicional de publicación. REAL Law Group trabaja con una red de inversionistas de bienes raíces de confianza y compradores en efectivo que compran propiedades heredadas tal como están, a menudo cerrando en cuestión de semanas. Nos encargamos del aspecto legal para garantizar que la venta se ejecute correctamente y que sus intereses estén protegidos.",
  },
];

export default function InheritedPropertyPageES() {
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
              { name: "Propiedad Heredada y Bienes Raíces en Sucesión" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Propiedad Heredada y Bienes Raíces en Sucesión
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Orientación legal compasiva para familias que enfrentan bienes
            raíces heredados en Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Propiedad Heredada y Bienes Raíces en Sucesión" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            Perder a un ser querido ya es suficientemente difícil sin el estrés
            adicional de decidir qué hacer con su propiedad. Ya sea que haya
            heredado una vivienda familiar, una propiedad de alquiler o un
            terreno vacante, REAL Law Group le guía a través de sus opciones con
            compasión y claridad. Nos encargamos de los detalles legales para
            que usted pueda enfocarse en lo que más importa.
          </p>

          {/* Options for Inherited Property */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Sus Opciones para la Propiedad Heredada
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-16">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Conservar la Propiedad
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Puede optar por mudarse a la vivienda heredada o mantenerla como
                una propiedad de alquiler. De cualquier manera, deberá
                transferir el título a su nombre, actualizar los registros de
                impuestos a la propiedad y abordar cualquier obligación
                pendiente sobre la propiedad, como una hipoteca o impuestos no
                pagados.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Vender la Propiedad
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Muchos herederos deciden vender, ya sea a través de una
                publicación tradicional con un agente de bienes raíces o
                mediante una venta más rápida a un inversionista o comprador en
                efectivo. Vender una propiedad heredada en Illinois a menudo
                implica pasos legales adicionales, incluida la aprobación del
                tribunal de sucesiones si el patrimonio aún no se ha liquidado.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Transferir a Otro Miembro de la Familia
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Si otro miembro de la familia desea la propiedad, puede
                transferirse mediante una escritura. Según las circunstancias,
                esto puede involucrar una escritura de renuncia (quit claim),
                una escritura de garantía o una distribución a través del
                patrimonio en sucesión. Las implicaciones fiscales varían según
                el método de transferencia.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Colocar en un Fideicomiso
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Para las familias que piensan a largo plazo, colocar una
                propiedad heredada en un fideicomiso puede brindar protección
                continua de activos, simplificar futuras transferencias y ayudar
                a evitar la sucesión para la próxima generación. Esto es
                especialmente común con viviendas familiares multigeneracionales
                y propiedades de inversión.
              </p>
            </div>
          </div>

          {/* Illinois Probate Process */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            El Proceso de Sucesión de Illinois para Bienes Raíces
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-6">
            Cuando alguien fallece siendo dueño de bienes raíces únicamente a su
            nombre, esa propiedad típicamente debe pasar por el proceso de
            sucesión antes de poder transferirse o venderse legalmente. La
            sucesión es el proceso supervisado por el tribunal para validar el
            testamento (si existe), saldar deudas y distribuir los activos a los
            herederos legítimos.
          </p>

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Cuándo Puede No Requerirse la Sucesión
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              No todas las propiedades heredadas necesitan pasar por el proceso
              de sucesión. La ley de Illinois proporciona varios mecanismos que
              permiten que los bienes raíces pasen fuera de la sucesión,
              incluyendo:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Propiedad mantenida en un{" "}
                  <strong className="text-primary">
                    fideicomiso de tierra
                  </strong>{" "}
                  o{" "}
                  <strong className="text-primary">fideicomiso en vida</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Propiedad mantenida en{" "}
                  <strong className="text-primary">tenencia conjunta</strong>{" "}
                  con derecho de supervivencia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  <strong className="text-primary">
                    Instrumentos de transferencia por fallecimiento (TOD)
                  </strong>{" "}
                  registrados en la escritura
                </span>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed mb-16">
            Cuando se requiere la sucesión, el proceso en Illinois típicamente
            toma de 6 a 12 meses. El cronograma depende de la complejidad del
            patrimonio, si existen deudas o disputas, y qué tan rápido el
            tribunal procesa las presentaciones. Nuestro equipo trabaja para que
            los asuntos de sucesión avancen de manera eficiente mientras le
            mantiene informado en cada paso.
          </p>

          {/* Selling an Inherited Home */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Venta de una Vivienda Heredada
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-8">
            Vender una propiedad heredada implica más aspectos que una
            transacción estándar de bienes raíces. Desde sanear el título hasta
            navegar los requisitos de sucesión, REAL Law Group maneja todos los
            aspectos legales de la venta para que usted pueda avanzar con
            confianza.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {sellingServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* Connect with Trusted Buyers */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Conéctese con Compradores de Confianza
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-16">
            <p className="text-text-muted leading-relaxed">
              Para las familias que necesitan vender una propiedad heredada
              rápidamente, REAL Law Group trabaja con una red de inversionistas
              de bienes raíces de confianza y compradores en efectivo en toda el
              área de Chicago. Son profesionales verificados que compran
              propiedades tal como están, cerrando a menudo en semanas en lugar
              de meses. No hay obligación &mdash; simplemente hacemos la
              presentación y nos encargamos del aspecto legal de la transacción
              para asegurar que todo se haga correctamente.
            </p>
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
        heading="¿Heredó una propiedad? Podemos ayudarle."
        text="Nuestros abogados de bienes raíces con experiencia guían a las familias en cada paso del proceso de propiedad heredada."
        buttonText="Agendar una Consulta"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/es/practice-areas/estate-planning"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Planificación Patrimonial
          </a>
          <a
            href="/es/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Derecho de Bienes Raíces
          </a>
          <a
            href="/es/practice-areas/land-trusts"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Fideicomisos de Tierra
          </a>
        </div>
      </section>
    </>
  );
}
