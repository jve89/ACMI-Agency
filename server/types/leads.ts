// server/types/leads.ts
export type Lead = {
  airline: string;
  contactName: string;
  contactEmail: string;
  phone?: string;

  origin: string;
  destination: string;
  startDate?: string; // YYYY-MM-DD
  endDate?: string;   // YYYY-MM-DD

  pax?: number;
  cargo?: boolean;
  aircraftPreference?: string;
  notes?: string;

  // spam honeypot
  website?: string;
};

export type LeadMeta = {
  id: string;              // generated server-side
  receivedAtIso: string;   // server time
  ip?: string | null;
  userAgent?: string | null;
};
