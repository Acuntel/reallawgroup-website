import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt — REAL Law Group",
  description:
    "Skontaktuj się z REAL Law Group, aby umówić bezpłatną konsultację. Zadzwoń (630) 299-7600 lub napisz na info@reallawgroup.com.",
  alternates: { canonical: "https://reallawgroup.com/pl/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Umów bezpłatną konsultację z doświadczonym prawnikiem.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gold rounded-xl p-8">
              <Phone className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Zadzwoń
              </h3>
              <a
                href={CONTACT.phoneHref}
                className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
              >
                {CONTACT.phone}
              </a>
              <p className="text-sm text-text-muted mt-2">
                Mówimy po angielsku, polsku i hiszpańsku.
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <Mail className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Napisz E-mail
              </h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-lg font-semibold text-primary hover:text-secondary transition-colors break-all"
              >
                {CONTACT.email}
              </a>
              <p className="text-sm text-text-muted mt-2">
                Odpowiadamy na wszystkie wiadomości w ciągu jednego dnia
                roboczego.
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <MapPin className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Odwiedź Nas
              </h3>
              <p className="text-base text-primary font-semibold">
                {CONTACT.address}
              </p>
            </div>

            <div className="bg-light-gold rounded-xl p-8">
              <Clock className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Godziny Otwarcia
              </h3>
              <p className="text-base text-primary font-semibold mb-1">
                Poniedziałek - Piątek: 8:00 - 19:00
              </p>
              <p className="text-base text-primary font-semibold">
                Sobota: 8:00 - 15:00
              </p>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Gotowy, aby Umówić Konsultację?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Najszybszy sposób na rozpoczęcie to telefon. Członek naszego
              zespołu może umówić bezpłatną konsultację i odpowiedzieć na
              pierwsze pytania.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń {CONTACT.phone}
            </a>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pl"
              className="text-secondary hover:text-primary font-semibold underline"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
