import { useRef, useState } from "react";
import { postJSON } from "../../utils/api";

type Result = { ok: boolean; id?: string; error?: string };

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [formKey, setFormKey] = useState(0); // remount key
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Read values immediately
    const formEl = formRef.current ?? e.currentTarget;
    const fd = new FormData(formEl);
    const payload = Object.fromEntries(fd.entries());

    setLoading(true);
    setResult(null);

    try {
      const res = await postJSON<Result>("/api/leads", payload);
      setResult(res);
      if (res.ok) {
        // Remount form to clear inputs. No reset() calls.
        setFormKey((k) => k + 1);
      }
    } catch (err: any) {
      setResult({ ok: false, error: err?.message || "Request failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form key={formKey} ref={formRef} onSubmit={onSubmit} className="space-y-4 max-w-xl">
      {/* Honeypot */}
      <div className="hidden">
        <label>Website<input name="website" type="text" autoComplete="off" /></label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Airline*</label>
          <input name="airline" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Contact name*</label>
          <input name="contactName" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Contact email*</label>
          <input name="contactEmail" type="email" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Origin*</label>
          <input name="origin" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Destination*</label>
          <input name="destination" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Start date</label>
          <input name="startDate" type="date" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">End date</label>
          <input name="endDate" type="date" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Passengers</label>
          <input name="pax" type="number" min="0" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="flex items-center gap-2">
          <input name="cargo" id="cargo" type="checkbox" className="h-4 w-4" />
          <label htmlFor="cargo" className="text-sm font-medium">Cargo</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Aircraft preference</label>
        <input name="aircraftPreference" className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea name="notes" rows={4} className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center px-4 py-2 rounded bg-black text-white disabled:opacity-50"
      >
        {loading ? "Sending…" : "Request ACMI"}
      </button>

      {result && (
        <p className={`text-sm ${result.ok ? "text-green-600" : "text-red-600"}`}>
          {result.ok ? "Thanks. We’ll contact you shortly." : `Error: ${result.error}`}
        </p>
      )}
    </form>
  );
}
