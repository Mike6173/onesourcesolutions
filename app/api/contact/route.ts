import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

function sanitize(str: unknown): string {
  return String(str ?? "").trim().replace(/[<>]/g, "");
}

function validate(data: ContactPayload): string | null {
  if (!data.name || data.name.length < 2) return "Name is required.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Valid email is required.";
  if (!data.phone || data.phone.replace(/\D/g, "").length < 10) return "Valid phone number is required.";
  if (!data.message || data.message.length < 10) return "Message must be at least 10 characters.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload: ContactPayload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      service: sanitize(body.service),
      message: sanitize(body.message),
    };

    const error = validate(payload);
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    // Log submission (replace with email service integration like Resend or SendGrid)
    console.log("📩 New Contact Form Submission:", {
      to: BUSINESS.email,
      from: payload.email,
      name: payload.name,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email provider
    // Example with Resend:
    // await resend.emails.send({
    //   from: "website@one-source-solutions.com",
    //   to: BUSINESS.email,
    //   subject: `New Estimate Request from ${payload.name}`,
    //   html: `<p><b>Name:</b> ${payload.name}</p><p><b>Email:</b> ${payload.email}</p>...`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
