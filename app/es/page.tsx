import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building,
  FileText,
  Users,
  Phone,
  Monitor,
  TrendingUp,
  Star,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abogados de Bienes Raíces en Chicago | REAL Law Group",
  description:
    "Asesoría legal personalizada para bienes raíces, negocios y planificación patrimonial. Atendiendo al área de Chicago desde 2016. Más de 300 reseñas de 5 estrellas. Llame al (630) 299-7600 para una consulta gratuita.",
  alternates: { canonical: "https://reallawgroup.com/es" },
};

const areas = [
  {
    icon: Home,
    title: "Derecho de Bienes Raíces",
    description:
      "Transacciones residenciales y comerciales, cierres, negociación de contratos, ventas cortas y más.",
  },
  {
    icon: Building,
    title: "Derecho Empresarial",
    description:
      "Formación de entidades, acuerdos operativos, gobierno corporativo, planificación de sucesión y transacciones comerciales.",
  },
  {
    icon: FileText,
    title: "Planificación Patrimonial",
    description:
      "Testamentos, fideicomisos, poderes notariales, administración de sucesiones y planes de protección de activos.",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Servicio Personalizado",
    description:
      "Priorizamos relaciones sólidas y duraderas con cada cliente. Como orgullosos oriundos de Chicago, entendemos las necesidades únicas de los residentes del área.",
  },
  {
    icon: Phone,
    title: "Acceso Directo al Abogado",
    description:
      "Acceso directo al socio director Vincent Incopero y su equipo legal. Sin intermediarios, sin burocracia.",
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
      "Más de 300 reseñas de 5 estrellas en Google y un historial constante de satisfacción del cliente en miles de transacciones.",
  },
];

export default function SpanishHomePage() {
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
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#C8A96E] text-[#C8A96E]"
                  />
                ))}
              </div>
              <span className="text-white/70 text-xs font-medium">
                4.9 de más de 300 reseñas de Google
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Los Abogados de Bienes Raíces de{" "}
              <span className="bg-gradient-to-r from-[#C8A96E] to-[#E8C567] bg-clip-text text-transparent">
                Confianza
              </span>{" "}
              en Chicago
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Asesoría legal personalizada para bienes raíces, negocios y
              planificación patrimonial. Atendiendo al área de Chicago desde
              2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/es/contacto" className="btn-primary text-center">
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
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-text-muted mb-4">
              ¿No está seguro cuál servicio necesita?
            </p>
            <Link
              href="/es/contacto"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
            >
              Obtenga una Consulta Gratuita
            </Link>
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
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-light-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
            ¿Listo para Empezar?
          </h2>
          <p className="text-text-muted mb-6">
            Programe su consulta gratuita con un abogado con experiencia hoy
            mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/es/contacto"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Consulta Gratuita
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Llame al {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Hable con un Abogado de Bienes Raíces Hoy
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            REAL Law Group ha atendido a clientes en el área de Chicago desde
            2016. Llámenos o programe una consulta en línea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/es/contacto"
              className="bg-secondary text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Programar Consulta
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
