import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    label: "Representative Case Study",
    category: "Cloud Modernization",
    title: "Modernizing a cloud platform for stronger delivery foundations",
    description:
      "An illustrative example of how a legacy platform could be modernized through cloud architecture, platform engineering, infrastructure automation, and improved delivery practices.",
    areas: [
      "Cloud Architecture",
      "Platform Engineering",
      "DevOps",
      "Reliability",
    ],
    href: "/work/cloud-modernization-platform",
    accent: "text-sky-300",
    accentBg: "bg-sky-500/10",
  },
  {
    number: "02",
    label: "Representative Case Study",
    category: "AI & Data",
    title: "Building the foundations for production-ready data and AI",
    description:
      "An illustrative engagement showing how data foundations, AI architecture, evaluation, software engineering, and operations can come together around a practical use case.",
    areas: [
      "Data Platforms",
      "Applied AI",
      "Evaluation",
      "AI Operations",
    ],
    href: "/work/data-ai-platform",
    accent: "text-violet-300",
    accentBg: "bg-violet-500/10",
  },
  {
    number: "03",
    label: "Representative Case Study",
    category: "Digital Product",
    title: "Creating a scalable foundation for a modern digital product",
    description:
      "An illustrative example of combining product thinking, software engineering, APIs, cloud foundations, and delivery practices to support a growing digital platform.",
    areas: [
      "Product Engineering",
      "APIs",
      "Cloud",
      "Engineering Quality",
    ],
    href: "/work/digital-product-platform",
    accent: "text-cyan-300",
    accentBg: "bg-cyan-500/10",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
              Featured Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              See how complex problems
              <span className="block text-slate-400">
                can become practical delivery.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-slate-300">
              Our case-study experience is designed to show how technology
              challenges can be approached across architecture, engineering,
              cloud, data, AI, security, and delivery.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              The examples shown here are representative development content,
              not claims about named clients or verified commercial outcomes.
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div className="mt-12 space-y-5 sm:mt-14 lg:mt-16">
          {caseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <article className="grid min-w-0 lg:grid-cols-[220px_1fr_auto] lg:items-stretch">
                {/* Identity */}
                <div
                  className={`border-b border-white/10 p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8 ${study.accentBg}`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] sm:text-sm ${study.accent}`}
                  >
                    {study.number}
                  </span>

                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {study.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {study.category}
                  </p>
                </div>

                {/* Main content */}
                <div className="min-w-0 p-6 sm:p-7 lg:p-8 xl:p-10">
                  <h3 className="max-w-3xl text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                    {study.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {study.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.areas.map((area) => (
                      <span
                        key={area}
                        className="max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center border-t border-white/10 px-6 py-5 sm:px-7 lg:border-l lg:border-t-0 lg:px-8">
                  <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:flex-col lg:justify-center">
                    <span className="text-sm font-semibold text-white">
                      View case study
                    </span>

                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-slate-950"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom route */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Explore the full Work section for deeper examples of challenges,
            architecture decisions, delivery approaches, and illustrative
            outcomes.
          </p>

          <Link
            href="/work"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Explore All Work
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}