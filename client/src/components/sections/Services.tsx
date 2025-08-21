// client/src/components/sections/Services.tsx

export default function Services() {
  const services = [
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
    <section id="services" aria-labelledby="services-heading" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900">
            Services
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            We match operators and lessors with the right ACMI and wet lease
            solutions—fast, flexible, and precise.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
