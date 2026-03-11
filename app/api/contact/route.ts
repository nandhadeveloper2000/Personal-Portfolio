import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string; // honeypot
  formStartedAt?: number;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(phone);
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validatePayload(body: ContactBody) {
  const errors: string[] = [];

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const phone = body.phone?.trim() || "";
  const subject = body.subject?.trim() || "";
  const message = body.message?.trim() || "";
  const company = body.company?.trim() || "";
  const formStartedAt = body.formStartedAt;

  if (company) {
    errors.push("Spam detected.");
  }

  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!phone) errors.push("Mobile number is required.");
  if (!subject) errors.push("Subject is required.");
  if (!message) errors.push("Message is required.");

  if (name.length < 2 || name.length > 80) {
    errors.push("Name must be between 2 and 80 characters.");
  }

  if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!isValidPhone(phone)) {
    errors.push("Please enter a valid mobile number.");
  }

  if (subject.length < 3 || subject.length > 150) {
    errors.push("Subject must be between 3 and 150 characters.");
  }

  if (message.length < 10 || message.length > 3000) {
    errors.push("Message must be between 10 and 3000 characters.");
  }

  if (typeof formStartedAt !== "number") {
    errors.push("Invalid form submission timestamp.");
  } else {
    const secondsTaken = (Date.now() - formStartedAt) / 1000;

    if (secondsTaken < 3) {
      errors.push("Form submitted too quickly.");
    }

    if (secondsTaken > 60 * 60) {
      errors.push("Form expired. Please refresh and try again.");
    }
  }

  return {
    errors,
    cleanData: {
      name,
      email,
      phone,
      subject,
      message,
    },
  };
}

function getEmailTemplate({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const replyMailTo = `mailto:${safeEmail}`;
  const callLink = `tel:${safePhone.replace(/\s+/g, "")}`;

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Portfolio Contact Message</title>
    </head>
    <body style="margin:0; padding:0; background-color:#050816; font-family:Arial, Helvetica, sans-serif; color:#e5e7eb;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050816; padding:32px 14px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px; background:#0b1220; border:1px solid #1e293b; border-radius:28px; overflow:hidden;">

              <tr>
                <td style="padding:0;">
                  <div style="background:linear-gradient(135deg,#4f46e5 0%, #9333ea 55%, #ec4899 100%); padding:34px 30px;">
                    <p style="margin:0 0 8px; font-size:12px; letter-spacing:1.8px; text-transform:uppercase; color:rgba(255,255,255,0.8); font-weight:700;">
                      Portfolio Contact
                    </p>
                    <h1 style="margin:0; font-size:30px; line-height:1.2; color:#ffffff; font-weight:700;">
                      New message received
                    </h1>
                    <p style="margin:12px 0 0; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.88);">
                      A visitor submitted your portfolio contact form.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:28px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding:0 0 16px;">
                        <div style="background:#111827; border:1px solid #1f2937; border-radius:18px; padding:18px 20px;">
                          <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#94a3b8;">Name</p>
                          <p style="margin:0; font-size:16px; color:#ffffff; font-weight:700;">${safeName}</p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 0 16px;">
                        <div style="background:#111827; border:1px solid #1f2937; border-radius:18px; padding:18px 20px;">
                          <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#94a3b8;">Email</p>
                          <p style="margin:0; font-size:16px; color:#60a5fa; font-weight:700;">
                            <a href="${replyMailTo}" style="color:#60a5fa; text-decoration:none;">${safeEmail}</a>
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 0 16px;">
                        <div style="background:#111827; border:1px solid #1f2937; border-radius:18px; padding:18px 20px;">
                          <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#94a3b8;">Mobile Number</p>
                          <p style="margin:0; font-size:16px; color:#ffffff; font-weight:700;">
                            <a href="${callLink}" style="color:#ffffff; text-decoration:none;">${safePhone}</a>
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 0 16px;">
                        <div style="background:#111827; border:1px solid #1f2937; border-radius:18px; padding:18px 20px;">
                          <p style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#94a3b8;">Subject</p>
                          <p style="margin:0; font-size:16px; color:#ffffff; font-weight:700;">${safeSubject}</p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0;">
                        <div style="background:#111827; border:1px solid #1f2937; border-radius:18px; padding:20px;">
                          <p style="margin:0 0 10px; font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#94a3b8;">Message</p>
                          <div style="font-size:15px; line-height:1.85; color:#e5e7eb;">
                            ${safeMessage}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px;">
                    <tr>
                      <td style="padding-right:10px;">
                        <a href="${replyMailTo}" style="display:inline-block; padding:12px 18px; border-radius:12px; background:#4f46e5; color:#ffffff; text-decoration:none; font-size:14px; font-weight:700;">
                          Reply by Email
                        </a>
                      </td>
                      <td>
                        <a href="${callLink}" style="display:inline-block; padding:12px 18px; border-radius:12px; background:#111827; border:1px solid #334155; color:#ffffff; text-decoration:none; font-size:14px; font-weight:700;">
                          Call Contact
                        </a>
                      </td>
                    </tr>
                  </table>

                  <div style="margin-top:24px; padding-top:20px; border-top:1px solid #1f2937;">
                    <p style="margin:0; font-size:13px; line-height:1.7; color:#94a3b8;">
                      This message was sent from your portfolio contact form. You can reply directly to connect with
                      <span style="color:#ffffff; font-weight:700;"> ${safeName}</span>.
                    </p>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_RECEIVER_EMAIL) {
      return NextResponse.json(
        { message: "Receiver email is not configured." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ContactBody;
    const { errors, cleanData } = validatePayload(body);

    if (errors.length > 0) {
      return NextResponse.json(
        { message: errors[0], errors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = cleanData;

    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact • ${subject}`,
      html: getEmailTemplate({ name, email, phone, subject, message }),
      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      return NextResponse.json(
        { message: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the message.",
      },
      { status: 500 }
    );
  }
}