export const steps = [
  {
    step: "1",
    title: "Uważnie przeczytać list — i go zachować",
    description:
      "List informuje dokładnie, jakie dane zostały ujawnione (numer Social Security, informacje medyczne, konta finansowe), kiedy doszło do naruszenia i co firma Państwu oferuje. Proszę zachować list i kopertę — to dowód, może rozpoczynać bieg terminów prawnych, a prawnicy poproszą o niego w pierwszej kolejności. Zdjęcie listu w telefonie to dobra kopia zapasowa.",
  },
  {
    step: "2",
    title: "Upewnić się, że list jest prawdziwy",
    description:
      "Oszuści wysyłają fałszywe listy, telefony i SMS-y „wsparcia po naruszeniu”, podszywając się pod prawdziwe naruszenia. Proszę wyszukać nazwę firmy wraz z frazą „data breach”, aby znaleźć jej oficjalny komunikat, lub wejść bezpośrednio na stronę firmy — nie należy dzwonić pod numery ani klikać w linki, których nie można zweryfikować. Prawdziwe powiadomienie nigdy nie prosi o hasło, pełny numer Social Security ani płatność przez telefon.",
  },
  {
    step: "3",
    title: "Zapisać się na bezpłatny monitoring kredytowy",
    description:
      "Większość listów oferuje 12–24 miesiące bezpłatnego monitoringu kredytowego lub ochrony tożsamości. Warto skorzystać — Federalna Komisja Handlu (FTC) zaleca przyjęcie tej oferty, a zapisanie się co do zasady nie pozbawia prawa do udziału w pozwie lub ugodzie. Trzeba jednak znać ograniczenia: monitoring ostrzega po fakcie; nie zapobiega kradzieży tożsamości.",
  },
  {
    step: "4",
    title: "Zamrozić kredyt we wszystkich trzech biurach",
    description:
      "Zamrożenie kredytu (security freeze) blokuje otwieranie nowych kont kredytowych na Państwa nazwisko i jest bezpłatne na mocy prawa federalnego. Trzeba je założyć osobno w Equifax, Experian i TransUnion; można je tymczasowo zdjąć przy każdym wniosku o kredyt. Jeśli zamrożenie wydaje się zbyt uciążliwe, lżejszą alternatywą jest bezpłatny roczny alert o oszustwie — porównanie poniżej.",
  },
  {
    step: "5",
    title: "Pobrać bezpłatne raporty kredytowe i obserwować konta",
    description:
      "Raporty kredytowe ze wszystkich trzech biur można sprawdzać bezpłatnie, nawet co tydzień, na AnnualCreditReport.com. Proszę szukać kont, których Państwo nie rozpoznają, i zapytań kredytowych, których Państwo nie autoryzowali. Wyciągi bankowe i kartowe warto przeglądać pozycja po pozycji, a jeśli ujawniono informacje medyczne — czytać każde zestawienie świadczeń (EOB) od ubezpieczyciela pod kątem usług, których nigdy nie wykonano.",
  },
  {
    step: "6",
    title: "Zabezpieczyć logowania — i zeznanie podatkowe",
    description:
      "Jeśli ujawniono hasło, należy je zmienić wszędzie tam, gdzie było używane, i włączyć weryfikację dwuetapową. Jeśli ujawniono numer Social Security, warto rozważyć wystąpienie do IRS o Identity Protection PIN, aby nikt nie mógł złożyć zeznania podatkowego na Państwa nazwisko, i złożyć własne zeznanie wcześnie.",
  },
  {
    step: "7",
    title: "Dokumentować wszystko",
    description:
      "Proszę prowadzić prosty rejestr: każde nieautoryzowane obciążenie, każde podejrzane konto, każdy oszukańczy telefon lub SMS phishingowy, każdy dolar wydany na ochronę i każda godzina poświęcona sprawie naruszenia. Zgodnie z prawem Illinois to udokumentowane straty zamieniają list powiadamiający w realne roszczenie prawne. W razie nadużycia proszę zgłosić je na IdentityTheft.gov, aby otrzymać spersonalizowany plan naprawczy.",
  },
];

