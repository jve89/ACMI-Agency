// server/services/mail.ts
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const LEAD_NOTIFY_FROM = process.env.LEAD_NOTIFY_FROM || "";
const LEAD_NOTIFY_TO   = process.env.LEAD_NOTIFY_TO   || "";
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";

type MailPayload = {
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmailViaSendGrid({ subject, text, html }: MailPayload) {
  if (!SENDGRID_API_KEY || !LEAD_NOTIFY_FROM || !LEAD_NOTIFY_TO) {
    throw new Error("Email not configured: require SENDGRID_API_KEY, LEAD_NOTIFY_FROM, LEAD_NOTIFY_TO");
  }

  const body = {
    personalizations: [{ to: [{ email: LEAD_NOTIFY_TO }] }],
    from: { email: LEAD_NOTIFY_FROM, name: "ACMI Lead Bot" },
    subject,
    content: [{ type: "text/plain", value: text }, ...(html ? [{ type: "text/html", value: html }] : [])],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`SendGrid error ${res.status}: ${msg}`);
  }
}

export async function sendSlackNotification(text: string) {
  if (!SLACK_WEBHOOK_URL) return;
  await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  }).catch(() => {});
}
