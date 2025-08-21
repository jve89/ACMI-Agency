import React from "react";

export default function ValueProps() {
  return (
    <section aria-label="Key benefits" className="bg-indigo-50">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4 p-6 md:p-10">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-2">Speed</h3>
          <p className="text-gray-700">Shortlist within hours. Clear yes/no timelines.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-2">Flexibility</h3>
          <p className="text-gray-700">Seasonal peaks, AOG cover, route launches.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-2">Precision</h3>
          <p className="text-gray-700">Right aircraft, right terms, minimal disruption.</p>
        </div>
      </div>
    </section>
  );
}
