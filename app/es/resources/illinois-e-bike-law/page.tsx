import Link from "next/link";
import { AlertTriangle, FileText, Gavel, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  AGE_RULES,
  BEFORE_JANUARY,
  CATEGORIES,
  LAW,
  MOTOR_DRIVEN_DUTIES,
  NOT_IN_THE_LAW,
  WHERE_RULES,
} from "./content";
import { FAQS } from "./faqs";
import {
  ActionList,
  AgeRules,
  CategoryCards,
  DutyList,
  MythList,
  SummaryCard,
  WhereRules,
} from "@/components/ebike/GuideSections";

const TITLE = "Ley de Bicicletas Eléctricas de Illinois 2027: Qué Cambia";
const DESCRIPTION =
  "La nueva ley de bicicletas eléctricas y patinetes de Illinois entra en vigor el 1 de enero de 2027. Edades mínimas de 15 y 16 años, prohibición en aceras, licencia y seguro para máquinas de más de 750 vatios, y ordenanzas locales desplazadas.";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/es/resources/illinois-e-bike-law",
});

export default function LeyBicicletasElectricasIllinoisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: TITLE,
              description: DESCRIPTION,
              path: "/es/resources/illinois-e-bike-law",
              datePublished: "2026-09-09",
              dateModified: "2026-09-09",
              inLanguage: "es-US",
            }),
          ),
        }}
      />
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
              { name: "Recursos", url: "/es/resources" },
              { name: "Ley de Bicicletas Eléctricas de Illinois" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Ley de Bicicletas Eléctricas de Illinois: Qué Cambia el 1 de Enero
            de 2027
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Illinois ya cuenta con un marco estatal para bicicletas eléctricas,
            patinetes y las máquinas más potentes que se venden como e-motos.
            Fija edades mínimas de 15 y 16 años, mantiene todos estos
            dispositivos fuera de las aceras, exige licencia de conducir,
            título, matrícula y seguro para todo lo que tenga un motor de más de
            750 vatios, y deja sin efecto las ordenanzas locales.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Recursos", href: "/es/resources" },
          { label: "Ley de Bicicletas Eléctricas" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SummaryCard heading="En resumen">
            <li>
              La ley es la {LAW.publicAct}, promulgada como {LAW.bill}. El
              Gobernador la aprobó el {LAW.approved} y entra en vigor el{" "}
              <strong className="text-text">{LAW.effective}</strong>.
            </li>
            <li>
              Si su bicicleta tiene pedales y un motor de menos de 750 vatios,
              nada cambia en cuanto a licencias. Sigue sin exigirse licencia,
              placa, matrícula ni seguro.
            </li>
            <li>
              Si tiene un motor de más de 750 vatios, Illinois ahora la trata
              como ciclo impulsado por motor, y eso significa licencia de
              conducir, título, matrícula y seguro.
            </li>
            <li>
              Llegan edades mínimas para las bicicletas eléctricas comunes: 15
              años para Clase 1 y Clase 2, 16 para Clase 3 y 16 para todo
              patinete, patineta y monociclo.
            </li>
          </SummaryCard>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Una aclaración necesaria antes de empezar
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Gran parte de la cobertura que sigue circulando describe un proyecto
            de ley distinto. El SB 3336, impulsado por el Secretario de Estado
            Alexi Giannoulias, pasó el Senado de Illinois 54 a 0 el 15 de abril
            de 2026 y la Cámara 80 a 30 el 27 de mayo con dos enmiendas de sala.
            El Senado tenía entonces que votar para concurrir con esas enmiendas
            y nunca lo hizo. El 2 de julio de 2026 el proyecto fue devuelto a la
            comisión de Asignaciones bajo la Regla 3-9(b) del Senado, que es
            donde los proyectos quedan detenidos. El SB 3336 no es ley.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            Las disposiciones sí se convirtieron en ley, en otro vehículo
            legislativo. La Enmienda 1 de la Cámara las incorporó al SB 3484, un
            proyecto ómnibus del Secretario de Estado. Pasó ambas cámaras el 1
            de junio de 2026, el Gobernador lo firmó el 26 de agosto de 2026 y
            hoy es la {LAW.publicAct}. Todo lo que aparece en esta página
            proviene de ese texto promulgado y no de la cobertura del proyecto
            que quedó detenido.
          </p>
          <div className="flex flex-wrap gap-4 mb-14 text-sm">
            <a
              href={LAW.textUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <FileText className="w-4 h-4" />
              Leer la {LAW.publicAct}
            </a>
            <a
              href={LAW.statusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <Gavel className="w-4 h-4" />
              Historial legislativo del SB 3484
            </a>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Primer paso: determine en qué categoría está su dispositivo
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Todas las reglas de la nueva ley dependen de la categoría, y la
            categoría depende del motor. El dato que más importa es el vataje
            que aparece en la etiqueta del fabricante.
          </p>
          <CategoryCards items={CATEGORIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Edades mínimas para conducir
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Este es el cambio que más notarán las familias. Antes Illinois solo
            fijaba edad mínima para las bicicletas eléctricas Clase 3, así que
            un niño de 12 años en una Clase 2 con acelerador circulaba
            legalmente. Eso termina el {LAW.effective}.
          </p>
          <AgeRules
            items={AGE_RULES}
            headings={{
              device: "Dispositivo",
              age: "Edad mínima",
              change: "Qué es distinto",
            }}
          />

          <div className="border-l-4 border-secondary bg-light-gold p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold mb-2">
                  La regla sobre pasajeros que casi nadie está contando
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Una bicicleta eléctrica, una bicicleta de gasolina o un ciclo
                  impulsado por motor fabricado para llevar pasajero no puede
                  ser conducido por un menor de 18 años que lleve acompañante,
                  salvo que ese acompañante sea hermano, hermanastro, hijo o
                  hijastro de quien conduce. Dos adolescentes compartiendo una
                  bicicleta eléctrica pasa a ser una infracción el{" "}
                  {LAW.effective}. Para los patinetes y dispositivos similares
                  no existe excepción familiar alguna: no se permite pasajero
                  salvo que el dispositivo haya sido diseñado para más de una
                  persona.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Dónde se puede circular con cada dispositivo
          </h2>
          <WhereRules
            items={WHERE_RULES}
            labels={{ allowed: "Permitido.", banned: "No permitido." }}
          />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Si su máquina supera los 750 vatios
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            La reclasificación es el fondo de esta ley. Un motor eléctrico de
            más de 750 y hasta 8,000 vatios convierte la máquina en un ciclo
            impulsado por motor, y con ello llega todo el aparato propio de un
            vehículo de motor. Es la categoría en la que caen la mayoría de las
            máquinas eléctricas tipo motocross, sin importar cómo las haya
            llamado la tienda al venderlas.
          </p>
          <DutyList items={MOTOR_DRIVEN_DUTIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Lo que la ley no hace
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Varias afirmaciones muy repetidas sobre esta ley no están en el
            texto promulgado.
          </p>
          <MythList items={NOT_IN_THE_LAW} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Qué hacer antes del 1 de enero
          </h2>
          <ActionList items={BEFORE_JANUARY} />

          <div className="rounded-xl border border-border bg-background p-6 mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                Si alguien ya resultó lesionado, las preguntas legales son
                distintas de las de cumplimiento que trata esta página. La
                cobertura de seguro para estos dispositivos no sigue las
                categorías del Código de Vehículos, y los plazos para presentar
                una reclamación en Illinois son más cortos de lo que la mayoría
                supone.{" "}
                <Link
                  href="/es/practice-areas/e-bike-accidents"
                  className="text-secondary font-semibold hover:underline"
                >
                  Vea nuestra página sobre reclamaciones por lesiones en
                  bicicleta y patinete eléctrico
                </Link>
                .
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Preguntas Frecuentes
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Aviso legal"
            paragraphs={[
              "Esta página contiene información general sobre la ley de Illinois, vigente al 9 de septiembre de 2026. No es asesoría legal, no sustituye la lectura del estatuto ni la consulta con un abogado sobre su situación particular, y no se crea ninguna relación abogado-cliente por leerla o por comunicarse con nosotros. Los estatutos se reforman y las agencias dictan reglamentos, así que confirme el texto vigente antes de basarse en cualquier resumen.",
            ]}
          />

          <ConsultationCTA
            heading="¿Tiene dudas sobre cómo le afecta esto?"
            body="Ya sea una citación, una máquina incautada, una lesión o una bicicleta que le vendieron como algo que no es, cuéntenos qué pasó y le diremos en qué situación está. Las consultas son gratuitas, en inglés, español o polaco."
            contactHref="/es/contact"
            contactLabel="Contactar al Despacho"
          />
        </div>
      </section>
    </>
  );
}
