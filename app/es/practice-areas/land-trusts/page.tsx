import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title:
    "Abogado de Fideicomisos de Tierras en Illinois — Formación y Administración",
  description:
    "Proteja su propiedad con un fideicomiso de tierras de Illinois. REAL Law Group ayuda a los propietarios a establecer fideicomisos de tierras para privacidad, protección de activos y planificación patrimonial simplificada en Chicagoland. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas/land-trusts",
});

const benefits = [
  {
    title: "Privacidad",
    description:
      "Su nombre no aparece en los registros públicos — el fideicomisario posee el título, manteniendo su propiedad confidencial ante cualquiera que busque en los registros del condado.",
  },
  {
    title: "Evitar la Sucesión",
    description:
      "Los intereses de los beneficiarios en un fideicomiso de tierras se consideran propiedad personal según la ley de Illinois, lo que permite transferirlos fuera del tribunal sucesorio.",
  },
  {
    title: "Transferencias Más Sencillas",
    description:
      "Transferir una propiedad es tan simple como cambiar la designación del beneficiario — sin necesidad de registrar una nueva escritura, pagar impuestos de transferencia o notificar a los prestamistas.",
  },
  {
    title: "Protección de Activos",
    description:
      "Debido a que la propiedad no se registra públicamente, es significativamente más difícil para los acreedores y litigantes identificar y embargar sus bienes inmobiliarios.",
  },
  {
    title: "Protección de Responsabilidad",
    description:
      "Separar su nombre personal de la propiedad agrega una capa de distancia entre usted y cualquier reclamo derivado de la propiedad.",
  },
  {
    title: "Administración de Múltiples Propiedades",
    description:
      "Los inversionistas que poseen varias propiedades pueden organizar cada una en su propio fideicomiso, creando una administración de cartera más ordenada y aislando la responsabilidad entre propiedades.",
  },
  {
    title: "Protección Contra Partición",
    description:
      "Cuando múltiples partes tienen intereses como beneficiarios, la estructura del fideicomiso impide que un copropietario pueda forzar la venta por partición de la propiedad.",
  },
];

const candidates = [
  "Inversionistas inmobiliarios que administran múltiples propiedades en Chicagoland",
  "Arrendadores que desean mantener su identidad privada ante inquilinos y el público",
  "Propietarios que enfrentan una exposición elevada a demandas debido a su profesión o negocio",
  "Familias involucradas en planificación patrimonial que desean evitar la sucesión sobre bienes raíces",
  "Propietarios de negocios que buscan separar sus bienes raíces personales de los activos y responsabilidades del negocio",
];

const faqs = [
  {
    question:
      "¿Cuál es el costo de establecer un fideicomiso de tierras en Illinois?",
    answer:
      "Los costos dependen de la complejidad del arreglo, el número de propiedades involucradas y el fideicomisario seleccionado. REAL Law Group ofrece precios transparentes y discutirá los honorarios por adelantado durante su consulta inicial. Contáctenos al (630) 299-7600 para una cotización.",
  },
  {
    question:
      "¿Un fideicomiso de tierras protege mi propiedad de las demandas?",
    answer:
      "Un fideicomiso de tierras proporciona privacidad — elimina su nombre de los registros públicos, dificultando que potenciales demandantes descubran qué propiedad posee. Sin embargo, un fideicomiso de tierras por sí solo no hace que la propiedad sea inmune a juicios. Para una protección más sólida, muchos clientes combinan un fideicomiso de tierras con una estructura de LLC o un fideicomiso en vida.",
  },
  {
    question:
      "¿Puedo ser mi propio fideicomisario en un fideicomiso de tierras de Illinois?",
    answer:
      "Técnicamente sí, pero hacerlo anula el propósito principal del fideicomiso — la privacidad. Si usted se desempeña como su propio fideicomisario, su nombre aparecerá en los registros públicos. La mayoría de los clientes utilizan un fideicomisario corporativo, una persona de confianza o su abogado como fideicomisario para mantener la confidencialidad.",
  },
  {
    question:
      "¿Un fideicomiso de tierras afectará mi hipoteca o los impuestos sobre la propiedad?",
    answer:
      "Transferir una propiedad a un fideicomiso de tierras generalmente no activa una cláusula de vencimiento al vender bajo la Ley Garn-St. Germain, siempre que usted siga siendo el beneficiario y continúe ocupando o administrando la propiedad como antes. Los impuestos sobre la propiedad tampoco se ven afectados — la propiedad conserva el mismo PIN y evaluación fiscal.",
  },
  {
    question:
      "¿Cuál es la diferencia entre un fideicomiso de tierras y una LLC para poseer propiedades?",
    answer:
      "Un fideicomiso de tierras ofrece privacidad y facilidad de transferencia, pero no brinda el mismo escudo de responsabilidad que una LLC debidamente mantenida. Una LLC proporciona una barrera legal formal entre las responsabilidades de la propiedad y sus activos personales. Muchos inversionistas utilizan ambos — poseyendo la propiedad en un fideicomiso de tierras con una LLC como beneficiario — para obtener las ventajas de cada estructura.",
  },
  {
    question: "¿Cuánto tiempo toma establecer un fideicomiso de tierras?",
    answer:
      "Una vez que tenemos toda la información necesaria, el acuerdo de fideicomiso y la escritura generalmente pueden prepararse en una a dos semanas. El registro de la escritura con el condado agrega algunos días hábiles adicionales. El proceso general, desde la consulta hasta la finalización, generalmente toma de dos a tres semanas.",
  },
];

