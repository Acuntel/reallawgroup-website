/**
 * Polska wersja strony o obrażeniach na rowerze elektrycznym, skuterze
 * elektrycznym i e-moto.
 *
 * Zgodność, nie usuwać: model spraw o obrażenia ciała w REAL Law Group opiera
 * się na POLECANIU. Angielska strona mówi, że kancelaria "connects you with
 * experienced personal injury attorneys" poprzez swoją sieć. Ta wersja musi
 * mówić to samo. Zasady 7.1 i 7.4 Illinois: bez słów "specjalista" i
 * "ekspert", bez superlatywów, bez wcześniejszych wyników, bez kwot i bez
 * przewidywania rozstrzygnięcia.
 */

export const SCENARIOS = [
  {
    scenario: "Samochód skręca w lewo przez pas dla rowerów",
    theory:
      "Zwykłe zaniedbanie kierowcy, przy czym nieustąpienie pierwszeństwa jest dowodem tego zaniedbania.",
    coverage:
      "Ubezpieczenie odpowiedzialności cywilnej kierowcy, a następnie własna ochrona od nieubezpieczonych lub niedostatecznie ubezpieczonych kierowców, jeśli sprawca nie ma polisy albo jest ona zbyt niska.",
    pitfall:
      "Likwidatorzy szkód mocno naciskają na argument, że rowerzysta jechał szybciej niż zwykły rower. Na rowerze Klasy 3 lub na skuterze prędkość zbliżania faktycznie jest większa, więc spór przenosi się na prędkość. Zdjęcia pola widzenia i wskazanie prędkościomierza roweru mają tu większe znaczenie niż w sprawie samochodowej.",
  },
  {
    scenario: "Kierujący e-moto uderza pieszego na chodniku",
    theory:
      "Zaniedbanie kierującego, a gdy jest nieletni, dodatkowe roszczenie oparte na tym, że rodzic zezwolił lub świadomie dopuścił takie zachowanie.",
    coverage:
      "Ubezpieczenie domu lub mieszkania, jeśli polisa nie wyłącza takiej maszyny, a od 1 stycznia 2027 r. obowiązkowe ubezpieczenie, które musi mieć pojazd napędzany silnikiem.",
    pitfall:
      "To właśnie luka w ochronie ubezpieczeniowej. Dziś wiele takich maszyn nie ma ubezpieczenia, a kierujący to nastolatek bez majątku. Najbardziej użytecznym pierwszym krokiem jest ustalenie, jakie polisy istnieją, zanim ktokolwiek złoży oświadczenie.",
  },
  {
    scenario: "Drzwi zaparkowanego samochodu otwierają się przed rowerzystą",
    theory:
      "Zaniedbanie, przy czym obowiązek z Kodeksu Drogowego zakazujący otwierania drzwi w ruch uliczny stanowi dowód tego zaniedbania.",
    coverage: "Polisa odpowiedzialności cywilnej zaparkowanego samochodu.",
    pitfall:
      "Rowerzyści często odjeżdżają bez zgłoszenia policji, bo samochód stał. Bez protokołu i bez danych osoby w samochodzie roszczenie zwykle staje się niemożliwe do udowodnienia.",
  },
  {
    scenario: "Dziura w drodze, wykop lub nieoznakowany plac budowy",
    theory:
      "Roszczenia dotyczące stanu nieruchomości lub drogi wobec podmiotu odpowiedzialnego, którym często jest gmina, township, okręg parkowy albo wykonawca.",
    coverage:
      "Ochrona lub samoubezpieczenie podmiotu publicznego albo polisa ogólnej odpowiedzialności wykonawcy.",
    pitfall:
      "Problemem jest termin. Powództwo cywilne przeciwko lokalnemu podmiotowi publicznemu w Illinois lub jego pracownikom trzeba zwykle wnieść w ciągu roku, a nie dwóch lat. Oparcie się na założeniu dwóch lat może zakończyć sprawę, zanim ktokolwiek zajmie się jej istotą.",
  },
  {
    scenario: "Pożar akumulatora, awaria hamulców lub pęknięcie ramy",
    theory:
      "Odpowiedzialność za produkt wobec producenta, dystrybutora i sprzedawcy, na podstawie wady projektu, wykonania lub braku ostrzeżeń.",
    coverage: "Ochrona produktowa w łańcuchu dystrybucji.",
    pitfall:
      "Nie wolno wyrzucać maszyny ani pozwalać nikomu jej naprawiać. Urządzenie jest dowodem. Illinois przewiduje też maksymalny termin dla roszczeń produktowych, więc starsza maszyna może być przedawniona nawet w ramach terminu na roszczenie o obrażenia.",
  },
  {
    scenario: "Skuter wynajęty lub współdzielony",
    theory:
      "Zaniedbanie operatora, a także roszczenia produktowe wobec producenta.",
    coverage: "Polisa firmy wynajmującej, z zastrzeżeniem jej warunków.",
    pitfall:
      "Regulaminy aplikacji zwykle zawierają zrzeczenie się odpowiedzialności oraz klauzulę arbitrażową z wyłączeniem pozwów grupowych. To, czy takie postanowienia są skuteczne w danych okolicznościach, jest realnym pytaniem i należy je zbadać w pierwszej kolejności, a nie traktować jako powód do rezygnacji.",
  },
  {
    scenario: "Kurier poszkodowany w pracy",
    theory:
      "Odszkodowanie pracownicze, jeżeli kurier jest pracownikiem, a niezależnie od tego roszczenie z tytułu zaniedbania wobec sprawcy zdarzenia.",
    coverage:
      "Ubezpieczenie odszkodowań pracowniczych oraz polisa odpowiedzialności strony winnej.",
    pitfall:
      "Platformy dostawcze klasyfikują kurierów jako niezależnych wykonawców, co jest kwalifikacją sporną, a nie rozstrzygniętą. Oba tory mogą mieć znaczenie, a droga odszkodowań pracowniczych ma własne terminy zgłoszenia i wniesienia sprawy.",
  },
  {
    scenario: "Kierował nieletni, a nowe granice wieku nie były spełnione",
    theory:
      "Roszczenia na rzecz nieletniego i przeciwko niemu, a także przepis Kodeksu Drogowego zakazujący rodzicowi lub opiekunowi zezwalania albo świadomego dopuszczania, by dziecko naruszało Kodeks.",
    coverage:
      "Ochrona odpowiedzialności w ramach polisy domowej, z zastrzeżeniem wyłączeń.",
    pitfall:
      "Po 1 stycznia 2027 r. działa to w obie strony. Naruszenie przez zbyt młodego kierującego staje się argumentem, którym obrona będzie przenosić winę na dziecko, i może obciążyć rodzica po drugiej stronie sprawy.",
  },
];

