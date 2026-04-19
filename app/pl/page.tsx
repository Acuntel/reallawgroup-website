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
  title: "Prawnicy Nieruchomości w Chicago | REAL Law Group",
  description:
    "Spersonalizowane doradztwo prawne w zakresie nieruchomości, prawa handlowego i planowania spadkowego. Obsługujemy obszar Chicago od 2016 roku. Ponad 300 pięciogwiazdkowych recenzji. Zadzwoń (630) 299-7600.",
  alternates: { canonical: "https://reallawgroup.com/pl" },
};

const areas = [
  {
    icon: Home,
    title: "Prawo Nieruchomości",
    description:
      "Transakcje mieszkaniowe i komercyjne, zamknięcia, negocjacje umów, krótka sprzedaż i więcej.",
  },
  {
    icon: Building,
    title: "Prawo Handlowe",
    description:
      "Tworzenie spółek, umowy operacyjne, ład korporacyjny, planowanie sukcesji i transakcje biznesowe.",
  },
  {
    icon: FileText,
    title: "Planowanie Spadkowe",
    description:
      "Testamenty, trusty, pełnomocnictwa, administracja spadkowa oraz plany ochrony majątku.",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Indywidualna Obsługa",
    description:
      "Stawiamy na trwałe relacje z każdym klientem. Jako rodowici Chicagowianie rozumiemy unikalne potrzeby mieszkańców regionu.",
  },
  {
    icon: Phone,
    title: "Bezpośredni Kontakt z Prawnikiem",
    description:
      "Bezpośredni dostęp do wspólnika zarządzającego Vincenta Incopero i jego zespołu prawnego. Bez pośredników, bez przeszkód.",
  },
  {
    icon: Monitor,
    title: "Portal Online i Podpisy Elektroniczne",
    description:
      "Śledź swoje zamknięcie w czasie rzeczywistym za pomocą bezpiecznego portalu klienta i podpisuj dokumenty elektronicznie.",
  },
  {
    icon: TrendingUp,
    title: "Udokumentowane Doświadczenie",
    description:
      "Ponad 300 pięciogwiazdkowych recenzji Google i konsekwentne zadowolenie klientów w tysiącach transakcji.",
  },
];

export default function PolishHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 text-white overflow-hidden">
        <Image
          src="/images/hero-skyline.webp"
          alt="Panorama Chicago"
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
                4.9 z ponad 300 recenzji Google
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Zaufani{" "}
              <span className="bg-gradient-to-r from-[#C8A96E] to-[#E8C567] bg-clip-text text-transparent">
                Prawnicy
              </span>{" "}
              Nieruchomości w Chicago
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Spersonalizowane doradztwo prawne w zakresie nieruchomości, prawa
              handlowego i planowania spadkowego. Obsługujemy obszar Chicago od
              2016 roku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pl/kontakt" className="btn-primary text-center">
                Bezpłatna Konsultacja
              </Link>
              <a href={CONTACT.phoneHref} className="btn-outline text-center">
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Czym Się Zajmujemy</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze Obszary Praktyki
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
              Nie jesteś pewien, jakiej usługi potrzebujesz?
            </p>
            <Link
              href="/pl/kontakt"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
            >
              Umów Bezpłatną Konsultację
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Co Nas Wyróżnia</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dlaczego REAL Law Group?
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
            Gotowy, aby Zacząć?
          </h2>
          <p className="text-text-muted mb-6">
            Umów się na bezpłatną konsultację z doświadczonym prawnikiem już
            dziś.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pl/kontakt"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Bezpłatna Konsultacja
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Zadzwoń {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Porozmawiaj z Prawnikiem Nieruchomości Jeszcze Dziś
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            REAL Law Group obsługuje klientów w obszarze Chicago od 2016 roku.
            Zadzwoń lub umów konsultację online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pl/kontakt"
              className="bg-secondary text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Umów Konsultację
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
