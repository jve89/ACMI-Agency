// client/src/components/sections/Metrics.tsx
export default function Metrics() {
  const kpis = [
    { label: "Avg. response", value: "≤ 24h", note: "first matching option" },
    { label: "Time to shortlist", value: "2h", note: "typical initial options" },
    { label: "Network size", value: "100+ ", note: "operators & lessors" },
    { label: "On-time launches", value: "98%", note: "past 12 months" },
  ];

  return (
    <section id="metrics" aria-labelledby="metrics-heading" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 id="metrics-heading" className="text-3xl font-bold text-gray-900">Metrics</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Operational proof at a glance.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {kpis.map(({ label, value, note }) => (
            <div key={label} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-gray-900">{value}</div>
              <div className="mt-1 text-sm font-medium text-gray-700">{label}</div>
              <div className="mt-1 text-xs text-gray-500">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
