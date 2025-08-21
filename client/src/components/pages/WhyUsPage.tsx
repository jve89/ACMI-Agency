import { Link } from "react-router-dom";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 hover:shadow-lg transition">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Why work with us</h1>
          <p className="mt-4 text-gray-700">
            Operator-first briefs, transparent trade-offs, and rapid confirmations. We remove back-and-forth so you get
            options fast.
          </p>

          <section className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 bg-gray-50">
              <h2 className="font-semibold text-gray-900 mb-2">Process</h2>
              <p className="text-gray-700">
                Structured intake, targeted operator list, SLA on first response.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-gray-50">
              <h2 className="font-semibold text-gray-900 mb-2">Transparency</h2>
              <p className="text-gray-700">
                Clear pros/cons: aircraft, costs, positioning, restrictions.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-gray-50">
              <h2 className="font-semibold text-gray-900 mb-2">Availability</h2>
              <p className="text-gray-700">24/7 contact window for ops and dispatch.</p>
            </div>
          </section>

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
