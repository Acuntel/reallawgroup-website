export const caseTypes = [
  "Naruszenia danych w szpitalach, klinikach i systemach opieki zdrowotnej",
  "Naruszenia danych pracodawców i systemów płacowych",
  "Naruszenia danych banków, pożyczkodawców i kont finansowych",
  "Naruszenia danych szkół i uczniów",
  "Naruszenia danych firm ubezpieczeniowych i dostawców świadczeń",
  "Naruszenia danych u zewnętrznych dostawców i w oprogramowaniu",
  "Naruszenia prywatności biometrycznej (odciski palców i skany twarzy)",
  "Naruszenia prywatności danych genetycznych i rodzinnej historii medycznej",
];

export const ilStatutes = [
  {
    name: "Ustawa o Ochronie Danych Osobowych stanu Illinois (PIPA)",
    citation: "815 ILCS 530",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2702&ChapterID=67",
    summary:
      "Ustawa stanu Illinois dotycząca naruszeń danych. Firmy przechowujące Państwa dane osobowe muszą stosować rozsądne środki bezpieczeństwa w celu ich ochrony oraz powiadomić Państwa o naruszeniu w możliwie najszybszym czasie i bez nieuzasadnionej zwłoki. Naruszenia dotyczące ponad 500 mieszkańców Illinois muszą być również zgłaszane Prokuratorowi Generalnemu stanu Illinois.",
  },
  {
    name: "Ustawa o Oszustwach Konsumenckich stanu Illinois (Consumer Fraud and Deceptive Business Practices Act)",
    citation: "815 ILCS 505",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2356&ChapterID=67",
    summary:
      "Naruszenie ustawy PIPA stanowi automatycznie bezprawną praktykę w rozumieniu Ustawy o Oszustwach Konsumenckich (815 ILCS 530/20). Konsumenci z Illinois, którzy ponieśli rzeczywiste straty ekonomiczne w wyniku naruszenia — nieautoryzowane obciążenia, wydatki z własnej kieszeni, pieniądze wydane na własną ochronę — mogą dochodzić roszczeń, a wygrywający powodowie mogą odzyskać honorarium adwokackie.",
  },
  {
    name: "Ustawa o Prywatności Informacji Biometrycznych (BIPA)",
    citation: "740 ILCS 14",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3004&ChapterID=57",
    summary:
      "Najsilniejsza ustawa o prywatności biometrycznej w kraju. Jeśli firma zbierała, przechowywała lub udostępniała Państwa odciski palców, geometrię twarzy lub inne dane biometryczne bez odpowiedniego pisemnego powiadomienia i zgody, mogą Państwo dochodzić wyższej z kwot: rzeczywistych szkód lub $1,000 za każde naruszenie wynikające z niedbalstwa ($5,000 w przypadku naruszenia umyślnego lub lekkomyślnego), plus honorarium adwokackie — bez konieczności udowadniania kradzieży tożsamości. Roszczenia mogą sięgać pięć lat wstecz.",
  },
  {
    name: "Ustawa o Prywatności Informacji Genetycznych (GIPA)",
    citation: "410 ILCS 513",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=1567&ChapterID=35",
    summary:
      "Chroni dane z badań genetycznych i informacje genetyczne — które, jak orzekły sądy, obejmują również rodzinną historię medyczną zbieraną podczas badań lekarskich przed zatrudnieniem. Odszkodowanie ustawowe stanowi wyższa z kwot: rzeczywiste szkody lub $2,500 za każde naruszenie wynikające z niedbalstwa ($15,000 w przypadku naruszenia umyślnego lub lekkomyślnego), plus honorarium adwokackie.",
  },
];

export const evidenceItems = [
  "Sam list powiadamiający — proszę zachować oryginał i kopertę",
  "Nieautoryzowane obciążenia lub wypłaty z jakiegokolwiek konta",
  "Karty kredytowe, pożyczki lub konta otwarte na Państwa nazwisko",
  "Zeznanie podatkowe lub świadczenia rządowe złożone z użyciem Państwa tożsamości",
  "Podejrzane logowania, e-maile o resetowaniu hasła lub zablokowane konta",
  "Rachunki za monitoring kredytowy, zamrożenia kredytu lub inną ochronę, za którą Państwo zapłacili",
  "Rejestr godzin poświęconych na działania związane z naruszeniem danych",
  "Spam, SMS-y phishingowe lub oszukańcze telefony, które zaczęły się po naruszeniu",
];

