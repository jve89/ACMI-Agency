import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white text-sm leading-6">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition">
          <h1 className="text-3xl font-semibold text-gray-900">Request received</h1>
          <p className="mt-4 text-gray-600">
            We logged your brief. Per SLA you will get a response within{" "}
            <span className="font-medium text-gray-900">24 hours</span>.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-sm font-semibold text-gray-900">What happens next</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
              <li>We validate scope and timelines.</li>
              <li>We contact operators and qualify availability.</li>
              <li>We reply with options or a clear no-go and reasons.</li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Confidentiality applies by default. We never share your brief.
          </p>
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
