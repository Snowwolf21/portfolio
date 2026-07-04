import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { message?: string };
  const message = body.message?.trim();

  return NextResponse.json({
    reply: message
      ? `I can help prioritize stock work from your dashboard data. You asked: ${message}`
      : "Ask about stock risks, pending orders, or reorder priorities.",
  });
}
