import Link from "next/link";

const insights = [
  {
    number: "01",
    topic: "AI & Data",
    title: "What it takes to move AI systems into production.",
    description:
      "A practical perspective on use cases, trusted data, evaluation, software integration, observability, and operational ownership.",
    href: "/insights/ai-production-systems",
    accent: "text-violet-700",
    surface: "bg-violet-50",
    border: "border-violet-100",
    dot: "bg-violet-500",
  },
  {
    number: "02",
    topic: "Cloud & DevOps",
    title: "A practical approach to cloud modernization.",
    description:
      "Modernization works best when infrastructure, applications, delivery practices, reliability, and team ownership evolve together.",
    href: "/insights/practical-cloud-modernization",
    accent: "text-sky-700",
    surface: "bg-sky-50",
    border: "border-sky-100",
    dot: "bg-sky-500",
  },
  {
    number: "03",
    topic: "Software Engineering",
    title: "Designing software platforms that can continue to scale.",
    description:
      "Architecture, APIs, quality, observability, developer experience, and ownership all influence how effectively software can evolve.",
    href: "/insights/scalable-software-platforms",
    accent: "text-cyan-700",
    surface: "bg-cyan-50",
    border: "border-cyan-100",
    dot: "bg-cyan-500",
  },
];

export default function FeaturedInsights() {
  return (
    <section
      id="featured-insights"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Featured Perspectives
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Go deeper into
              <span className="block text-slate-500">
                the decisions behind the technology.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Long-form perspectives designed around practical engineering,
            architecture, delivery, and production considerations rather than
            trend commentary alone.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {insights.map((insight) => (
            <article
              key={insight.href}
              className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div
                className={`border-b ${insight.border} ${insight.surface} p-6 sm:p-7`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${insight.accent}`}
                  >
                    {insight.number}
                  </span>

                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${insight.dot}`}
                    aria-hidden="true"
                  />
                </div>

                <p
                  className={`mt-8 text-xs font-semibold uppercase tracking-[0.16em] ${insight.accent}`}
                >
                  {insight.topic}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Representative Editorial
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {insight.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {insight.description}
                </p>

                <Link
                  href={insight.href}
                  className={`mt-auto inline-flex min-h-11 items-center pt-7 text-sm font-semibold ${insight.accent}`}
                >
                  Read perspective
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          Development note: these are representative editorial pieces. Add
          verified authors, publication dates, and approved content before
          presenting them as published company articles.
        </p>
      </div>
    </section>
  );
}