export const INSURANCE_POINTS = [
  {
    heading: "W Illinois rower elektryczny nie jest pojazdem silnikowym",
    body: "Rower elektryczny niskiej prędkości pozostaje poza definicją pojazdu silnikowego z Kodeksu Drogowego, więc nie ma tablicy, rejestracji ani obowiązkowej polisy z nim związanej. Gdy rowerzysta elektryczny wyrządzi szkodę, często w całej sprawie nie ma żadnej polisy komunikacyjnej.",
  },
  {
    heading:
      "Ubezpieczenie domu lub mieszkania jest zwykłym zabezpieczeniem i ma wyłączenia",
    body: "Polisy odpowiedzialności domowej często obejmują zaniedbanie mieszkańca poza domem, co może objąć kolizję na rowerze elektrycznym. Wiele z tych samych polis wyłącza jednak odpowiedzialność związaną z pojazdami silnikowymi, a sposób, w jaki dany ubezpieczyciel stosuje to wyłączenie do maszyny o mocy 3 000 watów, jest kwestią ochrony zależną od treści polisy, a nie od ustawy.",
  },
  {
    heading:
      "Własna ochrona od nieubezpieczonych kierowców może obejmować takie zdarzenie albo nie",
    body: "Ochrona od nieubezpieczonych i niedostatecznie ubezpieczonych kierowców w polisie komunikacyjnej w Illinois odpowiada za obrażenia wyrządzone przez nieubezpieczony pojazd silnikowy, zgodnie z definicją zawartą w tej polisie. Ustawa Publiczna 104-0854 nazywa elektryczne urządzenie mikromobilności pojazdem silnikowym na potrzeby Kodeksu Drogowego, co nie jest automatycznie tożsame z definicją w umowie ubezpieczenia. Jeżeli ktoś stanowczo twierdzi, że ochrona nie obejmuje zdarzenia, warto najpierw przeczytać rzeczywistą treść polisy.",
  },
  {
    heading: "Nowe prawo poprawia sytuację przy mocniejszych maszynach",
    body: "Od 1 stycznia 2027 r. pojazd napędzany silnikiem, do którego należą teraz maszyny elektryczne powyżej 750 watów, podlega obowiązkowi ubezpieczenia z Kodeksu Drogowego. Maszyna używana legalnie po tej dacie powinna mieć polisę odpowiedzialności cywilnej. Maszyna używana bez niej to problem ubezpieczeniowy dla kierującego i problem z odzyskaniem odszkodowania dla poszkodowanego.",
  },
  {
    heading:
      "Ochrona kosztów leczenia i ubezpieczenie zdrowotne również mają znaczenie",
    body: "Ochrona kosztów leczenia w rodzinnej polisie komunikacyjnej czasem obejmuje członka rodziny poszkodowanego podczas jazdy na rowerze, a ubezpieczenie zdrowotne pokrywa leczenie w tym czasie. Plany zdrowotne zwykle zgłaszają roszczenie o zwrot z uzyskanego odszkodowania, więc trzeba je ustalić na początku, a nie odkrywać na końcu.",
  },
];

