import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title:
    "Abogado de Defensa ante Violaciones del Código de Construcción de Chicago",
  description:
    "REAL Law Group defiende a propietarios, arrendadores y desarrolladores que enfrentan violaciones del código de construcción de Chicago. Representación en audiencias administrativas, reducción de multas y estrategias de cumplimiento. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/building-violations",
});

const commonViolations = [
  "Construcción o renovación sin permisos",
  "Deficiencias estructurales en pórticos y terrazas",
  "Violaciones del sistema de seguridad contra incendios y rociadores",
  "Violaciones del código eléctrico y de plomería",
  "Violaciones de zonificación y ocupación",
  "Inspecciones de construcción reprobadas",
  "Conversiones ilegales (residencial a comercial o viceversa)",
  "Permisos de construcción faltantes o vencidos",
  "Violaciones del código de ascensores y escaleras mecánicas",
  "Violaciones por pintura con plomo y ambientales",
];

const faqs = [
  {
    question:
      "¿Qué sucede si ignoro una violación del código de construcción en Chicago?",
    answer:
      "Ignorar una violación del código de construcción nunca es recomendable. La ciudad de Chicago puede imponer multas crecientes — a menudo de $500 a $1,000 por día por violación — colocar gravámenes sobre su propiedad y, en casos graves, buscar órdenes de demolición. Si no se presenta a una audiencia administrativa, se emite un fallo por incumplimiento en su contra, lo que hace significativamente más difícil y costoso resolver el asunto posteriormente.",
  },
  {
    question:
      "¿Cuánto tiempo tengo para responder a un aviso de violación del código de construcción?",
    answer:
      "Generalmente, recibirá un aviso de violación con una fecha de audiencia en el Departamento de Audiencias Administrativas de la ciudad de Chicago. Normalmente cuenta con 21 días a partir de la fecha del aviso para preparar su respuesta. Actuar con rapidez le da tiempo a su abogado para reunir evidencia, solicitar inspecciones y desarrollar una estrategia antes de la audiencia.",
  },
  {
    question:
      "¿Puede una violación del código de construcción afectar la venta de mi propiedad?",
    answer:
      "Sí. Las violaciones abiertas del código de construcción aparecen en los registros de la ciudad de Chicago y surgirán durante una búsqueda de título o la diligencia debida del comprador. Las violaciones no resueltas pueden retrasar o impedir una venta, reducir el valor de su propiedad y generar problemas de responsabilidad. Ayudamos a los propietarios a resolver las violaciones de manera eficiente para que no interfieran con las transacciones planeadas.",
  },
  {
    question:
      "¿Cuál es la diferencia entre una violación del código de construcción y una violación de zonificación?",
    answer:
      "Las violaciones del código de construcción se relacionan con la condición física y la seguridad de una estructura — aspectos como el cableado eléctrico, la integridad estructural, la seguridad contra incendios y la plomería. Las violaciones de zonificación involucran cómo se utiliza una propiedad en relación con su clasificación de zonificación, como operar un negocio comercial en una zona residencial o exceder el número permitido de unidades de vivienda. Ambas se adjudican a través del proceso de audiencia administrativa de la ciudad de Chicago.",
  },
  {
    question:
      "¿Necesito un abogado para una audiencia administrativa en Chicago?",
    answer:
      "Aunque no se requiere un abogado, el proceso de audiencia administrativa es adversarial — la ciudad contará con un fiscal que presentará el caso en su contra. Un abogado experimentado entiende los procedimientos de la audiencia, sabe cómo negociar con los fiscales de la ciudad y a menudo puede obtener multas reducidas o desestimaciones. Desde 2016, REAL Law Group ha representado a propietarios en estas audiencias en todo Chicagoland.",
  },
];

