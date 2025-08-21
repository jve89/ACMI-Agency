// client/src/components/pages/HomePage.tsx

import Hero from "../sections/Hero";
import ValueProps from "../sections/ValueProps";
import HowItWorks from "../sections/HowItWorks";
import Sectors from "../sections/Sectors";
import CaseStudies from "../sections/CaseStudies";
import Creds from "../sections/Creds";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>

      <section id="value">
        <ValueProps />
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

      <section id="creds">
        <Creds />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </main>
  );
}
