import { Link } from "react-router-dom";

export default function CasesPage() {
  const examples = [
    {
      title: "Summer Surge — European Leisure Airline",
      detail:
        "Placed narrowbody capacity to cover peak holiday demand with on-time start and stable ops.",
    },
    {
      title: "Cargo Lift — Middle East Carrier",
      detail:
        "Arranged ad-hoc freighter capacity within 72 hours during network disruption.",
    },
    {
      title: "Sports Charter — Major Club",
      detail:
        "Secured multi-city tour lift meeting tight slots and security requirements.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
        <p className="mt-2 text-gray-600">
          Representative scenarios. Swap with named cases as they are completed.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {examples.map((e) => (
            <article key={e.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{e.title}</h2>
              <p className="mt-3 text-gray-600">{e.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/" className="text-indigo-700 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
