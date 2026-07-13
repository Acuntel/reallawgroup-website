import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

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

// forwardToIntake mirrors a contact submission into the firm's StolenMule
// Intake queue, server-to-server (no browser CORS). It's a no-op unless all
// three env vars are set, so the site works standalone until the firm is
// connected. Failures are swallowed, the lead still emails via Resend, and a
// StolenMule outage must never break the public contact form.
//
//   STOLENMULE_INTAKE_URL  e.g. https://app.stolenmule.com
//   STOLENMULE_FIRM_SLUG   the firm's tenant slug (e.g. reallaw)
//   STOLENMULE_FORM_SLUG   the connected intake form slug (e.g. website-contact)
async function forwardToIntake(data: Record<string, string>) {
  const base = process.env.STOLENMULE_INTAKE_URL;
  const firm = process.env.STOLENMULE_FIRM_SLUG;
  const form = process.env.STOLENMULE_FORM_SLUG;
  if (!base || !firm || !form) return; // not connected, skip silently
  try {
    await fetch(`${base}/api/public/intake/${firm}/${form}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
  } catch (err) {
    console.error("StolenMule intake forward failed:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    // Sends email (Resend) + forwards to intake, so gate it against bot spam.
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

    const body = await req.json();
    const { name, email, phone, service, message, turnstileToken } = body;

    // Bot gate: enforce Turnstile once the secret is configured. Graceful before
    // that (Origin + rate limit only) so the live contact form is never broken
    // by the rollout - it hardens automatically when the keys are added.
    if (process.env.TURNSTILE_SECRET_KEY) {
      const ok = await verifyTurnstile(turnstileToken, ip);
      if (!ok) {
        return NextResponse.json(
          { error: "Verification failed. Please refresh and try again." },
          { status: 403 },
        );
      }
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Mirror the lead into StolenMule Intake (no-op unless connected via env).
    // Done before email so a connected firm captures the lead even if Resend
    // is down; it never throws.
    await forwardToIntake(
      Object.fromEntries(
        Object.entries({ name, email, phone, service, message }).filter(
          ([, v]) => typeof v === "string" && v.trim() !== "",
        ),
      ) as Record<string, string>,
    );

    // Build email content
    const emailBody = [
      `New Contact Form Submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    // Send via Resend (recommended) or fallback to nodemailer
    // Option 1: Resend (set RESEND_API_KEY env var)
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "REAL Law Group Website <noreply@reallawgroup.com>",
          to: ["info@reallawgroup.com"],
          reply_to: email,
          subject: `New Contact: ${name} - ${service || "General Inquiry"}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend error:", errorData);
        return NextResponse.json(
          { error: "Failed to send message. Please try again." },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true });
    }

    // Option 2: Log to console in development (fallback)
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(emailBody);
    console.log("===============================");
    console.warn(
      "No RESEND_API_KEY set. Email was logged but not sent. Set RESEND_API_KEY to enable email delivery.",
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
