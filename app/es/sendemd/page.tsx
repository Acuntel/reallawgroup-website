import { AlertTriangle, Phone, Building2, MapPin, Hash } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Instrucciones para Enviar Arras — REAL Law Group",
  description:
    "Instrucciones para enviar el depósito de arras para clientes de REAL Law Group, P.C. Información de transferencia bancaria y depósito en Chase Bank, número de ruta ABA y prevención de fraude por transferencia.",
  path: "/es/sendemd",
});

export default function SendEMDPageES() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Instrucciones para Enviar el Depósito de Arras
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            ¡Felicitaciones por su nueva vivienda!
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Instrucciones para Enviar el Depósito de Arras" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Numbered instructions — loud and proud */}
          <div className="space-y-4 mb-12">
            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                1. NO ENVÍE POR CORREO NI ENTREGUE EL DEPÓSITO DE ARRAS EN
                NUESTRA OFICINA.
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                2. POR FAVOR ENVÍE UNA TRANSFERENCIA O DEPOSITE LOS FONDOS EN
                CHASE BANK.
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                3. NO ACEPTAMOS EFECTIVO{" "}
                <span className="block md:inline text-base md:text-lg font-semibold normal-case mt-1 md:mt-0">
                  (NI BITCOIN 😉 NI STARBUCKS ☹).
                </span>{" "}
                <span className="block text-base md:text-lg font-semibold normal-case mt-1">
                  SI DEPOSITA EFECTIVO, NO PODREMOS CONFIRMAR SU DEPÓSITO.
                </span>
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                4. LAS ARRAS PUEDEN ENVIARSE POR TRANSFERENCIA O DEPOSITARSE EN
                CUALQUIER SUCURSAL DE CHASE BANK.
                <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                  ¡Ahorre tiempo y evite un viaje a nuestra oficina!
                </span>
              </p>
            </div>

            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                5. LOS FONDOS DEBEN SER PAGADEROS A{" "}
                <span className="underline decoration-4">
                  REAL LAW GROUP P.C. IOLTA
                </span>
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                  6. REAL LAW GROUP P.C. NUNCA LE ENVIARÁ UN CORREO ELECTRÓNICO
                  CON INSTRUCCIONES DE TRANSFERENCIA NI LE PEDIRÁ QUE NOS
                  TRANSFIERA DINERO.
                  <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                    ¡Deténgase, piense y sea prudente si no está seguro!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Routing / Account Info */}
          <div className="bg-light-gold rounded-xl p-8 border-2 border-secondary mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
              Información de Ruta y Cuenta
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Número de Cuenta
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    939106337
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Número ABA (Número de Ruta)
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    071000013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Banco
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    Chase Bank (cualquier sucursal de Chase Bank)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Referencia en la Transferencia o Cheque
                  </p>
                  <p className="text-lg md:text-xl font-heading font-bold text-primary">
                    La dirección de la propiedad que está comprando.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm / Questions */}
          <div className="bg-primary rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
              Para Confirmar las Instrucciones o Si Tiene Preguntas
            </h3>
            <p className="text-gray-200 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Por favor contáctenos directamente antes de enviar cualquier
              fondo.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Llame al {CONTACT.phone}
            </a>
          </div>

          {/* Wire Fraud Warning */}
          <div className="bg-red-50 border-4 border-red-500 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-10 h-10 text-red-600 shrink-0 mt-0.5" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-red-800 uppercase">
                Advertencia de Fraude por Transferencia
              </h2>
            </div>
            <p className="text-red-900 font-semibold text-base md:text-lg leading-relaxed">
              No queremos que sea víctima de fraude por transferencia. La mayor
              parte del dinero transferido a una cuenta fraudulenta es robado y
              no puede recuperarse. Además, no existe seguro para esta pérdida.
              Es posible que nunca recupere su dinero.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
