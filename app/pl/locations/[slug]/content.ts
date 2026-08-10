export type LocationContentPl = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  badge: string;
  appointmentNotice?: string;
  aboutHeading: string;
  aboutParas: string[];
  servicesHeading: string;
  services: { label: string; href: string }[];
  areasHeading: string;
  areasIntro: string;
  faqs: { question: string; answer: string }[];
};

export const LOCATION_CONTENT_PL: Record<string, LocationContentPl> = {
  elmhurst: {
    metaTitle: "Biuro w Elmhurst: Adwokaci Nieruchomości w Powiecie DuPage",
    metaDescription:
      "Odwiedź główne biuro REAL Law Group: 381 N York St Suite 1, Elmhurst, IL 60126. Zamknięcia transakcji nieruchomości, planowanie spadkowe i obsługa inwestorów w powiecie DuPage i całej aglomeracji Chicago. Zadzwoń: (630) 299-7600.",
    heroTitle: "Biuro Główne w Elmhurst",
    heroSubtitle:
      "Nasze główne biuro przy York Street obsługuje Elmhurst, powiat DuPage i całą aglomerację Chicago w zakresie zamknięć transakcji nieruchomości, planowania spadkowego i obsługi inwestorów.",
    badge: "Biuro Główne",
    aboutHeading: "Nasze Biuro Główne w Elmhurst",
    aboutParas: [
      "REAL Law Group, P.C. ma swoją siedzibę w Elmhurst od założenia kancelarii w 2016 roku. Nasze biuro przy 381 N York St Suite 1 znajduje się przy korytarzu York Street, na północ od centrum Elmhurst, kilka minut od autostrad I-290 i I-294 oraz stacji kolejowej Metra w Elmhurst, dzięki czemu jest łatwo dostępne dla klientów z całego powiatu DuPage i zachodnich przedmieść.",
      "To tutaj na co dzień pracuje cała kancelaria. Zamknięcia transakcji, podpisywanie dokumentów, spotkania dotyczące planowania spadkowego i konsultacje dla inwestorów odbywają się w tym biurze, a cała korespondencja kancelarii jest przyjmowana i obsługiwana pod tym adresem.",
    ],
    servicesHeading: "Czym Zajmujemy Się w Tym Biurze",
    services: [
      {
        label: "Zamknięcia Transakcji Nieruchomości",
        href: "/pl/practice-areas/real-estate",
      },
      { label: "Obsługa Inwestorów", href: "/pl/real-estate-investors" },
      {
        label: "Planowanie Spadkowe",
        href: "/pl/practice-areas/estate-planning",
      },
      { label: "Zamknięcia HUD", href: "/pl/practice-areas/hud-closings" },
      { label: "Trusty Gruntowe", href: "/pl/practice-areas/land-trusts" },
      {
        label: "Wycieki Danych i Prywatność",
        href: "/pl/practice-areas/data-breach",
      },
    ],
    areasHeading: "Miejscowości Obsługiwane z Elmhurst",
    areasIntro:
      "Z naszego głównego biura reprezentujemy kupujących, sprzedających, inwestorów i rodziny w całym powiecie DuPage i na zachodnich przedmieściach, w tym:",
    faqs: [
      {
        question: "Czy potrzebuję umówionej wizyty w biurze w Elmhurst?",
        answer:
          "Zalecamy wcześniejsze umówienie się, aby odpowiedni adwokat był dostępny dla Państwa sprawy. Prosimy zadzwonić pod numer (630) 299-7600 lub skorzystać z formularza kontaktowego, a znajdziemy dogodny termin, również w soboty.",
      },
      {
        question: "Jakie są godziny otwarcia biura?",
        answer:
          "Od poniedziałku do piątku od 8:00 do 19:00 oraz w soboty od 8:00 do 15:00.",
      },
      {
        question: "Czy jest dostępny parking?",
        answer:
          "Tak. Przy budynku dostępny jest bezpłatny parking, a biuro znajduje się w krótkiej odległości pieszo od stacji Metra w Elmhurst dla klientów przyjeżdżających z miasta.",
      },
      {
        question: "Gdzie wysyłać korespondencję lub dokumenty prawne?",
        answer:
          "Wszelką korespondencję do REAL Law Group, P.C. prosimy kierować do tego biura: 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
    ],
  },
  chicago: {
    metaTitle: "Biuro w Chicago (Logan Square): Adwokaci Nieruchomości",
    metaDescription:
      "Spotkaj się z adwokatami REAL Law Group po umówieniu wizyty w naszym biurze satelickim w Logan Square: 3250 W North Ave, Chicago, IL 60647. Zamknięcia transakcji, naruszenia przepisów budowlanych i obsługa inwestorów. Zadzwoń: (630) 299-7600.",
    heroTitle: "Biuro w Chicago (Logan Square)",
    heroSubtitle:
      "Biuro satelickie przy 3250 W North Ave obsługujące Logan Square, Humboldt Park i północno-zachodnie Chicago, dostępne wyłącznie po umówieniu wizyty.",
    badge: "Biuro Satelickie: Tylko po Umówieniu Wizyty",
    appointmentNotice:
      "Ta lokalizacja jest biurem satelickim kancelarii REAL Law Group, P.C., dostępnym wyłącznie po wcześniejszym umówieniu wizyty. Prosimy zadzwonić pod numer (630) 299-7600 przed przyjazdem. Wszelką korespondencję i dokumenty prawne prosimy kierować do naszego biura głównego: 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Spotkaj Się z Nami w Północno-Zachodnim Chicago",
    aboutParas: [
      "Nasze biuro satelickie w Logan Square przy 3250 W North Ave daje klientom z Chicago wygodne miejsce spotkań z adwokatem REAL Law Group bez konieczności dojazdu na przedmieścia. Lokal znajduje się przy North Avenue, w pobliżu granicy Logan Square i Humboldt Park, blisko ścieżki 606 i z dobrym połączeniem autobusowym wzdłuż North Avenue.",
      "Spotkania w tej lokalizacji są umawiane z wyprzedzeniem, dzięki czemu adwokat jest przygotowany i w pełni skupiony na Państwa sprawie. Można tu umówić zamknięcia transakcji, przegląd umów przez adwokata, strategię w sprawach naruszeń przepisów budowlanych oraz konsultacje dla inwestorów.",
    ],
    servicesHeading: "Czym Zajmujemy Się w Tej Lokalizacji",
    services: [
      {
        label: "Zamknięcia Transakcji Nieruchomości",
        href: "/pl/practice-areas/real-estate",
      },
      {
        label: "Naruszenia Przepisów Budowlanych",
        href: "/pl/practice-areas/building-violations",
      },
      { label: "Obsługa Inwestorów", href: "/pl/real-estate-investors" },
      { label: "Trusty Gruntowe", href: "/pl/practice-areas/land-trusts" },
      {
        label: "Wycieki Danych i Prywatność",
        href: "/pl/practice-areas/data-breach",
      },
    ],
    areasHeading: "Dzielnice Chicago, Które Obsługujemy",
    areasIntro:
      "Z tej lokalizacji obsługujemy kupujących, sprzedających, właścicieli i inwestorów w północno-zachodnim Chicago, w tym:",
    faqs: [
      {
        question: "Czy potrzebuję umówionej wizyty w biurze w Chicago?",
        answer:
          "Tak. Jest to biuro satelickie przeznaczone na spotkania, dlatego wszystkie wizyty odbywają się wyłącznie po wcześniejszym umówieniu. Prosimy zadzwonić pod numer (630) 299-7600 lub skorzystać z formularza kontaktowego, a ustalimy dogodny termin.",
      },
      {
        question: "Gdzie wysyłać korespondencję lub dokumenty prawne?",
        answer:
          "Wszelką korespondencję prosimy kierować do naszego biura głównego: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "W jakich sprawach mogę się spotkać w tej lokalizacji?",
        answer:
          "W każdej sprawie prowadzonej przez kancelarię, w tym zamknięcia transakcji nieruchomości, przegląd umów, naruszenia przepisów budowlanych w Chicago, trusty gruntowe, sprawy inwestorów oraz roszczenia związane z wyciekiem danych. Prosimy powiedzieć nam, czego Państwo potrzebują przy umawianiu wizyty, a przygotujemy spotkanie odpowiednio.",
      },
      {
        question: "Czy jest dostępny parking?",
        answer:
          "Parking uliczny jest dostępny przy North Avenue i w okolicy, a lokalizacja znajduje się na trasie autobusu North Avenue. Najdogodniejszy sposób dojazdu potwierdzimy przy umawianiu wizyty.",
      },
    ],
  },
  "park-ridge": {
    metaTitle:
      "Biuro w Park Ridge: Adwokaci Nieruchomości w Północnym Powiecie Cook",
    metaDescription:
      "Spotkaj się z adwokatami REAL Law Group po umówieniu wizyty w naszym biurze satelickim w Park Ridge: 222 S Prospect Ave, Park Ridge, IL 60068. Zamknięcia transakcji, planowanie spadkowe i nieruchomości spadkowe. Zadzwoń: (630) 299-7600.",
    heroTitle: "Biuro w Park Ridge",
    heroSubtitle:
      "Biuro satelickie przy 222 S Prospect Ave obsługujące Park Ridge, Niles, Des Plaines i północne przedmieścia powiatu Cook, dostępne wyłącznie po umówieniu wizyty.",
    badge: "Biuro Satelickie: Tylko po Umówieniu Wizyty",
    appointmentNotice:
      "Ta lokalizacja jest biurem satelickim kancelarii REAL Law Group, P.C., dostępnym wyłącznie po wcześniejszym umówieniu wizyty. Prosimy zadzwonić pod numer (630) 299-7600 przed przyjazdem. Wszelką korespondencję i dokumenty prawne prosimy kierować do naszego biura głównego: 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Spotkaj Się z Nami w Park Ridge",
    aboutParas: [
      "Nasze biuro satelickie w Park Ridge przy 222 S Prospect Ave sprawia, że adwokat REAL Law Group jest w zasięgu krótkiej podróży dla mieszkańców północnych przedmieść powiatu Cook. Biuro znajduje się w rejonie Uptown Park Ridge, w pobliżu stacji Metra w Park Ridge, co ułatwia dojazd klientom z Park Ridge, Niles, Des Plaines oraz północno-zachodnich dzielnic Chicago.",
      "Spotkania w tej lokalizacji są umawiane z wyprzedzeniem, dzięki czemu adwokat jest przygotowany i skupiony na Państwa sprawie. Można tu załatwić zamknięcia transakcji, przegląd umów, rozmowy o planowaniu spadkowym oraz sprawy nieruchomości odziedziczonych.",
    ],
    servicesHeading: "Czym Zajmujemy Się w Tej Lokalizacji",
    services: [
      {
        label: "Zamknięcia Transakcji Nieruchomości",
        href: "/pl/practice-areas/real-estate",
      },
      {
        label: "Planowanie Spadkowe",
        href: "/pl/practice-areas/estate-planning",
      },
      {
        label: "Nieruchomości Odziedziczone i Postępowanie Spadkowe",
        href: "/pl/resources/inherited-property",
      },
      { label: "Obsługa Inwestorów", href: "/pl/real-estate-investors" },
      {
        label: "Wycieki Danych i Prywatność",
        href: "/pl/practice-areas/data-breach",
      },
    ],
    areasHeading: "Północne Przedmieścia Obsługiwane z Park Ridge",
    areasIntro:
      "Z tej lokalizacji obsługujemy właścicieli domów, rodziny i inwestorów w północnej części powiatu Cook, w tym:",
    faqs: [
      {
        question: "Czy potrzebuję umówionej wizyty w biurze w Park Ridge?",
        answer:
          "Tak. Jest to biuro satelickie przeznaczone na spotkania, dlatego wszystkie wizyty odbywają się wyłącznie po wcześniejszym umówieniu. Prosimy zadzwonić pod numer (630) 299-7600 lub skorzystać z formularza kontaktowego, a ustalimy dogodny termin.",
      },
      {
        question: "Gdzie wysyłać korespondencję lub dokumenty prawne?",
        answer:
          "Wszelką korespondencję prosimy kierować do naszego biura głównego: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "W jakich sprawach mogę się spotkać w tej lokalizacji?",
        answer:
          "W każdej sprawie prowadzonej przez kancelarię, w tym zamknięcia transakcji nieruchomości, przegląd umów, planowanie spadkowe, nieruchomości odziedziczone i postępowanie spadkowe oraz roszczenia związane z wyciekiem danych. Prosimy powiedzieć nam, czego Państwo potrzebują przy umawianiu wizyty, a przygotujemy spotkanie odpowiednio.",
      },
      {
        question: "Jak dojechać do biura?",
        answer:
          "Biuro znajduje się przy Prospect Avenue w Uptown Park Ridge, w krótkiej odległości pieszo od stacji Metra w Park Ridge, z parkingiem ulicznym w pobliżu. Szczegóły potwierdzimy przy umawianiu wizyty.",
      },
    ],
  },
};