export const freezeVsAlert = {
  headers: ["", "Zamrożenie kredytu", "Alert o oszustwie"],
  rows: [
    {
      label: "Jak działa",
      freeze:
        "Blokuje pożyczkodawcom dostęp do Państwa pliku kredytowego, więc nowych kont co do zasady nie można otworzyć na Państwa nazwisko",
      alert:
        "Nakazuje firmom podjęcie dodatkowych kroków w celu weryfikacji tożsamości przed udzieleniem kredytu",
    },
    {
      label: "Koszt",
      freeze: "Bezpłatne na mocy prawa federalnego",
      alert: "Bezpłatny",
    },
    {
      label: "Jak długo obowiązuje",
      freeze:
        "Do czasu zdjęcia lub usunięcia — można je tymczasowo zdjąć w dowolnym momencie",
      alert:
        "1 rok, z możliwością odnowienia (7 lat dla potwierdzonych ofiar kradzieży tożsamości)",
    },
    {
      label: "Założenie",
      freeze: "Trzeba założyć osobno w każdym z trzech biur kredytowych",
      alert:
        "Wystarczy zgłosić w jednym biurze, które musi powiadomić pozostałe dwa",
    },
    {
      label: "Najlepszy wybór, gdy",
      freeze:
        "Ujawniono Państwa numer Social Security lub nie planują Państwo wkrótce nowego kredytu",
      alert:
        "Chcą Państwo ochrony, ale spodziewają się wkrótce wniosku o kredyt lub pożyczkę",
    },
  ],
};

export const dataTypeGuides = [
  {
    title: "Numer Social Security",
    advice:
      "Najpoważniejsze ujawnienie — numeru SSN nie da się zmienić jak hasła. Należy zamrozić kredyt we wszystkich trzech biurach, rozważyć Identity Protection PIN z IRS, złożyć zeznanie podatkowe wcześnie i co roku sprawdzać swoje zestawienie Social Security. Skradzione numery SSN bywają wykorzystywane po miesiącach lub latach, więc czujność trzeba zachować także po zakończeniu bezpłatnego monitoringu.",
  },
  {
    title: "Numery kont finansowych lub kart",
    advice:
      "Proszę skontaktować się z bankiem lub wydawcą karty, poprosić o wymianę karty lub nowy numer konta i przeglądać wyciągi pozycja po pozycji. Nieautoryzowane obciążenia należy niezwłocznie reklamować na piśmie i zachować kopie — niezwrócone straty z tytułu oszustwa to dokładnie ten rodzaj udokumentowanej szkody, który wspiera roszczenie prawne.",
  },
  {
    title: "Informacje medyczne lub ubezpieczenia zdrowotnego",
    advice:
      "Kradzież tożsamości medycznej może oznaczać, że ktoś korzysta z opieki lub recept w ramach Państwa ubezpieczenia. Proszę czytać każde zestawienie świadczeń (EOB), prosić świadczeniodawców o kopie dokumentacji, jeśli coś wygląda podejrzanie, i natychmiast zgłaszać błędy ubezpieczycielowi. Naruszenia w służbie zdrowia należą do najczęstszych naruszeń dotykających mieszkańców Illinois.",
  },
  {
    title: "Dane Państwa dziecka",
    advice:
      "Dane dzieci są cenne dla złodziei właśnie dlatego, że nadużycia mogą pozostać niezauważone przez lata. Można poprosić każde biuro kredytowe o sprawdzenie, czy dziecko ma plik kredytowy, i założyć na nim bezpłatne zamrożenie. Naruszenia w szkołach i oprogramowaniu edukacyjnym ujawniły w skali kraju dane milionów uczniów — w tym uczniów z Illinois.",
  },
  {
    title: "Loginy i hasła",
    advice:
      "Ujawnione hasło należy zmienić natychmiast — i wszędzie tam, gdzie było używane ponownie. Weryfikację dwuetapową warto włączyć najpierw dla poczty e-mail i kont finansowych; konto e-mail to klucz do wszystkiego innego. Proszę uważać na ukierunkowany phishing powołujący się na nazwę firmy, w której doszło do naruszenia.",
  },
];

export const recentBreaches = [
  {
    name: "Erie Family Health Centers (rejon Chicago)",
    detail:
      "Sieć przychodni z rejonu Chicago publicznie poinformowała w 2026 r., że włamanie z końca 2025 r. dotknęło około 570 000 pacjentów, a ujawnione dane mogły obejmować numery Social Security, informacje finansowe i dokumentację leczenia.",
  },
  {
    name: "Illinois Department of Human Services",
    detail:
      "Stan publicznie ujawnił, że dane około 705 000 mieszkańców Illinois — w dużej mierze dotyczące Medicaid — były widoczne w internecie z powodu nieprawidłowych ustawień prywatności w latach 2022–2025.",
  },
  {
    name: "Saint Anthony Hospital (Chicago)",
    detail:
      "Szpital z zachodniej części Chicago publicznie poinformował, że przejęte konta e-mail ujawniły dane ponad 146 000 osób; listy powiadamiające wysłano około rok po włamaniu z 2025 r.",
  },
  {
    name: "Chicago Public Schools (naruszenie u dostawcy)",
    detail:
      "CPS publicznie ujawniło w 2025 r., że naruszenie u zewnętrznego dostawcy usług przesyłania plików objęło dane ponad 700 000 obecnych i byłych uczniów.",
  },
  {
    name: "TransUnion (biuro kredytowe z siedzibą w Chicago)",
    detail:
      "TransUnion publicznie ujawniło w 2025 r., że naruszenie związane z aplikacją zewnętrzną objęło dane osobowe ponad 4 milionów konsumentów w USA, w tym imiona i nazwiska, numery Social Security i daty urodzenia.",
  },
];

