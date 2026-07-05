import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
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

    console.log("Resend response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend error:", error);

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}