export const DEADLINES = [
  {
    claim: "Obrażenia ciała",
    period: "2 lata od dnia powstania obrażeń",
    citation: "735 ILCS 5/13-202",
  },
  {
    claim: "Śmierć wskutek zaniedbania",
    period:
      "2 lata od dnia śmierci, z wąskimi wyjątkami wydłużającymi ten termin",
    citation: "740 ILCS 180/2(d), (e)",
  },
  {
    claim:
      "Przeciwko miastu, gminie, township, okręgowi parkowemu lub innemu lokalnemu podmiotowi publicznemu",
    period: "1 rok od powstania obrażeń albo od chwili powstania roszczenia",
    citation: "745 ILCS 10/8-101(a)",
  },
  {
    claim: "Poszkodowany miał mniej niż 18 lat",
    period:
      "Zasadniczo 2 lata po ukończeniu 18 lat, przy czym roszczenia wobec podmiotów publicznych i roszczenia produktowe mają własne terminy",
    citation: "735 ILCS 5/13-211(a)",
  },
  {
    claim: "Odpowiedzialność za produkt, termin maksymalny",
    period:
      "12 lat od pierwszej sprzedaży przez sprzedawcę albo 10 lat od wydania pierwszemu użytkownikowi, w zależności co upłynie wcześniej",
    citation: "735 ILCS 5/13-213(b)",
  },
];

export const FAULT_POINTS = [
  "Illinois stosuje zmodyfikowaną winę porównawczą. Powód, którego własne przyczynienie przekracza 50% przyczyny sprawczej, nie otrzymuje nic, a przy 50% lub mniej odszkodowanie jest obniżane o ten procent (735 ILCS 5/2-1116).",
  "Sądy Illinois zasadniczo traktują naruszenie przepisu bezpieczeństwa jako dowód zaniedbania, a nie jako automatyczną odpowiedzialność. Oznacza to, że złamana zasada po którejkolwiek stronie jest argumentowana przed ławą przysięgłych, a nie stosowana mechanicznie.",
  "Po 1 stycznia 2027 r. nowe przepisy dają obronie dłuższą listę zarzutów: jazda po chodniku, jazda poniżej nowego minimalnego wieku, wiezienie pasażera, na którego prawo nie zezwala, ingerencja w ogranicznik prędkości albo używanie maszyny wymagającej prawa jazdy i tablicy.",
  "Ta sama lista działa na korzyść poszkodowanego, gdy naruszyła ją druga strona. Kierowca, który zaparkował na pasie dla rowerów, sklep, który sprzedał niemożliwą do zarejestrowania maszynę jako dopuszczoną do ruchu, albo podmiot publiczny, który nie ustawił oznakowania wymaganego teraz przez ustawę, to fakty warte zbadania.",
];