export default function BuildingViolationsPage() {
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
              { name: "Violaciones del Código de Construcción de Chicago" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Violaciones del Código de Construcción de Chicago
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Violaciones del Código de Construcción" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Defensa del Código de Construcción</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Protegiendo a los Propietarios Contra Violaciones del Código
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Los propietarios en Chicago operan bajo uno de los códigos de
              construcción municipales más complejos del país. El Departamento
              de Edificios de la ciudad inspecciona y sanciona activamente a
              propiedades por una amplia variedad de violaciones — desde
              permisos faltantes y deficiencias estructurales hasta problemas de
              seguridad contra incendios y conversiones de uso ilegales. Una
              sola violación puede desencadenar multas diarias sustanciales,
              órdenes de suspensión de trabajo en proyectos activos y
              comparecencias obligatorias en audiencias administrativas.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group representa a propietarios, arrendadores,
              inversionistas y desarrolladores que enfrentan acciones de
              cumplimiento del código de construcción en todo Chicago y los
              suburbios circundantes. Ya sea que haya recibido un aviso de
              violación después de una inspección, haya comprado una propiedad
              con violaciones existentes, o esté lidiando con una queja de un
              vecino o inquilino, nuestro equipo trabaja para resolver el asunto
              de manera eficiente y minimizar su exposición financiera.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Violaciones Comunes del Código de Construcción
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              El código de construcción de Chicago abarca prácticamente todos
              los aspectos de la construcción, mantenimiento y uso de
              propiedades. Estas se encuentran entre las violaciones más
              frecuentes que manejamos para nuestros clientes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonViolations.map((violation, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{violation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              El Proceso de Audiencia Administrativa
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Chicago hace cumplir las violaciones del código de construcción a
              través de su Departamento de Audiencias Administrativas (DOAH), un
              sistema de adjudicación administrativa separado del sistema
              judicial tradicional. Cuando el Departamento de Edificios emite
              una citación, el propietario recibe un aviso con una fecha de
              audiencia programada. En la audiencia, un fiscal de la ciudad
              presenta evidencia de la violación ante un juez administrativo.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Los propietarios tienen derecho a presentar evidencia, llamar a
              testigos y argumentar su caso. Sin embargo, el proceso avanza
              rápidamente y las reglas de procedimiento difieren de las de los
              tribunales estándar. Las multas pueden variar desde unos cientos
              de dólares por infracciones menores hasta miles de dólares por día
              por violaciones graves o continuas. En algunos casos, la ciudad
              puede solicitar órdenes de demolición o procedimientos del
              tribunal de construcción para propiedades consideradas peligrosas
              o abandonadas.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Contar con un abogado que comprenda el proceso del DOAH es
              fundamental. Muchas violaciones pueden resolverse mediante
              negociaciones con el fiscal de la ciudad antes de llegar a una
              audiencia formal — a menudo resultando en multas reducidas, plazos
              de cumplimiento extendidos o desestimaciones directas cuando la
              evidencia lo respalda.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cómo Podemos Ayudar
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              En REAL Law Group, adoptamos un enfoque práctico para las
              violaciones del código de construcción. Comenzamos revisando la
              citación, examinando los registros pertinentes de la propiedad y
              comprendiendo el alcance de las violaciones alegadas. A partir de
              ahí, desarrollamos una estrategia — ya sea negociar con la ciudad
              para obtener sanciones reducidas, presentar un plan de
              cumplimiento que demuestre buena fe o impugnar la violación en la
              audiencia cuando los hechos estén de su lado.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Nuestros abogados han manejado cientos de asuntos de audiencias
              administrativas en todo Chicagoland. Entendemos cómo los
              inspectores de la ciudad documentan las violaciones, qué evidencia
              consideran persuasiva los jueces administrativos y cómo avanzar
              los casos hacia una resolución sin demoras o gastos innecesarios.
              Si ha recibido un aviso de violación del código de construcción,
              contáctenos antes de la fecha de su audiencia — la acción temprana
              nos brinda más opciones para proteger sus intereses.
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
        heading="¿Enfrenta una violación del código de construcción?"
        text="Contacte a nuestro equipo hoy para discutir su caso y explorar sus opciones."
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
              href="/es/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Cierres HUD
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
