/**
 * Polska wersja przewodnika po nowym prawie Illinois dotyczącym rowerów
 * elektrycznych: Ustawa Publiczna 104-0854 (SB 3484), zatwierdzona 26 sierpnia
 * 2026 r., wchodzi w życie 1 stycznia 2027 r.
 *
 * Ważna uwaga dla osób edytujących ten plik: projekt ustawy, o którym pisała
 * cała prasa w kwietniu 2026 r., to SB 3336, i ten projekt nigdy nie stał się
 * prawem. Przepisy trafiły do SB 3484 poprzez Poprawkę nr 1 Izby
 * Reprezentantów. Terminy prawne w języku angielskim pozostają w nawiasach,
 * ponieważ ustawa jest napisana po angielsku.
 */

export const LAW = {
  publicAct: "Ustawa Publiczna 104-0854",
  bill: "SB 3484",
  approved: "26 sierpnia 2026 r.",
  effective: "1 stycznia 2027 r.",
  statusUrl:
    "https://www.ilga.gov/Legislation/BillStatus?DocNum=3484&GAID=18&DocTypeID=SB&SessionID=114&GA=104",
  textUrl:
    "https://www.ilga.gov/documents/legislation/publicacts/104/PDF/104-0854.pdf",
};

export const CATEGORIES = [
  {
    name: "Rower elektryczny o niskiej prędkości",
    citation: "625 ILCS 5/1-140.10",
    test: "Sprawne pedały i silnik elektryczny o mocy poniżej 750 watów.",
    detail:
      "To właśnie ma na myśli większość ludzi, mówiąc o rowerze elektrycznym. Klasa 1 wspomaga tylko podczas pedałowania i przestaje wspomagać przy 20 milach na godzinę. Klasa 2 ma manetkę i również kończy wspomaganie przy 20 milach. Klasa 3 wspomaga tylko podczas pedałowania i kończy przy 28 milach. W Illinois rower elektryczny o niskiej prędkości nie jest pojazdem silnikowym, więc nie wymaga tytułu własności, tablicy, rejestracji, prawa jazdy ani ubezpieczenia.",
    verdict: "Bez prawa jazdy, bez tablicy, bez ubezpieczenia.",
  },
  {
    name: "Elektryczne urządzenie mikromobilności",
    citation: "625 ILCS 5/1-117.6",
    test: "Lekkie elektryczne urządzenie do transportu osobistego poruszające się z prędkością do 28 mil na godzinę, w tym skutery elektryczne, deskorolki elektryczne i monocykle elektryczne.",
    detail:
      "Ta kategoria jest nowa od 1 stycznia 2027 r. i zastępuje uchylony przepis o skuterach elektrycznych. Ustawa uznaje te urządzenia za pojazdy silnikowe na potrzeby Kodeksu Drogowego, i właśnie w ten sposób obowiązują je przepisy ruchu drogowego, a następnie zwalnia je z tytułu własności, rejestracji, prawa jazdy i obowiązkowego ubezpieczenia. W praktyce mamy urządzenie traktowane na ulicy jak pojazd, którego nie da się zarejestrować ani ubezpieczyć jak pojazdu.",
    verdict: "Bez prawa jazdy i ubezpieczenia, ale minimalny wiek 16 lat.",
  },
  {
    name: "Pojazd napędzany silnikiem (motor driven cycle)",
    citation: "625 ILCS 5/1-145.001",
    test: "Silnik elektryczny o mocy powyżej 750 watów i do 8 000 watów, albo rower spalinowy zdolny przekroczyć 28 mil na godzinę, albo każdy rower elektryczny, który nie mieści się w jednej z trzech klas niskiej prędkości.",
    detail:
      "To kategoria obejmująca maszyny sprzedawane jako e-moto lub rowery elektryczne w stylu motocrossowym. Przeklasyfikowanie jest sercem nowego prawa. Pojazd napędzany silnikiem wymaga certyfikatu tytułu własności, rejestracji, numeru identyfikacyjnego pojazdu, prędkościomierza, prawa jazdy i ubezpieczenia odpowiedzialności cywilnej, a także jest zakazany na każdym chodniku, pasie dla rowerów, drodze dla rowerów, drodze współdzielonej i szlaku przeznaczonym dla rowerów.",
    verdict: "Pełne prawo jazdy, tytuł własności, rejestracja i ubezpieczenie.",
  },
  {
    name: "Pojazd zabawkowy (toy vehicle)",
    citation: "625 ILCS 5/1-205.5",
    test: "Zabawka akumulatorowa do jazdy zaprojektowana tak, aby nie przekraczać 10 mil na godzinę, przeznaczona dla dzieci poniżej 8 lat.",
    detail:
      "Ustawa wskazuje jako przykłady produkty typu Razor i Power Wheels. Takie pojazdy mogą być używane wyłącznie na chodnikach i drogach dla rowerów, a dziecko nimi kierujące ma prawa i obowiązki pieszego, co oznacza, że kierowcy muszą mu ustąpić pierwszeństwa. Gminy i okręgi parkowe mogą zakazać ich na własnym terenie uchwałą.",
    verdict: "Tylko chodniki i drogi dla rowerów.",
  },
];

