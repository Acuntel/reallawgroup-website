"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  ArrowRight,
  Loader2,
  Paperclip,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import {
  CHAT_LOCALES,
  CHAT_STRINGS,
  ChatLocale,
  detectLocaleFromPath,
} from "@/lib/chat-translations";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      execute: (id: string) => void;
      reset: (id: string) => void;
    };
  }
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
  service: string;
}

type WidgetState = "closed" | "lead-form" | "chatting";

export default function ChatWidget() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<ChatLocale>(() =>
    detectLocaleFromPath(pathname),
  );
  const t = CHAT_STRINGS[locale];

  useEffect(() => {
    setLocale(detectLocaleFromPath(pathname));
  }, [pathname]);

  const [state, setState] = useState<WidgetState>("closed");
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [chatError, setChatError] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Anti-abuse: a caller must solve Cloudflare Turnstile once, exchange it for a
  // signed session token, and send that token with every message. Bots cannot
  // cheaply solve Turnstile, so the server-side per-session/day cap holds.
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileResolver = useRef<((token: string | null) => void) | null>(
    null,
  );
  const sessionTokenRef = useRef<string | null>(null);

  // Load the Turnstile script once, only after the widget is opened.
  useEffect(() => {
    if (state === "closed" || !TURNSTILE_SITE_KEY) return;
    if (document.getElementById("cf-turnstile-script")) return;
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    s.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, [state]);

  const runTurnstile = (): Promise<string | null> =>
    new Promise((resolve) => {
      const ts = window.turnstile;
      if (!ts || !TURNSTILE_SITE_KEY || !turnstileContainer.current) {
        resolve(null);
        return;
      }
      turnstileResolver.current = resolve;
      const done = (token: string | null) => {
        turnstileResolver.current?.(token);
        turnstileResolver.current = null;
      };
      if (turnstileWidgetId.current === null) {
        turnstileWidgetId.current = ts.render(turnstileContainer.current, {
          sitekey: TURNSTILE_SITE_KEY,
          size: "invisible",
          callback: (token: string) => done(token),
          "error-callback": () => done(null),
          "expired-callback": () => done(null),
        });
      } else {
        ts.reset(turnstileWidgetId.current);
      }
      ts.execute(turnstileWidgetId.current);
      // Safety net so a stuck challenge never hangs the send.
      setTimeout(() => {
        if (turnstileResolver.current) done(null);
      }, 15000);
    });

  // Returns a valid session token, minting one (Turnstile -> exchange) if needed.
  const getSessionToken = async (): Promise<string | null> => {
    if (sessionTokenRef.current) return sessionTokenRef.current;
    const turnstileToken = await runTurnstile();
    if (!turnstileToken) return null;
    try {
      const res = await fetch("/api/chat/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstileToken }),
      });
      if (!res.ok) return null;
      const data = await res.json();
      sessionTokenRef.current = data.token || null;
      return sessionTokenRef.current;
    } catch {
      return null;
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when entering chat
  useEffect(() => {
    if (state === "chatting") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [state]);

  // Proactive chat bubble
  useEffect(() => {
    if (sessionStorage.getItem("rlg-chat-dismissed")) return;
    const timer = setTimeout(() => setShowBubble(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (state === "closed") {
      setShowBubble(false);
      setState("lead-form");
    } else {
      // Send transcript when closing if there was a conversation
      if (state === "chatting" && messages.length > 1) {
        sendLeadNotification(true);
      }
      setState("closed");
    }
  };

  const validateLeadForm = () => {
    const errors: Record<string, string> = {};
    if (!leadInfo.name.trim()) errors.name = t.nameRequired;
    if (!leadInfo.email.trim()) {
      errors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadInfo.email)) {
      errors.email = t.emailInvalid;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendLeadNotification = async (includeTranscript = false) => {
    try {
      const payload: Record<string, unknown> = { ...leadInfo };
      if (includeTranscript) payload.transcript = messages;
      if (attachments.length > 0) {
        payload.attachments = attachments.map((f) => ({
          name: f.name,
          type: f.type,
          size: `${(f.size / 1024).toFixed(1)} KB`,
        }));
      }
      payload.locale = locale;
      await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Silently fail — don't block chat UX for notification
    }
  };

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateLeadForm()) return;

    // Send initial lead notification
    sendLeadNotification(false);

    // Generate greeting
    const firstName = leadInfo.name.split(" ")[0];
    const greeting: Message = {
      role: "assistant",
      content: t.greeting(firstName, leadInfo.service || null),
    };

    setMessages([greeting]);
    setState("chatting");
  };

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);
    setChatError("");

    // Add placeholder for assistant response
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const doFetch = (token: string) =>
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          leadInfo,
          locale,
          sessionToken: token,
        }),
      });

    try {
      let token = await getSessionToken();
      if (!token) throw new Error("No session");
      let response = await doFetch(token);
      // Session expired mid-chat: mint a fresh one and retry once.
      if (response.status === 401) {
        sessionTokenRef.current = null;
        token = await getSessionToken();
        if (!token) throw new Error("No session");
        response = await doFetch(token);
      }

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No stream");

      const decoder = new TextDecoder();
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;

        // Update the last message with streamed content
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: fullContent,
          };
          return updated;
        });
      }
    } catch {
      setChatError(t.errorMessage);
      // Remove the empty assistant message
      setMessages((prev) => {
        if (prev[prev.length - 1]?.content === "") {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((f) => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/webp",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return f.size <= maxSize && allowedTypes.includes(f.type);
    });
    setAttachments((prev) => [...prev, ...validFiles].slice(0, 3));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLeadChange = (field: keyof LeadInfo, value: string) => {
    setLeadInfo((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const isOpen = state !== "closed";

  return (
    <div className="fixed bottom-6 lg:bottom-6 max-lg:bottom-[72px] right-4 sm:right-6 z-50">
      {/* Invisible Cloudflare Turnstile mount (renders nothing unless challenged) */}
      <div ref={turnstileContainer} />
      {/* Widget Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={t.headerTitle}
          aria-modal="true"
          className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-2 flex flex-col max-h-[min(520px,calc(100vh-160px))] max-lg:max-h-[min(520px,calc(100vh-180px))]"
        >
          {/* Header */}
          <div className="bg-[#1B2D4F] px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#C8A96E]/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-[#C8A96E]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm leading-tight truncate">
                  {t.headerTitle}
                </h3>
                <p className="text-gray-400 text-[11px] truncate">
                  {state === "chatting"
                    ? t.headerSubtitleOnline
                    : t.headerSubtitleAssistant}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <div
                role="group"
                aria-label={t.languageAriaLabel}
                className="flex items-center bg-white/10 rounded-full p-0.5"
              >
                {CHAT_LOCALES.map(({ code, label }) => {
                  const active = locale === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLocale(code)}
                      aria-pressed={active}
                      className={`px-2 py-0.5 text-[10px] font-semibold rounded-full transition-colors ${
                        active
                          ? "bg-[#C8A96E] text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleToggle}
                className="text-white/60 hover:text-white transition-colors p-2"
                aria-label={t.closeChatAria}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lead Form */}
          {state === "lead-form" && (
            <form
              onSubmit={handleLeadSubmit}
              className="p-4 space-y-3 overflow-y-auto"
            >
              <p className="text-sm text-gray-600 mb-1">{t.leadFormIntro}</p>

              <div>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  aria-label={t.nameAriaLabel}
                  autoComplete="name"
                  value={leadInfo.name}
                  onChange={(e) => handleLeadChange("name", e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] ${
                    formErrors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-[11px] mt-0.5">
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  aria-label={t.emailAriaLabel}
                  autoComplete="email"
                  value={leadInfo.email}
                  onChange={(e) => handleLeadChange("email", e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] ${
                    formErrors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-[11px] mt-0.5">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <input
                type="tel"
                placeholder={t.phonePlaceholder}
                aria-label={t.phoneAriaLabel}
                autoComplete="tel"
                value={leadInfo.phone}
                onChange={(e) => handleLeadChange("phone", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E]"
              />

              <select
                value={leadInfo.service}
                aria-label={t.serviceAriaLabel}
                onChange={(e) => handleLeadChange("service", e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] text-gray-600"
              >
                <option value="">{t.servicePlaceholder}</option>
                {t.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-[#C8A96E] hover:bg-[#b8994e] text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                {t.startChat}
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-1">
                <a
                  href={CONTACT.phoneHref}
                  className="text-[11px] text-gray-400 hover:text-[#1B2D4F] transition-colors"
                >
                  {t.preferToCall(CONTACT.phone)}
                </a>
              </div>
            </form>
          )}

          {/* Chat Messages */}
          {state === "chatting" && (
            <>
              <div
                aria-live="polite"
                aria-relevant="additions"
                className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#C8A96E] text-white rounded-br-md"
                          : "bg-gray-100 text-gray-800 rounded-bl-md"
                      }`}
                    >
                      {msg.content || (
                        <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}

                {chatError && (
                  <div className="text-center">
                    <p className="text-red-500 text-xs">{chatError}</p>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-4 pb-2 flex gap-2 shrink-0">
                <a
                  href={CONTACT.schedulingUrl}
                  target={
                    CONTACT.schedulingUrl.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    CONTACT.schedulingUrl.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex-1 text-center text-xs font-medium py-2.5 rounded-full border border-[#1B2D4F] text-[#1B2D4F] hover:bg-[#1B2D4F] hover:text-white transition-colors"
                >
                  {t.scheduleConsultation}
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="flex-1 text-center text-xs font-medium py-2.5 rounded-full bg-[#1B2D4F] text-white hover:bg-[#0F1923] transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t.callNow}
                </a>
              </div>

              {/* Attachments Preview */}
              {attachments.length > 0 && (
                <div className="px-3 pb-1 flex flex-wrap gap-1.5 shrink-0">
                  {attachments.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 rounded-full px-2.5 py-1 text-[11px] text-gray-600"
                    >
                      <Paperclip className="w-3 h-3" />
                      <span className="max-w-[100px] truncate">
                        {file.name}
                      </span>
                      <button
                        onClick={() => removeAttachment(i)}
                        className="text-gray-400 hover:text-red-500 ml-0.5"
                        aria-label={t.removeAttachment(file.name)}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="border-t border-gray-100 px-3 py-2.5 shrink-0">
                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
                    multiple
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isStreaming || attachments.length >= 3}
                    className="w-11 h-11 rounded-full text-gray-400 hover:text-[#1B2D4F] hover:bg-gray-100 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                    aria-label={t.attachFile}
                    title={t.attachFileTitle}
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.inputPlaceholder}
                    aria-label={t.inputAriaLabel}
                    disabled={isStreaming}
                    className="flex-1 px-3 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isStreaming}
                    className="w-11 h-11 rounded-full bg-[#C8A96E] text-white flex items-center justify-center hover:bg-[#b8994e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                    aria-label={t.sendMessage}
                  >
                    {isStreaming ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Proactive Chat Bubble */}
      {showBubble && !isOpen && (
        <div className="fixed bottom-24 max-lg:bottom-[96px] right-4 bg-white rounded-xl shadow-lg p-3 max-w-[220px] z-50 animate-fade-in">
          <button
            onClick={() => {
              setShowBubble(false);
              sessionStorage.setItem("rlg-chat-dismissed", "1");
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs"
            aria-label={t.dismiss}
          >
            x
          </button>
          <p className="text-sm text-text">{t.proactiveBubble}</p>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={handleToggle}
        className="w-14 h-14 rounded-full bg-[#C8A96E] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
        aria-label={isOpen ? t.closeChatAria : t.openChat}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
