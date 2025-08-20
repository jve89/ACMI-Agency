import { COPY } from '../copy/site';

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-lg font-semibold text-gray-900">{COPY.brand.name}</div>
      <nav className="hidden md:flex items-center gap-6 text-gray-700">
        {COPY.nav.map((n) => (
          <a key={n.href} href={n.href} className="hover:text-gray-900">
            {n.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Request Capacity
        </a>
      </nav>
    </header>
  );
}
