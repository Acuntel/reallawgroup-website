import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Star,
  Home,
  Building,
  FileText,
  Users,
  Monitor,
  TrendingUp,
  FileSearch,
  Shield,
  ArrowRight,
  ExternalLink,
  Award,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Adwokat ds. nieruchomości Elmhurst i Chicago | REAL Law Group",
  description:
    "Polskojęzyczni adwokaci ds. nieruchomości w Elmhurst i Chicago: zamknięcia, FSBO, HUD, trusty gruntowe, prawo biznesowe i planowanie spadkowe. Ponad 300 pięciogwiazdkowych opinii. Zadzwoń (630) 299-7600.",
  path: "/pl",
});

const credentials = [
  { name: "Najwyżej oceniana — Expertise.com", year: "2024" },
  { name: "Super Lawyers" },
  { name: "Illinois State Bar Association" },
  { name: "Chicago Bar Association" },
  { name: "DuPage County Bar Association" },
  { name: "Illinois Real Estate Lawyers Association" },
  { name: "Justinian Society of Lawyers" },
];

const stats = [
  { icon: Star, textValue: "4,9 gwiazdek", label: "Ponad 300 opinii Google" },
  {
    icon: Award,
    textValue: "25+",
    label: "Lat łącznego doświadczenia",
  },
  {
    icon: ThumbsUp,
    textValue: "Najwyżej oceniana",
    label: "Expertise.com 2024",
  },
];

const areas = [
  {
    icon: Home,
    title: "Prawo nieruchomości",
    description:
      "Transakcje mieszkaniowe i komercyjne, zamknięcia, negocjacje umów, krótka sprzedaż i wiele więcej.",
    href: "/pl/practice-areas/real-estate",
  },
  {
    icon: Building,
    title: "Prawo biznesowe",
    description:
      "Zakładanie spółek, umowy operacyjne, ład korporacyjny, planowanie sukcesji oraz transakcje biznesowe.",
    href: "/pl/practice-areas/business-law",
  },
  {
    icon: FileText,
    title: "Planowanie spadkowe",
    description:
      "Testamenty, trusty, pełnomocnictwa, postępowanie spadkowe oraz plany ochrony majątku.",
    href: "/pl/practice-areas/estate-planning",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Indywidualna obsługa",
    description:
      "Budujemy trwałe, bliskie relacje z każdym klientem. Jako dumni rodowici mieszkańcy Chicago rozumiemy wyjątkowe potrzeby mieszkańców regionu Chicagoland.",
  },
  {
    icon: Phone,
    title: "Bezpośredni kontakt z adwokatem",
    description:
      "Bezpośredni dostęp do wspólnika zarządzającego Vincenta Incopero oraz jego zespołu prawnego. Żadnego odsyłania, żadnych pośredników.",
  },
  {
    icon: Monitor,
    title: "Portal online i podpisy elektroniczne",
    description:
      "Śledź swoje zamknięcie w czasie rzeczywistym dzięki naszemu bezpiecznemu portalowi klienta i podpisuj dokumenty elektronicznie.",
  },
  {
    icon: TrendingUp,
    title: "Udokumentowane sukcesy",
    description:
      "Ponad 300 pięciogwiazdkowych opinii w Google oraz stała historia zadowolenia klientów w tysiącach transakcji.",
  },
];

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Bezpłatna konsultacja",
    description:
      "Zadzwoń do nas lub wypełnij formularz kontaktowy. Wysłuchamy Państwa sytuacji, odpowiemy na pytania i nakreślimy, jak możemy pomóc — bez zobowiązań, bez presji.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Strategia i analiza",
    description:
      "Analizujemy umowy, dokumenty i sytuację prawną. Otrzymają Państwo jasny plan działania wraz z przejrzystymi kosztami, zanim przejdziemy dalej.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Zajmujemy się wszystkim",
    description:
      "Od negocjacji po zamknięcie lub rozwiązanie sprawy, nasz zespół zajmuje się każdym szczegółem. Są Państwo informowani na każdym etapie, z bezpośrednim dostępem do adwokata.",
  },
];

const testimonials = [
  {
    text: "Vince i jego zespół sprawili, że nasze zamknięcie przebiegło zupełnie bezproblemowo. Profesjonalni, responsywni i zawsze dostępni, gdy mieliśmy pytania. Gorąco polecam!",
    author: "M.R.",
    context: "Kupujący dom, Elmhurst",
  },
  {
    text: "Najlepszy adwokat ds. nieruchomości w Chicagoland. Zajęli się wszystkim, od umowy po zamknięcie, i jasno wyjaśnili każdy krok.",
    author: "J.P.",
    context: "Klient ds. nieruchomości, Naperville",
  },
  {
    text: "Sarah i zespół byli niesamowici podczas naszego komercyjnego zamknięcia. Dbałość o szczegóły w dokumentach kredytowych uchroniła nas przed kosztownym błędem.",
    author: "R.T.",
    context: "Klient ds. nieruchomości komercyjnych",
  },
  {
    text: "Skorzystaliśmy z usług REAL Law Group w sprawie planowania spadkowego. Poświęcili czas, aby zrozumieć sytuację naszej rodziny i stworzyli plan, który dał nam prawdziwy spokój ducha.",
    author: "A.M.",
    context: "Klient ds. planowania spadkowego, Hinsdale",
  },
];

