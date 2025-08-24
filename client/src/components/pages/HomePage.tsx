// client/src/components/pages/HomePage.tsx

import Hero from "../sections/Hero";
import WhatWeDo from "../sections/WhatWeDo";
import HowItWorks from "../sections/HowItWorks";
import WhoWeServe from "../sections/WhoWeServe";
import WhyChooseUs from "../sections/WhyChooseUs";
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

      <section id="what-we-do">
        <WhatWeDo />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="who-we-serve">
        <WhoWeServe />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="case-studies">
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
