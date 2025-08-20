export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto p-8 md:p-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h1>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="font-semibold">What is ACMI?</h2>
            <p className="text-gray-700">Aircraft, Crew, Maintenance, Insurance. The operator flies under your schedule; you handle fuel, fees, and payload.</p>
          </div>
          <div>
            <h2 className="font-semibold">How fast can you respond?</h2>
            <p className="text-gray-700">Initial options typically within hours, depending on route and dates.</p>
          </div>
          <div>
            <h2 className="font-semibold">What do you need from us?</h2>
            <p className="text-gray-700">City pairs, dates, block hours estimate, aircraft preferences, any constraints.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/#contact" className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Submit a request
          </a>
        </div>
      </main>
    </div>
  );
}
