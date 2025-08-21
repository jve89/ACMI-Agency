// client/src/components/pages/HomePage.tsx

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import HowItWorks from "../sections/HowItWorks";
import Sectors from "../sections/Sectors";
import CaseStudies from "../sections/CaseStudies";
import Metrics from "../sections/Metrics";
import Creds from "../sections/Creds";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="who-we-serve">
        <Sectors />
      </section>

      <section id="cases">
        <CaseStudies />
      </section>

      <section id="metrics">
        <Metrics />
      </section>

      <section id="creds">
        <Creds />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </main>
  );
}
