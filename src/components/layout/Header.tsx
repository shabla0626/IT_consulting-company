"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "@/components/shared/ArrowIcon";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

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

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const mobileToggleRef =
    useRef<HTMLButtonElement>(null);

  function toggleMobileMenu() {
    setMobileOpen(
      (current) => !current,
    );
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function closeMobileMenuAndReturnFocus() {
    setMobileOpen(false);

    window.requestAnimationFrame(() => {
      mobileToggleRef.current?.focus();
    });
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/careers") {
      return (
        pathname === "/careers" ||
        pathname.startsWith(
          "/careers/",
        ) ||
        pathname === "/application" ||
        pathname.startsWith(
          "/application/",
        )
      );
    }

    return (
      pathname === href ||
      pathname.startsWith(
        `${href}/`,
      )
    );
  }

  /*
   * Escape closes an open mobile navigation
   * and returns keyboard focus to the
   * menu toggle.
   *
   * The state update happens inside the
   * keyboard event callback rather than
   * synchronously inside the effect.
   */
  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    function handleEscape(
      event: globalThis.KeyboardEvent,
    ) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();

      setMobileOpen(false);

      window.requestAnimationFrame(
        () => {
          mobileToggleRef.current?.focus();
        },
      );
    }

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [mobileOpen]);

  /*
   * Native button Enter/Space behavior
   * already works.
   *
   * This additionally handles Escape if
   * focus remains on the menu button.
   */
  function handleToggleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
  ) {
    if (
      event.key === "Escape" &&
      mobileOpen
    ) {
      event.preventDefault();

      closeMobileMenuAndReturnFocus();
    }
  }

  const jobsActive =
    pathname === "/careers/jobs" ||
    pathname.startsWith(
      "/careers/jobs/",
    ) ||
    pathname === "/application" ||
    pathname.startsWith(
      "/application/",
    );

  const contactActive =
    pathname === "/contact" ||
    pathname.startsWith(
      "/contact/",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            aria-label="CoVera home"
            onClick={closeMobileMenu}
            className="group flex min-h-11 shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100"
          >
            <Image
              src="/covera-logo.svg"
              alt=""
              width={180}
              height={48}
              priority
              className="h-12 w-[180px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map(
              (item) => {
                const active =
                  isActive(
                    item.href,
                  );

                const isCareers =
                  item.href ===
                  "/careers";

                return (
                  <Link
                    key={
                      item.href
                    }
                    href={
                      item.href
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`relative inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 ${
                      active
                        ? "text-slate-950"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    } ${
                      isCareers &&
                      !active
                        ? "text-violet-700"
                        : ""
                    }`}
                  >
                    {
                      item.label
                    }

                    {active && (
                      <span
                        className={`absolute inset-x-3 -bottom-[15px] h-0.5 rounded-full ${
                          isCareers
                            ? "bg-violet-600"
                            : "bg-indigo-600"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              },
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/careers/jobs"
              aria-current={
                jobsActive
                  ? "page"
                  : undefined
              }
              className={`inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${
                jobsActive
                  ? "bg-violet-50 text-violet-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Open Roles
            </Link>

            <Link
              href="/contact"
              aria-current={
                contactActive
                  ? "page"
                  : undefined
              }
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
            >
              Talk to an Expert

              <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile navigation toggle */}
          <button
            ref={
              mobileToggleRef
            }
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={
              mobileOpen
            }
            aria-controls="mobile-navigation"
            onClick={
              toggleMobileMenu
            }
            onKeyDown={
              handleToggleKeyDown
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 lg:hidden"
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
            <nav
              aria-label="Mobile navigation"
              className="space-y-1"
            >
              {navigation.map(
                (item) => {
                  const active =
                    isActive(
                      item.href,
                    );

                  const isCareers =
                    item.href ===
                    "/careers";

                  return (
                    <Link
                      key={
                        item.href
                      }
                      href={
                        item.href
                      }
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={
                        closeMobileMenu
                      }
                      className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 ${
                        active
                          ? isCareers
                            ? "bg-violet-50 text-violet-800"
                            : "bg-indigo-50 text-indigo-800"
                          : isCareers
                            ? "text-violet-700 hover:bg-violet-50"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <span>
                        {
                          item.label
                        }
                      </span>

                      {active && (
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            isCareers
                              ? "bg-violet-600"
                              : "bg-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  );
                },
              )}
            </nav>

            {/* Mobile actions */}
            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <Link
                href="/careers/jobs"
                aria-current={
                  jobsActive
                    ? "page"
                    : undefined
                }
                onClick={
                  closeMobileMenu
                }
                className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${
                  jobsActive
                    ? "border-violet-200 bg-violet-50 text-violet-800"
                    : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                }`}
              >
                View Open Roles
              </Link>

              <Link
                href="/contact"
                aria-current={
                  contactActive
                    ? "page"
                    : undefined
                }
                onClick={
                  closeMobileMenu
                }
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
              >
                Talk to an Expert

                <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Journey guidance */}
            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Two ways to work
                with us
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold">
                    Solve a
                    technology
                    challenge
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    Explore
                    solutions,
                    work, and
                    consulting
                    expertise.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Build your
                    career
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    Explore teams,
                    culture, and
                    open
                    opportunities.
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