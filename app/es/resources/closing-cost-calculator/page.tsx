import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import ClosingCostCalculator from "@/components/ui/ClosingCostCalculator";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Calculadora de Costos de Cierre",
  description:
    "Estime sus costos de cierre al comprar o vender una propiedad en Illinois. Calculadora interactiva gratuita que cubre impuestos de transferencia, seguro de título, honorarios de abogado y más. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/closing-cost-calculator",
});

export default function ClosingCostCalculatorPageES() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Calculadora de Costos de Cierre
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Estime sus costos de cierre para una transacción de bienes raíces en
            Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Calculadora de Costos de Cierre" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            Utilice esta calculadora para obtener un estimado aproximado de los
            costos de cierre al comprar o vender una propiedad en el área de
            Chicago y en todo Illinois. Seleccione su rol, ingrese el precio de
            venta y elija su condado para ver un desglose detallado de los
            honorarios típicos, incluyendo impuestos de transferencia, seguro de
            título y costos de abogado. Para un estimado exacto adaptado a su
            transacción, comuníquese con nuestro equipo.
          </p>

          <ClosingCostCalculator />
        </div>
      </section>

      <CTABanner
        heading="¿Desea un estimado exacto para su transacción?"
        text="Nuestros abogados de bienes raíces con experiencia pueden proporcionar un desglose detallado de los costos de cierre específicos para su compra o venta. Llámenos al (630) 299-7600 o contáctenos en línea."
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
            href="/es/resources/title-insurance-faq"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Preguntas Frecuentes sobre Seguro de Título
          </a>
          <a
            href="/es/resources/prevent-wire-fraud"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Prevenir el Fraude por Transferencia
          </a>
        </div>
      </section>
    </>
  );
}