export const processSteps = [
  {
    step: "1",
    title: "Bezpłatna, poufna ocena sprawy",
    description:
      "Prosimy zadzwonić lub wysłać formularz kontaktowy. Prosimy podać, która firma wysłała list powiadamiający, jakie dane według listu zostały ujawnione oraz czy zauważyli Państwo jakiekolwiek nadużycia. Proszę zachować list — to najważniejszy dokument w Państwa sprawie.",
  },
  {
    step: "2",
    title: "Badamy Państwa roszczenie",
    description:
      "Analizujemy naruszenie, wymogi, jakie prawo stanu Illinois i prawo federalne nakładało na firmę, oraz to, jak ujawnienie danych wpłynęło na Państwa. Tam, gdzie wzmacnia to sprawę, współpracujemy z doświadczonymi ogólnokrajowymi kancelariami procesowymi specjalizującymi się w naruszeniach danych, z którymi wspólnie prowadzimy aktywne sprawy.",
  },
  {
    step: "3",
    title:
      "Bez honorarium adwokackiego, chyba że uzyskają Państwo odszkodowanie",
    description:
      "Sprawy dotyczące naruszeń danych prowadzimy na zasadzie wynagrodzenia warunkowego (contingency fee): nie płacą Państwo honorarium adwokackiego, chyba że dojdzie do uzyskania odszkodowania. Sposób rozliczania kosztów i wydatków sprawy jest jasno wyjaśniony w pisemnej umowie o wynagrodzenie przed rozpoczęciem współpracy.",
  },
];

