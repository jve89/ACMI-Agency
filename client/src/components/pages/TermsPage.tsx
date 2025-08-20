import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <main className="min-h-screen text-sm leading-6">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-gray-500">Last updated: 20 Aug 2025</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">1. Scope</h2>
          <p>
            These terms govern your use of the site and any ACMI brokerage services we provide.
          </p>

          <h2 className="text-xl font-semibold">2. No Offer</h2>
          <p>
            Website content is informational and not an offer or commitment. Proposals are subject to contract.
          </p>

          <h2 className="text-xl font-semibold">3. User Duties</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate information.</li>
            <li>Use the site lawfully and avoid disrupting services.</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Brokerage Engagements</h2>
          <p>
            Any engagement is governed by a separate written agreement that prevails over these terms.
          </p>

          <h2 className="text-xl font-semibold">5. Liability</h2>
          <p>
            To the maximum extent permitted by law, we disclaim warranties and limit liability for indirect or consequential loss.
          </p>

          <h2 className="text-xl font-semibold">6. IP</h2>
          <p>
            All content is owned by us or licensors. No rights are granted except as necessary to view the site.
          </p>

          <h2 className="text-xl font-semibold">7. Governing Law</h2>
          <p>Specify your jurisdiction once confirmed.</p>

          <h2 className="text-xl font-semibold">8. Changes</h2>
          <p>
            We may update these terms; continued use constitutes acceptance.
          </p>

          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p>
            Legal inquiries: <a className="underline" href="mailto:legal@example.com">legal@example.com</a>
          </p>

          <div className="mt-8">
            <Link to="/" className="underline">Back to home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
