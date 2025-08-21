// client/src/components/sections/ValueProps.tsx
export default function ValueProps() {
  const values = [
    {
      title: "Speed",
      text: "Shortlist within hours. Clear yes/no timelines.",
    },
    {
      title: "Flexibility",
      text: "Seasonal peaks, AOG cover, route launches.",
    },
    {
      title: "Precision",
      text: "Right aircraft, right terms, minimal disruption.",
    },
  ];

  return (
    <section id="value" aria-label="Key benefits" className="bg-indigo-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
