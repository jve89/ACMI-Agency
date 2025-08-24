// client/src/components/sections/WhyChooseUs.tsx
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-labelledby="why-choose-us-heading" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl text-center px-6">
        <h2
          id="why-choose-us-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Why Choose Us
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We provide unmatched expertise, reliability, and results.
        </p>

        {/* Learn More button */}
        <div className="mt-12">
          <Link
            to="/why-choose-us"
            className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
