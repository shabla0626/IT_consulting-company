import Link from "next/link";

const insights = [
  {
    number: "01",
    category: "AI & Data",
    title: "Designing AI systems for production, not just prototypes.",
    description:
      "A practical perspective on what changes when AI moves from experimentation into real applications: data quality, evaluation, observability, reliability, security, and operational ownership.",
    href: "/insights/ai-production-systems",
    accent: "text-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "02",
    category: "Cloud & DevOps",
    title: "Practical cloud modernization without unnecessary complexity.",
    description:
      "A look at how organizations can modernize applications, infrastructure, delivery practices, and operational capabilities without treating every problem as a full rewrite.",
    href: "/insights/practical-cloud-modernization",
    accent: "text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    number: "03",
    category: "Software Engineering",
    title: "Building software platforms that can evolve with the business.",
    description:
      "Thoughts on architecture, APIs, platform engineering, developer experience, quality, and the engineering decisions that help software remain adaptable over time.",
    href: "/insights/scalable-software-platforms",
    accent: "text-cyan-700",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

export default function FeaturedInsights() {
  return (
    <section
      id="featured-insights"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Featured Insights
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Thinking shaped by
              <span className="block text-slate-500">
                real technology decisions.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Our Insights section is designed to share practical perspectives
              on architecture, engineering, modernization, AI, cloud, security,
              and the trade-offs involved in building technology that lasts.
            </p>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-6 text-amber-900">
                <span className="font-semibold">Editorial note:</span>{" "}
                These articles are currently representative content. Publication
                dates, author details, and final article copy should only be
                added when real company content is ready.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {insights.map((insight) => (
              <Link
                key={insight.href}
                href={insight.href}
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-950/5"
              >
                <div className="grid sm:grid-cols-[96px_1fr_auto]">
                  <div
                    className={`${insight.soft} flex items-start justify-center px-5 py-8`}
                  >
                    <span
                      className={`text-sm font-semibold tracking-[0.18em] ${insight.accent}`}
                    >
                      {insight.number}
                    </span>
                  </div>

                  <div className="px-7 py-7 sm:px-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.16em] ${insight.accent}`}
                      >
                        {insight.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span className="text-xs font-medium text-slate-500">
                        Perspective
                      </span>
                    </div>

                    <h3 className="mt-4 max-w-2xl text-xl font-semibold tracking-tight text-slate-950">
                      {insight.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {insight.description}
                    </p>

                    <p className={`mt-5 text-sm font-semibold ${insight.accent}`}>
                      Read perspective
                    </p>
                  </div>

                  <div className="flex items-center px-7 pb-7 sm:pb-0">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border ${insight.border} bg-white text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}