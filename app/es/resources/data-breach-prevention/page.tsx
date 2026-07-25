import {
  Shield,
  Lock,
  Eye,
  Wifi,
  Users,
  FileWarning,
  AlertCircle,
  Server,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prevención de Filtraciones de Datos",
  description:
    "Estrategias esenciales para proteger sus datos personales y empresariales contra amenazas cibernéticas. Consejos de REAL Law Group. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/resources/data-breach-prevention",
});

const strategies = [
  {
    icon: Lock,
    title: "Use Contraseñas Fuertes y Únicas",
    description:
      "Cree contraseñas complejas que combinen letras mayúsculas y minúsculas, números y caracteres especiales. Utilice una contraseña diferente para cada cuenta y considere usar un administrador de contraseñas confiable para guardar sus credenciales de forma segura.",
  },
  {
    icon: Shield,
    title: "Habilite la Autenticación Multifactor (MFA)",
    description:
      "La autenticación multifactor agrega una capa adicional de seguridad al requerir verificación adicional más allá de una contraseña. Esto podría ser un código de mensaje de texto, una aplicación de autenticación o una verificación biométrica como huella digital o reconocimiento facial.",
  },
  {
    icon: Eye,
    title: "Esté Atento al Phishing",
    description:
      "Los ataques de phishing siguen siendo uno de los métodos más comunes de filtraciones de datos. Tenga precaución con correos electrónicos, mensajes de texto o llamadas telefónicas no solicitadas que pidan información personal. Verifique al remitente antes de hacer clic en cualquier enlace o proporcionar datos confidenciales.",
  },
  {
    icon: Wifi,
    title: "Proteja Su Red",
    description:
      "Asegúrese de que sus redes Wi-Fi domésticas y empresariales estén cifradas con seguridad WPA3. Evite realizar transacciones sensibles en redes Wi-Fi públicas. Considere utilizar una VPN (Red Privada Virtual) al acceder a internet en conexiones públicas.",
  },
  {
    icon: Server,
    title: "Mantenga el Software Actualizado",
    description:
      "Actualice regularmente su sistema operativo, navegadores y aplicaciones. Las actualizaciones de software a menudo incluyen parches de seguridad fundamentales que abordan vulnerabilidades conocidas. Habilite las actualizaciones automáticas siempre que sea posible para garantizar que siempre esté protegido.",
  },
  {
    icon: Users,
    title: "Limite el Acceso a Información Sensible",
    description:
      "Siga el principio del mínimo privilegio — solo otorgue a empleados y familiares acceso a los datos que necesiten. Revise y actualice regularmente los permisos de acceso, y revoque el acceso de inmediato cuando ya no sea necesario.",
  },
  {
    icon: FileWarning,
    title: "Realice Copias de Seguridad Regulares de Sus Datos",
    description:
      "Mantenga copias de seguridad regulares de los datos importantes tanto localmente como en la nube. En el caso de un ataque de ransomware o una filtración de datos, contar con copias de seguridad actualizadas asegura que pueda recuperar su información sin pagar un rescate ni perder datos fundamentales.",
  },
  {
    icon: AlertCircle,
    title: "Cuente con un Plan de Respuesta ante Incidentes",
    description:
      "Tanto las personas como las empresas deben tener un plan sobre qué hacer si ocurre una filtración de datos. Esto incluye saber cómo reportar la filtración, cómo notificar a las partes afectadas y cómo trabajar con asesoría legal para minimizar la responsabilidad y cumplir con las leyes de notificación aplicables.",
  },
];

export default function DataBreachPreventionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prevención de Filtraciones de Datos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Proteja sus datos personales y empresariales contra amenazas
            cibernéticas.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Prevención de Filtraciones de Datos" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-6 text-lg">
            En el panorama digital actual, las filtraciones de datos representan
            un riesgo significativo tanto para individuos como para empresas.
            Los ciberdelincuentes desarrollan constantemente nuevos métodos para
            robar información confidencial, desde datos de identificación
            personal hasta registros financieros e información empresarial
            confidencial.
          </p>
          <p className="text-text-muted leading-relaxed mb-12">
            Ya sea que usted sea un propietario de vivienda que protege sus
            datos personales durante una transacción inmobiliaria o un
            propietario de un negocio que resguarda la información de sus
            clientes, tomar medidas proactivas para prevenir las filtraciones de
            datos es esencial. A continuación se presentan estrategias clave
            para ayudar a proteger sus datos.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            Estrategias Esenciales de Protección de Datos
          </h2>

          <div className="space-y-8">
            {strategies.map((strategy, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-background rounded-xl border border-border"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gold shrink-0">
                  <strategy.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 gold-border-left pl-8 py-4">
            <h3 className="text-xl font-heading font-semibold mb-3">
              Implicaciones Legales de las Filtraciones de Datos en Illinois
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Illinois ha promulgado sólidas leyes de protección de datos,
              incluyendo la Ley de Protección de Información Personal (PIPA) y
              la Ley de Privacidad de la Información Biométrica (BIPA). Estas
              leyes imponen obligaciones específicas a las empresas que
              recopilan datos personales y otorgan a las personas derechos
              importantes cuando sus datos se ven comprometidos.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Si su empresa sufre una filtración de datos, la ley de Illinois
              exige una notificación pronta a las personas afectadas y, en
              algunos casos, a la oficina del Fiscal General. Trabajar con un
              asesor legal experimentado en privacidad de datos puede ayudar a
              garantizar el cumplimiento y minimizar la posible responsabilidad.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Preocupado por la seguridad de sus datos?"
        text="Nuestro equipo puede ayudarle a comprender sus obligaciones legales e implementar medidas de protección."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/es/real-estate-investors"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Inversionistas de Bienes Raíces
          </a>
          <a
            href="/es/resources/prevent-wire-fraud"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Prevenir el Fraude de Transferencias
          </a>
        </div>
      </section>
    </>
  );
}