export const AGE_RULES = [
  {
    device: "Rower elektryczny niskiej prędkości, Klasa 1",
    age: "od 15 lat",
    change:
      "Nowość. Przed tą ustawą Illinois nie miało minimalnego wieku dla Klasy 1.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Rower elektryczny niskiej prędkości, Klasa 2",
    age: "od 15 lat",
    change:
      "Nowość. Przed tą ustawą Illinois nie miało minimalnego wieku dla Klasy 2.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Rower elektryczny niskiej prędkości, Klasa 3",
    age: "od 16 lat",
    change:
      "Bez zmian. Osoba poniżej 16 lat nadal może jechać jako pasażer na rowerze Klasy 3 zbudowanym do przewozu pasażera.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Skuter, deskorolka lub monocykl elektryczny",
    age: "od 16 lat",
    change: "Nowość dla całej kategorii mikromobilności.",
    citation: "625 ILCS 5/11-1435(d)",
  },
  {
    device: "Rower spalinowy niskiej prędkości",
    age: "od 16 lat",
    change:
      "Bez zmian, ale limit prędkości dla nich rośnie z 20 do 28 mil na godzinę.",
    citation: "625 ILCS 5/11-1516(a), (b)",
  },
  {
    device: "Pojazd napędzany silnikiem, w tym każde e-moto powyżej 750 watów",
    age: "Wymagane ważne prawo jazdy",
    change:
      "Osoba w wieku 16 lub 17 lat może posiadać pozwolenie na naukę jazdy i jeździć w ciągu dnia pod bezpośrednim nadzorem kierowcy z prawem jazdy, mającego co najmniej 21 lat i rok doświadczenia.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
];

export const WHERE_RULES = [
  {
    device: "Rower elektryczny niskiej prędkości",
    allowed:
      "Każda droga, ulica lub jezdnia dostępna dla rowerów, w tym pasy dla rowerów. Drogi dla rowerów są dostępne, chyba że agencja stanowa sprawująca jurysdykcję zakaże danej klasy.",
    banned:
      "Chodniki. Okręgi parkowe, okręgi rezerwatów leśnych, okręgi ochrony przyrody i okręgi transportowe mogą nadal ograniczać ruch na kontrolowanych przez siebie drogach, a Departament Zasobów Naturalnych może wydawać przepisy dla własnych terenów.",
    citation: "625 ILCS 5/11-1517(e), (f), (g)",
  },
  {
    device: "Elektryczne urządzenie mikromobilności",
    allowed:
      "Drogi, ulice, jezdnie, pasy dla rowerów i drogi dla rowerów, bez tamowania ruchu.",
    banned:
      "Chodniki, autostrady międzystanowe oraz każda droga z limitem powyżej 35 mil na godzinę, o ile nie ma wyznaczonego pasa dla rowerów. Urządzenie zdolne jechać i jadące szybciej niż 28 mil na godzinę jest zakazane na każdej drodze publicznej bez względu na limit prędkości, a także na pasach i drogach dla rowerów.",
    citation: "625 ILCS 5/11-1435(a), (b)",
  },
  {
    device: "Pojazd napędzany silnikiem",
    allowed: "Drogi, ulice i jezdnie publiczne.",
    banned:
      "Chodniki, pasy dla rowerów, drogi dla rowerów, drogi współdzielone, szlaki rowerowe poza drogami, szlaki o naturalnej nawierzchni przeznaczone dla rowerów, wszelkie inne obiekty przeznaczone wyłącznie dla rowerów, autostrady międzystanowe oraz tereny publiczne, gdzie zakazuje tego zarządzająca agencja.",
    citation: "625 ILCS 5/11-1403.4(b), (c)",
  },
  {
    device: "Pojazd zabawkowy",
    allowed: "Wyłącznie chodniki i drogi dla rowerów.",
    banned:
      "Wszędzie indziej, a także na terenie gminy lub okręgu, który zakazuje ich uchwałą.",
    citation: "625 ILCS 5/11-1008.5(a), (b)",
  },
];

export const MOTOR_DRIVEN_DUTIES = [
  {
    duty: "Certyfikat tytułu własności",
    detail:
      "Wymagany dla elektrycznego pojazdu napędzanego silnikiem o mocy powyżej 750 i do 8 000 watów albo roweru spalinowego zdolnego przekroczyć 28 mil na godzinę, kupionego jako nowy od 1 stycznia 2027 r., o ile maszyna posiada numer identyfikacyjny pojazdu. Maszyna kupiona przed tą datą nie musi mieć tytułu własności, ale musi go uzyskać wraz z rejestracją, zanim będzie mogła jeździć po drodze publicznej.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Rejestracja i tablice",
    detail:
      "Maszyna, która nie została wyprodukowana ani wyposażona do ogólnego użytku drogowego, nie może być zarejestrowana. Otrzymuje wyróżniający tytuł własności i nie może legalnie jeździć po drodze.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Prawo jazdy",
    detail:
      "Nikt nie może kierować pojazdem napędzanym silnikiem bez ważnego prawa jazdy.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
  {
    duty: "Ubezpieczenie odpowiedzialności cywilnej",
    detail:
      "Każdy właściciel pojazdu napędzanego silnikiem podlega obowiązkowi ubezpieczenia przewidzianemu w Kodeksie Drogowym.",
    citation: "625 ILCS 5/11-1403.4(l)",
  },
  {
    duty: "Wyposażenie",
    detail:
      "Prędkościomierz wskazujący mile na godzinę, numer identyfikacyjny pojazdu, zgodność z federalnymi normami bezpieczeństwa oraz zakaz ingerencji w możliwości prędkościowe.",
    citation: "625 ILCS 5/11-1403.4(g)",
  },
  {
    duty: "Konfiskata i odholowanie",
    detail:
      "Maszyna naruszająca przepisy może zostać skonfiskowana i odholowana według uznania organu policji, który może pobrać rozsądną opłatę administracyjną za jej wydanie. Opłata jest umarzana po przedstawieniu wiarygodnego dowodu, że pojazd był w tym czasie ukradziony.",
    citation: "625 ILCS 5/11-1403.4(j)",
  },
];

export const NOT_IN_THE_LAW = [
  {
    myth: "Rowerzyści elektryczni będą potrzebować prawa jazdy i ubezpieczenia.",
    reality:
      "Nie dotyczy to prawdziwego roweru elektrycznego. Rower elektryczny niskiej prędkości nie jest w Illinois pojazdem silnikowym, a ustawa wyraźnie zwalnia urządzenia mikromobilności z tytułu własności, rejestracji, prawa jazdy i obowiązkowego ubezpieczenia. Te wymogi pojawiają się dopiero, gdy maszyna jest na tyle mocna, że staje się pojazdem napędzanym silnikiem, co zwykle oznacza silnik powyżej 750 watów.",
  },
  {
    myth: "Illinois wprowadza obowiązek jazdy w kasku.",
    reality:
      "Słowo kask nie pojawia się nigdzie w Ustawie Publicznej 104-0854. Ustawa nie nakłada obowiązku noszenia kasku na żadną kategorię urządzeń.",
  },
  {
    myth: "Wszyscy muszą mieć 16 lat.",
    reality:
      "Granice wieku różnią się w zależności od urządzenia. Rowery elektryczne Klasy 1 i 2 od 15 lat. Klasa 3, rowery spalinowe i wszystkie urządzenia mikromobilności od 16 lat. Pojazdy napędzane silnikiem wymagają prawa jazdy, a nie określonego wieku.",
  },
  {
    myth: "To ustawa Giannouliasa, którą Senat przyjął jednogłośnie.",
    reality:
      "Tym projektem był SB 3336 i nie jest on prawem. Przeszedł Senat 54 do 0 w kwietniu 2026 r. i Izbę 80 do 30 w maju, po czym Senat nigdy nie zagłosował nad przyjęciem poprawek Izby, a projekt został odłożony w lipcu. Przepisy, które faktycznie stały się prawem, trafiły do SB 3484, podpisanego przez Gubernatora 26 sierpnia 2026 r. jako Ustawa Publiczna 104-0854.",
  },
];

export const BEFORE_JANUARY = [
  {
    who: "Rodzice",
    action:
      "Proszę znaleźć etykietę na rowerze i sprawdzić moc w watach. Poniżej 750 watów z numerem klasy oznacza rower elektryczny, a dziecko musi mieć 15 lat dla Klasy 1 lub 2 i 16 lat dla Klasy 3. Powyżej 750 watów to pojazd napędzany silnikiem, co oznacza, że dziecko nie może nim legalnie jeździć bez prawa jazdy, tytułu własności, tablic i ubezpieczenia.",
  },
  {
    who: "Osoby jeżdżące",
    action:
      "Proszę sprawdzić, czy maszyna jest zdolna przekroczyć 28 mil na godzinę. Jeśli tak i jest to urządzenie mikromobilności, po wejściu ustawy w życie będzie całkowicie zakazana na drogach publicznych, pasach i drogach dla rowerów, co pozostawia jedynie teren prywatny za zgodą właściciela.",
  },
  {
    who: "Osoby, które kupiły przed 1 stycznia 2027 r.",
    action:
      "Nie ma obowiązku uzyskania tytułu własności dla posiadanej już maszyny, ale nie można nią jeździć po drodze publicznej, dopóki nie zostanie objęta tytułem i rejestracją. Proszę zachować dowód z datą zakupu.",
  },
  {
    who: "Sklepy i dystrybutorzy",
    action:
      "Proszę sprawdzić, jak oznaczona i reklamowana jest każda maszyna w sprzedaży. Reklamowanie pojazdu napędzanego silnikiem tak, jakby był zwolniony z tych wymogów, stanowi niedozwoloną praktykę w rozumieniu ustawy o ochronie konsumentów i nieuczciwych praktykach handlowych, z karą cywilną do 10 000 dolarów za każdą sztukę.",
  },
  {
    who: "Gminy",
    action:
      "Lokalne uchwały dotyczące rowerów elektrycznych tracą moc. Ustawa odbiera samorządom prawo do rejestrowania i licencjonowania rowerów elektrycznych i spalinowych niskiej prędkości oraz zakazuje jednostkom z autonomią lokalną regulowania tych urządzeń poza przypadkami, na które sama ustawa zezwala.",
  },
];
