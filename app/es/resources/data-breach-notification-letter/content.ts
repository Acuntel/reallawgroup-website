export const steps = [
  {
    step: "1",
    title: "Lea la carta con cuidado — y guárdela",
    description:
      "La carta le dice exactamente qué datos fueron expuestos (número de Seguro Social, información médica, cuentas financieras), cuándo ocurrió la filtración y qué le ofrece la empresa. Guarde la carta y el sobre — es evidencia, puede iniciar plazos legales, y los abogados la pedirán primero. Una foto en su teléfono es un buen respaldo.",
  },
  {
    step: "2",
    title: "Asegúrese de que la carta sea real",
    description:
      "Los estafadores envían cartas, llamadas y mensajes falsos de 'apoyo por la filtración' aprovechándose de filtraciones reales. Busque el nombre de la empresa junto con 'data breach' para encontrar su anuncio oficial, o vaya directamente al sitio web de la empresa — no llame a números ni haga clic en enlaces que no pueda verificar. Una notificación real nunca le pedirá su contraseña, su número de Seguro Social completo ni un pago por teléfono.",
  },
  {
    step: "3",
    title: "Inscríbase en el monitoreo de crédito gratuito",
    description:
      "La mayoría de las cartas ofrecen 12–24 meses de monitoreo de crédito o protección de identidad gratis. Acéptelo — la Comisión Federal de Comercio (FTC) recomienda tomarlo, e inscribirse generalmente no renuncia a su derecho de participar en una demanda o acuerdo. Solo conozca sus límites: el monitoreo le alerta después de que algo sucede; no previene el robo de identidad.",
  },
  {
    step: "4",
    title: "Congele su crédito en las tres agencias",
    description:
      "Un congelamiento de seguridad bloquea la apertura de nuevas cuentas de crédito a su nombre y es gratuito por ley federal. Debe colocarlo por separado con Equifax, Experian y TransUnion, y puede levantarlo temporalmente cuando solicite crédito. Si un congelamiento le parece demasiado, una alerta de fraude gratuita de un año es una alternativa más ligera — vea la comparación abajo.",
  },
  {
    step: "5",
    title: "Obtenga sus reportes de crédito gratis y vigile sus cuentas",
    description:
      "Puede revisar sus reportes de crédito de las tres agencias gratis, incluso semanalmente, en AnnualCreditReport.com. Busque cuentas que no reconozca y consultas que no autorizó. Revise los estados de cuenta bancarios y de tarjetas línea por línea, y si se expuso información médica, lea cada Explicación de Beneficios de su aseguradora buscando atención que nunca recibió.",
  },
  {
    step: "6",
    title: "Asegure sus contraseñas — y su declaración de impuestos",
    description:
      "Si se expuso una contraseña, cámbiela en todos los lugares donde la reutilizó y active la autenticación de dos factores. Si se expuso su número de Seguro Social, considere solicitar un PIN de Protección de Identidad al IRS para que nadie pueda presentar una declaración de impuestos a su nombre, y presente la suya temprano.",
  },
  {
    step: "7",
    title: "Documente todo",
    description:
      "Lleve un registro simple: cada cargo fraudulento, cada cuenta sospechosa, cada llamada de estafa o mensaje de phishing, cada dólar que gaste en protección y cada hora que dedique a lidiar con la filtración. Bajo la ley de Illinois, las pérdidas documentadas son lo que convierte una carta de notificación en un reclamo legal viable. Si ocurre un uso indebido, repórtelo en IdentityTheft.gov para recibir un plan de recuperación personalizado.",
  },
];

