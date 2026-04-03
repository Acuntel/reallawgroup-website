import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
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

    const { name, email, phone, service, transcript, attachments } =
      await req.json();

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

    const isFollowUp = !!transcript;

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
          from: "Kryder Law Group Website <noreply@kryderlaw.com>",
          to: ["ljimenez@kryderlaw.com"],
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
