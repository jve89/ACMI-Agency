// client/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Creds from "./components/sections/Creds";
import HowItWorks from "./components/sections/HowItWorks";
import Sectors from "./components/sections/Sectors";
import Contact from "./components/sections/Contact";
import Success from "./components/sections/Success";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              ACMI & Wet Lease Solutions — Aircraft + Crew, On Demand.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We connect airlines, tour operators, and organizations with trusted ACMI operators worldwide.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                Request Capacity
              </a>
            </div>
          </div>
        </section>
        <Creds />
        <HowItWorks />
        <Sectors />
        <Contact />
      </main>
      <footer className="text-center text-sm text-gray-600 py-8">
        © {new Date().getFullYear()} Your Company OÜ
      </footer>
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
