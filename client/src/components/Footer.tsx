// client/src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500 space-y-4">
        <div>© {year} ACMI Agency. All rights reserved.</div>
        <div className="flex justify-center gap-6">
          <Link to="/privacy" className="hover:text-gray-700 hover:underline">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-gray-700 hover:underline">
            Terms
          </Link>
          <a href="/#contact" className="hover:text-gray-700 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
