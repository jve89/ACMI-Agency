import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuKey = "solutions" | "results" | "about" | null;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const hideTimer = useRef<number | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function scheduleHide() {
    clearHide();
    hideTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }
  function clearHide() {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }
  function open(key: MenuKey) {
    clearHide();
    setOpenMenu(key);
  }

  const Anchor = ({
    href,
    children,
    className = "",
  }: {
    href: string;
    children: string;
    className?: string;
  }) => (
    <a
      href={href}
      className={`block px-3 py-2 rounded hover:bg-gray-50 transition-colors ${className}`}
      onClick={() => setOpenMenu(null)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/vanerkelaviationgroup.svg"
            alt="Van Erkel Aviation Group"
            className="h-12 md:h-14 xl:h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6 text-gray-700">
          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => open("solutions")}
            onMouseLeave={scheduleHide}
            data-desktop-menu
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-gray-900"
              aria-haspopup="true"
              aria-expanded={openMenu === "solutions"}
              onClick={() =>
                setOpenMenu(openMenu === "solutions" ? null : "solutions")
              }
              onFocus={() => open("solutions")}
            >
              Solutions
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {openMenu === "solutions" && (
              <div
                className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg p-2"
                onMouseEnter={clearHide}
                onMouseLeave={scheduleHide}
              >
                <Anchor href="/#what-we-do">What We Do</Anchor>
                <Anchor href="/#how-it-works">How It Works</Anchor>
                <Anchor href="/#who-we-serve">Who We Serve</Anchor>
              </div>
            )}
          </div>

          {/* Results */}
          <div
            className="relative"
            onMouseEnter={() => open("results")}
            onMouseLeave={scheduleHide}
            data-desktop-menu
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-gray-900"
              aria-haspopup="true"
              aria-expanded={openMenu === "results"}
              onClick={() =>
                setOpenMenu(openMenu === "results" ? null : "results")
              }
              onFocus={() => open("results")}
            >
              Results
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {openMenu === "results" && (
              <div
                className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg p-2"
                onMouseEnter={clearHide}
                onMouseLeave={scheduleHide}
              >
                <Anchor href="/#case-studies">Case Studies</Anchor>
                <Anchor href="/#metrics">Metrics</Anchor>
              </div>
            )}
          </div>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => open("about")}
            onMouseLeave={scheduleHide}
            data-desktop-menu
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-gray-900"
              aria-haspopup="true"
              aria-expanded={openMenu === "about"}
              onClick={() =>
                setOpenMenu(openMenu === "about" ? null : "about")
              }
              onFocus={() => open("about")}
            >
              About
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {openMenu === "about" && (
              <div
                className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg p-2"
                onMouseEnter={clearHide}
                onMouseLeave={scheduleHide}
              >
                <a
                  href="#why-choose-us"
                  className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenMenu(null)}
                >
                  Why Choose Us
                </a>
                <Link
                  to="/faq"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                  onClick={() => setOpenMenu(null)}
                >
                  FAQ
                </Link>
                <Link
                  to="/privacy"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                  onClick={() => setOpenMenu(null)}
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                  onClick={() => setOpenMenu(null)}
                >
                  Terms
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                  onClick={() => setOpenMenu(null)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <a
            href="/#contact"
            className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Request Capacity
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="xl:hidden p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={`xl:hidden border-t border-gray-100 overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-white text-gray-800">
          {/* Solutions */}
          <details className="group">
            <summary className="flex items-center justify-between py-2 cursor-pointer select-none">
              <span className="font-medium">Solutions</span>
              <svg
                className="w-4 h-4 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </summary>
            <nav className="pl-2 pb-2 flex flex-col gap-2">
              <a href="/#what-we-do" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                What We Do
              </a>
              <a href="/#how-it-works" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                How It Works
              </a>
              <a href="/#who-we-serve" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Who We Serve
              </a>
            </nav>
          </details>

          {/* Results */}
          <details className="group">
            <summary className="flex items-center justify-between py-2 cursor-pointer select-none">
              <span className="font-medium">Results</span>
              <svg
                className="w-4 h-4 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </summary>
            <nav className="pl-2 pb-2 flex flex-col gap-2">
              <a href="/#case-studies" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Case Studies
              </a>
              <a href="/#metrics" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Metrics
              </a>
            </nav>
          </details>

          {/* About */}
          <details className="group">
            <summary className="flex items-center justify-between py-2 cursor-pointer select-none">
              <span className="font-medium">About</span>
              <svg
                className="w-4 h-4 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </summary>
            <nav className="pl-2 pb-2 flex flex-col gap-2">
              <a
                href="#why-choose-us"
                onClick={() => setMobileOpen(false)}
                className="py-1 hover:text-gray-900"
              >
                Why Choose Us
              </a>
              <a href="/#faq" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                FAQ
              </a>
              <a href="/#privacy" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Privacy
              </a>
              <a href="/#terms" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Terms
              </a>
              <a href="/#contact" onClick={() => setMobileOpen(false)} className="py-1 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </details>

          {/* CTA */}
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 text-white font-medium px-4 py-2 hover:bg-indigo-700 transition-colors"
          >
            Request Capacity
          </a>
        </div>
      </div>
    </header>
  );
}