export const HOW_WE_HELP = [
  {
    title: "Roszczenia o obrażenia, poprzez naszą sieć",
    body: "W sprawach o obrażenia łączymy Państwa z doświadczonymi prawnikami zajmującymi się obrażeniami ciała poprzez sieć, z którą współpracuje REAL Law Group, tak samo jak w sprawach kolizji samochodowych i z udziałem samochodów ciężarowych. Takie sprawy prowadzone są w modelu wynagrodzenia od wyniku, co oznacza brak honorarium prawnika bez uzyskania odszkodowania, a sposób rozliczenia kosztów i wydatków sprawy jest określony w pisemnej umowie przed rozpoczęciem pracy.",
  },
  {
    title: "Maszyna sprzedana jako coś, czym nie była",
    body: "Ustawa Publiczna 104-0854 czyni niedozwoloną praktyką, w rozumieniu ustawy o ochronie konsumentów i nieuczciwych praktykach handlowych, sytuację, w której sprzedawca, hurtownik, dystrybutor lub producent reklamuje pojazd napędzany silnikiem tak, aby konsument uwierzył, że jest on zwolniony z wymogów prawa jazdy, tytułu własności, rejestracji i ubezpieczenia. Kancelaria już prowadzi sprawy na podstawie tej ustawy w praktyce dotyczącej prywatności. Prosimy przynieść reklamę, fakturę i etykietę.",
  },
  {
    title: "Mandaty, odholowanie i znaczenie naruszenia",
    body: "Ustawa pozwala policji według własnego uznania konfiskować i odholowywać zarówno urządzenia mikromobilności, jak i pojazdy napędzane silnikiem oraz pobierać opłatę za ich wydanie. Prosimy powiedzieć, co zawiera zawiadomienie i co się stało, a wyjaśnimy Państwa sytuację i wskażemy właściwego prawnika, jeśli sprawa wykracza poza zakres prowadzony przez kancelarię.",
  },
  {
    title: "Bezpłatne konsultacje w trzech językach",
    body: "Konsultacje są bezpłatne i dostępne w języku angielskim, hiszpańskim i polskim. Nic na tej stronie nie stanowi porady prawnej, a sam kontakt z kancelarią nie tworzy relacji prawnik-klient.",
  },
];

export const EVIDENCE = [
  "Prosimy sfotografować miejsce zdarzenia, pojazdy, urządzenie, nawierzchnię drogi i wszystkie widoczne obrażenia, zanim cokolwiek zostanie przestawione lub naprawione.",
  "Prosimy zachować urządzenie w niezmienionym stanie. Nie naprawiać, nie wyrzucać akumulatora i nie oddawać go do serwisu.",
  "Prosimy sfotografować etykietę producenta z klasą, maksymalną prędkością wspomagania i mocą silnika. Ta etykieta decyduje o kategorii prawnej.",
  "Prosimy uzyskać protokół policyjny, także wtedy, gdy drugi pojazd stał albo gdy wydaje się, że nikt nie doznał obrażeń.",
  "Prosimy zebrać nazwiska, numery telefonów i dane ubezpieczenia każdego kierowcy, rowerzysty i świadka.",
  "Prosimy tego samego dnia skorzystać z pomocy medycznej, ponieważ dokumentacja sporządzona blisko zdarzenia jest później trudna do odtworzenia.",
  "Prosimy zachować aplikację, umowę najmu, paragon i dokumenty sprzedaży, jeżeli w zdarzeniu brała udział maszyna wynajęta lub świeżo kupiona.",
  "Prosimy nie składać nagrywanego oświadczenia likwidatorowi szkód przed rozmową z prawnikiem.",
];
