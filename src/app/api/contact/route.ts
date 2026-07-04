import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  topic?: string;
  message?: string;
  company_website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field.
  if (payload.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const organization = payload.organization?.trim() ?? "";
  const topic = payload.topic?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || organization.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
  }

  // TODO: connect a real delivery backend. This handler currently only logs and
  // acknowledges receipt. Wire in one of the following before launch:
  //
  // Resend (recommended, simple API, generous free tier):
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Zais Analytics <contact@zaisanalytics.com>",
  //     to: "info@zaisanalytics.com",
  //     replyTo: email,
  //     subject: `New inquiry: ${topic || "General"} — ${name}`,
  //     text: `${name} (${organization || "no organization given"}) <${email}>\n\n${message}`,
  //   });
  //
  // Formspree (no backend code required, swap the form action instead):
  //   Point the <form> action at https://formspree.io/f/your-form-id and this
  //   route becomes unnecessary.
  //
  // Amazon SES:
  //   Use the AWS SDK (@aws-sdk/client-sesv2) SendEmailCommand with credentials
  //   from environment variables, never hardcoded.
  //
  // Whichever backend is used, keep the honeypot and validation above in place.

  console.info("[contact] inquiry received", { name, email, organization, topic });

  return NextResponse.json({ ok: true });
}
