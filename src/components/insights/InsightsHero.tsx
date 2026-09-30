import Link from "next/link";

const themes = [
  "Software Engineering",
  "AI & Data",
  "Cloud & DevOps",
  "Cybersecurity",
];

export default function InsightsHero() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Insights
            </p>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl">
              Practical thinking
              <span className="block text-slate-500">
                about modern technology.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
              Perspectives on software engineering, cloud, data, AI,
              cybersecurity, architecture, and the decisions involved in
              building technology that can work in production.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              The current articles are representative editorial content for
              website development. Production publication should use verified
              authorship, dates, and approved company perspectives.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#featured-insights"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/10 sm:w-auto"
              >
                Explore Insights
                <span className="ml-2" aria-hidden="true">
                  ↓
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-950/5 sm:w-auto"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Topics We Explore
              </p>

              <div className="mt-6 divide-y divide-slate-200">
                {themes.map((theme, index) => (
                  <div
                    key={theme}
                    className="grid grid-cols-[42px_1fr] items-center gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[52px_1fr]"
                  >
                    <span className="text-xs font-semibold tracking-[0.16em] text-indigo-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold text-slate-900 sm:text-lg">
                      {theme}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-7 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Practical
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Focus on decisions teams can apply to real technology work.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-slate-950">
                Technical
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Connect business context with architecture and engineering
                reality.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm font-semibold text-slate-950">
                Production-minded
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Look beyond prototypes toward operation, ownership, and change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}