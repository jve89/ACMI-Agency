// client/src/components/sections/HowItWorks.tsx
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    { title: "1. Request", text: "Send your capacity brief or aircraft availability window." },
    { title: "2. Match", text: "We shortlist the right ACMI operators and present clear trade-offs." },
    { title: "3. Secure", text: "We coordinate terms and launch operations with minimal disruption." },
  ];

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading + SLA badge */}
        <div className="flex flex-col items-center text-center">
          <h2 id="how-heading" className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Three steps from brief to aircraft online.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-600" aria-hidden="true" />
            First options typically within 2 hours
          </div>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Learn more */}
        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
