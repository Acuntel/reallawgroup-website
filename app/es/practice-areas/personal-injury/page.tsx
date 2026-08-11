import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Referencias de Abogados de Lesiones Personales: Chicago y Suburbios",
  description:
    "¿Lesionado en un accidente automovilístico? REAL Law Group lo conecta con abogados experimentados en lesiones personales que luchan por la compensación que usted merece. Consulta gratuita. Llame al (630) 299-7600.",
  path: "/es/practice-areas/personal-injury",
});

const caseTypes = [
  "Accidentes de automóviles y camiones",
  "Accidentes de motocicletas",
  "Accidentes de peatones y ciclistas",
  "Accidentes de viajes compartidos (Uber/Lyft)",
  "Lesiones por resbalones y caídas",
  "Lesiones en el lugar de trabajo",
];

const postAccidentSteps = [
  {
    step: "1",
    title: "Busque Atención Médica de Inmediato",
    description:
      "Su salud es lo primero. Incluso si las lesiones parecen menores, hágase evaluar por un profesional médico. Los síntomas retrasados son comunes en los accidentes automovilísticos, y un registro médico documentado es fundamental para su reclamo.",
  },
  {
    step: "2",
    title: "Documente la Escena",
    description:
      "Si puede hacerlo, tome fotografías de los vehículos, las condiciones de la carretera, las señales de tránsito y cualquier lesión visible. Recopile los nombres y datos de contacto de los testigos. Esta evidencia puede ser decisiva más adelante.",
  },
  {
    step: "3",
    title: "Presente un Informe Policial",
    description:
      "Contacte a las fuerzas del orden y presente un informe oficial del accidente. El informe policial proporciona un registro independiente del incidente, incluyendo las observaciones del oficial y cualquier citación emitida.",
  },
  {
    step: "4",
    title: "No Dé Declaraciones Grabadas",
    description:
      "Los ajustadores de seguros pueden contactarlo rápidamente y solicitar una declaración grabada. Usted no está obligado a proporcionar una. Cualquier cosa que diga puede utilizarse para minimizar o negar su reclamo.",
  },
  {
    step: "5",
    title: "Contacte a un Abogado Antes de Aceptar Cualquier Acuerdo",
    description:
      "Las compañías de seguros a menudo ofrecen acuerdos tempranos que están muy por debajo del valor real de su reclamo. Un abogado experimentado evalúa el alcance total de sus daños — incluyendo costos médicos futuros y pérdida de capacidad de ingresos — antes de considerar cualquier acuerdo.",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta contratar a un abogado de lesiones personales?",
    answer:
      "A través de la red de REAL Law Group, los casos de lesiones personales se manejan por honorarios de contingencia. Eso significa que no hay costo por adelantado y no hay honorarios a menos que usted recupere una compensación. El honorario del abogado es un porcentaje del acuerdo o veredicto, por lo que nunca paga de su bolsillo.",
  },
  {
    question:
      "¿Cuánto tiempo tengo para presentar un reclamo de lesiones personales en Illinois?",
    answer:
      "En Illinois, el plazo de prescripción para la mayoría de los reclamos de lesiones personales es de dos años a partir de la fecha del accidente. Sin embargo, existen excepciones que pueden acortar o extender este plazo dependiendo de las circunstancias. Es importante consultar a un abogado lo antes posible para preservar sus derechos.",
  },
  {
    question:
      "¿Qué compensación puedo recuperar después de un accidente automovilístico?",
    answer:
      "Dependiendo de los hechos de su caso, usted puede tener derecho a una compensación por gastos médicos (pasados y futuros), salarios perdidos y pérdida de capacidad de ingresos, dolor y sufrimiento, daños a la propiedad y, en algunos casos, daños punitivos. Un abogado evaluará el alcance total de sus daños para buscar la máxima recuperación.",
  },
  {
    question: "¿Qué pasa si el otro conductor no tiene seguro?",
    answer:
      "Illinois exige que los conductores tengan un seguro de responsabilidad civil, pero no todos los conductores cumplen. Si lo golpea un conductor sin seguro o con seguro insuficiente, su propia póliza de seguro de automóvil puede proporcionar cobertura a través de las disposiciones de motorista sin seguro/con seguro insuficiente. Un abogado puede revisar su póliza e identificar todas las fuentes disponibles de recuperación.",
  },
];

export default function PersonalInjuryPage() {
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
              { name: "Accidentes Automovilísticos y Lesiones Personales" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Accidentes Automovilísticos y Lesiones Personales
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Representación legal experimentada para víctimas de lesiones en todo
            Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Lesiones Personales" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Lesiones Personales</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Luchando por las Víctimas de Lesiones en Chicagoland
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Si usted o un ser querido ha resultado lesionado en un accidente
              automovilístico, merece una representación legal que priorice su
              recuperación y sus derechos. REAL Law Group ayuda a las víctimas
              de lesiones a recuperar la compensación que merecen a través de
              una red de abogados de confianza especializados en lesiones
              personales con historiales comprobados en los tribunales de
              Illinois.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Desde la consulta inicial hasta el acuerdo o juicio, nuestro rol
              es conectarlo con el abogado adecuado para su caso y asegurar que
              reciba atención personalizada en cada paso del camino. Usted se
              concentra en sanar — nosotros manejamos la lucha legal.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Tipos de Casos que Manejamos
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseTypes.map((caseType, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{caseType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Qué Hacer Después de un Accidente Automovilístico
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Las acciones que tome inmediatamente después de un accidente
              pueden afectar significativamente el resultado de su caso. Siga
              estas pautas para protegerse a sí mismo y a su reclamo:
            </p>
            <div className="space-y-6">
              {postAccidentSteps.map((item) => (
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

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Por Qué Elegir a REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Desde 2016, REAL Law Group ha construido una reputación por poner
              a los clientes en primer lugar. Cuando nos contacta por un asunto
              de lesiones personales, recibe una consulta gratuita para evaluar
              su caso — sin obligación, sin presión. A través de nuestra red de
              abogados de lesiones personales, su caso se maneja por honorarios
              de contingencia, lo que significa que no paga honorarios a menos
              que gane.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Cada caso recibe atención personalizada. No operamos por volumen —
              nos enfocamos en conectarlo con un abogado que tenga experiencia
              específica con su tipo de lesión y los recursos para buscar la
              máxima compensación en su nombre.
            </p>
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
        heading="¿Lesionado en un accidente? Obtenga una consulta gratuita."
        text="Llame a REAL Law Group al (630) 299-7600 o programe una consulta para discutir su caso con un abogado experimentado en lesiones personales."
        buttonText="Consulta Gratuita"
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
              href="/es/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Inversionistas de Bienes Raíces
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