export const freezeVsAlert = {
  headers: ["", "Congelamiento de Crédito", "Alerta de Fraude"],
  rows: [
    {
      label: "Qué hace",
      freeze:
        "Bloquea el acceso de los prestamistas a su archivo de crédito, por lo que generalmente no se pueden abrir cuentas nuevas a su nombre",
      alert:
        "Indica a las empresas que tomen pasos adicionales para verificar su identidad antes de extender crédito",
    },
    {
      label: "Costo",
      freeze: "Gratuito por ley federal",
      alert: "Gratuita",
    },
    {
      label: "Cuánto dura",
      freeze:
        "Hasta que usted lo levante o lo elimine — puede levantarlo temporalmente en cualquier momento",
      alert:
        "1 año, renovable (7 años para víctimas confirmadas de robo de identidad)",
    },
    {
      label: "Cómo se coloca",
      freeze: "Debe colocarse por separado con cada una de las tres agencias",
      alert: "Se coloca con una agencia, que debe notificar a las otras dos",
    },
    {
      label: "Mejor cuando",
      freeze:
        "Su número de Seguro Social fue expuesto, o no necesitará crédito nuevo pronto",
      alert:
        "Quiere protección pero espera solicitar crédito o préstamos pronto",
    },
  ],
};

export const dataTypeGuides = [
  {
    title: "Número de Seguro Social",
    advice:
      "La exposición más grave — un SSN no se puede cambiar como una contraseña. Congele su crédito en las tres agencias, considere un PIN de Protección de Identidad del IRS, presente su declaración de impuestos temprano y revise su estado de cuenta del Seguro Social anualmente. Los SSN robados suelen usarse meses o años después, así que manténgase alerta después de que termine el monitoreo gratuito.",
  },
  {
    title: "Números de cuentas financieras o tarjetas",
    advice:
      "Contacte a su banco o emisor de tarjeta, pida una tarjeta de reemplazo o un nuevo número de cuenta, y revise los estados de cuenta línea por línea. Dispute los cargos fraudulentos de inmediato por escrito y guarde copias — las pérdidas por fraude no reembolsadas son exactamente el tipo de daño documentado que respalda un reclamo legal.",
  },
  {
    title: "Información médica o de seguro de salud",
    advice:
      "El robo de identidad médica puede significar que alguien reciba atención o recetas con su seguro. Lea cada Explicación de Beneficios, pida a sus proveedores copias de sus expedientes si algo se ve mal, y reporte errores a su aseguradora de inmediato. Las filtraciones de salud están entre las más comunes que afectan a los residentes de Illinois.",
  },
  {
    title: "La información de su hijo",
    advice:
      "Los datos de los niños son valiosos para los ladrones precisamente porque el uso indebido puede pasar desapercibido durante años. Puede pedir a cada agencia de crédito que verifique si su hijo tiene un archivo de crédito y colocar un congelamiento gratuito en él. Las filtraciones en escuelas y software educativo han expuesto los registros de millones de estudiantes a nivel nacional — incluyendo estudiantes de Illinois.",
  },
  {
    title: "Nombres de usuario y contraseñas",
    advice:
      "Cambie la contraseña expuesta inmediatamente — y en todos los demás lugares donde la usó. Active la autenticación de dos factores primero para el correo electrónico y las cuentas financieras; su cuenta de correo es la llave maestra de todo lo demás. Cuidado con el phishing dirigido que menciona por nombre a la empresa de la filtración.",
  },
];

