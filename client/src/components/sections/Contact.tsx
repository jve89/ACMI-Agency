// client/src/components/sections/Contact.tsx
import LeadForm from "../forms/LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          We’ll respond within 24 hours.
        </p>

        <div className="mt-10 text-left">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
