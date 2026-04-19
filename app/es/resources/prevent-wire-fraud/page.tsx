import { ShieldAlert, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prevenir el Fraude de Transferencias Bancarias",
  description:
    "Aprenda cómo protegerse del fraude de transferencias bancarias durante las transacciones inmobiliarias. Consejos esenciales de REAL Law Group. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/prevent-wire-fraud",
});

const tips = [
  {
    title:
      "Desconfíe de cualquier correo electrónico que solicite un cambio en las instrucciones de transferencia",
    description:
      "Los estafadores comúnmente hackean cuentas de correo electrónico y envían mensajes que aparentan ser de su agente de bienes raíces, compañía de títulos o abogado con nuevas instrucciones de transferencia. Siempre verifique cualquier cambio llamando a un número de teléfono conocido.",
  },
  {
    title: "Nunca envíe información financiera por correo electrónico",
    description:
      "No envíe números de cuentas bancarias, números de ruta u otros detalles financieros por correo electrónico. El correo electrónico no es un método de comunicación seguro para datos financieros sensibles.",
  },
  {
    title:
      "Verifique las instrucciones de transferencia por teléfono antes de enviar fondos",
    description:
      "Siempre llame a su abogado o compañía de títulos a un número de teléfono que haya verificado de forma independiente (no uno del correo electrónico sospechoso) para confirmar las instrucciones de transferencia antes de enviar dinero.",
  },
  {
    title:
      "Tenga precaución con los cambios de último momento a las instrucciones de cierre",
    description:
      "Los estafadores a menudo crean una sensación de urgencia enviando cambios de último momento a las instrucciones de transferencia. Tómese el tiempo para verificar cualquier cambio, incluso si siente presión para actuar rápidamente.",
  },
  {
    title:
      "Use contraseñas fuertes y únicas para sus cuentas de correo electrónico",
    description:
      "Proteja su correo electrónico contra hackeos utilizando contraseñas fuertes y habilitando la autenticación de dos factores. Muchos esquemas de fraude de transferencias comienzan con una cuenta de correo electrónico comprometida.",
  },
  {
    title: "Confirme la identidad de cualquier persona que solicite fondos",
    description:
      "Antes de transferir dinero, verifique la identidad de la persona o empresa que solicita la transferencia. Utilice información de contacto que haya recopilado de forma independiente, no la información proporcionada en la comunicación sospechosa.",
  },
  {
    title: "Esté atento a los intentos de phishing",
    description:
      "Vigile los correos electrónicos que contengan errores ortográficos, formato inusual o variaciones sutiles en las direcciones de correo electrónico. Estos son indicadores comunes de intentos de phishing diseñados para robar su información.",
  },
  {
    title: "Reporte la actividad sospechosa de inmediato",
    description:
      "Si sospecha que ha sido víctima de un fraude de transferencia, contacte a su banco de inmediato para intentar revertir la transferencia. También reporte el incidente al Centro de Denuncias de Delitos en Internet del FBI (IC3) y a las fuerzas del orden locales.",
  },
  {
    title: "Trabaje con profesionales que prioricen la seguridad",
    description:
      "Elija un abogado de bienes raíces y una compañía de títulos que tomen la ciberseguridad en serio y cuenten con protocolos establecidos para proteger su transacción contra el fraude.",
  },
];

export default function PreventWireFraudPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prevenir el Fraude de Transferencias Bancarias
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Protéjase a sí mismo y a su dinero durante las transacciones
            inmobiliarias.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Prevenir el Fraude de Transferencias" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Warning box */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-semibold text-red-800 mb-2">
                El Fraude de Transferencias Es una Amenaza en Crecimiento
              </h2>
              <p className="text-sm text-red-700 leading-relaxed">
                El fraude de transferencias bancarias en las transacciones
                inmobiliarias se ha vuelto cada vez más común. Los delincuentes
                se dirigen a compradores de vivienda, vendedores e incluso a
                profesionales de bienes raíces para robar fondos durante los
                cierres. La conciencia es su mejor defensa.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            9 Consejos para Protegerse del Fraude de Transferencias
          </h2>

          <div className="space-y-8">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gold shrink-0">
                  <span className="text-secondary font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                REAL Law Group Lo Protege
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                En REAL Law Group, utilizamos protocolos de seguridad de
                vanguardia para proteger las transacciones financieras de
                nuestros clientes. Si tiene alguna preocupación sobre el fraude
                de transferencias, contáctenos de inmediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Preguntas sobre su cierre?"
        text="Nuestro equipo está aquí para asegurar que su transacción inmobiliaria sea segura y protegida."
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
            href="/es/resources/data-breach-prevention"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Prevención de Filtraciones de Datos
          </a>
        </div>
      </section>
    </>
  );
}
