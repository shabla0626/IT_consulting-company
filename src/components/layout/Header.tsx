"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Company", href: "/company" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-950"
        >
          Nexora
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-neutral-500 ${
                item.name === "Careers"
                  ? "text-indigo-600"
                  : "text-neutral-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 bg-neutral-950 transition-all ${
                mobileMenuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute bottom-1 left-0 block h-0.5 w-5 bg-neutral-950 transition-all ${
                mobileMenuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-neutral-100 py-4 text-lg font-medium ${
                  item.name === "Careers"
                    ? "text-indigo-600"
                    : "text-neutral-900"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
            >
              Talk to an Expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}