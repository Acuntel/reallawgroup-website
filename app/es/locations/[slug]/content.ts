export type LocationContentEs = {
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

export const LOCATION_CONTENT_ES: Record<string, LocationContentEs> = {
  elmhurst: {
    metaTitle:
      "Oficina en Elmhurst: Abogados de Bienes Raíces en el Condado de DuPage",
    metaDescription:
      "Visite la oficina principal de REAL Law Group en 381 N York St Suite 1, Elmhurst, IL 60126. Cierres de bienes raíces, planificación patrimonial y servicios para inversionistas en el condado de DuPage y toda el área de Chicago. Llame al (630) 299-7600.",
    heroTitle: "Oficina Principal en Elmhurst",
    heroSubtitle:
      "Nuestra oficina principal en York Street atiende a Elmhurst, el condado de DuPage y toda el área de Chicago con cierres de bienes raíces, planificación patrimonial y servicios para inversionistas.",
    badge: "Oficina Principal",
    aboutHeading: "Nuestra Oficina Principal en Elmhurst",
    aboutParas: [
      "REAL Law Group, P.C. tiene su sede en Elmhurst desde su fundación en 2016. Nuestra oficina en 381 N York St Suite 1 está sobre el corredor de York Street, al norte del centro de Elmhurst, a minutos de la I-290, la I-294 y la estación Metra de Elmhurst, lo que la hace muy accesible para clientes de todo el condado de DuPage y los suburbios del oeste.",
      "Aquí opera toda la firma todos los días. Los cierres, las firmas de documentos, las reuniones de planificación patrimonial y las consultas de inversionistas se realizan en esta oficina, y toda la correspondencia de la firma se recibe y procesa en esta dirección.",
    ],
    servicesHeading: "Servicios en Esta Oficina",
    services: [
      {
        label: "Cierres de Bienes Raíces",
        href: "/es/practice-areas/real-estate",
      },
      {
        label: "Servicios para Inversionistas",
        href: "/es/real-estate-investors",
      },
      {
        label: "Planificación Patrimonial",
        href: "/es/practice-areas/estate-planning",
      },
      { label: "Cierres HUD", href: "/es/practice-areas/hud-closings" },
      {
        label: "Fideicomisos de Tierras",
        href: "/es/practice-areas/land-trusts",
      },
      {
        label: "Filtración de Datos y Privacidad",
        href: "/es/practice-areas/data-breach",
      },
    ],
    areasHeading: "Comunidades Que Atendemos Desde Elmhurst",
    areasIntro:
      "Desde nuestra oficina principal representamos a compradores, vendedores, inversionistas y familias en todo el condado de DuPage y los suburbios del oeste, incluyendo:",
    faqs: [
      {
        question: "¿Necesito una cita para visitar la oficina de Elmhurst?",
        answer:
          "Recomendamos programar su visita con anticipación para que el abogado adecuado esté disponible para su asunto. Llame al (630) 299-7600 o use nuestro formulario de contacto y encontraremos un horario que le convenga, incluso los sábados.",
      },
      {
        question: "¿Cuál es el horario de la oficina?",
        answer:
          "De lunes a viernes de 8 AM a 7 PM, y los sábados de 8 AM a 3 PM.",
      },
      {
        question: "¿Hay estacionamiento disponible?",
        answer:
          "Sí. Hay estacionamiento gratuito en el edificio, y la oficina está a poca distancia a pie de la estación Metra de Elmhurst para clientes que vienen de la ciudad.",
      },
      {
        question: "¿A dónde debo enviar correspondencia o documentos legales?",
        answer:
          "Toda la correspondencia para REAL Law Group, P.C. debe enviarse a esta oficina: 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
    ],
  },
  chicago: {
    metaTitle: "Oficina en Chicago (Logan Square): Abogados de Bienes Raíces",
    metaDescription:
      "Reúnase con los abogados de REAL Law Group con cita previa en nuestra oficina satélite de Logan Square, 3250 W North Ave, Chicago, IL 60647. Cierres de bienes raíces, violaciones de construcción y servicios para inversionistas. Llame al (630) 299-7600.",
    heroTitle: "Oficina en Chicago (Logan Square)",
    heroSubtitle:
      "Una oficina satélite en 3250 W North Ave que atiende a Logan Square, Humboldt Park y el noroeste de Chicago, disponible solo con cita previa.",
    badge: "Oficina Satélite: Solo con Cita Previa",
    appointmentNotice:
      "Esta ubicación es una oficina satélite de REAL Law Group, P.C. y está disponible solo con cita previa. Llame al (630) 299-7600 para programar su visita. Toda la correspondencia y los documentos legales deben enviarse a nuestra oficina principal: 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Reúnase con Nosotros en el Noroeste de Chicago",
    aboutParas: [
      "Nuestra oficina satélite de Logan Square en 3250 W North Ave ofrece a los clientes de Chicago un lugar conveniente para reunirse con un abogado de REAL Law Group sin tener que viajar a los suburbios. El local está sobre North Avenue, cerca del límite entre Logan Square y Humboldt Park, próximo al sendero 606 y bien conectado por el autobús de North Avenue.",
      "Las reuniones aquí se programan con anticipación, lo que significa que cuando usted llega, su abogado está listo y dedicado a su asunto. En esta ubicación se pueden coordinar cierres, revisión de contratos por abogado, estrategias para violaciones de construcción y consultas de inversionistas.",
    ],
    servicesHeading: "Servicios en Esta Ubicación",
    services: [
      {
        label: "Cierres de Bienes Raíces",
        href: "/es/practice-areas/real-estate",
      },
      {
        label: "Violaciones de Construcción",
        href: "/es/practice-areas/building-violations",
      },
      {
        label: "Servicios para Inversionistas",
        href: "/es/real-estate-investors",
      },
      {
        label: "Fideicomisos de Tierras",
        href: "/es/practice-areas/land-trusts",
      },
      {
        label: "Filtración de Datos y Privacidad",
        href: "/es/practice-areas/data-breach",
      },
    ],
    areasHeading: "Vecindarios de Chicago Que Atendemos",
    areasIntro:
      "Desde esta ubicación atendemos a compradores, vendedores, propietarios e inversionistas en el noroeste de Chicago, incluyendo:",
    faqs: [
      {
        question: "¿Necesito una cita para visitar la oficina de Chicago?",
        answer:
          "Sí. Esta es una oficina satélite para reuniones, por lo que todas las visitas son solo con cita previa. Llame al (630) 299-7600 o use nuestro formulario de contacto y programaremos un horario que le convenga.",
      },
      {
        question: "¿A dónde debo enviar correspondencia o documentos legales?",
        answer:
          "Envíe toda la correspondencia a nuestra oficina principal: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "¿Sobre qué asuntos puedo reunirme en esta ubicación?",
        answer:
          "Cualquier asunto que maneja la firma, incluyendo cierres de bienes raíces, revisión de contratos, violaciones del código de construcción de Chicago, fideicomisos de tierras, asuntos de inversionistas y reclamos por filtración de datos. Díganos qué necesita al reservar y prepararemos la reunión para ello.",
      },
      {
        question: "¿Hay estacionamiento disponible?",
        answer:
          "Hay estacionamiento en la calle sobre North Avenue y sus alrededores, y la ubicación está en la ruta del autobús de North Avenue. Le confirmaremos la mejor forma de llegar cuando programe su cita.",
      },
    ],
  },
  "park-ridge": {
    metaTitle:
      "Oficina en Park Ridge: Abogados de Bienes Raíces en el Norte del Condado de Cook",
    metaDescription:
      "Reúnase con los abogados de REAL Law Group con cita previa en nuestra oficina satélite de Park Ridge, 222 S Prospect Ave, Park Ridge, IL 60068. Cierres de bienes raíces, planificación patrimonial y bienes heredados. Llame al (630) 299-7600.",
    heroTitle: "Oficina en Park Ridge",
    heroSubtitle:
      "Una oficina satélite en 222 S Prospect Ave que atiende a Park Ridge, Niles, Des Plaines y los suburbios del norte del condado de Cook, disponible solo con cita previa.",
    badge: "Oficina Satélite: Solo con Cita Previa",
    appointmentNotice:
      "Esta ubicación es una oficina satélite de REAL Law Group, P.C. y está disponible solo con cita previa. Llame al (630) 299-7600 para programar su visita. Toda la correspondencia y los documentos legales deben enviarse a nuestra oficina principal: 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Reúnase con Nosotros en Park Ridge",
    aboutParas: [
      "Nuestra oficina satélite de Park Ridge en 222 S Prospect Ave pone a un abogado de REAL Law Group a corta distancia de los suburbios del norte del condado de Cook. La oficina está en la zona de Uptown Park Ridge, cerca de la estación Metra de Park Ridge, un punto de fácil acceso para clientes de Park Ridge, Niles, Des Plaines y los vecindarios del extremo noroeste de Chicago.",
      "Las reuniones aquí se programan con anticipación, de modo que su abogado esté preparado y enfocado en su asunto cuando usted llegue. En esta ubicación se pueden atender cierres, revisión de contratos, conversaciones de planificación patrimonial y asuntos de propiedades heredadas.",
    ],
    servicesHeading: "Servicios en Esta Ubicación",
    services: [
      {
        label: "Cierres de Bienes Raíces",
        href: "/es/practice-areas/real-estate",
      },
      {
        label: "Planificación Patrimonial",
        href: "/es/practice-areas/estate-planning",
      },
      {
        label: "Propiedades Heredadas y Sucesiones",
        href: "/es/resources/inherited-property",
      },
      {
        label: "Servicios para Inversionistas",
        href: "/es/real-estate-investors",
      },
      {
        label: "Filtración de Datos y Privacidad",
        href: "/es/practice-areas/data-breach",
      },
    ],
    areasHeading: "Suburbios del Norte Que Atendemos Desde Park Ridge",
    areasIntro:
      "Desde esta ubicación atendemos a propietarios, familias e inversionistas en el norte del condado de Cook, incluyendo:",
    faqs: [
      {
        question: "¿Necesito una cita para visitar la oficina de Park Ridge?",
        answer:
          "Sí. Esta es una oficina satélite para reuniones, por lo que todas las visitas son solo con cita previa. Llame al (630) 299-7600 o use nuestro formulario de contacto y programaremos un horario que le convenga.",
      },
      {
        question: "¿A dónde debo enviar correspondencia o documentos legales?",
        answer:
          "Envíe toda la correspondencia a nuestra oficina principal: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "¿Sobre qué asuntos puedo reunirme en esta ubicación?",
        answer:
          "Cualquier asunto que maneja la firma, incluyendo cierres de bienes raíces, revisión de contratos, planificación patrimonial, propiedades heredadas y sucesiones, y reclamos por filtración de datos. Díganos qué necesita al reservar y prepararemos la reunión para ello.",
      },
      {
        question: "¿Cómo llego a la oficina?",
        answer:
          "La oficina está en Prospect Avenue, en Uptown Park Ridge, a poca distancia a pie de la estación Metra de Park Ridge, con estacionamiento en la calle cerca. Le confirmaremos los detalles cuando programe su cita.",
      },
    ],
  },
};