const highlights = [
  { value: "10+", label: "Lat obsługi Chicagoland" },
  { value: "50%+", label: "Klientów z polecenia" },
  { value: "6", label: "Członków zespołu" },
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

export default function HomePagePL() {
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
                aria-label="5 z 5 gwiazdek"
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
                4,9 z ponad 300 opinii Google
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              <span className="block">Zaufani adwokaci</span>
              <span className="block">
                ds. nieruchomości{" "}
                <span className="bg-gradient-to-r from-[#C8A96E] to-[#E8C567] bg-clip-text text-transparent">
                  w Chicago
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Indywidualne doradztwo prawne w zakresie nieruchomości, biznesu i
              planowania spadkowego. Obsługujemy region Chicagoland od 2016
              roku.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pl/contact" className="btn-primary text-center">
                Bezpłatna konsultacja
              </Link>
              <a href={CONTACT.phoneHref} className="btn-outline text-center">
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń {CONTACT.phone}
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
                  {stat.textValue}
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
            <p className="section-label">Czym się zajmujemy</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze obszary praktyki
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <Link
                  key={i}
                  href={area.href}
                  className="group block bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                    {area.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-muted mb-4">
              Nie jesteś pewien, jakiej usługi potrzebujesz?
            </p>
            <a
              href="/pl/contact"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
            >
              Zamów bezpłatną konsultację
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Nasza przewaga</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dlaczego warto wybrać REAL Law Group?
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className="group card-hover-border text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Jak to działa</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Współpraca z nami jest prosta
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Upraszczamy proces prawny, abyście Państwo mogli skupić się na
              tym, co najważniejsze.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center px-6 py-8 md:py-0"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border z-0" />
                  )}
                  <div className="relative z-10 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-secondary" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Opinie klientów</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Co mówią nasi klienci
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="card-hover-border bg-background rounded-xl p-8 border border-border relative h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-label="5 z 5 gwiazdek"
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
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-primary font-semibold text-sm">
                  &mdash; {testimonial.author}{" "}
                  {testimonial.context && (
                    <span className="font-normal text-text-muted">
                      — {testimonial.context}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-text-muted text-sm font-medium mb-4">
              Ponad 300 pięciogwiazdkowych opinii w Google
            </p>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJSTV-k-pODogRyKP49MSt_a8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold text-sm transition-colors"
            >
              Zobacz wszystkie opinie w Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-light-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
            Gotowi, aby zacząć?
          </h2>
          <p className="text-text-muted mb-6">
            Umów się jeszcze dziś na bezpłatną konsultację z doświadczonym
            adwokatem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pl/contact"
              className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Bezpłatna konsultacja
            </a>
            <a
              href="tel:+16302997600"
              className="btn-outline px-8 py-3.5 rounded-lg font-semibold text-center"
            >
              Zadzwoń (630) 299-7600
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
                      Jesteśmy pierwszymi członkami naszych rodzin, którzy
                      ukończyli studia, a także jedynymi prawnikami w naszych
                      rozszerzonych rodzinach. Pamiętając o wcześniejszych
                      latach, gdy sami nie znaliśmy się na prawie i czuliśmy się
                      nim onieśmieleni, staramy się nawiązywać autentyczne
                      relacje z naszymi klientami.
                    </p>
                    <p className="text-secondary text-xs font-semibold tracking-wide uppercase">
                      Vincent Incopero, Wspólnik Zarządzający
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="section-label">O kancelarii</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Zbudowani na zasadach,{" "}
                <span className="text-secondary">nie na przywilejach</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                W 2016 roku REAL Law Group powstała w oparciu o ciężką pracę,
                uczciwość i rzetelność. Urodzeni i wychowani w Chicago oraz
                okolicznych przedmieściach, znamy ludzi i społeczności, którym
                służymy.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Postrzegamy siebie jako strategicznego partnera w Państwa
                przedsięwzięciach. Poprzez komunikację, dostępność i bliską,
                osobistą uwagę budujemy zaufanie, które jest fundamentem każdej
                trwałej relacji adwokat–klient.
              </p>
              <Link
                href="/pl/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                Poznaj nasz zespół
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
                Z dumą obsługujemy region Chicagoland
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-xl">
              Od miasta po przedmieścia, REAL Law Group reprezentuje klientów w
              Cook County, DuPage County oraz w szerszym regionie Chicagoland.
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

      {/* Final CTA Banner */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#0F1923] rounded-2xl md:rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-[#2A5F8F]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-[#C8A96E]/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Gotowi na kolejny krok?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Zapewniamy zaufane, lokalne wsparcie prawne od zespołu, który
              doskonale zna rynek nieruchomości i prawo biznesowe w Chicago.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pl/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_8px_32px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 text-sm tracking-wide uppercase"
              >
                Skontaktuj się teraz
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
              <span>Bezpłatnie i poufnie</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Bez zobowiązań</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Odpowiedź w ciągu 24 godzin</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
