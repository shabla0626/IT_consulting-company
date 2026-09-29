import Link from "next/link";

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Insights
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Practical thinking for
              <span className="block text-indigo-600">
                complex technology decisions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Perspectives on software engineering, cloud, data, AI, security,
              architecture, and the decisions organizations face when building
              and modernizing technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#featured-insights"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Insights
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              What We Write About
            </p>

            <div className="mt-7 space-y-5">
              {[
                "Software & Platform Engineering",
                "AI & Data Systems",
                "Cloud & DevOps",
                "Cybersecurity",
                "Architecture & Modernization",
                "Engineering Leadership",
              ].map((topic, index) => (
                <div
                  key={topic}
                  className="flex items-center gap-4 border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-medium text-slate-800">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}