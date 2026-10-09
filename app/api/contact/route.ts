import { NextResponse } from "next/server";

type ContactFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

function isContactFields(value: unknown): value is ContactFields {
  if (!value || typeof value !== "object") return false;

  const fields = value as Record<string, unknown>;
  return ["name", "email", "phone", "message", "website"].every(
    (field) => typeof fields[field] === "string",
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "The submitted form data is invalid." }, { status: 400 });
  }

  if (!isContactFields(payload)) {
    return NextResponse.json({ error: "Please complete the contact form correctly." }, { status: 400 });
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const message = payload.message.trim();

  if (
    payload.website.trim() ||
    !name ||
    name.length > 160 ||
    !email ||
    email.length > 320 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !phone ||
    phone.length > 50 ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Please check the details you entered and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !recipient) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email info@juvosaltd.com." },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message || "(no message provided)"}`,
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again or email info@juvosaltd.com." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again or email info@juvosaltd.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thank you. Your message has been sent." });
}
