// client/src/components/sections/Hero.tsx

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between p-8 md:p-16 gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            ACMI and wet lease capacity on demand.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Need an aircraft fast? Brief once. We return matching options within{" "}
            <span className="font-medium text-gray-900">24 hours</span>.
          </p>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              SLA: ≤24h response
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Confidentiality by default
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Request Capacity
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 max-w-md overflow-hidden rounded-xl shadow-lg">
          <img
            src="/og-image.png"
            alt="Aircraft capacity dashboard illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
