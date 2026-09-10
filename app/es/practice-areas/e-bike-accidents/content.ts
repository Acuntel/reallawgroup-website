/**
 * Versión en español de la página sobre lesiones en bicicleta eléctrica,
 * patinete eléctrico y e-moto.
 *
 * Cumplimiento, no eliminar: el modelo de lesiones personales de REAL Law
 * Group es de REFERENCIA. La página en inglés dice que el despacho "connects
 * you with experienced personal injury attorneys" a través de su red. Esta
 * versión debe decir lo mismo. Reglas 7.1 y 7.4 de Illinois: sin
 * "especialista" ni "experto", sin superlativos, sin resultados anteriores,
 * sin cifras en dólares y sin pronósticos de resultado.
 */

export const SCENARIOS = [
  {
    scenario: "Un auto gira a la izquierda cruzando el carril de bicicletas",
    theory:
      "Negligencia común contra el conductor, tomando su falta de ceder el paso como prueba de ella.",
    coverage:
      "La póliza de responsabilidad civil del conductor, y después su propia cobertura contra conductores sin seguro o con seguro insuficiente si el otro no tiene o no alcanza.",
    pitfall:
      "Los ajustadores insisten en que la persona iba más rápido que una bicicleta. En una Clase 3 o en un patinete la velocidad de acercamiento realmente es mayor, así que la discusión se centra ahí. Las fotografías de la visibilidad y la lectura del propio velocímetro importan aquí más que en un caso de automóvil.",
  },
  {
    scenario: "Una e-moto atropella a un peatón en la acera",
    theory:
      "Negligencia contra quien conducía y, si es menor, una reclamación aparte porque un padre autorizó o permitió conscientemente la conducta.",
    coverage:
      "Seguro de hogar o de inquilino si la póliza no excluye la máquina, y desde el 1 de enero de 2027 el seguro obligatorio que debe llevar un ciclo impulsado por motor.",
    pitfall:
      "Aquí está el hueco de cobertura. Hoy muchas de estas máquinas no tienen seguro y quien conduce es un adolescente sin bienes. El paso más útil al inicio es averiguar qué pólizas existen antes de que alguien dé una declaración.",
  },
  {
    scenario: "La puerta de un auto estacionado se abre encima de la persona",
    theory:
      "Negligencia, con el deber del Código de Vehículos de no abrir una puerta hacia el tránsito como prueba de ella.",
    coverage: "La póliza de responsabilidad civil del auto estacionado.",
    pitfall:
      "Mucha gente se va sin reporte policial porque el auto estaba detenido. Sin reporte y sin la identidad del ocupante, la reclamación suele volverse imposible de probar.",
  },
  {
    scenario: "Un bache, una zanja de servicios o una obra sin señalizar",
    theory:
      "Reclamaciones por el estado del inmueble o de la vía contra la entidad responsable, que a menudo es un municipio, un township, un distrito de parques o un contratista.",
    coverage:
      "La cobertura o el autoseguro de la entidad pública, o la póliza de responsabilidad general del contratista.",
    pitfall:
      "El plazo es el problema. Una acción civil contra una entidad pública local de Illinois o sus empleados generalmente debe presentarse dentro de un año, no dos. Confiar en el plazo de dos años puede acabar con la reclamación antes de que alguien revise el fondo.",
  },
  {
    scenario: "Incendio de batería, falla de frenos o rotura del cuadro",
    theory:
      "Responsabilidad por producto contra el fabricante, el distribuidor y el vendedor, por diseño, fabricación o falta de advertencias.",
    coverage: "La cobertura de producto en la cadena de distribución.",
    pitfall:
      "No deseche la máquina y no permita que nadie la repare. El dispositivo es la prueba. Illinois también tiene un plazo máximo para reclamaciones por producto, así que una máquina antigua puede quedar fuera de tiempo aun dentro del plazo por lesiones.",
  },
  {
    scenario: "Un patinete de alquiler o compartido",
    theory:
      "Negligencia contra la empresa operadora, además de reclamaciones por producto contra el fabricante.",
    coverage: "La póliza de la empresa de alquiler, sujeta a sus términos.",
    pitfall:
      "Los términos de la aplicación suelen incluir una renuncia de responsabilidad y una cláusula de arbitraje con renuncia a demandas colectivas. Si esas cláusulas son exigibles en el caso concreto es una cuestión real, y es lo primero que hay que revisar en lugar de darse por vencido.",
  },
  {
    scenario: "Una persona de reparto lesionada durante el trabajo",
    theory:
      "Compensación laboral si es empleada, y en cualquier caso una reclamación por negligencia contra quien causó el choque.",
    coverage:
      "El seguro de compensación laboral, más la póliza de responsabilidad de la parte culpable.",
    pitfall:
      "Las plataformas de reparto clasifican a los repartidores como contratistas independientes, lo cual es una calificación discutida y no una respuesta cerrada. Ambas vías pueden importar, y la de compensación laboral tiene sus propios plazos de aviso y presentación.",
  },
  {
    scenario: "Conducía un menor y no se cumplían las nuevas edades mínimas",
    theory:
      "Reclamaciones a favor y en contra del menor, más la disposición del Código de Vehículos que prohíbe a un padre o tutor autorizar o permitir conscientemente que un menor infrinja el Código.",
    coverage:
      "Cobertura de responsabilidad del hogar, sujeta a las exclusiones de la póliza.",
    pitfall:
      "Esto corta en los dos sentidos después del 1 de enero de 2027. La infracción de un menor se convierte en un argumento que la defensa usará para trasladarle culpa, y puede exponer al padre del otro lado del caso.",
  },
];

