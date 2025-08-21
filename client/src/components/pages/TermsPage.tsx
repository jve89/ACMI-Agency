import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition">
          <h1 className="text-3xl font-semibold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-gray-500">Last updated: 20 Aug 2025</p>

          <section className="mt-8 space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Scope</h2>
              <p>These terms govern your use of the site and any ACMI brokerage services we provide.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. No Offer</h2>
              <p>Website content is informational and not an offer or commitment. Proposals are subject to contract.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. User Duties</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate information.</li>
                <li>Use the site lawfully and avoid disrupting services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Brokerage Engagements</h2>
              <p>Any engagement is governed by a separate written agreement that prevails over these terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Liability</h2>
              <p>
                To the maximum extent permitted by law, we disclaim warranties and limit liability for indirect or
                consequential loss.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">6. IP</h2>
              <p>
                All content is owned by us or licensors. No rights are granted except as necessary to view the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">7. Governing Law</h2>
              <p>Specify your jurisdiction once confirmed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">8. Changes</h2>
              <p>We may update these terms; continued use constitutes acceptance.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">9. Contact</h2>
              <p>
                Legal inquiries:{" "}
                <a className="text-indigo-600 underline" href="mailto:legal@example.com">
                  legal@example.com
                </a>
              </p>
            </div>
          </section>
        </div>

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
