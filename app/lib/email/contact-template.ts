export function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function getContactEmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1120;padding:32px;color:#e5e7eb;">
      <div style="max-width:680px;margin:0 auto;background:#111827;border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;">
        <div style="padding:28px;background:linear-gradient(135deg,#4f46e5,#9333ea,#ec4899);">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.8);">
            Portfolio Contact
          </p>
          <h2 style="margin:0;color:#fff;">New message received</h2>
        </div>

        <div style="padding:24px;">
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <div style="margin-top:20px;padding:18px;border-radius:16px;background:#0f172a;border:1px solid rgba(255,255,255,0.08);">
            <p style="margin-top:0;"><strong>Message:</strong></p>
            <div style="line-height:1.8;">${safeMessage}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}