export const INSURANCE_POINTS = [
  {
    heading: "En Illinois una bicicleta eléctrica no es un vehículo de motor",
    body: "Una bicicleta eléctrica de baja velocidad queda fuera de la definición de vehículo de motor del Código de Vehículos, así que no hay placa, ni matrícula, ni póliza obligatoria asociada. Cuando quien conduce una bicicleta eléctrica causa una lesión, con frecuencia no hay ninguna póliza de automóvil en el panorama.",
  },
  {
    heading:
      "El seguro de hogar o de inquilino es el respaldo habitual, y tiene exclusiones",
    body: "Las pólizas de responsabilidad del hogar suelen responder por la negligencia de un residente fuera de casa, lo que puede alcanzar un choque en bicicleta eléctrica. Muchas de esas mismas pólizas excluyen la responsabilidad derivada de vehículos motorizados, y cómo aplica una aseguradora esa exclusión a una máquina de 3,000 vatios es una cuestión de cobertura que depende del texto de la póliza y no del estatuto.",
  },
  {
    heading:
      "Su propia cobertura contra conductores sin seguro puede o no alcanzar",
    body: "La cobertura contra conductores sin seguro o con seguro insuficiente de una póliza de automóvil de Illinois responde por lesiones causadas por un vehículo de motor sin seguro, según como la propia póliza defina ese término. La Ley Pública 104-0854 llama vehículo de motor a un dispositivo eléctrico de micromovilidad para efectos del Código de Vehículos, lo cual no equivale automáticamente a la definición impresa en un contrato de seguro. A quien le digan sin más que no hay cobertura, conviene que le lean el texto real de la póliza antes de aceptar esa respuesta.",
  },
  {
    heading: "La nueva ley mejora el panorama para las máquinas pesadas",
    body: "A partir del 1 de enero de 2027, un ciclo impulsado por motor, que ahora incluye máquinas eléctricas de más de 750 vatios, queda sujeto a los requisitos de seguro obligatorio del Código de Vehículos. Una máquina que circule legalmente después de esa fecha debería tener una póliza detrás. Una que circule sin ella es un problema de seguro para quien conduce y un problema de recuperación para quien resulte atropellado.",
  },
  {
    heading:
      "La cobertura de gastos médicos y el seguro de salud también cuentan",
    body: "La cobertura de gastos médicos de una póliza de automóvil familiar a veces aplica a un familiar lesionado mientras andaba en bicicleta, y el seguro de salud cubre el tratamiento mientras tanto. Los planes de salud suelen reclamar el reembolso con cargo a cualquier recuperación, así que esos derechos deben identificarse desde el principio y no descubrirse al final.",
  },
];

export const DEADLINES = [
  {
    claim: "Lesiones personales",
    period: "2 años desde la fecha de la lesión",
    citation: "735 ILCS 5/13-202",
  },
  {
    claim: "Muerte por negligencia",
    period:
      "2 años desde la fecha del fallecimiento, con excepciones limitadas que lo amplían",
    citation: "740 ILCS 180/2(d), (e)",
  },
  {
    claim:
      "Contra una ciudad, villa, township, distrito de parques u otra entidad pública local",
    period:
      "1 año desde que se recibió la lesión o nació la causa de la acción",
    citation: "745 ILCS 10/8-101(a)",
  },
  {
    claim: "La persona lesionada era menor de 18 años",
    period:
      "En general 2 años después de cumplir 18, aunque las reclamaciones contra entidades públicas y las de producto tienen sus propios límites",
    citation: "735 ILCS 5/13-211(a)",
  },
  {
    claim: "Responsabilidad por producto, límite máximo",
    period:
      "12 años desde la primera venta por un vendedor o 10 años desde la entrega al primer usuario, el que expire antes",
    citation: "735 ILCS 5/13-213(b)",
  },
];

