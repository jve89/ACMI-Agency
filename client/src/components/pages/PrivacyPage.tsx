import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-sm leading-6">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-gray-500">Last updated: 20 Aug 2025</p>

        <section className="mt-8 space-y-4">
          <p>
            This policy explains how we collect, use, and protect personal data for our ACMI services and website.
          </p>

          <h2 className="text-xl font-semibold">1. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: name, company, email, phone.</li>
            <li>Operational info: fleet needs, timeframes, routes.</li>
            <li>Site analytics: pages viewed, referrers, device data.</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to inquiries and provide proposals.</li>
            <li>Maintain business records and comply with law.</li>
            <li>Improve site performance and security.</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Legal Bases</h2>
          <p>
            We process data under legitimate interests, contract necessity, and consent where required.
          </p>

          <h2 className="text-xl font-semibold">4. Sharing</h2>
          <p>
            We may share data with vetted vendors and ACMI partners under NDAs or contracts. No sale of personal data.
          </p>

          <h2 className="text-xl font-semibold">5. Retention</h2>
          <p>
            Keep data only as long as necessary for the stated purposes or as required by law.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access, rectification, erasure, restriction, objection, portability.</li>
            <li>Withdraw consent where processing relies on consent.</li>
            <li>Lodge a complaint with your local supervisory authority.</li>
          </ul>

          <h2 className="text-xl font-semibold">7. Security</h2>
          <p>
            We use technical and organizational measures to protect data in transit and at rest.
          </p>

          <h2 className="text-xl font-semibold">8. International Transfers</h2>
          <p>
            Where transfers occur, we use appropriate safeguards such as SCCs.
          </p>

          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p>
            For privacy requests: <a className="underline" href="mailto:privacy@example.com">privacy@example.com</a>
          </p>

          <div className="mt-8">
            <Link to="/" className="underline">Back to home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