export const faqs = [
  {
    question: "Czy mogę pozwać za naruszenie danych w Illinois?",
    answer:
      "Być może. Mieszkańcom Illinois mogą przysługiwać roszczenia, gdy firma nie chroni należycie ich danych osobowych lub zwleka z poinformowaniem o naruszeniu. Zgodnie z prawem Illinois naruszenie Ustawy o Ochronie Danych Osobowych stanu Illinois (PIPA, 815 ILCS 530) stanowi bezprawną praktykę w rozumieniu Ustawy o Oszustwach Konsumenckich stanu Illinois (815 ILCS 505), a odrębne ustawy — BIPA dla danych biometrycznych i GIPA dla informacji genetycznych — dają mieszkańcom Illinois jedne z najsilniejszych roszczeń o ochronę prywatności w kraju. To, czy przysługuje Państwu realne roszczenie, zależy od tego, jakie dane zostały ujawnione i jak to na Państwa wpłynęło — i właśnie to badamy podczas bezpłatnej oceny sprawy.",
  },
  {
    question: "Czy muszę udowodnić kradzież tożsamości, aby mieć roszczenie?",
    answer:
      "To zależy od rodzaju roszczenia. W przypadku roszczeń dotyczących danych biometrycznych (BIPA) i informacji genetycznych (GIPA) — nie; sądy Illinois dopuszczają roszczenia ustawowe bez dowodu kradzieży tożsamości czy straty finansowej. W przypadku roszczeń z tytułu naruszenia danych Sąd Najwyższy stanu Illinois orzekł w 2025 roku, że samo zwiększone ryzyko kradzieży tożsamości zasadniczo nie wystarcza, aby pozwać o odszkodowanie w sądzie stanowym Illinois. Dlatego tak ważne jest dokumentowanie rzeczywistych nadużyć — nieautoryzowanych obciążeń, nowych kont, oszustw podatkowych — oraz każdego dolara i każdej godziny poświęconych na reagowanie.",
  },
  {
    question: "Ile kosztuje zatrudnienie prawnika ds. naruszeń danych?",
    answer:
      "Nic z góry. Sprawy dotyczące naruszeń danych i prywatności prowadzimy na zasadzie wynagrodzenia warunkowego (contingency fee): nie płacą Państwo honorarium adwokackiego, chyba że uzyskamy dla Państwa odszkodowanie. To, czy będą Państwo odpowiedzialni za jakiekolwiek koszty lub wydatki sprawy — i jak są one rozliczane — jest jasno wyjaśnione w pisemnej umowie o wynagrodzenie przed rozpoczęciem współpracy. Wstępna ocena sprawy jest bezpłatna i poufna.",
  },
  {
    question: "Czym jest pozew zbiorowy i jaka byłaby moja rola?",
    answer:
      "Większość naruszeń danych dotyka tysiące osób w ten sam sposób, dlatego sądy pozwalają jednej lub kilku poszkodowanym osobom dochodzić roszczeń w imieniu wszystkich — to pozew zbiorowy (class action). Jako członek grupy zasadniczo nie muszą Państwo stawiać się w sądzie ani nic płacić; jeśli sprawa zakończy się ugodą, otrzymują Państwo zawiadomienie i mogą złożyć wniosek o wypłatę. Dla niektórych osób ze znacznymi stratami lub z roszczeniami BIPA czy GIPA korzystniejsze mogą być roszczenia indywidualne — obie ścieżki oceniamy podczas analizy Państwa sprawy.",
  },
  {
    question: "Ile mam czasu na dochodzenie roszczenia?",
    answer:
      "Terminy różnią się w zależności od roszczenia: co do zasady roszczenia BIPA mają pięcioletni termin przedawnienia, roszczenia z Ustawy o Oszustwach Konsumenckich stanu Illinois — trzyletni, a roszczenia z tytułu niedbalstwa — dwuletni; przy czym moment rozpoczęcia biegu terminu może zależeć od tego, kiedy dowiedzieli się Państwo o naruszeniu lub powinni byli się o nim dowiedzieć. Data na liście powiadamiającym ma znaczenie. Ponieważ terminy różnią się w zależności od roszczenia i okoliczności, szybki kontakt z prawnikiem to najbezpieczniejszy sposób ochrony swoich praw.",
  },
  {
    question:
      "Czy przyjęcie darmowego monitoringu kredytowego od firmy oznacza zrzeczenie się prawa do pozwu?",
    answer:
      "Zasadniczo nie. Zapisanie się na bezpłatny monitoring kredytowy oferowany w liście powiadamiającym co do zasady nie pozbawia Państwa możliwości udziału w pozwie lub ugodzie zbiorowej — i warto z niego skorzystać, ponieważ to rozsądny krok ochronny. Jakiekolwiek faktyczne zrzeczenie się roszczeń musiałoby wynikać z podpisanych przez Państwa dokumentów ugodowych, które analizujemy razem z Państwem.",
  },
  {
    question: "Co ofiary naruszeń danych mogą faktycznie odzyskać?",
    answer:
      "To zależy od konkretnej sprawy i żaden prawnik nie może uczciwie obiecać Państwu konkretnej kwoty. W ostatnich ugodach zbiorowych dotyczących naruszeń danych w skali kraju członkowie grup zazwyczaj mogli ubiegać się o zwrot udokumentowanych strat, alternatywną wypłatę gotówkową oraz przedłużony monitoring kredytowy. Ustawy BIPA i GIPA stanu Illinois przewidują określone odszkodowania ustawowe za naruszenia prywatności biometrycznej i genetycznej. Wartość Państwa roszczenia zależy od tego, jakie dane zostały ujawnione i jakie szkody mogą Państwo udokumentować — żaden wynik nigdy nie jest gwarantowany.",
  },
  {
    question:
      "Otrzymałem list, ale nie zauważyłem żadnego oszustwa. Czy mimo to powinienem coś zrobić?",
    answer:
      "Tak. Proszę zachować list, zapisać się na oferowany bezpłatny monitoring kredytowy, rozważyć bezpłatne zamrożenie kredytu we wszystkich trzech biurach kredytowych i zacząć prowadzić prosty rejestr wszystkiego, co podejrzane. Skradzione dane są często sprzedawane lub publikowane wiele miesięcy po naruszeniu, więc problemy mogą pojawić się długo po otrzymaniu listu. Bezpłatna ocena sprawy nic nie kosztuje i pozwala dowiedzieć się, na czym Państwo stoją.",
  },
];
