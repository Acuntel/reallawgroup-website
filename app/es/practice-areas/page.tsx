import {
  Home,
  Building,
  FileText,
  Landmark,
  AlertTriangle,
  Shield,
  Lock,
  Car,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import PracticeAreaCard from "@/components/cards/PracticeAreaCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Áreas de Práctica",
  description:
    "REAL Law Group ofrece servicios legales expertos en derecho inmobiliario, derecho comercial y planificación patrimonial en todo Chicagoland. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/practice-areas",
});

const areas = [
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description:
      "Atendemos las necesidades inmobiliarias residenciales y comerciales de clientes ubicados en el norte de Illinois. Desde el contrato hasta el cierre, protegemos los intereses de nuestros clientes y les ayudamos a comprender las implicaciones comerciales, fiscales y legales relacionadas con su transacción inmobiliaria.",
    href: "/es/practice-areas/real-estate",
  },
  {
    icon: Building,
    title: "Derecho Comercial",
    description:
      "REAL Law Group asesora a pequeñas y medianas empresas que operan en diversas industrias. Apoyándonos en nuestra experiencia financiera y comercial, ayudamos a nuestros clientes con los desafíos que enfrentan los propietarios de negocios y ofrecemos soluciones proactivas.",
    href: "/es/practice-areas/business-law",
  },
  {
    icon: FileText,
    title: "Planificación Patrimonial",
    description:
      "Más que simplemente estructurar la transferencia de activos, creamos planes patrimoniales y empresariales únicos que preservan los bienes y minimizan los impuestos durante la vida y por muchos años más. Brindamos la asesoría necesaria para orientarlo y planificar por usted y su familia.",
    href: "/es/practice-areas/estate-planning",
  },
  {
    icon: Landmark,
    title: "Cierres HUD",
    description:
      "Actuamos como abogados de cierre HUD, manejando todos los aspectos de las transacciones inmobiliarias relacionadas con HUD. Desde la revisión de declaraciones de liquidación hasta la coordinación con prestamistas y compañías de títulos, garantizamos el pleno cumplimiento de los requisitos federales.",
    href: "/es/practice-areas/hud-closings",
  },
  {
    icon: AlertTriangle,
    title: "Violaciones de Código de Construcción",
    description:
      "¿Enfrenta una violación del código de construcción de Chicago? Representamos a propietarios, arrendadores y desarrolladores en audiencias administrativas y ayudamos a resolver violaciones por trabajos sin permiso, problemas de seguridad e inspecciones reprobadas.",
    href: "/es/practice-areas/building-violations",
  },
  {
    icon: Shield,
    title: "Fideicomisos de Tierras",
    description:
      "Los fideicomisos de tierras de Illinois ofrecen privacidad, protección de activos y una planificación patrimonial simplificada para los propietarios. Ayudamos a nuestros clientes a establecer y administrar fideicomisos de tierras para proteger sus inversiones inmobiliarias.",
    href: "/es/practice-areas/land-trusts",
  },
  {
    icon: Lock,
    title: "Filtraciones de Datos y Privacidad",
    description:
      "¿Su información personal fue expuesta en una filtración de datos? Representamos a residentes de Illinois en reclamos de filtraciones de datos, privacidad biométrica (BIPA) y privacidad del consumidor con honorarios de contingencia — sin honorarios de abogado a menos que usted recupere. Evaluaciones de caso gratuitas y confidenciales.",
    href: "/es/practice-areas/data-breach",
  },
  {
    icon: Car,
    title: "Lesiones Personales",
    description:
      "Si usted o un ser querido ha sufrido una lesión en un accidente automovilístico, lo conectamos con abogados experimentados en lesiones personales a través de nuestra red de confianza. Consultas gratuitas disponibles.",
    href: "/es/practice-areas/personal-injury",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Áreas de Práctica" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Áreas de Práctica
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group, P.C. está comprometida con brindar servicios legales
            de la más alta calidad.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <PracticeAreaCard key={i} {...area} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
