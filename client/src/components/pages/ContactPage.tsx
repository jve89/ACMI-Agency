// client/src/components/pages/ContactPage.tsx
import { Link } from "react-router-dom";
import LeadForm from "../forms/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 hover:shadow-lg transition">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Send your brief here. We acknowledge within <span className="font-medium">24 hours</span>.
            Confidentiality applies by default.
          </p>

          {/* Form */}
          <div className="mt-8">
            <LeadForm />
          </div>

          {/* Direct channels / info */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <h2 className="text-sm font-semibold text-gray-900">Service level</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>First response ≤ 24h</li>
                <li>Clear yes/no timelines</li>
                <li>Operator-first briefs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <h2 className="text-sm font-semibold text-gray-900">Confidentiality</h2>
              <p className="mt-3 text-gray-700">
                Briefs are treated as confidential. Shared only with shortlisted operators as required.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <h2 className="text-sm font-semibold text-gray-900">Direct contact</h2>
              <div className="mt-3 space-y-2 text-gray-700">
                {/* TODO: replace with your real email/phone when ready */}
                <p>
                  Email:{" "}
                  <a href="mailto:contact@example.com" className="text-indigo-700 hover:underline">
                    contact@example.com
                  </a>
                </p>
                {/* <p>Phone: <a href="tel:+0000000000" className="text-indigo-700 hover:underline">+00 000 0000</a></p> */}
                <p className="text-xs text-gray-500">Phone line will appear here once live.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
