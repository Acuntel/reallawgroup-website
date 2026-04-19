import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Abogado de Cierres HUD y Propiedades Gubernamentales — Chicago",
  description:
    "REAL Law Group maneja cierres de viviendas HUD en todo Chicagoland. Abogados experimentados que guían a los compradores a través de los plazos, contratos y requisitos de cierre específicos de HUD. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/hud-closings",
});

const hudClosingSteps = [
  "El comprador presenta una oferta a través del sistema de licitaciones en línea de HUD (HUDHomeStore.com)",
  "Si es aceptada, el comprador recibe un contrato ratificado de HUD",
  "El comprador asegura el financiamiento — FHA, convencional o en efectivo",
  "Comienza el período de revisión del abogado y se solicita la búsqueda de título",
  "Se realizan las inspecciones y se atienden las reparaciones necesarias",
  "El cierre se coordina con la compañía de administración de activos de HUD",
  "Se realiza el cierre final y se transfiere el título al comprador",
];

const hudDifferences = [
  "Plazos de cierre estrictos, generalmente de 45 a 60 días desde la ratificación del contrato",
  "Anexos, divulgaciones y formularios de contrato específicos de HUD que difieren de las transacciones estándar en Illinois",
  "Las propiedades se venden estrictamente “tal cual” sin reparaciones ni créditos por parte del vendedor",
  "Se requiere un depósito de arras dentro de un plazo breve después de la aceptación de la oferta",
  "Las solicitudes de prórroga están disponibles, pero conllevan tarifas diarias obligatorias",
];

const faqs = [
  {
    question: "¿Qué es una vivienda HUD?",
    answer:
      "Una vivienda HUD es una propiedad que anteriormente fue financiada con una hipoteca asegurada por FHA. Cuando el prestatario incumple y el prestamista ejecuta la hipoteca, el Departamento de Vivienda y Desarrollo Urbano adquiere la propiedad y la pone a la venta para recuperar la reclamación del seguro. Estas viviendas se venden a través del sitio oficial de listados de HUD, HUDHomeStore.com.",
  },
  {
    question: "¿Necesito un abogado para un cierre HUD en Illinois?",
    answer:
      "Aunque no se requiere legalmente en todas las situaciones, contar con un abogado para un cierre HUD es altamente recomendable. Las transacciones HUD siguen un proceso diferente al de las compras residenciales estándar, con formularios de contrato únicos, plazos estrictos y anexos específicos. Un abogado experimentado en cierres HUD protege sus intereses y mantiene la transacción en marcha.",
  },
  {
    question: "¿Puedo negociar el precio de una vivienda HUD?",
    answer:
      "Las viviendas HUD se venden a través de un proceso de licitación en línea en lugar de una negociación tradicional. Durante el período inicial de listado, solo los compradores que ocuparán la vivienda y ciertas organizaciones sin fines de lucro pueden hacer ofertas. Si la propiedad no se vende, se abre a los inversionistas. HUD revisa todas las ofertas y puede aceptar, rechazar o contraofertar en función del valor tasado y las condiciones del mercado.",
  },
  {
    question:
      "¿Qué sucede si necesito más tiempo para cerrar una vivienda HUD?",
    answer:
      "Si no puede cerrar dentro del plazo original del contrato, su abogado puede presentar una solicitud de prórroga a la compañía de administración de activos de HUD. Las prórrogas no están garantizadas, y cada prórroga aprobada conlleva una tarifa diaria que el comprador debe pagar. REAL Law Group maneja solicitudes de prórroga regularmente y trabaja para mantener su cierre en el cronograma siempre que sea posible.",
  },
  {
    question: "¿Las viviendas HUD se venden tal cual?",
    answer:
      "Sí. HUD vende todas las propiedades en su estado actual, lo que significa que HUD no hará reparaciones ni ofrecerá créditos por defectos de la propiedad. Los compradores siempre deben programar una inspección completa de la vivienda antes del plazo de inspección para entender el alcance total de las reparaciones necesarias antes de comprometerse con la compra.",
  },
  {
    question: "¿Puedo usar un préstamo FHA para comprar una vivienda HUD?",
    answer:
      "Sí, el financiamiento FHA es una de las formas más comunes de comprar una vivienda HUD. También se aceptan préstamos convencionales y compras en efectivo. Su prestamista deberá cumplir con el cronograma de cierre de HUD, por lo que es importante tener el financiamiento listo antes de enviar una oferta. REAL Law Group coordina con su prestamista para asegurar que toda la documentación esté lista para un cierre oportuno.",
  },
];

