'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageCircle, X, Send, Phone, ArrowRight, Loader2 } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
  service: string;
}

type WidgetState = 'closed' | 'lead-form' | 'chatting';

const serviceOptions = [
  'Real Estate Transaction',
  'Business Law',
  'Estate Planning',
  'Other / Not Sure',
];

export default function ChatWidget() {
  const [state, setState] = useState<WidgetState>('closed');
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [chatError, setChatError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when entering chat
  useEffect(() => {
    if (state === 'chatting') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [state]);

  const handleToggle = () => {
    if (state === 'closed') {
      setState('lead-form');
    } else {
      // Send transcript when closing if there was a conversation
      if (state === 'chatting' && messages.length > 1) {
        sendLeadNotification(true);
      }
      setState('closed');
    }
  };

  const validateLeadForm = () => {
    const errors: Record<string, string> = {};
    if (!leadInfo.name.trim()) errors.name = 'Name is required';
    if (!leadInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadInfo.email)) {
      errors.email = 'Enter a valid email';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendLeadNotification = async (includeTranscript = false) => {
    try {
      await fetch('/api/chat/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadInfo,
          ...(includeTranscript ? { transcript: messages } : {}),
        }),
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
    const firstName = leadInfo.name.split(' ')[0];
    const serviceText = leadInfo.service
      ? ` I see you're interested in ${leadInfo.service.toLowerCase()}.`
      : '';

    const greeting: Message = {
      role: 'assistant',
      content: `Hi ${firstName}! 👋 I'm the REAL Law Group virtual assistant.${serviceText} How can I help you today?`,
    };

    setMessages([greeting]);
    setState('chatting');
  };

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsStreaming(true);
    setChatError('');

    // Add placeholder for assistant response
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          leadInfo,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No stream');

      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;

        // Update the last message with streamed content
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: 'assistant',
            content: fullContent,
          };
          return updated;
        });
      }
    } catch {
      setChatError('Something went wrong. Please try again or call us directly.');
      // Remove the empty assistant message
      setMessages((prev) => {
        if (prev[prev.length - 1]?.content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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

  return (
    <div className="fixed bottom-6 lg:bottom-6 max-lg:bottom-[72px] right-6 z-50">
      {/* Widget Panel */}
      {state !== 'closed' && (
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-2 flex flex-col max-h-[min(520px,calc(100vh-120px))]">
          {/* Header */}
          <div className="bg-[#1B2D4F] px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C8A96E]/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#C8A96E]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">
                  REAL Law Group
                </h3>
                <p className="text-gray-400 text-[10px]">
                  {state === 'chatting' ? 'Online • Typically replies instantly' : 'Virtual Assistant'}
                </p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Lead Form */}
          {state === 'lead-form' && (
            <form onSubmit={handleLeadSubmit} className="p-4 space-y-3 overflow-y-auto">
              <p className="text-sm text-gray-600 mb-1">
                Quick intro so we can help you better:
              </p>

              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={leadInfo.name}
                  onChange={(e) => handleLeadChange('name', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] ${
                    formErrors.name ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-[11px] mt-0.5">{formErrors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={leadInfo.email}
                  onChange={(e) => handleLeadChange('email', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] ${
                    formErrors.email ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-[11px] mt-0.5">{formErrors.email}</p>
                )}
              </div>

              <input
                type="tel"
                placeholder="Phone (optional)"
                value={leadInfo.phone}
                onChange={(e) => handleLeadChange('phone', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E]"
              />

              <select
                value={leadInfo.service}
                onChange={(e) => handleLeadChange('service', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] text-gray-600"
              >
                <option value="">What can we help with?</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-[#C8A96E] hover:bg-[#b8994e] text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                Start Chat
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-1">
                <a
                  href={CONTACT.phoneHref}
                  className="text-[11px] text-gray-400 hover:text-[#1B2D4F] transition-colors"
                >
                  Prefer to talk? Call {CONTACT.phone}
                </a>
              </div>
            </form>
          )}

          {/* Chat Messages */}
          {state === 'chatting' && (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#C8A96E] text-white rounded-br-md'
                          : 'bg-gray-100 text-gray-800 rounded-bl-md'
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
                  href="/contact"
                  className="flex-1 text-center text-[11px] font-medium py-1.5 rounded-full border border-[#1B2D4F] text-[#1B2D4F] hover:bg-[#1B2D4F] hover:text-white transition-colors"
                >
                  Schedule Consultation
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="flex-1 text-center text-[11px] font-medium py-1.5 rounded-full bg-[#1B2D4F] text-white hover:bg-[#0F1923] transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
              </div>

              {/* Input */}
              <div className="border-t border-gray-100 px-3 py-2.5 shrink-0">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your question..."
                    disabled={isStreaming}
                    className="flex-1 px-3 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]/50 focus:border-[#C8A96E] disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isStreaming}
                    className="w-9 h-9 rounded-full bg-[#C8A96E] text-white flex items-center justify-center hover:bg-[#b8994e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                    aria-label="Send message"
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

      {/* FAB Button */}
      <button
        onClick={handleToggle}
        className="w-14 h-14 rounded-full bg-[#C8A96E] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
        aria-label={state === 'closed' ? 'Open chat' : 'Close chat'}
      >
        {state !== 'closed' ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
