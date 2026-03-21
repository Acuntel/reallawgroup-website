import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, transcript } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const isFollowUp = !!transcript;

    const emailBody = [
      isFollowUp ? '🤖 AI Chatbot Lead — Conversation Complete' : '🤖 New AI Chatbot Lead',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Interested In: ${service}` : null,
      '',
      ...(isFollowUp
        ? [
            '--- Conversation Transcript ---',
            '',
            ...transcript.map(
              (msg: { role: string; content: string }) =>
                `${msg.role === 'user' ? name : 'AI Assistant'}: ${msg.content}`
            ),
          ]
        : ['(User just started chatting — transcript will follow when conversation ends.)']),
    ]
      .filter(Boolean)
      .join('\n');

    // Send via Resend if configured
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'REAL Law Group Website <noreply@reallawgroup.com>',
          to: ['info@reallawgroup.com'],
          reply_to: email,
          subject: isFollowUp
            ? `AI Chat Complete: ${name} — ${service || 'General'}`
            : `New AI Chat Lead: ${name} — ${service || 'General'}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        console.error('Resend error:', await res.json());
        return NextResponse.json(
          { error: 'Failed to send lead notification.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: log to console
    console.log('=== AI CHATBOT LEAD ===');
    console.log(emailBody);
    console.log('=======================');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead notification error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
