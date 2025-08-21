// client/src/components/sections/CaseStudies.tsx
export default function CaseStudies() {
  const examples = [
    {
      title: "Summer Surge — European Leisure Airline",
      text: "We placed 2 narrowbodies to cover peak holiday demand, ensuring zero cancellations during a record season.",
    },
    {
      title: "Cargo Lift — Middle East Carrier",
      text: "Urgent freighter capacity arranged within 72 hours to support supply chain resilience during disruptions.",
    },
    {
      title: "Sports Charter — Major Football Club",
      text: "Widebody availability secured for a multi-city tour, meeting tight schedules with no operational delays.",
    },
  ];

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Example Scenarios</h2>
        <p className="mt-3 text-gray-600">
          A few snapshots of how ACMI capacity keeps airlines and organizations moving.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3 text-left">
          {examples.map((e) => (
            <div key={e.title} className="p-6 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-3 text-gray-600">{e.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/cases"
            className="inline-flex items-center px-5 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