export const faqs = [
  {
    question:
      "Ile czasu ma firma na powiadomienie mnie o naruszeniu danych w Illinois?",
    answer:
      "Ustawa o Ochronie Danych Osobowych stanu Illinois (PIPA, 815 ILCS 530) wymaga powiadomienia „w możliwie najszybszym czasie i bez nieuzasadnionej zwłoki”, z uwzględnieniem czasu na ustalenie zakresu naruszenia i przywrócenie bezpieczeństwa systemu. Dla firm prywatnych nie ma sztywnej liczby dni — dlatego niektóre listy przychodzą wiele miesięcy po włamaniu. Naruszenia dotyczące ponad 500 mieszkańców Illinois muszą być również zgłoszone Prokuratorowi Generalnemu stanu Illinois nie później niż w dniu powiadomienia konsumentów.",
  },
  {
    question: "Jak rozpoznać, czy list o naruszeniu danych to oszustwo?",
    answer:
      "Należy zweryfikować niezależnie: wyszukać nazwę firmy z frazą „data breach”, aby znaleźć oficjalny komunikat, lub wejść bezpośrednio na stronę firmy zamiast korzystać z linków czy numerów telefonu z listu, któremu Państwo nie ufają. Prawdziwe powiadomienia o naruszeniu nie proszą o hasło, pełny numer Social Security ani żadną płatność. Jeśli osoba dzwoniąca lub pisząca w sprawie „wsparcia po naruszeniu” prosi o dane osobowe, należy się rozłączyć — prawdziwi nadawcy tego nie robią.",
  },
  {
    question: "Co jeśli wyrzuciłem list powiadamiający?",
    answer:
      "Nie przekreśla to roszczenia, ale warto odzyskać informacje. Komunikat o naruszeniu jest zwykle opublikowany na stronie firmy, można poprosić firmę o kolejną kopię, a duże naruszenia w służbie zdrowia figurują na federalnym portalu naruszeń HHS. Jeśli się Państwo z nami skontaktują, zazwyczaj możemy pomóc potwierdzić, czy naruszenie zostało publicznie zgłoszone i czy należą Państwo do grupy poszkodowanych.",
  },
  {
    question:
      "Czy powinienem przyjąć bezpłatny monitoring kredytowy oferowany przez firmę?",
    answer:
      "Tak — FTC zaleca przyjęcie bezpłatnego monitoringu kredytowego po naruszeniu, a zapisanie się co do zasady nie pozbawia prawa do udziału w pozwie lub ugodzie zbiorowej. Trzeba jednak wiedzieć, czego monitoring nie robi: ostrzega o zmianach w raporcie kredytowym po fakcie, ale nie blokuje nowych kont (to robi zamrożenie kredytu) i zwykle nie wykryje nadużycia informacji medycznych ani istniejących kont bankowych.",
  },
  {
    question: "Czy mogę pozwać firmę, która ujawniła moje dane?",
    answer:
      "Być może. Mieszkańcom Illinois mogą przysługiwać roszczenia na podstawie Ustawy o Oszustwach Konsumenckich — naruszenie stanowej ustawy o powiadamianiu o naruszeniach danych stanowi automatycznie bezprawną praktykę w jej rozumieniu — oraz na podstawie prawa precedensowego, zwłaszcza przy udokumentowanych stratach, takich jak nieautoryzowane obciążenia czy wydatki z własnej kieszeni. Ujawnienie danych biometrycznych lub genetycznych może uruchamiać ustawy BIPA i GIPA, które przewidują odszkodowania ustawowe bez dowodu kradzieży tożsamości. Bezpłatna ocena sprawy to najszybszy sposób, aby dowiedzieć się, na czym Państwo stoją.",
  },
];
