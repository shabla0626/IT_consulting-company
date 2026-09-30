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
        className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-44 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-slate-400"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <span className="text-slate-200">Contact</span>
        </nav>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Talk to an Expert
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
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

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Start a Conversation
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Areas We Can Discuss
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {focusAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center justify-between gap-5 py-4 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-[0.16em] text-indigo-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {area}
                    </span>
                  </div>

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-indigo-400"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
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

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">
              Start with context
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Tell us what is changing, blocked, or difficult today.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Discuss the right approach
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              We can explore priorities, constraints, risks, and possible next
              steps.
            </p>
          </div>

          <div>
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