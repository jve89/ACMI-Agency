// client/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Creds from "./components/sections/Creds";
import HowItWorks from "./components/sections/HowItWorks";
import Sectors from "./components/sections/Sectors";
import Contact from "./components/sections/Contact";
import Success from "./components/sections/Success";

// --- Inline extra sections --- //
function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between p-8 md:p-16 gap-8">
        <div className="flex-1 text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ACMI capacity on demand. Fast and precise.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            We source aircraft, crew, maintenance, and insurance to keep your schedule flying. One brief. One contact. Options within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start justify-center">
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 font-semibold px-5 py-2.5 rounded hover:bg-indigo-50 transition text-center"
            >
              Submit request
            </a>
            <a
              href="#why-us"
              className="text-indigo-700 font-semibold hover:underline text-center"
            >
              Why us
            </a>
          </div>
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

function ValueProps() {
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

function ResponseTimeBadge() {
  return (
    <section aria-label="Response time" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="w-full rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-center">
          <span className="text-sm font-medium text-indigo-800">
            Average response to new requests: <strong>&lt; 1 hour</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="max-w-6xl mx-auto p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Why choose us
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Operator-first process</h3>
            <p className="text-gray-700">
              Briefs operators precisely to reduce back-and-forth and speed up confirmations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Transparent options</h3>
            <p className="text-gray-700">
              We present trade-offs clearly: aircraft, timing, costs, restrictions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">24/7 availability</h3>
            <p className="text-gray-700">
              Your schedule doesn’t sleep. Neither does the ops line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-4xl mx-auto p-8 md:p-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">About</h2>
        <p className="text-gray-700">
          Independent ACMI brokerage focused on rapid, precise solutions for airlines. Brief once. Get options fast.
        </p>
      </div>
    </section>
  );
}

function FooterInline() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 py-8 space-y-2 bg-white">
      <div>© {year} ACMI Agency. All rights reserved.</div>
      <div className="space-x-4">
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <ResponseTimeBadge />
        <WhyUs />
        <Creds />
        <HowItWorks />
        <Sectors />
        <Contact />
        <About />
      </main>
      <FooterInline />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
