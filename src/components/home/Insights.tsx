import Link from "next/link";

const insights = [
  {
    category: "AI & Data",
    title: "Moving from AI experiments to reliable production systems",
    description:
      "What organizations should consider when turning prototypes into secure, scalable, maintainable AI products.",
    date: "September 2026",
    href: "/insights/ai-production-systems",
  },
  {
    category: "Cloud",
    title: "Modernization without rewriting everything",
    description:
      "A practical approach to reducing legacy technology risk while continuing to deliver business value.",
    date: "September 2026",
    href: "/insights/practical-cloud-modernization",
  },
  {
    category: "Engineering",
    title: "What makes a software platform easier to scale",
    description:
      "Architecture, developer experience, observability, and operational practices that support sustainable growth.",
    date: "August 2026",
    href: "/insights/scalable-software-platforms",
  },
];

export default function Insights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="flex flex-col gap-8 border-b border-neutral-200 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Insights
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Ideas for building better technology organizations.
            </h2>
          </div>

          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
          >
            View all insights

            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        {/* Articles */}
        <div className="grid border-b border-neutral-200 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <article
              key={insight.title}
              className={`group py-8 lg:py-10 ${
                index !== insights.length - 1
                  ? "border-b border-neutral-200 lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 0
                  ? "lg:pr-8"
                  : index === 1
                    ? "lg:px-8"
                    : "lg:pl-8"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-indigo-600">
                  {insight.category}
                </p>

                <p className="text-xs text-neutral-400">
                  {insight.date}
                </p>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-950">
                <Link
                  href={insight.href}
                  className="transition-colors group-hover:text-indigo-600"
                >
                  {insight.title}
                </Link>
              </h3>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {insight.description}
              </p>

              <Link
                href={insight.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
              >
                Read article

                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}