export const FAULT_POINTS = [
  "Illinois aplica culpa comparativa modificada. Quien demanda no recupera nada si su propia culpa contributiva supera el 50% de la causa próxima, y con el 50% o menos la indemnización se reduce en ese porcentaje (735 ILCS 5/2-1116).",
  "Los tribunales de Illinois por lo general tratan la infracción de un estatuto de seguridad como prueba de negligencia y no como responsabilidad automática. Eso significa que una regla incumplida por cualquiera de las partes se argumenta ante el jurado, no se aplica de forma mecánica.",
  "Después del 1 de enero de 2027 las nuevas reglas dan a la defensa una lista más larga que señalar: circular por la acera, conducir por debajo de la nueva edad mínima, llevar un pasajero que la ley no permite, alterar el limitador de velocidad u operar una máquina que necesitaba licencia y placa.",
  "La misma lista sirve a quien resultó lesionado cuando fue la otra parte la que incumplió. Un conductor que se estacionó sobre el carril de bicicletas, una tienda que vendió como legal una máquina que no puede matricularse, o una entidad pública que no colocó la señalización que la ley ahora exige son hechos que vale la pena desarrollar.",
];

export const HOW_WE_HELP = [
  {
    title: "Reclamaciones por lesiones, a través de nuestra red",
    body: "En los casos de lesiones lo conectamos con abogados de lesiones personales con experiencia a través de la red con la que trabaja REAL Law Group, igual que en los casos de choques de automóvil y camión. Esos casos se manejan con honorarios de contingencia, es decir sin honorarios de abogado salvo que haya una recuperación, y el tratamiento de los costos y gastos del caso queda establecido en un acuerdo escrito antes de comenzar.",
  },
  {
    title: "Una máquina que le vendieron como algo que no era",
    body: "La Ley Pública 104-0854 convierte en práctica ilegal, bajo la Ley de Fraude al Consumidor y Prácticas Comerciales Engañosas, que un comercio, mayorista, distribuidor o fabricante comercialice un ciclo impulsado por motor de modo que lleve al consumidor a creer que está exento de licencia, título, matrícula y seguro. El despacho ya litiga bajo ese estatuto en su práctica de privacidad. Traiga el anuncio, la factura y la etiqueta.",
  },
  {
    title: "Citaciones, incautación y qué significa una infracción para usted",
    body: "La ley permite a la policía confiscar e incautar, a su discreción, tanto dispositivos de micromovilidad como ciclos impulsados por motor, y cobrar una tarifa por devolverlos. Cuéntenos qué dice el aviso y qué pasó, y le diremos en qué situación está y lo remitiremos al abogado adecuado si el asunto queda fuera de lo que el despacho maneja.",
  },
  {
    title: "Consultas gratuitas, en tres idiomas",
    body: "Las consultas no cuestan nada y están disponibles en inglés, español y polaco. Nada en esta página es asesoría legal, y comunicarse con el despacho no crea por sí mismo una relación abogado-cliente.",
  },
];

export const EVIDENCE = [
  "Fotografíe el lugar, los vehículos, el dispositivo, la superficie de la vía y toda lesión visible antes de que algo se mueva o se repare.",
  "Conserve el dispositivo tal como está. No lo repare, no descarte la batería y no permita que una tienda se lo lleve.",
  "Fotografíe la etiqueta del fabricante con la clase, la velocidad asistida máxima y el vataje del motor. Esa etiqueta decide qué categoría legal aplica.",
  "Obtenga un reporte policial, incluso cuando el otro vehículo estaba estacionado o parezca que nadie se lesionó.",
  "Reúna nombres, teléfonos y datos de seguro de cada conductor y testigo.",
  "Busque atención médica el mismo día, porque un expediente cercano en el tiempo al choque es difícil de reconstruir después.",
  "Guarde la aplicación, el contrato de alquiler, el recibo y los papeles de la compra si hubo una máquina alquilada o recién comprada.",
  "No dé una declaración grabada a un ajustador antes de hablar con un abogado.",
];
