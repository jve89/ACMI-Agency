// client/src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 py-8 space-y-2 bg-white">
      <div>© {year} ACMI Agency. All rights reserved.</div>
      <div className="space-x-4">
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <a href="/#contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}
