import { Router } from 'express';
import type { Lead, LeadMeta } from '../types/leads.js';
import { sendEmailViaSendGrid, sendSlackNotification } from '../services/mail.js';

const router = Router();

function sanitize(s: unknown): string | undefined {
  if (typeof s !== 'string') return undefined;
  const trimmed = s.trim();
  return trimmed.length ? trimmed : undefined;
}

function toBool(v: unknown): boolean | undefined {
  if (v === true || v === 'true' || v === 'on' || v === '1') return true;
  if (v === false || v === 'false' || v === '0') return false;
  return undefined;
}

function toInt(v: unknown): number | undefined {
  const n = typeof v === 'number' ? v : parseInt(String(v ?? ''), 10);
  return Number.isFinite(n) ? n : undefined;
}

function validateLead(input: any): { ok: true; lead: Lead } | { ok: false; error: string } {
  const lead: Lead = {
    airline: sanitize(input.airline) || '',
    contactName: sanitize(input.contactName) || '',
    contactEmail: sanitize(input.contactEmail) || '',
    phone: sanitize(input.phone),

    origin: sanitize(input.origin) || '',
    destination: sanitize(input.destination) || '',
    startDate: sanitize(input.startDate),
    endDate: sanitize(input.endDate),

    pax: toInt(input.pax),
    cargo: toBool(input.cargo),
    aircraftPreference: sanitize(input.aircraftPreference),
    notes: sanitize(input.notes),

    website: sanitize(input.website), // honeypot
  };

  if (lead.website) return { ok: false, error: 'Spam detected' };
  if (!lead.airline) return { ok: false, error: 'airline is required' };
  if (!lead.contactName) return { ok: false, error: 'contactName is required' };
  if (!lead.contactEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.contactEmail))
    return { ok: false, error: 'valid contactEmail is required' };
  if (!lead.origin) return { ok: false, error: 'origin is required' };
  if (!lead.destination) return { ok: false, error: 'destination is required' };

  return { ok: true, lead };
}

function subjectFor(lead: Lead, meta: LeadMeta): string {
  const d = new Date(meta.receivedAtIso);
  const pad = (n: number) => n.toString().padStart(2, '0');
  const stamp = `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
  const code = meta.id.slice(-6).toUpperCase();
  const window = lead.startDate ? lead.startDate : '';
  return `[ACMI LEAD #${stamp}-${code}] ${lead.airline} ${lead.origin}→${lead.destination} ${window}`.trim();
}

function bodyText(lead: Lead, meta: LeadMeta): string {
  const fmtDate = (iso?: string) => {
    if (!iso) return '-';
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch {
      return iso;
    }
  };

  const summary = 
`New ACMI Lead

Airline:        ${lead.airline}
Contact:        ${lead.contactName}  |  ${lead.contactEmail}${lead.phone ? `  |  ${lead.phone}` : ''}
Route:          ${lead.origin} → ${lead.destination}
Dates:          ${fmtDate(lead.startDate)} – ${fmtDate(lead.endDate)}
PAX:            ${lead.pax ?? '-'}   Cargo: ${lead.cargo === true ? 'Yes' : lead.cargo === false ? 'No' : '-'}
Aircraft:       ${lead.aircraftPreference ?? '-'}

Notes:
${lead.notes ?? '-'}

Meta
ID:             ${meta.id}
Received:       ${fmtDate(meta.receivedAtIso)} ${new Date(meta.receivedAtIso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} UTC
IP:             ${meta.ip ?? '-'}
UA:             ${meta.userAgent ?? '-'}
`;

  const machine = JSON.stringify({ id: meta.id, receivedAt: meta.receivedAtIso, lead }, null, 2);
  return `${summary}\n---\nJSON\n${machine}\n`;
}

router.post('/', async (req, res) => {
  const parsed = validateLead(req.body);
  if (!parsed.ok) return res.status(400).json({ ok: false, error: parsed.error });

  const meta: LeadMeta = {
    id: crypto.randomUUID(),
    receivedAtIso: new Date().toISOString(),
    ip: req.headers['x-forwarded-for']?.toString().split(',')[0]?.trim() || req.socket.remoteAddress || null,
    userAgent: req.headers['user-agent']?.toString() || null,
  };

  const subject = subjectFor(parsed.lead, meta);
  const text = bodyText(parsed.lead, meta);

  try {
    await sendEmailViaSendGrid({ subject, text });
    await sendSlackNotification(`New ACMI lead: ${parsed.lead.airline} ${parsed.lead.origin}→${parsed.lead.destination} (${meta.id})`);
    return res.json({ ok: true, id: meta.id });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: 'Failed to send notification', detail: err?.message });
  }
});

export default router;
