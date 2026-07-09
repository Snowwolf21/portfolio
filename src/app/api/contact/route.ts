import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Email service is unconfigured." }), 
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    // 💡 Added strict validation to prevent empty payloads
    if (!name.trim() || !email.trim() || !message.trim()) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }), 
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "snowwolf0231@gmail.com",
      subject: "New Portfolio Message",
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }), 
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    // 🔑 Safely handle the 'unknown' catch type for TypeScript compilation
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    
    return new Response(
      JSON.stringify({ error: errorMessage }), 
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}