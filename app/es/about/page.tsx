import Link from "next/link";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Sobre Nuestros Abogados de Bienes Raíces en Elmhurst",
  description:
    "Conozca a REAL Law Group, P.C. — fundada en 2016 sobre el trabajo duro, la integridad y la confiabilidad. Abogados de bienes raíces con experiencia en Chicago. Llame al (630) 299-7600 para una consulta gratuita.",
  path: "/es/about",
});

export default function AboutPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Sobre Nosotros" },
            ]),
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nuestra Historia
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Fundada en 2016 sobre los principios del trabajo duro, la integridad
            y la confiabilidad.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Inicio", href: "/es" }, { label: "Sobre Nosotros" }]}
      />

      {/* Founding Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            En 2016, REAL Law Group, P.C. se fundó sobre los principios del
            trabajo duro, la integridad y la confiabilidad. Estas cualidades,
            inculcadas en nosotros desde jóvenes, son lo que nos distingue de
            nuestra competencia. Nacidos y criados en Chicago y sus suburbios,
            conocemos a las personas y a las comunidades a las que servimos.
            Nuestra formación universitaria y legal se obtuvo en algunas de las
            mejores instituciones de Illinois. No solo somos los primeros
            miembros de nuestras familias en asistir a la universidad, también
            somos los únicos abogados en toda nuestra familia extendida.
            Recordando nuestros primeros días, cuando no estábamos
            familiarizados con la ley e incluso nos intimidaba, nos esforzamos
            por conectarnos con nuestros clientes y educarlos mientras
            trabajamos estrechamente para atender sus necesidades legales.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Nuestra Filosofía: Trabajo Duro, Integridad, Confiabilidad
            </h3>
            <p className="text-text-muted leading-relaxed">
              Nos comprometemos a brindar servicios legales personalizados de la
              más alta calidad a nuestros clientes. Nos vemos como un socio
              estratégico en sus proyectos, tanto actuales como futuros. A
              través de la comunicación, la disponibilidad y una atención
              personal cercana, construimos confianza. La confianza es la piedra
              angular de toda relación duradera entre abogado y cliente.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/es/our-team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#b8994e] transition-colors"
            >
              Conozca a Nuestro Equipo
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
