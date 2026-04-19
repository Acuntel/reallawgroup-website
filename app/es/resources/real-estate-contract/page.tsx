import { FileText, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

const CONTRACT_PDF_URL =
  "https://chicagorealtor.com/wp-content/uploads/wp-private-media/2025/01/8.0-Multi-Board-Residential-Contract.pdf";

export const metadata = generatePageMetadata({
  title: "Contrato Multi-Board de Bienes Raíces Residenciales",
  description:
    "Acceda al Contrato Multi-Board de Bienes Raíces Residenciales actual utilizado en las transacciones inmobiliarias de Chicagoland. REAL Law Group puede ayudarle a revisar, negociar y cerrar utilizando este contrato.",
  path: "/es/resources/real-estate-contract",
});

export default function RealEstateContractPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contrato de Bienes Raíces
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            El Contrato Multi-Board de Bienes Raíces Residenciales utilizado en
            las transacciones de Chicagoland.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Contrato de Bienes Raíces" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-10">
            <p className="text-text-muted leading-relaxed mb-6">
              El Contrato Multi-Board de Bienes Raíces Residenciales es el
              contrato estándar utilizado para la mayoría de las transacciones
              inmobiliarias residenciales en el área de Chicago. Está aprobado
              conjuntamente por varias asociaciones de REALTORS® y colegios de
              abogados de Chicagoland.
            </p>
            <p className="text-text-muted leading-relaxed">
              Descargue la versión más reciente directamente de la Chicago
              Association of REALTORS® a continuación.
            </p>
          </div>

          <div className="bg-light-gold rounded-xl p-8 border border-secondary/30 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2">
                  Contrato Multi-Board de Bienes Raíces Residenciales 8.0
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  PDF, alojado por la Chicago Association of REALTORS®.
                </p>
              </div>
            </div>

            <a
              href={CONTRACT_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Abrir PDF del Contrato
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              ¿Necesita ayuda con el contrato?
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              La ley de Illinois contempla la revisión por parte de un abogado
              de los contratos inmobiliarios residenciales. REAL Law Group
              representa a compradores y vendedores en todo Chicagoland — desde
              la revisión del contrato hasta el cierre. Contáctenos para una
              consulta gratuita.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Preguntas sobre su contrato de bienes raíces?"
        text="Nuestros abogados experimentados en bienes raíces pueden revisar y negociar el contrato en su nombre. Llame al (630) 299-7600."
      />
    </>
  );
}
