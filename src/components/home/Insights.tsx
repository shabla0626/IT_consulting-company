import Link from "next/link";

const insights = [
  {
    category: "AI & Data",
    title: "From AI experiments to production systems",
    description:
      "A practical perspective on moving AI initiatives beyond prototypes by focusing on data, evaluation, architecture, operations, and security.",
    href: "/insights/ai-production-systems",
    accent: "text-violet-700",
    soft: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    category: "Cloud",
    title: "Practical cloud modernization without unnecessary disruption",
    description:
      "How organizations can modernize cloud foundations while balancing platform strategy, architecture, delivery, reliability, and ownership.",
    href: "/insights/practical-cloud-modernization",
    accent: "text-sky-700",
    soft: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    category: "Software Engineering",
    title: "Building software platforms that can scale with the business",
    description:
      "A perspective on architecture, APIs, platform engineering, developer experience, observability, and long-term ownership.",
    href: "/insights/scalable-software-platforms",
    accent: "text-cyan-700",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 sm:text-sm">
              Insights
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Practical thinking for
              <span className="block text-slate-500">
                complex technology decisions.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              Explore long-form perspectives on software engineering, cloud,
              data, AI, architecture, delivery, and the decisions that shape
              modern technology systems.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {insights.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className={`group flex min-w-0 flex-col rounded-3xl border ${article.border} ${article.soft} p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-7 lg:p-8`}
            >
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${article.accent}`}
                >
                  {article.category}
                </p>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {article.description}
                </p>
              </div>

              <div className="mt-auto pt-7">
                <div className="flex items-center justify-between border-t border-slate-900/5 pt-5">
                  <span className={`text-sm font-semibold ${article.accent}`}>
                    Read perspective
                  </span>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-white text-slate-700 shadow-sm transition group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Editorial note + route */}
        <div className="mt-12 grid gap-8 rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 sm:mt-14 sm:p-9 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Editorial Context
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Current articles are representative editorial content used to
              establish the Insights experience. Production content should be
              replaced with real published perspectives, verified authorship,
              and appropriate publication information.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore All Insights
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}