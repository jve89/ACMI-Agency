export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto p-8 md:p-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Why work with us</h1>
        <p className="mt-4 text-gray-700">
          Operator-first briefs, transparent trade-offs, and rapid confirmations. We remove back-and-forth so you get options fast.
        </p>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-2">Process</h2>
            <p className="text-gray-700">Structured intake, targeted operator list, SLA on first response.</p>
          </div>
          <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-2">Transparency</h2>
            <p className="text-gray-700">Clear pros/cons: aircraft, costs, positioning, restrictions.</p>
          </div>
          <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-2">Availability</h2>
            <p className="text-gray-700">24/7 contact window for ops and dispatch.</p>
          </div>
        </section>

        <div className="mt-10">
          <a href="/#contact" className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Submit a request
          </a>
        </div>
      </main>
    </div>
  );
}