export default function HUDClosingsPage() {
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
              { name: "Cierres HUD" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Cierres HUD
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Cierres HUD" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              REAL Law Group actúa como abogado de cierre HUD para compradores
              que adquieren propiedades de propiedad del gobierno en toda el
              área de Chicago. Las viviendas HUD son propiedades residenciales
              adquiridas por el Departamento de Vivienda y Desarrollo Urbano de
              EE. UU., generalmente después de que un prestatario incumple una
              hipoteca asegurada por FHA y el prestamista completa una ejecución
              hipotecaria. Una vez que HUD toma posesión, estas viviendas se
              ponen a la venta a nuevos compradores a precios determinados por
              el mercado.
            </p>
            <p className="text-text-muted leading-relaxed">
              Comprar una vivienda HUD puede ser una excelente oportunidad tanto
              para compradores primerizos como para inversionistas, pero el
              proceso difiere significativamente de una transacción inmobiliaria
              estándar. Nuestros abogados guían a los compradores a través de
              cada etapa del proceso de cierre HUD, desde la revisión del
              contrato hasta la transferencia final del título.
            </p>
          </div>

          {/* The HUD Closing Process */}
          <div className="mb-16">
            <span className="section-label">Paso a Paso</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              El Proceso de Cierre HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Los cierres HUD siguen una secuencia estructurada que avanza bajo
              un cronograma firme. Comprender cada paso ayuda a los compradores
              a mantenerse al día con los plazos y evitar demoras costosas.
            </p>
            <ol className="space-y-4">
              {hudClosingSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-text-muted pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What Makes HUD Closings Different */}
          <div className="mb-16">
            <span className="section-label">Diferencias Clave</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Qué Hace Diferentes a los Cierres HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Las transacciones HUD operan bajo reglas que no se aplican a las
              compras residenciales típicas en Illinois. Los compradores que
              abordan un cierre HUD como un trato estándar suelen enfrentar
              problemas. Estas son las distinciones clave que nuestros abogados
              ayudan a los clientes a manejar.
            </p>
            <div className="space-y-3">
              {hudDifferences.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD Closing Extension Requests */}
          <div className="mb-16">
            <span className="section-label">Prórrogas</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Solicitudes de Prórroga de Cierre HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Cuando surgen demoras de financiamiento, problemas de título u
              otras complicaciones, los compradores pueden necesitar tiempo
              adicional más allá del plazo original de cierre. HUD permite
              solicitudes de prórroga, pero tienen un costo. Cada prórroga
              aprobada conlleva una tarifa diaria que se acumula por cada día
              posterior a la fecha original de cierre.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group maneja solicitudes de prórroga en nombre de
              nuestros clientes, comunicándose directamente con la compañía de
              administración de activos de HUD para asegurar tiempo adicional
              cuando sea necesario. Trabajamos para minimizar las tarifas de
              prórroga identificando posibles demoras con anticipación y
              manteniendo a todas las partes alineadas en un cronograma de
              cierre realista. Cuando una prórroga es inevitable, nos aseguramos
              de que la solicitud se presente correctamente y dentro del plazo
              requerido para proteger su contrato.
            </p>
          </div>

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
        heading="¿Comprando una vivienda HUD en Illinois?"
        text="Nuestros abogados manejan cada paso del proceso de cierre HUD para que usted pueda concentrarse en su nueva casa."
        buttonText="Contáctenos Hoy"
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
              href="/es/practice-areas/building-violations"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Violaciones de Código de Construcción
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
              href="/es/emd"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Depósitos de Arras
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
