import { Building2, Handshake, ShieldCheck, Landmark } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Inwestorzy w nieruchomości — REAL Law Group",
  description:
    "Usługi prawne dla inwestorów w nieruchomości w regionie Chicagoland — zakupy, sprzedaż, zakładanie spółek, trusty gruntowe, wymiany 1031 oraz zamknięcia transakcji. Zadzwoń (630) 299-7600.",
  path: "/pl/real-estate-investors",
});

const services = [
  {
    icon: Building2,
    title: "Zakupy i sprzedaże",
    description:
      "Sporządzanie, przegląd i negocjowanie umów dotyczących wynajmu domów jednorodzinnych, budynków wielorodzinnych, flipów oraz nieruchomości komercyjnych.",
  },
  {
    icon: Landmark,
    title: "Zakładanie spółek i struktura prawna",
    description:
      "Tworzenie spółek LLC, umów operacyjnych i struktur series LLC zaprojektowanych do posiadania nieruchomości inwestycyjnych z właściwym rozdziałem odpowiedzialności.",
  },
  {
    icon: ShieldCheck,
    title: "Trusty gruntowe i ochrona majątku",
    description:
      "Trusty gruntowe Illinois dla prywatności i planowania spadkowego, w połączeniu ze strukturami spółek dla wielowarstwowej ochrony majątku.",
  },
  {
    icon: Handshake,
    title: "Zamknięcia i sprawy tytułowe",
    description:
      "Sprawne zamknięcia z dbałością o przegląd tytułu własności, pomiary i kwestie podatku od przeniesienia — dopasowane do inwestorów, którzy często finalizują transakcje.",
  },
];

export default function RealEstateInvestorsPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Inwestorzy w nieruchomości" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Inwestorzy w nieruchomości
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Wsparcie prawne przy kupnie, utrzymywaniu i sprzedaży nieruchomości
            inwestycyjnych w regionie Chicagoland.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Inwestorzy w nieruchomości" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <p className="section-label">Dla inwestorów</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Praktyczna reprezentacja zbudowana wokół procesu pracy inwestora
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Inwestorzy w nieruchomości finalizują transakcje szybciej i
              częściej niż tradycyjni kupujący i sprzedający. Reprezentujemy
              inwestorów — od pierwszych wynajmujących po operatorów wielu
              nieruchomości — w aglomeracji chicagowskiej. Nasz zespół obsługuje
              wszystko, od przeglądu umowy przy jednej akwizycji po bieżącą
              obsługę portfela.
            </p>
            <p className="text-text-muted leading-relaxed">
              Koncentrujemy się na efektywnym prowadzeniu transakcji, chroniąc
              interesy inwestora na każdym etapie — umowy, tytułu własności,
              struktury spółki, zamknięcia i działań po zamknięciu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <Icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-primary mb-3">
              Regularnie finalizujesz transakcje? Porozmawiajmy o stałej
              współpracy.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Aktywni inwestorzy korzystają ze stałego partnera prawnego, który
              zna ich kryteria inwestycyjne, preferowane struktury spółek i
              tempo zamykania transakcji. Współpracujemy z inwestorami w oparciu
              o ryczałtowe wynagrodzenie za powtarzalne prace transakcyjne.
            </p>
            <a
              href="/pl/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Umów konsultację
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Pracujesz nad kolejną akwizycją?"
        text="REAL Law Group reprezentuje inwestorów w nieruchomości w całym Chicagoland. Zadzwoń (630) 299-7600, aby omówić swoją transakcję lub portfel."
      />
    </>
  );
}
