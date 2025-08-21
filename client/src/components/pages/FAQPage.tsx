import { Link } from "react-router-dom";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 hover:shadow-lg transition">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h1>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">What is ACMI?</h2>
              <p className="text-gray-700 mt-2">
                Aircraft, Crew, Maintenance, Insurance. The operator flies under your schedule; you handle fuel, fees, and payload.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">How fast can you respond?</h2>
              <p className="text-gray-700 mt-2">
                Initial options typically within hours, depending on route and dates.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">What do you need from us?</h2>
              <p className="text-gray-700 mt-2">
                City pairs, dates, block hours estimate, aircraft preferences, any constraints.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Submit a request
            </a>
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
