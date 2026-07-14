import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, honey } = await req.json();

    // 1. Honeypot Anti-Spam Check
    if (honey) {
      console.warn("Honeypot bot submission detected and dropped silently.");
      return NextResponse.json({ success: true, message: "Message sent." });
    }

    // 2. Server-side Input Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // 3. Dynamic Subject & Reply-To Configuration
    const emailSubject = subject && subject.trim()
      ? `Portfolio Contact: ${subject.trim()}`
      : `New Portfolio Message from ${name.trim()}`;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "snowwolf0231@gmail.com",
      replyTo: email.trim(),
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #4f46e5; margin-top: 0;">New Contact Form Message</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          ${subject && subject.trim() ? `<p><strong>Subject:</strong> ${subject.trim()}</p>` : ""}
          <p><strong>Message:</strong></p>
          <blockquote style="margin: 0; padding-left: 15px; border-left: 4px solid #4f46e5; color: #555; font-style: italic;">
            ${message.trim().replace(/\n/g, "<br />")}
          </blockquote>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error("Resend API routing error:", error);

    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}