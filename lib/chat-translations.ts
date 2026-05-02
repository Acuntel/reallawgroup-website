export type ChatLocale = "en" | "es" | "pl";

export const CHAT_LOCALES: { code: ChatLocale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pl", label: "PL" },
];

export function detectLocaleFromPath(pathname: string | null): ChatLocale {
  if (!pathname) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  return "en";
}

export const LANGUAGE_INSTRUCTION: Record<ChatLocale, string> = {
  en: "Reply in English.",
  es: "Responde siempre en español, incluso si el usuario escribe en otro idioma.",
  pl: "Odpowiadaj zawsze po polsku, nawet jeśli użytkownik pisze w innym języku.",
};

type ChatStrings = {
  headerTitle: string;
  headerSubtitleOnline: string;
  headerSubtitleAssistant: string;
  closeChat: string;
  leadFormIntro: string;
  namePlaceholder: string;
  nameAriaLabel: string;
  emailPlaceholder: string;
  emailAriaLabel: string;
  phonePlaceholder: string;
  phoneAriaLabel: string;
  servicePlaceholder: string;
  serviceAriaLabel: string;
  serviceOptions: string[];
  startChat: string;
  preferToCall: (phone: string) => string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  greeting: (firstName: string, service: string | null) => string;
  scheduleConsultation: string;
  callNow: string;
  inputPlaceholder: string;
  inputAriaLabel: string;
  attachFile: string;
  attachFileTitle: string;
  sendMessage: string;
  errorMessage: string;
  proactiveBubble: string;
  dismiss: string;
  removeAttachment: (name: string) => string;
  openChat: string;
  closeChatAria: string;
  languageAriaLabel: string;
};

