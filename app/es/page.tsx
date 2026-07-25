import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Star,
  Award,
  ThumbsUp,
  Users,
  Monitor,
  TrendingUp,
  Home,
  Building,
  FileText,
  FileSearch,
  Shield,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abogados de Bienes Raíces de Confianza en Chicago | REAL Law Group",
  description:
    "Asesoría legal personalizada para bienes raíces, inversiones inmobiliarias y planificación patrimonial. Al servicio del área de Chicago desde 2016. Más de 300 reseñas de cinco estrellas. Llame al (630) 299-7600 para una consulta gratuita.",
  alternates: { canonical: "https://reallawgroup.com/es" },
  openGraph: {
    title: "Abogados de Bienes Raíces de Confianza en Chicago | REAL Law Group",
    description:
      "Asesoría legal personalizada para bienes raíces, inversiones inmobiliarias y planificación patrimonial. Al servicio del área de Chicago desde 2016.",
    url: "https://reallawgroup.com/es",
  },
};

const credentials = [
  { name: "Mejor Calificado — Expertise.com 2024" },
  { name: "Super Lawyers" },
  { name: "Illinois State Bar Association" },
  { name: "Chicago Bar Association" },
  { name: "DuPage County Bar Association" },
  { name: "Illinois Real Estate Lawyers Association" },
  { name: "Justinian Society of Lawyers" },
];

const stats = [
  { icon: Star, value: "4.9 Estrellas", label: "Más de 300 reseñas en Google" },
  {
    icon: Award,
    value: "25+",
    label: "Años de experiencia combinada",
  },
  { icon: ThumbsUp, value: "Mejor Calificado", label: "Expertise.com 2024" },
];

const areas = [
  {
    icon: Home,
    title: "Cierres de Bienes Raíces",
    description:
      "Compradores, vendedores, ventas cortas, cesión de contrato, financiamiento del vendedor y transacciones comerciales.",
    href: "/es/practice-areas/real-estate",
  },
  {
    icon: Building,
    title: "Inversionistas de Bienes Raíces",
    description:
      "Adquisiciones, formación de entidades, fideicomisos de tierras, intercambios 1031, asociaciones y cierres ágiles para inversionistas.",
    href: "/es/real-estate-investors",
  },
  {
    icon: FileText,
    title: "Planificación Patrimonial",
    description:
      "Testamentos, fideicomisos, poderes notariales, administración de sucesiones y planes de protección de activos.",
    href: "/es/practice-areas/estate-planning",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Servicio Personalizado",
    description:
      "Priorizamos relaciones sólidas y duraderas con cada cliente. Como orgullosos nativos de Chicago, entendemos las necesidades únicas de los residentes del área.",
  },
  {
    icon: Phone,
    title: "Acceso Directo al Abogado",
    description:
      "Acceso directo al socio director Vincent Incopero y a su dedicado equipo legal. Sin rodeos, sin intermediarios.",
  },
  {
    icon: Monitor,
    title: "Portal en Línea y Firmas Electrónicas",
    description:
      "Siga su cierre en tiempo real con nuestro portal seguro para clientes y firme documentos electrónicamente.",
  },
  {
    icon: TrendingUp,
    title: "Trayectoria Comprobada",
    description:
      "Más de 300 reseñas de cinco estrellas en Google y un historial constante de satisfacción del cliente en miles de transacciones.",
  },
];

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Consulta Gratuita",
    description:
      "Llámenos o complete nuestro formulario de contacto. Escuchamos su situación, respondemos sus preguntas y explicamos cómo podemos ayudar — sin obligación, sin presión.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Estrategia y Revisión",
    description:
      "Analizamos sus contratos, documentos y posición legal. Usted recibe un plan claro con precios transparentes antes de avanzar.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Nos Encargamos de Todo",
    description:
      "Desde la negociación hasta el cierre o la resolución, nuestro equipo maneja cada detalle. Usted se mantiene informado en cada paso con acceso directo al abogado.",
  },
];

const testimonials = [
  {
    text: "Vince y su equipo hicieron que nuestro cierre fuera completamente fluido. Profesionales, receptivos y siempre disponibles cuando teníamos preguntas. ¡Altamente recomendados!",
    author: "M.R.",
    context: "Compradora de vivienda, Elmhurst",
  },
  {
    text: "El mejor abogado de bienes raíces del área de Chicago. Se encargaron de todo, desde el contrato hasta el cierre, y explicaron cada paso con claridad.",
    author: "J.P.",
    context: "Cliente de bienes raíces, Naperville",
  },
  {
    text: "Sarah y el equipo fueron increíbles durante nuestro cierre comercial. La atención al detalle en los documentos del préstamo nos salvó de un error costoso.",
    author: "R.T.",
    context: "Cliente de bienes raíces comerciales",
  },
  {
    text: "Utilizamos a REAL Law Group para nuestra planificación patrimonial. Se tomaron el tiempo para entender la situación de nuestra familia y crearon un plan que nos brindó verdadera tranquilidad.",
    author: "A.M.",
    context: "Cliente de planificación patrimonial, Hinsdale",
  },
];

const highlights = [
  { value: "10+", label: "Años sirviendo al área de Chicago" },
  { value: "50%+", label: "Clientes por referencias" },
  { value: "6", label: "Miembros del equipo" },
];

const serviceAreas = [
  "Chicago",
  "Elmhurst",
  "Naperville",
  "Hinsdale",
  "Oak Brook",
  "Downers Grove",
  "Wheaton",
  "Glen Ellyn",
  "Lombard",
  "Villa Park",
  "Lisle",
  "Woodridge",
  "Berwyn",
  "Oak Park",
  "Skokie",
  "Niles",
  "Schaumburg",
  "Arlington Heights",
  "Park Ridge",
  "DuPage County",
];

