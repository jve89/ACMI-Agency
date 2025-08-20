// client/src/components/sections/Success.tsx
export default function Success() {
  return (
    <section className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col justify-between">
      {/* Centered main content */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <img
            src="/vite.svg"
            alt="ACMI Agency Logo"
            className="h-16 mx-auto mb-4"
          />

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Request Submitted Successfully
          </h1>
          <p className="mb-4">
            Thank you for your interest. Our team will review your request and
            contact you shortly to discuss ACMI solutions tailored to your
            needs.
            <br />
            <br />
            <strong>Note:</strong> Please check your Spam/Junk or Promotions
            folders if you don’t see our email in your main inbox.
          </p>

          <a
            href="/"
            className="inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 space-y-2">
        <div>© 2025 ACMI Agency. All rights reserved.</div>
        <div>
          <a href="/privacy" className="hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </footer>
    </section>
  );
}
