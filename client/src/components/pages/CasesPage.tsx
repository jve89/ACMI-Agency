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
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 hover:shadow-lg transition">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Case Studies
          </h1>
          <p className="mt-2 text-gray-600">
            Representative scenarios. Swap with named cases as they are completed.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {examples.map((e) => (
              <article
                key={e.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900">{e.title}</h2>
                <p className="mt-3 text-gray-700">{e.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