export default function HomePageES() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 text-white overflow-hidden">
        <Image
          src="/images/hero-skyline.webp"
          alt="Horizonte de Chicago"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/70 via-[#1B2D4F]/55 to-[#2A5F8F]/35" />
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#C8A96E]/10 blur-[120px] animate-gentle-pulse" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2 mb-8">
              <div
                aria-label="5 de 5 estrellas"
                role="img"
                className="flex gap-0.5"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#C8A96E] text-[#C8A96E]"
                  />
                ))}
              </div>
              <span className="text-white/70 text-xs font-medium">
                4.9 de más de 300 reseñas en Google
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              <span className="block">Abogados de Bienes Raíces</span>
              <span className="block">
                de Confianza en{" "}
                <span className="bg-gradient-to-r from-[#C8A96E] to-[#E8C567] bg-clip-text text-transparent">
                  Chicago
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Asesoría legal personalizada para cierres de bienes raíces,
              inversiones inmobiliarias y planificación patrimonial. Al servicio
              del área de Chicago desde 2016.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/es/contact" className="btn-primary text-center">
                Consulta Gratuita
              </Link>
              <a href={CONTACT.phoneHref} className="btn-outline text-center">
                <Phone className="w-4 h-4 mr-2" />
                Llame al {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-light-gold border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {credentials.map((cred) => (
              <span
                key={cred.name}
                className="text-sm font-semibold text-primary tracking-wide whitespace-nowrap"
              >
                {cred.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-light-gold py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-7 h-7 text-secondary mb-1" />
                <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-text-muted font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Lo Que Hacemos</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nuestras Áreas de Práctica
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <div
                key={i}
                className="card-hover-border bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5">
                  <area.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {area.description}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-muted mb-4">
              ¿No está seguro de qué servicio necesita?
            </p>
            <a
              href="/es/contact"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
            >
              Obtenga una Consulta Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Nuestra Diferencia</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              ¿Por Qué Elegir REAL Law Group?
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group card-hover-border text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Cómo Funciona</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Trabajar Con Nosotros Es Sencillo
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Hacemos que el proceso legal sea claro para que usted pueda
              enfocarse en lo que importa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center px-6 py-8 md:py-0"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border z-0" />
                )}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Testimonios</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="card-hover-border bg-background rounded-xl p-8 border border-border relative h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-label="5 de 5 estrellas"
                  role="img"
                  className="flex gap-1 mb-4"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-primary font-semibold text-sm">
                  &mdash; {t.author}{" "}
                  <span className="font-normal text-text-muted">
                    — {t.context}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-text-muted text-sm font-medium mb-4">
              Más de 300 reseñas de cinco estrellas en Google
            </p>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJSTV-k-pODogRyKP49MSt_a8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold text-sm transition-colors"
            >
              Ver todas las reseñas en Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-light-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-text-muted mb-6">
            Agende hoy su consulta gratuita con un abogado experimentado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/es/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Consulta Gratuita
            </a>
            <a
              href="tel:+16302997600"
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Llame al (630) 299-7600
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-border p-3 sm:p-5 text-center hover:shadow-md transition-shadow"
                    >
                      <span className="block text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary">
                        {h.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-text-muted font-medium mt-1 block">
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
                  <div className="relative">
                    <span className="text-5xl text-secondary/30 font-heading leading-none block mb-2">
                      &ldquo;
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                      Somos los primeros miembros de nuestras familias en
                      asistir a la universidad y los únicos abogados en toda
                      nuestra familia extendida. Recordando nuestros primeros
                      días, cuando no estábamos familiarizados con la ley e
                      incluso nos intimidaba, nos esforzamos por conectarnos con
                      nuestros clientes.
                    </p>
                    <p className="text-secondary text-xs font-semibold tracking-wide uppercase">
                      Vincent Incopero, Socio Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="section-label">Sobre la Firma</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Construida con Principios,{" "}
                <span className="text-secondary">No con Privilegios</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                En 2016, REAL Law Group se fundó sobre el trabajo duro, la
                integridad y la confiabilidad. Nacidos y criados en Chicago y
                sus suburbios, conocemos a las personas y las comunidades a las
                que servimos.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Nos vemos como un socio estratégico en sus proyectos. A través
                de la comunicación, la disponibilidad y una atención personal
                cercana, construimos la confianza que es la piedra angular de
                cualquier relación duradera entre abogado y cliente.
              </p>
              <Link
                href="/es/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                Conozca a Nuestro Equipo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <h2 className="text-2xl font-heading font-bold text-primary">
                Con Orgullo Sirviendo al Área de Chicago
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-xl">
              Desde la ciudad hasta los suburbios, REAL Law Group representa a
              clientes en Cook County, DuPage County y toda el área
              metropolitana de Chicago.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {serviceAreas.map((area) => (
              <span key={area} className="text-sm text-text-muted font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#0F1923] rounded-2xl md:rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-[#2A5F8F]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-[#C8A96E]/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Obtenga apoyo legal confiable y local de un equipo que conoce a
              fondo el mercado de bienes raíces de Chicago.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/es/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_8px_32px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 text-sm tracking-wide uppercase"
              >
                Contáctenos Ahora
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5 hover:border-white/30 text-sm tracking-wide"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6 text-sm text-white/80">
              <span>Gratis y Confidencial</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Sin Obligación</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Respuesta en 24 horas</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
