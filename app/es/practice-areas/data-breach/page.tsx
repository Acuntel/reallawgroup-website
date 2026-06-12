import Link from "next/link";
import { CheckCircle, FileWarning, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  caseTypes,
  ilStatutes,
  evidenceItems,
  processSteps,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "Abogados de Filtraciones de Datos en Illinois — Chicago y DuPage",
  description:
    "¿Recibió una carta de notificación de filtración de datos? REAL Law Group representa a residentes de Illinois en reclamos de filtraciones de datos y privacidad. Evaluación gratuita. (630) 299-7600.",
  path: "/es/practice-areas/data-breach",
});

export default function DataBreachPage() {
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
              { name: "Filtraciones de Datos y Privacidad" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Filtraciones de Datos y Privacidad
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Representamos a residentes de Illinois cuya información personal fue
            expuesta en una filtración de datos. Evaluación de caso gratuita y
            confidencial — sin honorarios de abogado a menos que usted recupere.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Filtraciones de Datos y Privacidad" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Filtraciones de Datos y Privacidad</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Recibió una carta de notificación de filtración de datos?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Si una empresa le envió una carta diciendo que su información
              personal estuvo involucrada en una filtración de datos, esa carta
              existe porque la ley de Illinois lo exigió. También significa que
              su número de Seguro Social, expedientes médicos, cuentas
              financieras u otra información privada puede estar ahora en manos
              de criminales. Usted puede tener derechos legales bajo las leyes
              de Illinois y federales — y actuar con prontitud protege tanto su
              identidad como su posible reclamo.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group representa a personas y familias en el área de
              Chicago, el Condado de Cook y el Condado de DuPage en asuntos de
              filtraciones de datos y privacidad, y co-litiga casos activos de
              filtraciones de datos con firmas nacionales experimentadas en este
              tipo de litigios. Usted obtiene un abogado local con quien
              realmente puede sentarse en Elmhurst — respaldado por los recursos
              que estos casos exigen.
            </p>

            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <FileWarning className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  ¿Recibió una carta de &ldquo;Notice of Data Breach&rdquo;?
                  Guárdela.
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  La carta identifica qué datos fueron expuestos y cuándo — es
                  el documento más importante de su caso. No la tire. Luego siga
                  nuestra{" "}
                  <Link
                    href="/es/resources/data-breach-notification-letter"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    guía paso a paso de Illinois sobre qué hacer después de una
                    carta de filtración de datos
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Illinois tiene algunas de las leyes de privacidad más fuertes del
              país
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Illinois no tiene un solo estatuto integral de privacidad — en su
              lugar tiene un conjunto de leyes especializadas que, juntas, dan a
              los residentes de Illinois remedios de privacidad más fuertes que
              los de casi cualquier otro estado:
            </p>
            <div className="space-y-6">
              {ilStatutes.map((statute) => (
                <div
                  key={statute.citation}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {statute.name}
                  </h3>
                  <a
                    href={statute.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-secondary font-semibold mb-3 hover:underline"
                  >
                    {statute.citation}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {statute.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Filtraciones que revisamos para residentes de Illinois
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
              ¿Qué hace más fuerte un reclamo de filtración de datos?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              En 2025, la Corte Suprema de Illinois sostuvo que el mayor riesgo
              de robo de identidad después de una filtración generalmente no es,
              por sí solo, suficiente para demandar por daños en un tribunal
              estatal de Illinois. Lo que convierte una carta de notificación en
              un reclamo viable es la documentación. Guarde y tráiganos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {evidenceItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cómo funciona — y cuánto cuesta
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

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Una firma local para un problema impersonal
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              La mayoría de las víctimas de filtraciones de datos que buscan
              ayuda en línea encuentran fábricas nacionales de admisión: fotos
              de archivo, formularios anónimos y una firma que nunca conocerán.
              REAL Law Group es diferente. El Socio Director{" "}
              <Link
                href="/es/our-team"
                className="text-primary font-semibold underline hover:text-secondary"
              >
                Vincent Anthony Incopero
              </Link>{" "}
              y nuestro equipo trabajan desde una oficina real en Elmhurst,
              atienden a clientes en inglés, español y polaco, y han
              representado a familias del área de Chicago desde 2016.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Cuando un caso de filtración requiere recursos de demanda
              colectiva, co-litigamos con firmas nacionales experimentadas en
              litigios de filtraciones de datos en casos activos — para que
              usted reciba atención personal y local sin renunciar a la fuerza
              que estos casos requieren. Los resultados anteriores no garantizan
              un resultado similar; cada caso depende de sus propios hechos.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>

          <p className="text-xs text-text-muted leading-relaxed border-t border-border pt-6">
            Publicidad de Abogados. Esta página proporciona información general
            para residentes de Illinois y no es asesoría legal sobre ninguna
            situación específica. Contactar a REAL Law Group, P.C. o enviar un
            formulario no crea una relación abogado-cliente y no detiene ningún
            plazo de prescripción u otro plazo; la representación comienza solo
            cuando se firma un acuerdo de servicios por escrito. Nuestros
            abogados tienen licencia en Illinois.
          </p>
        </div>
      </section>

      <CTABanner
        heading="¿Su información fue expuesta en una filtración de datos?"
        text="Llame a REAL Law Group al (630) 299-7600 o envíenos un mensaje para una evaluación de caso gratuita y confidencial. Sin honorarios de abogado a menos que usted recupere."
        buttonText="Evaluación Gratuita"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Recursos Relacionados
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/es/resources/data-breach-notification-letter"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Qué hacer después de una carta de filtración de datos
            </Link>
            <Link
              href="/es/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevención de filtraciones de datos para empresas
            </Link>
            <Link
              href="/es/practice-areas/business-law"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Derecho Comercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
