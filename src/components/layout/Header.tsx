"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileOpen((current) => !current);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/careers") {
      return (
        pathname.startsWith("/careers") || pathname.startsWith("/application")
      );
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Nexora home"
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-sm font-bold text-white shadow-sm">
              N
              <span
                className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400"
                aria-hidden="true"
              />
            </span>

            <span className="flex flex-col">
              <span className="text-base font-semibold leading-none tracking-tight text-slate-950">
                Nexora
              </span>

              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-400">
                Consulting
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              const isCareers = item.href === "/careers";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-slate-950"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  } ${isCareers && !active ? "text-violet-700" : ""}`}
                >
                  {item.label}

                  {active && (
                    <span
                      className={`absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full ${
                        isCareers ? "bg-violet-600" : "bg-indigo-600"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/careers/jobs"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              Open Roles
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              Talk to an Expert
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 lg:hidden"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav aria-label="Mobile navigation" className="space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href);

                const isCareers = item.href === "/careers";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                      active
                        ? isCareers
                          ? "bg-violet-50 text-violet-800"
                          : "bg-indigo-50 text-indigo-800"
                        : isCareers
                          ? "text-violet-700 hover:bg-violet-50"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isCareers ? "bg-violet-600" : "bg-indigo-600"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <Link
                href="/careers/jobs"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View Open Roles
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800"
              >
                Talk to an Expert
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Two ways to work with us
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold">
                    Solve a technology challenge
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    Explore solutions, work, and consulting expertise.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Build your career</p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    Explore teams, culture, and open opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
