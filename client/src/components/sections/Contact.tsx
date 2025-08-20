// client/src/components/sections/Contact.tsx
import LeadForm from "../forms/LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600">We’ll respond within 24 hours.</p>

        <div className="mt-8 text-left">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
