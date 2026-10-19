import { Resend } from "resend";

const MAX_NAME = 80;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 3000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function userError(message: string, status: number) {
  return Response.json({ message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return userError("Send the form as JSON.", 415);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return userError("The request could not be read. Please try again.", 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return userError("Please check the form fields and try again.", 400);
  }

  if (payload.website !== undefined && typeof payload.website !== "string") {
    return userError("Please check the form fields and try again.", 400);
  }
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    // Honeypot submissions are accepted without sending email.
    return Response.json({ message: "Your message has been sent." });
  }

  if (typeof payload.name !== "string" || typeof payload.email !== "string" || typeof payload.message !== "string") {
    return userError("Name, email, and message are required.", 400);
  }

  const name = payload.name.trim().replace(/\s+/g, " ");
  const email = payload.email.trim().toLowerCase();
  const message = payload.message.trim();

  if (!name || name.length < 2 || name.length > MAX_NAME) {
    return userError("Name must be between 2 and 80 characters.", 400);
  }
  if (!email || email.length > MAX_EMAIL || !emailPattern.test(email)) {
    return userError("Enter a valid email address.", 400);
  }
  if (!message || message.length < 10 || message.length > MAX_MESSAGE) {
    return userError("Message must be between 10 and 3,000 characters.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    console.error("Contact email is not configured. Set RESEND_API_KEY, CONTACT_EMAIL, and FROM_EMAIL.");
    return userError("The contact form is temporarily unavailable. Please try again later.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend rejected a portfolio contact email:", error.name ?? "provider error");
      return userError("Your message could not be sent right now. Please try again later.", 502);
    }

    return Response.json({ message: "Your message has been sent." });
  } catch (error) {
    console.error(
      "Portfolio contact email request failed:",
      error instanceof Error ? error.name : "unknown error",
    );
    return userError("Your message could not be sent right now. Please try again later.", 502);
  }
}
