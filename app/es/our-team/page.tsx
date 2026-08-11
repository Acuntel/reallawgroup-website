import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Nuestros Abogados y Personal",
  description:
    "Conozca al equipo de REAL Law Group: abogados, asistentes legales y personal con experiencia al servicio de clientes de cierres de bienes raíces, inversionistas inmobiliarios y planificación patrimonial en el área de Chicago. Llame al (630) 299-7600.",
  path: "/es/our-team",
});

const teamMembers = [
  {
    name: "Vincent Anthony Incopero",
    title: "Socio Director",
    initials: "VI",
    bio: "Vincent Anthony Incopero concentra su práctica en tres áreas complementarias del derecho: compraventa de bienes raíces, organizaciones empresariales y planificación patrimonial. La formación de Vincent en finanzas y economía, junto con su capacitación y experiencia legal, le ha proporcionado las habilidades analíticas necesarias para ofrecer soluciones prácticas y rentables. Antes de fundar REAL Law Group, P.C., Vincent trabajó en la compañía de títulos más reconocida de Chicago y ejerció la abogacía en la firma de lesiones personales del demandante más grande de Chicago.",
    education:
      "The John Marshall Law School, J.D. (2014) | Elmhurst College, B.S., Doble Titulación en Finanzas y Economía (2010)",
    barAdmissions: "Illinois | Corte Federal del Distrito Norte de Illinois",
    affiliations:
      "Chicago Bar Association, DuPage County Bar Association, Illinois State Bar Association, Illinois Real Estate Lawyers Association, Justinian Society of Lawyers",
  },
  {
    name: "Sarah Marie Roth",
    title: "Directora de Operaciones",
    initials: "SR",
    bio: "Sarah Marie Roth es la Directora de Operaciones de REAL Law Group, P.C., donde se concentra en transacciones de bienes raíces residenciales y comerciales, así como en el manejo de bienes raíces agrícolas y planificación patrimonial. Sarah cuenta con un nivel de experiencia incomparable trabajando en transacciones en dificultades, incluyendo ventas cortas, escrituras en lugar de ejecución y ventas REO (bienes raíces de propiedad bancaria), y trabaja directamente con compradores, vendedores, corredores y prestamistas desde el contrato hasta el cierre.",
  },
  {
    name: "Stephanie Milnamow",
    title: "Asistente Legal Principal",
    initials: "SM",
    bio: "Stephanie Milnamow es asistente legal en REAL Law Group, P.C. y trabaja con contratos de compraventa. Stephanie se graduó de Eastern Illinois University antes de obtener su Certificado de Asistente Legal en 2014. Trabajó como líder de equipo en una gran firma de cobros legales con sede en Chicago antes de unirse a REAL Law Group en 2019.",
  },
  {
    name: "Alyssa Witnik",
    title: "Coordinadora de Compras",
    initials: "AW",
    bio: "Alyssa Witnik maneja las transacciones de compra en REAL Law Group, P.C., guiando a los compradores en cada paso del proceso de cierre. Desde el contrato hasta la entrega de las llaves, Alyssa coordina con prestamistas, compañías de títulos y agentes para garantizar una experiencia fluida para cada cliente.",
  },
  {
    name: "Eva Boozer",
    title: "Asistente Legal",
    initials: "EB",
    bio: "Eva se desempeña como Asistente Legal en REAL Law Group, P.C., brindando apoyo administrativo y organizativo esencial a los abogados y ayudando a garantizar el funcionamiento eficiente de una oficina legal. Esta función incluye preparar y revisar documentos legales, gestionar expedientes, programar citas y fechas judiciales, y mantener registros precisos. Mówię po polsku.",
  },
  {
    name: "Gina Zardetto",
    title: "Asistente Legal",
    initials: "GZ",
    bio: "Gina Zardetto es asistente legal de REAL Law Group, P.C. Asistió a DePaul University y estudió ciencias políticas, medios masivos y marketing. Ayuda con las funciones de asistente legal para las prácticas de bienes raíces y planificación patrimonial de la firma.",
  },
];

export default function OurTeamPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Nuestro Equipo" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Las personas detrás de REAL Law Group — dedicadas a servirle.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Inicio", href: "/es" }, { label: "Nuestro Equipo" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