export const CHAT_STRINGS: Record<ChatLocale, ChatStrings> = {
  en: {
    headerTitle: "REAL Law Group",
    headerSubtitleOnline: "Online - Typically replies instantly",
    headerSubtitleAssistant: "Virtual Assistant",
    closeChat: "Close chat",
    leadFormIntro: "Quick intro so we can help you better:",
    namePlaceholder: "Your name *",
    nameAriaLabel: "Your name",
    emailPlaceholder: "Email address *",
    emailAriaLabel: "Your email",
    phonePlaceholder: "Phone (optional)",
    phoneAriaLabel: "Your phone number",
    servicePlaceholder: "What can we help with?",
    serviceAriaLabel: "Select a service",
    serviceOptions: [
      "Real Estate Transaction",
      "Business Law",
      "Estate Planning",
      "Other / Not Sure",
    ],
    startChat: "Start Chat",
    preferToCall: (phone) => `Prefer to talk? Call ${phone}`,
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",
    greeting: (firstName, service) =>
      `Hi ${firstName}! I'm the REAL Law Group virtual assistant.${
        service ? ` I see you're interested in ${service.toLowerCase()}.` : ""
      } How can I help you today?`,
    scheduleConsultation: "Schedule Consultation",
    callNow: "Call Now",
    inputPlaceholder: "Type your question...",
    inputAriaLabel: "Type your question",
    attachFile: "Attach file",
    attachFileTitle: "Attach a file (PDF, image, or document)",
    sendMessage: "Send message",
    errorMessage: "Something went wrong. Please try again or call us directly.",
    proactiveBubble: "Questions about your closing? Chat with us!",
    dismiss: "Dismiss",
    removeAttachment: (name) => `Remove ${name}`,
    openChat: "Open chat",
    closeChatAria: "Close chat",
    languageAriaLabel: "Chat language",
  },
  es: {
    headerTitle: "REAL Law Group",
    headerSubtitleOnline: "En línea - Generalmente responde al instante",
    headerSubtitleAssistant: "Asistente Virtual",
    closeChat: "Cerrar chat",
    leadFormIntro: "Una breve introducción para poder ayudarte mejor:",
    namePlaceholder: "Tu nombre *",
    nameAriaLabel: "Tu nombre",
    emailPlaceholder: "Correo electrónico *",
    emailAriaLabel: "Tu correo electrónico",
    phonePlaceholder: "Teléfono (opcional)",
    phoneAriaLabel: "Tu número de teléfono",
    servicePlaceholder: "¿En qué podemos ayudarte?",
    serviceAriaLabel: "Selecciona un servicio",
    serviceOptions: [
      "Transacción Inmobiliaria",
      "Derecho Empresarial",
      "Planificación Patrimonial",
      "Otro / No estoy seguro",
    ],
    startChat: "Iniciar Chat",
    preferToCall: (phone) => `¿Prefieres hablar? Llama al ${phone}`,
    nameRequired: "El nombre es obligatorio",
    emailRequired: "El correo electrónico es obligatorio",
    emailInvalid: "Introduce un correo electrónico válido",
    greeting: (firstName, service) =>
      `¡Hola ${firstName}! Soy el asistente virtual de REAL Law Group.${
        service ? ` Veo que te interesa ${service.toLowerCase()}.` : ""
      } ¿En qué puedo ayudarte hoy?`,
    scheduleConsultation: "Agendar Consulta",
    callNow: "Llamar",
    inputPlaceholder: "Escribe tu pregunta...",
    inputAriaLabel: "Escribe tu pregunta",
    attachFile: "Adjuntar archivo",
    attachFileTitle: "Adjuntar un archivo (PDF, imagen o documento)",
    sendMessage: "Enviar mensaje",
    errorMessage:
      "Algo salió mal. Por favor, inténtalo de nuevo o llámanos directamente.",
    proactiveBubble: "¿Preguntas sobre tu cierre? ¡Chatea con nosotros!",
    dismiss: "Descartar",
    removeAttachment: (name) => `Quitar ${name}`,
    openChat: "Abrir chat",
    closeChatAria: "Cerrar chat",
    languageAriaLabel: "Idioma del chat",
  },
  pl: {
    headerTitle: "REAL Law Group",
    headerSubtitleOnline: "Online - Zazwyczaj odpowiada natychmiast",
    headerSubtitleAssistant: "Asystent Wirtualny",
    closeChat: "Zamknij czat",
    leadFormIntro: "Krótkie wprowadzenie, abyśmy mogli lepiej Ci pomóc:",
    namePlaceholder: "Twoje imię *",
    nameAriaLabel: "Twoje imię",
    emailPlaceholder: "Adres e-mail *",
    emailAriaLabel: "Twój e-mail",
    phonePlaceholder: "Telefon (opcjonalnie)",
    phoneAriaLabel: "Twój numer telefonu",
    servicePlaceholder: "W czym możemy pomóc?",
    serviceAriaLabel: "Wybierz usługę",
    serviceOptions: [
      "Transakcja Nieruchomości",
      "Prawo Gospodarcze",
      "Planowanie Spadkowe",
      "Inne / Nie jestem pewien",
    ],
    startChat: "Rozpocznij Czat",
    preferToCall: (phone) => `Wolisz porozmawiać? Zadzwoń pod ${phone}`,
    nameRequired: "Imię jest wymagane",
    emailRequired: "E-mail jest wymagany",
    emailInvalid: "Wprowadź prawidłowy adres e-mail",
    greeting: (firstName, service) =>
      `Cześć ${firstName}! Jestem wirtualnym asystentem REAL Law Group.${
        service ? ` Widzę, że interesuje Cię ${service.toLowerCase()}.` : ""
      } W czym mogę dziś pomóc?`,
    scheduleConsultation: "Umów Konsultację",
    callNow: "Zadzwoń",
    inputPlaceholder: "Napisz swoje pytanie...",
    inputAriaLabel: "Napisz swoje pytanie",
    attachFile: "Załącz plik",
    attachFileTitle: "Załącz plik (PDF, obraz lub dokument)",
    sendMessage: "Wyślij wiadomość",
    errorMessage:
      "Coś poszło nie tak. Spróbuj ponownie lub zadzwoń do nas bezpośrednio.",
    proactiveBubble: "Masz pytania o swoje zamknięcie? Napisz do nas!",
    dismiss: "Zamknij",
    removeAttachment: (name) => `Usuń ${name}`,
    openChat: "Otwórz czat",
    closeChatAria: "Zamknij czat",
    languageAriaLabel: "Język czatu",
  },
};
