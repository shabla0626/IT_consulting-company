import Link from "next/link";

const focusAreas = [
  "Software Engineering",
  "AI & Data",
  "Cloud & DevOps",
  "Cybersecurity",
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-36 left-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl sm:left-1/4 sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-slate-400"
        >
          <Link
            href="/"
            className="inline-flex min-h-11 items-center transition hover:text-white focus:outline-none focus:ring-4 focus:ring-white/10"
          >
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <span className="text-slate-200">
            Contact
          </span>
        </nav>

        <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Talk to an Expert
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl sm:leading-[1.04] lg:text-6xl">
              Tell us what you&apos;re
              <span className="block text-slate-400">
                trying to solve.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Whether you&apos;re modernizing software, building a data or AI
              capability, improving cloud platforms, strengthening security, or
              working through a broader technology challenge, start with the
              problem.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              We&apos;ll use that context to understand where experienced
              multidisciplinary teams may be able to help.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <a
                href="#contact-form"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                Start a Conversation

                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <Link
                href="/work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10 sm:w-auto"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="min-w-0 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Areas We Can Discuss
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {focusAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex min-w-0 items-center justify-between gap-4 py-4 first:pt-0"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="shrink-0 text-xs font-semibold tracking-[0.16em] text-indigo-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 text-sm font-medium text-slate-200">
                      {area}
                    </span>
                  </div>

                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-sm font-semibold text-white">
                Not sure which category fits?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                That&apos;s fine. Describe the business or technology problem
                in your own words and we can start from there.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border-t border-white/10 pt-7 sm:mt-14 sm:grid-cols-3">
          <div className="pb-6 sm:pb-0 sm:pr-6">
            <p className="text-sm font-semibold text-white">
              Start with context
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tell us what is changing, blocked, or difficult today.
            </p>
          </div>

          <div className="border-t border-white/10 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-0">
            <p className="text-sm font-semibold text-white">
              Discuss the right approach
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              We can explore priorities, constraints, risks, and possible next
              steps.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <p className="text-sm font-semibold text-white">
              Build the right team
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Engagements can combine engineering, cloud, data, AI, security,
              design, and consulting expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}