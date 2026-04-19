import { CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Preguntas Frecuentes sobre Arras — REAL Law Group",
  description:
    "Preguntas frecuentes sobre el depósito en garantía (arras) de REAL Law Group: cómo funciona, cuándo es reembolsable y cuándo se pierde. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/emd",
});

const refundReasons = [
  {
    title: "Durante el período de revisión del abogado",
    description:
      "Los contratos residenciales generalmente incluyen un período de revisión del abogado. Cualquiera de las partes puede cancelar durante esta contingencia.",
  },
  {
    title: "Durante la inspección de la vivienda",
    description:
      "Si las partes no pueden llegar a un acuerdo sobre la respuesta a la inspección, el comprador puede terminar el contrato bajo la contingencia de inspección.",
  },
  {
    title: "Contingencia de financiamiento (denegación de hipoteca)",
    description:
      "Cuando un comprador no puede obtener un compromiso hipotecario por escrito, la contingencia de financiamiento protege el depósito.",
  },
  {
    title: "Defectos en el título",
    description:
      "Si el título no puede ser saneado según lo requerido por el contrato, el comprador puede cancelar el contrato.",
  },
];

const forfeitReasons = [
  {
    title: "Cancelar después de que las contingencias hayan expirado",
    description:
      "Una vez que todas las contingencias se han satisfecho, la cancelación sin fundamento contractual generalmente otorga al vendedor el derecho de quedarse con el depósito como daños liquidados.",
  },
];

const faqs = [
  {
    question: "¿Cuánto dinero de arras debo depositar en el área de Chicago?",
    answer:
      "En el área metropolitana de Chicago, los depósitos de arras típicamente oscilan entre el 1% y el 3% del precio de compra. En una vivienda de $350,000, eso significa entre $3,500 y $10,500. En vecindarios competitivos o situaciones de múltiples ofertas, los compradores a veces ofrecen más para demostrar un compromiso mayor. Su abogado de bienes raíces puede aconsejarle sobre un monto apropiado según el mercado y la propiedad específicos.",
  },
  {
    question: "¿Quién retiene el depósito de arras?",
    answer:
      "Las arras típicamente se retienen en depósito (escrow) por el agente del vendedor o la compañía de títulos. Los fondos permanecen en depósito y no se liberan hasta el cierre o hasta que ambas partes acuerden un desembolso.",
  },
  {
    question: "¿Cuándo se debe pagar el depósito de arras?",
    answer:
      "El depósito de arras generalmente debe pagarse dentro de uno a tres días después de que se acepte el contrato. La fecha límite suele estar escrita en el contrato de compra.",
  },
  {
    question: "¿Son lo mismo las arras que el pago inicial?",
    answer:
      "No, pero están relacionadas. El depósito de arras es un pago de buena fe realizado cuando se firma el contrato. Al cierre, generalmente se acredita al pago inicial y a los costos de cierre del comprador. Si la transacción no se concreta, las arras se manejan según los términos del contrato.",
  },
  {
    question: "¿Qué sucede si hay una disputa sobre el depósito de arras?",
    answer:
      "Las disputas por arras no son poco comunes en las transacciones de bienes raíces. Si el comprador y el vendedor no están de acuerdo sobre quién tiene derecho al depósito, el tenedor del depósito no puede liberar los fondos hasta que ambas partes lleguen a un acuerdo o un tribunal ordene el desembolso. En muchos casos, los abogados de cada parte negocian una resolución. Si no se llega a un acuerdo, el asunto puede requerir mediación o litigio para resolverse.",
  },
];

export default function EarnestMoneyFAQsPageES() {
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
              { name: "Preguntas Frecuentes sobre Arras" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Preguntas Frecuentes sobre Arras
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Cómo funcionan los depósitos de buena fe en las transacciones de
            bienes raíces.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Preguntas Frecuentes sobre Arras" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Qué Es un Depósito de Arras?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Un depósito de arras — comúnmente conocido como EMD (Earnest Money
              Deposit) — es un pago de buena fe realizado por un comprador al
              celebrar un contrato para adquirir un bien inmueble. El depósito
              le indica al vendedor que el comprador tiene la intención seria de
              completar la transacción.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Los depósitos de arras son parte estándar de las transacciones
              residenciales de bienes raíces. El depósito típico varía entre el
              1% y el 3% del precio de compra, aunque el monto es negociable. En
              una vivienda de $400,000, eso se traduce en un depósito de entre
              $4,000 y $12,000.
            </p>
            <p className="text-text-muted leading-relaxed">
              Las arras se mantienen en depósito (escrow) durante toda la
              transacción y se acreditan al pago inicial del comprador y a los
              costos de cierre al momento del cierre. Si la transacción no se
              concreta, la recuperación del dinero depende de los términos del
              contrato y del motivo por el cual la transacción no cerró.
            </p>
          </div>

          {/* How EMD Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cómo Funcionan las Arras
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="bg-light-gold rounded-xl p-8">
              <div className="space-y-6">
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Cuándo se pagan
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    El depósito de arras generalmente debe pagarse de 1 a 3 días
                    después de que se acepte el contrato. La fecha límite suele
                    estar escrita en el contrato de compra. El depósito
                    normalmente se realiza mediante transferencia bancaria.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Quién las retiene
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Las arras son retenidas en depósito por el agente del
                    vendedor o por la compañía de títulos. Los fondos no son
                    accesibles para ninguna de las partes hasta que se cierre la
                    transacción o ambas partes acuerden una liberación.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Al cierre
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Cuando la transacción se cierra con éxito, las arras se
                    aplican como crédito al monto total que el comprador debe
                    pagar al momento del cierre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When Refundable */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cuándo Son Reembolsables Sus Arras
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Los contratos de compra generalmente incluyen contingencias que
              protegen las arras del comprador.
            </p>
            <div className="space-y-4">
              {refundReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When Forfeited */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cuándo Podría Perder Sus Arras
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-4">
              {forfeitReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Much */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              ¿Cuánto Debería Depositar en Arras?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              El monto adecuado depende del mercado local, de la propiedad y de
              qué tan competitiva desea que sea su oferta. En el área de
              Chicago, el rango estándar es del 1% al 3% del precio de compra.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1%
                </p>
                <p className="text-sm text-text-muted">
                  Extremo inferior — común en mercados lentos o cuando hay menos
                  competencia
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1-3%
                </p>
                <p className="text-sm text-text-muted">
                  Rango estándar — típico para la mayoría de las transacciones
                  en los suburbios de Chicago
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  3%+
                </p>
                <p className="text-sm text-text-muted">
                  Mercados competitivos — múltiples ofertas, vecindarios muy
                  solicitados o propiedades deseables
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Un depósito de arras mayor puede hacer que su oferta destaque en
              una situación competitiva, pero también significa que hay más
              dinero en riesgo si la transacción no se concreta fuera de una
              contingencia. Su abogado en REAL Law Group puede ayudarle a
              determinar un monto que fortalezca su oferta manteniendo el riesgo
              bajo control.
            </p>
          </div>

          {/* FAQs */}
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
        heading="¿Preguntas sobre arras? Contáctenos."
        text="REAL Law Group representa a compradores y vendedores en transacciones de bienes raíces en toda el área de Chicago. Llame al (630) 299-7600 o agende una consulta."
        buttonText="Agendar una Consulta"
      />
    </>
  );
}