export default function LandTrustsPage() {
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
              { name: "Fideicomisos de Tierras de Illinois" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Fideicomisos de Tierras de Illinois
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Fideicomisos de Tierras de Illinois" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-text-muted leading-relaxed mb-6">
              Illinois es uno de los pocos estados que reconoce los fideicomisos
              de tierras — una poderosa herramienta legal para propietarios que
              buscan privacidad, protección de activos y una planificación
              patrimonial simplificada. Ya sea que posea una sola propiedad en
              alquiler o una cartera de bienes raíces de inversión, un
              fideicomiso de tierras puede proporcionar ventajas significativas
              que otras estructuras de propiedad no pueden.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group ayuda a los clientes en toda el área de Chicago a
              establecer, administrar y recibir asesoría sobre fideicomisos de
              tierras de Illinois. Nuestros abogados entienden los matices de la
              ley de fideicomisos de Illinois y trabajan de cerca con cada
              cliente para estructurar propiedades que se alineen con sus
              objetivos.
            </p>
          </div>

          {/* What Is a Land Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Qué Es un Fideicomiso de Tierras?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Un fideicomiso de tierras es un arreglo legal en el cual el título
              de una propiedad inmobiliaria es poseído por un fideicomisario —
              generalmente un banco, una compañía fiduciaria o una persona
              designada — en beneficio de uno o más beneficiarios. El
              beneficiario suele ser el propio propietario, quien conserva el
              control total sobre la propiedad, incluyendo el derecho a
              administrarla, arrendarla, hipotecarla y venderla.
            </p>
            <p className="text-text-muted leading-relaxed">
              La distinción clave es que el nombre del fideicomisario, no el del
              beneficiario, aparece en los registros públicos. Esto crea una
              capa de privacidad que es exclusiva de la estructura del
              fideicomiso de tierras y es una de las principales razones por las
              que los propietarios de Illinois eligen este arreglo.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Beneficios de un Fideicomiso de Tierras de Illinois
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">
                      {benefit.title}:{" "}
                    </span>
                    <span className="text-text-muted">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Consider */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Quién Debería Considerar un Fideicomiso de Tierras?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Los fideicomisos de tierras no se limitan a inversionistas a gran
              escala. Cualquier propietario en Illinois puede beneficiarse de la
              privacidad y flexibilidad que ofrece un fideicomiso de tierras.
              Los clientes que más se benefician de esta estructura incluyen:
            </p>
            <div className="space-y-3">
              {candidates.map((candidate, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{candidate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Land Trust vs Living Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Fideicomiso de Tierras vs. Fideicomiso en Vida
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Los clientes a menudo preguntan cómo se compara un fideicomiso de
              tierras con un fideicomiso en vida. Si bien ambos son herramientas
              útiles de planificación patrimonial, cumplen propósitos
              diferentes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Fideicomiso de Tierras</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>Contiene solo bienes inmuebles</li>
                  <li>El beneficio principal es la privacidad</li>
                  <li>Específico de Illinois y algunos otros estados</li>
                  <li>
                    El beneficiario conserva el control total de la propiedad
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Fideicomiso en Vida</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>
                    Contiene cualquier tipo de activo — bienes raíces, cuentas,
                    inversiones
                  </li>
                  <li>El beneficio principal es evitar la sucesión</li>
                  <li>Disponible en los 50 estados</li>
                  <li>
                    Proporciona una estructura integral de planificación
                    patrimonial
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Muchos de nuestros clientes utilizan ambas estructuras en conjunto
              — colocando la propiedad en un fideicomiso de tierras y luego
              designando un fideicomiso en vida como beneficiario. Esta
              combinación proporciona privacidad durante la propiedad y una
              transferencia sin problemas al fallecer sin pasar por la sucesión,
              otorgándole la protección más sólida disponible bajo la ley de
              Illinois.
            </p>
          </div>

          {/* Setting Up */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Establecer un Fideicomiso de Tierras con REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Establecer un fideicomiso de tierras es un proceso sencillo cuando
              se cuenta con la asesoría experimentada. Así es como trabajamos
              con los clientes:
            </p>
            <ol className="space-y-4 text-text-muted leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-semibold text-text">Consulta</span> —
                Discutimos sus objetivos, sus propiedades y su plan patrimonial
                general para determinar si un fideicomiso de tierras es la
                opción adecuada.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Redacción del Acuerdo del Fideicomiso
                </span>{" "}
                — Preparamos un acuerdo de fideicomiso personalizado que define
                las obligaciones del fideicomisario, los derechos del
                beneficiario y los términos del fideicomiso.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Seleccionar un Fideicomisario
                </span>{" "}
                — Le ayudamos a elegir un fideicomisario apropiado, ya sea un
                fideicomisario corporativo, una persona u otra entidad.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Registrar la Escritura
                </span>{" "}
                — Se registra una nueva escritura que transfiere la propiedad de
                su nombre al fideicomiso, completando el cambio en los registros
                públicos.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Administrar las Designaciones de Beneficiarios
                </span>{" "}
                — Brindamos asistencia con las designaciones iniciales de
                beneficiarios y cualquier cambio futuro, asegurando que sus
                intereses siempre estén debidamente documentados.
              </li>
            </ol>
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
        heading="¿Interesado en proteger su propiedad con un fideicomiso de tierras?"
        text="Contacte a REAL Law Group para discutir cómo un fideicomiso de tierras de Illinois se ajusta a su estrategia general de bienes raíces y planificación patrimonial."
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
              href="/es/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planificación Patrimonial
            </a>
            <a
              href="/es/practice-areas/building-violations"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Violaciones de Código de Construcción
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
