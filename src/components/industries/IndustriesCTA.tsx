import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-700 px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 sm:text-sm">
                Start With Your Context
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Every technology challenge
                <span className="block text-indigo-100">
                  sits inside a wider environment.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100">
                Tell us what you are trying to change, what systems and
                constraints surround the problem, and where your organization
                needs the most help.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-7">
              <p className="text-sm font-semibold text-white">
                Start the conversation around:
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "The business or technology challenge",
                  "The existing systems and constraints",
                  "The capabilities or outcomes you need next",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-indigo-100"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-800 transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  Talk to an Expert
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}