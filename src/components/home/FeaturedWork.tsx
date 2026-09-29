import Link from "next/link";

const caseStudies = [
  {
    category: "Cloud Modernization",
    title: "Rebuilding a legacy platform for faster releases and better scale.",
    description:
      "A cloud-native transformation focused on deployment speed, reliability, and operational simplicity.",
    result: "Deployment time reduced from hours to minutes",
    href: "/work/cloud-modernization-platform",
  },
  {
    category: "AI & Data",
    title: "Turning fragmented data into a practical decision platform.",
    description:
      "A modern data foundation with analytics and AI workflows designed around real operational needs.",
    result: "Faster access to trusted business insights",
    href: "/work/data-ai-platform",
  },
  {
    category: "Digital Product",
    title: "Designing and launching a new customer-facing digital experience.",
    description:
      "Product strategy, UX, engineering, and platform delivery brought together in one cross-functional team.",
    result: "New digital channel launched with scalable architecture",
    href: "/work/digital-product-platform",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">
              Featured Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Technology work measured by business outcomes.
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            View all work
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        <div className="divide-y divide-white/10">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={caseStudy.title}
              href={caseStudy.href}
              className="group grid gap-8 py-10 lg:grid-cols-[90px_1fr_0.7fr_auto] lg:items-start lg:py-12"
            >
              <span className="text-sm font-medium text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="text-sm font-medium text-indigo-400">
                  {caseStudy.category}
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-indigo-300 sm:text-3xl">
                  {caseStudy.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
                  {caseStudy.description}
                </p>
              </div>

              <div className="lg:pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
                  Outcome
                </p>

                <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-300">
                  {caseStudy.result}
                </p>
              </div>

              <span
                className="text-2xl text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}