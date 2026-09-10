/**
 * Versión en español de la guía sobre la nueva ley de bicicletas eléctricas
 * de Illinois, Ley Pública 104-0854 (SB 3484), aprobada el 26 de agosto de
 * 2026 y en vigor el 1 de enero de 2027.
 *
 * Nota importante para quien edite este archivo: el proyecto de ley que
 * recibió toda la cobertura de prensa en abril de 2026 fue el SB 3336, y ese
 * proyecto nunca se convirtió en ley. Las disposiciones llegaron al SB 3484
 * mediante la Enmienda 1 de la Cámara. Los términos legales en inglés se
 * conservan entre paréntesis porque el estatuto está redactado en inglés.
 */

export const LAW = {
  publicAct: "Ley Pública 104-0854",
  bill: "SB 3484",
  approved: "26 de agosto de 2026",
  effective: "1 de enero de 2027",
  statusUrl:
    "https://www.ilga.gov/Legislation/BillStatus?DocNum=3484&GAID=18&DocTypeID=SB&SessionID=114&GA=104",
  textUrl:
    "https://www.ilga.gov/documents/legislation/publicacts/104/PDF/104-0854.pdf",
};

export const CATEGORIES = [
  {
    name: "Bicicleta eléctrica de baja velocidad",
    citation: "625 ILCS 5/1-140.10",
    test: "Pedales funcionales y un motor eléctrico de menos de 750 vatios.",
    detail:
      "Es lo que la mayoría de la gente entiende por bicicleta eléctrica. La Clase 1 asiste solo cuando usted pedalea y deja de asistir a las 20 millas por hora. La Clase 2 tiene acelerador y también se corta a las 20. La Clase 3 asiste solo al pedalear y se corta a las 28. En Illinois una bicicleta eléctrica de baja velocidad no es un vehículo de motor, así que no requiere título, placa, matrícula, licencia de conducir ni seguro.",
    verdict: "Sin licencia, sin placa y sin seguro.",
  },
  {
    name: "Dispositivo eléctrico de micromovilidad",
    citation: "625 ILCS 5/1-117.6",
    test: "Un dispositivo eléctrico ligero de transporte personal que opera a velocidades de hasta 28 millas por hora, incluidos patinetes eléctricos, patinetas eléctricas y monociclos eléctricos.",
    detail:
      "Esta categoría es nueva a partir del 1 de enero de 2027 y sustituye la sección sobre patinetes eléctricos que la ley deroga. La ley considera estos dispositivos vehículos de motor para efectos del Código de Vehículos, y así es como se les aplican las reglas de circulación, y luego los exime de título, matrícula, licencia de conducir y seguro obligatorio. En la práctica se trata de un dispositivo tratado como vehículo en la calle que usted no puede matricular ni asegurar como tal.",
    verdict: "Sin licencia ni seguro, pero con edad mínima de 16 años.",
  },
  {
    name: "Ciclo impulsado por motor (motor driven cycle)",
    citation: "625 ILCS 5/1-145.001",
    test: "Un motor eléctrico de más de 750 vatios y hasta 8,000 vatios, o una bicicleta de gasolina capaz de superar las 28 millas por hora, o cualquier bicicleta eléctrica que no encaje en una de las tres clases de baja velocidad.",
    detail:
      "Esta es la categoría que alcanza a las máquinas que se venden como e-motos o bicicletas eléctricas tipo motocross. La reclasificación es el corazón de la nueva ley. Un ciclo impulsado por motor necesita certificado de título, matrícula, número de identificación vehicular, velocímetro, licencia de conducir y seguro de responsabilidad civil, y queda prohibido en toda acera, carril para bicicletas, sendero para bicicletas, vía de uso compartido y ruta destinada a bicicletas.",
    verdict: "Licencia de conducir, título, matrícula y seguro completos.",
  },
  {
    name: "Vehículo de juguete (toy vehicle)",
    citation: "625 ILCS 5/1-205.5",
    test: "Un juguete montable a batería diseñado para no exceder 10 millas por hora y destinado a menores de 8 años.",
    detail:
      "La ley menciona productos del tipo Razor y Power Wheels como ejemplos. Estos vehículos solo pueden usarse en aceras y senderos para bicicletas, y el menor que lo conduce tiene los derechos y deberes de un peatón, lo que significa que los conductores deben cederle el paso. Los municipios y distritos de parques pueden prohibirlos en sus propias instalaciones mediante ordenanza.",
    verdict: "Solo aceras y senderos para bicicletas.",
  },
];

