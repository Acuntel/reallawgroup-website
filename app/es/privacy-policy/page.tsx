import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Política de Privacidad y Aviso Legal",
  description: "Política de privacidad y aviso legal de REAL Law Group, P.C.",
  path: "/es/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPageES() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Política de Privacidad y Aviso Legal
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Política de Privacidad" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Privacy Policy */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Política de Privacidad
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 text-text-muted text-sm leading-relaxed mb-16">
            <p>
              REAL Law Group, P.C. (&ldquo;nosotros&rdquo;,
              &ldquo;nuestro&rdquo; o &ldquo;nos&rdquo;) se compromete a
              proteger su privacidad. Esta Política de Privacidad explica cómo
              recopilamos, usamos, divulgamos y protegemos su información cuando
              visita nuestro sitio web.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Información Que Recopilamos
            </h3>
            <p>
              Podemos recopilar información personal que usted nos proporcione
              voluntariamente al contactarnos a través de nuestro sitio web,
              incluyendo su nombre, dirección de correo electrónico, número de
              teléfono y cualquier información que incluya en su mensaje.
              También recopilamos automáticamente cierta información cuando
              visita nuestro sitio web, incluyendo su dirección IP, tipo de
              navegador, sistema operativo y comportamiento de navegación.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Cómo Usamos Su Información
            </h3>
            <p>
              Utilizamos la información que recopilamos para responder a sus
              consultas y brindar servicios legales, comunicarnos con usted
              sobre nuestros servicios, mejorar nuestro sitio web y la
              experiencia del usuario, y cumplir con las obligaciones legales.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Divulgación de Información
            </h3>
            <p>
              No vendemos, intercambiamos ni transferimos de otro modo su
              información personal a terceros, salvo lo necesario para brindar
              nuestros servicios legales, cumplir con la ley o proteger nuestros
              derechos. Podemos compartir información con terceros de confianza
              que nos ayudan a operar nuestro sitio web y llevar a cabo nuestro
              negocio, siempre que esas partes acepten mantener la información
              confidencial.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Seguridad de los Datos
            </h3>
            <p>
              Implementamos medidas de seguridad razonables para proteger su
              información personal. Sin embargo, ningún método de transmisión
              por Internet ni de almacenamiento electrónico es 100% seguro, y no
              podemos garantizar una seguridad absoluta.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Cookies
            </h3>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías de
              seguimiento similares para mejorar su experiencia de navegación.
              Puede configurar su navegador para rechazar cookies o para
              alertarle cuando se envíen cookies. Sin embargo, es posible que
              algunas funciones del sitio web no funcionen correctamente sin
              cookies.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Enlaces a Terceros
            </h3>
            <p>
              Nuestro sitio web puede contener enlaces a sitios web de terceros.
              No somos responsables de las prácticas de privacidad ni del
              contenido de estos sitios de terceros. Le recomendamos revisar las
              políticas de privacidad de cualquier sitio web que visite.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Cambios a Esta Política
            </h3>
            <p>
              Podemos actualizar esta Política de Privacidad de vez en cuando.
              Cualquier cambio se publicará en esta página con una fecha de
              vigencia actualizada. Su uso continuo de nuestro sitio web después
              de que se publiquen los cambios constituye su aceptación de la
              política revisada.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Contáctenos
            </h3>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad, por favor
              contáctenos en info@reallawgroup.com o al (630) 299-7600.
            </p>
          </div>

          {/* Disclaimer */}
          <div id="disclaimer">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Aviso Legal
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />

            <div className="space-y-6 text-text-muted text-sm leading-relaxed">
              <p>
                La información en este sitio web es solo para fines informativos
                generales y no constituye asesoría legal. No se establece una
                relación abogado-cliente por el uso de este sitio web ni por
                contactar a REAL Law Group, P.C. a través de este sitio.
              </p>

              <p>
                No debe actuar con base en ninguna información de este sitio web
                sin antes buscar asesoría profesional calificada sobre su asunto
                específico. El resultado de cualquier asunto legal particular
                depende de los hechos específicos y la ley aplicable, y los
                resultados previos no garantizan un resultado similar.
              </p>

              <p>
                REAL Law Group, P.C. no hace declaraciones ni garantías con
                respecto a la exactitud, integridad o actualidad de la
                información en este sitio web. No somos responsables de errores
                u omisiones ni de los resultados obtenidos del uso de esta
                información.
              </p>

              <p>
                Publicidad de abogados. Los materiales de este sitio web pueden
                considerarse publicidad en algunas jurisdicciones. La
                determinación de la necesidad de servicios legales y la elección
                de un abogado son decisiones sumamente importantes y no deben
                basarse únicamente en anuncios o en experiencia autoproclamada.
              </p>

              <p>
                Si necesita asesoría legal, por favor contáctenos directamente
                al (630) 299-7600 o a info@reallawgroup.com para programar una
                consulta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
