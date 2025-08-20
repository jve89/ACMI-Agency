// client/src/App.tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Creds from "./components/sections/Creds";
import HowItWorks from "./components/sections/HowItWorks";
import Sectors from "./components/sections/Sectors";
import Contact from "./components/sections/Contact";
import Success from "./components/sections/Success";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";

// --- Inline homepage sections --- //
function Hero() {
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
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}

// --- Dedicated pages for extra depth --- //
function WhyUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 md:p-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Why Us</h1>
        <p className="text-gray-700 mb-4">
          More than a broker — we act as an extension of your ops team. From first brief to final signature, you know exactly where things stand.
        </p>
        <p className="text-gray-700">
          We cut noise, clarify trade-offs, and keep both airlines and operators aligned. That’s why our partners stick.
        </p>
      </main>
      <FooterInline />
    </div>
  );
}

function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 md:p-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <p className="text-gray-700 mb-4">Coming soon: answers to the most common questions.</p>
      </main>
      <FooterInline />
    </div>
  );
}

// --- Homepage layout --- //
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
        <Route path="/why" element={<WhyUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
