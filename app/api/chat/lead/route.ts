import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifySessionToken } from "@/lib/session-token";

// Short AI summary of the chat so the team can scan the lead without reading
// the whole transcript. Best-effort: any failure (no key, API error) returns
// null and the email still goes out with the full transcript.
async function summarizeTranscript(
  transcript: { role: string; content: string }[],
  lead: { name: string; phone?: string; service?: string },
): Promise<string | null> {
  const apiKey =
    process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY_BACKUP;
  if (!apiKey) return null;
  try {
    const convo = transcript
      .map(
        (m) =>
          `${m.role === "user" ? "Visitor" : "Assistant"}: ${typeof m.content === "string" ? m.content : ""}`,
      )
      .join("\n")
      .slice(0, 12000);
    const client = new Anthropic({ apiKey });
    const res = await client.messages.create({
      model: process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system:
        "You summarize website chatbot conversations for a law firm's intake team. Reply with 3-5 plain-text bullet points (each starting with '- '): what the visitor needs, key facts they shared (property, deal type, timeline, urgency), and the suggested follow-up. No preamble, no markdown headers.",
      messages: [
        {
          role: "user",
          content: `Visitor: ${lead.name}${lead.service ? ` (interested in: ${lead.service})` : ""}\n\nConversation:\n${convo}`,
        },
      ],
    });
    const text = res.content
      .filter((b) => b.type === "text")
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();
    return text || null;
  } catch (err) {
    console.error("Lead summary generation failed:", err);
    return null;
  }
}

const ALLOWED_HOSTS = ["reallawgroup.com", "www.reallawgroup.com", "localhost"];
function isAllowedOrigin(req: NextRequest): boolean {
  const src = req.headers.get("origin") || req.headers.get("referer") || "";
  if (!src) return false;
  try {
    const host = new URL(src).hostname;
    return ALLOWED_HOSTS.includes(host) || host.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // This endpoint sends email (Resend). Gate it like the chat endpoint so it
    // cannot be hammered to spam the firm's inbox / sending reputation.
    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(ip, 5)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      phone,
      service,
      transcript,
      attachments,
      sessionToken,
    } = await req.json();

    // When Turnstile is configured, require the verified session token; else the
    // Origin gate above is the bound (graceful mode, same as /api/chat).
    if (process.env.TURNSTILE_SECRET_KEY && !verifySessionToken(sessionToken)) {
      return NextResponse.json(
        { error: "Session expired. Please refresh." },
        { status: 401 },
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const isFollowUp = Array.isArray(transcript) && transcript.length > 0;

    // Summarize the conversation for the follow-up email (best-effort).
    const summary = isFollowUp
      ? await summarizeTranscript(transcript, { name, phone, service })
      : null;

    const emailBody = [
      isFollowUp
        ? "🤖 AI Chatbot Lead — Conversation Complete"
        : "🤖 New AI Chatbot Lead",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Interested In: ${service}` : null,
      "",
      ...(summary ? ["--- Summary ---", "", summary, ""] : []),
      ...(isFollowUp
        ? [
            "--- Conversation Transcript ---",
            "",
            ...transcript.map(
              (msg: { role: string; content: string }) =>
                `${msg.role === "user" ? name : "AI Assistant"}: ${msg.content}`,
            ),
          ]
        : [
            "(User just started chatting — transcript will follow when conversation ends.)",
          ]),
      ...(attachments && attachments.length > 0
        ? [
            "",
            "--- Attachments ---",
            ...attachments.map(
              (a: { name: string; type: string; size: string }) =>
                `${a.name} (${a.type}, ${a.size})`,
            ),
            "",
            "Note: Files were attached in the chat widget. Follow up with the client to receive the actual files.",
          ]
        : []),
    ]
      .filter(Boolean)
      .join("\n");

    // Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "REAL Law Group Website <noreply@reallawgroup.com>",
          to: [
            "info@reallawgroup.com",
            "vincent@reallawgroup.com",
            "sarah@reallawgroup.com",
          ],
          reply_to: email,
          subject: isFollowUp
            ? `AI Chat Complete: ${name} — ${service || "General"}`
            : `New AI Chat Lead: ${name} — ${service || "General"}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.json());
        return NextResponse.json(
          { error: "Failed to send lead notification." },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: log to console
    console.log("=== AI CHATBOT LEAD ===");
    console.log(emailBody);
    console.log("=======================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead notification error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