export const recentBreaches = [
  {
    name: "Erie Family Health Centers (área de Chicago)",
    detail:
      "La red de centros de salud comunitarios del área de Chicago reportó públicamente en 2026 que una intrusión a finales de 2025 afectó a aproximadamente 570,000 pacientes, con datos expuestos que potencialmente incluían números de Seguro Social, información financiera y registros de tratamiento.",
  },
  {
    name: "Illinois Department of Human Services",
    detail:
      "El estado reveló públicamente que la información de aproximadamente 705,000 residentes de Illinois — en gran parte registros relacionados con Medicaid — estuvo visible en línea debido a configuraciones de privacidad incorrectas entre 2022 y 2025.",
  },
  {
    name: "Saint Anthony Hospital (Chicago)",
    detail:
      "El hospital del lado oeste de Chicago reportó públicamente que cuentas de correo comprometidas expusieron información de más de 146,000 personas; las cartas de notificación se enviaron aproximadamente un año después de la intrusión de 2025.",
  },
  {
    name: "Chicago Public Schools (filtración de un proveedor)",
    detail:
      "CPS reveló públicamente en 2025 que una filtración en un proveedor externo de transferencia de archivos expuso los registros de más de 700,000 estudiantes actuales y anteriores.",
  },
  {
    name: "TransUnion (agencia de crédito con sede en Chicago)",
    detail:
      "TransUnion reveló públicamente en 2025 que una filtración relacionada con una aplicación de terceros expuso información personal de más de 4 millones de consumidores en EE. UU., incluyendo nombres, números de Seguro Social y fechas de nacimiento.",
  },
];

export const faqs = [
  {
    question:
      "¿Cuánto tiempo tiene una empresa para notificarme sobre una filtración de datos en Illinois?",
    answer:
      "La Ley de Protección de Información Personal de Illinois (PIPA, 815 ILCS 530) exige la notificación 'en el tiempo más expedito posible y sin demora injustificada', permitiendo tiempo para determinar el alcance de la filtración y restaurar la seguridad del sistema. No hay un número fijo de días para empresas privadas, por eso algunas cartas llegan meses después de la intrusión. Las filtraciones que afectan a más de 500 residentes de Illinois también deben reportarse al Procurador General de Illinois a más tardar cuando se notifica a los consumidores.",
  },
  {
    question: "¿Cómo sé si mi carta de filtración de datos es una estafa?",
    answer:
      "Verifique de forma independiente: busque el nombre de la empresa junto con 'data breach' para encontrar su anuncio oficial, o visite el sitio web de la empresa directamente en lugar de usar enlaces o números de teléfono de una carta en la que no confía. Las notificaciones legítimas de filtraciones no piden su contraseña, su número de Seguro Social completo ni ningún pago. Si alguien que llama o escribe sobre 'apoyo por la filtración' le pide información personal, cuelgue — los notificadores reales no hacen eso.",
  },
  {
    question: "¿Qué pasa si tiré mi carta de notificación?",
    answer:
      "No es fatal para un reclamo, pero trate de recuperar la información. El sitio web de la empresa generalmente tiene publicado su aviso de filtración, puede pedir otra copia a la empresa, y las filtraciones de salud grandes aparecen en el portal federal de filtraciones del HHS. Si nos contacta, generalmente podemos ayudar a confirmar si una filtración fue reportada públicamente y si usted pertenece al grupo afectado.",
  },
  {
    question:
      "¿Debo aceptar el monitoreo de crédito gratuito que ofreció la empresa?",
    answer:
      "Sí — la FTC recomienda aceptar el monitoreo de crédito gratuito después de una filtración, e inscribirse generalmente no renuncia a su derecho de participar en una demanda o acuerdo colectivo. Tenga en cuenta lo que no hace: le alerta sobre cambios en su reporte de crédito después de que suceden, pero no bloquea cuentas nuevas (eso lo hace un congelamiento de crédito) y normalmente no detectará el uso indebido de información médica ni de cuentas bancarias existentes.",
  },
  {
    question: "¿Puedo demandar a la empresa que expuso mi información?",
    answer:
      "Posiblemente. Los residentes de Illinois pueden tener reclamos bajo la Ley de Fraude al Consumidor — una violación de la ley de notificación de filtraciones de Illinois es automáticamente una práctica ilegal bajo ella — y bajo teorías del derecho común, especialmente cuando hay pérdidas documentadas como cargos fraudulentos o gastos de bolsillo. Las exposiciones de datos biométricos o genéticos pueden activar BIPA y GIPA, que establecen daños estatutarios sin prueba de robo de identidad. Una evaluación de caso gratuita es la forma más rápida de saber dónde está parado.",
  },
];
