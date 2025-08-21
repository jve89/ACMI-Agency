import React from "react";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between p-8 md:p-16 gap-8">
        <div className="flex-1 text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ACMI capacity on demand. Fast and precise.
          </h1>
        </div>
        <div className="flex-1 max-w-md overflow-hidden rounded-xl shadow-lg">
          <img
            src="/vite.svg"
            alt="ACMI operations"
            className="w-full h-full object-contain p-8"
          />
        </div>
      </div>
    </section>
  );
}
