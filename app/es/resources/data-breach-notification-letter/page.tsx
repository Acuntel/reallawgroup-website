import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  steps,
  freezeVsAlert,
  dataTypeGuides,
  recentBreaches,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "¿Carta de Filtración de Datos? Qué Hacer en Illinois",
  description:
    "Guía paso a paso tras una carta de notificación de filtración de datos en Illinois: verifique la carta, congele su crédito, documente pérdidas y conozca sus derechos.",
  path: "/es/resources/data-breach-notification-letter",
});

const ARTICLE_META = {
  title:
    "Qué hacer después de una carta de notificación de filtración de datos en Illinois",
  description:
    "Una guía paso a paso para residentes de Illinois que recibieron una carta de notificación de filtración de datos: verificación de la carta, congelamientos de crédito, alertas de fraude y derechos legales.",
  path: "/es/resources/data-breach-notification-letter",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
};

export default function DataBreachLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(ARTICLE_META)),
        }}
      />
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
              { name: "Guía de la Carta de Filtración de Datos" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            ¿Recibió una carta de filtración de datos en Illinois?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Qué significa la carta, los siete pasos a tomar ahora y los derechos
            legales que le da la ley de Illinois — en lenguaje claro.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Guía de la Carta de Filtración de Datos" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-sm text-text-muted mb-10">
            Revisado por{" "}
            <Link
              href="/es/our-team"
              className="text-primary font-semibold underline hover:text-secondary"
            >
              Vincent Anthony Incopero
            </Link>
            , Socio Director, REAL Law Group, P.C. · Licenciado en Illinois ·
            Última actualización: 12 de junio de 2026
          </p>

          <div className="mb-16">
            <p className="section-label">
              Guía de la Carta de Filtración de Datos
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              &ldquo;Recibí una carta diciendo que mi información personal
              estuvo involucrada en una filtración de datos.&rdquo;
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              No entre en pánico — pero tampoco lo ignore. Esa carta existe
              porque la ley de Illinois obligó a la empresa a informarle. Bajo
              la Ley de Protección de Información Personal de Illinois (PIPA,
              815 ILCS 530), una empresa que expone su información personal debe
              notificarle en el tiempo más expedito posible y sin demora
              injustificada — y si más de 500 residentes de Illinois son
              afectados, también debe reportar la filtración al Procurador
              General de Illinois.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              &ldquo;Información personal&rdquo; bajo la ley de Illinois
              significa su nombre combinado con un número de Seguro Social,
              número de licencia de conducir o identificación estatal, números
              de cuentas financieras o tarjetas, información médica, información
              de seguro de salud o datos biométricos — o un nombre de usuario o
              correo electrónico combinado con una contraseña que da acceso a
              una cuenta en línea. Si recibió una carta, es probable que al
              menos una de esas categorías haya sido expuesta.
            </p>
            <p className="text-text-muted leading-relaxed">
              Esto es exactamente lo que debe hacer, paso a paso.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Qué hacer después de una carta de filtración de datos: 7 pasos
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {steps.map((item) => (
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
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href="https://www.annualcreditreport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                AnnualCreditReport.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.identitytheft.gov/databreach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                IdentityTheft.gov (FTC)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.illinoisattorneygeneral.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                Procurador General de Illinois
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Congelamiento de crédito o alerta de fraude: cuál elegir?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Ambos son gratuitos. El congelamiento de crédito es la protección
              más fuerte; la alerta de fraude es la más ligera y conveniente. Si
              su número de Seguro Social fue expuesto, la mayoría de los
              expertos recomiendan el congelamiento.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    {freezeVsAlert.headers.map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {freezeVsAlert.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-light-gold/50"}
                    >
                      <td className="px-4 py-3 font-semibold text-primary align-top">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.freeze}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.alert}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Qué hacer según los datos que fueron expuestos
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {dataTypeGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {guide.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Puedo demandar por una filtración de datos en Illinois?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Posiblemente. La ley de Illinois exige que las empresas mantengan
              medidas de seguridad razonables para la información personal, y
              una violación de la ley estatal de notificación de filtraciones es
              automáticamente una práctica ilegal bajo la Ley de Fraude al
              Consumidor de Illinois. Las víctimas con pérdidas documentadas —
              cargos fraudulentos, cuentas abiertas a su nombre, gastos de
              bolsillo — pueden tener reclamos, y las exposiciones de
              información biométrica o genética pueden activar estatutos de
              Illinois que establecen daños estatutarios sin prueba de robo de
              identidad. Por eso importa el Paso 7 de arriba: la documentación
              es lo que convierte una carta en un reclamo.
            </p>
            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Evaluación de caso gratuita para residentes de Illinois
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  REAL Law Group representa a residentes de Illinois en{" "}
                  <Link
                    href="/es/practice-areas/data-breach"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    litigios de filtraciones de datos y privacidad
                  </Link>{" "}
                  con honorarios de contingencia — sin honorarios de abogado a
                  menos que usted recupere. Tenga a mano su carta de
                  notificación y{" "}
                  <Link
                    href="/es/contact"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    contáctenos
                  </Link>{" "}
                  o llame al (630) 299-7600.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Filtraciones que han afectado a residentes de Illinois
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Las filtraciones de datos no son eventos raros que pasan en otro
              lugar. Entre las filtraciones recientes reportadas públicamente
              que afectan a residentes de Illinois están:
            </p>
            <div className="space-y-4">
              {recentBreaches.map((breach) => (
                <div key={breach.name} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <p className="text-sm text-text-muted leading-relaxed">
                    <span className="font-semibold text-primary">
                      {breach.name}:
                    </span>{" "}
                    {breach.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-relaxed mt-6">
              Esta lista resume reportes y divulgaciones públicas con fines
              informativos. No es una lista de demandas, y ningún tribunal ha
              determinado que alguna empresa mencionada haya violado ley alguna.
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
            para residentes de Illinois y no es asesoría legal sobre su
            situación específica. Contactar a REAL Law Group, P.C. o enviar un
            formulario no crea una relación abogado-cliente y no detiene ningún
            plazo de prescripción u otro plazo; la representación comienza solo
            cuando se firma un acuerdo de servicios por escrito.
          </p>
        </div>
      </section>

      <CTABanner
        heading="¿Tiene una carta de filtración de datos? Averigüe dónde está parado."
        text="Llame a REAL Law Group al (630) 299-7600 o envíenos un mensaje para una evaluación de caso gratuita y confidencial. Sin honorarios de abogado a menos que usted recupere."
        buttonText="Evaluación Gratuita"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Páginas Relacionadas
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/es/practice-areas/data-breach"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Filtraciones de Datos y Privacidad
            </Link>
            <Link
              href="/es/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevención de filtraciones de datos para empresas
            </Link>
            <Link
              href="/es/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevenir el Fraude por Transferencia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