export const AGE_RULES = [
  {
    device: "Bicicleta eléctrica de baja velocidad, Clase 1",
    age: "15 años o más",
    change:
      "Nuevo. Illinois no tenía edad mínima para la Clase 1 antes de esta ley.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Bicicleta eléctrica de baja velocidad, Clase 2",
    age: "15 años o más",
    change:
      "Nuevo. Illinois no tenía edad mínima para la Clase 2 antes de esta ley.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Bicicleta eléctrica de baja velocidad, Clase 3",
    age: "16 años o más",
    change:
      "Sin cambio. Un menor de 16 años todavía puede viajar como pasajero en una Clase 3 fabricada para llevar acompañante.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Patinete, patineta o monociclo eléctrico",
    age: "16 años o más",
    change: "Nuevo para toda la categoría de micromovilidad.",
    citation: "625 ILCS 5/11-1435(d)",
  },
  {
    device: "Bicicleta de gasolina de baja velocidad",
    age: "16 años o más",
    change:
      "Sin cambio, pero el límite de velocidad para estas sube de 20 a 28 millas por hora.",
    citation: "625 ILCS 5/11-1516(a), (b)",
  },
  {
    device:
      "Ciclo impulsado por motor, incluida cualquier e-moto de más de 750 vatios",
    age: "Se requiere licencia de conducir vigente",
    change:
      "Un joven de 16 o 17 años puede tener un permiso de instrucción y circular de día bajo la supervisión directa de un conductor con licencia de 21 años o más y un año de experiencia.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
];

export const WHERE_RULES = [
  {
    device: "Bicicleta eléctrica de baja velocidad",
    allowed:
      "Cualquier carretera, calle o vía abierta a las bicicletas, incluidos los carriles para bicicletas. Los senderos para bicicletas están abiertos salvo que la agencia estatal con jurisdicción prohíba esa clase.",
    banned:
      "Aceras. Los distritos de parques, de bosques protegidos, de conservación y de transporte pueden seguir restringiendo los senderos que controlan, y el Departamento de Recursos Naturales puede dictar reglas para sus propias propiedades.",
    citation: "625 ILCS 5/11-1517(e), (f), (g)",
  },
  {
    device: "Dispositivo eléctrico de micromovilidad",
    allowed:
      "Carreteras, calles, vías, carriles para bicicletas y senderos para bicicletas, sin obstruir el tránsito.",
    banned:
      "Aceras, autopistas interestatales y cualquier vía con límite superior a 35 millas por hora salvo que tenga carril designado para bicicletas. Un dispositivo capaz de circular y que circule a más de 28 millas por hora queda prohibido en toda vía pública sin importar el límite de velocidad, y también en carriles y senderos para bicicletas.",
    citation: "625 ILCS 5/11-1435(a), (b)",
  },
  {
    device: "Ciclo impulsado por motor",
    allowed: "Carreteras, calles y vías públicas.",
    banned:
      "Aceras, carriles para bicicletas, senderos para bicicletas, vías de uso compartido, rutas de bicicleta fuera de carretera, senderos de superficie natural destinados a bicicletas, cualquier otra instalación específica para bicicletas, autopistas interestatales y terrenos públicos donde la agencia a cargo lo prohíba.",
    citation: "625 ILCS 5/11-1403.4(b), (c)",
  },
  {
    device: "Vehículo de juguete",
    allowed: "Solo aceras y senderos para bicicletas.",
    banned:
      "En todo lo demás, y en propiedad municipal o de un distrito que los prohíba por ordenanza.",
    citation: "625 ILCS 5/11-1008.5(a), (b)",
  },
];

export const MOTOR_DRIVEN_DUTIES = [
  {
    duty: "Certificado de título",
    detail:
      "Se exige para un ciclo eléctrico impulsado por motor de más de 750 y hasta 8,000 vatios, o una bicicleta de gasolina capaz de superar las 28 millas por hora, comprado nuevo a partir del 1 de enero de 2027, siempre que la máquina tenga número de identificación vehicular. Una máquina comprada antes de esa fecha no tiene que ser titulada, pero debe estar titulada y matriculada antes de poder circular por una vía pública.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Matrícula y placas",
    detail:
      "Una máquina que no fue fabricada ni equipada para uso general en carretera no puede matricularse. Recibe un título distintivo y no puede circular legalmente por la calle.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Licencia de conducir",
    detail:
      "Ninguna persona puede operar un ciclo impulsado por motor sin licencia de conducir vigente.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
  {
    duty: "Seguro de responsabilidad civil",
    detail:
      "Todo propietario de un ciclo impulsado por motor queda sujeto a los requisitos de seguro obligatorio del Código de Vehículos.",
    citation: "625 ILCS 5/11-1403.4(l)",
  },
  {
    duty: "Equipamiento",
    detail:
      "Velocímetro en millas por hora, número de identificación vehicular, cumplimiento de las normas federales de seguridad y prohibición de alterar la capacidad de velocidad.",
    citation: "625 ILCS 5/11-1403.4(g)",
  },
  {
    duty: "Confiscación e incautación",
    detail:
      "Una máquina en infracción puede ser confiscada e incautada a discreción de la agencia policial, que puede cobrar una tarifa administrativa razonable para devolverla. La tarifa se exonera con prueba verificable de que el vehículo había sido robado.",
    citation: "625 ILCS 5/11-1403.4(j)",
  },
];

export const NOT_IN_THE_LAW = [
  {
    myth: "Quienes usen bicicleta eléctrica necesitarán licencia de conducir y seguro.",
    reality:
      "No es así para una bicicleta eléctrica verdadera. Una bicicleta eléctrica de baja velocidad no es un vehículo de motor en Illinois, y la ley exime expresamente a los dispositivos de micromovilidad de título, matrícula, licencia y seguro obligatorio. Esos requisitos solo aparecen cuando la máquina es lo bastante potente para ser un ciclo impulsado por motor, lo que en general significa un motor de más de 750 vatios.",
  },
  {
    myth: "Illinois va a exigir casco.",
    reality:
      "La palabra casco no aparece en ninguna parte de la Ley Pública 104-0854. La ley no impone ningún requisito de casco a ninguna categoría de dispositivo.",
  },
  {
    myth: "Todos tienen que tener 16 años.",
    reality:
      "Las edades mínimas varían según el dispositivo. Las bicicletas eléctricas Clase 1 y Clase 2 son desde los 15 años. Las Clase 3, las bicicletas de gasolina y todos los dispositivos de micromovilidad son desde los 16. Los ciclos impulsados por motor exigen una licencia, no una edad.",
  },
  {
    myth: "Es la ley de Giannoulias que el Senado aprobó por unanimidad.",
    reality:
      "Ese proyecto era el SB 3336 y no es ley. Pasó el Senado 54 a 0 en abril de 2026 y la Cámara 80 a 30 en mayo, pero el Senado nunca votó para concurrir con las enmiendas de la Cámara y el proyecto quedó archivado en julio. Las disposiciones que sí se convirtieron en ley viajaron en el SB 3484, que el Gobernador firmó el 26 de agosto de 2026 como Ley Pública 104-0854.",
  },
];

export const BEFORE_JANUARY = [
  {
    who: "Padres y madres",
    action:
      "Busque la etiqueta de la bicicleta y lea el vataje. Menos de 750 vatios con un número de clase impreso es una bicicleta eléctrica, y su hijo necesita tener 15 años para Clase 1 o 2 y 16 para Clase 3. Más de 750 vatios es un ciclo impulsado por motor, lo que significa que su hijo no puede conducirlo legalmente sin licencia de conducir, título, placas y seguro.",
  },
  {
    who: "Personas que conducen",
    action:
      "Verifique si su máquina puede superar las 28 millas por hora. Si puede y es un dispositivo de micromovilidad, quedará prohibida por completo en vías públicas, carriles y senderos para bicicletas cuando la ley entre en vigor, lo que deja únicamente la propiedad privada con permiso.",
  },
  {
    who: "Quien compró antes del 1 de enero de 2027",
    action:
      "No está obligado a titular una máquina que ya posee, pero no puede circular con ella por una vía pública hasta que esté titulada y matriculada. Conserve el comprobante con la fecha de compra.",
  },
  {
    who: "Comercios y distribuidores",
    action:
      "Revise cómo está etiquetada y anunciada cada máquina en el piso de venta. Comercializar un ciclo impulsado por motor como si estuviera exento de estas reglas es una práctica ilegal bajo la Ley de Fraude al Consumidor y Prácticas Comerciales Engañosas, con una sanción civil de hasta 10,000 dólares por cada unidad.",
  },
  {
    who: "Municipios",
    action:
      "Las ordenanzas locales sobre bicicletas eléctricas quedan sin efecto. La ley elimina la facultad de los gobiernos locales de matricular o licenciar bicicletas eléctricas y de gasolina de baja velocidad, y prohíbe a las unidades con autonomía local regular estos dispositivos salvo donde la propia ley lo permita.",
  },
];
