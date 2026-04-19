import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Escrituras de Renuncia (Quit Claim Deeds)",
  description:
    "Guía completa sobre las escrituras de renuncia. Aprenda qué son, cuándo utilizarlas y sus implicaciones legales de la mano de REAL Law Group. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/quit-claim-deeds-illinois",
});

export default function QuitClaimDeedsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Escrituras de Renuncia (Quit Claim Deeds)
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Entendiendo las escrituras de renuncia y cómo se utilizan.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Escrituras de Renuncia" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            ¿Qué Es una Escritura de Renuncia?
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <p className="text-text-muted leading-relaxed mb-6">
            Una escritura de renuncia (quit claim deed) es un instrumento legal
            utilizado para transferir el interés en un bien inmueble de una
            parte (el otorgante) a otra (el beneficiario). A diferencia de una
            escritura de garantía, una escritura de renuncia no ofrece garantías
            sobre el interés de propiedad del otorgante. El otorgante
            simplemente &ldquo;renuncia&rdquo; a cualquier reclamo que pueda
            tener sobre la propiedad, transfiriéndolo al beneficiario sin
            garantías ni declaraciones sobre la validez del título.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            En Illinois, las escrituras de renuncia se utilizan comúnmente en
            situaciones específicas donde las partes involucradas ya tienen una
            relación establecida o cuando la transferencia de la propiedad no
            implica una venta tradicional.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            ¿Cuándo Se Utilizan las Escrituras de Renuncia?
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-10">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Transferencias Entre Familiares
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Uno de los usos más comunes es la transferencia de propiedades
                entre familiares — por ejemplo, un padre que agrega a un hijo al
                título, o que transfiere la propiedad entre cónyuges durante o
                después de un matrimonio.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Procesos de Divorcio
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Durante los acuerdos de divorcio, se utiliza frecuentemente una
                escritura de renuncia para transferir el interés de un cónyuge
                en la vivienda conyugal al otro cónyuge, según lo dispuesto en
                la sentencia de divorcio.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Transferir una Propiedad a un Fideicomiso
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                La planificación patrimonial a menudo implica transferir bienes
                inmuebles a un fideicomiso en vida. Una escritura de renuncia
                facilita esto al transferir la propiedad desde el individuo al
                fideicomiso para la administración de activos y la evitación de
                la sucesión.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Agregar o Retirar un Nombre del Título
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Ya sea para agregar a un cónyuge al título de la propiedad
                después del matrimonio o para retirar a un excónyuge después del
                divorcio, una escritura de renuncia proporciona un mecanismo
                sencillo para ajustar los registros de propiedad.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Consideraciones Importantes
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">1.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Sin Garantía de Título:
                  </strong>{" "}
                  Una escritura de renuncia no garantiza que el otorgante sea
                  realmente propietario o tenga un título claro. El beneficiario
                  asume todo el riesgo.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">2.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Implicaciones Fiscales:
                  </strong>{" "}
                  Las transferencias de propiedad mediante escritura de renuncia
                  pueden activar impuestos de transferencia, reevaluaciones de
                  impuestos a la propiedad o consideraciones sobre el impuesto
                  sobre donaciones. Consulte con su abogado sobre las
                  implicaciones fiscales específicas.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">3.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Consideraciones Hipotecarias:
                  </strong>{" "}
                  Transferir una propiedad mediante una escritura de renuncia no
                  elimina las obligaciones hipotecarias existentes. El
                  prestatario original sigue siendo responsable de la hipoteca a
                  menos que sea formalmente liberado por el prestamista.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">4.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Requisitos de Registro:
                  </strong>{" "}
                  En Illinois, las escrituras de renuncia deben registrarse en
                  la oficina del registrador del condado donde se encuentra la
                  propiedad para proporcionar notificación constructiva de la
                  transferencia.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">5.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Se Recomienda Asistencia Legal:
                  </strong>{" "}
                  Aunque las escrituras de renuncia son documentos relativamente
                  simples, las implicaciones legales y financieras pueden ser
                  significativas. Trabajar con un abogado de bienes raíces
                  experimentado garantiza que la escritura se redacte y registre
                  correctamente.
                </p>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed">
            En REAL Law Group, preparamos y revisamos regularmente escrituras de
            renuncia para nuestros clientes en todo Chicagoland. Ya sea que esté
            transfiriendo una propiedad dentro de su familia, trasladando una
            propiedad a un fideicomiso o resolviendo un problema de título,
            nuestro equipo puede asegurar que el proceso se maneje de manera
            correcta y eficiente.
          </p>
        </div>
      </section>

      <CTABanner
        heading="¿Necesita ayuda con una escritura de renuncia?"
        text="Nuestros abogados experimentados en bienes raíces pueden preparar y revisar su escritura de renuncia."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
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
        </div>
      </section>
    </>
  );
}
