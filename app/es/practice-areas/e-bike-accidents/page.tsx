import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Scale,
  ShieldQuestion,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  DEADLINES,
  EVIDENCE,
  FAULT_POINTS,
  HOW_WE_HELP,
  INSURANCE_POINTS,
  SCENARIOS,
} from "./content";
import { FAQS } from "./faqs";

export const metadata = generatePageMetadata({
  title: "Accidentes en Bicicleta y Patinete Eléctrico en Illinois",
  description:
    "¿Lesionado en un accidente de bicicleta eléctrica, patinete o e-moto en Illinois? Quién paga cuando no hay seguro, cómo la ley de enero de 2027 cambia la culpa y el plazo de un año que sorprende a muchos. Consulta gratuita. (630) 299-7600.",
  path: "/es/practice-areas/e-bike-accidents",
});

export default function AccidentesBicicletaElectricaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Áreas de Práctica", url: "/es/practice-areas" },
              { name: "Accidentes en Bicicleta y Patinete Eléctrico" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Accidentes en Bicicleta y Patinete Eléctrico
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Las bicicletas y los patinetes eléctricos meten a las personas en el
            tránsito a velocidad de automóvil sin nada de la protección y, muy a
            menudo, sin nada del seguro. Cuando alguien resulta lesionado, la
            primera pregunta rara vez es quién tuvo la culpa. Es qué póliza va a
            pagar, y esa respuesta es distinta para una bicicleta eléctrica que
            para un automóvil.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Áreas de Práctica", href: "/es/practice-areas" },
          { label: "Accidentes en Bicicleta Eléctrica" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="rounded-xl border border-border bg-light-gold p-6 mb-14">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-semibold text-lg mb-2">
                  Si el accidente acaba de ocurrir, hoy importan tres cosas
                </h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  Busque atención médica y conserve el expediente. Conserve la
                  máquina tal como está, porque el dispositivo y su etiqueta son
                  prueba. No dé una declaración grabada a un ajustador de
                  seguros antes de hablar con un abogado.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Si una ciudad, villa, township o distrito de parques puede ser
                  responsable de la vía o del sendero, el plazo para presentar
                  puede ser de <strong className="text-text">un año</strong>, no
                  de dos.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            La cuestión del seguro, explicada como corresponde
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Aquí se ganan o se pierden la mayoría de los casos de bicicleta
            eléctrica, y es donde la información general que circula en internet
            es menos confiable. Una bicicleta eléctrica no es un automóvil, y la
            cobertura no funciona como la gente supone.
          </p>
          <div className="space-y-4 mb-14">
            {INSURANCE_POINTS.map((p) => (
              <div
                key={p.heading}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-semibold mb-2 flex items-start gap-2">
                  <ShieldQuestion className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  {p.heading}
                </h3>
                <p className="text-text-muted leading-relaxed pl-7">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Situaciones comunes y la trampa de cada una
          </h2>
          <div className="space-y-4 mb-14">
            {SCENARIOS.map((s) => (
              <div
                key={s.scenario}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {s.scenario}
                </h3>
                <dl className="space-y-2 text-sm leading-relaxed">
                  <div>
                    <dt className="inline font-semibold">La reclamación. </dt>
                    <dd className="inline text-text-muted">{s.theory}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">
                      Cobertura probable.{" "}
                    </dt>
                    <dd className="inline text-text-muted">{s.coverage}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-secondary">
                      Ojo con esto.{" "}
                    </dt>
                    <dd className="inline text-text-muted">{s.pitfall}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Cómo cambia la nueva ley la discusión sobre la culpa
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            El nuevo marco de Illinois para bicicletas eléctricas, la Ley
            Pública 104-0854, entra en vigor el 1 de enero de 2027. No crea un
            nuevo tipo de demanda. Crea una lista más larga de reglas que
            cualquiera de las partes puede invocar cuando se discute la culpa.
          </p>
          <ul className="space-y-3 mb-8">
            {FAULT_POINTS.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/es/resources/illinois-e-bike-law"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline mb-14"
          >
            Leer nuestra guía completa de la ley de bicicletas eléctricas de
            Illinois que entra en vigor el 1 de enero de 2027
            <ArrowRight className="w-4 h-4" />
          </Link>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Plazos que deciden casos
          </h2>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-left text-sm border border-border rounded-lg">
              <thead className="bg-light-gold">
                <tr>
                  <th className="p-4 font-heading font-semibold">
                    Reclamación
                  </th>
                  <th className="p-4 font-heading font-semibold">
                    Plazo para presentar
                  </th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map((d) => (
                  <tr key={d.claim} className="border-t border-border">
                    <td className="p-4 align-top font-medium">
                      {d.claim}
                      <span className="block text-xs text-text-muted font-normal mt-1">
                        {d.citation}
                      </span>
                    </td>
                    <td className="p-4 align-top text-text-muted">
                      {d.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-secondary bg-background p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                Estos son plazos generales, y el que aplica a su reclamación
                depende de quién es responsable y de cuándo se descubrió la
                lesión. Las excepciones pueden acortarlos. Trate el plazo más
                corto que pueda aplicar como si fuera el verdadero.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Qué hacer en las primeras 48 horas
          </h2>
          <ul className="space-y-3 mb-14">
            {EVIDENCE.map((e) => (
              <li key={e} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{e}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Cómo ayuda REAL Law Group
          </h2>
          <div className="space-y-4 mb-14">
            {HOW_WE_HELP.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
                <p className="text-text-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Preguntas Frecuentes
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Aviso legal"
            paragraphs={[
              "Esta página contiene información general sobre la ley de Illinois, vigente al 9 de septiembre de 2026. No es asesoría legal, no se crea ninguna relación abogado-cliente por leerla o por comunicarse con el despacho, y cada caso depende de sus propios hechos. Los asuntos de lesiones personales se remiten a abogados de la red con la que trabaja REAL Law Group y son manejados por ellos. Los resultados anteriores no garantizan un resultado similar, y ningún resultado está garantizado.",
            ]}
          />

          <ConsultationCTA
            heading="Cuéntenos qué pasó"
            body="La consulta no cuesta nada y no hay obligación. Traiga el reporte policial si lo tiene, fotografías de la máquina y de su etiqueta, y cualquier carta que haya recibido de una aseguradora."
            contactHref="/es/contact"
            contactLabel="Contactar al Despacho"
          />
        </div>
      </section>

      <CTABanner
        heading="¿Listo para el siguiente paso?"
        text="Reciba orientación legal local y confiable de un equipo que conoce Illinois a fondo."
        buttonText="Contáctenos Ahora"
        buttonHref="/es/contact"
      />
    </>
  );
}
