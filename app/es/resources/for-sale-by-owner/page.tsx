import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Servicios Legales para Venta por el Propietario (FSBO) en Illinois",
  description:
    "REAL Law Group brinda representación legal para vendedores FSBO en Illinois. Redacción de contratos, trabajo de títulos, coordinación de cierre y apoyo legal completo sin necesidad de un agente. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/for-sale-by-owner",
});

const fsboServices = [
  "Redacción y revisión de contratos",
  "Negociación de modificaciones del abogado del comprador",
  "Búsqueda de título y saneamiento de problemas de título",
  "Coordinación con el prestamista y la compañía de títulos del comprador",
  "Preparación de documentos de cierre y declaraciones de liquidación",
  "Cumplimiento adecuado de las divulgaciones requeridas",
  "Estampillas de transferencia e inscripción en el registro",
  "Protección de sus intereses sin representación de un agente",
];

const processSteps = [
  {
    step: "1",
    title: "Publique Su Vivienda",
    description:
      "Fije el precio de su propiedad, prepárela para las visitas y promuévala a través de anuncios en línea, letreros y servicios MLS de tarifa fija. Usted controla el proceso desde el primer día.",
  },
  {
    step: "2",
    title: "Encuentre un Comprador",
    description:
      "Gestione las consultas, programe las visitas e identifique a un comprador serio. Una vez que acuerden el precio y los términos, es hora de ponerlo por escrito.",
  },
  {
    step: "3",
    title: "Firme un Contrato",
    description:
      "Usted o el comprador redactan el acuerdo de compra inicial. En Illinois, la mayoría de los contratos residenciales incluyen un período estándar de revisión del abogado — típicamente cinco días hábiles.",
  },
  {
    step: "4",
    title: "Revisión del Abogado",
    description:
      "Su abogado en REAL Law Group revisa el contrato, propone modificaciones para proteger sus intereses y negocia los términos con el abogado del comprador. Aquí es donde se añaden o ajustan protecciones críticas.",
  },
  {
    step: "5",
    title: "Inspecciones y Negociaciones",
    description:
      "El comprador realiza las inspecciones. Si surgen problemas, su abogado negocia créditos para reparaciones o enmiendas al contrato en su nombre para que usted no esté aceptando términos desfavorables.",
  },
  {
    step: "6",
    title: "Trabajo de Título",
    description:
      "Se solicita una búsqueda de título para confirmar la propiedad clara. Si aparecen gravámenes, cargas o defectos en el título, su abogado trabaja para resolverlos antes del cierre.",
  },
  {
    step: "7",
    title: "Cierre",
    description:
      "Su abogado prepara la escritura, la declaración de liquidación y los documentos de transferencia. En el cierre, se firman todos los documentos, se desembolsan los fondos y la propiedad se transfiere al comprador.",
  },
];

const faqs = [
  {
    question:
      "¿Es legal vender una casa sin un agente de bienes raíces en Illinois?",
    answer:
      "Sí. Illinois no exige que utilice un agente de bienes raíces para vender su vivienda. Independientemente de si usa o no un agente inmobiliario, es probable que se beneficie de contratar a un abogado de bienes raíces.",
  },
  {
    question: "¿Qué hace un abogado de bienes raíces?",
    answer:
      "Su abogado redacta o revisa el contrato de compra, negocia modificaciones con el abogado del comprador, solicita y revisa la búsqueda de título, prepara los documentos de cierre incluyendo la escritura y la declaración de liquidación, coordina con el prestamista y la compañía de títulos del comprador, y garantiza que se cumplan todos los requisitos legales hasta el cierre.",
  },
  {
    question: "¿Aún tengo que pagar la comisión del agente del comprador?",
    answer:
      "Si el comprador está representado por un agente, es posible que el agente del comprador espere una compensación. Este es un punto negociable en la transacción. Su abogado puede ayudarle a entender sus opciones y a negociar los términos de comisión como parte del acuerdo de compra.",
  },
  {
    question: "¿Cuáles son los mayores riesgos de vender FSBO sin un abogado?",
    answer:
      "Los mayores riesgos incluyen firmar un contrato con términos desfavorables, no hacer las divulgaciones de propiedad requeridas por la ley de Illinois, no detectar defectos de título que podrían retrasar o frustrar el cierre, y el manejo inadecuado de las arras. Un abogado de bienes raíces con experiencia elimina estos riesgos y garantiza que la transacción se cierre adecuadamente.",
  },
];

export default function ForSaleByOwnerPageES() {
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
              { name: "Servicios Legales para Venta por el Propietario" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Servicios Legales para Venta por el Propietario
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Representación de abogados para propietarios de Illinois que venden
            sin un agente.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Venta por el Propietario" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Representación FSBO</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Venda Su Vivienda Sin Un Agente — Pero No Sin Un Abogado
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              En Illinois, usted no necesita un agente de bienes raíces para
              vender su vivienda — pero sí necesita un abogado de bienes raíces.
              Toda transacción residencial de bienes raíces en Illinois incluye
              una revisión por parte de abogados, y para los vendedores FSBO, su
              abogado se convierte en su principal defensor durante todo el
              proceso.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Los vendedores FSBO enfrentan desafíos legales únicos. Sin un
              agente que maneje la documentación y las negociaciones, la
              responsabilidad de los términos del contrato, las divulgaciones,
              los asuntos de título y la coordinación del cierre recae
              directamente sobre usted. REAL Law Group llena ese vacío.
              Brindamos la orientación legal y el apoyo transaccional que los
              vendedores FSBO necesitan para cerrar con confianza y proteger su
              patrimonio.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Por Qué los Vendedores FSBO Necesitan un Abogado
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Cuando vende sin un agente, su abogado se encarga del trabajo
              legal que lo protege desde el contrato hasta el cierre:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fsboServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Cuánto Puede Ahorrar con FSBO?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              La principal ventaja de vender por el propietario es eliminar la
              comisión del agente inmobiliario.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Los honorarios de abogado por manejar el aspecto legal de la
              transacción se facturan a tarifa fija. Usted obtiene
              representación legal completa en cada etapa de la venta — revisión
              del contrato, trabajo de título, negociaciones y cierre.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              El Proceso FSBO con REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        heading="¿Vendiendo su vivienda sin un agente?"
        text="REAL Law Group brinda representación legal completa para vendedores FSBO en toda el área de Chicago. Llame al (630) 299-7600 o agende una consulta."
        buttonText="Agendar una Consulta"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/es/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Derecho de Bienes Raíces
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
